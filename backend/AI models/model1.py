mport pandas as pd

# Load mentors and startups datasets
mentors_df = pd.read_csv('/content/drive/MyDrive/Merged start up_dataset.csv')
startups_df = pd.read_csv('/content/drive/MyDrive/Mentors excel.csv')
from sklearn.feature_extraction.text import TfidfVectorizer

# Combine all text data from mentors and startups for vectorization
print(mentors_df.columns)
print(startups_df.columns)
print(startups_df.head())

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the datasets
mentors_df = pd.read_csv('/content/drive/MyDrive/Mentors excel.csv')
startups_df = pd.read_csv('/content/drive/MyDrive/Merged start up_dataset.csv')

# Display the first few rows of the data to understand the structure
print(mentors_df.head())
print(startups_df.head())

# Preprocess text data - We'll use the 'Area of Specialization' for mentors and 'Industry Sector' for startups
mentors_specialization = mentors_df['Specialization'].fillna('')
startups_industry = startups_df['Sector'].fillna('')

# Vectorize the text data using TF-IDF
vectorizer = TfidfVectorizer()
mentors_vectors = vectorizer.fit_transform(mentors_specialization)
startups_vectors = vectorizer.transform(startups_industry)

# Calculate cosine similarity between mentors and startups
similarity_matrix = cosine_similarity(mentors_vectors, startups_vectors)

# Find the best match for each startup
matches = []
for startup_idx in range(startups_vectors.shape[0]):
    # Get similarity scores for this startup
    similarity_scores = similarity_matrix[:, startup_idx]

    # Find the index of the best matching mentor
    best_mentor_idx = similarity_scores.argmax()

    # Retrieve mentor and startup details
    best_mentor = mentors_df.iloc[best_mentor_idx]
    startup = startups_df.iloc[startup_idx]

    # Store the match
    matches.append({
        'Startup Name': startup['Company/Brand'],
        'Best Mentor': best_mentor['Mentor Name'],
        'Mentor Specialization': best_mentor['Specialization'],
        'Similarity Score': similarity_scores[best_mentor_idx]
    })

# Convert matches to a DataFrame
matches_df = pd.DataFrame(matches)

# Display the top matches
print(matches_df.head())