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