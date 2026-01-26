# 🌾 Multilingual Mandi – AI Trade Companion for Bharat 🇮🇳

## Overview

Multilingual Mandi is a voice-first AI web platform designed for India’s local mandi vendors and farmer-sellers. It provides real-time price discovery, multilingual negotiation assistance, and offline-ready support to make local trade more inclusive, transparent, and fair.

The platform helps vendors confidently negotiate with buyers across different Indian languages while ensuring they understand the correct market price and safe bargaining range.

This project was built for the AWS AI for Bharat – 26 Jan Prompt Challenge under the problem statement:
**The Multilingual Mandi: Creating a real-time linguistic bridge for local trade.**

---

## Problem Statement

Local vendors in Indian mandis face daily challenges such as:

* Lack of transparent price discovery
* Language barriers between buyers and sellers
* Unequal negotiation power against wholesalers
* Low digital literacy and voice-first needs
* Weak or unreliable internet connectivity

These gaps often lead to unfair pricing and reduced income for farmers and small vendors.

---

## Solution

Multilingual Mandi acts as a practical AI trade companion that enables:

* Voice-based price inquiry in the vendor’s language
* Market-aware negotiation support with counter-offer suggestions
* Multilingual chat bridging buyers and sellers across Indian languages
* Offline access to cached mandi price information in low-connectivity areas

The goal is to restore dignity, confidence, and fairness in local trade.

---

## Core Features

### 1. Voice-First Price Inquiry

Vendors can ask commodity prices using a single mic-based interface.

Example:

* Vendor asks: “Aaj tamatar ka bhav kya hai?”
* App responds with today’s price range, nearby mandi comparison, and a suggested selling price.

### 2. Multilingual Negotiation Bridge

Buyers and vendors can negotiate in different Indian languages through instant translation support.

Example:

* Buyer message in Tamil is shown to the vendor in Hindi
* Vendor reply in Marathi is shown back to the buyer in Tamil

### 3. AI Negotiation Assistant

The platform provides market-aware bargaining guidance:

* Safe minimum price floor
* Strong counter-offer recommendation
* Bulk discount logic
* Short explainability based on mandi averages

### 4. Price Discovery Engine (No Hallucination)

Prices are sourced from a static mock dataset labeled as:

* Mock Agmarknet Dataset
* Timestamped updates
* Trend comparison vs yesterday

Supported commodities include:
Tomato, Onion, Potato, Wheat, Rice, Chillies, Bhindi, Banana

### 5. Offline Mode Lite

When network connectivity is weak, the platform automatically:

* Switches to cached price display
* Suggests safe negotiation range
* Maintains usability in rural settings

### 6. Bharat 2048 Vision Mode

A future-forward preview layer showcasing how the platform can evolve into India’s inclusive trade infrastructure by 2048, while remaining grounded in deployable reality today.

---

## Project Structure

```
multilingual-mandi/
│
├── .kiro/                      # Kiro spec and prompt context (required for submission)
├── src/                        # React frontend source code
├── public/                     # Static assets
├── data/
│   └── mandi_prices.json       # Mock Agmarknet commodity dataset
├── submission_assets/          # Screenshots, pitch text (optional)
├── requirements.md             # Kiro-generated requirements
├── design.md                   # Technical architecture document
├── tasks.md                    # Implementation task plan
└── README.md
```

---

## Tech Stack

* React + TypeScript
* Tailwind CSS (mobile-first UI)
* Mock JSON dataset for price discovery
* AI integration hooks (placeholder for AWS Bedrock/OpenAI)
* Offline-first UX patterns

---

## Running Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

Open:

```
http://localhost:3000
```

### 3. Production build

```bash
npm run build
```

---

## Demo Storyline

Sita Devi sells vegetables in Bihar and speaks Bhojpuri.
A buyer from Tamil Nadu negotiates in Tamil.

Multilingual Mandi translates instantly, shows the fair mandi price, and suggests safe counter-offers.
Even in weak network conditions, offline mode provides cached prices.

AI becomes a true “Mandi Saathi” for Bharat’s last-mile seller.

---

## Submission Notes

This repository includes the required `.kiro` folder containing:

* Prompt specifications
* Requirements and design context
* Implementation tasks

This project is a demo-ready prototype focused on realistic usability and impact.

---

## Tagline

AI for Every Mandi. Every Bhasha. Every Seller.
Building inclusive trade infrastructure for a Viksit Bharat.

---


