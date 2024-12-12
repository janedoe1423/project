import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os # Import the os module

# ... (Your existing code for loading data, calculating similarity, etc.) ...

# Create the directory if it doesn't exist:
output_dir = '/mnt/data'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Save the matching results to a CSV file
results_df.to_csv('/mnt/data/startup_investor_matching_results.csv', index=False)

print("Matching complete. Results saved to 'startup_investor_matching_results.csv'.")
from google.colab import files

files.download('/mnt/data/startup_investor_matching_results.csv')