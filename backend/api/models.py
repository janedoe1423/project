from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, FileExtensionValidator, EmailValidator
import uuid

class Investor(AbstractUser):
    """Main Investor model containing basic and authentication information"""
    # Override the related_name for groups and user_permissions
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='investor_users',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='investor_users',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )
    
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    
    # Basic Profile Info
    email = models.EmailField(
        unique=True,
        validators=[EmailValidator()],
        db_index=True
    )
    profile_picture = models.ImageField(
        upload_to='investors/profile_pictures/',
        null=True, blank=True
    )
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=200, db_index=True)
    bio = models.TextField()
    phone = models.CharField(
        max_length=20,
        unique=True,
        db_index=True
    )
    
    # Social & Professional Links
    linkedin_url = models.URLField(
        blank=True,
        unique=True,
        null=True
    )
    twitter_handle = models.CharField(
        max_length=50,
        blank=True,
        unique=True,
        null=True
    )
    website = models.URLField(
        blank=True,
        unique=True,
        null=True
    )
    
    # Investment Stats
    total_investments = models.PositiveIntegerField(default=0)
    portfolio_companies = models.PositiveIntegerField(default=0)
    successful_exits = models.PositiveIntegerField(default=0)
    assets_under_management = models.DecimalField(
        max_digits=20,
        decimal_places=2,
        null=True,
        blank=True
    )
    
    # Legal & Compliance Documents
    pan_card = models.FileField(
        upload_to='investors/documents/pan/',
        validators=[FileExtensionValidator(['pdf', 'jpg', 'jpeg', 'png'])],
        unique=True
    )
    pan_number = models.CharField(
        max_length=10,
        unique=True,
        db_index=True
    )
    aadhar_card = models.FileField(
        upload_to='investors/documents/aadhar/',
        validators=[FileExtensionValidator(['pdf', 'jpg', 'jpeg', 'png'])],
        unique=True
    )
    aadhar_number = models.CharField(
        max_length=12,
        unique=True,
        db_index=True
    )
    is_verified = models.BooleanField(default=False)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Investor'
        verbose_name_plural = 'Investors'
        indexes = [
            models.Index(fields=['email', 'phone']),
            models.Index(fields=['company']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.get_full_name()} - {self.company}"

class InvestorExperience(models.Model):
    """Professional experience of the investor"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='experiences'
    )
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()
    
    class Meta:
        ordering = ['-start_date']
        indexes = [
            models.Index(fields=['investor', 'start_date']),
        ]
        constraints = [
            models.UniqueConstraint(
                fields=['investor', 'company', 'start_date'],
                name='unique_investor_company_experience'
            )
        ]

class InvestorEducation(models.Model):
    """Educational background of the investor"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='education'
    )
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    year = models.PositiveIntegerField()
    description = models.TextField(blank=True)
    
    class Meta:
        ordering = ['-year']
        constraints = [
            models.UniqueConstraint(
                fields=['investor', 'degree', 'school', 'year'],
                name='unique_investor_education'
            )
        ]

class InvestorAchievement(models.Model):
    """Professional achievements and recognition"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='achievements'
    )
    title = models.CharField(max_length=200)
    year = models.PositiveIntegerField()
    description = models.TextField()
    proof_document = models.FileField(
        upload_to='investors/achievements/',
        null=True,
        blank=True
    )
    
    class Meta:
        ordering = ['-year']
        indexes = [
            models.Index(fields=['investor', 'year']),
        ]

class InvestmentThesis(models.Model):
    """Investment preferences and strategy"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.OneToOneField(
        Investor,
        on_delete=models.CASCADE,
        related_name='investment_thesis'
    )
    
    INVESTMENT_STAGES = [
        ('SEED', 'Seed'),
        ('EARLY', 'Early Stage'),
        ('GROWTH', 'Growth Stage'),
        ('LATE', 'Late Stage'),
    ]
    
    preferred_stages = models.CharField(
        max_length=20,
        choices=INVESTMENT_STAGES,
        default='SEED'
    )
    min_ticket_size = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )
    max_ticket_size = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )
    geographic_focus = models.CharField(max_length=200)
    industry_focus = models.TextField()
    investment_criteria = models.TextField()
    
    class Meta:
        verbose_name_plural = 'Investment Theses'

