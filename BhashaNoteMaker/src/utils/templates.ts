import { Template, TemplateCategory } from '../types/Template';

export const documentTemplates: TemplateCategory[] = [
  {
    id: 'letters',
    name: 'Letters',
    icon: '✉️',
    description: 'Formal and informal letter templates',
    templates: [
      {
        id: 'formal-letter-en',
        name: 'Formal Business Letter',
        category: 'letters',
        description: 'Professional business letter template',
        preview: 'Formal business correspondence with proper formatting',
        language: 'en',
        tags: ['business', 'formal', 'professional'],
        isPopular: true,
        content: `[Your Name]
[Your Address]
[City, State ZIP Code]
[Your Email]
[Your Phone Number]

[Date]

[Recipient's Name]
[Recipient's Title]
[Company Name]
[Company Address]
[City, State ZIP Code]

Dear [Recipient's Name],

I am writing to [state the purpose of your letter]. [Provide context and background information].

[Main body paragraph 1: Explain your main point or request in detail]

[Main body paragraph 2: Provide supporting information, evidence, or additional details]

[Main body paragraph 3: Address any potential concerns or provide additional context]

I would appreciate [specific action you want the recipient to take]. Please feel free to contact me at [your phone number] or [your email] if you need any additional information.

Thank you for your time and consideration. I look forward to hearing from you soon.

Sincerely,

[Your Signature]
[Your Typed Name]
[Your Title]`
      },
      {
        id: 'informal-letter-en',
        name: 'Informal Personal Letter',
        category: 'letters',
        description: 'Casual letter to friends or family',
        preview: 'Friendly personal letter template',
        language: 'en',
        tags: ['personal', 'informal', 'friendly'],
        content: `Dear [Friend's Name],

I hope this letter finds you in good health and high spirits. It's been [time period] since we last spoke, and I wanted to catch up with you.

[Share personal news, experiences, or updates about your life]

[Ask about their life, work, family, or interests]

[Share memories, plans, or express feelings]

I miss our [conversations/time together] and hope we can [meet soon/stay in touch more regularly]. Please give my regards to [family members/mutual friends].

Looking forward to hearing from you soon.

With love and best wishes,

[Your Name]

P.S. [Add any additional thoughts or reminders]`
      },
      {
        id: 'complaint-letter-en',
        name: 'Complaint Letter',
        category: 'letters',
        description: 'Template for filing complaints',
        preview: 'Professional complaint letter format',
        language: 'en',
        tags: ['complaint', 'formal', 'business'],
        content: `[Your Name]
[Your Address]
[City, State ZIP Code]
[Your Email]
[Your Phone Number]

[Date]

[Manager's Name]
[Company Name]
[Company Address]
[City, State ZIP Code]

Subject: Complaint Regarding [Brief Description of Issue]

Dear Sir/Madam,

I am writing to formally complain about [describe the issue/problem]. This incident occurred on [date] at [location/time].

Details of the Complaint:
- [Specific detail 1]
- [Specific detail 2]
- [Specific detail 3]

Impact of the Issue:
[Explain how this issue has affected you - financially, emotionally, or otherwise]

Evidence:
[Mention any supporting documents, receipts, photos, or witness information]

Resolution Requested:
I would like to request [specific action you want taken - refund, replacement, apology, etc.].

I trust that you will investigate this matter promptly and provide a satisfactory resolution within [timeframe]. I can be reached at [contact information] for any further clarification.

I look forward to your prompt response.

Yours sincerely,

[Your Signature]
[Your Typed Name]

Attachments: [List any documents attached]`
      },
      {
        id: 'formal-letter-hi',
        name: 'औपचारिक पत्र',
        category: 'letters',
        description: 'व्यावसायिक औपचारिक पत्र टेम्प्लेट',
        preview: 'हिंदी में औपचारिक व्यावसायिक पत्र',
        language: 'hi',
        tags: ['व्यावसायिक', 'औपचारिक', 'हिंदी'],
        isPopular: true,
        content: `[आपका नाम]
[आपका पता]
[शहर, राज्य पिन कोड]
[आपका ईमेल]
[आपका फोन नंबर]

दिनांक: [तारीख]

[प्राप्तकर्ता का नाम]
[प्राप्तकर्ता का पद]
[कंपनी का नाम]
[कंपनी का पता]
[शहर, राज्य पिन कोड]

विषय: [पत्र का विषय]

महोदय/महोदया,

सविनय निवेदन है कि [पत्र का मुख्य उद्देश्य बताएं]। [संदर्भ और पृष्ठभूमि की जानकारी प्रदान करें]।

[मुख्य पैराग्राफ 1: अपने मुख्य बिंदु या अनुरोध को विस्तार से समझाएं]

[मुख्य पैराग्राफ 2: सहायक जानकारी, साक्ष्य या अतिरिक्त विवरण प्रदान करें]

[मुख्य पैराग्राफ 3: किसी भी संभावित चिंता का समाधान करें या अतिरिक्त संदर्भ प्रदान करें]

मैं [विशिष्ट कार्रवाई जो आप चाहते हैं] की सराहना करूंगा। यदि आपको कोई अतिरिक्त जानकारी चाहिए तो कृपया मुझसे [आपका फोन नंबर] या [आपका ईमेल] पर संपर्क करने में संकोच न करें।

आपके समय और विचार के लिए धन्यवाद। मैं जल्द ही आपसे सुनने की प्रतीक्षा कर रहा हूं।

सधन्यवाद,

[आपका हस्ताक्षर]
[आपका टाइप किया गया नाम]
[आपका पद]`
      }
    ]
  },
  {
    id: 'resumes',
    name: 'Resumes & CVs',
    icon: '📄',
    description: 'Professional resume and CV templates',
    templates: [
      {
        id: 'modern-resume-en',
        name: 'Modern Professional Resume',
        category: 'resumes',
        description: 'Clean, modern resume template',
        preview: 'Contemporary resume with clean formatting',
        language: 'en',
        tags: ['professional', 'modern', 'career'],
        isPopular: true,
        content: `# [Your Full Name]

**[Your Professional Title]**

📧 [your.email@example.com] | 📱 [Your Phone Number]  
🌐 [LinkedIn Profile] | 💼 [Portfolio Website]  
📍 [City, State/Country]

---

## Professional Summary

[Write a compelling 2-3 sentence summary highlighting your key strengths, years of experience, and career objectives. Focus on what makes you unique and valuable to potential employers.]

---

## Core Competencies

• **Technical Skills:** [List relevant technical skills]
• **Software Proficiency:** [List software/tools you're proficient in]
• **Languages:** [List languages and proficiency levels]
• **Certifications:** [List relevant certifications]

---

## Professional Experience

### [Job Title] | [Company Name]
**[Start Date] - [End Date]** | [Location]

• [Achievement-focused bullet point with quantifiable results]
• [Another accomplishment that demonstrates your impact]
• [Third bullet point showing skills and responsibilities]
• [Fourth point highlighting leadership or collaboration]

### [Previous Job Title] | [Previous Company Name]
**[Start Date] - [End Date]** | [Location]

• [Achievement-focused bullet point with quantifiable results]
• [Another accomplishment that demonstrates your impact]
• [Third bullet point showing skills and responsibilities]

---

## Education

### [Degree] in [Field of Study]
**[University Name]** | [Graduation Year]
- GPA: [If 3.5 or higher]
- Relevant Coursework: [List 3-4 relevant courses]
- Honors/Awards: [List any academic achievements]

---

## Projects & Achievements

### [Project Name]
**[Date]** | [Technology/Tools Used]
- [Brief description of the project and your role]
- [Key achievement or outcome]
- [Link to project if available]

### [Another Project Name]
**[Date]** | [Technology/Tools Used]
- [Brief description of the project and your role]
- [Key achievement or outcome]

---

## Additional Information

• **Volunteer Experience:** [Brief description of volunteer work]
• **Professional Memberships:** [List relevant professional organizations]
• **Interests:** [List 3-4 professional or relevant personal interests]`
      },
      {
        id: 'academic-cv-en',
        name: 'Academic CV',
        category: 'resumes',
        description: 'Comprehensive academic curriculum vitae',
        preview: 'Detailed academic CV for researchers and educators',
        language: 'en',
        tags: ['academic', 'research', 'education'],
        content: `# [Your Full Name], [Degrees/Titles]

**[Your Academic Title/Position]**  
[Department Name]  
[Institution Name]  
[Address]  
[City, State/Country, ZIP/Postal Code]

📧 [academic.email@university.edu] | 📱 [Phone Number]  
🌐 [Academic Website/Profile] | 🔬 [ORCID ID]

---

## Education

### [Degree] in [Field]
**[University Name]** | [Year]
- Dissertation: "[Title of Dissertation]"
- Advisor: [Advisor Name]
- Committee: [Committee Members]

### [Previous Degree] in [Field]
**[University Name]** | [Year]
- Thesis: "[Title of Thesis]" (if applicable)
- GPA: [If relevant]

---

## Academic Positions

### [Current Position Title]
**[Institution Name]** | [Start Date] - Present
- [Key responsibility or achievement]
- [Another responsibility or achievement]

### [Previous Position Title]
**[Institution Name]** | [Start Date] - [End Date]
- [Key responsibility or achievement]
- [Another responsibility or achievement]

---

## Research Interests

• [Research Area 1]: [Brief description]
• [Research Area 2]: [Brief description]
• [Research Area 3]: [Brief description]

---

## Publications

### Peer-Reviewed Journal Articles

1. [Author Names]. ([Year]). "[Article Title]." *Journal Name*, Volume(Issue), pages. DOI: [DOI]

2. [Author Names]. ([Year]). "[Article Title]." *Journal Name*, Volume(Issue), pages. DOI: [DOI]

### Conference Proceedings

1. [Author Names]. ([Year]). "[Paper Title]." In *Proceedings of [Conference Name]* (pp. pages). [Location]: [Publisher].

### Book Chapters

1. [Author Names]. ([Year]). "[Chapter Title]." In [Editor Names] (Eds.), *Book Title* (pp. pages). [Location]: [Publisher].

---

## Grants and Funding

### External Funding

• **[Grant Name]** | [Funding Agency] | [Amount] | [Years]
  - Role: [Principal Investigator/Co-Investigator]
  - Project: [Brief description]

### Internal Funding

• **[Grant Name]** | [Institution] | [Amount] | [Year]
  - Project: [Brief description]

---

## Teaching Experience

### [Course Title] ([Course Code])
**[Institution]** | [Semester/Year]
- Enrollment: [Number] students
- [Key teaching method or achievement]

### [Course Title] ([Course Code])
**[Institution]** | [Semester/Year]
- Enrollment: [Number] students
- [Key teaching method or achievement]

---

## Conference Presentations

### Invited Talks

• "[Presentation Title]." [Conference Name], [Location], [Date].

### Contributed Presentations

• "[Presentation Title]." [Conference Name], [Location], [Date].

---

## Professional Service

### Editorial Service
• [Journal Name]: [Role] ([Years])

### Review Activities
• Reviewer for: [List journals/conferences]

### Committee Service
• [Committee Name]: [Role] ([Years])

---

## Awards and Honors

• [Award Name] | [Organization] | [Year]
• [Award Name] | [Organization] | [Year]

---

## Professional Memberships

• [Professional Organization 1] ([Years])
• [Professional Organization 2] ([Years])

---

## Skills and Competencies

• **Research Methods:** [List relevant methods]
• **Software/Tools:** [List relevant software]
• **Languages:** [List languages and proficiency]

---

## References

Available upon request.`
      },
      {
        id: 'resume-hi',
        name: 'व्यावसायिक बायोडाटा',
        category: 'resumes',
        description: 'हिंदी में व्यावसायिक बायोडाटा टेम्प्लेट',
        preview: 'हिंदी में आधुनिक बायोडाटा प्रारूप',
        language: 'hi',
        tags: ['व्यावसायिक', 'बायोडाटा', 'हिंदी'],
        content: `# [आपका पूरा नाम]

**[आपका व्यावसायिक पद]**

📧 [आपका.ईमेल@example.com] | 📱 [आपका फोन नंबर]  
🌐 [LinkedIn प्रोफाइल] | 💼 [पोर्टफोलियो वेबसाइट]  
📍 [शहर, राज्य/देश]

---

## व्यावसायिक सारांश

[अपनी मुख्य शक्तियों, अनुभव के वर्षों और करियर के उद्देश्यों को उजागर करने वाला 2-3 वाक्यों का आकर्षक सारांश लिखें। इस बात पर ध्यान दें कि आप संभावित नियोक्ताओं के लिए क्या अनूठा और मूल्यवान बनाता है।]

---

## मुख्य दक्षताएं

• **तकनीकी कौशल:** [प्रासंगिक तकनीकी कौशल की सूची]
• **सॉफ्टवेयर प्रवीणता:** [सॉफ्टवेयर/उपकरण जिनमें आप प्रवीण हैं]
• **भाषाएं:** [भाषाओं और प्रवीणता स्तर की सूची]
• **प्रमाणपत्र:** [प्रासंगिक प्रमाणपत्रों की सूची]

---

## व्यावसायिक अनुभव

### [नौकरी का शीर्षक] | [कंपनी का नाम]
**[प्रारंभ तिथि] - [समाप्ति तिथि]** | [स्थान]

• [मापने योग्य परिणामों के साथ उपलब्धि-केंद्रित बिंदु]
• [आपके प्रभाव को दर्शाने वाली एक और उपलब्धि]
• [कौशल और जिम्मेदारियों को दिखाने वाला तीसरा बिंदु]
• [नेतृत्व या सहयोग को उजागर करने वाला चौथा बिंदु]

### [पिछली नौकरी का शीर्षक] | [पिछली कंपनी का नाम]
**[प्रारंभ तिथि] - [समाप्ति तिथि]** | [स्थान]

• [मापने योग्य परिणामों के साथ उपलब्धि-केंद्रित बिंदु]
• [आपके प्रभाव को दर्शाने वाली एक और उपलब्धि]
• [कौशल और जिम्मेदारियों को दिखाने वाला तीसरा बिंदु]

---

## शिक्षा

### [डिग्री] में [अध्ययन क्षेत्र]
**[विश्वविद्यालय का नाम]** | [स्नातक वर्ष]
- GPA: [यदि 3.5 या अधिक है]
- प्रासंगिक पाठ्यक्रम: [3-4 प्रासंगिक पाठ्यक्रमों की सूची]
- सम्मान/पुरस्कार: [किसी भी शैक्षणिक उपलब्धि की सूची]

---

## परियोजनाएं और उपलब्धियां

### [परियोजना का नाम]
**[तारीख]** | [प्रयुक्त तकनीक/उपकरण]
- [परियोजना और आपकी भूमिका का संक्षिप्त विवरण]
- [मुख्य उपलब्धि या परिणाम]
- [यदि उपलब्ध हो तो परियोजना का लिंक]

### [दूसरी परियोजना का नाम]
**[तारीख]** | [प्रयुक्त तकनीक/उपकरण]
- [परियोजना और आपकी भूमिका का संक्षिप्त विवरण]
- [मुख्य उपलब्धि या परिणाम]

---

## अतिरिक्त जानकारी

• **स्वयंसेवी अनुभव:** [स्वयंसेवी कार्य का संक्षिप्त विवरण]
• **व्यावसायिक सदस्यता:** [प्रासंगिक व्यावसायिक संगठनों की सूची]
• **रुचियां:** [3-4 व्यावसायिक या प्रासंगिक व्यक्तिगत रुचियों की सूची]`
      }
    ]
  },
  {
    id: 'academic',
    name: 'Academic Documents',
    icon: '🎓',
    description: 'Academic papers, essays, and research documents',
    templates: [
      {
        id: 'research-paper-en',
        name: 'Research Paper',
        category: 'academic',
        description: 'Academic research paper template',
        preview: 'Structured academic research paper format',
        language: 'en',
        tags: ['research', 'academic', 'paper'],
        isPopular: true,
        content: `# [Paper Title]: [Subtitle if applicable]

**Author(s):** [Your Name]¹, [Co-author Name]²  
**Affiliation(s):** ¹[Your Institution], ²[Co-author Institution]  
**Email:** [corresponding.author@institution.edu]

---

## Abstract

[Write a concise summary of your research in 150-250 words. Include the purpose, methodology, key findings, and conclusions. This should be a standalone summary that gives readers a complete overview of your work.]

**Keywords:** [5-7 relevant keywords separated by commas]

---

## 1. Introduction

### 1.1 Background and Context

[Provide background information on your research topic. Explain why this research is important and relevant to the field.]

### 1.2 Problem Statement

[Clearly state the problem or research question you are addressing.]

### 1.3 Research Objectives

The main objectives of this study are:
- [Objective 1]
- [Objective 2]
- [Objective 3]

### 1.4 Research Questions/Hypotheses

- **RQ1:** [Research Question 1]
- **RQ2:** [Research Question 2]
- **H1:** [Hypothesis 1]
- **H2:** [Hypothesis 2]

---

## 2. Literature Review

### 2.1 Theoretical Framework

[Discuss the theoretical foundation of your research.]

### 2.2 Previous Studies

[Review relevant previous research, identifying gaps that your study addresses.]

### 2.3 Research Gap

[Clearly identify the gap in existing literature that your research fills.]

---

## 3. Methodology

### 3.1 Research Design

[Describe your overall research approach - quantitative, qualitative, or mixed methods.]

### 3.2 Data Collection

[Explain how you collected your data, including:]
- **Participants/Sample:** [Description of your sample]
- **Data Collection Methods:** [Surveys, interviews, observations, etc.]
- **Timeline:** [When data was collected]

### 3.3 Data Analysis

[Describe your analytical approach and tools used.]

### 3.4 Ethical Considerations

[Discuss any ethical considerations and approvals obtained.]

---

## 4. Results

### 4.1 Descriptive Statistics

[Present basic descriptive information about your data.]

### 4.2 Main Findings

[Present your key findings, organized by research question or theme.]

#### 4.2.1 Finding 1
[Detailed presentation of first major finding]

#### 4.2.2 Finding 2
[Detailed presentation of second major finding]

### 4.3 Additional Analyses

[Present any additional or supplementary analyses.]

---

## 5. Discussion

### 5.1 Interpretation of Results

[Interpret your findings in the context of your research questions and existing literature.]

### 5.2 Implications

#### 5.2.1 Theoretical Implications
[Discuss how your findings contribute to theory.]

#### 5.2.2 Practical Implications
[Discuss practical applications of your findings.]

### 5.3 Limitations

[Acknowledge the limitations of your study.]

### 5.4 Future Research Directions

[Suggest areas for future research based on your findings.]

---

## 6. Conclusion

[Summarize your key findings, their significance, and their contribution to the field. Restate how you addressed your research questions and achieved your objectives.]

---

## References

[List all references in appropriate academic format (APA, MLA, Chicago, etc.)]

1. Author, A. A. (Year). Title of work. *Journal Name*, Volume(Issue), pages.

2. Author, B. B., & Author, C. C. (Year). *Title of book*. Publisher.

---

## Appendices

### Appendix A: [Title]
[Additional materials, data, or detailed information]

### Appendix B: [Title]
[Survey instruments, interview guides, etc.]`
      },
      {
        id: 'essay-en',
        name: 'Academic Essay',
        category: 'academic',
        description: 'Structured academic essay template',
        preview: 'Five-paragraph essay structure with citations',
        language: 'en',
        tags: ['essay', 'academic', 'writing'],
        content: `# [Essay Title]

**Student Name:** [Your Name]  
**Course:** [Course Name and Number]  
**Instructor:** [Professor Name]  
**Date:** [Submission Date]

---

## Introduction

[Hook: Start with an attention-grabbing opening sentence that relates to your topic.]

[Background: Provide necessary context and background information for your topic.]

[Thesis Statement: Present your main argument or central claim. This should be specific, debatable, and clearly state your position on the topic.]

---

## Body Paragraph 1: [Topic Sentence/Main Point]

[Topic Sentence: Introduce the main idea of this paragraph that supports your thesis.]

[Evidence: Present specific evidence, examples, data, or quotes from credible sources to support your point.]

[Analysis: Explain how this evidence supports your argument. Don't just present facts—analyze their significance.]

[Connection: Link this point back to your thesis and transition to the next paragraph.]

---

## Body Paragraph 2: [Topic Sentence/Main Point]

[Topic Sentence: Introduce the second main idea that supports your thesis.]

[Evidence: Present additional evidence, examples, or expert opinions that strengthen your argument.]

[Analysis: Provide detailed analysis of how this evidence supports your thesis. Consider different perspectives.]

[Connection: Connect this point to your overall argument and prepare for the next section.]

---

## Body Paragraph 3: [Topic Sentence/Main Point]

[Topic Sentence: Present your third supporting point or address potential counterarguments.]

[Evidence: Provide the strongest evidence or address opposing viewpoints fairly.]

[Analysis: Offer thorough analysis that demonstrates the strength of your position.]

[Connection: Reinforce how this final point solidifies your thesis.]

---

## Conclusion

[Restatement: Restate your thesis in different words, showing how you've proven your point.]

[Summary: Briefly summarize your main supporting points without introducing new information.]

[Broader Implications: Discuss the significance of your argument and its broader implications.]

[Closing Thought: End with a memorable final thought that reinforces your thesis and leaves a lasting impression.]

---

## Works Cited

[Include all sources cited in your essay using the appropriate citation style (MLA, APA, Chicago, etc.)]

Author, A. A. "Title of Article." *Title of Journal*, vol. #, no. #, Year, pp. ##-##.

Author, B. B. *Title of Book*. Publisher, Year.

"Title of Web Page." *Website Name*, Date of Publication, URL.`
      },
      {
        id: 'thesis-proposal-en',
        name: 'Thesis Proposal',
        category: 'academic',
        description: 'Graduate thesis proposal template',
        preview: 'Comprehensive thesis proposal structure',
        language: 'en',
        tags: ['thesis', 'proposal', 'graduate'],
        content: `# [Thesis Title]: [Subtitle]

**A Thesis Proposal Submitted to [Department Name]**  
**[University Name]**

**Submitted by:** [Your Full Name]  
**Student ID:** [Your Student ID]  
**Program:** [Degree Program]  
**Supervisor:** [Supervisor Name]  
**Date:** [Submission Date]

---

## 1. Introduction and Background

### 1.1 Research Context

[Provide a comprehensive overview of the research area and its significance. Explain the broader context in which your research sits.]

### 1.2 Problem Statement

[Clearly articulate the specific problem or research gap that your thesis will address. Explain why this problem is important and worth investigating.]

### 1.3 Research Rationale

[Justify why this research is necessary and timely. Explain the potential contributions to knowledge and practice.]

---

## 2. Literature Review

### 2.1 Theoretical Framework

[Discuss the theoretical foundations that will guide your research. Identify key theories, models, or frameworks relevant to your study.]

### 2.2 Current State of Knowledge

[Review existing literature in your field. Organize this by themes, chronologically, or by methodology. Identify what is already known.]

### 2.3 Research Gaps

[Clearly identify gaps in the existing literature that your research will address. Explain how your work will contribute to filling these gaps.]

### 2.4 Conceptual Framework

[Present a conceptual model or framework that illustrates the relationships between key variables or concepts in your study.]

---

## 3. Research Questions and Objectives

### 3.1 Primary Research Question

[State your main research question clearly and concisely.]

### 3.2 Secondary Research Questions

- [Secondary question 1]
- [Secondary question 2]
- [Secondary question 3]

### 3.3 Research Objectives

**Primary Objective:**
[State your main research objective]

**Secondary Objectives:**
- [Objective 1]
- [Objective 2]
- [Objective 3]

### 3.4 Hypotheses (if applicable)

- **H1:** [Hypothesis 1]
- **H2:** [Hypothesis 2]
- **H3:** [Hypothesis 3]

---

## 4. Methodology

### 4.1 Research Philosophy and Approach

[Explain your research philosophy (positivist, interpretivist, pragmatist) and approach (deductive, inductive, abductive).]

### 4.2 Research Design

[Describe your overall research design - experimental, survey, case study, ethnographic, etc.]

### 4.3 Data Collection

#### 4.3.1 Population and Sampling
- **Target Population:** [Description]
- **Sampling Method:** [Probability/non-probability sampling method]
- **Sample Size:** [Proposed sample size and justification]

#### 4.3.2 Data Collection Methods
- **Primary Data:** [Methods for collecting original data]
- **Secondary Data:** [Existing data sources you will use]
- **Data Collection Instruments:** [Surveys, interview guides, observation protocols]

### 4.4 Data Analysis

[Describe your planned analytical approach, including:]
- **Quantitative Analysis:** [Statistical methods, software]
- **Qualitative Analysis:** [Coding methods, analytical frameworks]
- **Mixed Methods Integration:** [If applicable]

### 4.5 Validity and Reliability

[Discuss how you will ensure the validity and reliability of your research.]

### 4.6 Ethical Considerations

[Address ethical issues and describe how you will obtain necessary approvals.]

---

## 5. Expected Outcomes and Contributions

### 5.1 Expected Findings

[Describe what you expect to find based on your literature review and theoretical framework.]

### 5.2 Theoretical Contributions

[Explain how your research will contribute to theory in your field.]

### 5.3 Practical Implications

[Discuss the practical applications and implications of your expected findings.]

### 5.4 Policy Implications (if applicable)

[Describe any potential policy implications of your research.]

---

## 6. Timeline

| Phase | Activities | Timeline |
|-------|------------|----------|
| Phase 1 | Literature review completion, methodology refinement | [Months 1-3] |
| Phase 2 | Data collection preparation, ethics approval | [Months 4-6] |
| Phase 3 | Data collection | [Months 7-12] |
| Phase 4 | Data analysis | [Months 13-18] |
| Phase 5 | Writing and revision | [Months 19-24] |
| Phase 6 | Final submission and defense | [Month 24] |

---

## 7. Resources and Budget

### 7.1 Required Resources

- **Human Resources:** [Research assistants, transcription services]
- **Equipment:** [Software, hardware, laboratory equipment]
- **Materials:** [Surveys, incentives, travel]

### 7.2 Estimated Budget

| Item | Cost |
|------|------|
| [Budget item 1] | $[Amount] |
| [Budget item 2] | $[Amount] |
| **Total** | **$[Total Amount]** |

---

## 8. Limitations and Challenges

### 8.1 Anticipated Limitations

[Discuss potential limitations of your study and how they might affect your findings.]

### 8.2 Potential Challenges

[Identify potential challenges in conducting your research and your strategies for addressing them.]

---

## 9. Conclusion

[Summarize your proposal, emphasizing the significance of your research and its potential contributions to knowledge and practice.]

---

## References

[Include a comprehensive bibliography of all sources cited in your proposal, formatted according to your discipline's citation style.]

---

## Appendices

### Appendix A: Detailed Literature Review Matrix
[If applicable]

### Appendix B: Proposed Data Collection Instruments
[Draft surveys, interview guides, etc.]

### Appendix C: Ethics Approval Documentation
[If already obtained]`
      }
    ]
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: '📊',
    description: 'Business and technical report templates',
    templates: [
      {
        id: 'business-report-en',
        name: 'Business Report',
        category: 'reports',
        description: 'Professional business report template',
        preview: 'Comprehensive business report structure',
        language: 'en',
        tags: ['business', 'report', 'professional'],
        isPopular: true,
        content: `# [Report Title]

**Prepared for:** [Client/Organization Name]  
**Prepared by:** [Your Name/Team]  
**Date:** [Report Date]  
**Report Number:** [Reference Number]

---

## Executive Summary

[Provide a concise overview of the entire report in 1-2 pages. Include key findings, conclusions, and recommendations. This section should be able to stand alone as a complete summary.]

### Key Findings
- [Key finding 1]
- [Key finding 2]
- [Key finding 3]

### Recommendations
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

---

## Table of Contents

1. Introduction
2. Methodology
3. Findings and Analysis
4. Conclusions
5. Recommendations
6. Implementation Plan
7. Appendices

---

## 1. Introduction

### 1.1 Purpose and Scope

[Explain the purpose of the report and define its scope. What questions does this report aim to answer?]

### 1.2 Background

[Provide relevant background information that readers need to understand the context of the report.]

### 1.3 Objectives

The main objectives of this report are to:
- [Objective 1]
- [Objective 2]
- [Objective 3]

### 1.4 Report Structure

[Briefly outline how the report is organized and what each section covers.]

---

## 2. Methodology

### 2.1 Research Approach

[Describe the overall approach used to gather information and conduct analysis.]

### 2.2 Data Collection Methods

[Detail the methods used to collect data:]
- **Primary Research:** [Surveys, interviews, observations]
- **Secondary Research:** [Literature review, database analysis]
- **Data Sources:** [Specific sources used]

### 2.3 Analysis Framework

[Explain the analytical framework or tools used to analyze the data.]

### 2.4 Limitations

[Acknowledge any limitations in your methodology or data.]

---

## 3. Findings and Analysis

### 3.1 Current Situation Analysis

[Present your analysis of the current state of affairs related to your report topic.]

#### 3.1.1 [Subtopic 1]
[Detailed analysis of first major finding]

#### 3.1.2 [Subtopic 2]
[Detailed analysis of second major finding]

### 3.2 Key Issues Identified

[Highlight the main issues or problems discovered through your analysis.]

1. **[Issue 1]:** [Description and impact]
2. **[Issue 2]:** [Description and impact]
3. **[Issue 3]:** [Description and impact]

### 3.3 Opportunities

[Identify opportunities for improvement or growth.]

### 3.4 Risk Assessment

[Analyze potential risks and their implications.]

---

## 4. Conclusions

### 4.1 Summary of Key Findings

[Summarize the most important findings from your analysis.]

### 4.2 Implications

[Discuss what these findings mean for the organization or stakeholders.]

### 4.3 Critical Success Factors

[Identify factors that will be crucial for success in addressing the issues identified.]

---

## 5. Recommendations

### 5.1 Strategic Recommendations

#### Recommendation 1: [Title]
- **Description:** [Detailed description of the recommendation]
- **Rationale:** [Why this recommendation is important]
- **Expected Benefits:** [What benefits this will bring]
- **Implementation Requirements:** [What's needed to implement this]

#### Recommendation 2: [Title]
- **Description:** [Detailed description]
- **Rationale:** [Why this is recommended]
- **Expected Benefits:** [Benefits expected]
- **Implementation Requirements:** [Requirements for implementation]

### 5.2 Operational Recommendations

[List specific operational changes or improvements recommended.]

### 5.3 Priority Matrix

| Recommendation | Priority | Impact | Effort Required |
|----------------|----------|---------|-----------------|
| [Recommendation 1] | High | High | Medium |
| [Recommendation 2] | Medium | High | Low |
| [Recommendation 3] | Low | Medium | High |

---

## 6. Implementation Plan

### 6.1 Implementation Timeline

| Phase | Activities | Timeline | Responsible Party |
|-------|------------|----------|-------------------|
| Phase 1 | [Activities] | [Timeframe] | [Who's responsible] |
| Phase 2 | [Activities] | [Timeframe] | [Who's responsible] |
| Phase 3 | [Activities] | [Timeframe] | [Who's responsible] |

### 6.2 Resource Requirements

[Detail the resources needed for implementation:]
- **Human Resources:** [Staff requirements]
- **Financial Resources:** [Budget requirements]
- **Technology/Equipment:** [Technical requirements]

### 6.3 Success Metrics

[Define how success will be measured:]
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]

### 6.4 Risk Mitigation

[Identify potential implementation risks and mitigation strategies.]

---

## 7. Conclusion

[Provide a final summary that reinforces the key messages of the report and emphasizes the importance of taking action on the recommendations.]

---

## References

[List all sources referenced in the report]

---

## Appendices

### Appendix A: Detailed Data Analysis
[Include detailed charts, graphs, and statistical analysis]

### Appendix B: Survey Results
[Raw survey data and detailed results]

### Appendix C: Interview Transcripts
[If applicable and with permission]

### Appendix D: Additional Resources
[Relevant documents, forms, or tools]`
      },
      {
        id: 'technical-report-en',
        name: 'Technical Report',
        category: 'reports',
        description: 'Technical documentation and analysis report',
        preview: 'Detailed technical report with specifications',
        language: 'en',
        tags: ['technical', 'engineering', 'analysis'],
        content: `# [Technical Report Title]

**Project:** [Project Name]  
**Document Type:** Technical Report  
**Version:** [Version Number]  
**Date:** [Report Date]  
**Prepared by:** [Author Name(s)]  
**Reviewed by:** [Reviewer Name(s)]  
**Approved by:** [Approver Name]

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial version |
| 1.1 | [Date] | [Author] | [Description of changes] |

---

## Executive Summary

[Provide a high-level technical summary of the report, including key technical findings, conclusions, and recommendations. This should be understandable to both technical and non-technical stakeholders.]

---

## 1. Introduction

### 1.1 Purpose

[State the purpose of this technical report and what technical problems or questions it addresses.]

### 1.2 Scope

[Define the technical scope of the report, including what systems, processes, or technologies are covered.]

### 1.3 Background

[Provide technical background information necessary to understand the context of the report.]

### 1.4 Definitions and Acronyms

| Term | Definition |
|------|------------|
| [Acronym/Term] | [Definition] |
| [Acronym/Term] | [Definition] |

---

## 2. Technical Requirements

### 2.1 Functional Requirements

[List and describe the functional requirements that the technical solution must meet.]

1. **[Requirement 1]:** [Description]
2. **[Requirement 2]:** [Description]
3. **[Requirement 3]:** [Description]

### 2.2 Non-Functional Requirements

[Describe performance, security, reliability, and other non-functional requirements.]

- **Performance:** [Specifications]
- **Security:** [Requirements]
- **Reliability:** [Standards]
- **Scalability:** [Requirements]

### 2.3 Constraints

[List any technical, regulatory, or business constraints that affect the solution.]

---

## 3. Technical Analysis

### 3.1 Current State Assessment

[Analyze the current technical state, including existing systems, processes, and technologies.]

#### 3.1.1 System Architecture
[Describe current system architecture with diagrams if applicable]

#### 3.1.2 Technology Stack
[List current technologies, versions, and configurations]

#### 3.1.3 Performance Metrics
[Current performance data and benchmarks]

### 3.2 Gap Analysis

[Identify gaps between current state and requirements.]

### 3.3 Technical Options Analysis

[Analyze different technical approaches or solutions.]

#### Option 1: [Solution Name]
- **Description:** [Technical description]
- **Advantages:** [Technical benefits]
- **Disadvantages:** [Technical limitations]
- **Cost:** [Implementation cost]
- **Risk:** [Technical risks]

#### Option 2: [Solution Name]
- **Description:** [Technical description]
- **Advantages:** [Technical benefits]
- **Disadvantages:** [Technical limitations]
- **Cost:** [Implementation cost]
- **Risk:** [Technical risks]

---

## 4. Recommended Solution

### 4.1 Solution Overview

[Provide a comprehensive overview of the recommended technical solution.]

### 4.2 Architecture Design

[Describe the technical architecture of the recommended solution.]

#### 4.2.1 System Architecture Diagram
[Include detailed architecture diagrams]

#### 4.2.2 Component Specifications
[Detail each major component of the system]

### 4.3 Technology Specifications

[Specify the technologies, tools, and platforms to be used.]

| Component | Technology | Version | Justification |
|-----------|------------|---------|---------------|
| [Component] | [Technology] | [Version] | [Why chosen] |

### 4.4 Integration Requirements

[Describe how the solution will integrate with existing systems.]

### 4.5 Security Considerations

[Detail security measures and protocols to be implemented.]

---

## 5. Implementation Plan

### 5.1 Implementation Phases

[Break down the implementation into manageable phases.]

#### Phase 1: [Phase Name]
- **Duration:** [Timeframe]
- **Deliverables:** [What will be delivered]
- **Resources:** [Required resources]
- **Dependencies:** [What this phase depends on]

#### Phase 2: [Phase Name]
- **Duration:** [Timeframe]
- **Deliverables:** [What will be delivered]
- **Resources:** [Required resources]
- **Dependencies:** [What this phase depends on]

### 5.2 Resource Requirements

[Detail the technical resources needed for implementation.]

- **Hardware:** [Specifications and quantities]
- **Software:** [Licenses and tools needed]
- **Personnel:** [Technical skills required]
- **Infrastructure:** [Network, storage, etc.]

### 5.3 Testing Strategy

[Describe the testing approach and methodologies.]

#### 5.3.1 Unit Testing
[Approach to unit testing]

#### 5.3.2 Integration Testing
[Integration testing strategy]

#### 5.3.3 Performance Testing
[Performance testing methodology]

#### 5.3.4 Security Testing
[Security testing approach]

---

## 6. Risk Assessment

### 6.1 Technical Risks

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|-------------------|
| [Risk 1] | [High/Med/Low] | [High/Med/Low] | [How to mitigate] |
| [Risk 2] | [High/Med/Low] | [High/Med/Low] | [How to mitigate] |

### 6.2 Implementation Risks

[Identify and assess risks related to implementation.]

---

## 7. Maintenance and Support

### 7.1 Maintenance Requirements

[Describe ongoing maintenance needs and procedures.]

### 7.2 Support Model

[Define the support structure and processes.]

### 7.3 Documentation Requirements

[List technical documentation that needs to be maintained.]

---

## 8. Conclusions and Recommendations

### 8.1 Technical Conclusions

[Summarize key technical conclusions from the analysis.]

### 8.2 Recommendations

[Provide specific technical recommendations.]

1. **[Recommendation 1]:** [Technical recommendation with justification]
2. **[Recommendation 2]:** [Technical recommendation with justification]
3. **[Recommendation 3]:** [Technical recommendation with justification]

### 8.3 Next Steps

[Outline the immediate next steps to move forward with the recommendations.]

---

## References

[List technical references, standards, and documentation used]

---

## Appendices

### Appendix A: Technical Specifications
[Detailed technical specifications and requirements]

### Appendix B: Test Results
[Detailed test results and performance data]

### Appendix C: Code Samples
[Relevant code examples or pseudocode]

### Appendix D: Configuration Details
[System configuration details and parameters]`
      }
    ]
  },
  {
    id: 'creative',
    name: 'Creative Writing',
    icon: '✍️',
    description: 'Creative writing templates and formats',
    templates: [
      {
        id: 'story-outline-en',
        name: 'Story Outline',
        category: 'creative',
        description: 'Template for planning creative stories',
        preview: 'Structured story planning template',
        language: 'en',
        tags: ['creative', 'story', 'writing'],
        content: `# [Story Title]

**Genre:** [Genre]  
**Target Audience:** [Age group/demographic]  
**Word Count Goal:** [Approximate length]  
**Completion Date:** [Target date]

---

## Story Concept

### Logline
[One-sentence summary of your story that captures the main character, conflict, and stakes]

### Premise
[2-3 sentence expansion of the logline that includes the setup, confrontation, and resolution]

### Theme
[The underlying message or meaning of your story]

---

## Characters

### Protagonist: [Character Name]
- **Age:** [Age]
- **Occupation:** [Job/Role]
- **Personality:** [Key personality traits]
- **Background:** [Relevant history]
- **Goal:** [What they want]
- **Motivation:** [Why they want it]
- **Conflict:** [What's stopping them]
- **Arc:** [How they change throughout the story]

### Antagonist: [Character Name]
- **Age:** [Age]
- **Occupation:** [Job/Role]
- **Personality:** [Key personality traits]
- **Background:** [Relevant history]
- **Goal:** [What they want]
- **Motivation:** [Why they want it]
- **Methods:** [How they oppose the protagonist]

### Supporting Characters
1. **[Character Name]:** [Role in story and key traits]
2. **[Character Name]:** [Role in story and key traits]
3. **[Character Name]:** [Role in story and key traits]

---

## Setting

### Time Period
[When the story takes place]

### Location(s)
- **Primary Setting:** [Main location with description]
- **Secondary Settings:** [Other important locations]

### World-Building Notes
[Any special rules, customs, or details about your story world]

---

## Plot Structure

### Act I: Setup (25%)

#### Opening Scene
[How the story begins - establish character, setting, and tone]

#### Inciting Incident
[The event that sets the main plot in motion]

#### Plot Point 1
[The moment that launches the protagonist into the main story]

### Act II: Confrontation (50%)

#### First Half - Rising Action
[Obstacles and challenges the protagonist faces]

#### Midpoint
[Major plot twist or revelation that changes everything]

#### Second Half - Complications
[Increased stakes and more difficult challenges]

#### Plot Point 2
[The crisis that leads to the climax]

### Act III: Resolution (25%)

#### Climax
[The final confrontation between protagonist and antagonist]

#### Falling Action
[Immediate aftermath of the climax]

#### Resolution
[How the story ends and loose ends are tied up]

---

## Scene Breakdown

### Chapter/Scene 1
- **Setting:** [Where and when]
- **Characters:** [Who appears]
- **Purpose:** [What this scene accomplishes]
- **Conflict:** [What tension exists]
- **Outcome:** [How it ends]

### Chapter/Scene 2
- **Setting:** [Where and when]
- **Characters:** [Who appears]
- **Purpose:** [What this scene accomplishes]
- **Conflict:** [What tension exists]
- **Outcome:** [How it ends]

[Continue for each planned scene/chapter]

---

## Subplots

### Subplot 1: [Title/Description]
- **Characters Involved:** [Who's part of this subplot]
- **Purpose:** [How it serves the main story]
- **Resolution:** [How it concludes]

### Subplot 2: [Title/Description]
- **Characters Involved:** [Who's part of this subplot]
- **Purpose:** [How it serves the main story]
- **Resolution:** [How it concludes]

---

## Research Notes

### Topics to Research
- [Research topic 1]
- [Research topic 2]
- [Research topic 3]

### Key Facts/Details
[Important information you've gathered that will inform your story]

---

## Writing Schedule

| Week | Goal | Scenes/Chapters | Word Count Target |
|------|------|-----------------|-------------------|
| Week 1 | [Goal] | [Scenes] | [Words] |
| Week 2 | [Goal] | [Scenes] | [Words] |
| Week 3 | [Goal] | [Scenes] | [Words] |

---

## Notes and Ideas

### Dialogue Ideas
[Memorable lines or conversations you want to include]

### Scene Ideas
[Specific scenes or moments you want to write]

### Revision Notes
[Things to remember for editing and revision]

---

## Inspiration and References

### Similar Works
[Books, movies, or stories that inspire this work]

### Visual References
[Images, locations, or people that inspire characters/settings]

### Mood/Tone References
[Works that capture the mood you're aiming for]`
      },
      {
        id: 'poem-collection-en',
        name: 'Poetry Collection',
        category: 'creative',
        description: 'Template for organizing poetry collections',
        preview: 'Structured poetry collection format',
        language: 'en',
        tags: ['poetry', 'creative', 'collection'],
        content: `# [Collection Title]

**Poet:** [Your Name]  
**Collection Theme:** [Overall theme or concept]  
**Date:** [Completion Date]

---

## Collection Statement

[Write a brief statement about your poetry collection - what themes you explore, your inspiration, and what you hope readers will take away from these poems.]

---

## Table of Contents

### Section I: [Section Title]
1. [Poem Title] ........................... [Page]
2. [Poem Title] ........................... [Page]
3. [Poem Title] ........................... [Page]

### Section II: [Section Title]
4. [Poem Title] ........................... [Page]
5. [Poem Title] ........................... [Page]
6. [Poem Title] ........................... [Page]

### Section III: [Section Title]
7. [Poem Title] ........................... [Page]
8. [Poem Title] ........................... [Page]
9. [Poem Title] ........................... [Page]

---

## Section I: [Section Title]

*[Brief description of this section's theme or focus]*

### [Poem Title 1]

[Your poem text here]
[Line 2]
[Line 3]

[Stanza 2]
[Line 1]
[Line 2]

---

### [Poem Title 2]

[Your poem text here]
[Continue with proper line breaks]
[And stanza formatting]

[Second stanza]
[With appropriate spacing]

---

## Section II: [Section Title]

*[Brief description of this section's theme or focus]*

### [Poem Title 3]

[Your poem text here]
[With proper formatting]
[For the specific poem type]

---

### [Poem Title 4]

[Continue with additional poems]
[Maintaining consistent formatting]

---

## Section III: [Section Title]

*[Brief description of this section's theme or focus]*

### [Poem Title 5]

[Your poem text here]
[Following the same format]

---

## Notes on Form and Style

### Recurring Themes
- [Theme 1]: [Brief description]
- [Theme 2]: [Brief description]
- [Theme 3]: [Brief description]

### Poetic Forms Used
- [Form 1]: [Which poems use this form]
- [Form 2]: [Which poems use this form]
- [Free Verse]: [Which poems are free verse]

### Stylistic Elements
- **Imagery:** [Types of imagery you frequently use]
- **Tone:** [Overall tone of the collection]
- **Voice:** [Description of your poetic voice]

---

## Inspiration and Influences

### Literary Influences
[Poets or writers who have influenced your work]

### Personal Experiences
[Life experiences that inform these poems]

### Cultural/Historical Context
[Any cultural or historical elements that influence the collection]

---

## Publication Notes

### Submission History
| Poem Title | Publication | Date | Status |
|------------|-------------|------|--------|
| [Title] | [Magazine/Journal] | [Date] | [Accepted/Rejected/Pending] |

### Awards and Recognition
[Any awards, contests, or recognition received]

---

## Revision History

### Draft 1: [Date]
[Notes about first draft]

### Draft 2: [Date]
[Changes made in second draft]

### Final Draft: [Date]
[Final revisions and completion notes]

---

## About the Poet

[Brief biographical statement about yourself as a poet, including your background, other publications, and what drives your poetry]

---

## Acknowledgments

[Thank people who helped with the collection - editors, fellow poets, family, friends, publications where individual poems appeared]`
      }
    ]
  },
  {
    id: 'personal',
    name: 'Personal Documents',
    icon: '📝',
    description: 'Personal letters, journals, and documents',
    templates: [
      {
        id: 'journal-entry-en',
        name: 'Journal Entry',
        category: 'personal',
        description: 'Daily journal and reflection template',
        preview: 'Structured personal journal format',
        language: 'en',
        tags: ['journal', 'personal', 'reflection'],
        content: `# Journal Entry - [Date]

**Day:** [Day of the week]  
**Weather:** [Weather conditions]  
**Mood:** [Your current mood/emotional state]  
**Location:** [Where you're writing from]

---

## Today's Highlights

### What Happened Today
[Write about the significant events, activities, or experiences of your day]

### People I Interacted With
- [Person 1]: [Brief note about interaction]
- [Person 2]: [Brief note about interaction]
- [Person 3]: [Brief note about interaction]

### Accomplishments
[List things you accomplished today, both big and small]
- [Accomplishment 1]
- [Accomplishment 2]
- [Accomplishment 3]

---

## Reflections

### What Went Well
[Reflect on positive aspects of your day]

### Challenges I Faced
[Write about any difficulties or obstacles you encountered]

### How I Handled Challenges
[Reflect on your responses to challenges and what you learned]

### Emotions I Experienced
[Explore the emotions you felt today and what triggered them]

---

## Learning and Growth

### Something New I Learned
[What did you discover or learn today?]

### A Realization I Had
[Any insights or "aha" moments]

### How I Grew Today
[Ways you developed personally, professionally, or emotionally]

---

## Gratitude

### Three Things I'm Grateful For
1. [Gratitude item 1 with explanation]
2. [Gratitude item 2 with explanation]
3. [Gratitude item 3 with explanation]

### Someone I Appreciate
[Write about someone you're thankful for and why]

---

## Looking Forward

### Tomorrow's Priorities
- [Priority 1]
- [Priority 2]
- [Priority 3]

### Goals for This Week
[What you want to accomplish in the coming week]

### Something I'm Looking Forward To
[An upcoming event, activity, or experience you're excited about]

---

## Random Thoughts

### Stream of Consciousness
[Let your thoughts flow freely here - no structure needed]

### Ideas and Inspiration
[Capture any creative ideas, inspiration, or random thoughts]

### Questions I'm Pondering
[Any questions you're thinking about or want to explore further]

---

## Self-Care Check-In

### Physical Health
- **Exercise:** [What physical activity did you do?]
- **Nutrition:** [How did you nourish your body?]
- **Sleep:** [How was your sleep last night?]
- **Energy Level:** [Rate 1-10 and describe]

### Mental Health
- **Stress Level:** [Rate 1-10 and describe sources]
- **Mental Clarity:** [How clear and focused did you feel?]
- **Anxiety/Worry:** [Any concerns weighing on your mind?]

### Emotional Health
- **Overall Mood:** [Describe your emotional state]
- **Emotional Triggers:** [What affected your emotions today?]
- **Coping Strategies:** [How did you manage difficult emotions?]

---

## Creative Corner

### Quote of the Day
"[A quote that resonated with you today or reflects your current state of mind]"

### Photo/Memory Description
[Describe a photo you took or a vivid memory from today]

### Doodle/Sketch Space
[Leave space for drawings, doodles, or visual expressions]

---

## Tomorrow's Intention

[Set an intention for tomorrow - how do you want to show up? What energy do you want to bring?]

---

**Closing Thought:** [End with a final reflection, affirmation, or thought for the day]

---

*Written at [Time] from [Location]*`
      },
      {
        id: 'travel-journal-en',
        name: 'Travel Journal',
        category: 'personal',
        description: 'Travel experience documentation template',
        preview: 'Comprehensive travel journal format',
        language: 'en',
        tags: ['travel', 'journal', 'memories'],
        content: `# Travel Journal - [Destination]

**Trip Dates:** [Start Date] - [End Date]  
**Travel Companions:** [Who you traveled with]  
**Trip Purpose:** [Vacation, business, adventure, etc.]  
**Weather:** [General weather conditions during trip]

---

## Pre-Trip Planning

### Expectations
[What were you most excited about? What did you hope to experience?]

### Research Notes
[Key things you learned about the destination beforehand]

### Packing List Highlights
[Items you were glad you brought or wish you had brought]

---

## Day-by-Day Log

### Day 1: [Date] - [Location/Activity]

**Morning:**
[What you did in the morning]

**Afternoon:**
[Afternoon activities and experiences]

**Evening:**
[Evening activities, dinner, nightlife]

**Highlight of the Day:**
[Most memorable moment]

**Unexpected Discovery:**
[Something you didn't plan but enjoyed]

**Food Tried:**
[New foods or memorable meals]

**People Met:**
[Interesting people you encountered]

**Photos Taken:**
[Describe key photos or moments you captured]

---

### Day 2: [Date] - [Location/Activity]

**Morning:**
[Morning activities]

**Afternoon:**
[Afternoon experiences]

**Evening:**
[Evening activities]

**Highlight of the Day:**
[Most memorable moment]

**Challenge Faced:**
[Any difficulties and how you handled them]

**Cultural Observation:**
[Something interesting about local culture]

**Transportation:**
[How you got around, any interesting transport experiences]

---

[Continue for each day of travel]

---

## Experiences and Discoveries

### Must-See Attractions Visited
1. **[Attraction Name]:** [Your experience and rating]
2. **[Attraction Name]:** [Your experience and rating]
3. **[Attraction Name]:** [Your experience and rating]

### Hidden Gems Found
- [Hidden gem 1]: [Why it was special]
- [Hidden gem 2]: [Why it was special]
- [Hidden gem 3]: [Why it was special]

### Local Cuisine Adventures
| Dish/Restaurant | Location | Rating | Notes |
|-----------------|----------|--------|-------|
| [Dish name] | [Restaurant/Place] | [1-5 stars] | [Your thoughts] |
| [Dish name] | [Restaurant/Place] | [1-5 stars] | [Your thoughts] |

### Cultural Experiences
[Festivals, ceremonies, local customs you witnessed or participated in]

---

## People and Connections

### Locals Met
- **[Name/Description]:** [Where you met them and what you learned]
- **[Name/Description]:** [Interaction and impression]

### Fellow Travelers
- **[Name/Description]:** [How you met and shared experiences]

### Language Experiences
[New words learned, communication challenges, funny language mix-ups]

---

## Practical Information

### Accommodation
- **Where:** [Hotel/Airbnb/Hostel name and location]
- **Rating:** [Your rating and why]
- **Highlights:** [What you liked]
- **Would Stay Again:** [Yes/No and why]

### Transportation
- **Getting There:** [How you traveled to destination]
- **Getting Around:** [Local transportation used]
- **Tips:** [Transportation advice for future travelers]

### Budget Breakdown
| Category | Budgeted | Actual | Notes |
|----------|----------|--------|-------|
| Accommodation | $[Amount] | $[Amount] | [Comments] |
| Food | $[Amount] | $[Amount] | [Comments] |
| Activities | $[Amount] | $[Amount] | [Comments] |
| Transportation | $[Amount] | $[Amount] | [Comments] |
| **Total** | **$[Amount]** | **$[Amount]** | |

---

## Reflections and Insights

### Personal Growth
[How did this trip change you or teach you something about yourself?]

### Cultural Insights
[What did you learn about the local culture and people?]

### Travel Lessons Learned
[What would you do differently? What travel skills did you develop?]

### Favorite Memories
1. [Memory 1 with detailed description]
2. [Memory 2 with detailed description]
3. [Memory 3 with detailed description]

### Challenging Moments
[Difficult situations and how you overcame them]

---

## Sensory Memories

### Sounds
[Distinctive sounds you remember - music, street noise, nature sounds]

### Smells
[Memorable scents - food, flowers, ocean, markets]

### Textures
[Things you touched - sand, stone, fabric, water]

### Colors
[Vivid colors that stood out - sunsets, architecture, clothing, nature]

---

## Photo and Souvenir Log

### Best Photos Taken
1. [Photo description and why it's meaningful]
2. [Photo description and why it's meaningful]
3. [Photo description and why it's meaningful]

### Souvenirs Collected
- [Souvenir 1]: [Where you got it and why]
- [Souvenir 2]: [Where you got it and why]
- [Souvenir 3]: [Where you got it and why]

---

## Recommendations for Future Travelers

### Must-Do Activities
[Top recommendations for others visiting this destination]

### Places to Avoid
[Tourist traps or disappointing experiences]

### Packing Recommendations
[What to bring and what to leave at home]

### Best Time to Visit
[Seasonal considerations and timing advice]

### Money-Saving Tips
[How to experience the destination on a budget]

---

## Future Travel Plans

### Places This Trip Inspired You to Visit
[New destinations added to your bucket list]

### Return Plans
[Would you come back? What would you do differently?]

### Next Adventure Ideas
[How this trip influenced your future travel plans]

---

## Final Thoughts

### Overall Trip Rating
[Rate your trip 1-10 and explain your rating]

### Most Valuable Experience
[What was the most meaningful part of your journey?]

### How This Trip Changed You
[Personal transformation or new perspectives gained]

### Message to Future Self
[What do you want to remember about this trip years from now?]

---

**Trip Completed:** [End Date]  
**Journal Completed:** [Date you finished writing]  
**Miles Traveled:** [Approximate distance]  
**Days Away:** [Total days]  
**Memories Made:** Countless

*"[Include a favorite quote from the trip or a personal reflection that captures the essence of your journey]"*`
      }
    ]
  }
];

export const getTemplateById = (id: string): Template | undefined => {
  for (const category of documentTemplates) {
    const template = category.templates.find(t => t.id === id);
    if (template) return template;
  }
  return undefined;
};

export const getTemplatesByCategory = (categoryId: string): Template[] => {
  const category = documentTemplates.find(c => c.id === categoryId);
  return category ? category.templates : [];
};

export const getPopularTemplates = (): Template[] => {
  const popular: Template[] = [];
  documentTemplates.forEach(category => {
    category.templates.forEach(template => {
      if (template.isPopular) {
        popular.push(template);
      }
    });
  });
  return popular;
};

export const searchTemplates = (query: string): Template[] => {
  const results: Template[] = [];
  const searchTerm = query.toLowerCase();
  
  documentTemplates.forEach(category => {
    category.templates.forEach(template => {
      if (
        template.name.toLowerCase().includes(searchTerm) ||
        template.description.toLowerCase().includes(searchTerm) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        category.name.toLowerCase().includes(searchTerm)
      ) {
        results.push(template);
      }
    });
  });
  
  return results;
};