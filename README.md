# Taipei Home
## Search Mandarin Real Estate Listings in English

Finding good apartments in Taipei is tough! The best listings are all in Mandarin and, even if you can read it, the websites are hilariously difficult to use. (Google translate fails, and breaks the interfaces!)

Recently Sara Sanchez and I were trapped inside all weekend by a typhoon, so we made a little tool that lets you search Mandarin real estate listings using English.

Fun features:
1) Search by proximity to any station in the Taipei MRT/Subway system
2) Search by proximity to universities and schools
3) Search the most common room configurations, including private suites or rooms subleased in people's houses

Nerd stuff:
Client is a super-simple React app. Back-end is a single, 1000-line serverless function (AWS Lambda) built using the awesome rapid prototyping service Clay Base (https://base.run/).
