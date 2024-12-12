%%writefile data/nlu.yml
version: "2.0"
nlu:
- intent: greet
  examples: |
    - hello
    - hi
    - hey
    - good morning
    - good evening

- intent: ask_patent_status
  examples: |
    - what is the status of my patent
    - check the status of my patent
    - how is my patent application doing
    - can you tell me the status of patent [12345](patent_number)

- intent: ask_ipr_info
  examples: |
    - what is a patent
    - explain trademark
    - what is copyright
    - tell me about intellectual property rights

- intent: ask_patent_requirements
  examples: |
    - What are the requirements for filing a patent?
    - How do I apply for a patent?
    - What documents are needed for a patent application?

- intent: ask_trademark_process
  examples: |
    - How do I register a trademark?
    - What is the process for trademark registration?
    - Steps to get a trademark?

- intent: ask_copyright_info
  examples: |
    - What is a copyright?
    - How do copyrights work?
    - How to protect my work with copyright?

- intent: ask_patent_fees
  examples: |
    - What are the fees for patent application?
    - How much does it cost to file a patent?
    - Patent application cost?

- intent: ask_trademark_renewal
  examples: |
    - How do I renew my trademark?
    - Trademark renewal process?
    - When should I renew my trademark?

- intent: ask_patent_lifetime
  examples: |
    - How long does a patent last?
    - What is the duration of a patent?
    - Patent expiration time?

- intent: ask_infringement_consequences
  examples: |
    - What happens if someone infringes on my patent?
    - Consequences of patent infringement?
    - What to do if my patent is infringed?

- intent: ask_trademark_protection_scope
  examples: |
    - What does a trademark protect?
    - Scope of trademark protection?
    - What can I trademark?

- intent: ask_international_patent
  examples: |
    - How do I file an international patent?
    - International patent application process?
    - Can I protect my invention globally?

- intent: ask_patent_search
  examples: |
    - How to perform a patent search?
    - Steps to check if an invention is already patented?
    - How to search existing patents?

- intent: ask_trademark_classes
  examples: |
    - What are trademark classes?
    - Which class does my trademark fall under?
    - How to choose the right trademark class?

- intent: ask_trade_secret_protection
  examples: |
    - How to protect trade secrets?
    - What are trade secrets?
    - Ways to safeguard trade secrets?

- intent: ask_patent_maintenance_fees
  examples: |
    - What are patent maintenance fees?
    - When do I need to pay maintenance fees for a patent?
    - Cost of maintaining a patent?

- intent: ask_trademark_assignment
  examples: |
    - How do I assign my trademark to another person?
    - Trademark assignment process?
    - Steps to transfer trademark ownership?


%writefile domain.yml
version: "2.0"
intents:
  - greet
  - ask_patent_status
  - ask_ipr_info
  - ask_patent_requirements
  - ask_trademark_process
  - ask_copyright_info
  - ask_patent_fees
  - ask_trademark_renewal
  - ask_patent_lifetime
  - ask_infringement_consequences
  - ask_trademark_protection_scope
  - ask_international_patent
  - ask_patent_search
  - ask_trademark_classes
  - ask_trade_secret_protection
  - ask_patent_maintenance_fees
  - ask_trademark_assignment

entities:
  - patent_number

slots:
  patent_number:
    type: text
    mappings:
      - type: from_entity
        entity: patent_number  # Assuming you have a 'patent_number' entity in your NLU
