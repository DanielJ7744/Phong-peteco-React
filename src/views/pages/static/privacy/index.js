import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import "./privacy.scss"

const Privacy = () => {
 
  return (
    <Fragment>
      <div className='privacy container'>
        <Row>
          <Col lg='1'></Col>
          <Col sm='12' md='12' lg='10'>            
            <Card className='privacy-box'>
              <CardHeader className='privacy-header'>
                <CardTitle tag='h3'>Politica de confidentialitate</CardTitle>
              </CardHeader>
              <CardBody className='privacy-body'>
                <hr className='divider' />
                <CardText tag='h3' className='sub-title'>
                  Prelucrarea datelor cu caracter personal (denumita in cele ce urmeaza si "Politica"):
                </CardText>
                <CardText tag='p'>
                  Scopul prezentei Politici este de a explica tipul de date cu caracter personal colectate, modalitatea de prelucrare a acestora, drepturile persoanelor vizate, timpul de pastrare a acestora precum si alte informatii relative prelucrarii datelor cu caracter personal. Protectia datelor este o prioritate pentru managementul SC  Peteco Global SRL, persoana juridica de nationalitate romana, cu sediul social in judetul Ilfov, localitatea Voluntari- Pipera, blvd. Pipera 1-VII, cladirea Nord City Tower, etaj 9, avand urmatoarele date de identificare: Cod Unic de Inregistrare 35190285 la Registrul Comertului Ilfov cu numarul J23/2915/2018, telefon 0744738326, e-mail: contact@peteco.ro.
                  <br /><br />
                  Navigarea pe paginile site-ului nostru e posibila fara nicio declarare a datelor cu caracter personal. Cu toate acestea, pentru anumite situatii specifice precum completarea unui quiz, unui chestionar sau participarea la un concurs, persoanelor vizate li se pot colecta si prelucra anumite date cu caracter personal. Daca prelucrarea datelor cu caracter personal este necesara si nu exista niciun fundament statutar pentru aceasta procesare ne obligam sa obtinem consimtamantul de la persoana vizata.
                  <br /><br />                  
                  Prin intermediul acestei Politici compania noastra ar dori sa informeze publicul general despre natura, amploarea si scopul pentru care colectam si procesam date cu caracter personal. Pe langa acestea, persoanele vizate sunt informate si asupra drepturilor de care beneficiaza, drepturi reglementate de Regulament. In calitate de operator, peteco.ro a implementat numeroase masuri tehnice si organizationale ca sa asigure protectia completa a datelor personale.
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Definitii
                </CardText>
                <CardText tag='p'>
                  Prezenta Politica are la baza Regulamentul precum si oricare si toate legile aplicabile privind protectia datelor cu caracter personal. Politica trebuie sa fie comprehensibila atat pentru publicul general, cat si pentru clientii si partenerii nostri de afaceri. Pentru a asigura acest lucru, vom explica terminologia folosita. In aceasta Politica vom folosi, inter alia, urmatorii termeni:
                </CardText>
                <ul>
                  <li>
                    <p>Date personale sau Datele cu caracter personal se refera la orice informatie care face posibila identificarea unei persoane fizice (persoana vizata).</p>
                  </li>
                  <li>
                    <p>Persoana vizata - reprezinta o persoana fizica identificata sau identificabila. O persoana fizica "identificabila" este o persoana care poate fi identificata, direct sau indirect, inclusiv prin referire la un numar de identificare sau la unul sau mai multi factori caracteristici identitatii sale fizice, fiziologice, mentale, economice, culturale sau sociale.</p>
                  </li>
                  <li>
                    <p>Prelucrarea - reprezinta a efectua orice operatiune sau set de operatiuni asupra Datelor cu caracter personal, cu sau fara mijloace automate, precum colectarea, inregistrarea, organizarea, stocarea, adaptarea sau modificarea, recuperarea, consultarea, utilizarea, dezvaluirea (prin transmitere, difuzare sau punere la dispozitie in alt mod), alinierea sau combinarea, blocarea, stergerea sau distrugerea.</p>
                  </li>
                  <li>
                    <p>Restrictia prelucrarii - se refera la marcarea datelor personale prelucrate cu scopul de a limita prelucrarea lor in viitor.</p>
                  </li>
                  <li>
                    <p>Crearea de profiluri - se refera la orice forma autorizata de prelucrare a datelor personale consistand in folosirea datelor personale pentru a evalua anumite aspecte personale caracteristice pentru o persoana fizica, in particular pentru a analiza sau a prezice aspecte referitoare la performanta la munca, situatia economica, sanatatea, preferintele personale, interesele, fiabilitatea, locatia sau deplasarile unei persoane fizice.</p>
                  </li>
                  <li>
                    <p>Pseudonimizarea - este prelucrarea datelor personale intr-o asemenea maniera incat datele personale nu mai pot fi atribuite unei persoane vizate fara utilizarea unor informatii aditionale, cu conditia ca aceste informatii aditionale sa fie stocate separat si sa fie supuse unor masuri tehnice si organizationale care sa asigure faptul ca datele personale nu sunt atribuite unei persoane fizice identificate sau identificabile.</p>
                  </li>
                  <li>
                    <p>Operator sau operator responsabil pentru prelucrare - este persoana fizica sau juridica, autoritate publica, agentie sau alt organ care, singur sau cu ajutorul unor terte parti, determina scopurile sau mijloacele prelucrarii de date personale; acolo unde scopurile si mijloacele prelucrarii sunt determinate de legislatia Uniunii sau a Statelor Membre, operatorul sau criteriile specifice pentru nominalizarea lui pot fi furnizate de legislatia Uniunii sau a Statelor Membre.</p>
                  </li>
                  <li>
                    <p>Destinatarul - este o persoana fizica sau juridica, autoritate publica, agentie sau alt organ, catre care datele personale sunt dezvaluite, fie el o terta parte sau nu. Cu toate acestea, autoritatile publice care ar putea sa primeasca datele personale in cadrul unei anchete particulare in concordanta cu legislatia Uniunii sau a Statelor Membre nu vor fi vazute ca destinatari; prelucrarea acelor date de catre autoritatile publice va fi in conformitate cu regulile aplicabile protectiei datelor in concordanta cu scopurile prelucrarii.</p>
                  </li>
                  <li>
                    <p>Terta parte - este o persoana fizica sau juridica, autoritate publica, agentie sau alt organ in afara persoanei vizate, operator, prelucrator si persoane care, sub autoritatea directa a operatorului sau a prelucratorului, sunt autorizate sa prelucreze date personale.</p>
                  </li>
                  <li>
                    <p>Consimtamant – consimtamantul persoanei vizate este orice indicatie data in mod liber, specifica, informata si clara pe care persoana vizata o ofera printr-o declaratie sau printr-o actiune afirmativa clara, semnificand acordul pentru prelucrarea datelor sale personale.</p>
                  </li>
                </ul>
                
                <CardText tag='h3' className='sub-title'>
                  Adresa ofiterului de protectie a datelor
                </CardText>
                <CardText tag='p'>
                  Orice persoana vizata ne poate oricand contacta in mod direct cu orice intrebari sau sugestii in legatura cu protectia datelor cu caracter personal la urmatoarea adresa de e-mail dpo@peteco.ro
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Cookies
                </CardText>
                <CardText tag='p'>
                  Paginile de internet peteco.ro folosesc Cookie. Cookie-urile sunt fisiere text care sunt stocate intr-un computer prin intermediul browserului de internet. Multe site-uri si servere utilizeaza cookie-uri. Multe module cookie contin un cod numit cookie. Un ID cookie este un identificator unic al cookie-ului. Se compune dintr-un sir de caractere prin care paginile si serverele internet pot fi atribuite browserului de internet in care a fost stocat cookie-ul. Acest lucru permite site-urilor web si serverelor vizitate sa diferentieze browserul individual al datelor de la alte browsere de internet care contin alte cookie-uri. Un anumit browser de internet poate fi recunoscut si identificat folosind un cod de cookie unic.
                  <br />                  
                  Prin utilizarea cookie-urilor, Peteco.ro poate furniza userilor site-ului mai multe servicii usor de utilizat care nu ar fi posibile fara setarea cookie-urilor. Cu ajutorul unui cookie, informatiile si ofertele de pe site-ul nostru pot fi optimizate avand in vedere utilizatorul.
                  <br />                  
                  Cookie-urile ne permit, dupa cum am mentionat anterior, sa recunoastem utilizatorii site-ului nostru web. Scopul acestei recunoasteri este de a usura utilizarea de catre utilizatori a site-ului nostru web. Utilizatorului site-ului web care utilizeaza module cookie, cu titlu de exemplu mentionam, nu trebuie sa introduca date de acces de fiecare data cand site-ul este accesat, deoarece acesta este preluat de site-ul web, iar cookie-ul este astfel stocat in sistemul informatic al utilizatorului.
                  <br />                  
                  Un alt exemplu este cookie-ul unui cos de cumparaturi intr-un magazin online. Magazinul online isi aminteste articolele pe care un client le-a plasat in cosul de cumparaturi virtuale prin intermediul unui modul cookie.
                  <br />                  
                  In timpul utilizarii este posibil sa colectam automat informatii cum ar fi adresele IP de la care accesati site-ul si browserul pe care il folositi, iar dumneavoastra sunteti de acord cu stocarea anumitor informatii pe computerul dumneavoastra ("module cookie"), toate in scopul de a va asigura un acces optim la site si operarea acestuia de catre dumneavoastra.
                </CardText>
                                
                <CardText tag='h3' className='sub-title'>
                  Posibilitatea contactului prin site
                </CardText>
                <CardText tag='p'>
                  Website-ul peteco.ro contine informatii care permit un scurt contact electronic cu compania noastra, precum si comunicarea directa cu noi, prin includerea unei adrese de email generale. Daca o persoana vizata ne contacteaza prin email sau prin formularul de contact, datele personale transmise de catre aceasta in mod voluntar sunt stocate automat. Astfel de date personale, transmise in mod voluntar de catre o persoana vizata catre operator, sunt stocate pentru scopul prelucrarii si contactarii persoanei vizate.
                </CardText>
                                
                <CardText tag='h3' className='sub-title'>
                  Stergere de rutina si blocarea datelor personale
                </CardText>
                <CardText tag='p'>
                  Peteco.ro va prelucra si stoca date personale ale persoanei vizate numai pe perioada necesara pentru a-si indeplini scopul de stocare, sau pe perioada care este prevazuta de catre legiuitorul european sau de catre alte legi aplicabile. Daca scopul stocarii nu este aplicabil, sau daca perioada de stocare prevazuta de legislatia aplicabila in vigoare expira, datele personale sunt sterse, in concordanta cu cererintele legale.
                </CardText>
                       
                <CardText tag='h3' className='sub-title'>
                  Drepturile persoanei vizate
                </CardText>
                <ul>
                  <li>
                    <p><strong>Dreptul de acces al persoanei vizate.</strong> In vederea exercitarii dreptului de acces persoana vizata poate oricand sa contacteze peteco.ro cu o solicitare in acest sens prin care sa obtina un raport al datelor cu caracter personal;</p>
                  </li>
                  <li>
                    <p><strong>Dreptul de rectificare.</strong> Fiecare persoana vizata are dreptul de a obtine rectificarea datelor cu caracter personal atunci cand acestea sunt incorecte sau au suferit anumite modificari sau necesita a fi completate.</p>
                  </li>
                  <li>
                    <p><strong>Dreptul la stergere.</strong> Fiecare persoana vizata are dreptul de a solicita stergerea datelor cu caracter personal dupa cum urmeaza: i) atunci cand datele nu mai sunt necesare in scopul pentru care au fost colectate sau prelucrate, ii) persona vizata isi retrage consimtamantul pe baza caruia are loc prelucrarea, iii) persoana vizata obiecteaza la prelucrare in conformitate cu articolul 21(1) din Regulament si nu exista temeiuri legale pentru prelucrare, sau persoana vizata obiecteaza la prelucrare in conformitate cu articolul 21(2) din Regulament, iv) datele cu caracter personal au fost procesate in mod illegal sau o dispozitie legala in vigoare impune stergerea acestora.</p>
                  </li>
                  <li>
                    <p><strong>Dreptul la restrictionarea prelucrarii.</strong> Fiecare persoana vizata are dreptul de a obtine restrictionarea prelucrarii, acolo unde unul dintre urmatoarele cazuri se aplica: i) acuratetea datelor personale este contestata de persoana vizata, ii) prelucrarea este ilegala si persoana vizata se opune stergerii datelor personale, dar cere in loc restrictionarea utilizarii lor, iii) peteco.ro nu mai are nevoie de datele personale cu scopul de a le prelucra, dar ele sunt cerute de persoana vizata pentru unitate, in vederea exercitarii unor drepturi, iv) persoana vizata s-a opus prelucrarii in conformitate cu articolul 21(1) din Regulament pana la verificarea daca temeiurile legitime ale peteco.ro prevaleaza asupra celor ale persoanei vizate</p>
                  </li>
                  <li>
                    <p><strong>Dreptul la portabilitatea datelor.</strong> Fiecare persoana vizata are dreptul sa solicite transferarea datelor cu caracter personal catre o terta persoana sau catre insasi persoana vizata.</p>
                  </li>
                  <li>
                    <p><strong>Dreptul la opozitie.</strong> Fiecare persoana vizata are dreptul de a se opune oricand, din motive care au legatura cu situatia sa particulara, la prelucrarea datelor personale care il/o vizeaza, fapt care se bazeaza pe punctele (e) si (f) din Articolul 6(1) din Regulament. Aceasta se aplica si crearii de profiluri. Peteco.ro nu va mai prelucra date personale in eventualitatea unei opozitii, decat daca putem demonstra temeiuri convingatoare si legitime pentru prelucrare, care suprascriu interesele, drepturile si libertatile persoanei vizate, sau pentru stabilirea, exercitarea sau apararea drepturilor legale. Daca peteco.ro prelucreaza date personale pentru scopuri de marketing direct, acolo unde exista un consimtamant prealabil, persoana vizata va avea dreptul sa se opuna oricand la prelucrarea datelor sale personale pentru un astfel de marketing. Aceasta se aplica crearii de profiluri pana in punctul in care este in relatie cu un astfel de marketing direct. Daca persoana vizata obiecteaza la prelucrarea realizata de peteco.ro pentru scopuri de direct marketing, atunci peteco.ro nu va mai procesa datele sale personale in aceste scopuri. In plus, persoana vizata are dreptul, pe temeiuri legate de situatia sa particulara, sa obiecteze la prelucrarea datelor sale personale de catre peteco.ro pentru scopuri de cercetare stiintifica sau de cercetare istorica, sau pentru scopuri statistice, in conformitate cu Articolul 89(1) din Regulament, decat daca prelucrarea e necesara pentru realizarea unei sarcini indeplinite in interes public.</p>
                  </li>
                  <li>
                    <p><strong>Dreptul la luarea deciziilor individuale, inclusiv crearea de profiluri.</strong> Fiecare persoana vizata are dreptul sa nu faca obiectul unei decizii bazate exclusiv pe prelucrarea automata, inclusiv crearea de profiluri, care produce efecte juridice cu privire la aceasta sau in mod similar o afecteaza in mod semnificativ, atat timp cat decizia nu se bazeaza pe acordul explicit al persoanei vizate. Peteco va implementa masuri de sustinere adecvate pentru a proteja drepturile si libertatile persoanei vizate si interesele legitime, cel putin dreptul de a obtine o interventie umana din partea peteco.ro, de a-si exprima punctul de vedere si de a contesta decizia.</p>
                  </li>
                  <li>
                    <p><strong>Dreptul de a retrage consimtamantul.</strong> Fiecare persoana vizata are dreptul sa-si retraga consimtamantul cu privire la prelucrarea datelor cu caracter personal in orice moment.</p>
                  </li>
                  <li>
                    <p><strong>Dreptul de a formula o plangere autoritatii de supraveghere</strong> – in cazul in care persoana vizata apreciaza ca drepturile sale legitime in legatura cu operatiunile de prelucrare a datelor personale au fost incalcate, aceasta se poate adresa cu o plangere in acest sens Autoritatii Naţionale de Supraveghere a Prelucrarii Datelor cu Caracter Personal, cu sediul in B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod postal 010336, Bucuresti, Romania.</p>
                  </li>
                </ul>
                <CardText tag='p'>
                  Daca doresti sa iti exerciti drepturile sau sa ne transmiti o notificare / cerere, te rugam sa ne contactezi la datele de contact indicate in prezenta Politica. Peteco.ro iti va raspunde in cel mai scurt timp posibil dar nu mai tarziu de 30 de zile. Pentru orice intarzieri te vom anunta si iti vom oferi motivele justificate ale intarzierii.
                </CardText>
                   
                <CardText tag='h3' className='sub-title'>
                  Temeiul juridic pentru prelucrare
                </CardText>
                <CardText tag='p'>
                  Art. 6(1) lit. a Regulamentului serveste ca baza juridica pentru prelucrarea operatiunilor pentru care obtinem consimtamantul pentru un anumit scop de prelucrare. Daca prelucrarea datelor cu caracter personal este necesara pentru executarea unui contract la care este parte persoana vizata, cum este cazul, de exemplu, atunci cand operatiunile de prelucrare sunt necesare pentru furnizarea de bunuri sau pentru furnizarea oricarui alt serviciu, prelucrarea este pe baza articolului 6 alineatul (1) lit. b din Regulament.
                  <br />                  
                  Acelasi lucru este valabil si pentru operatiunile de procesare care sunt necesare pentru realizarea masurilor precontractuale, de exemplu in cazul anchetelor referitoare la produsele sau serviciile noastre. Compania noastra este supusa unei obligatii legale prin care este necesara prelucrarea datelor cu caracter personal, cum ar fi indeplinirea obligatiilor fiscale, prelucrarea se face pe baza art. 6 (1) lit. c Regulament.
                  <br />                  
                  In cazuri rare, prelucrarea datelor cu caracter personal poate fi necesara pentru a proteja interesele vitale ale persoanei vizate sau ale unei alte persoane fizice. Acesta ar fi cazul, de exemplu, in cazul in care un vizitator a fost ranit in compania noastra si numele, varsta, datele de asigurare de sanatate sau alte informatii vitale ar trebui sa fie transmise unui medic, spital sau unei alte parti terte. Apoi, prelucrarea se va baza pe Art. 6 (1) lit. d din Regulament.
                  <br />                  
                  In cele din urma, operatiunile de prelucrare s-ar putea baza pe articolul 6 alineatul (1) litera f din Regulament. Acest temei juridic este utilizat pentru operatiunile de prelucrare care nu sunt acoperite de niciunul dintre motivele juridice mentionate mai sus, daca prelucrarea este necesara in scopul intereselor legitime urmarite de compania noastra sau de o terta parte, cu exceptia cazului in care aceste interese sunt inlaturate de interesele sau drepturile si libertatile fundamentale ale persoanei vizate care necesita protectie a datelor cu caracter personal.
                  <br />                  
                  Astfel de operatiuni de prelucrare sunt in mod special permise deoarece au fost mentionate in mod specific de legiuitorul european. El a considerat ca un interes legitim ar putea fi asumat daca persoana vizata este clientul operatorului (considerentul 47 din propozitia 2 din Regulament).
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Interese legitime urmarite de operator sau o terta parte
                </CardText>
                <CardText tag='p'>
                  In cazul in care prelucrarea datelor cu caracter personal se bazeaza pe articolul 6 alineatul (1) litera f Regulament, interesul nostru legitim este sa ne desfasuram afacerea in favoarea bunastarii tuturor angajatilor si actionarilor nostri.
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Perioada pentru care vor fi stocate datele cu caracter personal
                </CardText>
                <CardText tag='p'>
                  Datele cu caracter personal vor fi pastrate doar pentru perioada necesara scopului pentru care au fost colectate. Dupa expirarea perioadei respective, datele corespunzatoare sunt sterse. Vor fi pastrate doar acele date cu caracter personal care fac parte din acte / documente pentru care legea prevede un termen de arhivare iar la expirarea termenului legal de arhivare acestea vor fi distruse.
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Furnizarea de date cu caracter personal ca cerinta legala sau contractuala
                </CardText>
                <CardText tag='p'>
                  Cerinta necesara pentru a incheia un contract; Obligatia persoanei vizate de a furniza datele cu caracter personal; consecintele posibile ale neindeplinirii acestor date. Clarificam faptul ca furnizarea de date cu caracter personal este ceruta partial de lege (de ex. reglementari fiscale) sau poate rezulta si din dispozitii contractuale (de exemplu, informatii privind partenerul contractual). Uneori poate fi necesar sa se incheie un contract conform caruia persoana vizata ne furnizeaza date cu caracter personal, care trebuie prelucrate ulterior de noi. Persoana vizata este, de exemplu, obligata sa ne furnizeze date cu caracter personal atunci cand compania noastra semneaza un contract cu el sau ea.
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Protejarea datelor cu caracter personal
                </CardText>
                <CardText tag='p'>
                  Peteco.ro aplica un cadru intern de politici si standarde minime privind protectia datelor cu caracter personal. Aceste politici si standarde sunt acualizate periodic pentru a corespunde reglementarilor si evolutiei pietei. In conformitate cu dispozitiile legale in vigoare luam masuri tehnice si organizatorice adecvate (politici, proceduri, securitate etc.) tocmai pentru a asigura confidentialitatea si integritatea datelor cu caracter personal precum si pentru a asigura cadrul necesar prelucrarii acestora.
                </CardText>
              </CardBody>
            </Card>

            <Card className='privacy-box'>
              <CardHeader className='privacy-header'>
                <CardTitle tag='h3'>Protectia datelor cu caracter personal</CardTitle>
              </CardHeader>
              <CardBody className='privacy-body'>
                <hr className='divider' />

                <CardText tag='h3' className='sub-title'>
                  Cine suntem
                </CardText>
                <CardText tag='p'>
                  SC  Peteco Global SRL, persoana juridica de nationalitate romana, cu sediul social in judetul Ilfov, localitatea Voluntari- Pipera, blvd. Pipera 1-VII, cladirea Nord City Tower, etaj 9, avand urmatoarele date de identificare: Cod Unic de Inregistrare 35190285 la Registrul Comertului Ilfov cu numarul J23/2915/2018, telefon 0744738326, e-mail: contact@peteco.ro.
                </CardText>
                
                <CardText tag='h3' className='sub-title'>
                  Datele personale pe care le prelucram
                </CardText>
                <CardText tag='p'>                  
                  Politica noastra personala de confidentialitate a datelor reglementeaza utilizarea si stocarea datelor dumneavoastra. Puteti vedea politica noastra de confidentialitate a datelor cu caracter personal la Politica de confidentialitate a datelor cu caracter personal.                            
                </CardText>
                <CardText tag='p'>                  
                  SC Peteco Global SRL este un operator de date cu caracter personal. Colectam urmatoarele tipuri de date personale de la dvs:   
                </CardText>
                <ul>
                  <li>
                    <p>Nume si prenume;</p>
                  </li>
                  <li>
                    <p>E-mail;</p>
                  </li>
                  <li>
                    <p>Numar de telefon;</p>
                  </li>
                  <li>
                    <p>Detalii de facturare si plata.</p>
                  </li>
                </ul>
                
                <CardText tag='h3' className='sub-title'>
                  De ce avem nevoie de ele?
                </CardText>
                <CardText tag='p'>                  
                  Avem nevoie de datele dvs personale pentru a va oferi urmatoarele servicii:                          
                </CardText>
                <ul>
                  <li>
                    <p>Nume si prenume – avem nevoie de aceste date pentru livrarea produselor comandate;</p>
                  </li>
                  <li>
                    <p>E-mail – adresa de e-mail o folosim pentru a va confirma comanda si pentru a va informa despre stadiul comenzii dvs;</p>
                  </li>
                  <li>
                    <p>Numar de telefon – va vom contacta daca apar probleme la livrarea produselor dvs;</p>
                  </li>
                  <li>
                    <p>Adresa de livrare – avem nevoie de aceste date pentru livrarea produselor comandate;</p>
                  </li>
                  <li>
                    <p>Adresa de facturare – avem nevoie de aceste date pentru a va emite factura.</p>
                  </li>
                </ul>
                <CardText tag='p'>                  
                  Suport Peteco                       
                </CardText>
                <ul>
                  <li>
                    <p>Nume si prenume – avem nevoie de aceste date pentru a va identifica;</p>
                  </li>
                  <li>
                    <p>E-mail – adresa de e-mail o folosim pentru a comunica cu dumneavoastra pentru a va rezolva problema;</p>
                  </li>
                  <li>
                    <p>Numar de telefon – va vom contacta pentru a grabi rezolvarea unei probleme; comunicarea va fi inregistrata pentru a documenta problema dvs si rezolvarea ei;</p>
                  </li>
                  <li>
                    <p>Detalii IP &amp; sesiune pe Peteco.ro – avem nevoie de aceste date pentru a va putea oferi serviciul de comunicare Chat si pentru a va putea raspunde la intrebari afland ce pagini ati vizitat in cadrul sesiunii pe Peteco.ro.</p>
                  </li>
                </ul>
                <CardText tag='p'>                  
                  Functionalitatea site-ului Peteco.ro                      
                </CardText>
                <ul>
                  <li>
                    <p>Adresa IP – filtrarea si detectarea atacurilor din internet;</p>
                  </li>
                  <li>
                    <p>Informatii cont Peteco.ro – informatiile dvs vor fi pastrate in CRM-ul intern pentru a permite vanzatorilor nostri si site-ului Peteco.ro sa va ofere o experienta personalizata.</p>
                  </li>
                </ul>
                <CardText tag='p'>                  
                  Cu consimtamantul dumneavoastra, am dori sa prelucram si urmatoarele date cu caracter personal Newsletter Peteco.ro
                </CardText>
                <ul>
                  <li>
                    <p>Nume si prenume – avem nevoie de aceste informatii pentru a va comunica intr-un mod mai personal;</p>
                  </li>
                  <li>
                    <p>E-mail – avem nevoie de aceste informatii pentru a putea trimite newsletter-ul.</p>
                  </li>
                </ul>
                <CardText tag='p'>                  
                  Comportament online
                </CardText>
                <ul>
                  <li>
                    <p>Datele dvs personale pentru istoria navigarii sunt transmise partenerilor nostri descrisi in politica de cookies.</p>
                  </li>
                </ul>

                <CardText tag='h3' className='sub-title'>
                  Ce facem cu ele?
                </CardText>
                <CardText tag='p'>                  
                  Datele dumneavoastra personale sunt prelucrate in cadrul companiei situata in Romania. Gazduirea si stocarea datelor dumneavoastra are loc la Leaseweb care se afla in Olanda. Datele dvs personale pentru newsletter vor fi incarcate in Sendgrid care vor actiona ca imputerniciti pentru Peteco.ro. Procesatorii opereaza livrarea newsletter-ului nostru.                           
                </CardText>
                <CardText tag='p'>       
                  Furnizorii de servicii cu care colaboram pentru a ne desfasura activitatea sunt:                  
                </CardText>
                <ul>
                  <li>
                    <p>PayU – furnizor servicii de plata online;</p>
                  </li>
                  <li>
                    <p>Google Analytics – furnizor analiza trafic site;</p>
                  </li>
                  <li>
                    <p>Magazine partenere marketplace Peteco.ro.</p>
                  </li>
                </ul>
                
                <CardText tag='h3' className='sub-title'>
                  Cat timp pastram datele cu caracter personal
                </CardText>
                <CardText tag='p'>    
                  Pentru newsletter vom pastra datele dumneavoastra cu caracter personal doar pe durata de viata a newsletter-ului sau pana cand ne veti notifica ca nu mai doriti sa primiti newsletter-ul. Dupa aceasta perioada, datele dumneavoastra personale vor fi distruse ireversibil.                         
                </CardText>
                <CardText tag='p'>
                  Pentru comenzile din Peteco.ro datele dvs personale, dintre cele care sunt cuprinse in documentele financiar-contabile sau in documente care se anexeaza documentelor financiar-contabile, vor fi pastrate 10 ani conform dispozitiilor art. 38 din Anexa 1 la Ordinul nr. 2634/2015 privind documentele financiar-contabile, emis de Ministerul Finantelor Publice si nu vor fi accesate in niciun alt scop decat scopul legal pentru care sunt arhivate. Dupa 10 ani aceste date vor fi distruse.                         
                </CardText>

                <CardText tag='h3' className='sub-title'>
                  Care sunt drepturile dvs
                </CardText>
                <CardText tag='p'>  
                  Daca aveti motive sa credeti ca orice date personale pe care le detinem despre dvs sunt incorecte sau incomplete, aveti dreptul sa solicitati sa vedeti aceste informatii, sa le rectificati sau sa cereti sa fie sterse, sa solicitati restrictionarea prelucrarii sau sa va opuneti prelucrarii si de asemenea aveti dreptul la portabilitatea datelor . Pentru exercitarea acestor drepturi te rugam sa ne contactezi la dpo@peteco.ro                 
                </CardText>
                <CardText tag='p'>
                  Daca doresti sa inaintezi o plangere legata de modul in care ti-am procesat datele personale, contacteaza responsabilul cu protectia datelor la urmatoarea adresa de e-mail dpo@peteco.ro. Responsabilul cu protectia datelor va lua legatura cu tine pentru a solutiona problema ridicata.                         
                </CardText>
                <CardText tag='p'>
                  De asemenea puteti contacta Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal la www.dataprotection.ro si puteti depune o plangere la ei.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Privacy
