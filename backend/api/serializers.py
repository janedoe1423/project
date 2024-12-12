from rest_framework import serializers
from .models import Investor, InvestorExperience, InvestorEducation, InvestorAchievement, InvestmentThesis, InvestorExpertise, InvestorComplianceDocument, InvestorInvestmentPreference

class InvestorExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorExperience
        fields = '__all__'

class InvestorEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorEducation
        fields = '__all__'

class InvestorAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorAchievement
        fields = '__all__'

class InvestmentThesisSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentThesis
        fields = '__all__'

class InvestorExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorExpertise
        fields = '__all__'

class InvestorComplianceDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorComplianceDocument
        fields = '__all__'

class InvestorInvestmentPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorInvestmentPreference
        fields = '__all__'

class InvestorSerializer(serializers.ModelSerializer):
    experiences = InvestorExperienceSerializer(many=True, read_only=True)
    education = InvestorEducationSerializer(many=True, read_only=True)
    achievements = InvestorAchievementSerializer(many=True, read_only=True)
    investment_thesis = InvestmentThesisSerializer(read_only=True)
    expertise = InvestorExpertiseSerializer(many=True, read_only=True)
    compliance_documents = InvestorComplianceDocumentSerializer(many=True, read_only=True)
    investment_preferences = InvestorInvestmentPreferenceSerializer(read_only=True)

    class Meta:
        model = Investor
        fields = [
            'id', 'email', 'profile_picture', 'title', 'company', 'bio', 'phone',
            'linkedin_url', 'twitter_handle', 'website', 'total_investments',
            'portfolio_companies', 'successful_exits', 'assets_under_management',
            'is_verified', 'created_at', 'updated_at', 'experiences', 'education',
            'achievements', 'investment_thesis', 'expertise', 'compliance_documents',
            'investment_preferences'
        ]