responses:
  utter_greet:
    - text: "Hello! How can I assist you with your IPR queries today?"

  utter_goodbye:
    - text: "Goodbye! Have a nice day."  # Customize the message if needed

  utter_ask_patent_status:
    - text: "Please provide the patent number."
  
  utter_iamabot:
    - text: "I am an AI assistant for Google Colab that can write code and answer questions."


  utter_ipr_info:
    - text: "Intellectual Property Rights (IPR) are the rights given to persons over the creations of their minds."

  utter_patent_requirements:
    - text: "To file a patent, you need a detailed description of your invention, claims defining the invention, and drawings if necessary."

  utter_trademark_process:
    - text: "The process for trademark registration involves conducting a trademark search, filing an application, and undergoing examination."

  utter_copyright_info:
    - text: "A copyright protects original works of authorship, such as literary, dramatic, musical, and artistic works."

  utter_patent_fees:
    - text: "The fees for patent application vary by country and the type of application. Generally, there are filing fees, examination fees, and maintenance fees."

  utter_trademark_renewal:
    - text: "Trademarks need to be renewed periodically, typically every 10 years, to maintain protection."

  utter_patent_lifetime:
    - text: "A patent generally lasts for 20 years from the filing date, provided that maintenance fees are paid."

  utter_infringement_consequences:
    - text: "If someone infringes on your patent, you may take legal action to enforce your rights and seek damages."

  utter_trademark_protection_scope:
    - text: "A trademark protects the brand name or logo associated with your products or services, preventing others from using similar marks."

  utter_international_patent:
    - text: "To file an international patent, you can use the Patent Cooperation Treaty (PCT) system, which allows you to seek protection in multiple countries with a single application."

  utter_patent_search:
    - text: "To perform a patent search, you can use patent databases like Google Patents or the USPTO database to check for existing patents similar to your invention."

  utter_trademark_classes:
    - text: "Trademark classes categorize goods and services for registration purposes. Choosing the right class is crucial for effective trademark protection."

  utter_trade_secret_protection:
    - text: "To protect trade secrets, ensure confidentiality through agreements, restrict access, and implement security measures."

  utter_patent_maintenance_fees:
    - text: "Patent maintenance fees are periodic fees that must be paid to keep a granted patent in force. These fees vary by jurisdiction."

  utter_trademark_assignment:
    - text: "To assign your trademark to another person, you need to execute an assignment agreement and record it with the relevant trademark office."

  utter_patent_status:
    - text: "The status of patent {patent_number} is 'Pending'."


%writefile data/stories.yml
version: "2.0"
stories:
- story: greet user
  steps:
  - intent: greet
  - action: utter_greet

- story: ask for patent status
  steps:
  - intent: ask_patent_status
  - action: utter_ask_patent_status
  - slot_was_set:
    - patent_number: "12345"
  - action: utter_patent_status

- story: ask for ipr info
  steps:
  - intent: ask_ipr_info
  - action: utter_ipr_info

- story: ask for patent requirements
  steps:
  - intent: ask_patent_requirements
  - action: utter_patent_requirements

- story: ask for trademark process
  steps:
  - intent: ask_trademark_process
  - action: utter_trademark_process

- story: ask for copyright info
  steps:
  - intent: ask_copyright_info
  - action: utter_copyright_info

- story: ask for patent fees
  steps:
  - intent: ask_patent_fees
  - action: utter_patent_fees

- story: ask for trademark renewal
  steps:
  - intent: ask_trademark_renewal
  - action: utter_trademark_renewal

- story: ask for patent lifetime
  steps:
  - intent: ask_patent_lifetime
  - action: utter_patent_lifetime

- story: ask for infringement consequences
  steps:
  - intent: ask_infringement_consequences
  - action: utter_infringement_consequences

- story: ask for trademark protection scope
  steps:
  - intent: ask_trademark_protection_scope
  - action: utter_trademark_protection_scope

- story: ask for international patent
  steps:
  - intent: ask_international_patent
  - action: utter_international_patent

- story: ask for patent search
  steps:
  - intent: ask_patent_search
  - action: utter_patent_search

- story: ask for trademark classes
  steps:
  - intent: ask_trademark_classes
  - action: utter_trademark_classes

- story: ask for trade secret protection
  steps:
  - intent: ask_trade_secret_protection
  - action: utter_trade_secret_protection


!rasa train

!rasa run actions &
!rasa run -m models --enable-api --cors "*" --debug

!rasa shell