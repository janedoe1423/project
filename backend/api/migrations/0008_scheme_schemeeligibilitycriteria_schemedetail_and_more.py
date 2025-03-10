# Generated by Django 4.2.16 on 2024-12-05 05:18

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_startupmetricssnapshot_startupmetrictarget_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Scheme',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('type', models.CharField(choices=[('education', 'Education'), ('industry', 'Industry'), ('financial', 'Financial'), ('innovation', 'Innovation')], max_length=20)),
                ('category', models.CharField(choices=[('Financial', 'Financial'), ('Subsidy', 'Subsidy'), ('Credit', 'Credit'), ('Innovation', 'Innovation'), ('Grant', 'Grant'), ('Training', 'Training')], max_length=20)),
                ('status', models.CharField(choices=[('Active', 'Active'), ('Inactive', 'Inactive'), ('Coming Soon', 'Coming Soon'), ('Expired', 'Expired')], default='Active', max_length=20)),
                ('start_date', models.DateField()),
                ('deadline', models.DateField(blank=True, null=True)),
                ('eligibility_criteria', models.TextField()),
                ('benefits', models.TextField()),
                ('application_process', models.TextField()),
                ('required_documents', models.JSONField(default=list)),
                ('external_link', models.URLField(blank=True)),
                ('application_link', models.URLField(blank=True)),
                ('is_featured', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='SchemeEligibilityCriteria',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('criteria', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('is_mandatory', models.BooleanField(default=True)),
                ('scheme', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eligibility_criteria_list', to='api.scheme')),
            ],
            options={
                'verbose_name_plural': 'Scheme eligibility criteria',
            },
        ),
        migrations.CreateModel(
            name='SchemeDetail',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('overview', models.TextField()),
                ('objectives', models.JSONField(default=list)),
                ('funding_amount', models.TextField()),
                ('implementation_process', models.TextField()),
                ('key_dates', models.JSONField(default=dict)),
                ('faqs', models.JSONField(default=list)),
                ('guidelines_document', models.FileField(blank=True, null=True, upload_to='schemes/guidelines/')),
                ('application_form', models.FileField(blank=True, null=True, upload_to='schemes/applications/')),
                ('scheme', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='details', to='api.scheme')),
            ],
        ),
        migrations.CreateModel(
            name='SchemeApplication',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('status', models.CharField(choices=[('DRAFT', 'Draft'), ('SUBMITTED', 'Submitted'), ('UNDER_REVIEW', 'Under Review'), ('APPROVED', 'Approved'), ('REJECTED', 'Rejected')], default='DRAFT', max_length=20)),
                ('submitted_at', models.DateTimeField(blank=True, null=True)),
                ('documents', models.JSONField(default=dict)),
                ('notes', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('scheme', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='applications', to='api.scheme')),
                ('startup', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scheme_applications', to='api.startup')),
            ],
        ),
        migrations.AddIndex(
            model_name='scheme',
            index=models.Index(fields=['type'], name='api_scheme_type_dc6064_idx'),
        ),
        migrations.AddIndex(
            model_name='scheme',
            index=models.Index(fields=['category'], name='api_scheme_categor_7f9f79_idx'),
        ),
        migrations.AddIndex(
            model_name='scheme',
            index=models.Index(fields=['status'], name='api_scheme_status_75abf7_idx'),
        ),
        migrations.AddIndex(
            model_name='scheme',
            index=models.Index(fields=['deadline'], name='api_scheme_deadlin_4e53ed_idx'),
        ),
        migrations.AddIndex(
            model_name='schemeapplication',
            index=models.Index(fields=['status'], name='api_schemea_status_16625e_idx'),
        ),
        migrations.AddIndex(
            model_name='schemeapplication',
            index=models.Index(fields=['submitted_at'], name='api_schemea_submitt_70848f_idx'),
        ),
        migrations.AlterUniqueTogether(
            name='schemeapplication',
            unique_together={('scheme', 'startup')},
        ),
    ]
