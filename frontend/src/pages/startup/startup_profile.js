import React from "react";
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Chip, 
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
} from '@mui/material';
import {
  Rocket as RocketIcon,
  LocationOn as LocationOnIcon,
  Flag as FlagIcon,
  Diamond as DiamondIcon,
  Public as PublicIcon,
  CompareArrows as CompareArrowsIcon,
  Lightbulb as LightbulbIcon,
  Speed as SpeedIcon,
  Bookmark as BookmarkIcon,
  People as PeopleIcon,
  MonetizationOn as MonetizationOnIcon,
  Work as WorkIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Share as ShareIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Close as CloseIcon,
  Language as WebsiteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { TextField } from '@mui/material';

const StartupProfile = () => {
  const [openContact, setOpenContact] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editedProfile, setEditedProfile] = React.useState({
    name: "",
    tagline: "",
    industry: []
  });

  const handleContactClick = () => {
    setOpenContact(true);
  };

  const handleClose = () => {
    setOpenContact(false);
  };

  const handleEditClick = () => {
    setEditedProfile({
      name: startupData.companyProfile.name,
      tagline: startupData.companyProfile.tagline,
      industry: startupData.companyProfile.industry
    });
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleEditSave = () => {
    startupData.companyProfile.name = editedProfile.name;
    startupData.companyProfile.tagline = editedProfile.tagline;
    startupData.companyProfile.industry = editedProfile.industry;
    setOpenEdit(false);
  };

  const startupData = {
    companyProfile: {
      name: "TechStart Innovation",
      logo: "/path-to-logo.png",
      tagline: "Revolutionizing Healthcare Through AI",
      founded: "2022",
      location: "San Francisco, CA",
      website: "www.techstart.ai",
      size: "15-30 employees",
      industry: ["Healthcare", "Artificial Intelligence", "SaaS"],
      funding: "$2.5M",
      stage: "Series A"
    },
    vision: "To revolutionize healthcare through AI-driven solutions",
    mission: "To empower healthcare providers with cutting-edge AI technology that enhances patient care and improves medical outcomes",
    founded: "2022",
    location: "San Francisco, CA",
    industry: ["AI", "Machine Learning", "SaaS"],
    funding: {
      total: "$2.5M",
      stages: [
        { stage: "Seed", amount: "$500K", date: "2022" },
        { stage: "Series A", amount: "$2M", date: "2023" }
      ]
    },
    metrics: {
      employees: "15-30",
      revenue: "$1M ARR",
      customers: "50+"
    },
    description: "TechStart Innovation is pioneering advanced AI solutions for enterprise customers, focusing on automation and efficiency improvements.",
    team: [
      { name: "Jane Doe", position: "CEO & Founder", image: "/path-to-image.jpg", linkedin: "#" },
      { name: "John Smith", position: "CTO", image: "/path-to-image.jpg", linkedin: "#" },
      { name: "Sarah Johnson", position: "Head of Product", image: "/path-to-image.jpg", linkedin: "#" }
    ],
    products: {
      main: "AI-Based Healthcare Diagnostic Platform",
      description: "Our flagship platform provides real-time diagnostic assistance and patient monitoring for hospitals",
      keyFeatures: [
        "Real-time AI diagnostics",
        "Patient monitoring system",
        "Predictive analytics",
        "Integration with existing EMR systems"
      ]
    },
    goals: {
      shortTerm: [
        "Expand to 50 hospitals by Q4 2024",
        "Achieve HIPAA certification",
        "Launch mobile application"
      ],
      longTerm: [
        "Expand to 5 international markets by 2025",
        "Develop specialized AI models for rare diseases",
        "Establish research partnerships with leading medical institutions"
      ]
    },
    timeline: [
      { year: "2022", event: "Company Founded", details: "Initial seed funding of $2M" },
      { year: "2023 Q2", event: "Product Launch", details: "Beta release with 5 partner hospitals" },
      { year: "2023 Q4", event: "Series A", details: "Secured $10M in funding" },
      { year: "2024 Q1", event: "Market Expansion", details: "Launched in 3 new states" }
    ],
    values: [
      {
        title: "Innovation",
        description: "Pushing boundaries in healthcare technology"
      },
      {
        title: "Transparency",
        description: "Open communication with stakeholders"
      },
      {
        title: "Patient-Centric",
        description: "Focusing on improving patient outcomes"
      },
      {
        title: "Excellence",
        description: "Maintaining highest quality standards"
      }
    ],
    geography: {
      current: ["California", "New York", "Texas"],
      planned: ["Canada", "UK", "Germany"],
      headquarters: "San Francisco, CA"
    },
    competitiveAdvantages: [
      {
        advantage: "First to market with real-time AI diagnostics",
        description: "Leading the industry with 99.9% accuracy rate"
      },
      {
        advantage: "Proprietary machine learning algorithms",
        description: "Trained on over 1M medical cases"
      },
      {
        advantage: "Seamless EMR integration",
        description: "Works with all major EMR systems"
      }
    ]
  };

  const contactInfo = {
    email: "contact@techstart.ai",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/company/techstart",
    website: "www.techstart.ai"
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Company Profile Header */}
      <Card 
        sx={{ 
          mb: 6,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: '100%',
          minHeight: '400px'
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src={startupData.companyProfile.logo}
                    sx={{ 
                      width: 150,
                      height: 150,
                      mr: 4,
                      boxShadow: 2,
                      border: '4px solid white'
                    }}
                  />
                  <Box>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                      {startupData.companyProfile.name}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                      {startupData.companyProfile.tagline}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                      {startupData.companyProfile.industry.map((tag) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          color="primary" 
                          size="medium"
                          sx={{ 
                            borderRadius: '8px',
                            px: 1
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
                
                <IconButton 
                  onClick={handleEditClick}
                  sx={{ ml: 2 }}
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
              </Box>

              {/* Company Details Grid */}
              <Grid container spacing={2} sx={{ mt: 3 }}>
                {[
                  { label: 'Founded', value: startupData.companyProfile.founded },
                  { label: 'Employees', value: startupData.companyProfile.size },
                  { label: 'Funding', value: startupData.companyProfile.funding },
                  { label: 'Stage', value: startupData.companyProfile.stage },
                  { label: 'Location', value: startupData.companyProfile.location },
                  { label: 'Website', value: startupData.companyProfile.website }
                ].map((item) => (
                  <Grid item xs={6} sm={4} md={2} key={item.label}>
                    <Box 
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100px',
                        textAlign: 'center'
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        fontWeight="bold"
                        color="primary"
                        sx={{ 
                          mb: 1,
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                          lineHeight: 1.2,
                          wordBreak: 'break-word'
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="text.secondary"
                        sx={{ 
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Action Buttons */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  justifyContent: 'flex-end',
                  mt: 4
                }}
              >
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<EmailIcon />}
                  onClick={handleContactClick}
                  sx={{ 
                    px: 3, 
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Contact
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  sx={{ 
                    px: 3, 
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Follow
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary"
                  startIcon={<ShareIcon />}
                  sx={{ 
                    px: 3, 
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Share
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Vision & Mission Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="primary">
          Vision & Mission
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <RocketIcon sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">Vision</Typography>
                </Box>
                <Typography variant="h6">{startupData.vision}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', bgcolor: 'secondary.main', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <FlagIcon sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">Mission</Typography>
                </Box>
                <Typography variant="h6">{startupData.mission}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Products/Services Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Our Product
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {startupData.products.main}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {startupData.products.description}
            </Typography>
            <Grid container spacing={2}>
              {startupData.products.keyFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      color: 'white',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      p: 2
                    }}
                  >
                    <LightbulbIcon sx={{ mr: 2 }} />
                    <Typography variant="h6">
                      {feature}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Goals & Timeline Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="primary">
            Goals & Objectives
          </Typography>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom color="secondary">
                  Short-term Goals
                </Typography>
                <List>
                  {startupData.goals.shortTerm.map((goal, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <SpeedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={goal} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography variant="h5" gutterBottom color="secondary">
                  Long-term Goals
                </Typography>
                <List>
                  {startupData.goals.longTerm.map((goal, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <FlagIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={goal} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="primary">
            Company Timeline
          </Typography>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Timeline>
                {startupData.timeline.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      {index < startupData.timeline.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="span">
                        {item.event}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.year} - {item.details}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Core Values Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Core Values
        </Typography>
        <Grid container spacing={3}>
          {startupData.values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent>
                  <DiamondIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Geographical Reach Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Our Reach
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom color="secondary">
                  Current Markets
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {startupData.geography.current.map((market) => (
                    <Chip 
                      key={market}
                      icon={<PublicIcon />}
                      label={market}
                      color="primary"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom color="secondary">
                  Planned Expansion
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {startupData.geography.planned.map((market) => (
                    <Chip 
                      key={market}
                      icon={<PublicIcon />}
                      label={market}
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Competitive Advantages Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Competitive Advantages
        </Typography>
        <Grid container spacing={3}>
          {startupData.competitiveAdvantages.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: 'primary.light',
                  color: 'white'
                }}
              >
                <CardContent>
                  <CompareArrowsIcon sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    {item.advantage}
                  </Typography>
                  <Typography>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Dialog */}
      <Dialog 
        open={openContact} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          bgcolor: 'primary.main',
          color: 'white'
        }}>
          Contact Information
          <IconButton 
            onClick={handleClose}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Email"
                secondary={
                  <Link 
                    href={`mailto:${contactInfo.email}`}
                    color="primary"
                    underline="hover"
                  >
                    {contactInfo.email}
                  </Link>
                }
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Phone"
                secondary={
                  <Link 
                    href={`tel:${contactInfo.phone}`}
                    color="primary"
                    underline="hover"
                  >
                    {contactInfo.phone}
                  </Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <WhatsAppIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="WhatsApp"
                secondary={
                  <Link 
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    color="primary"
                    underline="hover"
                    target="_blank"
                  >
                    {contactInfo.whatsapp}
                  </Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LinkedInIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="LinkedIn"
                secondary={
                  <Link 
                    href={contactInfo.linkedin}
                    color="primary"
                    underline="hover"
                    target="_blank"
                  >
                    Company Profile
                  </Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <WebsiteIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Website"
                secondary={
                  <Link 
                    href={`https://${contactInfo.website}`}
                    color="primary"
                    underline="hover"
                    target="_blank"
                  >
                    {contactInfo.website}
                  </Link>
                }
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleClose} 
            variant="outlined"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog 
        open={openEdit} 
        onClose={handleEditClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          bgcolor: 'primary.main',
          color: 'white'
        }}>
          Edit Company Profile
          <IconButton 
            onClick={handleEditClose}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              label="Company Name"
              fullWidth
              value={editedProfile.name}
              onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
            />
            <TextField
              label="Tagline"
              fullWidth
              value={editedProfile.tagline}
              onChange={(e) => setEditedProfile({...editedProfile, tagline: e.target.value})}
            />
            <TextField
              label="Industry Tags (comma-separated)"
              fullWidth
              value={editedProfile.industry.join(', ')}
              onChange={(e) => setEditedProfile({
                ...editedProfile, 
                industry: e.target.value.split(',').map(tag => tag.trim())
              })}
              helperText="Enter tags separated by commas"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button 
            onClick={handleEditSave} 
            variant="contained" 
            color="primary"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default StartupProfile;
