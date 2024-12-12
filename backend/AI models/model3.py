import os
os.system("Patent_Draft_8.pdf")
try:
    pdf.output(output_file)
    print(f"PDF saved: {output_file}")
except Exception as e:
    print(f"Error saving PDF: {e}")
import os
print("PDF saved in this directory:", os.getcwd())

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

# Load your dataset
df = pd.read_csv("/content/drive/MyDrive/SIH Budget allocation.csv")

# Ensure 'Total Budget' is present
if 'Total Budget' not in df.columns:
    raise ValueError("The dataset must have a 'Total Budget' column.")

# Define the features (X) and the allocation targets (y)
features = ['Growth Rate (%)', 'Market Share (%)', 'Burn Rate ($K)', 'ROI (%)', 'ME Ratio', 'Product Market Fit (%)']
allocation_columns = ['Marketing & Sales Allocation', 'R&D Allocation', 'Operations Allocation', 'Technology Development Allocation', 'Logistics Allocation']

# Initialize a dictionary to store trained models
models = {}

# Train and test a Random Forest model for each allocation column
for column in allocation_columns:
    X = df[features]
    # Check if the column exists in the DataFrame before accessing it.
    if column in df.columns:
        y = df[column]  # Target variable (allocation percentages)
    else:
        #Handle the case where the column is not found (e.g., print an error message or skip the column)
        print(f"Column '{column}' not found in DataFrame. Skipping...")

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the Random Forest model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Store the model in the dictionary
    models[column] = model

    # Evaluate the model
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    print(f"MAE for {column}: {mae}")

# Allocate budgets based on the trained models
for column, model in models.items():
    df[column + ' Budget ($K)'] = model.predict(df[features])[:, allocation_columns.index(column)] * df['Total Budget']

# Display the updated dataset with the budget allocations
print(df[['Startup Name', 'Total Budget'] + [col + ' Budget ($K)' for col in allocation_columns]])

from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# Evaluate the model for each department
for column, model in models.items():
    y_pred = model.predict(X_test)
    y_test = y_test  # Actual values from test set

    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)

    print(f"Evaluation metrics for {column}:")
    print(f"MAE: {mae:.2f}")
    print(f"RMSE: {rmse:.2f}")
    print(f"R² Score: {r2:.2f}")
    print("\n")