class InvestorExpertise(models.Model):
    """Areas of expertise"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='expertise'
    )
    name = models.CharField(max_length=100)
    years_of_experience = models.PositiveIntegerField()
    description = models.TextField(blank=True)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['investor', 'name'],
                name='unique_investor_expertise'
            )
        ]

class InvestorComplianceDocument(models.Model):
    """Additional legal and compliance documents"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='compliance_documents'
    )
    
    DOCUMENT_TYPES = [
        ('TAX_RETURNS', 'Tax Returns'),
        ('BANK_STATEMENT', 'Bank Statement'),
        ('NET_WORTH', 'Net Worth Certificate'),
        ('ACCREDITED_PROOF', 'Accredited Investor Proof'),
        ('OTHER', 'Other Documents')
    ]
    
    document_type = models.CharField(max_length=20, choices=DOCUMENT_TYPES)
    file = models.FileField(
        upload_to='investors/compliance/',
        validators=[FileExtensionValidator(['pdf', 'jpg', 'jpeg', 'png'])]
    )
    uploaded_at = models.DateTimeField(auto_now_add=True)
    is_verified = models.BooleanField(default=False)
    verification_notes = models.TextField(blank=True)
    expiry_date = models.DateField(null=True, blank=True)
    
    class Meta:
        indexes = [
            models.Index(fields=['investor', 'document_type']),
            models.Index(fields=['uploaded_at']),
        ]
        constraints = [
            models.UniqueConstraint(
                fields=['investor', 'document_type'],
                name='unique_investor_document_type'
            )
        ]

class InvestorInvestmentPreference(models.Model):
    """Detailed investment preferences"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.OneToOneField(
        Investor,
        on_delete=models.CASCADE,
        related_name='investment_preferences'
    )
    preferred_sectors = models.JSONField(default=list)
    investment_philosophy = models.TextField()
    due_diligence_process = models.TextField()
    value_addition = models.TextField()
    co_investment_preferences = models.TextField(blank=True)
    exit_strategy = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class InvestorFinancialMetric(models.Model):
    """Model to store financial metrics for investors"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='financial_metrics'
    )
    date = models.DateField()  # X-axis for time series graphs
    cash_balance = models.DecimalField(max_digits=20, decimal_places=2)  # Y-axis
    gross_burn = models.DecimalField(max_digits=20, decimal_places=2)  # Y-axis
    ebitda = models.DecimalField(max_digits=20, decimal_places=2)  # Y-axis
    revenue = models.DecimalField(max_digits=20, decimal_places=2)  # Y-axis

    class Meta:
        unique_together = ('investor', 'date')
        ordering = ['-date']

class InvestorGrowthMetric(models.Model):
    """Model to store growth metrics for investors"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='growth_metrics'
    )
    date = models.DateField()  # X-axis for time series graphs
    new_customers = models.PositiveIntegerField()  # Y-axis
    churned_customers = models.PositiveIntegerField()  # Y-axis

    class Meta:
        unique_together = ('investor', 'date')
        ordering = ['-date']

class InvestorFundingRound(models.Model):
    """Model to store funding round details"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='funding_rounds'
    )
    round_type = models.CharField(max_length=50)  # X-axis for categorical graphs
    amount_raised = models.DecimalField(max_digits=20, decimal_places=2)  # Y-axis
    date = models.DateField()  # Optional X-axis for time series graphs

    class Meta:
        unique_together = ('investor', 'round_type', 'date')
        ordering = ['-date']

class InvestorTeamGrowth(models.Model):
    """Model to store team growth metrics"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE,
        related_name='team_growth'
    )
    date = models.DateField()  # X-axis for time series graphs
    department = models.CharField(max_length=100)  # X-axis for categorical graphs
    headcount = models.PositiveIntegerField()  # Y-axis

    class Meta:
        unique_together = ('investor', 'department', 'date')
        ordering = ['-date']

class InvestorPortfolio(models.Model):
    """Model to store overall portfolio metrics for an investor"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.OneToOneField(
        Investor,
        on_delete=models.CASCADE,
        related_name='portfolio'
    )
    total_value = models.DecimalField(max_digits=20, decimal_places=2)
    total_companies = models.PositiveIntegerField()
    active_investments = models.PositiveIntegerField()
    exits = models.PositiveIntegerField()
    irr = models.DecimalField(max_digits=5, decimal_places=2)  # Internal Rate of Return

    class Meta:
        verbose_name_plural = 'Investor Portfolios'

