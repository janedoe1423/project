import React, { useState } from "react";
import {
    Container,
    Grid,
    Card,
    Typography,
    Button,
    List,
    Box,
    Chip,
    Avatar,
    Tab,
    Tabs,
    IconButton,
    TextField,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StarIcon from "@mui/icons-material/Star";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const styles = {
    pageContainer: {
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        padding: "2rem 0",
    },
    gradientCard: {
        background: "linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.2s ease",
        "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
        },
    },
    statsCard: {
        padding: "1.5rem",
        background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
        color: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)",
    },
    actionButton: {
        borderRadius: "12px",
        textTransform: "none",
        padding: "10px 20px",
        fontWeight: 600,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
    },
    searchField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        },
    },
};

const StartupCollaboration = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [searchDialogOpen, setSearchDialogOpen] = useState(false);
    const [selectedCollaborator, setSelectedCollaborator] = useState(null);
    const [profileDialogOpen, setProfileDialogOpen] = useState(false);
    const [chatDialogOpen, setChatDialogOpen] = useState(false);
    const [currentChat, setCurrentChat] = useState(null);
    const [messageInput, setMessageInput] = useState('');

    // Add more state management
    const [collaboratorType, setCollaboratorType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Sample data for available collaborators
    const availableCollaborators = [
        {
            id: 1,
            name: "John Doe",
            type: "mentor",
            expertise: "Business Strategy",
            experience: "15+ years",
            currentRole: "CEO at TechCorp",
            bio: "Experienced mentor with focus on startup scaling",
            connections: 150,
            rating: 4.8,
            availability: "10 hrs/week",
        },
        {
            id: 2,
            name: "Tech Ventures Capital",
            type: "investor",
            investmentRange: "$500K - $2M",
            focusAreas: ["SaaS", "AI/ML", "Fintech"],
            pastInvestments: 12,
            bio: "Early-stage VC firm focusing on tech startups",
            portfolio: 8,
            successfulExits: 3,
        },
        // Add more sample collaborators...
    ];

    // Sample data for active collaborations
    const activeCollaborations = [
        {
            id: 1,
            name: "John Doe",
            type: "mentor",
            expertise: "Business Strategy",
            status: "Active",
            lastActivity: "2 hours ago",
            nextMeeting: "Tomorrow, 2 PM",
            avatar: "JD",
        },
        {
            id: 2,
            name: "Tech Ventures Capital",
            type: "investor",
            focusAreas: ["SaaS", "AI/ML"],
            status: "In Progress",
            lastActivity: "1 day ago",
            nextMeeting: "Next Week",
            avatar: "TV",
        },
        {
            id: 3,
            name: "InnoTech Solutions",
            type: "startup",
            industry: "FinTech",
            status: "Active",
            lastActivity: "5 hours ago",
            nextMeeting: "Friday, 3 PM",
            avatar: "IS",
        },
    ];

    // Sample chat data
    const chatMessages = [
        {
            id: 1,
            sender: "John Doe",
            message: "Hi, I'd love to mentor your startup!",
            timestamp: "10:30 AM",
            isSender: false,
        },
        {
            id: 2,
            sender: "You",
            message: "Thank you! I'm looking forward to learning from your experience.",
            timestamp: "10:32 AM",
            isSender: true,
        },
        // Add more messages...
    ];

    // Search Dialog Component
    const SearchCollaboratorsDialog = () => (
        <Dialog 
            open={searchDialogOpen} 
            onClose={() => setSearchDialogOpen(false)}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>Find Collaborators</DialogTitle>
            <DialogContent>
                <Box sx={{ mb: 3, mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Select
                                fullWidth
                                value={collaboratorType}
                                onChange={(e) => setCollaboratorType(e.target.value)}
                                sx={styles.searchField}
                            >
                                <MenuItem value="all">All Types</MenuItem>
                                <MenuItem value="mentor">Mentors</MenuItem>
                                <MenuItem value="investor">Investors</MenuItem>
                                <MenuItem value="startup">Startups</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                fullWidth
                                placeholder="Search by name, expertise, or industry..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                                }}
                                sx={styles.searchField}
                            />
                        </Grid>
                    </Grid>
                </Box>

                {/* Search Results */}
                <List>
                    {availableCollaborators.map((collaborator) => (
                        <Card key={collaborator.id} sx={{ mb: 2, p: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: '#6366f1', width: 50, height: 50 }}>
                                        {collaborator.name.charAt(0)}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6">{collaborator.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {collaborator.type === 'mentor' ? collaborator.expertise : collaborator.focusAreas?.join(', ')}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            setSelectedCollaborator(collaborator);
                                            setProfileDialogOpen(true);
                                        }}
                                        sx={{ mr: 1 }}
                                    >
                                        View Profile
                                    </Button>
                                    <Button
                                        variant="contained"
                                        startIcon={<PersonAddIcon />}
                                        sx={{
                                            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                                        }}
                                    >
                                        Connect
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );

    // Chat Dialog Component
    const ChatDialog = () => (
        <Dialog 
            open={chatDialogOpen} 
            onClose={() => setChatDialogOpen(false)}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle sx={{ px: 3, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#6366f1' }}>
                        {currentChat?.avatar || "U"}
                    </Avatar>
                    <Typography variant="h6">{currentChat?.name || "Chat"}</Typography>
                </Box>
                <IconButton onClick={() => setChatDialogOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 3, height: '60vh', display: 'flex', flexDirection: 'column' }}>
                {/* Messages Container */}
                <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
                    {chatMessages.map((msg) => (
                        <Box
                            key={msg.id}
                            sx={{
                                display: 'flex',
                                justifyContent: msg.isSender ? 'flex-end' : 'flex-start',
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: '70%',
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: msg.isSender ? '#6366f1' : '#f1f5f9',
                                    color: msg.isSender ? 'white' : 'inherit',
                                }}
                            >
                                {!msg.isSender && (
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        {msg.sender}
                                    </Typography>
                                )}
                                <Typography variant="body1">{msg.message}</Typography>
                                <Typography 
                                    variant="caption" 
                                    sx={{ 
                                        display: 'block', 
                                        textAlign: 'right',
                                        mt: 0.5,
                                        opacity: 0.8
                                    }}
                                >
                                    {msg.timestamp}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Message Input */}
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <IconButton size="small">
                        <AttachFileIcon />
                    </IconButton>
                    <TextField
                        fullWidth
                        placeholder="Type your message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{
                            borderRadius: 2,
                            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );

    // Profile Dialog Component
    const ProfileDialog = () => (
        <Dialog 
            open={profileDialogOpen} 
            onClose={() => setProfileDialogOpen(false)}
            maxWidth="md"
            fullWidth
        >
            {selectedCollaborator && (
                <>
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ bgcolor: '#6366f1', width: 60, height: 60 }}>
                                {selectedCollaborator.name.charAt(0)}
                            </Avatar>
                            <Box>
                                <Typography variant="h6">{selectedCollaborator.name}</Typography>
                                <Chip 
                                    label={selectedCollaborator.type.toUpperCase()} 
                                    size="small"
                                    sx={{ 
                                        background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                                        color: 'white'
                                    }} 
                                />
                            </Box>
                        </Box>
                        <IconButton onClick={() => setProfileDialogOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={3} sx={{ mt: 1 }}>
                            {selectedCollaborator.type === 'mentor' ? (
                                <>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle1" fontWeight={600}>Expertise</Typography>
                                        <Typography>{selectedCollaborator.expertise}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle1" fontWeight={600}>Experience</Typography>
                                        <Typography>{selectedCollaborator.experience}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" fontWeight={600}>Bio</Typography>
                                        <Typography>{selectedCollaborator.bio}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography variant="subtitle1" fontWeight={600}>Availability</Typography>
                                        <Typography>{selectedCollaborator.availability}</Typography>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle1" fontWeight={600}>Investment Range</Typography>
                                        <Typography>{selectedCollaborator.investmentRange}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle1" fontWeight={600}>Focus Areas</Typography>
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                            {selectedCollaborator.focusAreas?.map((area) => (
                                                <Chip key={area} label={area} size="small" />
                                            ))}
                                        </Box>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setChatDialogOpen(true)} startIcon={<ChatIcon />}>
                            Start Chat
                        </Button>
                        <Button 
                            variant="contained"
                            startIcon={<SendIcon />}
                            sx={{
                                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                            }}
                        >
                            Send Connection Request
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );

    // Render collaboration card based on type
    const renderCollaborationCard = (collab) => (
        <Card key={collab.id} sx={{ mb: 2, p: 3, ...styles.gradientCard }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Avatar 
                        sx={{ 
                            width: 60, 
                            height: 60,
                            bgcolor: collab.type === 'mentor' ? '#6366f1' : 
                                    collab.type === 'investor' ? '#8b5cf6' : '#06b6d4'
                        }}
                    >
                        {collab.avatar}
                    </Avatar>
                </Grid>
                <Grid item xs>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h6">{collab.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {collab.type === 'mentor' ? collab.expertise :
                                 collab.type === 'investor' ? collab.focusAreas?.join(', ') :
                                 collab.industry}
                            </Typography>
                        </Box>
                        <Chip 
                            label={collab.status} 
                            sx={{
                                background: collab.status === 'Active' 
                                    ? 'linear-gradient(135deg, #34d399 0%, #10b981 100%)'
                                    : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                color: 'white',
                            }}
                        />
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button
                            startIcon={<ChatIcon />}
                            variant="outlined"
                            size="small"
                            onClick={() => {
                                setCurrentChat(collab);
                                setChatDialogOpen(true);
                            }}
                            sx={styles.actionButton}
                        >
                            Message
                        </Button>
                        <Button
                            startIcon={<CalendarTodayIcon />}
                            variant="outlined"
                            size="small"
                            sx={styles.actionButton}
                        >
                            {collab.nextMeeting}
                        </Button>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
                            Last activity: {collab.lastActivity}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );

    // Modify the existing return statement to include new components
    return (
        <Box sx={styles.pageContainer}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e293b' }}>
                        Collaboration Hub
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton sx={{ backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
                            <NotificationsIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            startIcon={<PersonAddIcon />}
                            sx={{
                                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                                borderRadius: "12px",
                                textTransform: "none",
                            }}
                        >
                            New Collaboration
                        </Button>
                    </Box>
                </Box>

                {/* Stats Overview */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {[
                        { title: "Active Projects", count: "12", trend: "+2 this month" },
                        { title: "Total Collaborators", count: "48", trend: "+5 this week" },
                        { title: "Pending Requests", count: "8", trend: "3 new" },
                    ].map((stat, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={styles.statsCard}>
                                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                                    {stat.title}
                                </Typography>
                                <Typography variant="h3" sx={{ my: 1, fontWeight: 700 }}>
                                    {stat.count}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                    {stat.trend}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Main Content */}
                <Card sx={{ ...styles.gradientCard, p: 0 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 3 }}>
                        <Tabs 
                            value={activeTab} 
                            onChange={(e, newValue) => setActiveTab(newValue)}
                            sx={{ '& .MuiTab-root': { textTransform: 'none', fontWeight: 600 } }}
                        >
                            <Tab label="All Collaborations" />
                            <Tab label="Mentors" />
                            <Tab label="Investors" />
                            <Tab label="Startups" />
                        </Tabs>
                    </Box>

                    <Box sx={{ p: 3 }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {activeCollaborations
                                .filter(collab => 
                                    activeTab === 0 || 
                                    (activeTab === 1 && collab.type === 'mentor') ||
                                    (activeTab === 2 && collab.type === 'investor') ||
                                    (activeTab === 3 && collab.type === 'startup')
                                )
                                .map(renderCollaborationCard)}
                        </List>
                    </Box>
                </Card>

                {/* Quick Actions */}
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    {[
                        { 
                            icon: <PersonSearchIcon />, 
                            label: "Find Collaborators", 
                            color: "#4f46e5",
                            onClick: () => setSearchDialogOpen(true)
                        },
                        { icon: <ChatIcon />, label: "Messages", color: "#0ea5e9" },
                        { icon: <FileUploadIcon />, label: "Share Files", color: "#8b5cf6" },
                        { icon: <StarIcon />, label: "Feedback", color: "#f59e0b" },
                    ].map((action, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Button
                                fullWidth
                                startIcon={action.icon}
                                onClick={action.onClick}
                                sx={{
                                    ...styles.actionButton,
                                    color: action.color,
                                    backgroundColor: 'white',
                                    border: `1px solid ${action.color}20`,
                                    '&:hover': {
                                        backgroundColor: `${action.color}10`,
                                    }
                                }}
                            >
                                {action.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>

                {/* Add the new dialogs */}
                <SearchCollaboratorsDialog />
                <ChatDialog />
                <ProfileDialog />
            </Container>
        </Box>
    );
};

export default StartupCollaboration;