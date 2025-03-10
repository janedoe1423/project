from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Investor,
    InvestorExperience,
    InvestorEducation,
    InvestorAchievement,
    InvestmentThesis,
    InvestorExpertise,
    InvestorComplianceDocument,
    InvestorInvestmentPreference,
    InvestorFinancialMetric,
    InvestorGrowthMetric,
    InvestorFundingRound,
    InvestorTeamGrowth,
    InvestorPortfolio,
    InvestorCompany,
    InvestorPerformanceMetric,
    Startup, StartupIndustryFocus, StartupServiceArea, 
    StartupStageValidation, StartupAchievement, StartupMarketPresence,
    StartupMetrics, StartupMetricsSnapshot, StartupMetricTarget, 
    StartupMetricAlert
)

@admin.register(Investor)
class InvestorAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'company', 'phone', 'is_verified', 'created_at')
    list_filter = ('is_verified', 'created_at', 'company')
    search_fields = ('first_name', 'last_name', 'email', 'company', 'phone')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Personal Information', {
            'fields': (
                'first_name', 'last_name', 'email', 'phone', 'profile_picture',
                'bio', 'company', 'title'
            )
        }),
        ('Social Links', {
            'fields': ('linkedin_url', 'twitter_handle', 'website')
        }),
        ('Investment Stats', {
            'fields': (
                'total_investments', 'portfolio_companies',
                'successful_exits', 'assets_under_management'
            )
        }),
        ('Legal Documents', {
            'fields': (
                'pan_card', 'pan_number', 'aadhar_card',
                'aadhar_number', 'is_verified'
            )
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = 'Name'

@admin.register(InvestorExperience)
class InvestorExperienceAdmin(admin.ModelAdmin):
    list_display = ('investor', 'role', 'company', 'start_date', 'end_date', 'is_current')
    list_filter = ('is_current', 'start_date')
    search_fields = ('investor__email', 'company', 'role')
    raw_id_fields = ('investor',)

@admin.register(InvestorEducation)
class InvestorEducationAdmin(admin.ModelAdmin):
    list_display = ('investor', 'degree', 'school', 'year')
    list_filter = ('year', 'degree')
    search_fields = ('investor__email', 'school', 'degree')
    raw_id_fields = ('investor',)

@admin.register(InvestorAchievement)
class InvestorAchievementAdmin(admin.ModelAdmin):
    list_display = ('investor', 'title', 'year', 'has_proof')
    list_filter = ('year',)
    search_fields = ('investor__email', 'title')
    raw_id_fields = ('investor',)

    def has_proof(self, obj):
        return bool(obj.proof_document)
    has_proof.boolean = True
    has_proof.short_description = 'Proof Document'

@admin.register(InvestmentThesis)
class InvestmentThesisAdmin(admin.ModelAdmin):
    list_display = ('investor', 'preferred_stages', 'min_ticket_size', 'max_ticket_size', 'geographic_focus')
    list_filter = ('preferred_stages',)
    search_fields = ('investor__email', 'geographic_focus')
    raw_id_fields = ('investor',)

@admin.register(InvestorExpertise)
class InvestorExpertiseAdmin(admin.ModelAdmin):
    list_display = ('investor', 'name', 'years_of_experience')
    list_filter = ('name', 'years_of_experience')
    search_fields = ('investor__email', 'name')
    raw_id_fields = ('investor',)

@admin.register(InvestorComplianceDocument)
class InvestorComplianceDocumentAdmin(admin.ModelAdmin):
    list_display = ('investor', 'document_type', 'uploaded_at', 'is_verified', 'expiry_date')
    list_filter = ('document_type', 'is_verified', 'uploaded_at')
    search_fields = ('investor__email', 'verification_notes')
    raw_id_fields = ('investor',)
    readonly_fields = ('uploaded_at',)

    def document_preview(self, obj):
        if obj.file:
            return format_html('<a href="{}" target="_blank">View Document</a>', obj.file.url)
        return "No document uploaded"
    document_preview.short_description = 'Document Preview'

@admin.register(InvestorInvestmentPreference)
class InvestorInvestmentPreferenceAdmin(admin.ModelAdmin):
    list_display = ('investor', 'created_at', 'updated_at')
    search_fields = ('investor__email', 'investment_philosophy')
    raw_id_fields = ('investor',)
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Investor Information', {
            'fields': ('investor',)
        }),
        ('Investment Details', {
            'fields': (
                'preferred_sectors',
                'investment_philosophy',
                'due_diligence_process',
                'value_addition',
                'co_investment_preferences',
                'exit_strategy'
            )
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
@admin.register(InvestorFinancialMetric)
class InvestorFinancialMetricAdmin(admin.ModelAdmin):
    list_display = ('investor', 'date', 'cash_balance', 'gross_burn', 'ebitda', 'revenue')
    list_filter = ('date',)
    search_fields = ('investor__email',)
    raw_id_fields = ('investor',)

@admin.register(InvestorGrowthMetric)
class InvestorGrowthMetricAdmin(admin.ModelAdmin):
    list_display = ('investor', 'date', 'new_customers', 'churned_customers')
    list_filter = ('date',)
    search_fields = ('investor__email',)
    raw_id_fields = ('investor',)

@admin.register(InvestorFundingRound)
class InvestorFundingRoundAdmin(admin.ModelAdmin):
    list_display = ('investor', 'round_type', 'amount_raised', 'date')
    list_filter = ('round_type', 'date')
    search_fields = ('investor__email',)
    raw_id_fields = ('investor',)

@admin.register(InvestorTeamGrowth)
class InvestorTeamGrowthAdmin(admin.ModelAdmin):
    list_display = ('investor', 'date', 'department', 'headcount')
    list_filter = ('department', 'date')
    search_fields = ('investor__email',)
    raw_id_fields = ('investor',)

@admin.register(InvestorPortfolio)
class InvestorPortfolioAdmin(admin.ModelAdmin):
    list_display = ('investor', 'total_value', 'total_companies', 'active_investments', 'exits', 'irr')
    search_fields = ('investor__name', 'total_value')
    raw_id_fields = ('investor',)

@admin.register(InvestorCompany)
class InvestorCompanyAdmin(admin.ModelAdmin):
    list_display = ('portfolio', 'name', 'sector', 'stage', 'investment_date', 'investment_amount', 'ownership', 'valuation', 'status')
    list_filter = ('sector', 'stage', 'status')
    search_fields = ('name', 'portfolio__investor__email')
    raw_id_fields = ('portfolio',)

@admin.register(InvestorPerformanceMetric)
class InvestorPerformanceMetricAdmin(admin.ModelAdmin):
    list_display = ('company', 'growth', 'trend', 'revenue_change', 'user_growth', 'margin')
    search_fields = ('company__name',)
    raw_id_fields = ('company',)

@admin.register(Startup)
class StartupAdmin(admin.ModelAdmin):
    list_display = ('name', 'engagement_level', 'city', 'state', 'team_size', 'founded_date')
    list_filter = ('engagement_level', 'state', 'created_at')
    search_fields = ('name', 'email', 'city', 'state')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'logo', 'engagement_level', 'description')
        }),
        ('Contact Details', {
            'fields': ('phone', 'email', 'website')
        }),
        ('Location', {
            'fields': ('city', 'state', 'country')
        }),
        ('Key Metrics', {
            'fields': ('years_of_experience', 'team_size', 'revenue', 'patents_filed')
        }),
        ('Timestamps', {
            'fields': ('founded_date', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(StartupIndustryFocus)
class StartupIndustryFocusAdmin(admin.ModelAdmin):
    list_display = ('startup', 'industry')
    list_filter = ('industry',)
    search_fields = ('startup__name', 'industry')

@admin.register(StartupServiceArea)
class StartupServiceAreaAdmin(admin.ModelAdmin):
    list_display = ('startup', 'service')
    list_filter = ('service',)
    search_fields = ('startup__name', 'service')

@admin.register(StartupStageValidation)
class StartupStageValidationAdmin(admin.ModelAdmin):
    list_display = ('startup', 'current_stage', 'market_validation_status', 'product_validation_status')
    list_filter = ('current_stage', 'market_validation_status', 'product_validation_status')
    search_fields = ('startup__name',)

@admin.register(StartupAchievement)
class StartupAchievementAdmin(admin.ModelAdmin):
    list_display = ('startup', 'title', 'year')
    list_filter = ('year',)
    search_fields = ('startup__name', 'title')
    ordering = ('-year',)

@admin.register(StartupMarketPresence)
class StartupMarketPresenceAdmin(admin.ModelAdmin):
    list_display = ('startup', 'operations_type', 'international_markets', 'active_customers')
    search_fields = ('startup__name', 'operations_type')

@admin.register(StartupMetrics)
class StartupMetricsAdmin(admin.ModelAdmin):
    list_display = (
        'startup', 'date', 'growth_rate', 'monthly_revenue',
        'active_users', 'market_share'
    )
    list_filter = ('date',)
    search_fields = ('startup__name',)
    date_hierarchy = 'date'
    readonly_fields = ('startup',)
    fieldsets = (
        ('Growth Metrics', {
            'fields': ('growth_rate', 'growth_rate_trend')
        }),
        ('Revenue Metrics', {
            'fields': ('monthly_revenue', 'revenue_trend')
        }),
        ('User Metrics', {
            'fields': ('active_users', 'user_growth_trend')
        }),
        ('Market Metrics', {
            'fields': ('market_share', 'market_share_trend')
        }),
    )

@admin.register(StartupMetricsSnapshot)
class StartupMetricsSnapshotAdmin(admin.ModelAdmin):
    list_display = (
        'startup', 'last_updated', 'current_growth_rate',
        'current_monthly_revenue', 'current_active_users',
        'current_market_share'
    )
    search_fields = ('startup__name',)
    readonly_fields = ('last_updated',)

@admin.register(StartupMetricTarget)
class StartupMetricTargetAdmin(admin.ModelAdmin):
    list_display = ('startup', 'metric_type', 'target_date', 'target_value', 'achieved')
    list_filter = ('metric_type', 'achieved', 'target_date')
    search_fields = ('startup__name',)
    date_hierarchy = 'target_date'

@admin.register(StartupMetricAlert)
class StartupMetricAlertAdmin(admin.ModelAdmin):
    list_display = (
        'startup', 'alert_type', 'metric_type',
        'created_at', 'acknowledged'
    )
    list_filter = ('alert_type', 'metric_type', 'acknowledged', 'created_at')
    search_fields = ('startup__name', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    actions = ['mark_as_acknowledged']

    def mark_as_acknowledged(self, request, queryset):
        queryset.update(acknowledged=True)
    mark_as_acknowledged.short_description = "Mark selected alerts as acknowledged"