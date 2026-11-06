const fs = require('fs');
const path = require('path');

// Generate a valid PDF document containing Akshaya Robinse's actual resume
const content = `%PDF-1.4
1 0 obj
<< /Title (Akshaya Robinse - Resume)
   /Author (Akshaya Robinse)
   /Creator (Akshaya Robinse Portfolio)
   /Producer (Akshaya Robinse Resume Generator)
   /CreationDate (D:20261106000000)
>>
endobj
2 0 obj
<< /Type /Catalog
   /Pages 3 0 R
>>
endobj
3 0 obj
<< /Type /Pages
   /Kids [4 0 R]
   /Count 1
>>
endobj
4 0 obj
<< /Type /Page
   /Parent 3 0 R
   /MediaBox [0 0 612 792]
   /Resources <<
     /Font <<
       /F1 5 0 R
       /F2 6 0 R
     >>
   >>
   /Contents 7 0 R
>>
endobj
5 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica-Bold
>>
endobj
6 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica
>>
endobj
7 0 obj
<< /Length 1420 >>
stream
BT
/F1 22 Tf
50 740 Td
(AKSHAYA ROBINSE) Tj
0 -20 Td
/F2 11 Tf
(Student | Aspiring Software Developer) Tj
0 -15 Td
(Email: akshayarobinse@gmail.com | Location: India) Tj
0 -30 Td
/F1 13 Tf
(EDUCATION) Tj
0 -16 Td
/F1 11 Tf
(Amal Jyothi College of Engineering, Kanjirappally) Tj
0 -14 Td
/F2 10 Tf
(Affiliated with APJ Abdul Kalam Technological University - KTU) Tj
0 -14 Td
(Degree: Bachelor of Technology (B.Tech) in Computer Science and Engineering) Tj
0 -14 Td
(Academic Year: First Year | Batch: 2026 - 2030 | Status: Currently Pursuing) Tj
0 -26 Td
/F1 13 Tf
(ABOUT ME) Tj
0 -16 Td
/F2 10 Tf
(First-year B.Tech Computer Science student passionate about software, programming, and) Tj
0 -14 Td
(exploring the endless possibilities of technology. Focused on building strong foundations) Tj
0 -14 Td
(in computer science, experimenting with code, and developing impactful solutions.) Tj
0 -26 Td
/F1 13 Tf
(TECHNICAL SKILLS) Tj
0 -16 Td
/F2 10 Tf
(Programming: C, C++, Python) Tj
0 -14 Td
(Web Technologies: HTML5) Tj
0 -14 Td
(Competencies: Structured Programming, OOP Fundamentals, Algorithmic Thinking) Tj
0 -26 Td
/F1 13 Tf
(SOFT SKILLS) Tj
0 -16 Td
/F2 10 Tf
(Communication, Teamwork, Problem Solving, Adaptability, Time Management,) Tj
0 -14 Td
(Quick Learning, Creativity, Leadership, Collaboration, Self Motivation) Tj
0 -26 Td
/F1 13 Tf
(AREAS OF INTEREST) Tj
0 -16 Td
(Software Development, Artificial Intelligence, Web Development, Technology Exploration,) Tj
0 -14 Td
(App Development, UI/UX Design, Cloud Computing, Machine Learning) Tj
0 -26 Td
/F1 13 Tf
(LANGUAGES & HOBBIES) Tj
0 -16 Td
/F2 10 Tf
(Languages: English, Malayalam, Hindi) Tj
0 -14 Td
(Hobbies: Listening to music, Drawing, Reading) Tj
ET
endstream
endobj
xref
0 8
0000000000 65535 f 
0000000010 00000 n 
0000000192 00000 n 
0000000249 00000 n 
0000000308 00000 n 
0000000455 00000 n 
0000000537 00000 n 
0000000614 00000 n 
trailer
<< /Size 8
   /Root 2 0 R
   /Info 1 0 R
>>
startxref
2100
%%EOF
`;

const dest = path.join(__dirname, '..', 'public', 'resume.pdf');
fs.writeFileSync(dest, content);
console.log('Successfully wrote', dest);

