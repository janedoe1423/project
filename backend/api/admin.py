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
    StartupBasicInfo,
    StartupVisionMission,
    StartupMetric,
    StartupProduct,
    TeamMember,
    Achievement,
    Financial
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

@admin.register(StartupBasicInfo)
class StartupBasicInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'tagline', 'industry', 'location', 'founded', 'website')
    list_filter = ('industry', 'founded')
    search_fields = ('name', 'tagline', 'industry', 'location', 'website')

@admin.register(StartupVisionMission)
class StartupVisionMissionAdmin(admin.ModelAdmin):
    list_display = ('startup',)
    search_fields = ('startup__name',)

@admin.register(StartupMetric)
class StartupMetricAdmin(admin.ModelAdmin):
    list_display = ('startup', 'title', 'value', 'growth')
    search_fields = ('startup__name', 'title')

@admin.register(StartupProduct)
class StartupProductAdmin(admin.ModelAdmin):
    list_display = ('startup', 'name', 'launch_date')
    search_fields = ('startup__name', 'name')

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('startup', 'name', 'role')
    search_fields = ('startup__name', 'name')

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('startup', 'title', 'organization', 'date')
    search_fields = ('startup__name', 'title')

@admin.register(Financial)
class FinancialAdmin(admin.ModelAdmin):
    list_display = ('startup', 'revenue_model')
    search_fields = ('startup__name',)