class InvestorCompany(models.Model):
    """Model to store details of companies in the investor's portfolio"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    portfolio = models.ForeignKey(
        InvestorPortfolio,
        on_delete=models.CASCADE,
        related_name='companies'
    )
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='investor/company_logos/')
    sector = models.CharField(max_length=100)
    stage = models.CharField(max_length=50)
    investment_date = models.DateField()
    investment_amount = models.DecimalField(max_digits=15, decimal_places=2)
    ownership = models.CharField(max_length=10)
    valuation = models.DecimalField(max_digits=20, decimal_places=2)
    status = models.CharField(max_length=50)

    class Meta:
        unique_together = ('portfolio', 'name')

class InvestorPerformanceMetric(models.Model):
    """Model to store performance metrics for each company in the investor's portfolio"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    company = models.OneToOneField(
        InvestorCompany,
        on_delete=models.CASCADE,
        related_name='performance_metric'
    )
    growth = models.DecimalField(max_digits=5, decimal_places=2)
    trend = models.CharField(max_length=10)
    revenue_change = models.CharField(max_length=10)
    user_growth = models.CharField(max_length=10)
    margin = models.CharField(max_length=10)

    class Meta:
        verbose_name_plural = 'Investor Performance Metrics'

from django.db import models
import uuid

class InvestmentCompany(models.Model):
    """Model to store details of companies in the investor's portfolio"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    investor = models.ForeignKey(
        'Investor',  # Assuming 'Investor' is the main investor model
        on_delete=models.CASCADE,
        related_name='investment_companies'
    )
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='investor/company_logos/')
    sector = models.CharField(max_length=100)
    description = models.TextField()
    current_value = models.DecimalField(max_digits=20, decimal_places=2)
    returns = models.DecimalField(max_digits=5, decimal_places=2)
    investment_date = models.DateField()

    # Additional Details
    founded_year = models.PositiveIntegerField()
    location = models.CharField(max_length=255)
    employee_count = models.PositiveIntegerField()
    funding_round = models.CharField(max_length=50)

    # Key Metrics
    market_share = models.DecimalField(max_digits=5, decimal_places=2)
    growth_rate = models.DecimalField(max_digits=5, decimal_places=2)
    customer_retention = models.DecimalField(max_digits=5, decimal_places=2)
    ltv = models.DecimalField(max_digits=10, decimal_places=2)  # Lifetime Value

    # Market Analysis
    market_position = models.CharField(max_length=100)
    target_market_size = models.DecimalField(max_digits=10, decimal_places=2)
    market_growth_rate = models.DecimalField(max_digits=5, decimal_places=2)
    geographic_presence = models.JSONField(default=list)

    class Meta:
        unique_together = ('investor', 'name')
        ordering = ['-investment_date']

    def __str__(self):
        return self.name

class PerformanceData(models.Model):
    """Model to store performance data for graphing"""
    company = models.ForeignKey(
        InvestmentCompany,
        on_delete=models.CASCADE,
        related_name='performance_data'
    )
    date = models.DateField()
    revenue = models.DecimalField(max_digits=10, decimal_places=2)
    projection = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.company.name} - {self.date}"

class RiskData(models.Model):
    """Model to store risk data for graphing"""
    company = models.ForeignKey(
        InvestmentCompany,
        on_delete=models.CASCADE,
        related_name='risk_data'
    )
    subject = models.CharField(max_length=100)
    value = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.company.name} - {self.subject}"

class Startup(models.Model):
    """Main Startup model containing basic company information"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    
    # Basic Info
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(upload_to='startups/logos/')
    engagement_level = models.CharField(
        max_length=50,
        choices=[
            ('EXPLORER', 'Explorer'),
            ('GROWTH', 'Growth'),
            ('SCALE', 'Scale'),
            ('MATURE', 'Mature'),
        ]
    )
    
    # Contact Info
    phone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    website = models.URLField(blank=True)
    founded_date = models.DateField()
    
    # Location
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100, default='India')
    
    # Key Metrics
    years_of_experience = models.PositiveIntegerField()
    team_size = models.PositiveIntegerField()
    revenue = models.DecimalField(max_digits=20, decimal_places=2)
    patents_filed = models.PositiveIntegerField(default=0)
    
    # About
    description = models.TextField()
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        indexes = [
            models.Index(fields=['name']),
            models.Index(fields=['engagement_level']),
            models.Index(fields=['city', 'state']),
        ]

    def __str__(self):
        return self.name

