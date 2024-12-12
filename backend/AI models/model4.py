import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the datasets
startups_df = pd.read_csv('/content/drive/MyDrive/STARTUP DATA MATCHING.csv')
investors_df = pd.read_csv('/content/drive/MyDrive/INVESTOR DATA MATCHING.csv')

# Display the first few rows to understand the structure
print("Startups Dataset:")
print(startups_df.head())
print("Investors Dataset:")
print(investors_df.head())

# Combine relevant columns for textual description
startups_df['description'] = startups_df[['Startup Name', 'Industry/Domain', 'Description']].astype(str).agg(' '.join, axis=1)
investors_df['description'] = investors_df[['Investor Name', 'Investment Focus', 'Description']].astype(str).agg(' '.join, axis=1)

# Initialize TF-IDF Vectorizer
tfidf_vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)

# Fit-transform on both datasets
startup_vectors = tfidf_vectorizer.fit_transform(startups_df['description'])
investor_vectors = tfidf_vectorizer.transform(investors_df['description'])

# Calculate similarity matrix
similarity_matrix = cosine_similarity(startup_vectors, investor_vectors)

# Create a DataFrame to store matching results
results = []
for i, startup in startups_df.iterrows():
    investor_index = similarity_matrix[i].argmax()
    similarity_score = similarity_matrix[i, investor_index]
    matched_investor = investors_df.iloc[investor_index]
    results.append({
        'Startup Name': startup['Startup Name'],
        'Investor Name': matched_investor['Investor Name'],
        'Similarity Score': similarity_score
    })

results_df = pd.DataFrame(results)


print("Matching complete. Results are in the 'results_df' DataFrame.")