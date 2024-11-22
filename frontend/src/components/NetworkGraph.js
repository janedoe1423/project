import React, { useCallback } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { Card } from "react-bootstrap";

const NetworkGraph = () => {
    // Sample collaboration network data
    const graphData = {
        nodes: [
            { id: "main", name: "Dr. Sarah Johnson", group: 1, size: 20 },
            { id: "collab1", name: "Prof. Chen", group: 2, size: 15 },
            { id: "collab2", name: "Dr. Smith", group: 2, size: 15 },
            { id: "collab3", name: "Dr. Patel", group: 3, size: 15 },
            { id: "collab4", name: "Prof. Garcia", group: 2, size: 15 },
            { id: "inst1", name: "MIT", group: 4, size: 12 },
            { id: "inst2", name: "Stanford", group: 4, size: 12 },
            { id: "inst3", name: "Oxford", group: 4, size: 12 },
        ],
        links: [
            { source: "main", target: "collab1", value: 1 },
            { source: "main", target: "collab2", value: 1 },
            { source: "main", target: "collab3", value: 1 },
            { source: "main", target: "collab4", value: 1 },
            { source: "collab1", target: "inst1", value: 0.5 },
            { source: "collab2", target: "inst2", value: 0.5 },
            { source: "collab3", target: "inst3", value: 0.5 },
            { source: "collab4", target: "inst1", value: 0.5 },
        ]
    };

    // Custom node color based on group
    const getNodeColor = useCallback(node => {
        switch(node.group) {
            case 1: return '#FF6B6B'; // Main researcher
            case 2: return '#4ECDC4'; // Direct collaborators
            case 3: return '#45B7D1'; // Secondary collaborators
            case 4: return '#96CEB4'; // Institutions
            default: return '#666666';
        }
    }, []);

    return (
        <div className="network-graph-container">
            <ForceGraph2D
                graphData={graphData}
                nodeColor={getNodeColor}
                nodeLabel={node => node.name}
                linkWidth={link => link.value}
                nodeRelSize={6}
                width={800}
                height={400}
                backgroundColor="#ffffff"
                linkColor={() => "#cccccc"}
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.name;
                    const fontSize = node.size / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = ctx.measureText(label).width;
                    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fillRect(
                        node.x - bckgDimensions[0] / 2,
                        node.y - bckgDimensions[1] / 2,
                        ...bckgDimensions
                    );

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = getNodeColor(node);
                    ctx.fillText(label, node.x, node.y);
                }}
            />
        </div>
    );
};

export default NetworkGraph;