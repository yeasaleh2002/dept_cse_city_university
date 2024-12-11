import React from "react";
import { BreadcrumbsComponent } from "../../../Components";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "FAQ", link: "/faq" },
  ];

  const faqs = [
    {
      question:
        "How does the CSE department at City University prepare students for the tech industry?",
      answer:
        "The CSE department provides students with a rigorous curriculum that combines theoretical foundations with practical skills, covering areas like software engineering, AI, and data science. Students also gain real-world experience through internships and collaborative industry projects.",
    },
    {
      question: "What academic programs are available at the CSE department?",
      answer:
        "The CSE department offers the Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE), as well as various professional certification programs and research opportunities in emerging technologies.",
    },
    {
      question: "What are the career opportunities for CSE graduates?",
      answer:
        "CSE graduates can pursue a wide range of careers, including software development, system architecture, AI research, data science, network security, and IT consulting across various industries.",
    },
    {
      question:
        "What state-of-the-art facilities does the CSE department provide?",
      answer:
        "CSE students have access to well-equipped computer labs, libraries, collaborative project spaces, high-end software, and the latest research tools, fostering a conducive environment for both academic and extracurricular development.",
    },
    {
      question: "Does the CSE department offer scholarships or financial aid?",
      answer:
        "Yes, City University offers a variety of scholarships and financial assistance based on academic achievement, financial need, and merit to support deserving CSE students.",
    },
    {
      question:
        "How can students gain hands-on experience in the CSE department?",
      answer:
        "The department encourages hands-on learning through industry internships, research projects, and collaborative workshops, allowing students to apply classroom knowledge in real-world scenarios and enhance their technical skills.",
    },
    {
      question:
        "What support services are available to CSE students at City University?",
      answer:
        "City University's CSE department provides a wide range of student support services, including academic advising, career counseling, mentoring, and access to workshops, ensuring students have the necessary resources to succeed both academically and professionally.",
    },
  ];

  return (
    <Box>
      <BreadcrumbsComponent title="FAQ" breadcrumbs={breadcrumbs} />
      <Box
        maxWidth="lg"
        marginX="auto"
        sx={{
          p: 2,
          lg: { p: 4 },
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ marginTop: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Frequently Asked Questions
        </Typography>
        <Box>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
