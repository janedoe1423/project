from textblob import TextBlob
import pandas as pd
import os

# Load the dataset
file_path = "/content/drive/MyDrive/Feedback data.csv"
feedback_data = pd.read_csv(file_path)

# Check the structure of the dataset
print("Dataset Columns:", feedback_data.columns)
print("Sample Data:")
print(feedback_data.head())

# Function to analyze sentiment
def get_sentiment(text):
    analysis = TextBlob(str(text))  # Ensure text is string
    if analysis.sentiment.polarity > 0:
        return "Positive"
    elif analysis.sentiment.polarity == 0:
        return "Neutral"
    else:
        return "Negative"

# Apply sentiment analysis
feedback_data['Sentiment'] = feedback_data['Feedback Text'].apply(get_sentiment)
output_dir = '/mnt/data'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Save the results to a new CSV file
output_path = "/mnt/data/Feedback_data_with_sentiment.csv"
feedback_data.to_csv(output_path, index=False)

# Display sentiment analysis results
print("Sentiment Analysis Completed. Sample Results:")
print(feedback_data[['Feedback Text', 'Sentiment']].head())

print(f"Results saved to: {output_path}")

from textblob import TextBlob
import pandas as pd
import os # Import the os module here

# Load the dataset
file_path = "/content/drive/MyDrive/Feedback data.csv"
feedback_data = pd.read_csv(file_path)

# ... (rest of your code for sentiment analysis) ...

# Save the results to a new CSV file
output_dir = '/mnt/data'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
output_path = "/mnt/data/Feedback_data_with_sentiment.csv"
feedback_data.to_csv(output_path, index=False)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.ensemble import RandomForestRegressor

# Load the dataset containing district-sector information
data = pd.read_csv("/content/drive/MyDrive/Startup Market Analysis.csv")  # Replace with your dataset

# Display dataset structure for reference
print("\nDataset Preview:")
print(data.head())
# Define the input and output features for modeling
data['Combined Features'] = data['Sector'] + " " + data['District']
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(data['Combined Features'])
for column in ['GDP Contribution (%)', 'Sectoral Revenue (? Cr)', 'Export Value (? Cr)', 'Annual Growth Rate (%)']:
  if data[column].dtype == 'object':
        data[column] = pd.to_numeric(data[column].str.replace(',', ''), errors='coerce')
  else:
        print(f"Column '{column}' is already numeric or not of object type. Skipping str.replace.")
success_model = RandomForestRegressor() # Initialize success_model
success_model.fit(data[['GDP Contribution (%)', 'Sectoral Revenue (? Cr)', 'Export Value (? Cr)', 'Annual Growth Rate (%)']],
                  data['Success Rate'])

# Input: Startup description
def predict_startup_success(description):
    # Generate TF-IDF vector for the startup description
    description_vector = vectorizer.transform([description])

    # Find the most similar district and sector combination
    similarity_scores = cosine_similarity(description_vector, tfidf_matrix)
    most_similar_index = similarity_scores.argmax()
    matching_district = data.iloc[most_similar_index]['District']
    matching_sector = data.iloc[most_similar_index]['Sector']

    # Predict success rate using the model
    sector_features = data.iloc[most_similar_index][['GDP Contribution (%)', 'Sectoral Revenue (? Cr)',
                                                     'Export Value (? Cr)', 'Annual Growth Rate (%)']]
    success_rate = success_model.predict([sector_features])[0]

    return {
        "Input Description": description,
        "Matching District": matching_district,
        "Matching Sector": matching_sector,
        "Predicted Success Rate": f"{success_rate:.2f}%"
    }

if _name_ == "_main_":
    description = input("Enter your startup description: ") # This line and the following lines need to be indented
    result = predict_startup_success(description)
    print("\nPrediction Result:")
    for key, value in result.items():
        print(f"{key}: {value}")

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Predefined ideas for matching
ideas = [
    "Design solar panel kits for apartment rooftops to reduce installation costs.",
    "Introduce solar-powered urban lighting with minimal maintenance.",
    "Create solar energy subscription models for urban households.",
    "Develop portable solar chargers for urban commuters.",
    "Implement solar-powered charging stations for electric vehicles."
]

# Trending topics for reference
trending_topics = [
    "Solar innovation for metropolitan cities.",
    "Energy-efficient solar panel technologies.",
    "Renewable energy adoption in urban areas."
]

# Input description
input_description = "Develop a cost-effective solar energy solution for urban areas."

# Combine input description with predefined ideas for vectorization
corpus = [input_description] + ideas

# TF-IDF Vectorization
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)

# Calculate cosine similarity between input and predefined ideas
similarity_scores = cosine_similarity(X[0:1], X[1:]).flatten()

# Create a DataFrame to display results
results = pd.DataFrame({
    "Generated Ideas": ideas,
    "Similarity Score": similarity_scores
})

# Sort results by similarity score in descending order
results = results.sort_values(by="Similarity Score", ascending=False)

# Display results
print("Input Description:")
print(f"\"{input_description}\"\n")
print("Generated Ideas:")
for idx, row in results.iterrows():
    print(f"{row['Generated Ideas']}")

print("\nTrending Topics:")
for topic in trending_topics:
    print(f"- {topic}")

print("\nScored Ideas:")
for idx, row in results.iterrows():
    print(f"Idea {idx + 1}: {row['Similarity Score']:.2f} similarity score")