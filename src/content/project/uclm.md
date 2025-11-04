---
title: "UCLM"
description: "Escuela Superior de Ingeniería Informática — UCLM."
headerImage: "/assets/images/projects/uclm/uclm_header.jpg"
cardImage: "/assets/images/projects/uclm.png"
date: "2011-01-01"
---

![UCLM header](/assets/images/projects/uclm/uclm_header.png)

**University of Castilla-La Mancha** · *School of Computer Science and Engineering*  
**Undergraduate Dissertation — BSc in Computing Science and Engineering (Major in Computer Engineering)**  

### *Development of a Virtual Tourist Guide using Cloud Computing for Mobile Devices*



> My final undergraduate dissertation — where I leveraged my years of experience building iOS apps to design a distributed system that enhances travel experiences by combining **AI**, **mobile**, and **cloud computing**..

## Overview

The **Virtual Tourist Guide** is an iOS app that helps users discover nearby points of interest and interact with an AI-powered guide that shares contextual stories about each location.

It was designed and built as part of my **undergraduate dissertation**, focusing on **architecture, development methodology, and system design** — from iOS frontend to cloud backend and AI integration.

The project combines:
- A **native SwiftUI iOS frontend**  
- A **Python Flask backend** hosted on a **Dockerized VPS**
- An **AI integration** using **Replicate** and **Meta’s LLaMa 3 70B** model


## Concept & Flow

The app offers a simple, intuitive experience:

1. **Location permissions** — the user grants access and the app begins tracking location.  
2. **Nearby tourist spots** — when the user taps the floating button, their coordinates are sent to the backend, which uses AI to return curated local recommendations.  
3. **Place details** — the app uses Apple’s **MapKit** and **Look Around** to show metadata and immersive street-level views.  
4. **AI Tourist Chatbot** — the user can start a conversation with an AI guide that explains the history and context of the selected location.

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/permissions_flow.png" alt="Permissions flow" style="display:block; width:100%; height:auto;">
</div>

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/chatbot_flow.png" alt="Chatbot flow" style="display:block; width:68%; height:auto; margin:0 auto;">
</div>

## System Architecture

The project was built as a **distributed system** integrating three main layers:

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/system_design.png" alt="System design" style="display:block; width:100%; height:auto;">
</div>

### 1. Mobile Frontend (iOS)

Developed entirely in **SwiftUI**, the iOS app handles:
- Map rendering and annotations with **MapKit**
- Real-time location tracking using **CoreLocation**
- API communication over **HTTPS**
- A responsive and declarative UI structure using **MVVM** and **Coordinator** patterns  


### 2. Backend Infrastructure

The backend was deployed on a **DigitalOcean VPS** following an **IaaS** model, containerized with **Docker** for portability and modularity.

**Main components:**
- **Nginx** — reverse proxy and TLS termination  
- **Gunicorn + Flask** — API and application logic  
- **SQLite** — lightweight data persistence for conversation history  
- **Flask-Caching** — to reduce redundant AI calls  
- **Let’s Encrypt** — for automated SSL certification  

A **CI/CD pipeline** using **GitHub Actions** automated build, test, and deployment.

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/gunicorn.png" alt="Gunicorn" style="display:block; width:100%; height:auto;">
</div>

### 3. AI Integration

To bring intelligence to the system, the backend connects to **Replicate**, a cloud service providing API access to pre-trained AI models like **Meta’s LLaMa 3 70B**.

This integration powers:
- The **chatbot**, generating historical and contextual responses  
- The **recommendation engine**, curating nearby attractions  


## Docker & Deployment

The entire backend runs in a **Dockerized environment**, ensuring consistent behavior between local and production deployments.  
**Docker Compose** simplifies orchestration, spinning up Nginx, Gunicorn, Flask, and Certbot services with a single command.

**Benefits:**
- Environment consistency  
- Easy scalability  
- Simplified CI/CD automation  

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/github_actions.png" alt="GitHub Actions" style="display:block; width:100%; height:auto;">
</div>


## Monitoring & Testing

Observability was built into each layer:

- **Frontend:** integrated with **Firebase** for crash reporting, performance tracing, and analytics.  
- **Backend:** instrumented with **Prometheus** and **Grafana** for real-time metrics and API health tracking.  
- **Testing:** automated **end-to-end UI tests** using **XCUITest** to validate the full user journey.

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/monitoring.png" alt="Monitoring" style="display:block; width:100%; height:auto;">
  
</div>

#### Prometheus and Grafana

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/uclm/grafana_prometheus.png" alt="Grafana Prometheus" style="display:block; width:100%; height:auto;">
  
</div>

> 🙏 **Final note:**  
> I want to express my deepest gratitude to [Carmen](https://esiiab.uclm.es/personal/carrion-espinosa-carmen/) for her support and guidance — she helped me find the right path for this project.  
