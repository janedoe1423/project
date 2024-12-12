import React, { createContext, useContext, useState } from 'react';

const IPRContext = createContext();

export const IPRProvider = ({ children }) => {
    const [allIPRs, setAllIPRs] = useState({
        granted: [],
        pending: [],
        rejected: [],
        submitted: [],
        requests: []
    });
    const [isIPRAccepted, setIsIPRAccepted] = useState(false);

    const addNewIPR = (iprData) => {
        setAllIPRs(prev => ({
            ...prev,
            pending: [...prev.pending, iprData]
        }));
    };

    const requestIPR = (iprData) => {
        setAllIPRs(prev => ({
            ...prev,
            requests: [...prev.requests, iprData]
        }));
    };

    const acceptIPRRequest = (iprId) => {
        setAllIPRs(prev => {
            const iprToAccept = prev.requests.find(ipr => ipr.id === iprId);
            if (!iprToAccept) return prev;

            const updatedIPR = {
                ...iprToAccept,
                iprStatus: 'accepted',
                lastUpdated: new Date().toISOString()
            };

            setIsIPRAccepted(true);

            return {
                ...prev,
                requests: prev.requests.filter(ipr => ipr.id !== iprId),
                submitted: [...prev.submitted, updatedIPR]
            };
        });
    };

    const updateIPRStatus = (iprId, newStatus, additionalData = {}) => {
        setAllIPRs(prev => {
            const allIPRsList = [...prev.granted, ...prev.pending, ...prev.rejected];
            const iprToUpdate = allIPRsList.find(ipr => ipr.id === iprId);
            
            if (!iprToUpdate) return prev;

            const oldStatus = iprToUpdate.status;
            const updatedOldStatusList = prev[oldStatus].filter(ipr => ipr.id !== iprId);

            const updatedIPR = {
                ...iprToUpdate,
                status: newStatus,
                lastUpdated: new Date().toISOString(),
                ...additionalData
            };

            return {
                ...prev,
                [oldStatus]: updatedOldStatusList,
                [newStatus]: [...prev[newStatus], updatedIPR]
            };
        });
    };

    const handleNewMilestones = (iprId, milestones) => {
        setAllIPRs(prev => {
            const allIPRsList = [...prev.granted, ...prev.pending, ...prev.rejected];
            const iprToUpdate = allIPRsList.find(ipr => ipr.id === iprId);
            
            if (!iprToUpdate) return prev;

            const updatedIPR = {
                ...iprToUpdate,
                ...milestones,
                lastUpdated: new Date().toISOString()
            };

            return {
                ...prev,
                [iprToUpdate.status]: prev[iprToUpdate.status].map(ipr => 
                    ipr.id === iprId ? updatedIPR : ipr
                )
            };
        });
    };

    const updateIPRStage = (iprId, stageIndex, rejectionData = null) => {
        setAllIPRs(prev => {
            const allIPRsList = [...prev.granted, ...prev.pending, ...prev.rejected];
            const iprToUpdate = allIPRsList.find(ipr => ipr.id === iprId);
            
            if (!iprToUpdate) return prev;

            const status = iprToUpdate.status;
            const updatedStages = [...iprToUpdate.progressStages];
            
            if (rejectionData) {
                // Handle rejection
                updatedStages[stageIndex] = {
                    ...updatedStages[stageIndex],
                    ...rejectionData,
                    current: false
                };
            } else {
                // Handle completion
                updatedStages[stageIndex] = {
                    ...updatedStages[stageIndex],
                    completed: true,
                    current: false,
                    completedDate: new Date().toISOString()
                };

                if (stageIndex < updatedStages.length - 1) {
                    updatedStages[stageIndex + 1] = {
                        ...updatedStages[stageIndex + 1],
                        current: true
                    };
                }
            }

            const updatedIPR = {
                ...iprToUpdate,
                progressStages: updatedStages,
                currentStage: rejectionData ? null : {
                    name: updatedStages[stageIndex + 1]?.name || updatedStages[stageIndex].name,
                    startDate: new Date().toISOString(),
                    estimatedCompletion: ''
                },
                lastUpdated: new Date().toISOString()
            };

            return {
                ...prev,
                [status]: prev[status].map(ipr => 
                    ipr.id === iprId ? updatedIPR : ipr
                )
            };
        });
    };

    const rejectIPRRequest = (iprId) => {
        setAllIPRs(prev => ({
            ...prev,
            requests: prev.requests.filter(ipr => ipr.id !== iprId)
        }));
    };

    return (
        <IPRContext.Provider value={{ 
            allIPRs, 
            addNewIPR, 
            updateIPRStatus,
            updateIPRStage,
            handleNewMilestones,
            acceptIPRRequest,
            requestIPR,
            rejectIPRRequest,
            isIPRAccepted
        }}>
            {children}
        </IPRContext.Provider>
    );
};

export const useIPR = () => useContext(IPRContext);