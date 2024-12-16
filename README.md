# Frontend of the Software

This repository contains the frontend of a software application designed for clients and Account Managers (AMs). The interface is user-friendly and allows users to manage various aspects of the client’s business.

## Overview

The software is intended to support users in monitoring and managing key metrics related to client accounts, advertising campaigns, inventory, and more. The interface is designed to display critical data and enable efficient decision-making through interactive tools and visualizations.

## Sidebar Components

The sidebar includes the following sections:

1. **Dashboard**: Overview of key metrics.
2. **Analytics**: Detailed tracking and insights into product and business performance.
3. **Advertising**: Tools for campaign management and performance optimization.
4. **Inventory**: Management of stock levels and FBA (Fulfilled by Amazon) insights.
5. **Traffic and Conversion**: Insights into product visibility and conversion rates.
6. **Goals**: Tracking and setting business objectives.
7. **Customer Support**: Client interaction and case management features.

## Dashboard Highlights

The **Dashboard** displays the following key performance indicators (KPIs):

- **Total Orders**: Overall sales volume.
- **Total Revenue**: Total income generated from sales.
- **Average Ranking**: Product's ranking in search results.
- **Category Market Share**: Product's visibility within its category.
- **Progress Bar**: A visual representation of metric completion, ranging from 25% to 100%.

## Analytics Section

The **Analytics** section offers metrics to track various aspects of business performance, including:

1. **Ranking**: Insights on product visibility in search results.
2. **Sales**: Performance tracking of sales over time.
3. **Profitability**: Financial analysis per SKU.
4. **Traffic and Conversion**: Metrics related to user engagement and conversion rates.
5. **A+ Content, Storefront, and Brand Analytics**: Insights into brand performance.

### Key Features

- **Ranking Analytics**: Provides insights into product performance with visualizations of both organic and sponsored rankings.
- **Sales Analytics**: Tracks trends in sales, goal achievements, and detailed product performance analysis.
- **Profitability**: Enables tracking of costs and profitability assessments at the SKU level with cost optimization suggestions.

### Implementation Steps

1. **Data Retrieval**: Integrate with the Amazon API to retrieve real-time data.
2. **Database Setup**: Define tables to store and manage key metrics.
3. **UI Development**: Develop user-friendly tables, charts, and filters.
4. **Visualizations**: Implement graphs and charts for trend analysis.
5. **Goal Tracking**: Add features to set, track, and manage sales goals.
6. **Cost Optimization**: Provide insights for enhancing profitability.

## Advertising Section

The **Advertising** section helps Account Managers (AMs) optimize their advertising strategies and track campaign performance.

### Key Features

- **Goal-Centric Dashboard**: Focuses on advertising metrics and progress toward objectives like ACoS (Advertising Cost of Sales) and ROAS (Return on Ad Spend).
- **Activity Tracking**: Automatically logs campaign changes and generates task lists.
- **Team Collaboration Tools**: Enables communication and task tracking among team members.
- **Historical Impact Analysis**: Analyzes the effects of past campaign adjustments.
- **Custom Alerts**: Allows users to set personalized notifications for important metrics and deadlines.

## Inventory Management

The **Inventory Management** section provides clients with real-time insights into their stock levels and inventory performance.

### Key Features

- **Inventory Dashboard**: Displays key metrics like total SKUs, units in stock, and inventory turnover rates.
- **Product-Level Management**: Tracks individual SKUs, including sales velocity and reorder points.
- **Restock Alerts**: Notifies users of low or excess stock levels.
- **FBA Management**: Tools for managing FBA inventory, including storage fee calculators and inventory age tracking.

## Traffic and Conversion Metrics

This section offers insights into product visibility and sales funnel performance.

### Key Features

- **Traffic Dashboard**: Displays metrics like page views, unique visitors, and conversion rates.
- **Product-Level Analysis**: Provides detailed performance data for individual ASINs.
- **Target Setting and Tracking**: Allows users to set and monitor performance goals.
- **Search Term Performance**: Optimizes the impact of search terms with analysis and insights.

## Goals Section

The **Goals** section assists AMs in setting and tracking business objectives.

### Key Features

- **Goal Overview Dashboard**: Displays all active and completed goals with real-time updates.
- **Goal Details View**: Offers in-depth progress tracking and task breakdowns.
- **Task and Progress Tracking**: Monitors milestones and activities for goal achievement.
- **Deadline and Priority Management**: Alerts for upcoming deadlines and prioritization of tasks.
- **Data Export and Reporting**: Facilitates the sharing of performance data for reviews.

## Customer Support Hub

The **Customer Support Hub** enables efficient communication and case management between the team and clients.

### Key Features

- **Unified Message Center**: Centralizes all communications into a threaded format.
- **Action Item Tracking**: Automatically generates tasks for messages requiring action.
- **Client Case Creation Interface**: Simplifies the process for clients to submit support requests.
- **Team Collaboration Tools**: Features for internal communication, notes, and task assignments.
- **Message Filtering**: Advanced filtering options for message organization.

## Installation

To run this project locally, follow these steps:

1. Clone this repository.
   ```bash
   git clone https://github.com/hafsa-uq/Software-frontend.git

2. Install dependencies:
npm install

3. Start the development server:
npm start

### The app will be accessible at http://localhost:3000
