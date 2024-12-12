from django.core.management.base import BaseCommand
from django.utils import timezone
from api.models import *
from decimal import Decimal
import random
from datetime import date, timedelta

class Command(BaseCommand):
    help = 'Populates the database with sample data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Creating sample data...')

        # Create Investors
        investors = []
        for i in range(5):
            investor = Investor.objects.create(
                name=f"Investor {i+1}",
                email=f"investor{i+1}@example.com",
                phone=f"+1234567890{i}",
                type='ANGEL' if i % 2 == 0 else 'VC',
                investment_focus="Technology, Healthcare, Fintech",
                preferred_stages='SEED' if i % 3 == 0 else 'EARLY',
                min_ticket_size=Decimal(f"{(i+1)*50000}.00"),
                max_ticket_size=Decimal(f"{(i+1)*500000}.00"),
                geographic_focus=f"Region {i+1}",
                industry_focus=f"Industry {i+1}",
                investment_criteria=f"Criteria {i+1}"
            )
            investors.append(investor)

            # Create Investment Thesis
            InvestmentThesis.objects.create(
                investor=investor,
                min_ticket_size=Decimal(f"{(i+1)*50000}.00"),
                max_ticket_size=Decimal(f"{(i+1)*500000}.00"),
                geographic_focus=f"Region {i+1}",
                industry_focus=f"Focus on {['Tech', 'Healthcare', 'Fintech'][i%3]}",
                investment_criteria=f"Key criteria for investment {i+1}"
            )

            # Create Expertise
            for j in range(3):
                InvestorExpertise.objects.create(
                    investor=investor,
                    name=f"Expertise {j+1}",
                    years_of_experience=random.randint(5, 20),
                    description=f"Description for expertise {j+1}"
                )

            # Create Compliance Documents
            doc_types = ['TAX_RETURNS', 'BANK_STATEMENT', 'NET_WORTH', 'ACCREDITED_PROOF']
            for doc_type in doc_types:
                InvestorComplianceDocument.objects.create(
                    investor=investor,
                    document_type=doc_type,
                    is_verified=random.choice([True, False]),
                    verification_notes=f"Verification notes for {doc_type}",
                    expiry_date=date.today() + timedelta(days=365)
                )

            # Create Investment Preferences
            InvestorInvestmentPreference.objects.create(
                investor=investor,
                preferred_sectors=['Tech', 'Healthcare', 'Fintech'],
                investment_philosophy=f"Philosophy {i+1}",
                due_diligence_process=f"Due Diligence {i+1}",
                value_addition=f"Value Addition {i+1}",
                co_investment_preferences=f"Co-investment details {i+1}",
                exit_strategy=f"Exit Strategy {i+1}"
            )

            # Create Financial Metrics
            for k in range(12):
                date_entry = timezone.now().date() - timedelta(days=30*k)
                InvestorFinancialMetric.objects.create(
                    investor=investor,
                    date=date_entry,
                    cash_balance=Decimal(random.randint(1000000, 5000000)),
                    gross_burn=Decimal(random.randint(50000, 200000)),
                    ebitda=Decimal(random.randint(-100000, 500000)),
                    revenue=Decimal(random.randint(200000, 1000000))
                )

            # Create Growth Metrics
            for k in range(12):
                date_entry = timezone.now().date() - timedelta(days=30*k)
                InvestorGrowthMetric.objects.create(
                    investor=investor,
                    date=date_entry,
                    new_customers=random.randint(10, 100),
                    churned_customers=random.randint(1, 20)
                )

            # Create Funding Rounds
            round_types = ['SEED', 'SERIES_A', 'SERIES_B']
            for round_type in round_types:
                InvestorFundingRound.objects.create(
                    investor=investor,
                    round_type=round_type,
                    amount_raised=Decimal(random.randint(1000000, 10000000)),
                    date=date.today() - timedelta(days=random.randint(0, 365))
                )

            # Create Team Growth
            departments = ['Engineering', 'Sales', 'Marketing', 'Operations']
            for dept in departments:
                InvestorTeamGrowth.objects.create(
                    investor=investor,
                    date=date.today(),
                    department=dept,
                    headcount=random.randint(5, 50)
                )

            # Create Portfolio
            portfolio = InvestorPortfolio.objects.create(
                investor=investor,
                total_value=Decimal(random.randint(10000000, 50000000)),
                total_companies=random.randint(5, 20),
                active_investments=random.randint(3, 15),
                exits=random.randint(1, 5),
                irr=Decimal(random.randint(10, 30))
            )

            # Create Portfolio Companies
            for j in range(3):
                company = InvestorCompany.objects.create(
                    portfolio=portfolio,
                    name=f"Portfolio Company {j+1}",
                    sector=random.choice(['Tech', 'Healthcare', 'Fintech']),
                    stage=random.choice(['Seed', 'Series A', 'Series B']),
                    investment_date=date.today() - timedelta(days=random.randint(0, 730)),
                    investment_amount=Decimal(random.randint(500000, 5000000)),
                    ownership=f"{random.randint(5, 30)}%",
                    valuation=Decimal(random.randint(5000000, 50000000)),
                    status=random.choice(['Active', 'Exited', 'Written Off'])
                )

                # Create Performance Metrics for each company
                InvestorPerformanceMetric.objects.create(
                    company=company,
                    growth=Decimal(random.randint(10, 50)),
                    trend=random.choice(['Up', 'Down', 'Stable']),
                    revenue_change=f"{random.randint(-20, 100)}%",
                    user_growth=f"{random.randint(10, 200)}%",
                    margin=f"{random.randint(5, 40)}%"
                )

            # Create Investment Companies
            for j in range(3):
                InvestmentCompany.objects.create(
                    investor=investor,
                    name=f"Investment Company {j+1}",
                    sector=random.choice(['Tech', 'Healthcare', 'Fintech']),
                    description=f"Description for company {j+1}",
                    current_value=Decimal(random.randint(1000000, 10000000)),
                    returns=Decimal(random.randint(10, 50)),
                    investment_date=date.today() - timedelta(days=random.randint(0, 365)),
                    founded_year=random.randint(2015, 2022),
                    location=f"City {j+1}",
                    employee_count=random.randint(10, 200),
                    funding_round=random.choice(['Seed', 'Series A', 'Series B']),
                    market_share=Decimal(random.randint(5, 30)),
                    growth_rate=Decimal(random.randint(10, 50)),
                    customer_retention=Decimal(random.randint(60, 95)),
                    ltv=Decimal(random.randint(1000, 5000)),
                    market_position=random.choice(['Leader', 'Challenger', 'Follower']),
                    target_market_size=Decimal(random.randint(1000000, 10000000)),
                    market_growth_rate=Decimal(random.randint(5, 25)),
                    geographic_presence=['US', 'EU', 'Asia']
                )

        # Create Startups
        for i in range(5):
            startup = StartupBasicInfo.objects.create(
                name=f"Startup {i+1}",
                tagline=f"Innovative solution {i+1}",
                founded=str(2020 + i),
                type="Technology",
                industry="Software",
                registration=f"REG{i+1}2023",
                location=f"City {i+1}",
                website=f"https://startup{i+1}.com",
                phone=f"+1987654321{i}",
                email=f"contact@startup{i+1}.com",
                linkedin=f"https://linkedin.com/company/startup{i+1}",
                twitter=f"https://twitter.com/startup{i+1}",
                instagram=f"https://instagram.com/startup{i+1}"
            )

            # Create Vision Mission
            StartupVisionMission.objects.create(
                startup=startup,
                vision=f"Vision statement {i+1}",
                mission=f"Mission statement {i+1}",
                values=['Innovation', 'Integrity', 'Excellence']
            )

            # Create Metrics
            metrics = ['Revenue', 'Users', 'Growth', 'Retention']
            for metric in metrics:
                StartupMetric.objects.create(
                    startup=startup,
                    title=metric,
                    value=f"${random.randint(100000, 1000000)}",
                    gradient="up",
                    growth=f"{random.randint(10, 50)}%"
                )

            # Create Products
            for j in range(2):
                StartupProduct.objects.create(
                    startup=startup,
                    name=f"Product {j+1}",
                    description=f"Amazing product {j+1}",
                    features=['Feature 1', 'Feature 2', 'Feature 3'],
                    target_audience="Enterprise",
                    launch_date=str(2021 + j),
                    demo_link=f"https://demo.startup{i+1}.com"
                )

            # Create Team Members
            roles = ['CEO', 'CTO', 'CFO', 'COO']
            for role in roles:
                TeamMember.objects.create(
                    startup=startup,
                    name=f"{role} Name",
                    role=role,
                    bio=f"Experienced {role}",
                    linkedin=f"https://linkedin.com/in/{role.lower()}",
                    skills=['Leadership', 'Strategy', 'Innovation']
                )

            # Create Achievements
            for j in range(3):
                Achievement.objects.create(
                    startup=startup,
                    title=f"Achievement {j+1}",
                    organization=f"Organization {j+1}",
                    date=f"2023-{j+1}"
                )

            # Create Financials
            Financial.objects.create(
                startup=startup,
                revenue_model="Subscription",
                funding_rounds=[
                    {
                        'round': 'Seed',
                        'amount': random.randint(500000, 2000000),
                        'date': '2023'
                    },
                    {
                        'round': 'Series A',
                        'amount': random.randint(2000000, 5000000),
                        'date': '2023'
                    }
                ]
            )

        self.stdout.write(self.style.SUCCESS('Successfully created sample data'))