import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './Sual.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Sual = () => {
  return (
    <>
      <Header />
      <h3 className='sual-cavab'>Sual-Cavab</h3>
      <div className="Sual-button">
        <button className='sc-btn1' >
          Bütün Suallar
        </button>

        <button className='sc-btn2' variant="contained">
          Filiallar üzrə
        </button>
        <button className='sc-btn3' variant="contained">
          Satış üzrə
        </button>
        <button className='sc-btn4' variant="contained">
          Mobil telefonlar üzrə
        </button>
      </div>
      <div className="accordion-container">
        <Accordion className="custom-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Mağazalarınız harada yerləşir və iş saatları barədə məlumat əldə etmək istərdim
          </AccordionSummary>
          <AccordionDetails>
            Bakı, Sumqayıt, Xırdalan mağazalarımızın iş saatı : 10:00 - 21:00.
            Hövsan mağazalarımızın iş saatı :  09:00 - 20:00.
            28 Mall mağazası iş saatı : 10:00 – 22:00 (Hissəli alış şöbəsi 21:00)
            Naxçıvan,Zaqatala,Füzuli ,Qəbələ, Quba, Göyçay, Bərdə, Gəncə, Masallı, Lənkəran, Xaçmaz, Şəmkir, Yevlax, Sabirabad, İmişli, Cəlilabad, Ağcabədi, Tovuz, Şəki, Ağdaş, Kürdəmir mağazalarımızın iş saatı : 09:00 - 20:00.
          </AccordionDetails>
        </Accordion>
        <Accordion className="custom-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Sizdə çatdırılma xidməti var və hansı ərazilər üzrə həyata keçirilir?
          </AccordionSummary>
          <AccordionDetails>
            Bəli, çatdırılma mövcuddur və Azərbaycana dəyəri 50 AZN-dən yuxarı olan məhsulların istər hissəli, istərsə də nağd, taksit kartları ilə alışı zamanı çatdırılma xidməti mövcuddur və pulsuzdur
          </AccordionDetails>
        </Accordion>
        <Accordion className="custom-accordion" defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Mağazalara yaxınlaşmadan aylıq ödənişimi harada və necə edə bilərəm?
          </AccordionSummary>
          <AccordionDetails>
            Mağazalara yaxınlaşmadan aylıq ödənişimi harada və necə edə bilərəm?
            Aylıq ödənişlərinizi irshad.az saytı və İrşad tətbiqində, MilliÖN, eMANAT terminalları, Million.az, e-pul.az və HESAB.AZ saytı vasitəsi ilə onlayn şəkildə həyata keçirə bilərsiniz.
MilliÖN və ya eManat terminalı >>> 2. Səhifə (Mağazalar şəbəkəsi -  E-Ticarət) >>> İrşad. İlk xanada 6 rəqəmli müştəri kodu, növbəti xanada isə şəxsiyyyət vəsiqəsi fərdi identifikasiya kodunu (FİN KOD) qeyd edərək ödəniş edə bilərsiniz.<br />
Hesab.az, e-pul.az >>> Mağazalar krediti >>> İrşad <br />
e-pul.az >>> Mağazalar şəbəkəsi >>> İrşad
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="Sual-button2">
        <button className='sc-btn5
        '> Daha çoxuna bax</button>
      </div>
      <Footer />
    </>
  );
}

export default Sual