class StartupIndustryFocus(models.Model):
    """Industries that the startup focuses on"""
    startup = models.ForeignKey(
        Startup,
        on_delete=models.CASCADE,
        related_name='industry_focuses'
    )
    industry = models.CharField(max_length=100)
    
    class Meta:
        unique_together = ('startup', 'industry')

class StartupServiceArea(models.Model):
    """Services offered by the startup"""
    startup = models.ForeignKey(
        Startup,
        on_delete=models.CASCADE,
        related_name='service_areas'
    )
    service = models.CharField(max_length=100)
    
    class Meta:
        unique_together = ('startup', 'service')

class StartupStageValidation(models.Model):
    """Validation stages and progress"""
    startup = models.OneToOneField(
        Startup,
        on_delete=models.CASCADE,
        related_name='stage_validation'
    )
    current_stage = models.CharField(max_length=50)
    market_validation_status = models.CharField(max_length=50)
    product_validation_status = models.CharField(max_length=50)

class StartupAchievement(models.Model):
    """Awards and recognitions"""
    startup = models.ForeignKey(
        Startup,
        on_delete=models.CASCADE,
        related_name='achievements'
    )
    title = models.CharField(max_length=255)
    year = models.PositiveIntegerField()
    description = models.TextField(blank=True)
    proof_document = models.FileField(
        upload_to='startups/achievements/',
        null=True,
        blank=True
    )
    
    class Meta:
        ordering = ['-year']

class StartupMarketPresence(models.Model):
    """Market presence and reach"""
    startup = models.OneToOneField(
        Startup,
        on_delete=models.CASCADE,
        related_name='market_presence'
    )
    operations_type = models.CharField(max_length=100)  # e.g., "Pan India Operations"
    international_markets = models.PositiveIntegerField()
    active_customers = models.PositiveIntegerField()
    
    def __str__(self):
        return f"Market Presence for {self.startup.name}"

class StartupMetrics(models.Model):
    """Monthly metrics tracking for startups"""
    startup = models.ForeignKey(
        'Startup',
        on_delete=models.CASCADE,
        related_name='metrics'
    )
    date = models.DateField()
    
    # Growth Metrics
    growth_rate = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Monthly growth rate in percentage"
    )
    growth_rate_trend = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Change in growth rate vs previous month"
    )
    
    # Revenue Metrics
    monthly_revenue = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    revenue_trend = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Change in revenue vs previous month"
    )
    
    # User Metrics
    active_users = models.PositiveIntegerField()
    user_growth_trend = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Change in user base vs previous month"
    )
    
    # Market Metrics
    market_share = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Market share percentage"
    )
    market_share_trend = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Change in market share vs previous month"
    )
    
    class Meta:
        ordering = ['-date']
        unique_together = ['startup', 'date']
        indexes = [
            models.Index(fields=['startup', 'date']),
            models.Index(fields=['date']),
        ]
        
    def __str__(self):
        return f"{self.startup.name} - {self.date}"

class StartupMetricsSnapshot(models.Model):
    """Real-time/current metrics snapshot"""
    startup = models.OneToOneField(
        'Startup',
        on_delete=models.CASCADE,
        related_name='current_metrics'
    )
    last_updated = models.DateTimeField(auto_now=True)
    
    # Current Values
    current_growth_rate = models.DecimalField(
        max_digits=5,
        decimal_places=2
    )
    current_monthly_revenue = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    current_active_users = models.PositiveIntegerField()
    current_market_share = models.DecimalField(
        max_digits=5,
        decimal_places=2
    )
    
    def __str__(self):
        return f"{self.startup.name} - Current Metrics"

class StartupMetricTarget(models.Model):
    """Target/goal metrics for startups"""
    startup = models.ForeignKey(
        'Startup',
        on_delete=models.CASCADE,
        related_name='metric_targets'
    )
    target_date = models.DateField()
    
    METRIC_TYPES = [
        ('GROWTH', 'Growth Rate'),
        ('REVENUE', 'Revenue'),
        ('USERS', 'User Base'),
        ('MARKET', 'Market Share'),
    ]
    
    metric_type = models.CharField(
        max_length=20,
        choices=METRIC_TYPES
    )
    target_value = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    achieved = models.BooleanField(default=False)
    
    class Meta:
        unique_together = ['startup', 'metric_type', 'target_date']
        ordering = ['target_date']

