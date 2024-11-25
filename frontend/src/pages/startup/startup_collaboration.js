import React, { useState } from "react";
import {
    Container,
    Grid,
    Card,
    Typography,
    Button,
    List,
    ListItem,
    Box,
    TextField,
    Chip,
    Avatar,
    Tab,
    Tabs,
    IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StarIcon from "@mui/icons-material/Star";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

    const collaborations = [
        {
            id: 1,
            name: "John Doe",
            role: "Mentor",
            status: "Active",
            project: "Business Strategy Development",
            avatar: "JD",
            progress: 75,
        },
        {
            id: 2,
            name: "Tech Ventures",
            role: "Investor",
            status: "In Discussion",
            project: "Series A Funding",
            avatar: "TV",
            progress: 40,
        },
        {
            id: 3,
            name: "Sarah Smith",
            role: "Startup Partner",
            status: "Active",
            project: "Market Expansion",
            avatar: "SS",
            progress: 60,
        },
    ];

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
                            <Tab label="Active Collaborations" />
                            <Tab label="Requests" />
                            <Tab label="Recent Activities" />
                        </Tabs>
                    </Box>

                    <Box sx={{ p: 3 }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {collaborations.map((collab) => (
                                <Card
                                    key={collab.id}
                                    sx={{
                                        p: 2,
                                        background: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar
                                            sx={{
                                                bgcolor: '#6366f1',
                                                width: 50,
                                                height: 50,
                                            }}
                                        >
                                            {collab.avatar}
                                        </Avatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography variant="h6">{collab.name}</Typography>
                                                <Chip
                                                    label={collab.status}
                                                    sx={{
                                                        background: collab.status === 'Active' 
                                                            ? 'linear-gradient(135deg, #34d399 0%, #10b981 100%)'
                                                            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {collab.project}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Button
                                                    startIcon={<ChatIcon />}
                                                    variant="outlined"
                                                    size="small"
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
                                                    Schedule
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Card>
                            ))}
                        </List>
                    </Box>
                </Card>

                {/* Quick Actions */}
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    {[
                        { icon: <SearchIcon />, label: "Find Collaborators", color: "#4f46e5" },
                        { icon: <ChatIcon />, label: "Messages", color: "#0ea5e9" },
                        { icon: <FileUploadIcon />, label: "Share Files", color: "#8b5cf6" },
                        { icon: <StarIcon />, label: "Feedback", color: "#f59e0b" },
                    ].map((action, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Button
                                fullWidth
                                startIcon={action.icon}
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
            </Container>
        </Box>
    );
};

export default StartupCollaboration;