import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the datasets (if not already loaded)
mentors_df = pd.read_csv('/content/drive/MyDrive/Mentors excel.csv')
startups_df = pd.read_csv('/content/drive/MyDrive/Merged start up_dataset.csv')

# Preprocess text data - We'll use the 'Area of Specialization' for mentors and 'Industry Sector' for startups
mentors_specialization = mentors_df['Specialization'].fillna('')
startups_industry = startups_df['Sector'].fillna('')

# Vectorize the text data using TF-IDF
vectorizer = TfidfVectorizer()
mentors_vectors = vectorizer.fit_transform(mentors_specialization)  # Define mentor_vectors here
startups_vectors = vectorizer.transform(startups_industry)  # Define startup_vectors here

# Calculate the cosine similarity between mentor vectors and startup vectors
similarity_matrix = cosine_similarity(mentors_vectors, startups_vectors)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the datasets (if not already loaded)
mentors_df = pd.read_csv('/content/drive/MyDrive/Mentors excel.csv')
startups_df = pd.read_csv('/content/drive/MyDrive/Merged start up_dataset.csv')

# Preprocess text data - We'll use the 'Area of Specialization' for mentors and 'Industry Sector' for startups
mentors_specialization = mentors_df['Specialization'].fillna('')
startups_industry = startups_df['Sector'].fillna('')

# Vectorize the text data using TF-IDF
vectorizer = TfidfVectorizer()
mentors_vectors = vectorizer.fit_transform(mentors_specialization)  # Define mentor_vectors here
startups_vectors = vectorizer.transform(startups_industry)  # Define startup_vectors here

# Calculate the cosine similarity between mentor vectors and startup vectors
similarity_matrix = cosine_similarity(mentors_vectors, startups_vectors)

results = []

# Iterate over each startup
for startup_idx, startup_id in enumerate(startups_df['Startup ID']):
    # Get similarity scores for this startup
    similarity_scores = similarity_matrix[:, startup_idx]

    # Find the index of the best matching mentor
    best_mentor_idx = similarity_scores.argmax()

    # Retrieve mentor details
    best_mentor = mentors_df.iloc[best_mentor_idx]

    # Store the result
    results.append({
        'Startup ID': startup_id,
        'Startup Name': startups_df.loc[startup_idx, 'Name'],
        'Best Mentor': best_mentor['Mentor Name'],
        'Mentor Specialization': best_mentor['Area of Specialization'],
        'Similarity Score': similarity_scores[best_mentor_idx]
    })

# Convert results to a DataFrame
matches_df = pd.DataFrame(results)

# Display the top 5 matches
print(matches_df.head())

import pandas as pd
from transformers import pipeline
!pip install fpdf
from fpdf import FPDF
from transformers import AutoTokenizer, AutoModelForCausalLM
# Load the dataset
file_path = "/content/drive/MyDrive/Patent draft data.csv"
df = pd.read_csv(file_path)

# Display dataset structure
print("Dataset Loaded:")
print(df.head())
model_name = "gpt2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
generator = pipeline("text-generation", model=model, tokenizer=tokenizer)



# Function to enhance Abstract using Hugging Face's pipeline
def generate_abstract(technical_solution):
    result = generator(f"Generate an abstract for the following technical solution: {technical_solution}",
                       max_length=100,
                       num_return_sequences=1)
    return result[0]['generated_text']

# Define a class for the PDF structure
class PatentPDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "Patent Draft Document", align="C", ln=True)
        self.ln(10)

    def chapter_title(self, chapter_title):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, chapter_title, ln=True)
        self.ln(5)

    def chapter_body(self, body):
        self.set_font("Arial", "", 12)
        self.multi_cell(0, 10, body)
        self.ln()

# Generate patent drafts for each entry in the dataset
for index, row in df.iterrows():
    name = row['Name']
    phone = row['Phone Number']
    title = row['Title']
    problem_statement = row['Problem Statement']
    technical_solution = row['Technical Solution']
    claims = row['Claims'].split(';')  # Assuming claims are separated by semicolons

    # Generate enhanced abstract
    abstract = generate_abstract(technical_solution)

    # Create PDF for each patent
    pdf = PatentPDF()
    pdf.add_page()
    pdf.set_font("Arial", "", 12)
    # Add content to the PDF
    pdf.chapter_title("Title:")
    pdf.chapter_body(title)

    pdf.chapter_title("Abstract:")
    pdf.chapter_body(abstract)

    pdf.chapter_title("Problem Statement:")
    pdf.chapter_body(problem_statement)

    pdf.chapter_title("Technical Solution:")
    pdf.chapter_body(technical_solution)

    pdf.chapter_title("Claims:")
    for i, claim in enumerate(claims, start=1):
        pdf.chapter_body(f"{i}. {claim.strip()}")

    # Save the PDF
    output_file = f"Patent_Draft_{index + 1}.pdf"
    pdf.output(output_file,"F")
    print(f"Patent draft saved as '{output_file}' for {name}")