import fs              from 'fs';
import { PDFDocument } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
pdfDoc.addPage();
const page = pdfDoc.getPage(0);

const testpng = await pdfDoc.embedPng(fs.readFileSync(`test2.png`));
testpng.scaleToFit(150, 30);

page.drawImage(testpng, {
  x: 10, y: 10, width: 150, height: 30
});
fs.writeFileSync('output2.pdf', await pdfDoc.save());
