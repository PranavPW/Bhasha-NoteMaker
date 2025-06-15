import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Note } from '../types/Note';
import { getLanguageByCode } from './languages';

export const exportToPDF = async (note: Note): Promise<void> => {
  try {
    const language = getLanguageByCode(note.language);
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = language?.fontFamily || 'Noto Sans, sans-serif';
    element.style.fontSize = '14px';
    element.style.lineHeight = '1.6';
    element.style.direction = language?.rtl ? 'rtl' : 'ltr';
    element.style.backgroundColor = 'white';
    element.style.width = '800px';
    
    element.innerHTML = `
      <h1 style="font-size: 24px; margin-bottom: 20px; color: #1f2937;">${note.title}</h1>
      <div style="margin-bottom: 10px; color: #6b7280; font-size: 12px;">
        Language: ${language?.nativeName || note.language} | 
        Created: ${note.createdAt.toLocaleDateString()} | 
        Updated: ${note.updatedAt.toLocaleDateString()}
      </div>
      <div style="white-space: pre-wrap;">${note.content}</div>
    `;
    
    document.body.appendChild(element);
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    });
    
    document.body.removeChild(element);
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    pdf.save(`${note.title || 'note'}.pdf`);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    throw new Error('Failed to export PDF');
  }
};

export const exportToWord = (note: Note): void => {
  try {
    const language = getLanguageByCode(note.language);
    const content = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: ${language?.fontFamily || 'Noto Sans, sans-serif'}; 
            direction: ${language?.rtl ? 'rtl' : 'ltr'};
            line-height: 1.6;
            margin: 20px;
        }
        h1 { color: #1f2937; margin-bottom: 20px; }
        .meta { color: #6b7280; font-size: 12px; margin-bottom: 20px; }
        .content { white-space: pre-wrap; }
    </style>
</head>
<body>
    <h1>${note.title}</h1>
    <div class="meta">
        Language: ${language?.nativeName || note.language} | 
        Created: ${note.createdAt.toLocaleDateString()} | 
        Updated: ${note.updatedAt.toLocaleDateString()}
    </div>
    <div class="content">${note.content}</div>
</body>
</html>
    `;
    
    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${note.title || 'note'}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error exporting to Word:', error);
    throw new Error('Failed to export to Word');
  }
};

export const shareByEmail = (note: Note): void => {
  try {
    const language = getLanguageByCode(note.language);
    const subject = encodeURIComponent(`Academic Note: ${note.title}`);
    const body = encodeURIComponent(`
Note Title: ${note.title}
Language: ${language?.nativeName || note.language}
Created: ${note.createdAt.toLocaleDateString()}
Updated: ${note.updatedAt.toLocaleDateString()}

Content:
${note.content}

---
Sent from Keep Your Docs - Academic Notes App
    `);
    
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  } catch (error) {
    console.error('Error sharing by email:', error);
    throw new Error('Failed to share by email');
  }
};