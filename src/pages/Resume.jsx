// src/pages/Resume.jsx (Updated with PDF generation capability)
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPrint } from 'react-icons/fa';
import PDFResume from '../components/PDFResume';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
  const pdfRef = useRef();

  const downloadPDF = async () => {
    const element = document.getElementById('pdf-resume');
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
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
    
    pdf.save('Manu_Tyagi_Resume.pdf');
  };

  const printResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Resume
          </h1>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-8 print:hidden">
            <button 
              onClick={downloadPDF}
              className="btn-primary inline-flex items-center"
            >
              <FaDownload className="mr-2" />
              Download PDF
            </button>
            <button 
              onClick={printResume}
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center"
            >
              <FaPrint className="mr-2" />
              Print Resume
            </button>
          </div>
          
          {/* PDF Resume Component */}
          <div className="max-w-4xl mx-auto">
            <PDFResume ref={pdfRef} />
          </div>
          
          {/* Note for users */}
          <div className="text-center mt-8 print:hidden">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Tip: You can also right-click and select "Save as PDF" when printing
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;