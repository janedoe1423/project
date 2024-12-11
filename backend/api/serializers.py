from rest_framework import serializers
from .models import Investor, InvestorExperience, InvestorEducation, InvestorAchievement, InvestmentThesis, InvestorExpertise, InvestorComplianceDocument, InvestorInvestmentPreference, StartupBasicInfo, StartupVisionMission, StartupMetric, StartupProduct, TeamMember, Achievement, Financial


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

class StartupVisionMissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StartupVisionMission
        exclude = ('startup',)

class StartupMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = StartupMetric
        exclude = ('startup',)

class StartupProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = StartupProduct
        exclude = ('startup',)

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        exclude = ('startup',)

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        exclude = ('startup',)

class FinancialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Financial
        exclude = ('startup',)

class StartupProfileSerializer(serializers.ModelSerializer):
    vision_mission = StartupVisionMissionSerializer()
    metrics = StartupMetricSerializer(many=True)
    products = StartupProductSerializer(many=True)
    team = TeamMemberSerializer(many=True)
    achievements = AchievementSerializer(many=True)
    financials = FinancialSerializer()

    class Meta:
        model = StartupBasicInfo
        fields = '__all__'

    def create(self, validated_data):
        vision_mission_data = validated_data.pop('vision_mission')
        metrics_data = validated_data.pop('metrics')
        products_data = validated_data.pop('products')
        team_data = validated_data.pop('team')
        achievements_data = validated_data.pop('achievements')
        financials_data = validated_data.pop('financials')

        startup = StartupBasicInfo.objects.create(**validated_data)

        StartupVisionMission.objects.create(startup=startup, **vision_mission_data)
        
        for metric_data in metrics_data:
            StartupMetric.objects.create(startup=startup, **metric_data)
        
        for product_data in products_data:
            StartupProduct.objects.create(startup=startup, **product_data)
        
        for member_data in team_data:
            TeamMember.objects.create(startup=startup, **member_data)
        
        for achievement_data in achievements_data:
            Achievement.objects.create(startup=startup, **achievement_data)
        
        Financial.objects.create(startup=startup, **financials_data)

        return startup