class StartupMetricAlert(models.Model):
    """Alerts/notifications for metric changes"""
    startup = models.ForeignKey(
        'Startup',
        on_delete=models.CASCADE,
        related_name='metric_alerts'
    )
    
    ALERT_TYPES = [
        ('POSITIVE', 'Positive Change'),
        ('NEGATIVE', 'Negative Change'),
        ('TARGET_REACHED', 'Target Reached'),
        ('THRESHOLD_BREACH', 'Threshold Breach'),
    ]
    
    alert_type = models.CharField(
        max_length=20,
        choices=ALERT_TYPES
    )
    metric_type = models.CharField(
        max_length=20,
        choices=StartupMetricTarget.METRIC_TYPES
    )
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    acknowledged = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['startup', 'created_at']),
            models.Index(fields=['alert_type']),
        ]

class Scheme(models.Model):
    """Model for government and private schemes available to startups"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    SCHEME_TYPES = [
        ('education', 'Education'),
        ('industry', 'Industry'),
        ('financial', 'Financial'),
        ('innovation', 'Innovation'),
    ]

    CATEGORY_CHOICES = [
        ('Financial', 'Financial'),
        ('Subsidy', 'Subsidy'),
        ('Credit', 'Credit'),
        ('Innovation', 'Innovation'),
        ('Grant', 'Grant'),
        ('Training', 'Training'),
    ]

    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
        ('Coming Soon', 'Coming Soon'),
        ('Expired', 'Expired'),
    ]

    # Basic Information
    title = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(
        max_length=20,
        choices=SCHEME_TYPES
    )
    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Active'
    )
    
    # Dates
    start_date = models.DateField()
    deadline = models.DateField(null=True, blank=True)
    
    # Additional Details
    eligibility_criteria = models.TextField()
    benefits = models.TextField()
    application_process = models.TextField()
    required_documents = models.JSONField(default=list)
    
    # External Links
    external_link = models.URLField(blank=True)
    application_link = models.URLField(blank=True)
    
    # Meta Information
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['type']),
            models.Index(fields=['category']),
            models.Index(fields=['status']),
            models.Index(fields=['deadline']),
        ]

    def __str__(self):
        return self.title

class SchemeDetail(models.Model):
    """Detailed information about each scheme"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    scheme = models.OneToOneField(
        Scheme,
        on_delete=models.CASCADE,
        related_name='details'
    )
    
    # Detailed Content
    overview = models.TextField()
    objectives = models.JSONField(default=list)
    funding_amount = models.TextField()
    implementation_process = models.TextField()
    
    # Important Dates
    key_dates = models.JSONField(default=dict)
    
    # Additional Resources
    faqs = models.JSONField(default=list)
    guidelines_document = models.FileField(
        upload_to='schemes/guidelines/',
        null=True,
        blank=True
    )
    application_form = models.FileField(
        upload_to='schemes/applications/',
        null=True,
        blank=True
    )

    def __str__(self):
        return f"Details for {self.scheme.title}"

class SchemeEligibilityCriteria(models.Model):
    """Specific eligibility criteria for schemes"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    scheme = models.ForeignKey(
        Scheme,
        on_delete=models.CASCADE,
        related_name='eligibility_criteria_list'
    )
    criteria = models.CharField(max_length=255)
    description = models.TextField()
    is_mandatory = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Scheme eligibility criteria"

class SchemeApplication(models.Model):
    """Track applications made by startups for schemes"""
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    scheme = models.ForeignKey(
        Scheme,
        on_delete=models.CASCADE,
        related_name='applications'
    )
    startup = models.ForeignKey(
        'Startup',  # Assuming Startup model exists
        on_delete=models.CASCADE,
        related_name='scheme_applications'
    )
    
    STATUS_CHOICES = [
        ('DRAFT', 'Draft'),
        ('SUBMITTED', 'Submitted'),
        ('UNDER_REVIEW', 'Under Review'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
    ]
    
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='DRAFT'
    )
    submitted_at = models.DateTimeField(null=True, blank=True)
    documents = models.JSONField(default=dict)
    notes = models.TextField(blank=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['scheme', 'startup']
        indexes = [
            models.Index(fields=['status']),
            models.Index(fields=['submitted_at']),
        ]

    def __str__(self):
        return f"{self.startup.name} - {self.scheme.title}"