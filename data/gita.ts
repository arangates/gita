export type Sloka = {
  id: number;
  title: number;
  devanagari: string;
  verse_text: string;
  verse_text_no_samdhis: string;
};

export type Chapter = {
  name: string;
  slug: string;
  slokas: Sloka[];
};
export const slokas:Sloka[] = [
  {
    "id": 0,
    "title": 1.1,
    "devanagari": "धृतराष्ट्र उवाच ।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १.१ ॥",
    "verse_text": "dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre\nsamavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva\nkim akurvata sañjaya",
    "verse_text_no_samdhis": "dhṛtarāṣṭraḥ uvāca dharma kṣetre kuru kṣetre samavetāḥ yuyutsavaḥ māmakāḥ pāṇḍavāḥ ca eva kim akurvata sañjaya"
  },
  {
    "id": 1,
    "title": 1.2,
    "devanagari": "सञ्जय उवाच ।\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥ १.२ ॥",
    "verse_text": "sañjaya uvāca\ndṛṣṭvā tu pāṇḍavānīkaṁ\nvyūḍhaṁ duryodhanas tadā\nācāryam upasaṅgamya\nrājā vacanam abravīt",
    "verse_text_no_samdhis": "sañjayaḥ uvāca dṛṣṭvā tu pāṇḍava anīkam vyūḍham duryodhanaḥ tadā ācāryam upasaṅgamya rājā vacanam abravīt"
  },
  {
    "id": 2,
    "title": 1.3,
    "devanagari": "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् ।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥ १.३ ॥",
    "verse_text": "paśyaitāṁ pāṇḍu-putrānām\nācārya mahatīṁ camūm\nvyūḍhāṁ drupada-putreṇa\ntava śiṣyeṇa dhīmatā",
    "verse_text_no_samdhis": "paśya etām pāṇḍu putrānām ācārya mahatīm camūm vyūḍhām drupada putreṇa tava śiṣyeṇa dhī matā"
  },
  {
    "id": 3,
    "title": 1.4,
    "devanagari": "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि ।\nयुयुधानो विराटश्च द्रुपदश्च महारथः ॥ १.४ ॥",
    "verse_text": "atra śūrā maheṣv-āsā\nbhīmārjuna-samā yudhi\nyuyudhāno virāṭaś ca\ndrupadaś ca mahā-rathaḥ",
    "verse_text_no_samdhis": "atra śūrāḥ mahā iṣu āsāḥ bhīma arjuna samāḥ yudhi yuyudhānaḥ virāṭaḥ ca drupadaḥ ca mahā rathaḥ"
  },
  {
    "id": 4,
    "title": 1.5,
    "devanagari": "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् ।\nपुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ॥ १.५ ॥",
    "verse_text": "dhṛṣṭaketuś cekitānaḥ\nkāśirājaś ca vīryavān\npurujit kuntibhojaś ca\nśaibyaś ca nara-puṅgavaḥ",
    "verse_text_no_samdhis": "dhṛṣṭaketuḥ cekitānaḥ kāśirājaḥ ca vīrya vān purujit kuntibhojaḥ ca śaibyaḥ ca nara puṅgavaḥ"
  },
  {
    "id": 5,
    "title": 1.6,
    "devanagari": "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् ।\nसौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ॥ १.६ ॥",
    "verse_text": "yudhāmanyuś ca vikrānta\nuttamaujāś ca vīryavān\nsaubhadro draupadeyāś ca\nsarva eva mahā-rathāḥ",
    "verse_text_no_samdhis": "yudhāmanyuḥ ca vikrāntaḥ uttamaujāḥ ca vīrya vān saubhadraḥ draupadeyāḥ ca sarve eva mahā rathāḥ"
  },
  {
    "id": 6,
    "title": 1.7,
    "devanagari": "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम ।\nनायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ॥ १.७ ॥",
    "verse_text": "asmākaṁ tu viśiṣṭā ye\ntān nibodha dvijottama\nnāyakā mama sainyasya\nsaṁjñārthaṁ tān bravīmi te",
    "verse_text_no_samdhis": "asmākam tu viśiṣṭāḥ ye tān nibodha dvija uttama nāyakāḥ mama sainyasya saṁjñā artham tān bravīmi te"
  },
  {
    "id": 7,
    "title": 1.8,
    "devanagari": "भवान्भीष्मश्च कर्णश्च कृपश्च समितिंजयः ।\nअश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ॥ १.८ ॥",
    "verse_text": "bhavān bhīṣmaś ca karṇaś ca\nkṛpaś ca samitiṁ-jayaḥ\naśvatthāmā vikarṇaś ca\nsaumadattis tathaiva ca",
    "verse_text_no_samdhis": "bhavān bhīṣmaḥ ca karṇaḥ ca kṛpaḥ ca samitim jayaḥ aśvatthāmā vikarṇaḥ ca saumadattiḥ tathā eva ca"
  },
  {
    "id": 8,
    "title": 1.9,
    "devanagari": "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः ।\nनानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ॥ १.९ ॥",
    "verse_text": "anye ca bahavaḥ śūrā\nmad-arthe tyakta-jīvitāḥ\nnānā-śastra-praharaṇāḥ\nsarve yuddha-viśāradāḥ",
    "verse_text_no_samdhis": "anye ca bahavaḥ śūrāḥ mat arthe tyakta jīvitāḥ nānā śastra praharaṇāḥ sarve yuddha viśāradāḥ"
  },
  {
    "id": 9,
    "title": 1.1,
    "devanagari": "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् ।\nपर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ॥ १.१० ॥",
    "verse_text": "aparyāptaṁ tad asmākaṁ\nbalaṁ bhīṣmābhirakṣitam\nparyāptaṁ tv idam eteṣāṁ\nbalaṁ bhīmābhirakṣitam",
    "verse_text_no_samdhis": "aparyāptam tat asmākam balam bhīṣma abhirakṣitam paryāptam tu idam eteṣām balam bhīma abhirakṣitam"
  },
  {
    "id": 10,
    "title": 1.11,
    "devanagari": "अयनेषु च सर्वेषु यथाभागमवस्थिताः ।\nभीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ॥ १.११ ॥",
    "verse_text": "ayaneṣu ca sarveṣu\nyathā-bhāgam avasthitāḥ\nbhīṣmam evābhirakṣantu\nbhavantaḥ sarva eva hi",
    "verse_text_no_samdhis": "ayaneṣu ca sarveṣu yathā bhāgam avasthitāḥ bhīṣmam eva abhirakṣantu bhavantaḥ sarve eva hi"
  },
  {
    "id": 11,
    "title": 1.12,
    "devanagari": "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः ।\nसिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ॥ १.१२ ॥",
    "verse_text": "tasya sañjanayan harṣaṁ\nkuru-vṛddhaḥ pitāmahaḥ\nsiṁha-nādaṁ vinadyoccaiḥ\nśaṅkhaṁ dadhmau pratāpavān",
    "verse_text_no_samdhis": "tasya sañjanayan harṣam kuru vṛddhaḥ pitāmahaḥ siṁha nādam vinadya uccaiḥ śaṅkham dadhmau pratāpa vān"
  },
  {
    "id": 12,
    "title": 1.13,
    "devanagari": "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः ।\nसहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ॥ १.१३ ॥",
    "verse_text": "tataḥ śaṅkhāś ca bheryaś ca\npaṇavānaka-gomukhāḥ\nsahasaivābhyahanyanta\nsa śabdas tumulo ’bhavat",
    "verse_text_no_samdhis": "tataḥ śaṅkhāḥ ca bheryaḥ ca paṇava ānaka go mukhāḥ sahasā eva abhyahanyanta saḥ śabdaḥ tumulaḥ abhavat"
  },
  {
    "id": 13,
    "title": 1.14,
    "devanagari": "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ ।\nमाधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ॥ १.१४ ॥",
    "verse_text": "tataḥ śvetair hayair yukte\nmahati syandane sthitau\nmādhavaḥ pāṇḍavaś caiva\ndivyau śaṅkhau pradadhmatuḥ",
    "verse_text_no_samdhis": "tataḥ śvetaiḥ hayaiḥ yukte mahati syandane sthitau mādhavaḥ pāṇḍavaḥ ca eva divyau śaṅkhau pradadhmatuḥ"
  },
  {
    "id": 14,
    "title": 1.15,
    "devanagari": "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः ।\nपौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ॥ १.१५ ॥",
    "verse_text": "pāñcajanyaṁ hṛṣīkeśo\ndevadattaṁ dhanañ-jayaḥ\npauṇḍraṁ dadhmau mahā-śaṅkhaṁ\nbhīma-karmā vṛkodaraḥ",
    "verse_text_no_samdhis": "pāñcajanyam hṛṣīka īśaḥ devadattam dhanam jayaḥ pauṇḍram dadhmau mahā śaṅkham bhīma karmā vṛka udaraḥ"
  },
  {
    "id": 15,
    "title": 1.16,
    "devanagari": "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः ।\nनकुलः सहदेवश्च सुघोषमणिपुष्पकौ ॥ १.१६ ॥",
    "verse_text": "anantavijayaṁ rājā\nkuntī-putro yudhiṣṭhiraḥ\nnakulaḥ sahadevaś ca\nsughoṣa-maṇipuṣpakau",
    "verse_text_no_samdhis": "ananta vijayam rājā kuntī putraḥ yudhiṣṭhiraḥ nakulaḥ sahadevaḥ ca sughoṣa maṇipuṣpakau"
  },
  {
    "id": 16,
    "title": 1.17,
    "devanagari": "काश्यश्च परमेष्वासः शिखण्डी च महारथः ।\nधृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः ॥ १.१७ ॥",
    "verse_text": "kāśyaś ca parameṣv-āsaḥ\nśikhaṇḍī ca mahā-rathaḥ\ndhṛṣṭadyumno virāṭaś ca\nsātyakiś cāparājitaḥ",
    "verse_text_no_samdhis": "kāśyaḥ ca parama iṣu āsaḥ śikhaṇḍī ca mahā rathaḥ dhṛṣṭadyumnaḥ virāṭaḥ ca sātyakiḥ ca aparājitaḥ"
  },
  {
    "id": 17,
    "title": 1.18,
    "devanagari": "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते ।\nसौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक् ॥ १.१८ ॥",
    "verse_text": "drupado draupadeyāś ca\nsarvaśaḥ pṛthivī-pate\nsaubhadraś ca mahā-bāhuḥ\nśaṅkhān dadhmuḥ pṛthak pṛthak",
    "verse_text_no_samdhis": "drupadaḥ draupadeyāḥ ca sarvaśaḥ pṛthivī pate saubhadraḥ ca mahā bāhuḥ śaṅkhān dadhmuḥ pṛthak pṛthak"
  },
  {
    "id": 18,
    "title": 1.19,
    "devanagari": "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् ।\nनभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् ॥ १.१९ ॥",
    "verse_text": "sa ghoṣo dhārtarāṣṭrāṇāṁ\nhṛdayāni vyadārayat\nnabhaś ca pṛthivīṁ caiva\ntumulo ’bhyanunādayan",
    "verse_text_no_samdhis": "saḥ ghoṣaḥ dhārtarāṣṭrāṇām hṛdayāni vyadārayat nabhaḥ ca pṛthivīm ca eva tumulaḥ abhyanunādayan"
  },
  {
    "id": 19,
    "title": 1.2,
    "devanagari": "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः\nप्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः\nहृषीकेशं तदा वाक्यमिदमाह महीपते ॥ १.२० ॥",
    "verse_text": "atha vyavasthitān dṛṣṭvā\ndhārtarāṣṭrān kapi-dhvajaḥ\npravṛtte śastra-sampāte\ndhanur udyamya pāṇḍavaḥ\nhṛṣīkeśaṁ tadā vākyam\nidam āha mahī-pate",
    "verse_text_no_samdhis": "atha vyavasthitān dṛṣṭvā dhārtarāṣṭrān kapi dhvajaḥ pravṛtte śastra sampāte dhanuḥ udyamya pāṇḍavaḥ hṛṣīkeśam tadā vākyam idam āha mahī pate"
  },
  {
    "id": 20,
    "title": 1.21,
    "devanagari": "अर्जुन उवाच\nसेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ॥ १.२१ ॥",
    "verse_text": "arjuna uvāca\nsenayor ubhayor madhye\nrathaṁ sthāpaya me ’cyuta\nyāvad etān nirīkṣe ’haṁ\nyoddhu-kāmān avasthitān",
    "verse_text_no_samdhis": "arjunaḥ uvāca senayoḥ ubhayoḥ madhye ratham sthāpaya me acyuta yāvat etān nirīkṣe aham yoddhu kāmān avasthitān"
  },
  {
    "id": 21,
    "title": 1.22,
    "devanagari": "यावदेतान्निरिक्षेऽहं योद्\\u200cधुकामानवस्थितान् ।\nकैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे ॥ १.२२ ॥",
    "verse_text": "kair mayā saha yoddhavyam\nasmin raṇa-samudyame",
    "verse_text_no_samdhis": "kaiḥ mayā saha yoddhavyam asmin raṇa samudyame"
  },
  {
    "id": 22,
    "title": 1.23,
    "devanagari": "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः ।\nधार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ॥ १.२३ ॥",
    "verse_text": "yotsyamānān avekṣe ’haṁ\nya ete ’tra samāgatāḥ\ndhārtarāṣṭrasya durbuddher\nyuddhe priya-cikīrṣavaḥ",
    "verse_text_no_samdhis": "yotsyamānān avekṣe aham ye ete atra samāgatāḥ dhārtarāṣṭrasya durbuddheḥ yuddhe priya cikīrṣavaḥ"
  },
  {
    "id": 23,
    "title": 1.24,
    "devanagari": "सञ्जय उवाच ।\nएवमुक्तो हृषीकेशो गुडाकेशेन भारत\nसेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ॥ १.२४ ॥",
    "verse_text": "sañjaya uvāca\nevam ukto hṛṣīkeśo\nguḍākeśena bhārata\nsenayor ubhayor madhye\nsthāpayitvā rathottamam",
    "verse_text_no_samdhis": "sañjayaḥ uvāca evam uktaḥ hṛṣīkeśaḥ guḍākeśena bhārata senayoḥ ubhayoḥ madhye sthāpayitvā ratha uttamam"
  },
  {
    "id": 24,
    "title": 1.25,
    "devanagari": "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् ।\nउवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ॥ १.२५ ॥",
    "verse_text": "bhīṣma-droṇa-pramukhataḥ\nsarveṣāṁ ca mahī-kṣitām\nuvāca pārtha paśyaitān\nsamavetān kurūn iti",
    "verse_text_no_samdhis": "bhīṣma droṇa pramukhataḥ sarveṣām ca mahī kṣitām uvāca pārtha paśya etān samavetān kurūn iti"
  },
  {
    "id": 25,
    "title": 1.26,
    "devanagari": "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान्\nआचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा\nश्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि ॥ १.२६ ॥",
    "verse_text": "tatrāpaśyat sthitān pārthaḥ\npitṝn atha pitāmahān\nācāryān mātulān bhrātṝn\nputrān pautrān sakhīṁs tathā\nśvaśurān suhṛdaś caiva\nsenayor ubhayor api",
    "verse_text_no_samdhis": "tatra apaśyat sthitān pārthaḥ pitṝn atha pitāmahān ācāryān mātulān bhrātṝn putrān pautrān sakhīn tathā śvaśurān suhṛdaḥ ca eva senayoḥ ubhayoḥ api"
  },
  {
    "id": 26,
    "title": 1.27,
    "devanagari": "तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् ।\nकृपया परयाविष्टो विषीदन्निदमब्रवीत् ॥ १.२७ ॥",
    "verse_text": "tān samīkṣya sa kaunteyaḥ\nsarvān bandhūn avasthitān\nkṛpayā parayāviṣṭo\nviṣīdann idam abravīt",
    "verse_text_no_samdhis": "tān samīkṣya saḥ kaunteyaḥ sarvān bandhūn avasthitān kṛpayā parayā āviṣṭaḥ viṣīdan idam abravīt"
  },
  {
    "id": 27,
    "title": 1.28,
    "devanagari": "अर्जुन उवाच ।\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति ॥ १.२८ ॥",
    "verse_text": "arjuna uvāca\ndṛṣṭvemaṁ sva-janaṁ kṛṣṇa\nyuyutsuṁ samupasthitam\nsīdanti mama gātrāṇi\nmukhaṁ ca pariśuṣyati",
    "verse_text_no_samdhis": "arjunaḥ uvāca dṛṣṭvā imam sva janam kṛṣṇa yuyutsum samupasthitam sīdanti mama gātrāṇi mukham ca pariśuṣyati"
  },
  {
    "id": 28,
    "title": 1.29,
    "devanagari": "वेपथुश्च शरीरे मे रोमहर्षश्च जायते ।\nगाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते ॥ १.२९ ॥",
    "verse_text": "vepathuś ca śarīre me\nroma-harṣaś ca jāyate\ngāṇḍīvaṁ sraṁsate hastāt\ntvak caiva paridahyate",
    "verse_text_no_samdhis": "vepathuḥ ca śarīre me roma harṣaḥ ca jāyate gāṇḍīvam sraṁsate hastāt tvak ca eva paridahyate"
  },
  {
    "id": 29,
    "title": 1.3,
    "devanagari": "न च मे शक्नोम्यवस्थातुं भ्रमतीव मनः ।\nनिमित्तानि च पश्यामि विपरीतानि केशव ॥ १.३० ॥",
    "verse_text": "na ca śaknomy avasthātuṁ\nbhramatīva ca me manaḥ\nnimittāni ca paśyāmi\nviparītāni keśava",
    "verse_text_no_samdhis": "na ca śaknomi avasthātum bhramati iva ca me manaḥ nimittāni ca paśyāmi viparītāni keśava"
  },
  {
    "id": 30,
    "title": 1.31,
    "devanagari": "न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे ।\nन काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ॥ १.३१ ॥",
    "verse_text": "na ca śreyo ’nupaśyāmi\nhatvā sva-janam āhave\nna kāṅkṣe vijayaṁ kṛṣṇa\nna ca rājyaṁ sukhāni ca",
    "verse_text_no_samdhis": "na ca śreyaḥ anupaśyāmi hatvā sva janam āhave na kāṅkṣe vijayam kṛṣṇa na ca rājyam sukhāni ca"
  },
  {
    "id": 31,
    "title": 1.32,
    "devanagari": "किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ।\nयेषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च ॥ १.३२ ॥",
    "verse_text": "kiṁ no rājyena govinda\nkiṁ bhogair jīvitena vā\nyeṣām arthe kāṅkṣitaṁ no\nrājyaṁ bhogāḥ sukhāni ca",
    "verse_text_no_samdhis": "kim naḥ rājyena govinda kim bhogaiḥ jīvitena vā yeṣām arthe kāṅkṣitam naḥ rājyam bhogāḥ sukhāni ca"
  },
  {
    "id": 32,
    "title": 1.33,
    "devanagari": "त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च ।\nआचार्याः पितरः पुत्रास्तथैव च पितामहाः ॥ १.३३ ॥",
    "verse_text": "ta ime ’vasthitā yuddhe\nprāṇāṁs tyaktvā dhanāni ca\nācāryāḥ pitaraḥ putrās\ntathaiva ca pitāmahāḥ",
    "verse_text_no_samdhis": "te ime avasthitāḥ yuddhe prāṇān tyaktvā dhanāni ca ācāryāḥ pitaraḥ putrāḥ tathā eva ca pitāmahāḥ"
  },
  {
    "id": 33,
    "title": 1.34,
    "devanagari": "मातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा ।\nएतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन ॥ १.३४ ॥",
    "verse_text": "mātulāḥ śvaśurāḥ pautrāḥ\nśyālāḥ sambandhinas tathā\netān na hantum icchāmi\nghnato ’pi madhusūdana",
    "verse_text_no_samdhis": "mātulāḥ śvaśurāḥ pautrāḥ śyālāḥ sambandhinaḥ tathā etān na hantum icchāmi ghnataḥ api madhusūdana"
  },
  {
    "id": 34,
    "title": 1.35,
    "devanagari": "अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ।\nनिहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन ॥ १.३५ ॥",
    "verse_text": "api trailokya-rājyasya\nhetoḥ kiṁ nu mahī-kṛte\nnihatya dhārtarāṣṭrān naḥ\nkā prītiḥ syāj janārdana",
    "verse_text_no_samdhis": "api trai lokya rājyasya hetoḥ kim nu mahī kṛte nihatya dhārtarāṣṭrān naḥ kā prītiḥ syāt janārdana"
  },
  {
    "id": 35,
    "title": 1.36,
    "devanagari": "पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः\nतस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्सबान्धवान्\nस्वजनं हि कथं हत्वा सुखिनः स्याम माधव ॥ १.३६ ॥",
    "verse_text": "pāpam evāśrayed asmān\nhatvaitān ātatāyinaḥ\ntasmān nārhā vayaṁ hantuṁ\ndhārtarāṣṭrān sa-bāndhavān\nsva-janaṁ hi kathaṁ hatvā\nsukhinaḥ syāma mādhava",
    "verse_text_no_samdhis": "pāpam eva āśrayet asmān hatvā etān ātatāyinaḥ tasmāt na arhāḥ vayam hantum dhārtarāṣṭrān sa bāndhavān sva janam hi katham hatvā sukhinaḥ syāma mādhava"
  },
  {
    "id": 36,
    "title": 1.37,
    "devanagari": "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः ।\nकुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ॥ १.३७ ॥",
    "verse_text": "yady apy ete na paśyanti\nlobhopahata-cetasaḥ\nkula-kṣaya-kṛtaṁ doṣaṁ\nmitra-drohe ca pātakam",
    "verse_text_no_samdhis": "yadi api ete na paśyanti lobha upahata cetasaḥ kula kṣaya kṛtam doṣam mitra drohe ca pātakam"
  },
  {
    "id": 37,
    "title": 1.38,
    "devanagari": "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् ।\nकुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ॥ १.३८ ॥",
    "verse_text": "kathaṁ na jñeyam asmābhiḥ\npāpād asmān nivartitum\nkula-kṣaya-kṛtaṁ doṣaṁ\nprapaśyadbhir janārdana",
    "verse_text_no_samdhis": "katham na jñeyam asmābhiḥ pāpāt asmāt nivartitum kula kṣaya kṛtam doṣam prapaśyadbhiḥ janārdana"
  },
  {
    "id": 38,
    "title": 1.39,
    "devanagari": "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः ।\nधर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ॥ १.३९ ॥",
    "verse_text": "kula-kṣaye praṇaśyanti\nkula-dharmāḥ sanātanāḥ\ndharme naṣṭe kulaṁ kṛtsnam\nadharmo ’bhibhavaty uta",
    "verse_text_no_samdhis": "kula kṣaye praṇaśyanti kula dharmāḥ sanātanāḥ dharme naṣṭe kulam kṛtsnam adharmaḥ abhibhavati uta"
  },
  {
    "id": 39,
    "title": 1.4,
    "devanagari": "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः ।\nस्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ॥ १.४० ॥",
    "verse_text": "adharmābhibhavāt kṛṣṇa\npraduṣyanti kula-striyaḥ\nstrīṣu duṣṭāsu vārṣṇeya\njāyate varṇa-saṅkaraḥ",
    "verse_text_no_samdhis": "adharma abhibhavāt kṛṣṇa praduṣyanti kula striyaḥ strīṣu duṣṭāsu vārṣṇeya jāyate varṇa saṅkaraḥ"
  },
  {
    "id": 40,
    "title": 1.41,
    "devanagari": "सङ्करो नरकायैव कुलघ्नानां कुलस्य च ।\nपतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ॥ १.४१ ॥",
    "verse_text": "saṅkaro narakāyaiva\nkula-ghnānāṁ kulasya ca\npatanti pitaro hy eṣāṁ\nlupta-piṇḍodaka-kriyāḥ",
    "verse_text_no_samdhis": "saṅkaraḥ narakāya eva kula ghnānām kulasya ca patanti pitaraḥ hi eṣām lupta piṇḍa udaka kriyāḥ"
  },
  {
    "id": 41,
    "title": 1.42,
    "devanagari": "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः ।\nउत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ॥ १.४२ ॥",
    "verse_text": "doṣair etaiḥ kula-ghnānāṁ\nvarṇa-saṅkara-kārakaiḥ\nutsādyante jāti-dharmāḥ\nkula-dharmāś ca śāśvatāḥ",
    "verse_text_no_samdhis": "doṣaiḥ etaiḥ kula ghnānām varṇa saṅkara kārakaiḥ utsādyante jāti dharmāḥ kula dharmāḥ ca śāśvatāḥ"
  },
  {
    "id": 42,
    "title": 1.43,
    "devanagari": "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन ।\nनरकेऽनियतं वासो भवतीत्यनुशुश्रुम ॥ १.४३ ॥",
    "verse_text": "utsanna-kula-dharmāṇāṁ\nmanuṣyāṇāṁ janārdana\nnarake niyataṁ vāso\nbhavatīty anuśuśruma",
    "verse_text_no_samdhis": "utsanna kula dharmāṇām manuṣyāṇām janārdana narake niyatam vāsaḥ bhavati iti anuśuśruma"
  },
  {
    "id": 43,
    "title": 1.44,
    "devanagari": "अहो बत महत्पापं कर्तुं व्यवसिता वयम् ।\nयद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ॥ १.४४ ॥",
    "verse_text": "aho bata mahat pāpaṁ\nkartuṁ vyavasitā vayam\nyad rājya-sukha-lobhena\nhantuṁ sva-janam udyatāḥ",
    "verse_text_no_samdhis": "aho bata mahat pāpam kartum vyavasitāḥ vayam yat rājya sukha lobhena hantum sva janam udyatāḥ"
  },
  {
    "id": 44,
    "title": 1.45,
    "devanagari": "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः ।\nधार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ॥ १.४५ ॥",
    "verse_text": "yadi mām apratīkāram\naśastraṁ śastra-pāṇayaḥ\ndhārtarāṣṭrā raṇe hanyus\ntan me kṣema-taraṁ bhavet",
    "verse_text_no_samdhis": "yadi mām apratīkāram aśastram śastra pāṇayaḥ dhārtarāṣṭrāḥ raṇe hanyuḥ tat me kṣema taram bhavet"
  },
  {
    "id": 45,
    "title": 1.46,
    "devanagari": "सञ्जय उवाच ।\nएवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत्\nविसृज्य सशरं चापं शोकसंविग्नमानसः ॥ १.४६ ॥",
    "verse_text": "sañjaya uvāca\nevam uktvārjunaḥ saṅkhye\nrathopastha upāviśat\nvisṛjya sa-śaraṁ cāpaṁ\nśoka-saṁvigna-mānasaḥ",
    "verse_text_no_samdhis": "sañjayaḥ uvāca evam uktvā arjunaḥ saṅkhye ratha upasthe upāviśat visṛjya sa śaram cāpam śoka saṁvigna mānasaḥ"
  },
  {
    "id": 46,
    "title": 2.1,
    "devanagari": "संजय उवाच ।\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः ॥ २.१ ॥",
    "verse_text": "sañjaya uvāca\ntaṁ tathā kṛpayāviṣṭam\naśru-pūrṇākulekṣaṇam\nviṣīdantam idaṁ vākyam\nuvāca madhusūdanaḥ",
    "verse_text_no_samdhis": "sañjayaḥ uvāca tam tathā kṛpayā āviṣṭam aśru pūrṇa ākula īkṣaṇam viṣīdantam idam vākyam uvāca madhu sūdanaḥ"
  },
  {
    "id": 47,
    "title": 2.2,
    "devanagari": "श्रीभगवानुवाच ।\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन ॥ २.२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nkutas tvā kaśmalam idaṁ\nviṣame samupasthitam\nanārya-juṣṭam asvargyam\nakīrti-karam arjuna",
    "verse_text_no_samdhis": "śrī bhagavān uvāca kutaḥ tvā kaśmalam idam viṣame samupasthitam anārya juṣṭam asvargyam akīrti karam arjuna"
  },
  {
    "id": 48,
    "title": 2.3,
    "devanagari": "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥ २.३ ॥",
    "verse_text": "klaibyaṁ mā sma gamaḥ pārtha\nnaitat tvayy upapadyate\nkṣudraṁ hṛdaya-daurbalyaṁ\ntyaktvottiṣṭha paran-tapa",
    "verse_text_no_samdhis": "klaibyam mā sma gamaḥ pārtha na etat tvayi upapadyate kṣudram hṛdaya daurbalyam tyaktvā uttiṣṭha param tapa"
  },
  {
    "id": 49,
    "title": 2.4,
    "devanagari": "अर्जुन उवाच ।\nकथं भीष्ममहं संख्ये द्रोणं च मधुसूदन\nइषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ॥ २.४ ॥",
    "verse_text": "arjuna uvāca\nkathaṁ bhīṣmam ahaṁ saṅkhye\ndroṇaṁ ca madhusūdana\niṣubhiḥ pratiyotsyāmi\npūjārhāv ari-sūdana",
    "verse_text_no_samdhis": "arjunaḥ uvāca katham bhīṣmam aham saṅkhye droṇam ca madhu sūdana iṣubhiḥ pratiyotsyāmi pūjā arhau ari sūdana"
  },
  {
    "id": 50,
    "title": 2.5,
    "devanagari": "गुरूनहत्वा हि महानुभावान्\nश्रेयो भोक्तुं भैक्ष्यमपीह लोके ।\nहत्वार्थकामांस्तु गुरूनिहैव\nभुञ्जीय भोगान् रुधिरप्रदिग्धान् ॥ २.५ ॥",
    "verse_text": "gurūn ahatvā hi mahānubhāvān\nśreyo bhoktuṁ bhaikṣyam apīha loke\nhatvārtha-kāmāṁs tu gurūn ihaiva\nbhuñjīya bhogān rudhira-pradigdhān",
    "verse_text_no_samdhis": "gurūn ahatvā hi mahā anubhāvān śreyaḥ bhoktum bhaikṣyam api iha loke hatvā artha kāmān tu gurūn iha eva bhuñjīya bhogān rudhira pradigdhān"
  },
  {
    "id": 51,
    "title": 2.6,
    "devanagari": "न चैतद्विद्मः कतरन्नो गरीयो\nयद्वा जयेम यदि वा नो जयेयुः ।\nयानेव हत्वा न जिजीविषाम-\nस्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ॥ २.६ ॥",
    "verse_text": "na caitad vidmaḥ kataran no garīyo\nyad vā jayema yadi vā no jayeyuḥ\nyān eva hatvā na jijīviṣāmas\nte ’vasthitāḥ pramukhe dhārtarāṣṭrāḥ",
    "verse_text_no_samdhis": "na ca etat vidmaḥ katarat naḥ garīyaḥ yat vā jayema yadi vā naḥ jayeyuḥ yān eva hatvā na jijīviṣāmaḥ te avasthitāḥ pramukhe dhārtarāṣṭrāḥ"
  },
  {
    "id": 52,
    "title": 2.7,
    "devanagari": "कार्पण्यदोषोपहतस्वभावः\nपृच्छामि त्वां धर्मसम्मूढचेताः ।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे\nशिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥ २.७ ॥",
    "verse_text": "kārpaṇya-doṣopahata-svabhāvaḥ\npṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ\nyac chreyaḥ syān niścitaṁ brūhi tan me\nśiṣyas te ’haṁ śādhi māṁ tvāṁ prapannam",
    "verse_text_no_samdhis": "kārpaṇya doṣa upahata svabhāvaḥ pṛcchāmi tvām dharma sammūḍha cetāḥ yat śreyaḥ syāt niścitam brūhi tat me śiṣyaḥ te aham śādhi mām tvām prapannam"
  },
  {
    "id": 53,
    "title": 2.8,
    "devanagari": "न हि प्रपश्यामि ममापनुद्याद्यच्छोकमुच्छोषणमिन्द्रियाणाम् ।\nअवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम् ॥ २.८ ॥",
    "verse_text": "na hi prapaśyāmi mamāpanudyād\nyac chokam ucchoṣaṇam indriyāṇām\navāpya bhūmāv asapatnam ṛddhaṁ\nrājyaṁ surāṇām api cādhipatyam",
    "verse_text_no_samdhis": "na hi prapaśyāmi mama apanudyāt yat śokam ucchoṣaṇam indriyāṇām avāpya bhūmau asapatnam ṛddham rājyam surāṇām api ca ādhipatyam"
  },
  {
    "id": 54,
    "title": 2.9,
    "devanagari": "सञ्जय उवाच ।\nएवमुक्त्वा हृषीकेशं गुडाकेशः परन्तपः\nन योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह ॥ २.९ ॥",
    "verse_text": "sañjaya uvāca\nevam uktvā hṛṣīkeśaṁ\nguḍākeśaḥ paran-tapaḥ\nna yotsya iti govindam\nuktvā tūṣṇīṁ babhūva ha",
    "verse_text_no_samdhis": "sañjayaḥ uvāca evam uktvā hṛṣīkeśam guḍākeśaḥ param tapaḥ na yotsye iti govindam uktvā tūṣṇīm babhūva ha"
  },
  {
    "id": 55,
    "title": 2.1,
    "devanagari": "तमुवाच हृषीकेशः प्रहसन्निव भारत ।\nसेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः ॥ २.१० ॥",
    "verse_text": "tam uvāca hṛṣīkeśaḥ\nprahasann iva bhārata\nsenayor ubhayor madhye\nviṣīdantam idaṁ vacaḥ",
    "verse_text_no_samdhis": "tam uvāca hṛṣīkeśaḥ prahasan iva bhārata senayoḥ ubhayoḥ madhye viṣīdantam idam vacaḥ"
  },
  {
    "id": 56,
    "title": 2.11,
    "devanagari": "श्रीभगवानुवाच ।\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥ २.११ ॥",
    "verse_text": "śrī-bhagavān uvāca\naśocyān anvaśocas tvaṁ\nprajñā-vādāṁś ca bhāṣase\ngatāsūn agatāsūṁś ca\nnānuśocanti paṇḍitāḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca aśocyān anvaśocaḥ tvam prajñā vādān ca bhāṣase gata asūn agata asūn ca na anuśocanti paṇḍitāḥ"
  },
  {
    "id": 57,
    "title": 2.12,
    "devanagari": "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः ।\nन चैव न भविष्यामः सर्वे वयमतः परम् ॥ २.१२ ॥",
    "verse_text": "na tv evāhaṁ jātu nāsaṁ\nna tvaṁ neme janādhipāḥ\nna caiva na bhaviṣyāmaḥ\nsarve vayam ataḥ param",
    "verse_text_no_samdhis": "na tu eva aham jātu na āsam na tvam na ime jana adhipāḥ na ca eva na bhaviṣyāmaḥ sarve vayam ataḥ param"
  },
  {
    "id": 58,
    "title": 2.13,
    "devanagari": "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा ।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥ २.१३ ॥",
    "verse_text": "dehino ’smin yathā dehe\nkaumāraṁ yauvanaṁ jarā\ntathā dehāntara-prāptir\ndhīras tatra na muhyati",
    "verse_text_no_samdhis": "dehinaḥ asmin yathā dehe kaumāram yauvanam jarā tathā deha antara prāptiḥ dhīraḥ tatra na muhyati"
  },
  {
    "id": 59,
    "title": 2.14,
    "devanagari": "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥ २.१४ ॥",
    "verse_text": "mātrā-sparśās tu kaunteya\nśītoṣṇa-sukha-duḥkha-dāḥ\nāgamāpāyino ’nityās\ntāṁs titikṣasva bhārata",
    "verse_text_no_samdhis": "mātrā sparśāḥ tu kaunteya śīta uṣṇa sukha duḥkha dāḥ āgama apāyinaḥ anityāḥ tān titikṣasva bhārata"
  },
  {
    "id": 60,
    "title": 2.15,
    "devanagari": "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ ।\nसमदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ॥ २.१५ ॥",
    "verse_text": "yaṁ hi na vyathayanty ete\npuruṣaṁ puruṣarṣabha\nsama-duḥkha-sukhaṁ dhīraṁ\nso ’mṛtatvāya kalpate",
    "verse_text_no_samdhis": "yam hi na vyathayanti ete puruṣam puruṣa ṛṣabha sama duḥkha sukham dhīram saḥ amṛtatvāya kalpate"
  },
  {
    "id": 61,
    "title": 2.16,
    "devanagari": "नासतो विद्यते भावो नाभावो विद्यते सतः ।\nउभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥ २.१६ ॥",
    "verse_text": "nāsato vidyate bhāvo\nnābhāvo vidyate sataḥ\nubhayor api dṛṣṭo ’ntas\ntv anayos tattva-darśibhiḥ",
    "verse_text_no_samdhis": "na asataḥ vidyate bhāvaḥ na abhāvaḥ vidyate sataḥ ubhayoḥ api dṛṣṭaḥ antaḥ tu anayoḥ tattva darśibhiḥ"
  },
  {
    "id": 62,
    "title": 2.17,
    "devanagari": "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् ।\nविनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ॥ २.१७ ॥",
    "verse_text": "avināśi tu tad viddhi\nyena sarvam idaṁ tatam\nvināśam avyayasyāsya\nna kaścit kartum arhati",
    "verse_text_no_samdhis": "avināśi tu tat viddhi yena sarvam idam tatam vināśam avyayasya asya na kaścit kartum arhati"
  },
  {
    "id": 63,
    "title": 2.18,
    "devanagari": "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः ।\nअनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ॥ २.१८ ॥",
    "verse_text": "antavanta ime dehā\nnityasyoktāḥ śarīriṇaḥ\nanāśino ’prameyasya\ntasmād yudhyasva bhārata",
    "verse_text_no_samdhis": "anta vantaḥ ime dehāḥ nityasya uktāḥ śarīriṇaḥ anāśinaḥ aprameyasya tasmāt yudhyasva bhārata"
  },
  {
    "id": 64,
    "title": 2.19,
    "devanagari": "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् ।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥ २.१९ ॥",
    "verse_text": "ya enaṁ vetti hantāraṁ\nyaś cainaṁ manyate hatam\nubhau tau na vijānīto\nnāyaṁ hanti na hanyate",
    "verse_text_no_samdhis": "yaḥ enam vetti hantāram yaḥ ca enam manyate hatam ubhau tau na vijānītaḥ na ayam hanti na hanyate"
  },
  {
    "id": 65,
    "title": 2.2,
    "devanagari": "न जायते म्रियते वा कदाचि-\nन्नायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥ २.२० ॥",
    "verse_text": "na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato ’yaṁ purāṇo\nna hanyate hanyamāne śarīre",
    "verse_text_no_samdhis": "na jāyate mriyate vā kadācit na ayam bhūtvā bhavitā vā na bhūyaḥ ajaḥ nityaḥ śāśvataḥ ayam purāṇaḥ na hanyate hanyamāne śarīre"
  },
  {
    "id": 66,
    "title": 2.21,
    "devanagari": "वेदाविनाशिनं नित्यं य एनमजमव्ययम् ।\nकथं स पुरुषः पार्थ कं घातयति हन्ति कम् ॥ २.२१ ॥",
    "verse_text": "vedāvināśinaṁ nityaṁ\nya enam ajam avyayam\nkathaṁ sa puruṣaḥ pārtha\nkaṁ ghātayati hanti kam",
    "verse_text_no_samdhis": "veda avināśinam nityam yaḥ enam ajam avyayam katham saḥ puruṣaḥ pārtha kam ghātayati hanti kam"
  },
  {
    "id": 67,
    "title": 2.22,
    "devanagari": "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि ।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही ॥ २.२२ ॥",
    "verse_text": "vāsāṁsi jīrṇāni yathā vihāya\nnavāni gṛhṇāti naro ’parāṇi\ntathā śarīrāṇi vihāya jīrṇāny\nanyāni saṁyāti navāni dehī",
    "verse_text_no_samdhis": "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naraḥ aparāṇi tathā śarīrāṇi vihāya jirṇāni anyāni saṁyāti navāni dehī"
  },
  {
    "id": 68,
    "title": 2.23,
    "devanagari": "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः ।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः ॥ २.२३ ॥",
    "verse_text": "nainaṁ chindanti śastrāṇi\nnainaṁ dahati pāvakaḥ\nna cainaṁ kledayanty āpo\nna śoṣayati mārutaḥ",
    "verse_text_no_samdhis": "na enam chindanti śastrāṇi na enam dahati pāvakaḥ na ca enam kledayanti āpaḥ na śoṣayati mārutaḥ"
  },
  {
    "id": 69,
    "title": 2.24,
    "devanagari": "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च ।\nनित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ॥ २.२४ ॥",
    "verse_text": "acchedyo ’yam adāhyo ’yam\nakledyo ’śoṣya eva ca\nnityaḥ sarva-gataḥ sthāṇur\nacalo ’yaṁ sanātanaḥ",
    "verse_text_no_samdhis": "acchedyaḥ ayam adāhyaḥ ayam akledyaḥ aśoṣyaḥ eva ca nityaḥ sarva gataḥ sthāṇuḥ acalaḥ ayam sanātanaḥ"
  },
  {
    "id": 70,
    "title": 2.25,
    "devanagari": "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते ।\nतस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ॥ २.२५ ॥",
    "verse_text": "avyakto ’yam acintyo ’yam\navikāryo ’yam ucyate\ntasmād evaṁ viditvainaṁ\nnānuśocitum arhasi",
    "verse_text_no_samdhis": "avyaktaḥ ayam acintyaḥ ayam avikāryaḥ ayam ucyate tasmāt evam viditvā enam na anuśocitum arhasi"
  },
  {
    "id": 71,
    "title": 2.26,
    "devanagari": "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् ।\nतथापि त्वं महाबाहो नैवं शोचितुमर्हसि ॥ २.२६ ॥",
    "verse_text": "atha cainaṁ nitya-jātaṁ\nnityaṁ vā manyase mṛtam\ntathāpi tvaṁ mahā-bāho\nnainaṁ śocitum arhasi",
    "verse_text_no_samdhis": "atha ca enam nitya jātam nityam vā manyase mṛtam tathā api tvam mahā bāho na enam śocitum arhasi"
  },
  {
    "id": 72,
    "title": 2.27,
    "devanagari": "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च ।\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ॥ २.२७ ॥",
    "verse_text": "jātasya hi dhruvo mṛtyur\ndhruvaṁ janma mṛtasya ca\ntasmād aparihārye ’rthe\nna tvaṁ śocitum arhasi",
    "verse_text_no_samdhis": "jātasya hi dhruvaḥ mṛtyuḥ dhruvam janma mṛtasya ca tasmāt aparihārye arthe na tvam śocitum arhasi"
  },
  {
    "id": 73,
    "title": 2.28,
    "devanagari": "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत ।\nअव्यक्तनिधनान्येव तत्र का परिदेवना ॥ २.२८ ॥",
    "verse_text": "avyaktādīni bhūtāni\nvyakta-madhyāni bhārata\navyakta-nidhanāny eva\ntatra kā paridevanā",
    "verse_text_no_samdhis": "avyakta ādīni bhūtāni vyakta madhyāni bhārata avyakta nidhanāni eva tatra kā paridevanā"
  },
  {
    "id": 74,
    "title": 2.29,
    "devanagari": "आश्चर्यवत्पश्यति कश्चिदेन-\nमाश्चर्यवद्वदति तथैव चान्यः ।\nआश्चर्यवच्चैनमन्यः शृणोति\nश्रुत्वाप्येनं वेद न चैव कश्चित् ॥ २.२९ ॥",
    "verse_text": "āścarya-vat paśyati kaścid enam\nāścarya-vad vadati tathaiva cānyaḥ\nāścarya-vac cainam anyaḥ śṛṇoti\nśrutvāpy enaṁ veda na caiva kaścit",
    "verse_text_no_samdhis": "āścarya vat paśyati kaścit enam āścarya vat vadati tathā eva ca anyaḥ āścarya vat ca enam anyaḥ śṛṇoti śrutvā api enam veda na ca eva kaścit"
  },
  {
    "id": 75,
    "title": 2.3,
    "devanagari": "देही नित्यमवध्योऽयं देहे सर्वस्य भारत ।\nतस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि ॥ २.३० ॥",
    "verse_text": "dehī nityam avadhyo ’yaṁ\ndehe sarvasya bhārata\ntasmāt sarvāṇi bhūtāni\nna tvaṁ śocitum arhasi",
    "verse_text_no_samdhis": "dehī nityam avadhyaḥ ayam dehe sarvasya bhārata tasmāt sarvāṇi bhūtāni na tvam śocitum arhasi"
  },
  {
    "id": 76,
    "title": 2.31,
    "devanagari": "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि ।\nधर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ॥ २.३१ ॥",
    "verse_text": "sva-dharmam api cāvekṣya\nna vikampitum arhasi\ndharmyād dhi yuddhāc chreyo ’nyat\nkṣatriyasya na vidyate",
    "verse_text_no_samdhis": "sva dharmam api ca avekṣya na vikampitum arhasi dharmyāt hi yuddhāt śreyaḥ anyat kṣatriyasya na vidyate"
  },
  {
    "id": 77,
    "title": 2.32,
    "devanagari": "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् ।\nसुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् ॥ २.३२ ॥",
    "verse_text": "yadṛcchayā copapannaṁ\nsvarga-dvāram apāvṛtam\nsukhinaḥ kṣatriyāḥ pārtha\nlabhante yuddham īdṛśam",
    "verse_text_no_samdhis": "yadṛcchayā ca upapannam svarga dvāram apāvṛtam sukhinaḥ kṣatriyāḥ pārtha labhante yuddham īdṛśam"
  },
  {
    "id": 78,
    "title": 2.33,
    "devanagari": "अथ चेत्त्वमिमं धर्म्यं संग्रामं न करिष्यसि ।\nततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि ॥ २.३३ ॥",
    "verse_text": "atha cet tvam imaṁ dharmyaṁ\nsaṅgrāmaṁ na kariṣyasi\ntataḥ sva-dharmaṁ kīrtiṁ ca\nhitvā pāpam avāpsyasi",
    "verse_text_no_samdhis": "atha cet tvam imam dharmyam saṅgrāmam na kariṣyasi tataḥ sva dharmam kīrtim ca hitvā pāpam avāpsyasi"
  },
  {
    "id": 79,
    "title": 2.34,
    "devanagari": "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् ।\nसम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते ॥ २.३४ ॥",
    "verse_text": "akīrtiṁ cāpi bhūtāni\nkathayiṣyanti te ’vyayām\nsambhāvitasya cākīrtir\nmaraṇād atiricyate",
    "verse_text_no_samdhis": "akīrtim ca api bhūtāni kathayiṣyanti te avyayām sambhāvitasya ca akīrtiḥ maraṇāt atiricyate"
  },
  {
    "id": 80,
    "title": 2.35,
    "devanagari": "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः ।\nयेषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् ॥ २.३५ ॥",
    "verse_text": "bhayād raṇād uparataṁ\nmaṁsyante tvāṁ mahā-rathāḥ\nyeṣāṁ ca tvaṁ bahu-mato\nbhūtvā yāsyasi lāghavam",
    "verse_text_no_samdhis": "bhayāt raṇāt uparatam maṁsyante tvām mahā rathāḥ yeṣām ca tvam bahu mataḥ bhūtvā yāsyasi lāghavam"
  },
  {
    "id": 81,
    "title": 2.36,
    "devanagari": "अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः ।\nनिन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम् ॥ २.३६ ॥",
    "verse_text": "avācya-vādāṁś ca bahūn\nvadiṣyanti tavāhitāḥ\nnindantas tava sāmarthyaṁ\ntato duḥkha-taraṁ nu kim",
    "verse_text_no_samdhis": "avācya vādān ca bahūn vadiṣyanti tava ahitāḥ nindantaḥ tava sāmarthyam tataḥ duḥkha taram nu kim"
  },
  {
    "id": 82,
    "title": 2.37,
    "devanagari": "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम् ।\nतस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः ॥ २.३७ ॥",
    "verse_text": "hato vā prāpsyasi svargaṁ\njitvā vā bhokṣyase mahīm\ntasmād uttiṣṭha kaunteya\nyuddhāya kṛta-niścayaḥ",
    "verse_text_no_samdhis": "hataḥ vā prāpsyasi svargam jitvā vā bhokṣyase mahīm tasmāt uttiṣṭha kaunteya yuddhāya kṛta niścayaḥ"
  },
  {
    "id": 83,
    "title": 2.38,
    "devanagari": "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ॥ २.३८ ॥",
    "verse_text": "sukha-duḥkhe same kṛtvā\nlābhālābhau jayājayau\ntato yuddhāya yujyasva\nnaivaṁ pāpam avāpsyasi",
    "verse_text_no_samdhis": "sukha duḥkhe same kṛtvā lābha alābhau jaya ajayau tataḥ yuddhāya yujyasva na evam pāpam avāpsyasi"
  },
  {
    "id": 84,
    "title": 2.39,
    "devanagari": "एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां शृणु ।\nबुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि ॥ २.३९ ॥",
    "verse_text": "eṣā te ’bhihitā sāṅkhye\nbuddhir yoge tv imāṁ śṛṇu\nbuddhyā yukto yayā pārtha\nkarma-bandhaṁ prahāsyasi",
    "verse_text_no_samdhis": "eṣā te abhihitā sāṅkhye buddhiḥ yoge tu imām śṛṇu buddhyā yuktaḥ yayā pārtha karma bandham prahāsyasi"
  },
  {
    "id": 85,
    "title": 2.4,
    "devanagari": "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते ।\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ॥ २.४० ॥",
    "verse_text": "nehābhikrama-nāśo ’sti\npratyavāyo na vidyate\nsv-alpam apy asya dharmasya\ntrāyate mahato bhayāt",
    "verse_text_no_samdhis": "na iha abhikrama nāśaḥ asti pratyavāyaḥ na vidyate su alpam api asya dharmasya trāyate mahataḥ bhayāt"
  },
  {
    "id": 86,
    "title": 2.41,
    "devanagari": "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन ।\nबहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ॥ २.४१ ॥",
    "verse_text": "vyavasāyātmikā buddhir\nekeha kuru-nandana\nbahu-śākhā hy anantāś ca\nbuddhayo ’vyavasāyinām",
    "verse_text_no_samdhis": "vyavasāya ātmikā buddhiḥ ekā iha kuru nandana bahu śākhāḥ hi anantāḥ ca buddhayaḥ avyavasāyinām"
  },
  {
    "id": 87,
    "title": 2.42,
    "devanagari": "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः ।\nवेदवादरताः पार्थ नान्यदस्तीति वादिनः ॥ २.४२ ॥",
    "verse_text": "yām imāṁ puṣpitāṁ vācaṁ\npravadanty avipaścitaḥ\nveda-vāda-ratāḥ pārtha\nnānyad astīti vādinaḥ",
    "verse_text_no_samdhis": "yām imām puṣpitām vācam pravadanti avipaścitaḥ veda vāda ratāḥ pārtha na anyat asti iti vādinaḥ"
  },
  {
    "id": 88,
    "title": 2.43,
    "devanagari": "कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् ।\nक्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति ॥ २.४३ ॥",
    "verse_text": "kāmātmānaḥ svarga-parā\njanma-karma-phala-pradām\nkriyā-viśeṣa-bahulāṁ\nbhogaiśvarya-gatiṁ prati",
    "verse_text_no_samdhis": "kāma ātmānaḥ svarga parāḥ janma karma phala pradām kriyā viśeṣa bahulām bhoga aiśvarya gatim prati"
  },
  {
    "id": 89,
    "title": 2.44,
    "devanagari": "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् ।\nव्यवसायात्मिका बुद्धिः समाधौ न विधीयते ॥ २.४४ ॥",
    "verse_text": "bhogaiśvarya-prasaktānāṁ\ntayāpahṛta-cetasām\nvyavasāyātmikā buddhiḥ\nsamādhau na vidhīyate",
    "verse_text_no_samdhis": "bhoga aiśvarya prasaktānām tayā apahṛta cetasām vyavasāya ātmikā buddhiḥ samādhau na vidhīyate"
  },
  {
    "id": 90,
    "title": 2.45,
    "devanagari": "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन ।\nनिर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ॥ २.४५ ॥",
    "verse_text": "trai-guṇya-viṣayā vedā\nnistrai-guṇyo bhavārjuna\nnirdvandvo nitya-sattva-stho\nniryoga-kṣema ātmavān",
    "verse_text_no_samdhis": "trai guṇya viṣayāḥ vedāḥ nistrai guṇyaḥ bhava arjuna nirdvandvaḥ nitya sattva sthaḥ niryoga kṣemaḥ ātma vān"
  },
  {
    "id": 91,
    "title": 2.46,
    "devanagari": "यावानर्थ उदपाने सर्वतः संप्लुतोदके ।\nतावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः ॥ २.४६ ॥",
    "verse_text": "yāvān artha uda-pāne\nsarvataḥ samplutodake\ntāvān sarveṣu vedeṣu\nbrāhmaṇasya vijānataḥ",
    "verse_text_no_samdhis": "yāvān arthaḥ uda pāne sarvataḥ sampluta udake tāvān sarveṣu vedeṣu brāhmaṇasya vijānataḥ"
  },
  {
    "id": 92,
    "title": 2.47,
    "devanagari": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ २.४७ ॥",
    "verse_text": "karmaṇy evādhikāras te\nmā phaleṣu kadācana\nmā karma-phala-hetur bhūr\nmā te saṅgo ’stv akarmaṇi",
    "verse_text_no_samdhis": "karmaṇi eva adhikāraḥ te mā phaleṣu kadācana mā karma phala hetuḥ bhūḥ mā te saṅgaḥ astu akarmaṇi"
  },
  {
    "id": 93,
    "title": 2.48,
    "devanagari": "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनंजय ।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥ २.४८ ॥",
    "verse_text": "yoga-sthaḥ kuru karmāṇi\nsaṅgaṁ tyaktvā dhanañ-jaya\nsiddhy-asiddhyoḥ samo bhūtvā\nsamatvaṁ yoga ucyate",
    "verse_text_no_samdhis": "yoga sthaḥ kuru karmāṇi saṅgam tyaktvā dhanam jaya siddhi asiddhyoḥ samaḥ bhūtvā samatvam yogaḥ ucyate"
  },
  {
    "id": 94,
    "title": 2.49,
    "devanagari": "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनंजय ।\nबुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ॥ २.४९ ॥",
    "verse_text": "dūreṇa hy avaraṁ karma\nbuddhi-yogād dhanañ-jaya\nbuddhau śaranam anviccha\nkṛpaṇāḥ phala-hetavaḥ",
    "verse_text_no_samdhis": "dūreṇa hi avaram karma buddhi yogāt dhanam jaya buddhau śaraṇam anviccha kṛpaṇāḥ phala hetavaḥ"
  },
  {
    "id": 95,
    "title": 2.5,
    "devanagari": "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते ।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥ २.५० ॥",
    "verse_text": "buddhi-yukto jahātīha\nubhe sukṛta-duṣkṛte\ntasmād yogāya yujyasva\nyogaḥ karmasu kauśalam",
    "verse_text_no_samdhis": "buddhi yuktaḥ jahāti iha ubhe sukṛta duṣkṛte tasmāt yogāya yujyasva yogaḥ karmasu kauśalam"
  },
  {
    "id": 96,
    "title": 2.51,
    "devanagari": "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः ।\nजन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ॥ २.५१ ॥",
    "verse_text": "karma-jaṁ buddhi-yuktā hi\nphalaṁ tyaktvā manīṣiṇaḥ\njanma-bandha-vinirmuktāḥ\npadaṁ gacchanty anāmayam",
    "verse_text_no_samdhis": "karma jam buddhi yuktāḥ hi phalam tyaktvā manīṣiṇaḥ janma bandha vinirmuktāḥ padam gacchanti anāmayam"
  },
  {
    "id": 97,
    "title": 2.52,
    "devanagari": "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति ।\nतदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ॥ २.५२ ॥",
    "verse_text": "yadā te moha-kalilaṁ\nbuddhir vyatitariṣyati\ntadā gantāsi nirvedaṁ\nśrotavyasya śrutasya ca",
    "verse_text_no_samdhis": "yadā te moha kalilam buddhiḥ vyatitariṣyati tadā gantā asi nirvedam śrotavyasya śrutasya ca"
  },
  {
    "id": 98,
    "title": 2.53,
    "devanagari": "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला ।\nसमाधावचला बुद्धिस्तदा योगमवाप्स्यसि ॥ २.५३ ॥",
    "verse_text": "śruti-vipratipannā te\nyadā sthāsyati niścalā\nsamādhāv acalā buddhis\ntadā yogam avāpsyasi",
    "verse_text_no_samdhis": "śruti vipratipannā te yadā sthāsyati niścalā samādhau acalā buddhiḥ tadā yogam avāpsyasi"
  },
  {
    "id": 99,
    "title": 2.54,
    "devanagari": "अर्जुन उवाच ।\nस्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव\nस्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ॥ २.५४ ॥",
    "verse_text": "arjuna uvāca\nsthita-prajñasya kā bhāṣā\nsamādhi-sthasya keśava\nsthita-dhīḥ kiṁ prabhāṣeta\nkim āsīta vrajeta kim",
    "verse_text_no_samdhis": "arjunaḥ uvāca sthita prajñasya kā bhāṣā samādhi sthasya keśava sthita dhīḥ kim prabhāṣeta kim āsīta vrajeta kim"
  },
  {
    "id": 100,
    "title": 2.55,
    "devanagari": "श्रीभगवानुवाच ।\nप्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ॥ २.५५ ॥",
    "verse_text": "śrī-bhagavān uvāca\nprajahāti yadā kāmān\nsarvān pārtha mano-gatān\nātmany evātmanā tuṣṭaḥ\nsthita-prajñas tadocyate",
    "verse_text_no_samdhis": "śrī bhagavān uvāca prajahāti yadā kāmān sarvān pārtha manaḥ gatān ātmani eva ātmanā tuṣṭaḥ sthita prajñaḥ tadā ucyate"
  },
  {
    "id": 101,
    "title": 2.56,
    "devanagari": "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः ।\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ॥ २.५६ ॥",
    "verse_text": "duḥkheṣv anudvigna-manāḥ\nsukheṣu vigata-spṛhaḥ\nvīta-rāga-bhaya-krodhaḥ\nsthita-dhīr munir ucyate",
    "verse_text_no_samdhis": "duḥkheṣu anudvigna manāḥ sukheṣu vigata spṛhaḥ vīta rāga bhaya krodhaḥ sthita dhīḥ muniḥ ucyate"
  },
  {
    "id": 102,
    "title": 2.57,
    "devanagari": "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम् ।\nनाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ॥ २.५७ ॥",
    "verse_text": "yaḥ sarvatrānabhisnehas\ntat tat prāpya śubhāśubham\nnābhinandati na dveṣṭi\ntasya prajñā pratiṣṭhitā",
    "verse_text_no_samdhis": "yaḥ sarvatra anabhisnehaḥ tat tat prāpya śubha aśubham na abhinandati na dveṣṭi tasya prajñā pratiṣṭhitā"
  },
  {
    "id": 103,
    "title": 2.58,
    "devanagari": "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः ।\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ २.५८ ॥",
    "verse_text": "yadā saṁharate cāyaṁ\nkūrmo ’ṅgānīva sarvaśaḥ\nindriyāṇīndriyārthebhyas\ntasya prajñā pratiṣṭhitā",
    "verse_text_no_samdhis": "yadā saṁharate ca ayam kūrmaḥ aṅgāni iva sarvaśaḥ indriyāṇi indriya arthebhyaḥ tasya prajñā pratiṣṭhitā"
  },
  {
    "id": 104,
    "title": 2.59,
    "devanagari": "विषया विनिवर्तन्ते निराहारस्य देहिनः ।\nरसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ॥ २.५९ ॥",
    "verse_text": "viṣayā vinivartante\nnirāhārasya dehinaḥ\nrasa-varjaṁ raso ’py asya \nparaṁ dṛṣṭvā nivartate",
    "verse_text_no_samdhis": "viṣayāḥ vinivartante nirāhārasya dehinaḥ rasa varjam rasaḥ api asya param dṛṣṭvā nivartate"
  },
  {
    "id": 105,
    "title": 2.6,
    "devanagari": "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः ।\nइन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ॥ २.६० ॥",
    "verse_text": "yatato hy api kaunteya\npuruṣasya vipaścitaḥ\nindriyāṇi pramāthīni\nharanti prasabhaṁ manaḥ",
    "verse_text_no_samdhis": "yatataḥ hi api kaunteya puruṣasya vipaścitaḥ indriyāṇi pramāthīni haranti prasabham manaḥ"
  },
  {
    "id": 106,
    "title": 2.61,
    "devanagari": "तानि सर्वाणि संयम्य युक्त आसीत मत्परः ।\nवशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ॥ २.६१ ॥",
    "verse_text": "tāni sarvāṇi saṁyamya\nyukta āsīta mat-paraḥ\nvaśe hi yasyendriyāṇi\ntasya prajñā pratiṣṭhitā",
    "verse_text_no_samdhis": "tāni sarvāṇi saṁyamya yuktaḥ āsīta mat paraḥ vaśe hi yasya indriyāṇi tasya prajñā pratiṣṭhitā"
  },
  {
    "id": 107,
    "title": 2.62,
    "devanagari": "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ।\nसङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते ॥ २.६२ ॥",
    "verse_text": "dhyāyato viṣayān puṁsaḥ\nsaṅgas teṣūpajāyate\nsaṅgāt sañjāyate kāmaḥ\nkāmāt krodho ’bhijāyate",
    "verse_text_no_samdhis": "dhyāyataḥ viṣayān puṁsaḥ saṅgaḥ teṣu upajāyate saṅgāt sañjāyate kāmaḥ kāmāt krodhaḥ abhijāyate"
  },
  {
    "id": 108,
    "title": 2.63,
    "devanagari": "क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः ।\nस्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥ २.६३ ॥",
    "verse_text": "krodhād bhavati sammohaḥ\nsammohāt smṛti-vibhramaḥ\nsmṛti-bhraṁśād buddhi-nāśo\nbuddhi-nāśāt praṇaśyati",
    "verse_text_no_samdhis": "krodhāt bhavati sammohaḥ sammohāt smṛti vibhramaḥ smṛti bhraṁśāt buddhi nāśaḥ buddhi nāśāt praṇaśyati"
  },
  {
    "id": 109,
    "title": 2.64,
    "devanagari": "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् ।\nआत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ॥ २.६४ ॥",
    "verse_text": "rāga-dveṣa-vimuktais tu\nviṣayān indriyaiś caran\nātma-vaśyair vidheyātmā\nprasādam adhigacchati",
    "verse_text_no_samdhis": "rāga dveṣa vimuktaiḥ tu viṣayān indriyaiḥ caran ātma vaśyaiḥ vidheya ātmā prasādam adhigacchati"
  },
  {
    "id": 110,
    "title": 2.65,
    "devanagari": "प्रसादे सर्वदुःखानां हानिरस्योपजायते ।\nप्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते ॥ २.६५ ॥",
    "verse_text": "prasāde sarva-duḥkhānāṁ\nhānir asyopajāyate\nprasanna-cetaso hy āśu\nbuddhiḥ paryavatiṣṭhate",
    "verse_text_no_samdhis": "prasāde sarva duḥkhānām hāniḥ asya upajāyate prasanna cetasaḥ hi āśu buddhiḥ pari avatiṣṭhate"
  },
  {
    "id": 111,
    "title": 2.66,
    "devanagari": "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना ।\nन चाभावयतः शान्तिरशान्तस्य कुतः सुखम् ॥ २.६६ ॥",
    "verse_text": "nāsti buddhir ayuktasya\nna cāyuktasya bhāvanā\nna cābhāvayataḥ śāntir\naśāntasya kutaḥ sukham",
    "verse_text_no_samdhis": "na asti buddhiḥ ayuktasya na ca ayuktasya bhāvanā na ca abhāvayataḥ śāntiḥ aśāntasya kutaḥ sukham"
  },
  {
    "id": 112,
    "title": 2.67,
    "devanagari": "इन्द्रियाणां हि चरतां यन्मनोऽनु विधीयते ।\nतदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ॥ २.६७ ॥",
    "verse_text": "indriyāṇāṁ hi caratāṁ\nyan mano ’nuvidhīyate\ntad asya harati prajñāṁ\nvāyur nāvam ivāmbhasi",
    "verse_text_no_samdhis": "indriyāṇām hi caratām yat manaḥ anuvidhīyate tat asya harati prajñām vāyuḥ nāvam iva ambhasi"
  },
  {
    "id": 113,
    "title": 2.68,
    "devanagari": "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः ।\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ २.६८ ॥",
    "verse_text": "tasmād yasya mahā-bāho\nnigṛhītāni sarvaśaḥ\nindriyāṇīndriyārthebhyas\ntasya prajñā pratiṣṭhitā",
    "verse_text_no_samdhis": "tasmāt yasya mahā bāho nigṛhītāni sarvaśaḥ indriyāṇi indriya arthebhyaḥ tasya prajñā pratiṣṭhitā"
  },
  {
    "id": 114,
    "title": 2.69,
    "devanagari": "या निशा सर्वभूतानां तस्यां जागर्ति संयमी ।\nयस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः ॥ २.६९ ॥",
    "verse_text": "yā niśā sarva-bhūtānāṁ\ntasyāṁ jāgarti saṁyamī\nyasyāṁ jāgrati bhūtāni\nsā niśā paśyato muneḥ",
    "verse_text_no_samdhis": "yā niśā sarva bhūtānām tasyām jāgarti saṁyamī yasyām jāgrati bhūtāni sā niśā paśyataḥ muneḥ"
  },
  {
    "id": 115,
    "title": 2.7,
    "devanagari": "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् ।\nतद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी ॥ २.७० ॥",
    "verse_text": "āpūryamāṇam acala-pratiṣṭhaṁ\nsamudram āpaḥ praviśanti yadvat\ntadvat kāmā yaṁ praviśanti sarve\nsa śāntim āpnoti na kāma-kāmī",
    "verse_text_no_samdhis": "āpūryamāṇam acala pratiṣṭham samudram āpaḥ praviśanti yadvat tadvat kāmāḥ yam praviśanti sarve saḥ śāntim āpnoti na kāma kāmī"
  },
  {
    "id": 116,
    "title": 2.71,
    "devanagari": "विहाय कामान्यः सर्वान् पुमांश्चरति निःस्पृहः ।\nनिर्ममो निरहंकारः स शान्तिमधिगच्छति ॥ २.७१ ॥",
    "verse_text": "vihāya kāmān yaḥ sarvān\npumāṁś carati niḥspṛhaḥ\nnirmamo nirahaṅkāraḥ\nsa śāntim adhigacchati",
    "verse_text_no_samdhis": "vihāya kāmān yaḥ sarvān pumān carati niḥspṛhaḥ nirmamaḥ nirahaṅkāraḥ saḥ śāntim adhigacchati"
  },
  {
    "id": 117,
    "title": 2.72,
    "devanagari": "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति ।\nस्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ॥ २.७२ ॥",
    "verse_text": "eṣā brāhmī sthitiḥ pārtha\nnaināṁ prāpya vimuhyati\nsthitvāsyām anta-kāle ’pi\nbrahma-nirvāṇam ṛcchati",
    "verse_text_no_samdhis": "eṣā brāhmī sthitiḥ pārtha na enām prāpya vimuhyati sthitvā asyām anta kāle api brahma nirvāṇam ṛcchati"
  },
  {
    "id": 118,
    "title": 3.1,
    "devanagari": "अर्जुन उवाच ।\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन\nतत्किं कर्मणि घोरे मां नियोजयसि केशव ॥ ३.१ ॥",
    "verse_text": "arjuna uvāca\njyāyasī cet karmaṇas te\nmatā buddhir janārdana\ntat kiṁ karmaṇi ghore māṁ\nniyojayasi keśava",
    "verse_text_no_samdhis": "arjunaḥ uvāca jyāyasī cet karmaṇaḥ te matā buddhiḥ janārdana tat kim karmaṇi ghore mām niyojayasi keśava"
  },
  {
    "id": 119,
    "title": 3.2,
    "devanagari": "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे ।\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् ॥ ३.२ ॥",
    "verse_text": "vyāmiśreṇeva vākyena\nbuddhiṁ mohayasīva me\ntad ekaṁ vada niścitya\nyena śreyo ’ham āpnuyām",
    "verse_text_no_samdhis": "vyāmiśreṇa iva vākyena buddhim mohayasi iva me tat ekam vada niścitya yena śreyaḥ aham āpnuyām"
  },
  {
    "id": 120,
    "title": 3.3,
    "devanagari": "श्रीभगवानुवाच ।\nलोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ\nज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम् ॥ ३.३ ॥",
    "verse_text": "śrī-bhagavān uvāca\nloke ’smin dvi-vidhā niṣṭhā\npurā proktā mayānagha\njñāna-yogena sāṅkhyānāṁ\nkarma-yogena yoginām",
    "verse_text_no_samdhis": "śrī bhagavān uvāca loke asmin dvi vidhā niṣṭhā purā proktā mayā anagha jñāna yogena sāṅkhyānām karma yogena yoginām"
  },
  {
    "id": 121,
    "title": 3.4,
    "devanagari": "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते ।\nन च संन्यसनादेव सिद्धिं समधिगच्छति ॥ ३.४ ॥",
    "verse_text": "na karmaṇām anārambhān\nnaiṣkarmyaṁ puruṣo ’śnute\nna ca sannyasanād eva\nsiddhiṁ samadhigacchati",
    "verse_text_no_samdhis": "na karmaṇām anārambhāt naiṣkarmyam puruṣaḥ aśnute na ca sannyasanāt eva siddhim samadhigacchati"
  },
  {
    "id": 122,
    "title": 3.5,
    "devanagari": "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् ।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ॥ ३.५ ॥",
    "verse_text": "na hi kaścit kṣaṇam api\njātu tiṣṭhaty akarma-kṛt\nkāryate hy avaśaḥ karma\nsarvaḥ prakṛti-jair guṇaiḥ",
    "verse_text_no_samdhis": "na hi kaścit kṣaṇam api jātu tiṣṭhati akarma kṛt kāryate hi avaśaḥ karma sarvaḥ prakṛti jaiḥ guṇaiḥ"
  },
  {
    "id": 123,
    "title": 3.6,
    "devanagari": "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् ।\nइन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ॥ ३.६ ॥",
    "verse_text": "karmendriyāṇi saṁyamya\nya āste manasā smaran\nindriyārthān vimūḍhātmā\nmithyācāraḥ sa ucyate",
    "verse_text_no_samdhis": "karma indriyāṇi saṁyamya yaḥ āste manasā smaran indriya arthān vimūḍha ātmā mithyā ācāraḥ saḥ ucyate"
  },
  {
    "id": 124,
    "title": 3.7,
    "devanagari": "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन ।\nकर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ॥ ३.७ ॥",
    "verse_text": "yas tv indriyāṇi manasā\nniyamyārabhate ’rjuna\nkarmendriyaiḥ karma-yogam\nasaktaḥ sa viśiṣyate",
    "verse_text_no_samdhis": "yaḥ tu indriyāṇi manasā niyamya ārabhate arjuna karma indriyaiḥ karma yogam asaktaḥ saḥ viśiṣyate"
  },
  {
    "id": 125,
    "title": 3.8,
    "devanagari": "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः ।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ॥ ३.८ ॥",
    "verse_text": "niyataṁ kuru karma tvaṁ\nkarma jyāyo hy akarmaṇaḥ\nśarīra-yātrāpi ca te\nna prasidhyed akarmaṇaḥ",
    "verse_text_no_samdhis": "niyatam kuru karma tvam karma jyāyaḥ hi akarmaṇaḥ śarīra yātrā api ca te na prasidhyet akarmaṇaḥ"
  },
  {
    "id": 126,
    "title": 3.9,
    "devanagari": "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः ।\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ॥ ३.९ ॥",
    "verse_text": "yajñārthāt karmaṇo ’nyatra\nloko ’yaṁ karma-bandhanaḥ\ntad-arthaṁ karma kaunteya\nmukta-saṅgaḥ samācara",
    "verse_text_no_samdhis": "yajña arthāt karmaṇaḥ anyatra lokaḥ ayam karma bandhanaḥ tat artham karma kaunteya mukta saṅgaḥ samācara"
  },
  {
    "id": 127,
    "title": 3.1,
    "devanagari": "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः ।\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ॥ ३.१० ॥",
    "verse_text": "saha-yajñāḥ prajāḥ sṛṣṭvā\npurovāca prajāpatiḥ\nanena prasaviṣyadhvam\neṣa vo ’stv iṣṭa-kāma-dhuk",
    "verse_text_no_samdhis": "saha yajñāḥ prajāḥ sṛṣṭvā purā uvāca prajā patiḥ anena prasaviṣyadhvam eṣaḥ vaḥ astu iṣṭa kāma dhuk"
  },
  {
    "id": 128,
    "title": 3.11,
    "devanagari": "देवान्भावयतानेन ते देवा भावयन्तु वः ।\nपरस्परं भावयन्तः श्रेयः परमवाप्स्यथ ॥ ३.११ ॥",
    "verse_text": "devān bhāvayatānena\nte devā bhāvayantu vaḥ\nparasparaṁ bhāvayantaḥ\nśreyaḥ param avāpsyatha",
    "verse_text_no_samdhis": "devān bhāvayatā anena te devāḥ bhāvayantu vaḥ parasparam bhāvayantaḥ śreyaḥ param avāpsyatha"
  },
  {
    "id": 129,
    "title": 3.12,
    "devanagari": "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः ।\nतैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः ॥ ३.१२ ॥",
    "verse_text": "iṣṭān bhogān hi vo devā\ndāsyante yajña-bhāvitāḥ\ntair dattān apradāyaibhyo\nyo bhuṅkte stena eva saḥ",
    "verse_text_no_samdhis": "iṣṭān bhogān hi vaḥ devāḥ dāsyante yajña bhāvitāḥ taiḥ dattān apradāya ebhyaḥ yaḥ bhuṅkte stenaḥ eva saḥ"
  },
  {
    "id": 130,
    "title": 3.13,
    "devanagari": "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः ।\nभुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ॥ ३.१३ ॥",
    "verse_text": "yajña-śiṣṭāśinaḥ santo\nmucyante sarva-kilbiṣaiḥ\nbhuñjate te tv aghaṁ pāpā\nye pacanty ātma-kāraṇāt",
    "verse_text_no_samdhis": "yajña śiṣṭa aśinaḥ santaḥ mucyante sarva kilbiṣaiḥ bhuñjate te tu agham pāpāḥ ye pacanti ātma kāraṇāt"
  },
  {
    "id": 131,
    "title": 3.14,
    "devanagari": "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः ।\nयज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः ॥ ३.१४ ॥",
    "verse_text": "annād bhavanti bhūtāni\nparjanyād anna-sambhavaḥ\nyajñād bhavati parjanyo\nyajñaḥ karma-samudbhavaḥ",
    "verse_text_no_samdhis": "annāt bhavanti bhūtāni parjanyāt anna sambhavaḥ yajñāt bhavati parjanyaḥ yajñaḥ karma samudbhavaḥ"
  },
  {
    "id": 132,
    "title": 3.15,
    "devanagari": "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम् ।\nतस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् ॥ ३.१५ ॥",
    "verse_text": "karma brahmodbhavaṁ viddhi\nbrahmākṣara-samudbhavam\ntasmāt sarva-gataṁ brahma\nnityaṁ yajñe pratiṣṭhitam",
    "verse_text_no_samdhis": "karma brahma udbhavam viddhi brahma akṣara samudbhavam tasmāt sarva gatam brahma nityam yajñe pratiṣṭhitam"
  },
  {
    "id": 133,
    "title": 3.16,
    "devanagari": "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः ।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति ॥ ३.१६ ॥",
    "verse_text": "evaṁ pravartitaṁ cakraṁ\nnānuvartayatīha yaḥ\naghāyur indriyārāmo\nmoghaṁ pārtha sa jīvati",
    "verse_text_no_samdhis": "evam pravartitam cakram na anuvartayati iha yaḥ agha āyuḥ indriya ārāmaḥ mogham pārtha saḥ jīvati"
  },
  {
    "id": 134,
    "title": 3.17,
    "devanagari": "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः ।\nआत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते ॥ ३.१७ ॥",
    "verse_text": "yas tv ātma-ratir eva syād\nātma-tṛptaś ca mānavaḥ\nātmany eva ca santuṣṭas\ntasya kāryaṁ na vidyate",
    "verse_text_no_samdhis": "yaḥ tu ātma ratiḥ eva syāt ātma tṛptaḥ ca mānavaḥ ātmani eva ca santuṣṭaḥ tasya kāryam na vidyate"
  },
  {
    "id": 135,
    "title": 3.18,
    "devanagari": "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन ।\nन चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः ॥ ३.१८ ॥",
    "verse_text": "naiva tasya kṛtenārtho\nnākṛteneha kaścana\nna cāsya sarva-bhūteṣu\nkaścid artha-vyapāśrayaḥ",
    "verse_text_no_samdhis": "na eva tasya kṛtena arthaḥ na akṛtena iha kaścana na ca asya sarva bhūteṣu kaścit artha vyapāśrayaḥ"
  },
  {
    "id": 136,
    "title": 3.19,
    "devanagari": "तस्मादसक्तः सततं कार्यं कर्म समाचर ।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ॥ ३.१९ ॥",
    "verse_text": "tasmād asaktaḥ satataṁ\nkāryaṁ karma samācara\nasakto hy ācaran karma\nparam āpnoti pūruṣaḥ",
    "verse_text_no_samdhis": "tasmāt asaktaḥ satatam kāryam karma samācara asaktaḥ hi ācaran karma param āpnoti pūruṣaḥ"
  },
  {
    "id": 137,
    "title": 3.2,
    "devanagari": "कर्मणैव हि संसिद्धिमास्थिता जनकादयः ।\nलोकसंग्रहमेवापि संपश्यन्कर्तुमर्हसि ॥ ३.२० ॥",
    "verse_text": "karmaṇaiva hi saṁsiddhim\nāsthitā janakādayaḥ\nloka-saṅgraham evāpi\nsampaśyan kartum arhasi",
    "verse_text_no_samdhis": "karmaṇā eva hi saṁsiddhim āsthitāḥ janaka ādayaḥ loka saṅgraham eva api sampaśyan kartum arhasi"
  },
  {
    "id": 138,
    "title": 3.21,
    "devanagari": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥ ३.२१ ॥",
    "verse_text": "yad yad ācarati śreṣṭhas\ntat tad evetaro janaḥ\nsa yat pramāṇaṁ kurute\nlokas tad anuvartate",
    "verse_text_no_samdhis": "yat yat ācarati śreṣṭhaḥ tat tat eva itaraḥ janaḥ saḥ yat pramāṇam kurute lokaḥ tat anuvartate"
  },
  {
    "id": 139,
    "title": 3.22,
    "devanagari": "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किंचन ।\nनानवाप्तमवाप्तव्यं वर्त एव च कर्मणि ॥ ३.२२ ॥",
    "verse_text": "na me pārthāsti kartavyaṁ\ntriṣu lokeṣu kiñcana\nnānavāptam avāptavyaṁ\nvarta eva ca karmaṇi",
    "verse_text_no_samdhis": "na me pārtha asti kartavyam triṣu lokeṣu kiñcana na anavāptam avāptavyam varte eva ca karmaṇi"
  },
  {
    "id": 140,
    "title": 3.23,
    "devanagari": "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः ।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ॥ ३.२३ ॥",
    "verse_text": "yadi hy ahaṁ na varteyaṁ\njātu karmaṇy atandritaḥ\nmama vartmānuvartante\nmanuṣyāḥ pārtha sarvaśaḥ",
    "verse_text_no_samdhis": "yadi hi aham na varteyam jātu karmaṇi atandritaḥ mama vartma anuvartante manuṣyāḥ pārtha sarvaśaḥ"
  },
  {
    "id": 141,
    "title": 3.24,
    "devanagari": "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् ।\nसंकरस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः ॥ ३.२४ ॥",
    "verse_text": "utsīdeyur ime lokā\nna kuryāṁ karma ced aham\nsaṅkarasya ca kartā syām\nupahanyām imāḥ prajāḥ",
    "verse_text_no_samdhis": "utsīdeyuḥ ime lokāḥ na kuryām karma cet aham saṅkarasya ca kartā syām upahanyām imāḥ prajāḥ"
  },
  {
    "id": 142,
    "title": 3.25,
    "devanagari": "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत ।\nकुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम् ॥ ३.२५ ॥",
    "verse_text": "saktāḥ karmaṇy avidvāṁso\nyathā kurvanti bhārata\nkuryād vidvāṁs tathāsaktaś\ncikīrṣur loka-saṅgraham",
    "verse_text_no_samdhis": "saktāḥ karmaṇi avidvāṁsaḥ yathā kurvanti bhārata kuryāt vidvān tathā asaktaḥ cikīrṣuḥ loka saṅgraham"
  },
  {
    "id": 143,
    "title": 3.26,
    "devanagari": "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् ।\nजोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् ॥ ३.२६ ॥",
    "verse_text": "na buddhi-bhedaṁ janayed\najñānāṁ karma-saṅginām\njoṣayet sarva-karmāṇi\nvidvān yuktaḥ samācaran",
    "verse_text_no_samdhis": "na buddhi bhedam janayet ajñānām karma saṅginām joṣayet sarva karmāṇi vidvān yuktaḥ samācaran"
  },
  {
    "id": 144,
    "title": 3.27,
    "devanagari": "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः ।\nअहंकारविमूढात्मा कर्ताहमिति मन्यते ॥ ३.२७ ॥",
    "verse_text": "prakṛteḥ kriyamāṇāni\nguṇaiḥ karmāṇi sarvaśaḥ\nahaṅkāra-vimūḍhātmā\nkartāham iti manyate",
    "verse_text_no_samdhis": "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ ahaṅkāra vimūḍha ātmā kartā aham iti manyate"
  },
  {
    "id": 145,
    "title": 3.28,
    "devanagari": "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः ।\nगुणा गुणेषु वर्तन्त इति मत्वा न सज्जते ॥ ३.२८ ॥",
    "verse_text": "tattva-vit tu mahā-bāho\nguṇa-karma-vibhāgayoḥ\nguṇā guṇeṣu vartanta\niti matvā na sajjate",
    "verse_text_no_samdhis": "tattva vit tu mahā bāho guṇa karma vibhāgayoḥ guṇāḥ guṇeṣu vartante iti matvā na sajjate"
  },
  {
    "id": 146,
    "title": 3.29,
    "devanagari": "प्रकृतेर्गुणसंमूढाः सज्जन्ते गुणकर्मसु ।\nतानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् ॥ ३.२९ ॥",
    "verse_text": "prakṛter guṇa-sammūḍhāḥ\nsajjante guṇa-karmasu\ntān akṛtsna-vido mandān\nkṛtsna-vin na vicālayet",
    "verse_text_no_samdhis": "prakṛteḥ guṇa sammūḍhāḥ sajjante guṇa karmasu tān akṛtsna vidaḥ mandān kṛtsna vit na vicālayet"
  },
  {
    "id": 147,
    "title": 3.3,
    "devanagari": "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा ।\nनिराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ॥ ३.३० ॥",
    "verse_text": "mayi sarvāṇi karmāṇi\nsannyasyādhyātma-cetasā\nnirāśīr nirmamo bhūtvā\nyudhyasva vigata-jvaraḥ",
    "verse_text_no_samdhis": "mayi sarvāṇi karmāṇi sannyasya adhyātma cetasā nirāśīḥ nirmamaḥ bhūtvā yudhyasva vigata jvaraḥ"
  },
  {
    "id": 148,
    "title": 3.31,
    "devanagari": "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः ।\nश्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः ॥ ३.३१ ॥",
    "verse_text": "ye me matam idaṁ nityam\nanutiṣṭhanti mānavāḥ\nśraddhāvanto ’nasūyanto\nmucyante te ’pi karmabhiḥ",
    "verse_text_no_samdhis": "ye me matam idam nityam anutiṣṭhanti mānavāḥ śraddhā vantaḥ anasūyantaḥ mucyante te api karmabhiḥ"
  },
  {
    "id": 149,
    "title": 3.32,
    "devanagari": "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् ।\nसर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः ॥ ३.३२ ॥",
    "verse_text": "ye tv etad abhyasūyanto\nnānutiṣṭhanti me matam\nsarva-jñāna-vimūḍhāṁs tān\nviddhi naṣṭān acetasaḥ",
    "verse_text_no_samdhis": "ye tu etat abhyasūyantaḥ na anutiṣṭhanti me matam sarva jñāna vimūḍhān tān viddhi naṣṭān acetasaḥ"
  },
  {
    "id": 150,
    "title": 3.33,
    "devanagari": "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि ।\nप्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति ॥ ३.३३ ॥",
    "verse_text": "sadṛśaṁ ceṣṭate svasyāḥ\nprakṛter jñānavān api\nprakṛtiṁ yānti bhūtāni\nnigrahaḥ kiṁ kariṣyati",
    "verse_text_no_samdhis": "sadṛśam ceṣṭate svasyāḥ prakṛteḥ jñāna vān api prakṛtim yānti bhūtāni nigrahaḥ kim kariṣyati"
  },
  {
    "id": 151,
    "title": 3.34,
    "devanagari": "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ ।\nतयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ ॥ ३.३४ ॥",
    "verse_text": "indriyasyendriyasyārthe\nrāga-dveṣau vyavasthitau\ntayor na vaśam āgacchet\ntau hy asya paripanthinau",
    "verse_text_no_samdhis": "indriyasya indriyasya arthe rāga dveṣau vyavasthitau tayoḥ na vaśam āgacchet tau hi asya paripanthinau"
  },
  {
    "id": 152,
    "title": 3.35,
    "devanagari": "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥ ३.३५ ॥",
    "verse_text": "śreyān sva-dharmo viguṇaḥ\npara-dharmāt sv-anuṣṭhitāt\nsva-dharme nidhanaṁ śreyaḥ\npara-dharmo bhayāvahaḥ",
    "verse_text_no_samdhis": "śreyān sva dharmaḥ viguṇaḥ para dharmāt su anuṣṭhitāt sva dharme nidhanam śreyaḥ para dharmaḥ bhaya āvahaḥ"
  },
  {
    "id": 153,
    "title": 3.36,
    "devanagari": "अर्जुन उवाच ।\nअथ केन प्रयुक्तोऽयं पापं चरति पूरुषः\nअनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः ॥ ३.३६ ॥",
    "verse_text": "arjuna uvāca\natha kena prayukto ’yaṁ\npāpaṁ carati pūruṣaḥ\nanicchann api vārṣṇeya\nbalād iva niyojitaḥ",
    "verse_text_no_samdhis": "arjunaḥ uvāca atha kena prayuktaḥ ayam pāpam carati pūruṣaḥ anicchan api vārṣṇeya balāt iva niyojitaḥ"
  },
  {
    "id": 154,
    "title": 3.37,
    "devanagari": "श्रीभगवानुवाच ।\nकाम एष क्रोध एष रजोगुणसमुद्भवः\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ॥ ३.३७ ॥",
    "verse_text": "śrī-bhagavān uvāca\nkāma eṣa krodha eṣa\nrajo-guṇa-samudbhavaḥ\nmahāśano mahā-pāpmā\nviddhy enam iha vairiṇam",
    "verse_text_no_samdhis": "śri bhagavān uvāca kāmaḥ eṣaḥ krodhaḥ eṣaḥ rajaḥ guṇa samudbhavaḥ mahā aśanaḥ mahā pāpmā viddhi enam iha vairiṇam"
  },
  {
    "id": 155,
    "title": 3.38,
    "devanagari": "धूमेनाव्रियते वह्निर्यथादर्शो मलेन च ।\nयथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम् ॥ ३.३८ ॥",
    "verse_text": "dhūmenāvriyate vahnir\nyathādarśo malena ca\nyatholbenāvṛto garbhas\ntathā tenedam āvṛtam",
    "verse_text_no_samdhis": "dhūmena āvriyate vahniḥ yathā ādarśaḥ malena ca yathā ulbena āvṛtaḥ garbhaḥ tathā tena idam āvṛtam"
  },
  {
    "id": 156,
    "title": 3.39,
    "devanagari": "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा ।\nकामरूपेण कौन्तेय दुष्पूरेणानलेन च ॥ ३.३९ ॥",
    "verse_text": "āvṛtaṁ jñānam etena\njñānino nitya-vairiṇā\nkāma-rūpeṇa kaunteya\nduṣpūreṇānalena ca",
    "verse_text_no_samdhis": "āvṛtam jñānam etena jñāninaḥ nitya vairiṇā kāma rūpeṇa kaunteya duṣpūreṇa analena ca"
  },
  {
    "id": 157,
    "title": 3.4,
    "devanagari": "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते ।\nएतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् ॥ ३.४० ॥",
    "verse_text": "indriyāṇi mano buddhir\nasyādhiṣṭhānam ucyate\netair vimohayaty eṣa\njñānam āvṛtya dehinam",
    "verse_text_no_samdhis": "indriyāṇi manaḥ buddhiḥ asya adhiṣṭhānam ucyate etaiḥ vimohayati eṣaḥ jñānam āvṛtya dehinam"
  },
  {
    "id": 158,
    "title": 3.41,
    "devanagari": "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ ।\nपाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् ॥ ३.४१ ॥",
    "verse_text": "tasmāt tvam indriyāṇy ādau\nniyamya bharatarṣabha\npāpmānaṁ prajahi hy enaṁ\njñāna-vijñāna-nāśanam",
    "verse_text_no_samdhis": "tasmāt tvam indriyāṇi ādau niyamya bharata ṛṣabha pāpmānam prajahi hi enam jñāna vijñāna nāśanam"
  },
  {
    "id": 159,
    "title": 3.42,
    "devanagari": "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः ।\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ॥ ३.४२ ॥",
    "verse_text": "indriyāṇi parāṇy āhur\nindriyebhyaḥ paraṁ manaḥ\nmanasas tu parā buddhir\nyo buddheḥ paratas tu saḥ",
    "verse_text_no_samdhis": "indriyāṇi parāṇi āhuḥ indriyebhyaḥ param manaḥ manasaḥ tu parā buddhiḥ yaḥ buddheḥ parataḥ tu saḥ"
  },
  {
    "id": 160,
    "title": 3.43,
    "devanagari": "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना ।\nजहि शत्रुं महाबाहो कामरूपं दुरासदम् ॥ ३.४३ ॥",
    "verse_text": "evaṁ buddheḥ paraṁ buddhvā\nsaṁstabhyātmānam ātmanā\njahi śatruṁ mahā-bāho\nkāma-rūpaṁ durāsadam",
    "verse_text_no_samdhis": "evam buddheḥ param buddhvā saṁstabhya ātmānam ātmanā jahi śatrum mahā bāho kāma rūpam durāsadam"
  },
  {
    "id": 161,
    "title": 4.1,
    "devanagari": "श्रीभगवानुवाच ।\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम्\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ॥ ४.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nimaṁ vivasvate yogaṁ\nproktavān aham avyayam\nvivasvān manave prāha\nmanur ikṣvākave ’bravīt",
    "verse_text_no_samdhis": "śrī bhagavān uvāca imam vivasvate yogam proktavān aham avyayam vivasvān manave prāha manuḥ ikṣvākave abravīt"
  },
  {
    "id": 162,
    "title": 4.2,
    "devanagari": "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः ।\nस कालेनेह महता योगो नष्टः परन्तप ॥ ४.२ ॥",
    "verse_text": "evaṁ paramparā-prāptam\nimaṁ rājarṣayo viduḥ\nsa kāleneha mahatā\nyogo naṣṭaḥ paran-tapa",
    "verse_text_no_samdhis": "evam paramparā prāptam imam rāja ṛṣayaḥ viduḥ saḥ kālena iha mahatā yogaḥ naṣṭaḥ param tapa"
  },
  {
    "id": 163,
    "title": 4.3,
    "devanagari": "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः ।\nभक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् ॥ ४.३ ॥",
    "verse_text": "sa evāyaṁ mayā te ’dya\nyogaḥ proktaḥ purātanaḥ\nbhakto ’si me sakhā ceti\nrahasyaṁ hy etad uttamam",
    "verse_text_no_samdhis": "saḥ eva ayam mayā te adya yogaḥ proktaḥ purātanaḥ bhaktaḥ asi me sakhā ca iti rahasyam hi etat uttamam"
  },
  {
    "id": 164,
    "title": 4.4,
    "devanagari": "अर्जुन उवाच ।\nअपरं भवतो जन्म परं जन्म विवस्वतः\nकथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति ॥ ४.४ ॥",
    "verse_text": "arjuna uvāca\naparaṁ bhavato janma\nparaṁ janma vivasvataḥ\nkatham etad vijānīyāṁ\ntvam ādau proktavān iti",
    "verse_text_no_samdhis": "arjunaḥ uvāca aparam bhavataḥ janma param janma vivasvataḥ katham etat vijānīyām tvam ādau proktavān iti"
  },
  {
    "id": 165,
    "title": 4.5,
    "devanagari": "श्रीभगवानुवाच ।\nबहूनि मे व्यतीतानि जन्मानि तव चार्जुन\nतान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप ॥ ४.५ ॥",
    "verse_text": "śrī-bhagavān uvāca\nbahūni me vyatītāni\njanmāni tava cārjuna\ntāny ahaṁ veda sarvāṇi\nna tvaṁ vettha paran-tapa",
    "verse_text_no_samdhis": "śrī bhagavān uvāca bahūni me vyatītāni janmāni tava ca arjuna tāni aham veda sarvāṇi na tvam vettha param tapa"
  },
  {
    "id": 166,
    "title": 4.6,
    "devanagari": "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् ।\nप्रकृतिं स्वामधिष्ठाय संभवाम्यात्ममायया ॥ ४.६ ॥",
    "verse_text": "ajo ’pi sann avyayātmā\nbhūtānām īśvaro ’pi san\nprakṛtiṁ svām adhiṣṭhāya\nsambhavāmy ātma-māyayā",
    "verse_text_no_samdhis": "ajaḥ api san avyaya ātmā bhūtānām īśvaraḥ api san prakṛtim svām adhiṣṭhāya sambhavāmi ātma māyayā"
  },
  {
    "id": 167,
    "title": 4.7,
    "devanagari": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ ४.७ ॥",
    "verse_text": "yadā yadā hi dharmasya\nglānir bhavati bhārata\nabhyutthānam adharmasya\ntadātmānaṁ sṛjāmy aham",
    "verse_text_no_samdhis": "yadā yadā hi dharmasya glāniḥ bhavati bhārata abhyutthānam adharmasya tadā ātmānam sṛjāmi aham"
  },
  {
    "id": 168,
    "title": 4.8,
    "devanagari": "परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥ ४.८ ॥",
    "verse_text": "paritrāṇāya sādhūnāṁ\nvināśāya ca duṣkṛtām\ndharma-saṁsthāpanārthāya\nsambhavāmi yuge yuge",
    "verse_text_no_samdhis": "paritrāṇāya sādhūnām vināśāya ca duṣkṛtām dharma saṁsthāpana arthāya sambhavāmi yuge yuge"
  },
  {
    "id": 169,
    "title": 4.9,
    "devanagari": "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः ।\nत्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन ॥ ४.९ ॥",
    "verse_text": "janma karma ca me divyam\nevaṁ yo vetti tattvataḥ\ntyaktvā dehaṁ punar janma\nnaiti mām eti so ’rjuna",
    "verse_text_no_samdhis": "janma karma ca me divyam evam yaḥ vetti tattvataḥ tyaktvā deham punaḥ janma na eti mām eti saḥ arjuna"
  },
  {
    "id": 170,
    "title": 4.1,
    "devanagari": "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः ।\nबहवो ज्ञानतपसा पूता मद्भावमागताः ॥ ४.१० ॥",
    "verse_text": "vīta-rāga-bhaya-krodhā\nman-mayā mām upāśritāḥ\nbahavo jñāna-tapasā\npūtā mad-bhāvam āgatāḥ",
    "verse_text_no_samdhis": "vīta rāga bhaya krodhāḥ mat mayāḥ mām upāśritāḥ bahavaḥ jñāna tapasā pūtāḥ mat bhāvam āgatāḥ"
  },
  {
    "id": 171,
    "title": 4.11,
    "devanagari": "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् ।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ॥ ४.११ ॥",
    "verse_text": "ye yathā māṁ prapadyante\ntāṁs tathaiva bhajāmy aham\nmama vartmānuvartante\nmanuṣyāḥ pārtha sarvaśaḥ",
    "verse_text_no_samdhis": "ye yathā mām prapadyante tān tathā eva bhajāmi aham mama vartma anuvartante manuṣyāḥ pārtha sarvaśaḥ"
  },
  {
    "id": 172,
    "title": 4.12,
    "devanagari": "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः ।\nक्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा ॥ ४.१२ ॥",
    "verse_text": "kāṅkṣantaḥ karmaṇāṁ siddhiṁ\nyajanta iha devatāḥ\nkṣipraṁ hi mānuṣe loke\nsiddhir bhavati karma-jā",
    "verse_text_no_samdhis": "kāṅkṣantaḥ karmaṇām siddhim yajante iha devatāḥ kṣipram hi mānuṣe loke siddhiḥ bhavati karma jā"
  },
  {
    "id": 173,
    "title": 4.13,
    "devanagari": "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः ।\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥ ४.१३ ॥",
    "verse_text": "cātur-varṇyaṁ mayā sṛṣṭaṁ\nguṇa-karma-vibhāgaśaḥ\ntasya kartāram api māṁ\nviddhy akartāram avyayam",
    "verse_text_no_samdhis": "cātuḥ varṇyam mayā sṛṣṭam guṇa karma vibhāgaśaḥ tasya kartāram api mām viddhi akartāram avyayam"
  },
  {
    "id": 174,
    "title": 4.14,
    "devanagari": "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा ।\nइति मां योऽभिजानाति कर्मभिर्न स बध्यते ॥ ४.१४ ॥",
    "verse_text": "na māṁ karmāṇi limpanti\nna me karma-phale spṛhā\niti māṁ yo ’bhijānāti\nkarmabhir na sa badhyate",
    "verse_text_no_samdhis": "na mām karmāṇi limpanti na me karma phale spṛhā iti mām yaḥ abhijānāti karmabhiḥ na saḥ badhyate"
  },
  {
    "id": 175,
    "title": 4.15,
    "devanagari": "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः ।\nकुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् ॥ ४.१५ ॥",
    "verse_text": "evaṁ jñātvā kṛtaṁ karma\npūrvair api mumukṣubhiḥ\nkuru karmaiva tasmāt tvaṁ\npūrvaiḥ pūrva-taraṁ kṛtam",
    "verse_text_no_samdhis": "evam jñātvā kṛtam karma pūrvaiḥ api mumukṣubhiḥ kuru karma eva tasmāt tvam pūrvaiḥ pūrva taram kṛtam"
  },
  {
    "id": 176,
    "title": 4.16,
    "devanagari": "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः ।\nतत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ॥ ४.१६ ॥",
    "verse_text": "kiṁ karma kim akarmeti\nkavayo ’py atra mohitāḥ\ntat te karma pravakṣyāmi\nyaj jñātvā mokṣyase ’śubhāt",
    "verse_text_no_samdhis": "kim karma kim akarma iti kavayaḥ api atra mohitāḥ tat te karma pravakṣyāmi yat jñātvā mokṣyase aśubhāt"
  },
  {
    "id": 177,
    "title": 4.17,
    "devanagari": "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः ।\nअकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः ॥ ४.१७ ॥",
    "verse_text": "karmaṇo hy api boddhavyaṁ\nboddhavyaṁ ca vikarmaṇaḥ\nakarmaṇaś ca boddhavyaṁ\ngahanā karmaṇo gatiḥ",
    "verse_text_no_samdhis": "karmaṇaḥ hi api boddhavyam boddhavyam ca vikarmaṇaḥ akarmaṇaḥ ca boddhavyam gahanā karmaṇaḥ gatiḥ"
  },
  {
    "id": 178,
    "title": 4.18,
    "devanagari": "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ॥ ४.१८ ॥",
    "verse_text": "karmaṇy akarma yaḥ paśyed\nakarmaṇi ca karma yaḥ\nsa buddhimān manuṣyeṣu\nsa yuktaḥ kṛtsna-karma-kṛt",
    "verse_text_no_samdhis": "karmaṇi akarma yaḥ paśyet akarmaṇi ca karma yaḥ saḥ buddhi mān manuṣyeṣu saḥ yuktaḥ kṛtsna karma kṛt"
  },
  {
    "id": 179,
    "title": 4.19,
    "devanagari": "यस्य सर्वे समारम्भाः कामसंकल्पवर्जिताः ।\nज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः ॥ ४.१९ ॥",
    "verse_text": "yasya sarve samārambhāḥ\nkāma-saṅkalpa-varjitāḥ\njñānāgni-dagdha-karmāṇaṁ\ntam āhuḥ paṇḍitaṁ budhāḥ",
    "verse_text_no_samdhis": "yasya sarve samārambhāḥ kāma saṅkalpa varjitāḥ jñāna agni dagdha karmāṇam tam āhuḥ paṇḍitam budhāḥ"
  },
  {
    "id": 180,
    "title": 4.2,
    "devanagari": "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः ।\nकर्मण्यभिप्रवृत्तोऽपि नैव किंचित्करोति सः ॥ ४.२० ॥",
    "verse_text": "tyaktvā karma-phalāsaṅgaṁ\nnitya-tṛpto nirāśrayaḥ\nkarmaṇy abhipravṛtto ’pi\nnaiva kiñcit karoti saḥ",
    "verse_text_no_samdhis": "tyaktvā karma phala āsaṅgam nitya tṛptaḥ nirāśrayaḥ karmaṇi abhipravṛttaḥ api na eva kiñcit karoti saḥ"
  },
  {
    "id": 181,
    "title": 4.21,
    "devanagari": "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः ।\nशारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥ ४.२१ ॥",
    "verse_text": "nirāśīr yata-cittātmā\ntyakta-sarva-parigrahaḥ\nśārīraṁ kevalaṁ karma\nkurvan nāpnoti kilbiṣam",
    "verse_text_no_samdhis": "nirāśīḥ yata citta ātmā tyakta sarva parigrahaḥ śārīram kevalam karma kurvan na āpnoti kilbiṣam"
  },
  {
    "id": 182,
    "title": 4.22,
    "devanagari": "यदृच्छालाभसंतुष्टो द्वन्द्वातीतो विमत्सरः ।\nसमः सिद्धावसिद्धौ च कृत्वापि न निबध्यते ॥ ४.२२ ॥",
    "verse_text": "yadṛcchā-lābha-santuṣṭo\ndvandvātīto vimatsaraḥ\nsamaḥ siddhāv asiddhau ca\nkṛtvāpi na nibadhyate",
    "verse_text_no_samdhis": "yadṛcchā lābha santuṣṭaḥ dvandva atītaḥ vimatsaraḥ samaḥ siddhau asiddhau ca kṛtvā api na nibadhyate"
  },
  {
    "id": 183,
    "title": 4.23,
    "devanagari": "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः ।\nयज्ञायाचरतः कर्म समग्रं प्रविलीयते ॥ ४.२३ ॥",
    "verse_text": "gata-saṅgasya muktasya\njñānāvasthita-cetasaḥ\nyajñāyācarataḥ karma\nsamagraṁ pravilīyate",
    "verse_text_no_samdhis": "gata saṅgasya muktasya jñāna avasthita cetasaḥ yajñāya ācarataḥ karma samagram pravilīyate"
  },
  {
    "id": 184,
    "title": 4.24,
    "devanagari": "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥ ४.२४ ॥",
    "verse_text": "brahmārpaṇaṁ brahma havir\nbrahmāgnau brahmaṇā hutam\nbrahmaiva tena gantavyaṁ\nbrahma-karma-samādhinā",
    "verse_text_no_samdhis": "brahma arpaṇam brahma haviḥ brahma agnau brahmaṇā hutam brahma eva tena gantavyam brahma karma samādhinā"
  },
  {
    "id": 185,
    "title": 4.25,
    "devanagari": "दैवमेवापरे यज्ञं योगिनः पर्युपासते ।\nब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति ॥ ४.२५ ॥",
    "verse_text": "daivam evāpare yajñaṁ\nyoginaḥ paryupāsate\nbrahmāgnāv apare yajñaṁ\nyajñenaivopajuhvati",
    "verse_text_no_samdhis": "daivam eva apare yajñam yoginaḥ paryupāsate brahma agnau apare yajñam yajñena eva upajuhvati"
  },
  {
    "id": 186,
    "title": 4.26,
    "devanagari": "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति ।\nशब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति ॥ ४.२६ ॥",
    "verse_text": "śrotrādīnīndriyāṇy anye\nsaṁyamāgniṣu juhvati\nśabdādīn viṣayān anya\nindriyāgniṣu juhvati",
    "verse_text_no_samdhis": "śrotra ādīni indriyāṇi anye saṁyama agniṣu juhvati śabda ādīn viṣayān anye indriya agniṣu juhvati"
  },
  {
    "id": 187,
    "title": 4.27,
    "devanagari": "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे ।\nआत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते ॥ ४.२७ ॥",
    "verse_text": "sarvāṇīndriya-karmāṇi\nprāṇa-karmāṇi cāpare\nātma-saṁyama-yogāgnau\njuhvati jñāna-dīpite",
    "verse_text_no_samdhis": "sarvāṇi indriya karmāṇi prāṇa karmāṇi ca apare ātma saṁyama yoga agnau juhvati jñāna dīpite"
  },
  {
    "id": 188,
    "title": 4.28,
    "devanagari": "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे ।\nस्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ॥ ४.२८ ॥",
    "verse_text": "dravya-yajñās tapo-yajñā\nyoga-yajñās tathāpare\nsvādhyāya-jñāna-yajñāś ca\nyatayaḥ saṁśita-vratāḥ",
    "verse_text_no_samdhis": "dravya yajñāḥ tapaḥ yajñāḥ yoga yajñāḥ tathā apare svādhyāya jñāna yajñāḥ ca yatayaḥ saṁśita vratāḥ"
  },
  {
    "id": 189,
    "title": 4.29,
    "devanagari": "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे\nप्राणापानगती रुद्ध्वा प्राणायामपरायणाः\nअपरे नियताहाराः प्राणान्प्राणेषु जुह्वति ॥ ४.२९ ॥",
    "verse_text": "apāne juhvati prāṇaṁ\nprāṇe ’pānaṁ tathāpare\nprāṇāpāna-gatī ruddhvā\nprāṇāyāma-parāyaṇāḥ\napare niyatāhārāḥ\nprāṇān prāṇeṣu juhvati",
    "verse_text_no_samdhis": "apāne juhvati prāṇam prāṇe apānam tathā apare prāṇa apāna gatī ruddhvā prāṇa āyāma parāyaṇāḥ apare niyata āhārāḥ prāṇān prāṇeṣu juhvati"
  },
  {
    "id": 190,
    "title": 4.3,
    "devanagari": "सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः ।\nयज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् ॥ ४.३० ॥",
    "verse_text": "sarve ’py ete yajña-vido\nyajña-kṣapita-kalmaṣāḥ\nyajña-śiṣṭāmṛta-bhujo\nyānti brahma sanātanam",
    "verse_text_no_samdhis": "sarve api ete yajña vidaḥ yajña kṣapita kalmaṣāḥ yajña śiṣṭa amṛta bhujaḥ yānti brahma sanātanam"
  },
  {
    "id": 191,
    "title": 4.31,
    "devanagari": "नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम ॥ ४.३१ ॥",
    "verse_text": "nāyaṁ loko ’sty ayajñasya\nkuto ’nyaḥ kuru-sattama",
    "verse_text_no_samdhis": "na ayam lokaḥ asti ayajñasya kutaḥ anyaḥ kuru sat tama"
  },
  {
    "id": 192,
    "title": 4.32,
    "devanagari": "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे ।\nकर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे ॥ ४.३२ ॥",
    "verse_text": "evaṁ bahu-vidhā yajñā\nvitatā brahmaṇo mukhe\nkarma-jān viddhi tān sarvān\nevaṁ jñātvā vimokṣyase",
    "verse_text_no_samdhis": "evam bahu vidhāḥ yajñāḥ vitatāḥ brahmaṇaḥ mukhe karma jān viddhi tān sarvān evam jñātvā vimokṣyase"
  },
  {
    "id": 193,
    "title": 4.33,
    "devanagari": "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप ।\nसर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते ॥ ४.३३ ॥",
    "verse_text": "śreyān dravya-mayād yajñāj\njñāna-yajñaḥ paran-tapa\nsarvaṁ karmākhilaṁ pārtha\njñāne parisamāpyate",
    "verse_text_no_samdhis": "śreyān dravya mayāt yajñāt jñāna yajñaḥ param tapa sarvam karma akhilam pārtha jñāne parisamāpyate"
  },
  {
    "id": 194,
    "title": 4.34,
    "devanagari": "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया ।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ॥ ४.३४ ॥",
    "verse_text": "tad viddhi praṇipātena\nparipraśnena sevayā\nupadekṣyanti te jñānaṁ\njñāninas tattva-darśinaḥ",
    "verse_text_no_samdhis": "tat viddhi praṇipātena paripraśnena sevayā upadekṣyanti te jñānam jñāninaḥ tattva darśinaḥ"
  },
  {
    "id": 195,
    "title": 4.35,
    "devanagari": "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव ।\nयेन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि ॥ ४.३५ ॥",
    "verse_text": "yaj jñātvā na punar moham\nevaṁ yāsyasi pāṇḍava\nyena bhūtāny aśeṣāṇi\ndrakṣyasy ātmany atho mayi",
    "verse_text_no_samdhis": "yat jñātvā na punaḥ moham evam yāsyasi pāṇḍava yena bhūtāni aśeṣāṇi drakṣyasi ātmani atha u mayi"
  },
  {
    "id": 196,
    "title": 4.36,
    "devanagari": "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः ।\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि ॥ ४.३६ ॥",
    "verse_text": "api ced asi pāpebhyaḥ\nsarvebhyaḥ pāpa-kṛt-tamaḥ\nsarvaṁ jñāna-plavenaiva\nvṛjinaṁ santariṣyasi",
    "verse_text_no_samdhis": "api cet asi pāpebhyaḥ sarvebhyaḥ pāpa kṛt tamaḥ sarvam jñāna plavena eva vṛjinam santariṣyasi"
  },
  {
    "id": 197,
    "title": 4.37,
    "devanagari": "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन ।\nज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ॥ ४.३७ ॥",
    "verse_text": "yathaidhāṁsi samiddho ’gnir\nbhasma-sāt kurute ’rjuna\njñānāgniḥ sarva-karmāṇi\nbhasma-sāt kurute tathā",
    "verse_text_no_samdhis": "yathā edhāṁsi samiddhaḥ agniḥ bhasma sāt kurute arjuna jñāna agniḥ sarva karmāṇi bhasma sāt kurute tathā"
  },
  {
    "id": 198,
    "title": 4.38,
    "devanagari": "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥ ४.३८ ॥",
    "verse_text": "na hi jñānena sadṛśaṁ\npavitram iha vidyate\ntat svayaṁ yoga-saṁsiddhaḥ\nkālenātmani vindati",
    "verse_text_no_samdhis": "na hi jñānena sadṛśam pavitram iha vidyate tat svayam yoga saṁsiddhaḥ kālena ātmani vindati"
  },
  {
    "id": 199,
    "title": 4.39,
    "devanagari": "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः ।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ॥ ४.३९ ॥",
    "verse_text": "śraddhāvāḻ labhate jñānaṁ\ntat-paraḥ saṁyatendriyaḥ\njñānaṁ labdhvā parāṁ śāntim\nacireṇādhigacchati",
    "verse_text_no_samdhis": "śraddhā vān labhate jñānam tat paraḥ saṁyata indriyaḥ jñānam labdhvā parām śāntim acireṇa adhigacchati"
  },
  {
    "id": 200,
    "title": 4.4,
    "devanagari": "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति ।\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः ॥ ४.४० ॥",
    "verse_text": "ajñaś cāśraddadhānaś ca\nsaṁśayātmā vinaśyati\nnāyaṁ loko ’sti na paro\nna sukhaṁ saṁśayātmanaḥ",
    "verse_text_no_samdhis": "ajñaḥ ca aśraddadhānaḥ ca saṁśaya ātmā vinaśyati na ayam lokaḥ asti na paraḥ na sukham saṁśaya ātmanaḥ"
  },
  {
    "id": 201,
    "title": 4.41,
    "devanagari": "योगसंन्यस्तकर्माणं ज्ञानसंछिन्नसंशयम् ।\nआत्मवन्तं न कर्माणि निबध्नन्ति धनंजय ॥ ४.४१ ॥",
    "verse_text": "yoga-sannyasta-karmāṇaṁ\njñāna-sañchinna-saṁśayam\nātmavantaṁ na karmāṇi\nnibadhnanti dhanañ-jaya",
    "verse_text_no_samdhis": "yoga sannyasta karmāṇam jñāna sañchinna saṁśayam ātma vantam na karmāṇi nibadhnanti dhanam jaya"
  },
  {
    "id": 202,
    "title": 4.42,
    "devanagari": "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः ।\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ॥ ४.४२ ॥",
    "verse_text": "tasmād ajñāna-sambhūtaṁ\nhṛt-sthaṁ jñānāsinātmanaḥ\nchittvainaṁ saṁśayaṁ yogam\nātiṣṭhottiṣṭha bhārata",
    "verse_text_no_samdhis": "tasmāt ajñāna sambhūtam hṛt stham jñāna asinā ātmanaḥ chittvā enam saṁśayam yogam ātiṣṭha uttiṣṭha bhārata"
  },
  {
    "id": 203,
    "title": 5.1,
    "devanagari": "अर्जुन उवाच ।\nसंन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि\nयच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् ॥ ५.१ ॥",
    "verse_text": "arjuna uvāca\nsannyāsaṁ karmaṇāṁ kṛṣṇa\npunar yogaṁ ca śaṁsasi\nyac chreya etayor ekaṁ\ntan me brūhi su-niścitam",
    "verse_text_no_samdhis": "arjunaḥ uvāca sannyāsam karmaṇām kṛṣṇa punaḥ yogam ca śaṁsasi yat śreyaḥ etayoḥ ekam tat me brūhi su niścitam"
  },
  {
    "id": 204,
    "title": 5.2,
    "devanagari": "श्रीभगवानुवाच ।\nसंन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ\nतयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते ॥ ५.२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nsannyāsaḥ karma-yogaś ca\nniḥśreyasa-karāv ubhau\ntayos tu karma-sannyāsāt\nkarma-yogo viśiṣyate",
    "verse_text_no_samdhis": "śrī bhagavān uvāca sannyāsaḥ karma yogaḥ ca niḥśreyasa karau ubhau tayoḥ tu karma sannyāsāt karma yogaḥ viśiṣyate"
  },
  {
    "id": 205,
    "title": 5.3,
    "devanagari": "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति ।\nनिर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते ॥ ५.३ ॥",
    "verse_text": "jñeyaḥ sa nitya-sannyāsī\nyo na dveṣṭi na kāṅkṣati\nnirdvandvo hi mahā-bāho\nsukhaṁ bandhāt pramucyate",
    "verse_text_no_samdhis": "jñeyaḥ saḥ nitya sannyāsī yaḥ na dveṣṭi na kāṅkṣati nirdvandvaḥ hi mahā bāho sukham bandhāt pramucyate"
  },
  {
    "id": 206,
    "title": 5.4,
    "devanagari": "सांख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः ।\nएकमप्यास्थितः सम्यगुभयोर्विन्दते फलम् ॥ ५.४ ॥",
    "verse_text": "sāṅkhya-yogau pṛthag bālāḥ\npravadanti na paṇḍitāḥ\nekam apy āsthitaḥ samyag\nubhayor vindate phalam",
    "verse_text_no_samdhis": "sāṅkhya yogau pṛthak bālāḥ pravadanti na paṇḍitāḥ ekam api āsthitaḥ samyak ubhayoḥ vindate phalam"
  },
  {
    "id": 207,
    "title": 5.5,
    "devanagari": "यत्सांख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते ।\nएकं सांख्यं च योगं च यः पश्यति स: पश्यति ॥ ५.५ ॥",
    "verse_text": "yat sāṅkhyaiḥ prāpyate sthānaṁ\ntad yogair api gamyate\nekaṁ sāṅkhyaṁ ca yogaṁ ca\nyaḥ paśyati sa paśyati",
    "verse_text_no_samdhis": "yat sāṅkhyaiḥ prāpyate sthānam tat yogaiḥ api gamyate ekam sāṅkhyam ca yogam ca yaḥ paśyati saḥ paśyati"
  },
  {
    "id": 208,
    "title": 5.6,
    "devanagari": "संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः ।\nयोगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति ॥ ५.६ ॥",
    "verse_text": "sannyāsas tu mahā-bāho\nduḥkham āptum ayogataḥ\nyoga-yukto munir brahma\nna cireṇādhigacchati",
    "verse_text_no_samdhis": "sannyāsaḥ tu mahā bāho duḥkham āptum ayogataḥ yoga yuktaḥ muniḥ brahma na cireṇa adhigacchati"
  },
  {
    "id": 209,
    "title": 5.7,
    "devanagari": "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः ।\nसर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते ॥ ५.७ ॥",
    "verse_text": "yoga-yukto viśuddhātmā\nvijitātmā jitendriyaḥ\nsarva-bhūtātma-bhūtātmā\nkurvann api na lipyate",
    "verse_text_no_samdhis": "yoga yuktaḥ viśuddha ātmā vijita ātmā jita indriyaḥ sarva bhūta ātma bhūta ātmā kurvan api na lipyate"
  },
  {
    "id": 210,
    "title": 5.8,
    "devanagari": "नैव किंचित्करोमीति युक्तो मन्येत तत्त्ववित् ।\nपश्यञ्श्रृण्वन्स्पृशञ्जिघ्रन्नश्नन्\\u200cगच्छन्स्वपञ्श्वसन् ॥ ५.८ ॥",
    "verse_text": "naiva kiñcit karomīti\nyukto manyeta tattva-vit\npaśyañ śṛṇvan spṛśañ jighrann\naśnan gacchan svapañ śvasan",
    "verse_text_no_samdhis": "na eva kiñcit karomi iti yuktaḥ manyeta tattva vit paśyan śṛṇvan spṛśan jighran aśnan gacchan svapan śvasan"
  },
  {
    "id": 211,
    "title": 5.9,
    "devanagari": "प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि ।\nइन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् ॥ ५.९ ॥",
    "verse_text": "pralapan visṛjan gṛhṇann\nunmiṣan nimiṣann api\nindriyāṇīndriyārtheṣu\nvartanta iti dhārayan",
    "verse_text_no_samdhis": "pralapan visṛjan gṛhṇan unmiṣan nimiṣan api indriyāṇi indriya artheṣu vartante iti dhārayan"
  },
  {
    "id": 212,
    "title": 5.1,
    "devanagari": "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥ ५.१० ॥",
    "verse_text": "brahmaṇy ādhāya karmāṇi\nsaṅgaṁ tyaktvā karoti yaḥ\nlipyate na sa pāpena\npadma-patram ivāmbhasā",
    "verse_text_no_samdhis": "brahmaṇi ādhāya karmāṇi saṅgam tyaktvā karoti yaḥ lipyate na saḥ pāpena padma patram iva ambhasā"
  },
  {
    "id": 213,
    "title": 5.11,
    "devanagari": "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि ।\nयोगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये ॥ ५.११ ॥",
    "verse_text": "kāyena manasā buddhyā\nkevalair indriyair api\nyoginaḥ karma kurvanti\nsaṅgaṁ tyaktvātma-śuddhaye",
    "verse_text_no_samdhis": "kāyena manasā buddhyā kevalaiḥ indriyaiḥ api yoginaḥ karma kurvanti saṅgam tyaktvā ātma śuddhaye"
  },
  {
    "id": 214,
    "title": 5.12,
    "devanagari": "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम् ।\nअयुक्तः कामकारेण फले सक्तो निबध्यते ॥ ५.१२ ॥",
    "verse_text": "yuktaḥ karma-phalaṁ tyaktvā\nśāntim āpnoti naiṣṭhikīm\nayuktaḥ kāma-kāreṇa\nphale sakto nibadhyate",
    "verse_text_no_samdhis": "yuktaḥ karma phalam tyaktvā śāntim āpnoti naiṣṭhikīm ayuktaḥ kāma kāreṇa phale saktaḥ nibadhyate"
  },
  {
    "id": 215,
    "title": 5.13,
    "devanagari": "सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी ।\nनवद्वारे पुरे देही नैव कुर्वन्न कारयन् ॥ ५.१३ ॥",
    "verse_text": "sarva-karmāṇi manasā\nsannyasyāste sukhaṁ vaśī\nnava-dvāre pure dehī\nnaiva kurvan na kārayan",
    "verse_text_no_samdhis": "sarva karmāṇi manasā sannyasya āste sukham vaśī nava dvāre pure dehī na eva kurvan na kārayan"
  },
  {
    "id": 216,
    "title": 5.14,
    "devanagari": "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः ।\nन कर्मफलसंयोगं स्वभावस्तु प्रवर्तते ॥ ५.१४ ॥",
    "verse_text": "na kartṛtvaṁ na karmāṇi\nlokasya sṛjati prabhuḥ\nna karma-phala-saṁyogaṁ\nsvabhāvas tu pravartate",
    "verse_text_no_samdhis": "na kartṛtvam na karmāṇi lokasya sṛjati prabhuḥ na karma phala saṁyogam svabhāvaḥ tu pravartate"
  },
  {
    "id": 217,
    "title": 5.15,
    "devanagari": "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः ।\nअज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः ॥ ५.१५ ॥",
    "verse_text": "nādatte kasyacit pāpaṁ\nna caiva sukṛtaṁ vibhuḥ\najñānenāvṛtaṁ jñānaṁ\ntena muhyanti jantavaḥ",
    "verse_text_no_samdhis": "na ādatte kasyacit pāpam na ca eva su kṛtam vibhuḥ ajñānena āvṛtam jñānam tena muhyanti jantavaḥ"
  },
  {
    "id": 218,
    "title": 5.16,
    "devanagari": "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः ।\nतेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् ॥ ५.१६ ॥",
    "verse_text": "jñānena tu tad ajñānaṁ\nyeṣāṁ nāśitam ātmanaḥ\nteṣām āditya-vaj jñānaṁ\nprakāśayati tat param",
    "verse_text_no_samdhis": "jñānena tu tat ajñānam yeṣām nāśitam ātmanaḥ teṣām āditya vat jñānam prakāśayati tat param"
  },
  {
    "id": 219,
    "title": 5.17,
    "devanagari": "तद्\\u200cबुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः ।\nगच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः ॥ ५.१७ ॥",
    "verse_text": "tad-buddhayas tad-ātmānas\ntan-niṣṭhās tat-parāyaṇāḥ\ngacchanty apunar-āvṛttiṁ\njñāna-nirdhūta-kalmaṣāḥ",
    "verse_text_no_samdhis": "tat buddhayaḥ tat ātmānaḥ tat niṣṭhāḥ tat parāyaṇāḥ gacchanti apunaḥ āvṛttim jñāna nirdhūta kalmaṣāḥ"
  },
  {
    "id": 220,
    "title": 5.18,
    "devanagari": "विद्याविनयसंपन्ने ब्राह्मणे गवि हस्तिनि ।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ॥ ५.१८ ॥",
    "verse_text": "vidyā-vinaya-sampanne\nbrāhmaṇe gavi hastini\nśuni caiva śva-pāke ca\npaṇḍitāḥ sama-darśinaḥ",
    "verse_text_no_samdhis": "vidyā vinaya sampanne brāhmaṇe gavi hastini śuni ca eva śva pāke ca paṇḍitāḥ sama darśinaḥ"
  },
  {
    "id": 221,
    "title": 5.19,
    "devanagari": "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः ।\nनिर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः ॥ ५.१९ ॥",
    "verse_text": "ihaiva tair jitaḥ sargo\nyeṣāṁ sāmye sthitaṁ manaḥ\nnirdoṣaṁ hi samaṁ brahma\ntasmād brahmaṇi te sthitāḥ",
    "verse_text_no_samdhis": "iha eva taiḥ jitaḥ sargaḥ yeṣām sāmye sthitam manaḥ nirdoṣam hi samam brahma tasmāt brahmaṇi te sthitāḥ"
  },
  {
    "id": 222,
    "title": 5.2,
    "devanagari": "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् ।\nस्थिरबुद्धिरसंमूढो ब्रह्मविद्ब्रह्मणि स्थितः ॥ ५.२० ॥",
    "verse_text": "na prahṛṣyet priyaṁ prāpya\nnodvijet prāpya cāpriyam\nsthira-buddhir asammūḍho\nbrahma-vid brahmaṇi sthitaḥ",
    "verse_text_no_samdhis": "na prahṛṣyet priyam prāpya na udvijet prāpya ca apriyam sthira buddhiḥ asammūḍhaḥ brahma vit brahmaṇi sthitaḥ"
  },
  {
    "id": 223,
    "title": 5.21,
    "devanagari": "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत् सुखम् ।\nस ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते ॥ ५.२१ ॥",
    "verse_text": "bāhya-sparśeṣv asaktātmā\nvindaty ātmani yat sukham\nsa brahma-yoga-yuktātmā\nsukham akṣayam aśnute",
    "verse_text_no_samdhis": "bāhya sparśeṣu asakta ātmā vindati ātmani yat sukham saḥ brahma yoga yukta ātmā sukham akṣayam aśnute"
  },
  {
    "id": 224,
    "title": 5.22,
    "devanagari": "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते ।\nआद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः ॥ ५.२२ ॥",
    "verse_text": "ye hi saṁsparśa-jā bhogā\nduḥkha-yonaya eva te\nādy-antavantaḥ kaunteya\nna teṣu ramate budhaḥ",
    "verse_text_no_samdhis": "ye hi saṁsparśa jāḥ bhogāḥ duḥkha yonayaḥ eva te ādi anta vantaḥ kaunteya na teṣu ramate budhaḥ"
  },
  {
    "id": 225,
    "title": 5.23,
    "devanagari": "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात् ।\nकामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः ॥ ५.२३ ॥",
    "verse_text": "śaknotīhaiva yaḥ soḍhuṁ\nprāk śarīra-vimokṣaṇāt\nkāma-krodhodbhavaṁ vegaṁ\nsa yuktaḥ sa sukhī naraḥ",
    "verse_text_no_samdhis": "śaknoti iha eva yaḥ soḍhum prāk śarīra vimokṣaṇāt kāma krodha udbhavam vegam saḥ yuktaḥ saḥ sukhī naraḥ"
  },
  {
    "id": 226,
    "title": 5.24,
    "devanagari": "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः ।\nस योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति ॥ ५.२४ ॥",
    "verse_text": "yo ’ntaḥ-sukho ’ntar-ārāmas\ntathāntar-jyotir eva yaḥ\nsa yogī brahma-nirvāṇaṁ\nbrahma-bhūto ’dhigacchati",
    "verse_text_no_samdhis": "yaḥ antaḥ sukhaḥ antaḥ ārāmaḥ tathā antaḥ jyotiḥ eva yaḥ saḥ yogī brahma nirvāṇam brahma bhūtaḥ adhigacchati"
  },
  {
    "id": 227,
    "title": 5.25,
    "devanagari": "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः ।\nछिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः ॥ ५.२५ ॥",
    "verse_text": "labhante brahma-nirvāṇam\nṛṣayaḥ kṣīṇa-kalmaṣāḥ\nchinna-dvaidhā yatātmānaḥ\nsarva-bhūta-hite ratāḥ",
    "verse_text_no_samdhis": "labhante brahma nirvāṇam ṛṣayaḥ kṣīṇa kalmaṣāḥ chinna dvaidhāḥ yata ātmānaḥ sarva bhūta hite ratāḥ"
  },
  {
    "id": 228,
    "title": 5.26,
    "devanagari": "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् ।\nअभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् ॥ ५.२६ ॥",
    "verse_text": "kāma-krodha-vimuktānāṁ\nyatīnāṁ yata-cetasām\nabhito brahma-nirvāṇaṁ\nvartate viditātmanām",
    "verse_text_no_samdhis": "kāma krodha vimuktānām yatīnām yata cetasām abhitaḥ brahma nirvāṇam vartate vidita ātmanām"
  },
  {
    "id": 229,
    "title": 5.27,
    "devanagari": "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः ।\nप्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ ॥ ५.२७ ॥",
    "verse_text": "sparśān kṛtvā bahir bāhyāṁś\ncakṣuś caivāntare bhruvoḥ\nprāṇāpānau samau kṛtvā\nnāsābhyantara-cāriṇau",
    "verse_text_no_samdhis": "sparśān kṛtvā bahiḥ bāhyān cakṣuḥ ca eva antare bhruvoḥ prāṇa apānau samau kṛtvā nāsa abhyantara cāriṇau"
  },
  {
    "id": 230,
    "title": 5.28,
    "devanagari": "यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः ।\nविगतेच्छाभयक्रोधो यः सदा मुक्त एव सः ॥ ५.२८ ॥",
    "verse_text": "yatendriya-mano-buddhir\nmunir mokṣa-parāyaṇaḥ\nvigatecchā-bhaya-krodho\nyaḥ sadā mukta eva saḥ",
    "verse_text_no_samdhis": "yata indriya manaḥ buddhiḥ muniḥ mokṣa parāyaṇaḥ vigata icchā bhaya krodhaḥ yaḥ sadā muktaḥ eva saḥ"
  },
  {
    "id": 231,
    "title": 5.29,
    "devanagari": "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् ।\nसुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति ॥ ५.२९ ॥",
    "verse_text": "bhoktāraṁ yajña-tapasāṁ\nsarva-loka-maheśvaram\nsuhṛdaṁ sarva-bhūtānāṁ\njñātvā māṁ śāntim ṛcchati",
    "verse_text_no_samdhis": "bhoktāram yajña tapasām sarva loka mahā īśvaram su hṛdam sarva bhūtānām jñātvā mām śāntim ṛcchati"
  },
  {
    "id": 232,
    "title": 6.1,
    "devanagari": "श्रीभगवानुवाच ।\nअनाश्रितः कर्मफलं कार्यं कर्म करोति यः\nस संन्यासी च योगी च न निरग्निर्न चाक्रियः ॥ ६.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nanāśritaḥ karma-phalaṁ\nkāryaṁ karma karoti yaḥ\nsa sannyāsī ca yogī ca\nna niragnir na cākriyaḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca anāśritaḥ karma phalam kāryam karma karoti yaḥ saḥ sannyāsī ca yogī ca na niḥ agniḥ na ca akriyaḥ"
  },
  {
    "id": 233,
    "title": 6.2,
    "devanagari": "यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव ।\nन ह्यसंन्यस्तसंकल्पो योगी भवति कश्चन ॥ ६.२ ॥",
    "verse_text": "yaṁ sannyāsam iti prāhur\nyogaṁ taṁ viddhi pāṇḍava\nna hy asannyasta-saṅkalpo\nyogī bhavati kaścana",
    "verse_text_no_samdhis": "yam sannyāsam iti prāhuḥ yogam tam viddhi pāṇḍava na hi asannyasta saṅkalpaḥ yogī bhavati kaścana"
  },
  {
    "id": 234,
    "title": 6.3,
    "devanagari": "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते ।\nयोगारूढस्य तस्यैव शमः कारणमुच्यते ॥ ६.३ ॥",
    "verse_text": "ārurukṣor muner yogaṁ\nkarma kāraṇam ucyate\nyogārūḍhasya tasyaiva\nśamaḥ kāraṇam ucyate",
    "verse_text_no_samdhis": "ārurukṣoḥ muneḥ yogam karma kāraṇam ucyate yoga ārūḍhasya tasya eva śamaḥ kāraṇam ucyate"
  },
  {
    "id": 235,
    "title": 6.4,
    "devanagari": "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते ।\nसर्वसंकल्पसंन्यासी योगारूढस्तदोच्यते ॥ ६.४ ॥",
    "verse_text": "yadā hi nendriyārtheṣu\nna karmasv anuṣajjate\nsarva-saṅkalpa-sannyāsī\nyogārūḍhas tadocyate",
    "verse_text_no_samdhis": "yadā hi na indriya artheṣu na karmasu anuṣajjate sarva saṅkalpa sannyāsī yoga ārūḍhaḥ tadā ucyate"
  },
  {
    "id": 236,
    "title": 6.5,
    "devanagari": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥ ६.५ ॥",
    "verse_text": "uddhared ātmanātmānaṁ\nnātmānam avasādayet\nātmaiva hy ātmano bandhur\nātmaiva ripur ātmanaḥ",
    "verse_text_no_samdhis": "uddharet ātmanā ātmānam na ātmānam avasādayet ātmā eva hi ātmanaḥ bandhuḥ ātmā eva ripuḥ ātmanaḥ"
  },
  {
    "id": 237,
    "title": 6.6,
    "devanagari": "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः ।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ॥ ६.६ ॥",
    "verse_text": "bandhur ātmātmanas tasya\nyenātmaivātmanā jitaḥ\nanātmanas tu śatrutve\nvartetātmaiva śatru-vat",
    "verse_text_no_samdhis": "bandhuḥ ātmā ātmanaḥ tasya yena ātmā eva ātmanā jitaḥ anātmanaḥ tu śatrutve varteta ātmā eva śatru vat"
  },
  {
    "id": 238,
    "title": 6.7,
    "devanagari": "जितात्मनः प्रशान्तस्य परमात्मा समाहितः ।\nशीतोष्णसुखदुःखेषु तथा मानापमानयोः ॥ ६.७ ॥",
    "verse_text": "jitātmanaḥ praśāntasya\nparamātmā samāhitaḥ\nśītoṣṇa-sukha-duḥkheṣu\ntathā mānāpamānayoḥ",
    "verse_text_no_samdhis": "jita ātmanaḥ praśāntasya parama ātmā samāhitaḥ śīta uṣṇa sukha duḥkheṣu tathā māna apamānayoḥ"
  },
  {
    "id": 239,
    "title": 6.8,
    "devanagari": "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः ।\nयुक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः ॥ ६.८ ॥",
    "verse_text": "jñāna-vijñāna-tṛptātmā\nkūṭa-stho vijitendriyaḥ\nyukta ity ucyate yogī\nsama-loṣṭrāśma-kāñcanaḥ",
    "verse_text_no_samdhis": "jñāna vijñāna tṛpta ātmā kūṭa sthaḥ vijita indriyaḥ yuktaḥ iti ucyate yogī sama loṣṭra aśma kāñcanaḥ"
  },
  {
    "id": 240,
    "title": 6.9,
    "devanagari": "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु ।\nसाधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ॥ ६.९ ॥",
    "verse_text": "suhṛn-mitrāry-udāsīna-\nmadhyastha-dveṣya-bandhuṣu\nsādhuṣv api ca pāpeṣu\nsama-buddhir viśiṣyate",
    "verse_text_no_samdhis": "su hṛt mitra ari udāsīna madhya stha dveṣya bandhuṣu sādhuṣu api ca pāpeṣu sama buddhiḥ viśiṣyate"
  },
  {
    "id": 241,
    "title": 6.1,
    "devanagari": "योगी युञ्जीत सततमात्मानं रहसि स्थितः ।\nएकाकी यतचित्तात्मा निराशीरपरिग्रहः ॥ ६.१० ॥",
    "verse_text": "yogī yuñjīta satatam\nātmānaṁ rahasi sthitaḥ\nekākī yata-cittātmā\nnirāśīr aparigrahaḥ",
    "verse_text_no_samdhis": "yogī yuñjīta satatam ātmānam rahasi sthitaḥ ekākī yata citta ātmā nirāśīḥ aparigrahaḥ"
  },
  {
    "id": 242,
    "title": 6.11,
    "devanagari": "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः ।\nनात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् ॥ ६.११ ॥",
    "verse_text": "śucau deśe pratiṣṭhāpya\nsthiram āsanam ātmanaḥ\nnāty-ucchritaṁ nāti-nīcaṁ\ncailājina-kuśottaram",
    "verse_text_no_samdhis": "śucau deśe pratiṣṭhāpya sthiram āsanam ātmanaḥ na ati ucchritam na ati nīcam caila ajina kuśa uttaram"
  },
  {
    "id": 243,
    "title": 6.12,
    "devanagari": "तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः ।\nउपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये ॥ ६.१२ ॥",
    "verse_text": "tatraikāgraṁ manaḥ kṛtvā\nyata-cittendriya-kriyaḥ\nupaviśyāsane yuñjyād\nyogam ātma-viśuddhaye",
    "verse_text_no_samdhis": "tatra eka agram manaḥ kṛtvā yata citta indriya kriyaḥ upaviśya āsane yuñjyāt yogam ātma viśuddhaye"
  },
  {
    "id": 244,
    "title": 6.13,
    "devanagari": "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः ।\nसम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् ॥ ६.१३ ॥",
    "verse_text": "samaṁ kāya-śiro-grīvaṁ\ndhārayann acalaṁ sthiraḥ\nsamprekṣya nāsikāgraṁ svaṁ\ndiśaś cānavalokayan",
    "verse_text_no_samdhis": "samam kāya śiraḥ grīvam dhārayan acalam sthiraḥ samprekṣya nāsikā agram svam diśaḥ ca anavalokayan"
  },
  {
    "id": 245,
    "title": 6.14,
    "devanagari": "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः ।\nमनः संयम्य मच्चित्तो युक्त आसीत मत्परः ॥ ६.१४ ॥",
    "verse_text": "praśāntātmā vigata-bhīr\nbrahmacāri-vrate sthitaḥ\nmanaḥ saṁyamya mac-citto\nyukta āsīta mat-paraḥ",
    "verse_text_no_samdhis": "praśānta ātmā vigata bhīḥ brahmacāri vrate sthitaḥ manaḥ saṁyamya mat cittaḥ yuktaḥ āsīta mat paraḥ"
  },
  {
    "id": 246,
    "title": 6.15,
    "devanagari": "युञ्जन्नेवं सदात्मानं योगी नियतमानसः ।\nशान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति ॥ ६.१५ ॥",
    "verse_text": "yuñjann evaṁ sadātmānaṁ\nyogī niyata-mānasaḥ\nśāntiṁ nirvāṇa-paramāṁ\nmat-saṁsthām adhigacchati",
    "verse_text_no_samdhis": "yuñjan evam sadā ātmānam yogī niyata mānasaḥ śāntim nirvāṇa paramām mat saṁsthām adhigacchati"
  },
  {
    "id": 247,
    "title": 6.16,
    "devanagari": "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः ।\nन चाति स्वप्नशीलस्य जाग्रतो नैव चार्जुन ॥ ६.१६ ॥",
    "verse_text": "nāty-aśnatas tu yogo ’sti\nna caikāntam anaśnataḥ\nna cāti-svapna-śīlasya\njāgrato naiva cārjuna",
    "verse_text_no_samdhis": "na ati aśnataḥ tu yogaḥ asti na ca ekāntam anaśnataḥ na ca ati svapna śīlasya jāgrataḥ na eva ca arjuna"
  },
  {
    "id": 248,
    "title": 6.17,
    "devanagari": "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु ।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा ॥ ६.१७ ॥",
    "verse_text": "yuktāhāra-vihārasya\nyukta-ceṣṭasya karmasu\nyukta-svapnāvabodhasya\nyogo bhavati duḥkha-hā",
    "verse_text_no_samdhis": "yukta āhāra vihārasya yukta ceṣṭasya karmasu yukta svapna avabodhasya yogaḥ bhavati duḥkha hā"
  },
  {
    "id": 249,
    "title": 6.18,
    "devanagari": "यदा विनियतं चित्तमात्मन्येवावतिष्ठते ।\nनिःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा ॥ ६.१८ ॥",
    "verse_text": "yadā viniyataṁ cittam\nātmany evāvatiṣṭhate\nnispṛhaḥ sarva-kāmebhyo\nyukta ity ucyate tadā",
    "verse_text_no_samdhis": "yadā viniyatam cittam ātmani eva avatiṣṭhate nispṛhaḥ sarva kāmebhyaḥ yuktaḥ iti ucyate tadā"
  },
  {
    "id": 250,
    "title": 6.19,
    "devanagari": "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता ।\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः ॥ ६.१९ ॥",
    "verse_text": "yathā dīpo nivāta-stho\nneṅgate sopamā smṛtā\nyogino yata-cittasya\nyuñjato yogam ātmanaḥ",
    "verse_text_no_samdhis": "yathā dīpaḥ nivāta sthaḥ na iṅgate sā upamā smṛtā yoginaḥ yata cittasya yuñjataḥ yogam ātmanaḥ"
  },
  {
    "id": 251,
    "title": 6.2,
    "devanagari": "यत्रोपरमते चित्तं निरुद्धं योगसेवया ।\nयत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति ॥ ६.२० ॥",
    "verse_text": "yatroparamate cittaṁ\nniruddhaṁ yoga-sevayā\nyatra caivātmanātmānaṁ\npaśyann ātmani tuṣyati",
    "verse_text_no_samdhis": "yatra uparamate cittam niruddham yoga sevayā yatra ca eva ātmanā ātmānam paśyan ātmani tuṣyati"
  },
  {
    "id": 252,
    "title": 6.21,
    "devanagari": "सुखमात्यन्तिकं यत्तद् बुद्धिग्राह्यमतीन्द्रियम् ।\nवेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः ॥ ६.२१ ॥",
    "verse_text": "sukham ātyantikaṁ yat tad\nbuddhi-grāhyam atīndriyam\nvetti yatra na caivāyaṁ\nsthitaś calati tattvataḥ",
    "verse_text_no_samdhis": "sukham ātyantikam yat tat buddhi grāhyam atīndriyam vetti yatra na ca eva ayam sthitaḥ calati tattvataḥ"
  },
  {
    "id": 253,
    "title": 6.22,
    "devanagari": "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः ।\nयस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते ॥ ६.२२ ॥",
    "verse_text": "yaṁ labdhvā cāparaṁ lābhaṁ\nmanyate nādhikaṁ tataḥ\nyasmin sthito na duḥkhena\nguruṇāpi vicālyate",
    "verse_text_no_samdhis": "yam labdhvā ca aparam lābham manyate na adhikam tataḥ yasmin sthitaḥ na duḥkhena guruṇā api vicālyate"
  },
  {
    "id": 254,
    "title": 6.23,
    "devanagari": "तं विद्याद्\\u200cदुःखसंयोगवियोगं योगसंज्ञितम् ॥ ६.२३ ॥",
    "verse_text": "taṁ vidyād duḥkha-saṁyoga-\nviyogaṁ yoga-saṁjñitam",
    "verse_text_no_samdhis": "tam vidyāt duḥkha saṁyoga viyogam yoga saṁjñitam"
  },
  {
    "id": 255,
    "title": 6.24,
    "devanagari": "स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा ।\nसंकल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः\nमनसैवेन्द्रियग्रामं विनियम्य समन्ततः ॥ ६.२४ ॥",
    "verse_text": "sa niścayena yoktavyo\nyogo ’nirviṇṇa-cetasā\nsaṅkalpa-prabhavān kāmāṁs\ntyaktvā sarvān aśeṣataḥ\nmanasaivendriya-grāmaṁ\nviniyamya samantataḥ",
    "verse_text_no_samdhis": "saḥ niścayena yoktavyaḥ yogaḥ anirviṇṇa cetasā saṅkalpa prabhavān kāmān tyaktvā sarvān aśeṣataḥ manasā eva indriya grāmam viniyamya samantataḥ"
  },
  {
    "id": 256,
    "title": 6.25,
    "devanagari": "शनैः शनैरुपरमेद्\\u200cबुद्ध्या धृतिगृहीतया ।\nआत्मसंस्थं मनः कृत्वा न किंचिदपि चिन्तयेत् ॥ ६.२५ ॥",
    "verse_text": "śanaiḥ śanair uparamed\nbuddhyā dhṛti-gṛhītayā\nātma-saṁsthaṁ manaḥ kṛtvā\nna kiñcid api cintayet",
    "verse_text_no_samdhis": "śanaiḥ śanaiḥ uparamet buddhyā dhṛti gṛhītayā ātma saṁstham manaḥ kṛtvā na kiñcit api cintayet"
  },
  {
    "id": 257,
    "title": 6.26,
    "devanagari": "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् ।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ॥ ६.२६ ॥",
    "verse_text": "yato yato niścalati\nmanaś cañcalam asthiram\ntatas tato niyamyaitad\nātmany eva vaśaṁ nayet",
    "verse_text_no_samdhis": "yataḥ yataḥ niścalati manaḥ cañcalam asthiram tataḥ tataḥ niyamya etat ātmani eva vaśam nayet"
  },
  {
    "id": 258,
    "title": 6.27,
    "devanagari": "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् ।\nउपैति शान्तरजसं ब्रह्मभूतमकल्मषम् ॥ ६.२७ ॥",
    "verse_text": "praśānta-manasaṁ hy enaṁ\nyoginaṁ sukham uttamam\nupaiti śānta-rajasaṁ\nbrahma-bhūtam akalmaṣam",
    "verse_text_no_samdhis": "praśānta manasam hi enam yoginam sukham uttamam upaiti śānta rajasam brahma bhūtam akalmaṣam"
  },
  {
    "id": 259,
    "title": 6.28,
    "devanagari": "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः ।\nसुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते ॥ ६.२८ ॥",
    "verse_text": "yuñjann evaṁ sadātmānaṁ\nyogī vigata-kalmaṣaḥ\nsukhena brahma-saṁsparśam\natyantaṁ sukham aśnute",
    "verse_text_no_samdhis": "yuñjan evam sadā ātmānam yogī vigata kalmaṣaḥ sukhena brahma saṁsparśam atyantam sukham aśnute"
  },
  {
    "id": 260,
    "title": 6.29,
    "devanagari": "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि ।\nईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः ॥ ६.२९ ॥",
    "verse_text": "sarva-bhūta-stham ātmānaṁ\nsarva-bhūtāni cātmani\nīkṣate yoga-yuktātmā\nsarvatra sama-darśanaḥ",
    "verse_text_no_samdhis": "sarva bhūta stham ātmānam sarva bhūtāni ca ātmani īkṣate yoga yukta ātmā sarvatra sama darśanaḥ"
  },
  {
    "id": 261,
    "title": 6.3,
    "devanagari": "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति ।\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति ॥ ६.३० ॥",
    "verse_text": "yo māṁ paśyati sarvatra\nsarvaṁ ca mayi paśyati\ntasyāhaṁ na praṇaśyāmi\nsa ca me na praṇaśyati",
    "verse_text_no_samdhis": "yaḥ mām paśyati sarvatra sarvam ca mayi paśyati tasya aham na praṇaśyāmi saḥ ca me na praṇaśyati"
  },
  {
    "id": 262,
    "title": 6.31,
    "devanagari": "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः ।\nसर्वथा वर्तमानोऽपि स योगी मयि वर्तते ॥ ६.३१ ॥",
    "verse_text": "sarva-bhūta-sthitaṁ yo māṁ\nbhajaty ekatvam āsthitaḥ\nsarvathā vartamāno ’pi\nsa yogī mayi vartate",
    "verse_text_no_samdhis": "sarva bhūta sthitam yaḥ mām bhajati ekatvam āsthitaḥ sarvathā vartamānaḥ api saḥ yogī mayi vartate"
  },
  {
    "id": 263,
    "title": 6.32,
    "devanagari": "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन ।\nसुखं वा यदि वा दुःखं स योगी परमो मतः ॥ ६.३२ ॥",
    "verse_text": "ātmaupamyena sarvatra\nsamaṁ paśyati yo ’rjuna\nsukhaṁ vā yadi vā duḥkhaṁ\nsa yogī paramo mataḥ",
    "verse_text_no_samdhis": "ātma aupamyena sarvatra samam paśyati yaḥ arjuna sukham vā yadi vā duḥkham saḥ yogī paramaḥ mataḥ"
  },
  {
    "id": 264,
    "title": 6.33,
    "devanagari": "अर्जुन उवाच ।\nयोऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन\nएतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् ॥ ६.३३ ॥",
    "verse_text": "arjuna uvāca\nyo ’yaṁ yogas tvayā proktaḥ\nsāmyena madhusūdana\netasyāhaṁ na paśyāmi\ncañcalatvāt sthitiṁ sthirām",
    "verse_text_no_samdhis": "arjunaḥ uvāca yaḥ ayam yogaḥ tvayā proktaḥ sāmyena madhu sūdana etasya aham na paśyāmi cañcalatvāt sthitim sthirām"
  },
  {
    "id": 265,
    "title": 6.34,
    "devanagari": "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्\\u200cदृढम् ।\nतस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् ॥ ६.३४ ॥",
    "verse_text": "cañcalaṁ hi manaḥ kṛṣṇa\npramāthi balavad dṛḍham\ntasyāhaṁ nigrahaṁ manye\nvāyor iva su-duṣkaram",
    "verse_text_no_samdhis": "cañcalam hi manaḥ kṛṣṇa pramāthi bala vat dṛḍham tasya aham nigraham manye vāyoḥ iva su duṣkaram"
  },
  {
    "id": 266,
    "title": 6.35,
    "devanagari": "श्रीभगवानुवाच ।\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम्\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥ ६.३५ ॥",
    "verse_text": "śrī-bhagavān uvāca\nasaṁśayaṁ mahā-bāho\nmano durnigrahaṁ calam\nabhyāsena tu kaunteya\nvairāgyeṇa ca gṛhyate",
    "verse_text_no_samdhis": "śrī bhagavān uvāca asaṁśayam mahā bāho manaḥ durnigraham calam abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate"
  },
  {
    "id": 267,
    "title": 6.36,
    "devanagari": "असंयतात्मना योगो दुष्प्राप इति मे मतिः ।\nवश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः ॥ ६.३६ ॥",
    "verse_text": "asaṁyatātmanā yogo\nduṣprāpa iti me matiḥ\nvaśyātmanā tu yatatā\nśakyo ’vāptum upāyataḥ",
    "verse_text_no_samdhis": "asaṁyata ātmanā yogaḥ duṣprāpaḥ iti me matiḥ vaśya ātmanā tu yatatā śakyaḥ avāptum upāyataḥ"
  },
  {
    "id": 268,
    "title": 6.37,
    "devanagari": "अर्जुन उवाच ।\nअयतिः श्रद्धयोपेतो योगाच्चलितमानसः\nअप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति ॥ ६.३७ ॥",
    "verse_text": "arjuna uvāca\nayatiḥ śraddhayopeto\nyogāc calita-mānasaḥ\naprāpya yoga-saṁsiddhiṁ\nkāṁ gatiṁ kṛṣṇa gacchati",
    "verse_text_no_samdhis": "arjunaḥ uvāca ayatiḥ śraddhayā upetaḥ yogāt calita mānasaḥ aprāpya yoga saṁsiddhim kām gatim kṛṣṇa gacchati"
  },
  {
    "id": 269,
    "title": 6.38,
    "devanagari": "कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति ।\nअप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि ॥ ६.३८ ॥",
    "verse_text": "kaccin nobhaya-vibhraṣṭaś\nchinnābhram iva naśyati\napratiṣṭho mahā-bāho\nvimūḍho brahmaṇaḥ pathi",
    "verse_text_no_samdhis": "kaccit na ubhaya vibhraṣṭaḥ chinna abhram iva naśyati apratiṣṭhaḥ mahā bāho vimūḍhaḥ brahmaṇaḥ pathi"
  },
  {
    "id": 270,
    "title": 6.39,
    "devanagari": "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः ।\nत्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते ॥ ६.३९ ॥",
    "verse_text": "etan me saṁśayaṁ kṛṣṇa\nchettum arhasy aśeṣataḥ\ntvad-anyaḥ saṁśayasyāsya\nchettā na hy upapadyate",
    "verse_text_no_samdhis": "etat me saṁśayam kṛṣṇa chettum arhasi aśeṣataḥ tvat anyaḥ saṁśayasya asya chettā na hi upapadyate"
  },
  {
    "id": 271,
    "title": 6.4,
    "devanagari": "श्रीभगवानुवाच ।\nपार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते\nन हि कल्याणकृत्कश्चिद्\\u200cदुर्गतिं तात गच्छति ॥ ६.४० ॥",
    "verse_text": "śrī-bhagavān uvāca\npārtha naiveha nāmutra\nvināśas tasya vidyate\nna hi kalyāṇa-kṛt kaścid\ndurgatiṁ tāta gacchati",
    "verse_text_no_samdhis": "śrī bhagavān uvāca pārtha na eva iha na amutra vināśaḥ tasya vidyate na hi kalyāṇa kṛt kaścit durgatim tāta gacchati"
  },
  {
    "id": 272,
    "title": 6.41,
    "devanagari": "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः ।\nशुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते ॥ ६.४१ ॥",
    "verse_text": "prāpya puṇya-kṛtāṁ lokān\nuṣitvā śāśvatīḥ samāḥ\nśucīnāṁ śrīmatāṁ gehe\nyoga-bhraṣṭo ’bhijāyate",
    "verse_text_no_samdhis": "prāpya puṇya kṛtām lokān uṣitvā śāśvatīḥ samāḥ śucīnām śrī matām gehe yoga bhraṣṭaḥ abhijāyate"
  },
  {
    "id": 273,
    "title": 6.42,
    "devanagari": "अथवा योगिनामेव कुले भवति धीमताम् ।\nएतद्धि दुर्लभतरं लोके जन्म यदीदृशम् ॥ ६.४२ ॥",
    "verse_text": "atha vā yoginām eva\nkule bhavati dhīmatām\netad dhi durlabha-taraṁ\nloke janma yad īdṛśam",
    "verse_text_no_samdhis": "atha vā yoginām eva kule bhavati dhī matām etat hi durlabha taram loke janma yat īdṛśam"
  },
  {
    "id": 274,
    "title": 6.43,
    "devanagari": "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम् ।\nयतते च ततो भूयः संसिद्धौ कुरुनन्दन ॥ ६.४३ ॥",
    "verse_text": "tatra taṁ buddhi-saṁyogaṁ\nlabhate paurva-dehikam\nyatate ca tato bhūyaḥ\nsaṁsiddhau kuru-nandana",
    "verse_text_no_samdhis": "tatra tam buddhi saṁyogam labhate paurva dehikam yatate ca tataḥ bhūyaḥ saṁsiddhau kuru nandana"
  },
  {
    "id": 275,
    "title": 6.44,
    "devanagari": "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः ।\nजिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते ॥ ६.४४ ॥",
    "verse_text": "pūrvābhyāsena tenaiva\nhriyate hy avaśo ’pi saḥ\njijñāsur api yogasya\nśabda-brahmātivartate",
    "verse_text_no_samdhis": "pūrva abhyāsena tena eva hriyate hi avaśaḥ api saḥ jijñāsuḥ api yogasya śabda brahma ativartate"
  },
  {
    "id": 276,
    "title": 6.45,
    "devanagari": "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः ।\nअनेकजन्मसंसिद्धस्ततो याति परां गतिम् ॥ ६.४५ ॥",
    "verse_text": "prayatnād yatamānas tu\nyogī saṁśuddha-kilbiṣaḥ\naneka-janma-saṁsiddhas\ntato yāti parāṁ gatim",
    "verse_text_no_samdhis": "prayatnāt yatamānaḥ tu yogī saṁśuddha kilbiṣaḥ aneka janma saṁsiddhaḥ tataḥ yāti parām gatim"
  },
  {
    "id": 277,
    "title": 6.46,
    "devanagari": "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः ।\nकर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन ॥ ६.४६ ॥",
    "verse_text": "tapasvibhyo ’dhiko yogī\njñānibhyo ’pi mato ’dhikaḥ\nkarmibhyaś cādhiko yogī\ntasmād yogī bhavārjuna",
    "verse_text_no_samdhis": "tapasvibhyaḥ adhikaḥ yogī jñānibhyaḥ api mataḥ adhikaḥ karmibhyaḥ ca adhikaḥ yogī tasmāt yogī bhava arjuna"
  },
  {
    "id": 278,
    "title": 6.47,
    "devanagari": "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना ।\nश्रद्धावान् भजते यो मां स मे युक्ततमो मतः ॥ ६.४७ ॥",
    "verse_text": "yoginām api sarveṣāṁ\nmad-gatenāntar-ātmanā\nśraddhāvān bhajate yo māṁ\nsa me yukta-tamo mataḥ",
    "verse_text_no_samdhis": "yoginām api sarveṣām mat gatena antaḥ ātmanā śraddhā vān bhajate yaḥ mām saḥ me yukta tamaḥ mataḥ"
  },
  {
    "id": 279,
    "title": 7.1,
    "devanagari": "श्रीभगवानुवाच ।\nमय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः\nअसंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु ॥ ७.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nmayy āsakta-manāḥ pārtha\nyogaṁ yuñjan mad-āśrayaḥ\nasaṁśayaṁ samagraṁ māṁ\nyathā jñāsyasi tac chṛṇu",
    "verse_text_no_samdhis": "śrī bhagavān uvāca mayi āsakta manāḥ pārtha yogam yuñjan mat āśrayaḥ asaṁśayam samagram mām yathā jñāsyasi tat śṛṇu"
  },
  {
    "id": 280,
    "title": 7.2,
    "devanagari": "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः ।\nयज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते ॥ ७.२ ॥",
    "verse_text": "jñānaṁ te ’haṁ sa-vijñānam\nidaṁ vakṣyāmy aśeṣataḥ\nyaj jñātvā neha bhūyo ’nyaj\njñātavyam avaśiṣyate",
    "verse_text_no_samdhis": "jñānam te aham sa vijñānam idam vakṣyāmi aśeṣataḥ yat jñātvā na iha bhūyaḥ anyat jñātavyam avaśiṣyate"
  },
  {
    "id": 281,
    "title": 7.3,
    "devanagari": "मनुष्याणां सहस्त्रेषु कश्र्चिद्यतति सिद्धये ।\nयततामपि सिद्धानां कश्र्चिन्मां वेत्ति तत्त्वतः ॥ ७.३ ॥",
    "verse_text": "manuṣyāṇāṁ sahasreṣu\nkaścid yatati siddhaye\nyatatām api siddhānāṁ\nkaścin māṁ vetti tattvataḥ",
    "verse_text_no_samdhis": "manuṣyāṇām sahasreṣu kaścit yatati siddhaye yatatām api siddhānām kaścit mām vetti tattvataḥ"
  },
  {
    "id": 282,
    "title": 7.4,
    "devanagari": "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च ।\nअहंकार इतीयं मे भिन्ना प्रकृतिरष्टधा ॥ ७.४ ॥",
    "verse_text": "bhūmir āpo ’nalo vāyuḥ\nkhaṁ mano buddhir eva ca\nahaṅkāra itīyaṁ me\nbhinnā prakṛtir aṣṭadhā",
    "verse_text_no_samdhis": "bhūmiḥ āpaḥ analaḥ vāyuḥ kham manaḥ buddhiḥ eva ca ahaṅkāraḥ iti iyam me bhinnā prakṛtiḥ aṣṭadhā"
  },
  {
    "id": 283,
    "title": 7.5,
    "devanagari": "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम् ।\nजीवभूतां महाबाहो ययेदं धार्यते जगत् ॥ ७.५ ॥",
    "verse_text": "apareyam itas tv anyāṁ\nprakṛtiṁ viddhi me parām\njīva-bhūtāṁ mahā-bāho\nyayedaṁ dhāryate jagat",
    "verse_text_no_samdhis": "aparā iyam itaḥ tu anyām prakṛtim viddhi me parām jīva bhūtām mahā bāho yayā idam dhāryate jagat"
  },
  {
    "id": 284,
    "title": 7.6,
    "devanagari": "एतद्योनीनि भूतानि सर्वाणीत्युपधारय ।\nअहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा ॥ ७.६ ॥",
    "verse_text": "etad-yonīni bhūtāni\nsarvāṇīty upadhāraya\nahaṁ kṛtsnasya jagataḥ\nprabhavaḥ pralayas tathā",
    "verse_text_no_samdhis": "etat yonīni bhūtāni sarvāṇi iti upadhāraya aham kṛtsnasya jagataḥ prabhavaḥ pralayaḥ tathā"
  },
  {
    "id": 285,
    "title": 7.7,
    "devanagari": "मत्तः परतरं नान्यत्किंचिदस्ति धनंजय ।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥ ७.७ ॥",
    "verse_text": "mattaḥ parataraṁ nānyat\nkiñcid asti dhanañ-jaya\nmayi sarvam idaṁ protaṁ\nsūtre maṇi-gaṇā iva",
    "verse_text_no_samdhis": "mattaḥ para taram na anyat kiñcit asti dhanam jaya mayi sarvam idam protam sūtre maṇi gaṇāḥ iva"
  },
  {
    "id": 286,
    "title": 7.8,
    "devanagari": "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः ।\nप्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु ॥ ७.८ ॥",
    "verse_text": "raso ’ham apsu kaunteya\nprabhāsmi śaśi-sūryayoḥ\npraṇavaḥ sarva-vedeṣu\nśabdaḥ khe pauruṣaṁ nṛṣu",
    "verse_text_no_samdhis": "rasaḥ aham apsu kaunteya prabhā asmi śaśi sūryayoḥ praṇavaḥ sarva vedeṣu śabdaḥ khe pauruṣam nṛṣu"
  },
  {
    "id": 287,
    "title": 7.9,
    "devanagari": "पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ ।\nजीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु ॥ ७.९ ॥",
    "verse_text": "puṇyo gandhaḥ pṛthivyāṁ ca\ntejaś cāsmi vibhāvasau\njīvanaṁ sarva-bhūteṣu\ntapaś cāsmi tapasviṣu",
    "verse_text_no_samdhis": "puṇyaḥ gandhaḥ pṛthivyām ca tejaḥ ca asmi vibhāvasau jīvanam sarva bhūteṣu tapaḥ ca asmi tapasviṣu"
  },
  {
    "id": 288,
    "title": 7.1,
    "devanagari": "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम् ।\nबुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम् ॥ ७.१० ॥",
    "verse_text": "bījaṁ māṁ sarva-bhūtānāṁ\nviddhi pārtha sanātanam\nbuddhir buddhimatām asmi\ntejas tejasvinām aham",
    "verse_text_no_samdhis": "bījam mām sarva bhūtānām viddhi pārtha sanātanam buddhiḥ buddhi matām asmi tejaḥ tejasvinām aham"
  },
  {
    "id": 289,
    "title": 7.11,
    "devanagari": "बलं बलवतां चाहं कामरागविवर्जितम् ।\nधर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ ॥ ७.११ ॥",
    "verse_text": "balaṁ balavatāṁ cāhaṁ\nkāma-rāga-vivarjitam\ndharmāviruddho bhūteṣu\nkāmo ’smi bharatarṣabha",
    "verse_text_no_samdhis": "balam bala vatām ca aham kāma rāga vivarjitam dharma aviruddhaḥ bhūteṣu kāmaḥ asmi bharata ṛṣabha"
  },
  {
    "id": 290,
    "title": 7.12,
    "devanagari": "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये ।\nमत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि ॥ ७.१२ ॥",
    "verse_text": "ye caiva sāttvikā bhāvā\nrājasās tāmasāś ca ye\nmatta eveti tān viddhi\nna tv ahaṁ teṣu te mayi",
    "verse_text_no_samdhis": "ye ca eva sāttvikāḥ bhāvāḥ rājasāḥ tāmasāḥ ca ye mattaḥ eva iti tān viddhi na tu aham teṣu te mayi"
  },
  {
    "id": 291,
    "title": 7.13,
    "devanagari": "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत् ।\nमोहितं नाभिजानाति मामेभ्यः परमव्ययम् ॥ ७.१३ ॥",
    "verse_text": "tribhir guṇa-mayair bhāvair\nebhiḥ sarvam idaṁ jagat\nmohitaṁ nābhijānāti\nmām ebhyaḥ param avyayam",
    "verse_text_no_samdhis": "tribhiḥ guṇa mayaiḥ bhāvaiḥ ebhiḥ sarvam idam jagat mohitam na abhijānāti mām ebhyaḥ param avyayam"
  },
  {
    "id": 292,
    "title": 7.14,
    "devanagari": "दैवी ह्येषा गुणमयी मम माया दुरत्यया ।\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥ ७.१४ ॥",
    "verse_text": "daivī hy eṣā guṇa-mayī\nmama māyā duratyayā\nmām eva ye prapadyante\nmāyām etāṁ taranti te",
    "verse_text_no_samdhis": "daivī hi eṣā guṇa mayī mama māyā duratyayā mām eva ye prapadyante māyām etām taranti te"
  },
  {
    "id": 293,
    "title": 7.15,
    "devanagari": "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः ।\nमाययापहृतज्ञाना आसुरं भावमाश्रिताः ॥ ७.१५ ॥",
    "verse_text": "na māṁ duṣkṛtino mūḍhāḥ\nprapadyante narādhamāḥ\nmāyayāpahṛta-jñānā\nāsuraṁ bhāvam āśritāḥ",
    "verse_text_no_samdhis": "na mām duṣkṛtinaḥ mūḍhāḥ prapadyante nara adhamāḥ māyayā apahṛta jñānāḥ āsuram bhāvam āśritāḥ"
  },
  {
    "id": 294,
    "title": 7.16,
    "devanagari": "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन ।\nआर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ ॥ ७.१६ ॥",
    "verse_text": "catur-vidhā bhajante māṁ\njanāḥ su-kṛtino ’rjuna\nārto jijñāsur arthārthī\njñānī ca bharatarṣabha",
    "verse_text_no_samdhis": "catuḥ vidhāḥ bhajante mām janāḥ su kṛtinaḥ arjuna ārtaḥ jijñāsuḥ artha arthī jñānī ca bharata ṛṣabha"
  },
  {
    "id": 295,
    "title": 7.17,
    "devanagari": "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते ।\nप्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः ॥ ७.१७ ॥",
    "verse_text": "teṣāṁ jñānī nitya-yukta\neka-bhaktir viśiṣyate\npriyo hi jñānino ’tyartham\nahaṁ sa ca mama priyaḥ",
    "verse_text_no_samdhis": "teṣām jñānī nitya yuktaḥ eka bhaktiḥ viśiṣyate priyaḥ hi jñāninaḥ atyartham aham saḥ ca mama priyaḥ"
  },
  {
    "id": 296,
    "title": 7.18,
    "devanagari": "उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम् ।\nआस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम् ॥ ७.१८ ॥",
    "verse_text": "udārāḥ sarva evaite\njñānī tv ātmaiva me matam\nāsthitaḥ sa hi yuktātmā\nmām evānuttamāṁ gatim",
    "verse_text_no_samdhis": "udārāḥ sarve eva ete jñānī tu ātmā eva me matam āsthitaḥ saḥ hi yukta ātmā mām eva anuttamām gatim"
  },
  {
    "id": 297,
    "title": 7.19,
    "devanagari": "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते ।\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः ॥ ७.१९ ॥",
    "verse_text": "bahūnāṁ janmanām ante\njñānavān māṁ prapadyate\nvāsudevaḥ sarvam iti\nsa mahātmā su-durlabhaḥ",
    "verse_text_no_samdhis": "bahūnām janmanām ante jñāna vān mām prapadyate vāsudevaḥ sarvam iti saḥ mahā ātmā su durlabhaḥ"
  },
  {
    "id": 298,
    "title": 7.2,
    "devanagari": "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः ।\nतं तं नियममास्थाय प्रकृत्या नियताः स्वया ॥ ७.२० ॥",
    "verse_text": "kāmais tais tair hṛta-jñānāḥ\nprapadyante ’nya-devatāḥ\ntaṁ taṁ niyamam āsthāya\nprakṛtyā niyatāḥ svayā",
    "verse_text_no_samdhis": "kāmaiḥ taiḥ taiḥ hṛta jñānāḥ prapadyante anya devatāḥ tam tam niyamam āsthāya prakṛtyā niyatāḥ svayā"
  },
  {
    "id": 299,
    "title": 7.21,
    "devanagari": "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति ।\nतस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम् ॥ ७.२१ ॥",
    "verse_text": "yo yo yāṁ yāṁ tanuṁ bhaktaḥ\nśraddhayārcitum icchati\ntasya tasyācalāṁ śraddhāṁ\ntām eva vidadhāmy aham",
    "verse_text_no_samdhis": "yaḥ yaḥ yām yām tanum bhaktaḥ śraddhayā arcitum icchati tasya tasya acalām śraddhām tām eva vidadhāmi aham"
  },
  {
    "id": 300,
    "title": 7.22,
    "devanagari": "स तया श्रद्धया युक्तस्तस्याराधनमीहते ।\nलभते च ततः कामान्मयैव विहितान्हि तान् ॥ ७.२२ ॥",
    "verse_text": "sa tayā śraddhayā yuktas\ntasyārādhanam īhate\nlabhate ca tataḥ kāmān\nmayaiva vihitān hi tān",
    "verse_text_no_samdhis": "saḥ tayā śraddhayā yuktaḥ tasya ārādhanam īhate labhate ca tataḥ kāmān mayā eva vihitān hi tān"
  },
  {
    "id": 301,
    "title": 7.23,
    "devanagari": "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम् ।\nदेवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि ॥ ७.२३ ॥",
    "verse_text": "antavat tu phalaṁ teṣāṁ\ntad bhavaty alpa-medhasām\ndevān deva-yajo yānti\nmad-bhaktā yānti mām api",
    "verse_text_no_samdhis": "anta vat tu phalam teṣām tat bhavati alpa medhasām devān deva yajaḥ yānti mat bhaktāḥ yānti mām api"
  },
  {
    "id": 302,
    "title": 7.24,
    "devanagari": "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः ।\nपरं भावमजानन्तो ममाव्ययमनुत्तमम् ॥ ७.२४ ॥",
    "verse_text": "avyaktaṁ vyaktim āpannaṁ\nmanyante mām abuddhayaḥ\nparaṁ bhāvam ajānanto\nmamāvyayam anuttamam",
    "verse_text_no_samdhis": "avyaktam vyaktim āpannam manyante mām abuddhayaḥ param bhāvam ajānantaḥ mama avyayam anuttamam"
  },
  {
    "id": 303,
    "title": 7.25,
    "devanagari": "नाहं प्रकाशः सर्वस्य योगमायासमावृतः ।\nमूढोऽयं नाभिजानाति लोको मामजमव्ययम् ॥ ७.२५ ॥",
    "verse_text": "nāhaṁ prakāśaḥ sarvasya\nyoga-māyā-samāvṛtaḥ\nmūḍho ’yaṁ nābhijānāti\nloko mām ajam avyayam",
    "verse_text_no_samdhis": "na aham prakāśaḥ sarvasya yoga māyā samāvṛtaḥ mūḍhaḥ ayam na abhijānāti lokaḥ mām ajam avyayam"
  },
  {
    "id": 304,
    "title": 7.26,
    "devanagari": "वेदाहं समतीतानि वर्तमानानि चार्जुन ।\nभविष्याणि च भूतानि मां तु वेद न कश्चन ॥ ७.२६ ॥",
    "verse_text": "vedāhaṁ samatītāni\nvartamānāni cārjuna\nbhaviṣyāṇi ca bhūtāni\nmāṁ tu veda na kaścana",
    "verse_text_no_samdhis": "veda aham samatītāni vartamānāni ca arjuna bhaviṣyāṇi ca bhūtāni mām tu veda na kaścana"
  },
  {
    "id": 305,
    "title": 7.27,
    "devanagari": "इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत ।\nसर्वभूतानि संमोहं सर्गे यान्ति परन्तप ॥ ७.२७ ॥",
    "verse_text": "icchā-dveṣa-samutthena\ndvandva-mohena bhārata\nsarva-bhūtāni sammohaṁ\nsarge yānti paran-tapa",
    "verse_text_no_samdhis": "icchā dveṣa samutthena dvandva mohena bhārata sarva bhūtāni sammoham sarge yānti param tapa"
  },
  {
    "id": 306,
    "title": 7.28,
    "devanagari": "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम् ।\nते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः ॥ ७.२८ ॥",
    "verse_text": "yeṣāṁ tv anta-gataṁ pāpaṁ\njanānāṁ puṇya-karmaṇām\nte dvandva-moha-nirmuktā\nbhajante māṁ dṛḍha-vratāḥ",
    "verse_text_no_samdhis": "yeṣām tu anta gatam pāpam janānām puṇya karmaṇām te dvandva moha nirmuktāḥ bhajante mām dṛḍha vratāḥ"
  },
  {
    "id": 307,
    "title": 7.29,
    "devanagari": "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये ।\nते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम् ॥ ७.२९ ॥",
    "verse_text": "jarā-maraṇa-mokṣāya\nmām āśritya yatanti ye\nte brahma tad viduḥ kṛtsnam\nadhyātmaṁ karma cākhilam",
    "verse_text_no_samdhis": "jarā maraṇa mokṣāya mām āśritya yatanti ye te brahma tat viduḥ kṛtsnam adhyātmam karma ca akhilam"
  },
  {
    "id": 308,
    "title": 7.3,
    "devanagari": "साधिभूताधिदैवं मां साधियज्ञं च ये विदुः ।\nप्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः ॥ ७.३० ॥",
    "verse_text": "sādhibhūtādhidaivaṁ māṁ\nsādhiyajñaṁ ca ye viduḥ\nprayāṇa-kāle ’pi ca māṁ\nte vidur yukta-cetasaḥ",
    "verse_text_no_samdhis": "sa adhibhūta adhidaivam mām sa adhiyajñam ca ye viduḥ prayāṇa kāle api ca mām te viduḥ yukta cetasaḥ"
  },
  {
    "id": 309,
    "title": 8.1,
    "devanagari": "अर्जुन उवाच ।\nकिं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम\nअधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते ॥ ८.१ ॥",
    "verse_text": "arjuna uvāca\nkiṁ tad brahma kim adhyātmaṁ\nkiṁ karma puruṣottama\nadhibhūtaṁ ca kiṁ proktam\nadhidaivaṁ kim ucyate",
    "verse_text_no_samdhis": "arjunaḥ uvāca kim tat brahma kim adhyātmam kim karma puruṣa uttama adhibhūtam ca kim proktam adhidaivam kim ucyate"
  },
  {
    "id": 310,
    "title": 8.2,
    "devanagari": "अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन ।\nप्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः ॥ ८.२ ॥",
    "verse_text": "adhiyajñaḥ kathaṁ ko ’tra\ndehe ’smin madhusūdana\nprayāṇa-kāle ca kathaṁ\njñeyo ’si niyatātmabhiḥ",
    "verse_text_no_samdhis": "adhiyajñaḥ katham kaḥ atra dehe asmin madhusūdana prayāṇa kāle ca katham jñeyaḥ asi niyata ātmabhiḥ"
  },
  {
    "id": 311,
    "title": 8.3,
    "devanagari": "श्रीभगवानुवाच ।\nअक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते\nभूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः ॥ ८.३ ॥",
    "verse_text": "śrī-bhagavān uvāca\nakṣaraṁ brahma paramaṁ\nsvabhāvo ’dhyātmam ucyate\nbhūta-bhāvodbhava-karo\nvisargaḥ karma-saṁjñitaḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca akṣaram brahma paramam svabhāvaḥ adhyātmam ucyate bhūta bhāva udbhava karaḥ visargaḥ karma saṁjñitaḥ"
  },
  {
    "id": 312,
    "title": 8.4,
    "devanagari": "अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम् ।\nअधियज्ञोऽहमेवात्र देहे देहभृतां वर ॥ ८.४ ॥",
    "verse_text": "adhibhūtaṁ kṣaro bhāvaḥ\npuruṣaś cādhidaivatam\nadhiyajño ’ham evātra\ndehe deha-bhṛtāṁ vara",
    "verse_text_no_samdhis": "adhibhūtam kṣaraḥ bhāvaḥ puruṣaḥ ca adhidaivatam adhiyajñaḥ aham eva atra dehe deha bhṛtām vara"
  },
  {
    "id": 313,
    "title": 8.5,
    "devanagari": "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् ।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ॥ ८.५ ॥",
    "verse_text": "anta-kāle ca mām eva\nsmaran muktvā kalevaram\nyaḥ prayāti sa mad-bhāvaṁ\nyāti nāsty atra saṁśayaḥ",
    "verse_text_no_samdhis": "anta kāle ca mām eva smaran muktvā kalevaram yaḥ prayāti saḥ mat bhāvam yāti na asti atra saṁśayaḥ"
  },
  {
    "id": 314,
    "title": 8.6,
    "devanagari": "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम् ।\nतं तमेवैति कौन्तेय सदा तद्भावभावितः ॥ ८.६ ॥",
    "verse_text": "yaṁ yaṁ vāpi smaran bhāvaṁ\ntyajaty ante kalevaram\ntaṁ tam evaiti kaunteya\nsadā tad-bhāva-bhāvitaḥ",
    "verse_text_no_samdhis": "yam yam vā api smaran bhāvam tyajati ante kalevaram tam tam eva eti kaunteya sadā tat bhāva bhāvitaḥ"
  },
  {
    "id": 315,
    "title": 8.7,
    "devanagari": "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च ।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम् ॥ ८.७ ॥",
    "verse_text": "tasmāt sarveṣu kāleṣu\nmām anusmara yudhya ca\nmayy arpita-mano-buddhir\nmām evaiṣyasy asaṁśayaḥ",
    "verse_text_no_samdhis": "tasmāt sarveṣu kāleṣu mām anusmara yudhya ca mayi arpita manaḥ buddhiḥ mām eva eṣyasi asaṁśayaḥ"
  },
  {
    "id": 316,
    "title": 8.8,
    "devanagari": "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना ।\nपरमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ॥ ८.८ ॥",
    "verse_text": "abhyāsa-yoga-yuktena\ncetasā nānya-gāminā\nparamaṁ puruṣaṁ divyaṁ\nyāti pārthānucintayan",
    "verse_text_no_samdhis": "abhyāsa yoga yuktena cetasā na anya gāminā paramam puruṣam divyam yāti pārtha anucintayan"
  },
  {
    "id": 317,
    "title": 8.9,
    "devanagari": "कविं पुराणमनुशासितार-\nमणोरणीयांसमनुस्मरेद्यः ।\nसर्वस्य धातारमचिन्त्यरूप\nमादित्यवर्णं तमसः परस्तात् ॥ ८.९ ॥",
    "verse_text": "kaviṁ purāṇam anuśāsitāram\naṇor aṇīyāṁsam anusmared yaḥ\nsarvasya dhātāram acintya-rūpam\nāditya-varṇaṁ tamasaḥ parastāt",
    "verse_text_no_samdhis": "kavim purāṇam anuśāsitāram aṇoḥ aṇīyāṁsam anusmaret yaḥ sarvasya dhātāram acintya rūpam āditya varṇam tamasaḥ parastāt"
  },
  {
    "id": 318,
    "title": 8.1,
    "devanagari": "प्रयाणकाले मनसाचलेन\nभक्त्या युक्तो योगबलेन चैव ।\nभ्रुवोर्मध्ये प्राणमावेश्य सम्यक्\nस तं परं पुरुषमुपैति दिव्यम् ॥ ८.१० ॥",
    "verse_text": "prayāṇa-kāle manasācalena\nbhaktyā yukto yoga-balena caiva\nbhruvor madhye prāṇam āveśya samyak\nsa taṁ paraṁ puruṣam upaiti divyam",
    "verse_text_no_samdhis": "prayāṇa kāle manasā acalena bhaktyā yuktaḥ yoga balena ca eva bhruvoḥ madhye prāṇam āveśya samyak saḥ tam param puruṣam upaiti divyam"
  },
  {
    "id": 319,
    "title": 8.11,
    "devanagari": "यदक्षरं वेदविदो वदन्ति\nविशन्ति यद्यतयो वीतरागाः ।\nयदिच्छन्तो ब्रह्मचर्यं चरन्ति\nतत्ते पदं संग्रहेण प्रवक्ष्ये ॥ ८.११ ॥",
    "verse_text": "yad akṣaraṁ veda-vido vadanti\nviśanti yad yatayo vīta-rāgāḥ\nyad icchanto brahma-caryaṁ caranti\ntat te padaṁ saṅgraheṇa pravakṣye",
    "verse_text_no_samdhis": "yat akṣaram veda vidaḥ vadanti viśanti yat yatayaḥ vīta rāgāḥ yat icchantaḥ brahma caryam caranti tat te padam saṅgraheṇa pravakṣye"
  },
  {
    "id": 320,
    "title": 8.12,
    "devanagari": "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च ।\nमूर्ध्न्याधायात्मनः प्राणमास्थितो योगधारणाम् ॥ ८.१२ ॥",
    "verse_text": "sarva-dvārāṇi saṁyamya\nmano hṛdi nirudhya ca\nmūrdhny ādhāyātmanaḥ prāṇam\nāsthito yoga-dhāraṇām",
    "verse_text_no_samdhis": "sarva dvārāṇi saṁyamya manaḥ hṛdi nirudhya ca mūrdhni ādhāya ātmanaḥ prāṇam āsthitaḥ yoga dhāraṇām"
  },
  {
    "id": 321,
    "title": 8.13,
    "devanagari": "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन् > ।\nयः प्रयाति त्यजन्देहं स याति परमां गतिम् ॥ ८.१३ ॥",
    "verse_text": "oṁ ity ekākṣaraṁ brahma\nvyāharan mām anusmaran\nyaḥ prayāti tyajan dehaṁ\nsa yāti paramāṁ gatim",
    "verse_text_no_samdhis": "oṁ iti eka akṣaram brahma vyāharan mām anusmaran yaḥ prayāti tyajan deham saḥ yāti paramām gatim"
  },
  {
    "id": 322,
    "title": 8.14,
    "devanagari": "अनन्यचेताः सततं यो मां स्मरति नित्यशः ।\nतस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः ॥ ८.१४ ॥",
    "verse_text": "ananya-cetāḥ satataṁ\nyo māṁ smarati nityaśaḥ\ntasyāhaṁ su-labhaḥ pārtha\nnitya-yuktasya yoginaḥ",
    "verse_text_no_samdhis": "ananya cetāḥ satatam yaḥ mām smarati nityaśaḥ tasya aham su labhaḥ pārtha nitya yuktasya yoginaḥ"
  },
  {
    "id": 323,
    "title": 8.15,
    "devanagari": "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम् ।\nनाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः ॥ ८.१५ ॥",
    "verse_text": "mām upetya punar janma\nduḥkhālayam aśāśvatam\nnāpnuvanti mahātmānaḥ\nsaṁsiddhiṁ paramāṁ gatāḥ",
    "verse_text_no_samdhis": "mām upetya punaḥ janma duḥkha ālayam aśāśvatam na āpnuvanti mahā ātmānaḥ saṁsiddhim paramām gatāḥ"
  },
  {
    "id": 324,
    "title": 8.16,
    "devanagari": "आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन ।\nमामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते ॥ ८.१६ ॥",
    "verse_text": "ā-brahma-bhuvanāl lokāḥ\npunar āvartino ’rjuna\nmām upetya tu kaunteya\npunar janma na vidyate",
    "verse_text_no_samdhis": "ā brahma bhuvanāt lokāḥ punaḥ āvartinaḥ arjuna mām upetya tu kaunteya punaḥ janma na vidyate"
  },
  {
    "id": 325,
    "title": 8.17,
    "devanagari": "सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः ।\nरात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः ॥ ८.१७ ॥",
    "verse_text": "sahasra-yuga-paryantam\nahar yad brahmaṇo viduḥ\nrātriṁ yuga-sahasrāntāṁ\nte ’ho-rātra-vido janāḥ",
    "verse_text_no_samdhis": "sahasra yuga paryantam ahaḥ yat brahmaṇaḥ viduḥ rātrim yuga sahasra antām te ahaḥ rātra vidaḥ janāḥ"
  },
  {
    "id": 326,
    "title": 8.18,
    "devanagari": "अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे ।\nरात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके ॥ ८.१८ ॥",
    "verse_text": "avyaktād vyaktayaḥ sarvāḥ\nprabhavanty ahar-āgame\nrātry-āgame pralīyante\ntatraivāvyakta-saṁjñake",
    "verse_text_no_samdhis": "avyaktāt vyaktayaḥ sarvāḥ prabhavanti ahaḥ āgame rātri āgame pralīyante tatra eva avyakta saṁjñake"
  },
  {
    "id": 327,
    "title": 8.19,
    "devanagari": "भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते ।\nरात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे ॥ ८.१९ ॥",
    "verse_text": "bhūta-grāmaḥ sa evāyaṁ\nbhūtvā bhūtvā pralīyate\nrātry-āgame ’vaśaḥ pārtha\nprabhavaty ahar-āgame",
    "verse_text_no_samdhis": "bhūta grāmaḥ saḥ eva ayam bhūtvā bhūtvā pralīyate rātri āgame avaśaḥ pārtha prabhavati ahaḥ āgame"
  },
  {
    "id": 328,
    "title": 8.2,
    "devanagari": "परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः ।\nयः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति ॥ ८.२० ॥",
    "verse_text": "paras tasmāt tu bhāvo ’nyo\n’vyakto ’vyaktāt sanātanaḥ\nyaḥ sa sarveṣu bhūteṣu\nnaśyatsu na vinaśyati",
    "verse_text_no_samdhis": "paraḥ tasmāt tu bhāvaḥ anyaḥ avyaktaḥ avyaktāt sanātanaḥ yaḥ saḥ sarveṣu bhūteṣu naśyatsu na vinaśyati"
  },
  {
    "id": 329,
    "title": 8.21,
    "devanagari": "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम् ।\nयं प्राप्य न निवर्तन्ते तद्धाम परमं मम ॥ ८.२१ ॥",
    "verse_text": "avyakto ’kṣara ity uktas\ntam āhuḥ paramāṁ gatim\nyaṁ prāpya na nivartante\ntad dhāma paramaṁ mama",
    "verse_text_no_samdhis": "avyaktaḥ akṣaraḥ iti uktaḥ tam āhuḥ paramām gatim yam prāpya na nivartante tat dhāma paramam mama"
  },
  {
    "id": 330,
    "title": 8.22,
    "devanagari": "पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया ।\nयस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम् ॥ ८.२२ ॥",
    "verse_text": "puruṣaḥ sa paraḥ pārtha\nbhaktyā labhyas tv ananyayā\nyasyāntaḥ-sthāni bhūtāni\nyena sarvam idaṁ tatam",
    "verse_text_no_samdhis": "puruṣaḥ saḥ paraḥ pārtha bhaktyā labhyaḥ tu ananyayā yasya antaḥ sthāni bhūtāni yena sarvam idam tatam"
  },
  {
    "id": 331,
    "title": 8.23,
    "devanagari": "यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः ।\nप्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ ॥ ८.२३ ॥",
    "verse_text": "yatra kāle tv anāvṛttim\nāvṛttiṁ caiva yoginaḥ\nprayātā yānti taṁ kālaṁ\nvakṣyāmi bharatarṣabha",
    "verse_text_no_samdhis": "yatra kāle tu anāvṛttim āvṛttim ca eva yoginaḥ prayātāḥ yānti tam kālam vakṣyāmi bharata ṛṣabha"
  },
  {
    "id": 332,
    "title": 8.24,
    "devanagari": "अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम् ।\nतत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः ॥ ८.२४ ॥",
    "verse_text": "agnir jyotir ahaḥ śuklaḥ\nṣaṇ-māsā uttarāyaṇam\ntatra prayātā gacchanti\nbrahma brahma-vido janāḥ",
    "verse_text_no_samdhis": "agniḥ jyotiḥ ahaḥ śuklaḥ ṣaṭ māsāḥ uttara ayanam tatra prayātāḥ gacchanti brahma brahma vidaḥ janāḥ"
  },
  {
    "id": 333,
    "title": 8.25,
    "devanagari": "धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम् ।\nतत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते ॥ ८.२५ ॥",
    "verse_text": "dhūmo rātris tathā kṛṣṇaḥ\nṣaṇ-māsā dakṣiṇāyanam\ntatra cāndramasaṁ jyotir\nyogī prāpya nivartate",
    "verse_text_no_samdhis": "dhūmaḥ rātriḥ tathā kṛṣṇaḥ ṣaṭ māsāḥ dakṣiṇa ayanam tatra cāndramasam jyotiḥ yogī prāpya nivartate"
  },
  {
    "id": 334,
    "title": 8.26,
    "devanagari": "शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते ।\nएकया यात्यनावृत्तिमन्ययावर्तते पुनः ॥ ८.२६ ॥",
    "verse_text": "śukla-kṛṣṇe gatī hy ete\njagataḥ śāśvate mate\nekayā yāty anāvṛttim\nanyayāvartate punaḥ",
    "verse_text_no_samdhis": "śukla kṛṣṇe gatī hi ete jagataḥ śāśvate mate ekayā yāti anāvṛttim anyayā āvartate punaḥ"
  },
  {
    "id": 335,
    "title": 8.27,
    "devanagari": "नैते सृती पार्थ जानन्योगी मुह्यति कश्चन ।\nतस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन ॥ ८.२७ ॥",
    "verse_text": "naite sṛtī pārtha jānan\nyogī muhyati kaścana\ntasmāt sarveṣu kāleṣu\nyoga-yukto bhavārjuna",
    "verse_text_no_samdhis": "na ete sṛtī pārtha jānan yogī muhyati kaścana tasmāt sarveṣu kāleṣu yoga yuktaḥ bhava arjuna"
  },
  {
    "id": 336,
    "title": 8.28,
    "devanagari": "वेदेषु यज्ञेषु तपःसु चैव\nदानेषु यत् पुण्यफलं प्रदिष्टम् ।\nअत्येति तत्सर्वमिदं विदित्वा\nयोगी परं स्थानमुपैति चाद्यम् ॥ ८.२८ ॥",
    "verse_text": "vedeṣu yajñeṣu tapaḥsu caiva\ndāneṣu yat puṇya-phalaṁ pradiṣṭam\natyeti tat sarvam idaṁ viditvā\nyogī paraṁ sthānam upaiti cādyam",
    "verse_text_no_samdhis": "vedeṣu yajñeṣu tapaḥsu ca eva dāneṣu yat puṇya phalam pradiṣṭam atyeti tat sarvam idam viditvā yogī param sthānam upaiti ca ādyam"
  },
  {
    "id": 337,
    "title": 9.1,
    "devanagari": "श्रीभगवानुवाच ।\nइदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ॥ ९.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nidaṁ tu te guhya-tamaṁ\npravakṣyāmy anasūyave\njñānaṁ vijñāna-sahitaṁ\nyaj jñātvā mokṣyase ’śubhāt",
    "verse_text_no_samdhis": "śrī bhagavān uvāca idam tu te guhya tamam pravakṣyāmi anasūyave jñānam vijñāna sahitam yat jñātvā mokṣyase aśubhāt"
  },
  {
    "id": 338,
    "title": 9.2,
    "devanagari": "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम् ।\nप्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम् ॥ ९.२ ॥",
    "verse_text": "rāja-vidyā rāja-guhyaṁ\npavitram idam uttamam\npratyakṣāvagamaṁ dharmyaṁ\nsu-sukhaṁ kartum avyayam",
    "verse_text_no_samdhis": "rāja vidyā rāja guhyam pavitram idam uttamam pratyakṣa avagamam dharmyam su sukham kartum avyayam"
  },
  {
    "id": 339,
    "title": 9.3,
    "devanagari": "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप ।\nअप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि ॥ ९.३ ॥",
    "verse_text": "aśraddadhānāḥ puruṣā\ndharmasyāsya paran-tapa\naprāpya māṁ nivartante\nmṛtyu-saṁsāra-vartmani",
    "verse_text_no_samdhis": "aśraddadhānāḥ puruṣāḥ dharmasya asya param tapa aprāpya mām nivartante mṛtyu saṁsāra vartmani"
  },
  {
    "id": 340,
    "title": 9.4,
    "devanagari": "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना ।\nमत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः ॥ ९.४ ॥",
    "verse_text": "mayā tatam idaṁ sarvaṁ\njagad avyakta-mūrtinā\nmat-sthāni sarva-bhūtāni\nna cāhaṁ teṣv avasthitaḥ",
    "verse_text_no_samdhis": "mayā tatam idam sarvam jagat avyakta mūrtinā mat sthāni sarva bhūtāni na ca aham teṣu avasthitaḥ"
  },
  {
    "id": 341,
    "title": 9.5,
    "devanagari": "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम् ।\nभूतभृन्न च भूतस्थो ममात्मा भूतभावनः ॥ ९.५ ॥",
    "verse_text": "na ca mat-sthāni bhūtāni\npaśya me yogam aiśvaram\nbhūta-bhṛn na ca bhūta-stho\nmamātmā bhūta-bhāvanaḥ",
    "verse_text_no_samdhis": "na ca mat sthāni bhūtāni paśya me yogam aiśvaram bhūta bhṛt na ca bhūta sthaḥ mama ātmā bhūta bhāvanaḥ"
  },
  {
    "id": 342,
    "title": 9.6,
    "devanagari": "यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान् ।\nतथा सर्वाणि भूतानि मत्स्थानीत्युपधारय ॥ ९.६ ॥",
    "verse_text": "yathākāśa-sthito nityaṁ\nvāyuḥ sarvatra-go mahān\ntathā sarvāṇi bhūtāni\nmat-sthānīty upadhāraya",
    "verse_text_no_samdhis": "yathā ākāśa sthitaḥ nityam vāyuḥ sarvatra gaḥ mahān tathā sarvāṇi bhūtāni mat sthāni iti upadhāraya"
  },
  {
    "id": 343,
    "title": 9.7,
    "devanagari": "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् ।\nकल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् ॥ ९.७ ॥",
    "verse_text": "sarva-bhūtāni kaunteya\nprakṛtiṁ yānti māmikām\nkalpa-kṣaye punas tāni\nkalpādau visṛjāmy aham",
    "verse_text_no_samdhis": "sarva bhūtāni kaunteya prakṛtim yānti māmikām kalpa kṣaye punaḥ tāni kalpa ādau visṛjāmi aham"
  },
  {
    "id": 344,
    "title": 9.8,
    "devanagari": "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः ।\nभूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात् ॥ ९.८ ॥",
    "verse_text": "prakṛtiṁ svām avaṣṭabhya\nvisṛjāmi punaḥ punaḥ\nbhūta-grāmam imaṁ kṛtsnam\navaśaṁ prakṛter vaśāt",
    "verse_text_no_samdhis": "prakṛtim svām avaṣṭabhya visṛjāmi punaḥ punaḥ bhūta grāmam imam kṛtsnam avaśam prakṛteḥ vaśāt"
  },
  {
    "id": 345,
    "title": 9.9,
    "devanagari": "न च मां तानि कर्माणि निबध्नन्ति धनंजय ।\nउदासीनवदासीनमसक्तं तेषु कर्मसु ॥ ९.९ ॥",
    "verse_text": "na ca māṁ tāni karmāṇi\nnibadhnanti dhanañ-jaya\nudāsīna-vad āsīnam\nasaktaṁ teṣu karmasu",
    "verse_text_no_samdhis": "na ca mām tāni karmāṇi nibadhnanti dhanam jaya udāsīna vat āsīnam asaktam teṣu karmasu"
  },
  {
    "id": 346,
    "title": 9.1,
    "devanagari": "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् ।\nहेतुनानेन कौन्तेय जगद्विपरिवर्तते ॥ ९.१० ॥",
    "verse_text": "mayādhyakṣeṇa prakṛtiḥ\nsūyate sa-carācaram\nhetunānena kaunteya\njagad viparivartate",
    "verse_text_no_samdhis": "mayā adhyakṣeṇa prakṛtiḥ sūyate sa cara acaram hetunā anena kaunteya jagat viparivartate"
  },
  {
    "id": 347,
    "title": 9.11,
    "devanagari": "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम् ।\nपरं भावमजानन्तो मम भूतमहेश्वरम् ॥ ९.११ ॥",
    "verse_text": "avajānanti māṁ mūḍhā\nmānuṣīṁ tanum āśritam\nparaṁ bhāvam ajānanto\nmama bhūta-maheśvaram",
    "verse_text_no_samdhis": "avajānanti mām mūḍhāḥ mānuṣīm tanum āśritam param bhāvam ajānantaḥ mama bhūta mahā īśvaram"
  },
  {
    "id": 348,
    "title": 9.12,
    "devanagari": "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः ।\nराक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः ॥ ९.१२ ॥",
    "verse_text": "moghāśā mogha-karmāṇo\nmogha-jñānā vicetasaḥ\nrākṣasīm āsurīṁ caiva\nprakṛtiṁ mohinīṁ śritāḥ",
    "verse_text_no_samdhis": "mogha āśāḥ mogha karmāṇaḥ mogha jñānāḥ vicetasaḥ rākṣasīm āsurīm ca eva prakṛtim mohinīm śritāḥ"
  },
  {
    "id": 349,
    "title": 9.13,
    "devanagari": "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः ।\nभजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ॥ ९.१३ ॥",
    "verse_text": "mahātmānas tu māṁ pārtha\ndaivīṁ prakṛtim āśritāḥ\nbhajanty ananya-manaso\njñātvā bhūtādim avyayam",
    "verse_text_no_samdhis": "mahā ātmānaḥ tu mām pārtha daivīm prakṛtim āśritāḥ bhajanti ananya manasaḥ jñātvā bhūta ādim avyayam"
  },
  {
    "id": 350,
    "title": 9.14,
    "devanagari": "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः ।\nनमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते ॥ ९.१४ ॥",
    "verse_text": "satataṁ kīrtayanto māṁ\nyatantaś ca dṛḍha-vratāḥ\nnamasyantaś ca māṁ bhaktyā\nnitya-yuktā upāsate",
    "verse_text_no_samdhis": "satatam kīrtayantaḥ mām yatantaḥ ca dṛḍha vratāḥ namasyantaḥ ca mām bhaktyā nitya yuktāḥ upāsate"
  },
  {
    "id": 351,
    "title": 9.15,
    "devanagari": "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते ।\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम् ॥ ९.१५ ॥",
    "verse_text": "jñāna-yajñena cāpy anye\nyajanto mām upāsate\nekatvena pṛthaktvena\nbahudhā viśvato-mukham",
    "verse_text_no_samdhis": "jñāna yajñena ca api anye yajantaḥ mām upāsate ekatvena pṛthaktvena bahudhā viśvataḥ mukham"
  },
  {
    "id": 352,
    "title": 9.16,
    "devanagari": "अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम् ।\nमन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम् ॥ ९.१६ ॥",
    "verse_text": "ahaṁ kratur ahaṁ yajñaḥ\nsvadhāham aham auṣadham\nmantro ’ham aham evājyam\naham agnir ahaṁ hutam",
    "verse_text_no_samdhis": "aham kratuḥ aham yajñaḥ svadhā aham aham auṣadham mantraḥ aham aham eva ājyam aham agniḥ aham hutam"
  },
  {
    "id": 353,
    "title": 9.17,
    "devanagari": "पिताहमस्य जगतो माता धाता पितामहः ।\nवेद्यं पवित्रमोंकार ऋक्साम यजुरेव च ॥ ९.१७ ॥",
    "verse_text": "pitāham asya jagato\nmātā dhātā pitāmahaḥ\nvedyaṁ pavitram oṁ-kāra\nṛk sāma yajur eva ca",
    "verse_text_no_samdhis": "pitā aham asya jagataḥ mātā dhātā pitāmahaḥ vedyam pavitram oṁ kāra ṛk sāma yajuḥ eva ca"
  },
  {
    "id": 354,
    "title": 9.18,
    "devanagari": "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत् ।\nप्रभवः प्रलयः स्थानं निधानं बीजमव्ययम् ॥ ९.१८ ॥",
    "verse_text": "gatir bhartā prabhuḥ sākṣī\nnivāsaḥ śaraṇaṁ suhṛt\nprabhavaḥ pralayaḥ sthānaṁ\nnidhānaṁ bījam avyayam",
    "verse_text_no_samdhis": "gatiḥ bhartā prabhuḥ sākṣī nivāsaḥ śaraṇam su hṛt prabhavaḥ pralayaḥ sthānam nidhānam bījam avyayam"
  },
  {
    "id": 355,
    "title": 9.19,
    "devanagari": "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च ।\nअमृतं चैव मृत्युश्च सदसच्चाहमर्जुन ॥ ९.१९ ॥",
    "verse_text": "tapāmy aham ahaṁ varṣaṁ\nnigṛhṇāmy utsṛjāmi ca\namṛtaṁ caiva mṛtyuś ca\nsad asac cāham arjuna",
    "verse_text_no_samdhis": "tapāmi aham aham varṣam nigṛhṇāmi utsṛjāmi ca amṛtam ca eva mṛtyuḥ ca sat asat ca aham arjuna"
  },
  {
    "id": 356,
    "title": 9.2,
    "devanagari": "त्रैविद्या मां सोमपाः पूतपापा\nयज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते ।\nते पुण्यमासाद्य सुरेन्द्रलोक-\nमश्नन्ति दिव्यान्दिवि देवभोगान् ॥ ९.२० ॥",
    "verse_text": "trai-vidyā māṁ soma-pāḥ pūta-pāpā\nyajñair iṣṭvā svar-gatiṁ prārthayante\nte puṇyam āsādya surendra-lokam\naśnanti divyān divi deva-bhogān",
    "verse_text_no_samdhis": "trai vidyāḥ mām soma pāḥ pūta pāpāḥ yajñaiḥ iṣṭvā svaḥ gatim prārthayante te puṇyam āsādya sura indra lokam aśnanti divyān divi deva bhogān"
  },
  {
    "id": 357,
    "title": 9.21,
    "devanagari": "ते तं भुक्त्वा स्वर्गलोकं विशालं\nक्षीणे पुण्ये मर्त्यलोकं विशन्ति ।\nएवं त्रयीधर्ममनुप्रपन्ना\nगतागतं कामकामा लभन्ते ॥ ९.२१ ॥",
    "verse_text": "te taṁ bhuktvā svarga-lokaṁ viśālaṁ\nkṣīṇe puṇye martya-lokaṁ viśanti\nevaṁ trayī-dharmam anuprapannā\ngatāgataṁ kāma-kāmā labhante",
    "verse_text_no_samdhis": "te tam bhuktvā svarga lokam viśālam kṣīṇe puṇye martya lokam viśanti evam trayī dharmam anuprapannāḥ gata āgatam kāma kāmāḥ labhante"
  },
  {
    "id": 358,
    "title": 9.22,
    "devanagari": "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥ ९.२२ ॥",
    "verse_text": "ananyāś cintayanto māṁ\nye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ\nyoga-kṣemaṁ vahāmy aham",
    "verse_text_no_samdhis": "ananyāḥ cintayantaḥ mām ye janāḥ paryupāsate teṣām nitya abhiyuktānām yoga kṣemam vahāmi aham"
  },
  {
    "id": 359,
    "title": 9.23,
    "devanagari": "येऽप्यन्यदेवताभक्ता यजन्ते श्रद्धयान्विताः ।\nतेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम् ॥ ९.२३ ॥",
    "verse_text": "ye ’py anya-devatā-bhaktā\nyajante śraddhayānvitāḥ\nte ’pi mām eva kaunteya\nyajanty avidhi-pūrvakam",
    "verse_text_no_samdhis": "ye api anya devatā bhaktāḥ yajante śraddhayā anvitāḥ te api mām eva kaunteya yajanti avidhi pūrvakam"
  },
  {
    "id": 360,
    "title": 9.24,
    "devanagari": "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च ।\nन तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते ॥ ९.२४ ॥",
    "verse_text": "ahaṁ hi sarva-yajñānāṁ\nbhoktā ca prabhur eva ca\nna tu mām abhijānanti\ntattvenātaś cyavanti te",
    "verse_text_no_samdhis": "aham hi sarva yajñānām bhoktā ca prabhuḥ eva ca na tu mām abhijānanti tattvena ataḥ cyavanti te"
  },
  {
    "id": 361,
    "title": 9.25,
    "devanagari": "यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रताः ।\nभूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम् ॥ ९.२५ ॥",
    "verse_text": "yānti deva-vratā devān\npitṝn yānti pitṛ-vratāḥ\nbhūtāni yānti bhūtejyā\nyānti mad-yājino ’pi mām",
    "verse_text_no_samdhis": "yānti deva vratāḥ devān pitṝn yānti pitṛ vratāḥ bhūtāni yānti bhūta ijyāḥ yānti mat yājinaḥ api mām"
  },
  {
    "id": 362,
    "title": 9.26,
    "devanagari": "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥ ९.२६ ॥",
    "verse_text": "patraṁ puṣpaṁ phalaṁ toyaṁ\nyo me bhaktyā prayacchati\ntad ahaṁ bhakty-upahṛtam\naśnāmi prayatātmanaḥ",
    "verse_text_no_samdhis": "patram puṣpam phalam toyam yaḥ me bhaktyā prayacchati tat aham bhakti upahṛtam aśnāmi prayata ātmanaḥ"
  },
  {
    "id": 363,
    "title": 9.27,
    "devanagari": "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् ।\nयत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥ ९.२७ ॥",
    "verse_text": "yat karoṣi yad aśnāsi\nyaj juhoṣi dadāsi yat\nyat tapasyasi kaunteya\ntat kuruṣva mad-arpaṇam",
    "verse_text_no_samdhis": "yat karoṣi yat aśnāsi yat juhoṣi dadāsi yat yat tapasyasi kaunteya tat kuruṣva mat arpaṇam"
  },
  {
    "id": 364,
    "title": 9.28,
    "devanagari": "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः ।\nसंन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि ॥ ९.२८ ॥",
    "verse_text": "śubhāśubha-phalair evaṁ\nmokṣyase karma-bandhanaiḥ\nsannyāsa-yoga-yuktātmā\nvimukto mām upaiṣyasi",
    "verse_text_no_samdhis": "śubha aśubha phalaiḥ evam mokṣyase karma bandhanaiḥ sannyāsa yoga yukta ātmā vimuktaḥ mām upaiṣyasi"
  },
  {
    "id": 365,
    "title": 9.29,
    "devanagari": "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः ।\nये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् ॥ ९.२९ ॥",
    "verse_text": "samo ’haṁ sarva-bhūteṣu\nna me dveṣyo ’sti na priyaḥ\nye bhajanti tu māṁ bhaktyā\nmayi te teṣu cāpy aham",
    "verse_text_no_samdhis": "samaḥ aham sarva bhūteṣu na me dveṣyaḥ asti na priyaḥ ye bhajanti tu mām bhaktyā mayi te teṣu ca api aham"
  },
  {
    "id": 366,
    "title": 9.3,
    "devanagari": "अपि चेत्सुदुराचारो भजते मामनन्यभाक् ।\nसाधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः ॥ ९.३० ॥",
    "verse_text": "api cet su-durācāro\nbhajate mām ananya-bhāk\nsādhur eva sa mantavyaḥ\nsamyag vyavasito hi saḥ",
    "verse_text_no_samdhis": "api cet su durācāraḥ bhajate mām ananya bhāk sādhuḥ eva saḥ mantavyaḥ samyak vyavasitaḥ hi saḥ"
  },
  {
    "id": 367,
    "title": 9.31,
    "devanagari": "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति ।\nकौन्तेय प्रति जानीहि न मे भक्तः प्रणश्यति ॥ ९.३१ ॥",
    "verse_text": "kṣipraṁ bhavati dharmātmā\nśaśvac-chāntiṁ nigacchati\nkaunteya pratijānīhi\nna me bhaktaḥ praṇaśyati",
    "verse_text_no_samdhis": "kṣipram bhavati dharma ātmā śaśvat śāntim nigacchati kaunteya pratijānīhi na me bhaktaḥ praṇaśyati"
  },
  {
    "id": 368,
    "title": 9.32,
    "devanagari": "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः ।\nस्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् ॥ ९.३२ ॥",
    "verse_text": "māṁ hi pārtha vyapāśritya\nye ’pi syuḥ pāpa-yonayaḥ\nstriyo vaiśyās tathā śūdrās\nte ’pi yānti parāṁ gatim",
    "verse_text_no_samdhis": "mām hi pārtha vyapāśritya ye api syuḥ pāpa yonayaḥ striyaḥ vaiśyāḥ tathā śūdrāḥ te api yānti parām gatim"
  },
  {
    "id": 369,
    "title": 9.33,
    "devanagari": "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा ।\nअनित्यमसुखं लोकमिमं प्राप्य भजस्व माम् ॥ ९.३३ ॥",
    "verse_text": "kiṁ punar brāhmaṇāḥ puṇyā\nbhaktā rājarṣayas tathā\nanityam asukhaṁ lokam\nimaṁ prāpya bhajasva mām",
    "verse_text_no_samdhis": "kim punaḥ brāhmaṇāḥ puṇyāḥ bhaktāḥ rāja ṛṣayaḥ tathā anityam asukham lokam imam prāpya bhajasva mām"
  },
  {
    "id": 370,
    "title": 9.34,
    "devanagari": "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।\nमामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः ॥ ९.३४ ॥",
    "verse_text": "man-manā bhava mad-bhakto\nmad-yājī māṁ namaskuru\nmām evaiṣyasi yuktvaivam\nātmānaṁ mat-parāyaṇaḥ",
    "verse_text_no_samdhis": "mat manāḥ bhava mat bhaktaḥ mat yājī mām namas kuru mām eva eṣyasi yuktvā evam ātmānam mat parāyaṇaḥ"
  },
  {
    "id": 371,
    "title": 10.1,
    "devanagari": "श्रीभगवानुवाच ।\nभूय एव महाबाहो शृणु मे परमं वचः\nयत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया ॥ १०.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nbhūya eva mahā-bāho\nśṛṇu me paramaṁ vacaḥ\nyat te ’haṁ prīyamāṇāya\nvakṣyāmi hita-kāmyayā",
    "verse_text_no_samdhis": "śrī bhagavān uvāca bhūyaḥ eva mahā bāho śṛṇu me paramam vacaḥ yat te aham prīyamāṇāya vakṣyāmi hita kāmyayā"
  },
  {
    "id": 372,
    "title": 10.2,
    "devanagari": "न मे विदुः सुरगणाः प्रभवं न महर्षयः ।\nअहमादिर्हि देवानां महर्षीणां च सर्वशः ॥ १०.२ ॥",
    "verse_text": "na me viduḥ sura-gaṇāḥ\nprabhavaṁ na maharṣayaḥ\naham ādir hi devānāṁ\nmaharṣīṇāṁ ca sarvaśaḥ",
    "verse_text_no_samdhis": "na me viduḥ sura gaṇāḥ prabhavam na mahā ṛṣayaḥ aham ādiḥ hi devānām mahā ṛṣīṇām ca sarvaśaḥ"
  },
  {
    "id": 373,
    "title": 10.3,
    "devanagari": "यो मामजमनादिं च वेत्ति लोकमहेश्वरम् ।\nअसंमूढः स मर्त्येषु सर्वपापैः प्रमुच्यते ॥ १०.३ ॥",
    "verse_text": "yo mām ajam anādiṁ ca\nvetti loka-maheśvaram\nasammūḍhaḥ sa martyeṣu\nsarva-pāpaiḥ pramucyate",
    "verse_text_no_samdhis": "yaḥ mām ajam anādim ca vetti loka mahā īśvaram asammūḍhaḥ saḥ martyeṣu sarva pāpaiḥ pramucyate"
  },
  {
    "id": 374,
    "title": 10.4,
    "devanagari": "बुद्धिर्ज्ञानमसंमोहः क्षमा सत्यं दमः शमः ।\nसुखं दुःखं भवोऽभावो भयं चाभयमेव च ॥ १०.४ ॥",
    "verse_text": "buddhir jñānam asammohaḥ\nkṣamā satyaṁ damaḥ śamaḥ\nsukhaṁ duḥkhaṁ bhavo ’bhāvo\nbhayaṁ cābhayam eva ca",
    "verse_text_no_samdhis": "buddhiḥ jñānam asammohaḥ kṣamā satyam damaḥ śamaḥ sukham duḥkham bhavaḥ abhāvaḥ bhayam ca abhayam eva ca"
  },
  {
    "id": 375,
    "title": 10.5,
    "devanagari": "अहिंसा समता तुष्टिस्तपो दानं यशोऽयशः ।\nभवन्ति भावा भूतानां मत्त एव पृथग्विधाः ॥ १०.५ ॥",
    "verse_text": "ahiṁsā samatā tuṣṭis\ntapo dānaṁ yaśo ’yaśaḥ\nbhavanti bhāvā bhūtānāṁ\nmatta eva pṛthag-vidhāḥ",
    "verse_text_no_samdhis": "ahiṁsā samatā tuṣṭiḥ tapaḥ dānam yaśaḥ ayaśaḥ bhavanti bhāvāḥ bhūtānām mattaḥ eva pṛthak vidhāḥ"
  },
  {
    "id": 376,
    "title": 10.6,
    "devanagari": "महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा ।\nमद्भावा मानसा जाता येषां लोक इमाः प्रजाः ॥ १०.६ ॥",
    "verse_text": "maharṣayaḥ sapta pūrve\ncatvāro manavas tathā\nmad-bhāvā mānasā jātā\nyeṣāṁ loka imāḥ prajāḥ",
    "verse_text_no_samdhis": "mahā ṛṣayaḥ sapta pūrve catvāraḥ manavaḥ tathā mat bhāvāḥ mānasāḥ jātāḥ yeṣām loke imāḥ prajāḥ"
  },
  {
    "id": 377,
    "title": 10.7,
    "devanagari": "एतां विभूतिं योगं च मम यो वेत्ति तत्त्वतः ।\nसोSविकल्पेन योगेन युज्यते नात्र संशयः ॥ १०.७ ॥",
    "verse_text": "etāṁ vibhūtiṁ yogaṁ ca\nmama yo vetti tattvataḥ\nso ’vikalpena yogena\nyujyate nātra saṁśayaḥ",
    "verse_text_no_samdhis": "etām vibhūtim yogam ca mama yaḥ vetti tattvataḥ saḥ avikalpena yogena yujyate na atra saṁśayaḥ"
  },
  {
    "id": 378,
    "title": 10.8,
    "devanagari": "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते ।\nइति मत्वा भजन्ते मां बुधा भावसमन्विताः ॥ १०.८ ॥",
    "verse_text": "ahaṁ sarvasya prabhavo\nmattaḥ sarvaṁ pravartate\niti matvā bhajante māṁ\nbudhā bhāva-samanvitāḥ",
    "verse_text_no_samdhis": "aham sarvasya prabhavaḥ mattaḥ sarvam pravartate iti matvā bhajante mām budhāḥ bhāva samanvitāḥ"
  },
  {
    "id": 379,
    "title": 10.9,
    "devanagari": "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम् ।\nकथयन्तश्र्च मां नित्यं तुष्यन्ति च रमन्ति च ॥ १०.९ ॥",
    "verse_text": "mac-cittā mad-gata-prāṇā\nbodhayantaḥ parasparam\nkathayantaś ca māṁ nityaṁ\ntuṣyanti ca ramanti ca",
    "verse_text_no_samdhis": "mat cittāḥ mat gata prāṇāḥ bodhayantaḥ parasparam kathayantaḥ ca mām nityam tuṣyanti ca ramanti ca"
  },
  {
    "id": 380,
    "title": 10.1,
    "devanagari": "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् ।\nददामि बुद्धियोगं तं येन मामुपयान्ति ते ॥ १०.१० ॥",
    "verse_text": "teṣāṁ satata-yuktānāṁ\nbhajatāṁ prīti-pūrvakam\ndadāmi buddhi-yogaṁ taṁ\nyena mām upayānti te",
    "verse_text_no_samdhis": "teṣām satata yuktānām bhajatām prīti pūrvakam dadāmi buddhi yogam tam yena mām upayānti te"
  },
  {
    "id": 381,
    "title": 10.11,
    "devanagari": "तेषामेवानुकम्पार्थमहमज्ञानजं तमः ।\nनाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ॥ १०.११ ॥",
    "verse_text": "teṣām evānukampārtham\naham ajñāna-jaṁ tamaḥ\nnāśayāmy ātma-bhāva-stho\njñāna-dīpena bhāsvatā",
    "verse_text_no_samdhis": "teṣām eva anukampā artham aham ajñāna jam tamaḥ nāśayāmi ātma bhāva sthaḥ jñāna dīpena bhāsvatā"
  },
  {
    "id": 382,
    "title": 10.12,
    "devanagari": "अर्जुन उवाच  ।\nपरं ब्रह्म परं धाम पवित्रं परमं भवान्\nपुरुषं शाश्र्वतं दिव्यमादिदेवमजं विभुम् ॥ १०.१२ ॥",
    "verse_text": "arjuna uvāca\nparaṁ brahma paraṁ dhāma\npavitraṁ paramaṁ bhavān\npuruṣaṁ śāśvataṁ divyam\nādi-devam ajaṁ vibhum",
    "verse_text_no_samdhis": "arjunaḥ uvāca param brahma param dhāma pavitram paramam bhavān puruṣam śāśvatam divyam ādi devam ajam vibhum"
  },
  {
    "id": 383,
    "title": 10.13,
    "devanagari": "आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा ।\nअसितो देवलो व्यासः स्वयं चैव ब्रवीषि मे ॥ १०.१३ ॥",
    "verse_text": "āhus tvām ṛṣayaḥ sarve\ndevarṣir nāradas tathā\nasito devalo vyāsaḥ\nsvayaṁ caiva bravīṣi me",
    "verse_text_no_samdhis": "āhuḥ tvām ṛṣayaḥ sarve deva ṛṣiḥ nāradaḥ tathā asitaḥ devalaḥ vyāsaḥ svayam ca eva bravīṣi me"
  },
  {
    "id": 384,
    "title": 10.14,
    "devanagari": "सर्वमेतदृतं मन्ये यन्मां वदसि केशव ।\nन हि ते भगवन्व्यक्तिं विदुर्देवा न दानवाः ॥ १०.१४ ॥",
    "verse_text": "sarvam etad ṛtaṁ manye\nyan māṁ vadasi keśava\nna hi te bhagavan vyaktiṁ\nvidur devā na dānavāḥ",
    "verse_text_no_samdhis": "sarvam etat ṛtam manye yat mām vadasi keśava na hi te bhagavan vyaktim viduḥ devāḥ na dānavāḥ"
  },
  {
    "id": 385,
    "title": 10.15,
    "devanagari": "स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम ।\nभूतभावन भूतेश देवदेव जगत्पते ॥ १०.१५ ॥",
    "verse_text": "svayam evātmanātmānaṁ\nvettha tvaṁ puruṣottama\nbhūta-bhāvana bhūteśa\ndeva-deva jagat-pate",
    "verse_text_no_samdhis": "svayam eva ātmanā ātmānam vettha tvam puruṣa uttama bhūta bhāvana bhūta īśa deva deva jagat pate"
  },
  {
    "id": 386,
    "title": 10.16,
    "devanagari": "वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः ।\nयाभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि ॥ १०.१६ ॥",
    "verse_text": "vaktum arhasy aśeṣeṇa\ndivyā hy ātma-vibhūtayaḥ\nyābhir vibhūtibhir lokān\nimāṁs tvaṁ vyāpya tiṣṭhasi",
    "verse_text_no_samdhis": "vaktum arhasi aśeṣeṇa divyāḥ hi ātma vibhūtayaḥ yābhiḥ vibhūtibhiḥ lokān imān tvam vyāpya tiṣṭhasi"
  },
  {
    "id": 387,
    "title": 10.17,
    "devanagari": "कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् ।\nकेषु केषु च भावेषु चिन्त्योऽसि भगवन्मया ॥ १०.१७ ॥",
    "verse_text": "kathaṁ vidyām ahaṁ yogiṁs\ntvāṁ sadā paricintayan\nkeṣu keṣu ca bhāveṣu\ncintyo ’si bhagavan mayā",
    "verse_text_no_samdhis": "katham vidyām aham yogin tvām sadā paricintayan keṣu keṣu ca bhāveṣu cintyaḥ asi bhagavan mayā"
  },
  {
    "id": 388,
    "title": 10.18,
    "devanagari": "विस्तरेणात्मनो योगं विभूतिं च जनार्दन ।\nभूयः कथय तृप्तिर्हि शृण्वतो नास्ति मेऽमृतम् ॥ १०.१८ ॥",
    "verse_text": "vistareṇātmano yogaṁ\nvibhūtiṁ ca janārdana\nbhūyaḥ kathaya tṛptir hi\nśṛṇvato nāsti me ’mṛtam",
    "verse_text_no_samdhis": "vistareṇa ātmanaḥ yogam vibhūtim ca jana ardana bhūyaḥ kathaya tṛptiḥ hi śṛṇvataḥ na asti me amṛtam"
  },
  {
    "id": 389,
    "title": 10.19,
    "devanagari": "श्रीभगवानुवाच ।\nहन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः\nप्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे ॥ १०.१९ ॥",
    "verse_text": "śrī-bhagavān uvāca\nhanta te kathayiṣyāmi\ndivyā hy ātma-vibhūtayaḥ\nprādhānyataḥ kuru-śreṣṭha\nnāsty anto vistarasya me",
    "verse_text_no_samdhis": "śrī bhagavān uvāca hanta te kathayiṣyāmi divyāḥ hi ātma vibhūtayaḥ prādhānyataḥ kuru śreṣṭha na asti antaḥ vistarasya me"
  },
  {
    "id": 390,
    "title": 10.2,
    "devanagari": "अहमात्मा गुडाकेश सर्वभूताशयस्थितः ।\nअहमादिश्च मध्यं च भूतानामन्त एव च ॥ १०.२० ॥",
    "verse_text": "aham ātmā guḍākeśa\nsarva-bhūtāśaya-sthitaḥ\naham ādiś ca madhyaṁ ca\nbhūtānām anta eva ca",
    "verse_text_no_samdhis": "aham ātmā guḍākeśa sarva bhūta āśaya sthitaḥ aham ādiḥ ca madhyam ca bhūtānām antaḥ eva ca"
  },
  {
    "id": 391,
    "title": 10.21,
    "devanagari": "आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान् ।\nमरीचिर्मरुतामस्मि नक्षत्राणामहं शशी ॥ १०.२१ ॥",
    "verse_text": "ādityānām ahaṁ viṣṇur\njyotiṣāṁ ravir aṁśumān\nmarīcir marutām asmi\nnakṣatrāṇām ahaṁ śaśī",
    "verse_text_no_samdhis": "ādityānām aham viṣṇuḥ jyotiṣām raviḥ aṁśu mān marīciḥ marutām asmi nakṣatrāṇām aham śaśī"
  },
  {
    "id": 392,
    "title": 10.22,
    "devanagari": "वेदानां सामवेदोऽस्मि देवानामस्मि वासवः ।\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ॥ १०.२२ ॥",
    "verse_text": "vedānāṁ sāma-vedo ’smi\ndevānām asmi vāsavaḥ\nindriyāṇāṁ manaś cāsmi\nbhūtānām asmi cetanā",
    "verse_text_no_samdhis": "vedānām sāma vedaḥ asmi devānām asmi vāsavaḥ indriyāṇām manaḥ ca asmi bhūtānām asmi cetanā"
  },
  {
    "id": 393,
    "title": 10.23,
    "devanagari": "रुद्राणां शंकरश्चास्मि वित्तेशो यक्षरक्षसाम् ।\nवसूनां पावकश्चास्मि मेरुः शिखरिणामहम् ॥ १०.२३ ॥",
    "verse_text": "rudrāṇāṁ śaṅkaraś cāsmi\nvitteśo yakṣa-rakṣasām\nvasūnāṁ pāvakaś cāsmi\nmeruḥ śikhariṇām aham",
    "verse_text_no_samdhis": "rudrāṇām śaṅkaraḥ ca asmi vitta īśaḥ yakṣa rakṣasām vasūnām pāvakaḥ ca asmi meruḥ śikhariṇām aham"
  },
  {
    "id": 394,
    "title": 10.24,
    "devanagari": "पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् ।\nसेनानीनामहं स्कन्दः सरसामस्मि सागरः ॥ १०.२४ ॥",
    "verse_text": "purodhasāṁ ca mukhyaṁ māṁ\nviddhi pārtha bṛhaspatim\nsenānīnām ahaṁ skandaḥ\nsarasām asmi sāgaraḥ",
    "verse_text_no_samdhis": "purodhasām ca mukhyam mām viddhi pārtha bṛhaspatim senānīnām aham skandaḥ sarasām asmi sāgaraḥ"
  },
  {
    "id": 395,
    "title": 10.25,
    "devanagari": "महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम् ।\nयज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः ॥ १०.२५ ॥",
    "verse_text": "maharṣīṇāṁ bhṛgur ahaṁ\ngirām asmy ekam akṣaram\nyajñānāṁ japa-yajño ’smi\nsthāvarāṇāṁ himālayaḥ",
    "verse_text_no_samdhis": "mahā ṛṣīṇām bhṛguḥ aham girām asmi ekam akṣaram yajñānām japa yajñaḥ asmi sthāvarāṇām himālayaḥ"
  },
  {
    "id": 396,
    "title": 10.26,
    "devanagari": "अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः ।\nगन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः ॥ १०.२६ ॥",
    "verse_text": "aśvatthaḥ sarva-vṛkṣāṇāṁ\ndevarṣīṇāṁ ca nāradaḥ\ngandharvāṇāṁ citrarathaḥ\nsiddhānāṁ kapilo muniḥ",
    "verse_text_no_samdhis": "aśvatthaḥ sarva vṛkṣāṇām deva ṛṣīṇām ca nāradaḥ gandharvāṇām citrarathaḥ siddhānām kapilaḥ muniḥ"
  },
  {
    "id": 397,
    "title": 10.27,
    "devanagari": "उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम् ।\nऐरावतं गजेन्द्राणां नराणां च नराधिपम् ॥ १०.२७ ॥",
    "verse_text": "uccaiḥśravasam aśvānāṁ\nviddhi mām amṛtodbhavam\nairāvataṁ gajendrāṇāṁ\nnarāṇāṁ ca narādhipam",
    "verse_text_no_samdhis": "uccaiḥśravasam aśvānām viddhi mām amṛta udbhavam airāvatam gaja indrāṇām narāṇām ca nara adhipam"
  },
  {
    "id": 398,
    "title": 10.28,
    "devanagari": "आयुधानामहं वज्रं धेनूनामस्मि कामधुक् ।\nप्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः ॥ १०.२८ ॥",
    "verse_text": "āyudhānām ahaṁ vajraṁ\ndhenūnām asmi kāma-dhuk\nprajanaś cāsmi kandarpaḥ\nsarpāṇām asmi vāsukiḥ",
    "verse_text_no_samdhis": "āyudhānām aham vajram dhenūnām asmi kāma dhuk prajanaḥ ca asmi kandarpaḥ sarpāṇām asmi vāsukiḥ"
  },
  {
    "id": 399,
    "title": 10.29,
    "devanagari": "अनन्तश्चास्मि नागानां वरुणो यादसामहम् ।\nपितॄणामर्यमा चास्मि यमः संयमतामहम् ॥ १०.२९ ॥",
    "verse_text": "anantaś cāsmi nāgānāṁ\nvaruṇo yādasām aham\npitṝṇām aryamā cāsmi\nyamaḥ saṁyamatām aham",
    "verse_text_no_samdhis": "anantaḥ ca asmi nāgānām varuṇaḥ yādasām aham pitṝṇām aryamā ca asmi yamaḥ saṁyamatām aham"
  },
  {
    "id": 400,
    "title": 10.3,
    "devanagari": "प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम् ।\nमृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् ॥ १०.३० ॥",
    "verse_text": "prahlādaś cāsmi daityānāṁ\nkālaḥ kalayatām aham\nmṛgāṇāṁ ca mṛgendro ’haṁ\nvainateyaś ca pakṣiṇām",
    "verse_text_no_samdhis": "prahlādaḥ ca asmi daityānām kālaḥ kalayatām aham mṛgāṇām ca mṛga indraḥ aham vainateyaḥ ca pakṣiṇām"
  },
  {
    "id": 401,
    "title": 10.31,
    "devanagari": "पवनः पवतामस्मि रामः शस्त्रभृतामहम् ।\nझषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ॥ १०.३१ ॥",
    "verse_text": "pavanaḥ pavatām asmi\nrāmaḥ śastra-bhṛtām aham\njhaṣāṇāṁ makaraś cāsmi\nsrotasām asmi jāhnavī",
    "verse_text_no_samdhis": "pavanaḥ pavatām asmi rāmaḥ śastra bhṛtām aham jhaṣāṇām makaraḥ ca asmi srotasām asmi jāhnavī"
  },
  {
    "id": 402,
    "title": 10.32,
    "devanagari": "सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन ।\nअध्यात्मविद्या विद्यानां वादः प्रवदतामहम् ॥ १०.३२ ॥",
    "verse_text": "sargāṇām ādir antaś ca\nmadhyaṁ caivāham arjuna\nadhyātma-vidyā vidyānāṁ\nvādaḥ pravadatām aham",
    "verse_text_no_samdhis": "sargāṇām ādiḥ antaḥ ca madhyam ca eva aham arjuna adhyātma vidyā vidyānām vādaḥ pravadatām aham"
  },
  {
    "id": 403,
    "title": 10.33,
    "devanagari": "अक्षराणामकारोऽस्मि द्वन्द्वः सामासिकस्य च ।\nअहमेवाक्षयः कालो धाताहं विश्वतोमुखः ॥ १०.३३ ॥",
    "verse_text": "akṣarāṇām a-kāro ’smi\ndvandvaḥ sāmāsikasya ca\naham evākṣayaḥ kālo\ndhātāhaṁ viśvato-mukhaḥ",
    "verse_text_no_samdhis": "akṣarāṇām a kāraḥ asmi dvandvaḥ sāmāsikasya ca aham eva akṣayaḥ kālaḥ dhātā aham viśvataḥ mukhaḥ"
  },
  {
    "id": 404,
    "title": 10.34,
    "devanagari": "मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम् ।\nकीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा ॥ १०.३४ ॥",
    "verse_text": "mṛtyuḥ sarva-haraś cāham\nudbhavaś ca bhaviṣyatām\nkīrtiḥ śrīr vāk ca nārīṇāṁ\nsmṛtir medhā dhṛtiḥ kṣamā",
    "verse_text_no_samdhis": "mṛtyuḥ sarva haraḥ ca aham udbhavaḥ ca bhaviṣyatām kīrtiḥ śrīḥ vāk ca nārīṇām smṛtiḥ medhā dhṛtiḥ kṣamā"
  },
  {
    "id": 405,
    "title": 10.35,
    "devanagari": "बृहत्साम तथा साम्नां गायत्री छन्दसामहम् ।\nमासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः ॥ १०.३५ ॥",
    "verse_text": "bṛhat-sāma tathā sāmnāṁ\ngāyatrī chandasām aham\nmāsānāṁ mārga-śīrṣo ’ham\nṛtūnāṁ kusumākaraḥ",
    "verse_text_no_samdhis": "bṛhat sāma tathā sāmnām gāyatrī chandasām aham māsānām mārga śīrṣaḥ aham ṛtūnām kusuma ākaraḥ"
  },
  {
    "id": 406,
    "title": 10.36,
    "devanagari": "द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम् ।\nजयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम् ॥ १०.३६ ॥",
    "verse_text": "dyūtaṁ chalayatām asmi\ntejas tejasvinām aham\njayo ’smi vyavasāyo ’smi\nsattvaṁ sattvavatām aham",
    "verse_text_no_samdhis": "dyūtam chalayatām asmi tejaḥ tejasvinām aham jayaḥ asmi vyavasāyaḥ asmi sattvam sattva vatām aham"
  },
  {
    "id": 407,
    "title": 10.37,
    "devanagari": "वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनंजयः ।\nमुनीनामप्यहं व्यासः कवीनामुशना कविः ॥ १०.३७ ॥",
    "verse_text": "vṛṣṇīnāṁ vāsudevo ’smi\npāṇḍavānāṁ dhanañ-jayaḥ\nmunīnām apy ahaṁ vyāsaḥ\nkavīnām uśanā kaviḥ",
    "verse_text_no_samdhis": "vṛṣṇīnām vāsudevaḥ asmi pāṇḍavānām dhanam jayaḥ munīnām api aham vyāsaḥ kavīnām uśanā kaviḥ"
  },
  {
    "id": 408,
    "title": 10.38,
    "devanagari": "दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् ।\nमौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम् ॥ १०.३८ ॥",
    "verse_text": "daṇḍo damayatām asmi\nnītir asmi jigīṣatām\nmaunaṁ caivāsmi guhyānāṁ\njñānaṁ jñānavatām aham",
    "verse_text_no_samdhis": "daṇḍaḥ damayatām asmi nītiḥ asmi jigīṣatām maunam ca eva asmi guhyānām jñānam jñāna vatām aham"
  },
  {
    "id": 409,
    "title": 10.39,
    "devanagari": "यच्चापि सर्वभूतानां बीजं तदहमर्जुन ।\nन तदस्ति विना यत्स्यान्मया भूतं चराचरम् ॥ १०.३९ ॥",
    "verse_text": "yac cāpi sarva-bhūtānāṁ\nbījaṁ tad aham arjuna\nna tad asti vinā yat syān\nmayā bhūtaṁ carācaram",
    "verse_text_no_samdhis": "yat ca api sarva bhūtānām bījam tat aham arjuna na tat asti vinā yat syāt mayā bhūtam cara acaram"
  },
  {
    "id": 410,
    "title": 10.4,
    "devanagari": "नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप ।\nएष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया ॥ १०.४० ॥",
    "verse_text": "nānto ’sti mama divyānāṁ\nvibhūtīnāṁ paran-tapa\neṣa tūddeśataḥ prokto\nvibhūter vistaro mayā",
    "verse_text_no_samdhis": "na antaḥ asti mama divyānām vibhūtīnām param tapa eṣaḥ tu uddeśataḥ proktaḥ vibhūteḥ vistaraḥ mayā"
  },
  {
    "id": 411,
    "title": 10.41,
    "devanagari": "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा ।\nतत्तदेवावगच्छ त्वं मम तेजोंऽशसंभवम् ॥ १०.४१ ॥",
    "verse_text": "yad yad vibhūtimat sattvaṁ\nśrīmad ūrjitam eva vā\ntat tad evāvagaccha tvaṁ\nmama tejo-’ṁśa-sambhavam",
    "verse_text_no_samdhis": "yat yat vibhūti mat sattvam śrī mat ūrjitam eva vā tat tat eva avagaccha tvam mama tejaḥ aṁśa sambhavam"
  },
  {
    "id": 412,
    "title": 10.42,
    "devanagari": "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन ।\nविष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ॥ १०.४२ ॥",
    "verse_text": "atha vā bahunaitena\nkiṁ jñātena tavārjuna\nviṣṭabhyāham idaṁ kṛtsnam\nekāṁśena sthito jagat",
    "verse_text_no_samdhis": "atha vā bahunā etena kim jñātena tava arjuna viṣṭabhya aham idam kṛtsnam eka aṁśena sthitaḥ jagat"
  },
  {
    "id": 413,
    "title": 11.1,
    "devanagari": "अर्जुन उवाच ।\nमदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम्\nयत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम ॥ ११.१ ॥",
    "verse_text": "arjuna uvāca\nmad-anugrahāya paramaṁ\nguhyam adhyātma-saṁjñitam\nyat tvayoktaṁ vacas tena\nmoho ’yaṁ vigato mama",
    "verse_text_no_samdhis": "arjunaḥ uvāca mat anugrahāya paramam guhyam adhyātma saṁjñitam yat tvayā uktam vacaḥ tena mohaḥ ayam vigataḥ mama"
  },
  {
    "id": 414,
    "title": 11.2,
    "devanagari": "भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया ।\nत्वत्तः कमलपत्राक्ष माहात्म्यमपि चाव्ययम् ॥ ११.२ ॥",
    "verse_text": "bhavāpyayau hi bhūtānāṁ\nśrutau vistaraśo mayā\ntvattaḥ kamala-patrākṣa\nmāhātmyam api cāvyayam",
    "verse_text_no_samdhis": "bhava apyayau hi bhūtānām śrutau vistaraśaḥ mayā tvattaḥ kamala patra akṣa māhātmyam api ca avyayam"
  },
  {
    "id": 415,
    "title": 11.3,
    "devanagari": "एवमेतद्यथात्थ त्वमात्मानं परमेश्वर ।\nद्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम ॥ ११.३ ॥",
    "verse_text": "evam etad yathāttha tvam\nātmānaṁ parameśvara\ndraṣṭum icchāmi te rūpam\naiśvaraṁ puruṣottama",
    "verse_text_no_samdhis": "evam etat yathā āttha tvam ātmānam parama īśvara draṣṭum icchāmi te rūpam aiśvaram puruṣa uttama"
  },
  {
    "id": 416,
    "title": 11.4,
    "devanagari": "मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो ।\nयोगेश्वर ततो मे त्वं दर्शयात्मानमव्ययम् ॥ ११.४ ॥",
    "verse_text": "manyase yadi tac chakyaṁ\nmayā draṣṭum iti prabho\nyogeśvara tato me tvaṁ\ndarśayātmānam avyayam",
    "verse_text_no_samdhis": "manyase yadi tat śakyam mayā draṣṭum iti prabho yoga īśvara tataḥ me tvam darśaya ātmānam avyayam"
  },
  {
    "id": 417,
    "title": 11.5,
    "devanagari": "श्रीभगवानुवाच ।\nपश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः\nनानाविधानि दिव्यानि नानावर्णाकृतीनि च ॥ ११.५ ॥",
    "verse_text": "śrī-bhagavān uvāca\npaśya me pārtha rūpāṇi\nśataśo ’tha sahasraśaḥ\nnānā-vidhāni divyāni\nnānā-varṇākṛtīni ca",
    "verse_text_no_samdhis": "śrī bhagavān uvāca paśya me pārtha rūpāṇi śataśaḥ atha sahasraśaḥ nānā vidhāni divyāni nānā varṇa ākṛtīni ca"
  },
  {
    "id": 418,
    "title": 11.6,
    "devanagari": "पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा ।\nबहून्यदृष्टपूर्वाणि पश्याश्चर्याणि भारत ॥ ११.६ ॥",
    "verse_text": "paśyādityān vasūn rudrān\naśvinau marutas tathā\nbahūny adṛṣṭa-pūrvāṇi\npaśyāścaryāṇi bhārata",
    "verse_text_no_samdhis": "paśya ādityān vasūn rudrān aśvinau marutaḥ tathā bahūni adṛṣṭa pūrvāṇi paśya āścaryāṇi bhārata"
  },
  {
    "id": 419,
    "title": 11.7,
    "devanagari": "इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम् ।\nमम देहे गुडाकेश यच्चान्यद् द्रष्टुमिच्छसि ॥ ११.७ ॥",
    "verse_text": "ihaika-sthaṁ jagat kṛtsnaṁ\npaśyādya sa-carācaram\nmama dehe guḍākeśa\nyac cānyad draṣṭum icchasi",
    "verse_text_no_samdhis": "iha eka stham jagat kṛtsnam paśya adya sa cara acaram mama dehe guḍākeśa yat ca anyat draṣṭum icchasi"
  },
  {
    "id": 420,
    "title": 11.8,
    "devanagari": "न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा ।\nदिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम् ॥ ११.८ ॥",
    "verse_text": "na tu māṁ śakyase draṣṭum\nanenaiva sva-cakṣuṣā\ndivyaṁ dadāmi te cakṣuḥ\npaśya me yogam aiśvaram",
    "verse_text_no_samdhis": "na tu mām śakyase draṣṭum anena eva sva cakṣuṣā divyam dadāmi te cakṣuḥ paśya me yogam aiśvaram"
  },
  {
    "id": 421,
    "title": 11.9,
    "devanagari": "संजय उवाच ।\nएवमुक्त्वा ततो राजन्महायोगेश्वरो हरिः\nदर्शयामास पार्थाय परमं रूपमैश्वरम् ॥ ११.९ ॥",
    "verse_text": "sañjaya uvāca\nevam uktvā tato rājan\nmahā-yogeśvaro hariḥ\ndarśayām āsa pārthāya\nparamaṁ rūpam aiśvaram",
    "verse_text_no_samdhis": "sañjayaḥ uvāca evam uktvā tataḥ rājan mahā yoga īśvaraḥ hariḥ darśayām āsa pārthāya paramam rūpam aiśvaram"
  },
  {
    "id": 422,
    "title": 11.1,
    "devanagari": "अनेकवक्त्रनयनमनेकाद्भुतदर्शनम् ।\nअनेकदिव्याभरणं दिव्यानेकोद्यतायुधम् ॥ ११.१० ॥",
    "verse_text": "aneka-vaktra-nayanam\nanekādbhuta-darśanam\naneka-divyābharaṇaṁ\ndivyānekodyatāyudham",
    "verse_text_no_samdhis": "aneka vaktra nayanam aneka adbhuta darśanam aneka divya ābharaṇam divya aneka udyata āyudham"
  },
  {
    "id": 423,
    "title": 11.11,
    "devanagari": "दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम् ।\nसर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम् ॥ ११.११ ॥",
    "verse_text": "divya-mālyāmbara-dharaṁ\ndivya-gandhānulepanam\nsarvāścarya-mayaṁ devam\nanantaṁ viśvato-mukham",
    "verse_text_no_samdhis": "divya mālya ambara dharam divya gandha anulepanam sarva āścarya mayam devam anantam viśvataḥ mukham"
  },
  {
    "id": 424,
    "title": 11.12,
    "devanagari": "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता ।\nयदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः ॥ ११.१२ ॥",
    "verse_text": "divi sūrya-sahasrasya\nbhaved yugapad utthitā\nyadi bhāḥ sadṛśī sā syād\nbhāsas tasya mahātmanaḥ",
    "verse_text_no_samdhis": "divi sūrya sahasrasya bhavet yugapat utthitā yadi bhāḥ sadṛśī sā syāt bhāsaḥ tasya mahā ātmanaḥ"
  },
  {
    "id": 425,
    "title": 11.13,
    "devanagari": "तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा ।\nअपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा ॥ ११.१३ ॥",
    "verse_text": "tatraika-sthaṁ jagat kṛtsnaṁ\npravibhaktam anekadhā\napaśyad deva-devasya\nśarīre pāṇḍavas tadā",
    "verse_text_no_samdhis": "tatra eka stham jagat kṛtsnam pravibhaktam anekadhā apaśyat deva devasya śarīre pāṇḍavaḥ tadā"
  },
  {
    "id": 426,
    "title": 11.14,
    "devanagari": "ततः स विस्मयाविष्टो हृष्टरोमा धनंजयः ।\nप्रणम्य शिरसा देवं कृताञ्जलिरभाषत ॥ ११.१४ ॥",
    "verse_text": "tataḥ sa vismayāviṣṭo\nhṛṣṭa-romā dhanañ-jayaḥ\npraṇamya śirasā devaṁ\nkṛtāñjalir abhāṣata",
    "verse_text_no_samdhis": "tataḥ saḥ vismaya āviṣṭaḥ hṛṣṭa romā dhanam jayaḥ praṇamya śirasā devam kṛta añjaliḥ abhāṣata"
  },
  {
    "id": 427,
    "title": 11.15,
    "devanagari": "अर्जुन उवाच ।\nपश्यामि देवांस्तव देव देहे\nसर्वांस्तथा भूतविशेषसंघान् ।\nब्रह्माणमीशं कमलासनस्थ-\nमृषींश्च सर्वानुरगांश्च दिव्यान् ॥ ११.१५ ॥",
    "verse_text": "arjuna uvāca\npaśyāmi devāṁs tava deva dehe\nsarvāṁs tathā bhūta-viśeṣa-saṅghān\nbrahmāṇam īśaṁ kamalāsana-stham\nṛṣīṁś ca sarvān uragāṁś ca divyān",
    "verse_text_no_samdhis": "arjunaḥ uvāca paśyāmi devān tava deva dehe sarvān tathā bhūta viśeṣa saṅghān brahmāṇam īśam kamala āsana stham ṛṣīn ca sarvān uragān ca divyān"
  },
  {
    "id": 428,
    "title": 11.16,
    "devanagari": "अनेकबाहूदरवक्त्रनेत्रं\nपश्यामि त्वां सर्वतोऽनन्तरूपम् ।\nनान्तं न मध्यं न पुनस्तवादिं\nपश्यामि विश्वेश्वर विश्वरूप ॥ ११.१६ ॥",
    "verse_text": "aneka-bāhūdara-vaktra-netraṁ\npaśyāmi tvāṁ sarvato ’nanta-rūpam\nnāntaṁ na madhyaṁ na punas tavādiṁ\npaśyāmi viśveśvara viśva-rūpa",
    "verse_text_no_samdhis": "aneka bāhu udara vaktra netram paśyāmi tvām sarvataḥ ananta rūpam na antam na madhyam na punaḥ tava ādim paśyāmi viśva īśvara viśva rūpa"
  },
  {
    "id": 429,
    "title": 11.17,
    "devanagari": "किरीटिनं गदिनं चक्रिणं च\nतेजोराशिं सर्वतो दीप्तिमन्तम् ।\nपश्यामि त्वां दुर्निरीक्ष्यं समन्ता-\nद्दीप्तानलार्कद्युतिमप्रमेयम् ॥ ११.१७ ॥",
    "verse_text": "kirīṭinaṁ gadinaṁ cakriṇaṁ ca\ntejo-rāśiṁ sarvato dīptimantam\npaśyāmi tvāṁ durnirīkṣyaṁ samantād\ndīptānalārka-dyutim aprameyam",
    "verse_text_no_samdhis": "kirīṭinam gadinam cakriṇam ca tejaḥ rāśim sarvataḥ dīpti mantam paśyāmi tvām durnirīkṣyam samantāt dīpta anala arka dyutim aprameyam"
  },
  {
    "id": 430,
    "title": 11.18,
    "devanagari": "त्वमक्षरं परमं वेदितव्यं\nत्वमस्य विश्वस्य परं निधानम् ।\nत्वमव्ययः शाश्वतधर्मगोप्ता\nसनातनस्त्वं पुरुषो मतो मे ॥ ११.१८ ॥",
    "verse_text": "tvam akṣaraṁ paramaṁ veditavyaṁ\ntvam asya viśvasya paraṁ nidhānam\ntvam avyayaḥ śāśvata-dharma-goptā\nsanātanas tvaṁ puruṣo mato me",
    "verse_text_no_samdhis": "tvam akṣaram paramam veditavyam tvam asya viśvasya param nidhānam tvam avyayaḥ śāśvata dharma goptā sanātanaḥ tvam puruṣaḥ mataḥ me"
  },
  {
    "id": 431,
    "title": 11.19,
    "devanagari": "अनादिमध्यान्तमनन्तवीर्य-\nमनन्तबाहुं शशिसूर्यनेत्रम् ।\nपश्यामि त्वां दीप्तहुताशवक्त्रं\nस्वतेजसा विश्वमिदं तपन्तम् ॥ ११.१९ ॥",
    "verse_text": "anādi-madhyāntam ananta-vīryam\nananta-bāhuṁ śaśi-sūrya-netram\npaśyāmi tvāṁ dīpta-hutāśa-vaktraṁ\nsva-tejasā viśvam idaṁ tapantam",
    "verse_text_no_samdhis": "anādi madhya antam ananta vīryam ananta bāhum śaśi sūrya netram paśyāmi tvām dīpta hutāśa vaktram sva tejasā viśvam idam tapantam"
  },
  {
    "id": 432,
    "title": 11.2,
    "devanagari": "द्यावापृथिव्योरिदमन्तरं हि\nव्याप्तं त्वयैकेन दिशश्च सर्वाः ।\nदृष्ट्वाद्भुतं रूपमुग्रं तवेदं\nलोकत्रयं प्रव्यथितं महात्मन् ॥ ११.२० ॥",
    "verse_text": "dyāv ā-pṛthivyor idam antaraṁ hi\nvyāptaṁ tvayaikena diśaś ca sarvāḥ\ndṛṣṭvādbhutaṁ rūpam ugraṁ tavedaṁ\nloka-trayaṁ pravyathitaṁ mahātman",
    "verse_text_no_samdhis": "dyau ā pṛthivyoḥ idam antaram hi vyāptam tvayā ekena diśaḥ ca sarvāḥ dṛṣṭvā adbhutam rūpam ugram tava idam loka trayam pravyathitam mahā ātman"
  },
  {
    "id": 433,
    "title": 11.21,
    "devanagari": "अमी हि त्वां सुरसंघा विशन्ति\nकेचिद्भीताः प्राञ्जलयो गृणन्ति ।\nस्वस्तीत्युक्त्वा महर्षिसिद्धसंघाः\nस्तुवन्ति त्वां स्तुतिभिः पुष्कलाभिः ॥ ११.२१ ॥",
    "verse_text": "amī hi tvāṁ sura-saṅghā viśanti\nkecid bhītāḥ prāñjalayo gṛṇanti\nsvastīty uktvā maharṣi-siddha-saṅghāḥ\nstuvanti tvāṁ stutibhiḥ puṣkalābhiḥ",
    "verse_text_no_samdhis": "amī hi tvām sura saṅghāḥ viśanti kecit bhītāḥ prāñjalayaḥ gṛṇanti svasti iti uktvā mahā ṛṣi siddha saṅghāḥ stuvanti tvām stutibhiḥ puṣkalābhiḥ"
  },
  {
    "id": 434,
    "title": 11.22,
    "devanagari": "रुद्रादित्या वसवो ये च साध्या\nविश्वेऽश्विनौ मरुतश्चोष्मपाश्च ।\nगन्धर्वयक्षासुरसिद्धसंघा\nवीक्षन्ते त्वां विस्मिताश्चैव सर्वे ॥ ११.२२ ॥",
    "verse_text": "rudrādityā vasavo ye ca sādhyā\nviśve ’śvinau marutaś coṣmapāś ca\ngandharva-yakṣāsura-siddha-saṅghā\nvīkṣante tvāṁ vismitāś caiva sarve",
    "verse_text_no_samdhis": "rudra ādityāḥ vasavaḥ ye ca sādhyāḥ viśve aśvinau marutaḥ ca uṣma pāḥ ca gandharva yakṣa asura siddha saṅghāḥ vīkṣante tvām vismitāḥ ca eva sarve"
  },
  {
    "id": 435,
    "title": 11.23,
    "devanagari": "रूपं महत्ते बहुवक्त्रनेत्रं\nमहाबाहो बहुबाहूरुपादम् ।\nबहूदरं बहुदंष्ट्राकरालं\nदृष्ट्वा लोकाः प्रव्यथितास्तथाहम् ॥ ११.२३ ॥",
    "verse_text": "rūpaṁ mahat te bahu-vaktra-netraṁ\nmahā-bāho bahu-bāhūru-pādam\nbahūdaraṁ bahu-daṁṣṭrā-karālaṁ\ndṛṣṭvā lokāḥ pravyathitās tathāham",
    "verse_text_no_samdhis": "rūpam mahat te bahu vaktra netram mahā bāho bahu bāhu ūru pādam bahu udaram bahu daṁṣṭrā karālam dṛṣṭvā lokāḥ pravyathitāḥ tathā aham"
  },
  {
    "id": 436,
    "title": 11.24,
    "devanagari": "नभःस्पृशं दीप्तमनेकवर्णं\nव्यात्ताननं दीप्तविशालनेत्रम् ।\nदृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा\nधृतिं न विन्दामि शमं च विष्णो ॥ ११.२४ ॥",
    "verse_text": "nabhaḥ-spṛśaṁ dīptam aneka-varṇaṁ\nvyāttānanaṁ dīpta-viśāla-netram\ndṛṣṭvā hi tvāṁ pravyathitāntar-ātmā\ndhṛtiṁ na vindāmi śamaṁ ca viṣṇo",
    "verse_text_no_samdhis": "nabhaḥ spṛśam dīptam aneka varṇam vyātta ānanam dīpta viśāla netram dṛṣṭvā hi tvām pravyathita antaḥ ātmā dhṛtim na vindāmi śamam ca viṣṇo"
  },
  {
    "id": 437,
    "title": 11.25,
    "devanagari": "दंष्ट्राकरालानि च ते मुखानि\nदृष्ट्वैव कालानलसन्निभानि ।\nदिशो न जाने न लभे च शर्म\nप्रसीद देवेश जगन्निवास ॥ ११.२५ ॥",
    "verse_text": "daṁṣṭrā-karālāni ca te mukhāni\ndṛṣṭvaiva kālānala-sannibhāni\ndiśo na jāne na labhe ca śarma\nprasīda deveśa jagan-nivāsa",
    "verse_text_no_samdhis": "daṁṣṭrā karālāni ca te mukhāni dṛṣṭvā eva kāla anala sannibhāni diśaḥ na jāne na labhe ca śarma prasīda deva īśa jagat nivāsa"
  },
  {
    "id": 438,
    "title": 11.26,
    "devanagari": "अमी च त्वां धृतराष्ट्रस्य पुत्राः\nसर्वे सहैवावनिपालसंघैः ।\nभीष्मो द्रोणः सूतपुत्रस्तथासौ\nसहास्मदीयैरपि योधमुख्यैः ॥ ११.२६ ॥",
    "verse_text": "amī ca tvāṁ dhṛtarāṣṭrasya putrāḥ\nsarve sahaivāvani-pāla-saṅghaiḥ\nbhīṣmo droṇaḥ sūta-putras tathāsau\nsahāsmadīyair api yodha-mukhyaiḥ",
    "verse_text_no_samdhis": "amī ca tvām dhṛtarāṣṭrasya putrāḥ sarve saha eva avani pāla saṅghaiḥ bhīṣmaḥ droṇaḥ sūta putraḥ tathā asau saha asmadīyaiḥ api yodha mukhyaiḥ"
  },
  {
    "id": 439,
    "title": 11.27,
    "devanagari": "वक्त्राणि ते त्वरमाणा विशन्ति\nदंष्ट्राकरालानि भयानकानि ।\nकेचिद्विलग्ना दशनान्तरेषु\nसंदृश्यन्ते चूर्णितैरुत्तमाङ्गैः ॥ ११.२७ ॥",
    "verse_text": "vaktrāṇi te tvaramāṇā viśanti\ndaṁṣṭrā-karālāni bhayānakāni\nkecid vilagnā daśanāntareṣu\nsandṛśyante cūrṇitair uttamāṅgaiḥ",
    "verse_text_no_samdhis": "vaktrāṇi te tvaramāṇāḥ viśanti daṁṣṭrā karālāni bhayānakāni kecit vilagnāḥ daśana antareṣu sandṛśyante cūrṇitaiḥ uttama aṅgaiḥ"
  },
  {
    "id": 440,
    "title": 11.28,
    "devanagari": "यथा नदीनां बहवोऽम्बुवेगाः\nसमुद्रमेवाभिमुखा द्रवन्ति ।\nतथा तवामी नरलोकवीरा\nविशन्ति वक्त्राण्यभिविज्वलन्ति ॥ ११.२८ ॥",
    "verse_text": "yathā nadīnāṁ bahavo ’mbu-vegāḥ\nsamudram evābhimukhā dravanti\ntathā tavāmī nara-loka-vīrā\nviśanti vaktrāṇy abhivijvalanti",
    "verse_text_no_samdhis": "yathā nadīnām bahavaḥ ambu vegāḥ samudram eva abhimukhāḥ dravanti tathā tava amī nara loka vīrāḥ viśanti vaktrāṇi abhivijvalanti"
  },
  {
    "id": 441,
    "title": 11.29,
    "devanagari": "यथा प्रदीप्तं ज्वलनं पतङ्गा\nविशन्ति नाशाय समृद्धवेगाः ।\nतथैव नाशाय विशन्ति लोका-\nस्तवापि वक्त्राणि समृद्धवेगाः ॥ ११.२९ ॥",
    "verse_text": "yathā pradīptaṁ jvalanaṁ pataṅgā\nviśanti nāśāya samṛddha-vegāḥ\ntathaiva nāśāya viśanti lokās\ntavāpi vaktrāṇi samṛddha-vegāḥ",
    "verse_text_no_samdhis": "yathā pradīptam jvalanam pataṅgāḥ viśanti nāśāya samṛddha vegāḥ tathā eva nāśāya viśanti lokāḥ tava api vaktrāṇi samṛddha vegāḥ"
  },
  {
    "id": 442,
    "title": 11.3,
    "devanagari": "लेलिह्यसे ग्रसमानः समन्ता-\nल्लोकान्समग्रान्वदनैर्ज्वलद्भिः ।\nतेजोभिरापूर्य जगत्समग्रं\nभासस्तवोग्राः प्रतपन्ति विष्णो ॥ ११.३० ॥",
    "verse_text": "lelihyase grasamānaḥ samantāl\nlokān samagrān vadanair jvaladbhiḥ\ntejobhir āpūrya jagat samagraṁ\nbhāsas tavogrāḥ pratapanti viṣṇo",
    "verse_text_no_samdhis": "lelihyase grasamānaḥ samantāt lokān samagrān vadanaiḥ jvaladbhiḥ tejobhiḥ āpūrya jagat samagram bhāsaḥ tava ugrāḥ pratapanti viṣṇo"
  },
  {
    "id": 443,
    "title": 11.31,
    "devanagari": "आख्याहि मे को भवानुग्ररूपो\nनमोऽस्तु ते देववर प्रसीद ।\nविज्ञातुमिच्छामि भवन्तमाद्यं\nन हि प्रजानामि तव प्रवृत्तिम् ॥ ११.३१ ॥",
    "verse_text": "ākhyāhi me ko bhavān ugra-rūpo\nnamo ’stu te deva-vara prasīda\nvijñātum icchāmi bhavantam ādyaṁ\nna hi prajānāmi tava pravṛttim",
    "verse_text_no_samdhis": "ākhyāhi me kaḥ bhavān ugra rūpaḥ namaḥ astu te deva vara prasīda vijñātum icchāmi bhavantam ādyam na hi prajānāmi tava pravṛttim"
  },
  {
    "id": 444,
    "title": 11.32,
    "devanagari": "श्रीभगवानुवाच ।\nकालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः ।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः ॥ ११.३२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nkālo ’smi loka-kṣaya-kṛt pravṛddho\nlokān samāhartum iha pravṛttaḥ\nṛte ’pi tvāṁ na bhaviṣyanti sarve\nye ’vasthitāḥ praty-anīkeṣu yodhāḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca kālaḥ asmi loka kṣaya kṛt pravṛddhaḥ lokān samāhartum iha pravṛttaḥ ṛte api tvām na bhaviṣyanti sarve ye avasthitāḥ prati anīkeṣu yodhāḥ"
  },
  {
    "id": 445,
    "title": 11.33,
    "devanagari": "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम् ।\nमयैवैते निहताः पूर्वमेव\nनिमित्तमात्रं भव सव्यसाचिन् ॥ ११.३३ ॥",
    "verse_text": "tasmāt tvam uttiṣṭha yaśo labhasva\njitvā śatrūn bhuṅkṣva rājyaṁ samṛddham\nmayaivaite nihatāḥ pūrvam eva\nnimitta-mātraṁ bhava savya-sācin",
    "verse_text_no_samdhis": "tasmāt tvam uttiṣṭha yaśaḥ labhasva jitvā śatrūn bhuṅkṣva rājyam samṛddham mayā eva ete nihatāḥ pūrvam eva nimitta mātram bhava savya sācin"
  },
  {
    "id": 446,
    "title": 11.34,
    "devanagari": "द्रोणं च भीष्मं च जयद्रथं च\nकर्णं तथान्यानपि योधवीरान् ।\nमया हतांस्त्वं जहि मा व्यथिष्ठा\nयुध्यस्व जेतासि रणे सपत्नान् ॥ ११.३४ ॥",
    "verse_text": "droṇaṁ ca bhīṣmaṁ ca jayadrathaṁ ca\nkarṇaṁ tathānyān api yodha-vīrān\nmayā hatāṁs tvaṁ jahi mā vyathiṣṭhā\nyudhyasva jetāsi raṇe sapatnān",
    "verse_text_no_samdhis": "droṇam ca bhīṣmam ca jayadratham ca karṇam tathā anyān api yodha vīrān mayā hatān tvam jahi mā vyathiṣṭhāḥ yudhyasva jetā asi raṇe sapatnān"
  },
  {
    "id": 447,
    "title": 11.35,
    "devanagari": "संजय उवाच ।\nएतच्छ्रुत्वा वचनं केशवस्य\nकृताञ्जलिर्वेपमानः किरीटी ।\nनमस्कृत्वा भूय एवाह कृष्णं\nसगद्गदं भीतभीतः प्रणम्य ॥ ११.३५ ॥",
    "verse_text": "sañjaya uvāca\netac chrutvā vacanaṁ keśavasya\nkṛtāñjalir vepamānaḥ kirīṭī\nnamaskṛtvā bhūya evāha kṛṣṇaṁ\nsa-gadgadaṁ bhīta-bhītaḥ praṇamya",
    "verse_text_no_samdhis": "sañjayaḥ uvāca etat śrutvā vacanam keśavasya kṛta añjaliḥ vepamānaḥ kirīṭī namaskṛtvā bhūyaḥ eva āha kṛṣṇam sa gadgadam bhīta bhītaḥ praṇamya"
  },
  {
    "id": 448,
    "title": 11.36,
    "devanagari": "अर्जुन उवाच ।\nस्थाने हृषीकेश तव प्रकीर्त्या\nजगत्प्रहृष्यत्यनुरज्यते च ।\nरक्षांसि भीतानि दिशो द्रवन्ति\nसर्वे नमस्यन्ति च सिद्धसंघाः ॥ ११.३६ ॥",
    "verse_text": "arjuna uvāca\nsthāne hṛṣīkeśa tava prakīrtyā\njagat prahṛṣyaty anurajyate ca\nrakṣāṁsi bhītāni diśo dravanti\nsarve namasyanti ca siddha-saṅghāḥ",
    "verse_text_no_samdhis": "arjunaḥ uvāca sthāne hṛṣīka īśa tava prakīrtyā jagat prahṛṣyati anurajyate ca rakṣāṁsi bhītāni diśaḥ dravanti sarve namasyanti ca siddha saṅghāḥ"
  },
  {
    "id": 449,
    "title": 11.37,
    "devanagari": "कस्माच्च ते न नमेरन्महात्मन्\nगरीयसे ब्रह्मणोऽप्यादिकर्त्रे ।\nअनन्त देवेश जगन्निवास\nत्वमक्षरं सदसत्तत्परं यत् ॥ ११.३७ ॥",
    "verse_text": "kasmāc ca te na nameran mahātman\ngarīyase brahmaṇo ’py ādi-kartre\nananta deveśa jagan-nivāsa\ntvam akṣaraṁ sad-asat tat paraṁ yat",
    "verse_text_no_samdhis": "kasmāt ca te na nameran mahā ātman garīyase brahmaṇaḥ api ādi kartre ananta deva īśa jagat nivāsa tvam akṣaram sat asat tat param yat"
  },
  {
    "id": 450,
    "title": 11.38,
    "devanagari": "त्वमादिदेवः पुरुषः पुराण-\nस्त्वमस्य विश्वस्य परं निधानम् ।\nवेत्तासि वेद्यं च परं च धाम\nत्वया ततं विश्वमनन्तरूप ॥ ११.३८ ॥",
    "verse_text": "tvam ādi-devaḥ puruṣaḥ purāṇas\ntvam asya viśvasya paraṁ nidhānam\nvettāsi vedyaṁ ca paraṁ ca dhāma\ntvayā tataṁ viśvam ananta-rūpa",
    "verse_text_no_samdhis": "tvam ādi devaḥ puruṣaḥ purāṇaḥ tvam asya viśvasya param nidhānam vettā asi vedyam ca param ca dhāma tvayā tatam viśvam ananta rūpa"
  },
  {
    "id": 451,
    "title": 11.39,
    "devanagari": "वायुर्यमोऽग्निर्वरुणः शशाङ्कः\nप्रजापतिस्त्वं प्रपितामहश्च ।\nनमो नमस्तेऽस्तु सहस्रकृत्वः\nपुनश्च भूयोऽपि नमो नमस्ते ॥ ११.३९ ॥",
    "verse_text": "vāyur yamo ’gnir varuṇaḥ śaśāṅkaḥ\nprajāpatis tvaṁ prapitāmahaś ca\nnamo namas te ’stu sahasra-kṛtvaḥ\npunaś ca bhūyo ’pi namo namas te",
    "verse_text_no_samdhis": "vāyuḥ yamaḥ agniḥ varuṇaḥ śaśa aṅkaḥ prajāpatiḥ tvam prapitāmahaḥ ca namaḥ namaḥ te astu sahasra kṛtvaḥ punaḥ ca bhūyaḥ api namaḥ namaḥ te"
  },
  {
    "id": 452,
    "title": 11.4,
    "devanagari": "नमः पुरस्तादथ पृष्ठतस्ते\nनमोऽस्तु ते सर्वत एव सर्व ।\nअनन्तवीर्यामितविक्रमस्त्वं\nसर्वं समाप्नोषि ततोऽसि सर्वः ॥ ११.४० ॥",
    "verse_text": "namaḥ purastād atha pṛṣṭhatas te\nnamo ’stu te sarvata eva sarva\nananta-vīryāmita-vikramas tvaṁ\nsarvaṁ samāpnoṣi tato ’si sarvaḥ",
    "verse_text_no_samdhis": "namaḥ purastāt atha pṛṣṭhataḥ te namaḥ astu te sarvataḥ eva sarva ananta vīrya amita vikramaḥ tvam sarvam samāpnoṣi tataḥ asi sarvaḥ"
  },
  {
    "id": 453,
    "title": 11.41,
    "devanagari": "सखेति मत्वा प्रसभं यदुक्तं\nहे कृष्ण हे यादव हे सखेति ।\nअजानता महिमानं तवेदं\nमया प्रमादात्प्रणयेन वापि ॥ ११.४१ ॥",
    "verse_text": "sakheti matvā prasabhaṁ yad uktaṁ\nhe kṛṣṇa he yādava he sakheti\najānatā mahimānaṁ tavedaṁ\nmayā pramādāt praṇayena vāpi",
    "verse_text_no_samdhis": "sakhā iti matvā prasabham yat uktam he kṛṣṇa he yādava he sakhe iti ajānatā mahimānam tava idam mayā pramādāt praṇayena vā api"
  },
  {
    "id": 454,
    "title": 11.42,
    "devanagari": "यच्चावहासार्थमसत्कृतोऽसि\nविहारशय्यासनभोजनेषु ।\nएकोऽथवाप्यच्युत तत्समक्षं\nतत्क्षामये त्वामहमप्रमेयम् ॥ ११.४२ ॥",
    "verse_text": "yac cāvahāsārtham asat-kṛto ’si\nvihāra-śayyāsana-bhojaneṣu\neko ’tha vāpy acyuta tat-samakṣaṁ\ntat kṣāmaye tvām aham aprameyam",
    "verse_text_no_samdhis": "yat ca avahāsa artham asat kṛtaḥ asi vihāra śayyā āsana bhojaneṣu ekaḥ atha vā api acyuta tat samakṣam tat kṣāmaye tvām aham aprameyam"
  },
  {
    "id": 455,
    "title": 11.43,
    "devanagari": "पितासि लोकस्य चराचरस्य\nत्वमस्य पूज्यश्च गुरुर्गरीयान् ।\nन त्वत्समोऽस्त्यभ्यधिकः कुतोऽन्यो\nलोकत्रयेऽप्यप्रतिमप्रभाव ॥ ११.४३ ॥",
    "verse_text": "pitāsi lokasya carācarasya\ntvam asya pūjyaś ca gurur garīyān\nna tvat-samo ’sty abhyadhikaḥ kuto ’nyo\nloka-traye ’py apratima-prabhāva",
    "verse_text_no_samdhis": "pitā asi lokasya cara acarasya tvam asya pūjyaḥ ca guruḥ garīyān na tvat samaḥ asti abhyadhikaḥ kutaḥ anyaḥ loka traye api apratima prabhāva"
  },
  {
    "id": 456,
    "title": 11.44,
    "devanagari": "तस्मात्प्रणम्य प्रणिधाय कायं\nप्रसादये त्वामहमीशमीड्यम् ।\nपितेव पुत्रस्य सखेव सख्युः\nप्रियः प्रियायार्हसि देव सोढुम् ॥ ११.४४ ॥",
    "verse_text": "tasmāt praṇamya praṇidhāya kāyaṁ\nprasādaye tvām aham īśam īḍyam\npiteva putrasya sakheva sakhyuḥ\npriyaḥ priyāyārhasi deva soḍhum",
    "verse_text_no_samdhis": "tasmāt praṇamya praṇidhāya kāyam prasādaye tvām aham īśam īḍyam pitā iva putrasya sakhā iva sakhyuḥ priyaḥ priyāyāḥ arhasi deva soḍhum"
  },
  {
    "id": 457,
    "title": 11.45,
    "devanagari": "अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा\nभयेन च प्रव्यथितं मनो मे ।\nतदेव मे दर्शय देव रूपं\nप्रसीद देवेश जगन्निवास ॥ ११.४५ ॥",
    "verse_text": "adṛṣṭa-pūrvaṁ hṛṣito ’smi dṛṣṭvā\nbhayena ca pravyathitaṁ mano me\ntad eva me darśaya deva rūpaṁ\nprasīda deveśa jagan-nivāsa",
    "verse_text_no_samdhis": "adṛṣṭa pūrvam hṛṣitaḥ asmi dṛṣṭvā bhayena ca pravyathitam manaḥ me tat eva me darśaya deva rūpam prasīda deva īśa jagat nivāsa"
  },
  {
    "id": 458,
    "title": 11.46,
    "devanagari": "किरीटिनं गदिनं चक्रहस्त-\nमिच्छामि त्वां द्रष्टुमहं तथैव ।\nतेनैव रूपेण चतुर्भुजेन\nसहस्रबाहो भव विश्वमूर्ते ॥ ११.४६ ॥",
    "verse_text": "kirīṭinaṁ gadinaṁ cakra-hastam\nicchāmi tvāṁ draṣṭum ahaṁ tathaiva\ntenaiva rūpeṇa catur-bhujena\nsahasra-bāho bhava viśva-mūrte",
    "verse_text_no_samdhis": "kirīṭinam gadinam cakra hastam icchāmi tvām draṣṭum aham tathā eva tena eva rūpeṇa catuḥ bhujena sahasra bāho bhava viśva mūrte"
  },
  {
    "id": 459,
    "title": 11.47,
    "devanagari": "श्रीभगवानुवाच ।\nमया प्रसन्नेन तवार्जुनेदं\nरूपं परं दर्शितमात्मयोगात् ।\nतेजोमयं विश्वमनन्तमाद्यं\nयन्मे त्वदन्येन न दृष्टपूर्वम् ॥ ११.४७ ॥",
    "verse_text": "śrī-bhagavān uvāca\nmayā prasannena tavārjunedaṁ\nrūpaṁ paraṁ darśitam ātma-yogāt\ntejo-mayaṁ viśvam anantam ādyaṁ\nyan me tvad anyena na dṛṣṭa-pūrvam",
    "verse_text_no_samdhis": "śrī bhagavān uvāca mayā prasannena tava arjuna idam rūpam param darśitam ātma yogāt tejaḥ mayam viśvam anantam ādyam yat me tvat anyena na dṛṣṭa pūrvam"
  },
  {
    "id": 460,
    "title": 11.48,
    "devanagari": "न वेदयज्ञाध्ययनैर्न दानै-\nर्न च क्रियाभिर्न तपोभिरुग्रैः ।\nएवंरूपः शक्य अहं नृलोके\nद्रष्टुं त्वदन्येन कुरुप्रवीर ॥ ११.४८ ॥",
    "verse_text": "na veda-yajñādhyayanair na dānair\nna ca kriyābhir na tapobhir ugraiḥ\nevaṁ-rūpaḥ śakya ahaṁ nṛ-loke\ndraṣṭuṁ tvad anyena kuru-pravīra",
    "verse_text_no_samdhis": "na veda yajña adhyayanaiḥ na dānaiḥ na ca kriyābhiḥ na tapobhiḥ ugraiḥ evam rūpaḥ śakyaḥ aham nṛ loke draṣṭum tvat anyena kuru pravīra"
  },
  {
    "id": 461,
    "title": 11.49,
    "devanagari": "मा ते व्यथा मा च विमूढभावो\nदृष्ट्वा रूपं घोरमीदृङ्ममेदम् ।\nव्यपेतभीः प्रीतमनाः पुनस्त्वं\nतदेव मे रूपमिदं प्रपश्य ॥ ११.४९ ॥",
    "verse_text": "mā te vyathā mā ca vimūḍha-bhāvo\ndṛṣṭvā rūpaṁ ghoram īdṛṅ mamedam\nvyapeta-bhīḥ prīta-manāḥ punas tvaṁ\ntad eva me rūpam idaṁ prapaśya",
    "verse_text_no_samdhis": "mā te vyathā mā ca vimūḍha bhāvaḥ dṛṣṭvā rūpam ghoram īdṛk mama idam vyapeta bhīḥ prīta manāḥ punaḥ tvam tat eva me rūpam idam prapaśya"
  },
  {
    "id": 462,
    "title": 11.5,
    "devanagari": "संजय उवाच ।\nइत्यर्जुनं वासुदेवस्तथोक्त्वा\nस्वकं रूपं दर्शयामास भूयः ।\nआश्वासयामास च भीतमेनं\nभूत्वा पुनः सौम्यवपुर्महात्मा ॥ ११.५० ॥",
    "verse_text": "sañjaya uvāca\nity arjunaṁ vāsudevas tathoktvā\nsvakaṁ rūpaṁ darśayām āsa bhūyaḥ\nāśvāsayām āsa ca bhītam enaṁ\nbhūtvā punaḥ saumya-vapur mahātmā",
    "verse_text_no_samdhis": "sañjayaḥ uvāca iti arjunam vāsudevaḥ tathā uktvā svakam rūpam darśayām āsa bhūyaḥ āśvāsayām āsa ca bhītam enam bhūtvā punaḥ saumya vapuḥ mahā ātmā"
  },
  {
    "id": 463,
    "title": 11.51,
    "devanagari": "अर्जुन उवाच ।\nदृष्ट्वेदं मानुषं रूपं तव सौम्यं जनार्दन\nइदानीमस्मि संवृत्तः सचेताः प्रकृतिं गतः ॥ ११.५१ ॥",
    "verse_text": "arjuna uvāca\ndṛṣṭvedaṁ mānuṣaṁ rūpaṁ\ntava saumyaṁ janārdana\nidānīm asmi saṁvṛttaḥ\nsa-cetāḥ prakṛtiṁ gataḥ",
    "verse_text_no_samdhis": "arjunaḥ uvāca dṛṣṭvā idam mānuṣam rūpam tava saumyam janārdana idānīm asmi saṁvṛttaḥ sa cetāḥ prakṛtim gataḥ"
  },
  {
    "id": 464,
    "title": 11.52,
    "devanagari": "श्रीभगवानुवाच ।\nसुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम\nदेवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्क्षिणः ॥ ११.५२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nsu-durdarśam idaṁ rūpaṁ\ndṛṣṭavān asi yan mama\ndevā apy asya rūpasya\nnityaṁ darśana-kāṅkṣiṇaḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca su durdarśam idam rūpam dṛṣṭavān asi yat mama devāḥ api asya rūpasya nityam darśana kāṅkṣiṇaḥ"
  },
  {
    "id": 465,
    "title": 11.53,
    "devanagari": "नाहं वेदैर्न तपसा न दानेन न चेज्यया ।\nशक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा ॥ ११.५३ ॥",
    "verse_text": "nāhaṁ vedair na tapasā\nna dānena na cejyayā\nśakya evaṁ-vidho draṣṭuṁ\ndṛṣṭavān asi māṁ yathā",
    "verse_text_no_samdhis": "na aham vedaiḥ na tapasā na dānena na ca ijyayā śakyaḥ evam vidhaḥ draṣṭum dṛṣṭavān asi mām yathā"
  },
  {
    "id": 466,
    "title": 11.54,
    "devanagari": "भक्त्या त्वनन्यया शक्य अहमेवंविधोऽर्जुन ।\nज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परंतप ॥ ११.५४ ॥",
    "verse_text": "bhaktyā tv ananyayā śakya\naham evaṁ-vidho ’rjuna\njñātuṁ draṣṭuṁ ca tattvena\npraveṣṭuṁ ca paran-tapa",
    "verse_text_no_samdhis": "bhaktyā tu ananyayā śakyaḥ aham evam vidhaḥ arjuna jñātum draṣṭum ca tattvena praveṣṭum ca param tapa"
  },
  {
    "id": 467,
    "title": 11.55,
    "devanagari": "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः ।\nनिर्वैरः सर्वभूतेषु यः स मामेति पाण्डव ॥ ११.५५ ॥",
    "verse_text": "mat-karma-kṛn mat-paramo\nmad-bhaktaḥ saṅga-varjitaḥ\nnirvairaḥ sarva-bhūteṣu\nyaḥ sa mām eti pāṇḍava",
    "verse_text_no_samdhis": "mat karma kṛt mat paramaḥ mat bhaktaḥ saṅga varjitaḥ nirvairaḥ sarva bhūteṣu yaḥ saḥ mām eti pāṇḍava"
  },
  {
    "id": 468,
    "title": 12.1,
    "devanagari": "अर्जुन उवाच ।\nएवं सततयुक्ता ये भक्तास्त्वां पर्युपासते\nये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः ॥ १२.१ ॥",
    "verse_text": "arjuna uvāca\nevaṁ satata-yuktā ye\nbhaktās tvāṁ paryupāsate\nye cāpy akṣaram avyaktaṁ\nteṣāṁ ke yoga-vittamāḥ",
    "verse_text_no_samdhis": "arjunaḥ uvāca evam satata yuktāḥ ye bhaktāḥ tvām paryupāsate ye ca api akṣaram avyaktam teṣām ke yoga vit tamāḥ"
  },
  {
    "id": 469,
    "title": 12.2,
    "devanagari": "श्रीभगवानुवाच ।\nमय्यावेश्य मनो ये मां नित्ययुक्ता उपासते\nश्रद्धया परयोपेतास्ते मे युक्ततमा मताः ॥ १२.२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nmayy āveśya mano ye māṁ\nnitya-yuktā upāsate\nśraddhayā parayopetās\nte me yukta-tamā matāḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca mayi āveśya manaḥ ye mām nitya yuktāḥ upāsate śraddhayā parayā upetāḥ te me yukta tamāḥ matāḥ"
  },
  {
    "id": 470,
    "title": 12.3,
    "devanagari": "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते ।\nसर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम् ॥ १२.३ ॥",
    "verse_text": "ye tv akṣaram anirdeśyam\navyaktaṁ paryupāsate\nsarvatra-gam acintyaṁ ca\nkūṭa-stham acalaṁ dhruvam",
    "verse_text_no_samdhis": "ye tu akṣaram anirdeśyam avyaktam paryupāsate sarvatra gam acintyam ca kūṭa stham acalam dhruvam"
  },
  {
    "id": 471,
    "title": 12.4,
    "devanagari": "संनियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः ।\nते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः ॥ १२.४ ॥",
    "verse_text": "sanniyamyendriya-grāmaṁ\nsarvatra sama-buddhayaḥ\nte prāpnuvanti mām eva\nsarva-bhūta-hite ratāḥ",
    "verse_text_no_samdhis": "sanniyamya indriya grāmam sarvatra sama buddhayaḥ te prāpnuvanti mām eva sarva bhūta hite ratāḥ"
  },
  {
    "id": 472,
    "title": 12.5,
    "devanagari": "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम् ।\nअव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते ॥ १२.५ ॥",
    "verse_text": "kleśo ’dhika-taras teṣām\navyaktāsakta-cetasām\navyaktā hi gatir duḥkhaṁ\ndehavadbhir avāpyate",
    "verse_text_no_samdhis": "kleśaḥ adhika taraḥ teṣām avyakta āsakta cetasām avyaktā hi gatiḥ duḥkham deha vadbhiḥ avāpyate"
  },
  {
    "id": 473,
    "title": 12.6,
    "devanagari": "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः ।\nअनन्येनैव योगेन मां ध्यायन्त उपासते ॥ १२.६ ॥",
    "verse_text": "ye tu sarvāṇi karmāṇi\nmayi sannyasya mat-parāḥ\nananyenaiva yogena\nmāṁ dhyāyanta upāsate",
    "verse_text_no_samdhis": "ye tu sarvāṇi karmāṇi mayi sannyasya mat parāḥ ananyena eva yogena mām dhyāyantaḥ upāsate"
  },
  {
    "id": 474,
    "title": 12.7,
    "devanagari": "तेषामहं समुद्धर्ता मृत्युसंसारसागरात् ।\nभवामि न चिरात्पार्थ मय्यावेशितचेतसाम् ॥ १२.७ ॥",
    "verse_text": "teṣām ahaṁ samuddhartā\nmṛtyu-saṁsāra-sāgarāt\nbhavāmi na cirāt pārtha\nmayy āveśita-cetasām",
    "verse_text_no_samdhis": "teṣām aham samuddhartā mṛtyu saṁsāra sāgarāt bhavāmi na cirāt pārtha mayi āveśita cetasām"
  },
  {
    "id": 475,
    "title": 12.8,
    "devanagari": "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय ।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ॥ १२.८ ॥",
    "verse_text": "mayy eva mana ādhatsva\nmayi buddhiṁ niveśaya\nnivasiṣyasi mayy eva\nata ūrdhvaṁ na saṁśayaḥ",
    "verse_text_no_samdhis": "mayi eva manaḥ ādhatsva mayi buddhim niveśaya nivasiṣyasi mayi eva ataḥ ūrdhvam na saṁśayaḥ"
  },
  {
    "id": 476,
    "title": 12.9,
    "devanagari": "अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम् ।\nअभ्यासयोगेन ततो मामिच्छाप्तुं धनंजय ॥ १२.९ ॥",
    "verse_text": "atha cittaṁ samādhātuṁ\nna śaknoṣi mayi sthiram\nabhyāsa-yogena tato\nmām icchāptuṁ dhanañ-jaya",
    "verse_text_no_samdhis": "atha cittam samādhātum na śaknoṣi mayi sthiram abhyāsa yogena tataḥ mām icchā āptum dhanam jaya"
  },
  {
    "id": 477,
    "title": 12.1,
    "devanagari": "अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव ।\nमदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि ॥ १२.१० ॥",
    "verse_text": "abhyāse ’py asamartho ’si\nmat-karma-paramo bhava\nmad-artham api karmāṇi\nkurvan siddhim avāpsyasi",
    "verse_text_no_samdhis": "abhyāse api asamarthaḥ asi mat karma paramaḥ bhava mat artham api karmāṇi kurvan siddhim avāpsyasi"
  },
  {
    "id": 478,
    "title": 12.11,
    "devanagari": "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः ।\nसर्वकर्मफलत्यागं ततः कुरु यतात्मवान् ॥ १२.११ ॥",
    "verse_text": "athaitad apy aśakto ’si\nkartuṁ mad-yogam āśritaḥ\nsarva-karma-phala-tyāgaṁ\ntataḥ kuru yatātmavān",
    "verse_text_no_samdhis": "atha etat api aśaktaḥ asi kartum mat yogam āśritaḥ sarva karma phala tyāgam tataḥ kuru yata ātma vān"
  },
  {
    "id": 479,
    "title": 12.12,
    "devanagari": "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते ।\nध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् ॥ १२.१२ ॥",
    "verse_text": "śreyo hi jñānam abhyāsāj\njñānād dhyānaṁ viśiṣyate\ndhyānāt karma-phala-tyāgas\ntyāgāc chāntir anantaram",
    "verse_text_no_samdhis": "śreyaḥ hi jñānam abhyāsāt jñānāt dhyānam viśiṣyate dhyānāt karma phala tyāgaḥ tyāgāt śāntiḥ anantaram"
  },
  {
    "id": 480,
    "title": 12.13,
    "devanagari": "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहंकारः समदुःखसुखः क्षमी ॥ १२.१३ ॥",
    "verse_text": "adveṣṭā sarva-bhūtānāṁ\nmaitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ\nsama-duḥkha-sukhaḥ kṣamī",
    "verse_text_no_samdhis": "adveṣṭā sarva bhūtānām maitraḥ karuṇaḥ eva ca nirmamaḥ nirahaṅkāraḥ sama duḥkha sukhaḥ kṣamī"
  },
  {
    "id": 481,
    "title": 12.14,
    "devanagari": "संतुष्टः सततं योगी यतात्मा दृढनिश्चयः ।\nमय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥ १२.१४ ॥",
    "verse_text": "santuṣṭaḥ satataṁ yogī\nyatātmā dṛḍha-niścayaḥ\nmayy arpita-mano-buddhir\nyo mad-bhaktaḥ sa me priyaḥ",
    "verse_text_no_samdhis": "santuṣṭaḥ satatam yogī yata ātmā dṛḍha niścayaḥ mayi arpita manaḥ buddhiḥ yaḥ mat bhaktaḥ saḥ me priyaḥ"
  },
  {
    "id": 482,
    "title": 12.15,
    "devanagari": "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः ।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ॥ १२.१५ ॥",
    "verse_text": "yasmān nodvijate loko\nlokān nodvijate ca yaḥ\nharṣāmarṣa-bhayodvegair\nmukto yaḥ sa ca me priyaḥ",
    "verse_text_no_samdhis": "yasmāt na udvijate lokaḥ lokāt na udvijate ca yaḥ harṣa amarṣa bhaya udvegaiḥ muktaḥ yaḥ saḥ ca me priyaḥ"
  },
  {
    "id": 483,
    "title": 12.16,
    "devanagari": "अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः ।\nसर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः ॥ १२.१६ ॥",
    "verse_text": "anapekṣaḥ śucir dakṣa\nudāsīno gata-vyathaḥ\nsarvārambha-parityāgī\nyo mad-bhaktaḥ sa me priyaḥ",
    "verse_text_no_samdhis": "anapekṣaḥ śuciḥ dakṣaḥ udāsīnaḥ gata vyathaḥ sarva ārambha parityāgī yaḥ mat bhaktaḥ saḥ me priyaḥ"
  },
  {
    "id": 484,
    "title": 12.17,
    "devanagari": "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति ।\nशुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः ॥ १२.१७ ॥",
    "verse_text": "yo na hṛṣyati na dveṣṭi\nna śocati na kāṅkṣati\nśubhāśubha-parityāgī\nbhaktimān yaḥ sa me priyaḥ",
    "verse_text_no_samdhis": "yaḥ na hṛṣyati na dveṣṭi na śocati na kāṅkṣati śubha aśubha parityāgī bhakti mān yaḥ saḥ me priyaḥ"
  },
  {
    "id": 485,
    "title": 12.18,
    "devanagari": "समः शत्रौ च मित्रे च तथा मानापमानयोः ।\nशीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः ॥ १२.१८ ॥",
    "verse_text": "samaḥ śatrau ca mitre ca\ntathā mānāpamānayoḥ\nśītoṣṇa-sukha-duḥkheṣu\nsamaḥ saṅga-vivarjitaḥ",
    "verse_text_no_samdhis": "samaḥ śatrau ca mitre ca tathā māna apamānayoḥ śīta uṣṇa sukha duḥkheṣu samaḥ saṅga vivarjitaḥ"
  },
  {
    "id": 486,
    "title": 12.19,
    "devanagari": "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् ।\nअनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः ॥ १२.१९ ॥",
    "verse_text": "tulya-nindā-stutir maunī\nsantuṣṭo yena kenacit\naniketaḥ sthira-matir\nbhaktimān me priyo naraḥ",
    "verse_text_no_samdhis": "tulya nindā stutiḥ maunī santuṣṭaḥ yena kenacit aniketaḥ sthira matiḥ bhakti mān me priyaḥ naraḥ"
  },
  {
    "id": 487,
    "title": 12.2,
    "devanagari": "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते ।\nश्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः ॥ १२.२० ॥",
    "verse_text": "ye tu dharmāmṛtam idaṁ\nyathoktaṁ paryupāsate\nśraddadhānā mat-paramā\nbhaktās te ’tīva me priyāḥ",
    "verse_text_no_samdhis": "ye tu dharma amṛtam idam yathā uktam paryupāsate śraddadhānāḥ mat paramāḥ bhaktāḥ te atīva me priyāḥ"
  },
  {
    "id": 488,
    "title": 13.1,
    "devanagari": "अर्जुन उवाच ।\nप्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च\nएतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव ॥ १३.१ ॥",
    "verse_text": "arjuna uvāca\nprakṛtiṁ puruṣaṁ caiva\nkṣetraṁ kṣetra-jñam eva ca\netad veditum icchāmi\njñānaṁ jñeyaṁ ca keśava",
    "verse_text_no_samdhis": "arjunaḥ uvāca prakṛtim puruṣam ca eva kṣetram kṣetra jñam eva ca etat veditum icchāmi jñānam jñeyam ca keśava"
  },
  {
    "id": 489,
    "title": 13.2,
    "devanagari": "श्रीभगवानुवाच ।\nइदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ॥ १३.२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nidaṁ śarīraṁ kaunteya\nkṣetram ity abhidhīyate\netad yo vetti taṁ prāhuḥ\nkṣetra-jña iti tad-vidaḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca idam śarīram kaunteya kṣetram iti abhidhīyate etat yaḥ vetti tam prāhuḥ kṣetra jñaḥ iti tat vidaḥ"
  },
  {
    "id": 490,
    "title": 13.3,
    "devanagari": "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत ।\nक्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम ॥ १३.३ ॥",
    "verse_text": "kṣetra-jñaṁ cāpi māṁ viddhi\nsarva-kṣetreṣu bhārata\nkṣetra-kṣetrajñayor jñānaṁ\nyat taj jñānaṁ mataṁ mama",
    "verse_text_no_samdhis": "kṣetra jñam ca api mām viddhi sarva kṣetreṣu bhārata kṣetra kṣetra jñayoḥ jñānam yat tat jñānam matam mama"
  },
  {
    "id": 491,
    "title": 13.4,
    "devanagari": "तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत् ।\nस च यो यत्प्रभावश्च तत्समासेन मे शृणु ॥ १३.४ ॥",
    "verse_text": "tat kṣetraṁ yac ca yādṛk ca\nyad-vikāri yataś ca yat\nsa ca yo yat-prabhāvaś ca\ntat samāsena me śṛṇu",
    "verse_text_no_samdhis": "tat kṣetram yat ca yādṛk ca yat vikāri yataḥ ca yat saḥ ca yaḥ yat prabhāvaḥ ca tat samāsena me śṛṇu"
  },
  {
    "id": 492,
    "title": 13.5,
    "devanagari": "ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक् ।\nब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः ॥ १३.५ ॥",
    "verse_text": "ṛṣibhir bahudhā gītaṁ\nchandobhir vividhaiḥ pṛthak\nbrahma-sūtra-padaiś caiva\nhetumadbhir viniścitaiḥ",
    "verse_text_no_samdhis": "ṛṣibhiḥ bahudhā gītam chandobhiḥ vividhaiḥ pṛthak brahma sūtra padaiḥ ca eva hetu madbhiḥ viniścitaiḥ"
  },
  {
    "id": 493,
    "title": 13.6,
    "devanagari": "महाभूतान्यहंकारो बुद्धिरव्यक्तमेव च ।\nइन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः ॥ १३.६ ॥",
    "verse_text": "mahā-bhūtāny ahaṅkāro\nbuddhir avyaktam eva ca\nindriyāṇi daśaikaṁ ca\npañca cendriya-gocarāḥ",
    "verse_text_no_samdhis": "mahā bhūtāni ahaṅkāraḥ buddhiḥ avyaktam eva ca indriyāṇi daśa ekam ca pañca ca indriya go carāḥ"
  },
  {
    "id": 494,
    "title": 13.7,
    "devanagari": "इच्छा द्वेषः सुखं दुःखं संघातश्चेतना धृतिः ।\nएतत्क्षेत्रं समासेन सविकारमुदाहृतम् ॥ १३.७ ॥",
    "verse_text": "icchā dveṣaḥ sukhaṁ duḥkhaṁ\nsaṅghātaś cetanā dhṛtiḥ\netat kṣetraṁ samāsena\nsa-vikāram udāhṛtam",
    "verse_text_no_samdhis": "icchā dveṣaḥ sukham duḥkham saṅghātaḥ cetanā dhṛtiḥ etat kṣetram samāsena sa vikāram udāhṛtam"
  },
  {
    "id": 495,
    "title": 13.8,
    "devanagari": "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् ।\nआचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः ॥ १३.८ ॥",
    "verse_text": "amānitvam adambhitvam\nahiṁsā kṣāntir ārjavam\nācāryopāsanaṁ śaucaṁ\nsthairyam ātma-vinigrahaḥ",
    "verse_text_no_samdhis": "amānitvam adambhitvam ahiṁsā kṣāntiḥ ārjavam ācārya upāsanam śaucam sthairyam ātma vinigrahaḥ"
  },
  {
    "id": 496,
    "title": 13.9,
    "devanagari": "इन्द्रियार्थेषु वैराग्यमनहंकार एव च ।\nजन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम् ॥ १३.९ ॥",
    "verse_text": "indriyārtheṣu vairāgyam\nanahaṅkāra eva ca\njanma-mṛtyu-jarā-vyādhi-\nduḥkha-doṣānudarśanam",
    "verse_text_no_samdhis": "indriya artheṣu vairāgyam anahaṅkāraḥ eva ca janma mṛtyu jarā vyādhi duḥkha doṣa anudarśanam"
  },
  {
    "id": 497,
    "title": 13.1,
    "devanagari": "असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु ।\nनित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु ॥ १३.१० ॥",
    "verse_text": "asaktir anabhiṣvaṅgaḥ\nputra-dāra-gṛhādiṣu\nnityaṁ ca sama-cittatvam\niṣṭāniṣṭopapattiṣu",
    "verse_text_no_samdhis": "asaktiḥ anabhiṣvaṅgaḥ putra dāra gṛha ādiṣu nityam ca sama cittatvam iṣṭa aniṣṭa upapattiṣu"
  },
  {
    "id": 498,
    "title": 13.11,
    "devanagari": "मयि चानन्ययोगेन भक्तिरव्यभिचारिणी ।\nविविक्तदेशसेवित्वमरतिर्जनसंसदि ॥ १३.११ ॥",
    "verse_text": "mayi cānanya-yogena\nbhaktir avyabhicāriṇī\nvivikta-deśa-sevitvam\naratir jana-saṁsadi",
    "verse_text_no_samdhis": "mayi ca ananya yogena bhaktiḥ avyabhicāriṇī vivikta deśa sevitvam aratiḥ jana saṁsadi"
  },
  {
    "id": 499,
    "title": 13.12,
    "devanagari": "अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम् ।\nएतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा ॥ १३.१२ ॥",
    "verse_text": "adhyātma-jñāna-nityatvaṁ\ntattva-jñānārtha-darśanam\netaj jñānam iti proktam\najñānaṁ yad ato ’nyathā",
    "verse_text_no_samdhis": "adhyātma jñāna nityatvam tattva jñāna artha darśanam etat jñānam iti proktam ajñānam yat ataḥ anyathā"
  },
  {
    "id": 500,
    "title": 13.13,
    "devanagari": "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते ।\nअनादि मत्परं ब्रह्म न सत्तन्नासदुच्यते ॥ १३.१३ ॥",
    "verse_text": "jñeyaṁ yat tat pravakṣyāmi\nyaj jñātvāmṛtam aśnute\nanādi mat-paraṁ brahma\nna sat tan nāsad ucyate",
    "verse_text_no_samdhis": "jñeyam yat tat pravakṣyāmi yat jñātvā amṛtam aśnute anādi mat param brahma na sat tat na asat ucyate"
  },
  {
    "id": 501,
    "title": 13.14,
    "devanagari": "सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम् ।\nसर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति ॥ १३.१४ ॥",
    "verse_text": "sarvataḥ pāṇi-pādaṁ tat\nsarvato ’kṣi-śiro-mukham\nsarvataḥ śrutimal loke\nsarvam āvṛtya tiṣṭhati",
    "verse_text_no_samdhis": "sarvataḥ pāṇi pādam tat sarvataḥ akṣi śiraḥ mukham sarvataḥ śruti mat loke sarvam āvṛtya tiṣṭhati"
  },
  {
    "id": 502,
    "title": 13.15,
    "devanagari": "सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम् ।\nअसक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च ॥ १३.१५ ॥",
    "verse_text": "sarvendriya-guṇābhāsaṁ\nsarvendriya-vivarjitam\nasaktaṁ sarva-bhṛc caiva\nnirguṇaṁ guṇa-bhoktṛ ca",
    "verse_text_no_samdhis": "sarva indriya guṇa ābhāsam sarva indriya vivarjitam asaktam sarva bhṛt ca eva nirguṇam guṇa bhoktṛ ca"
  },
  {
    "id": 503,
    "title": 13.16,
    "devanagari": "बहिरन्तश्च भूतानामचरं चरमेव च ।\nसूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ॥ १३.१६ ॥",
    "verse_text": "bahir antaś ca bhūtānām\nacaraṁ caram eva ca\nsūkṣmatvāt tad avijñeyaṁ\ndūra-sthaṁ cāntike ca tat",
    "verse_text_no_samdhis": "bahiḥ antaḥ ca bhūtānām acaram caram eva ca sūkṣmatvāt tat avijñeyam dūra stham ca antike ca tat"
  },
  {
    "id": 504,
    "title": 13.17,
    "devanagari": "अविभक्तं च भूतेषु विभक्तमिव च स्थितम् ।\nभूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च ॥ १३.१७ ॥",
    "verse_text": "avibhaktaṁ ca bhūteṣu\nvibhaktam iva ca sthitam\nbhūta-bhartṛ ca taj jñeyaṁ\ngrasiṣṇu prabhaviṣṇu ca",
    "verse_text_no_samdhis": "avibhaktam ca bhūteṣu vibhaktam iva ca sthitam bhūta bhartṛ ca tat jñeyam grasiṣṇu prabhaviṣṇu ca"
  },
  {
    "id": 505,
    "title": 13.18,
    "devanagari": "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते ।\nज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम् ॥ १३.१८ ॥",
    "verse_text": "jyotiṣām api taj jyotis\ntamasaḥ param ucyate\njñānaṁ jñeyaṁ jñāna-gamyaṁ\nhṛdi sarvasya viṣṭhitam",
    "verse_text_no_samdhis": "jyotiṣām api tat jyotiḥ tamasaḥ param ucyate jñānam jñeyam jñāna gamyam hṛdi sarvasya viṣṭhitam"
  },
  {
    "id": 506,
    "title": 13.19,
    "devanagari": "इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः ।\nमद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते ॥ १३.१९ ॥",
    "verse_text": "iti kṣetraṁ tathā jñānaṁ\njñeyaṁ coktaṁ samāsataḥ\nmad-bhakta etad vijñāya\nmad-bhāvāyopapadyate",
    "verse_text_no_samdhis": "iti kṣetram tathā jñānam jñeyam ca uktam samāsataḥ mat bhaktaḥ etat vijñāya mat bhāvāya upapadyate"
  },
  {
    "id": 507,
    "title": 13.2,
    "devanagari": "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि ।\nविकारांश्च गुणांश्चैव विद्धि प्रकृतिसंभवान् ॥ १३.२० ॥",
    "verse_text": "prakṛtiṁ puruṣaṁ caiva\nviddhy anādī ubhāv api\nvikārāṁś ca guṇāṁś caiva\nviddhi prakṛti-sambhavān",
    "verse_text_no_samdhis": "prakṛtim puruṣam ca eva viddhi anādī ubhau api vikārān ca guṇān ca eva viddhi prakṛti sambhavān"
  },
  {
    "id": 508,
    "title": 13.21,
    "devanagari": "कार्यकरणकर्तृत्वे हेतुः प्रकृतिरुच्यते ।\nपुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते ॥ १३.२१ ॥",
    "verse_text": "kārya-kāraṇa-kartṛtve\nhetuḥ prakṛtir ucyate\npuruṣaḥ sukha-duḥkhānāṁ\nbhoktṛtve hetur ucyate",
    "verse_text_no_samdhis": "kārya kāraṇa kartṛtve hetuḥ prakṛtiḥ ucyate puruṣaḥ sukha duḥkhānām bhoktṛtve hetuḥ ucyate"
  },
  {
    "id": 509,
    "title": 13.22,
    "devanagari": "पुरुषः प्रकृतिस्थो हि भुङ्\\u200cक्ते प्रकृतिजान्गुणान् ।\nकारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु ॥ १३.२२ ॥",
    "verse_text": "puruṣaḥ prakṛti-stho hi\nbhuṅkte prakṛti-jān guṇān\nkāraṇaṁ guṇa-saṅgo ’sya\nsad-asad-yoni-janmasu",
    "verse_text_no_samdhis": "puruṣaḥ prakṛti sthaḥ hi bhuṅkte prakṛti jān guṇān kāraṇam guṇa saṅgaḥ asya sat asat yoni janmasu"
  },
  {
    "id": 510,
    "title": 13.23,
    "devanagari": "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः ।\nपरमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः ॥ १३.२३ ॥",
    "verse_text": "upadraṣṭānumantā ca\nbhartā bhoktā maheśvaraḥ\nparamātmeti cāpy ukto\ndehe ’smin puruṣaḥ paraḥ",
    "verse_text_no_samdhis": "upadraṣṭā anumantā ca bhartā bhoktā mahā īśvaraḥ parama ātmā iti ca api uktaḥ dehe asmin puruṣaḥ paraḥ"
  },
  {
    "id": 511,
    "title": 13.24,
    "devanagari": "य एवं वेत्ति पुरुषं प्रकृतिं च गुणैः सह ।\nसर्वथा वर्तमानोऽपि न स भूयोऽभिजायते ॥ १३.२४ ॥",
    "verse_text": "ya evaṁ vetti puruṣaṁ\nprakṛtiṁ ca guṇaiḥ saha\nsarvathā vartamāno ’pi\nna sa bhūyo ’bhijāyate",
    "verse_text_no_samdhis": "yaḥ evam vetti puruṣam prakṛtim ca guṇaiḥ saha sarvathā vartamānaḥ api na saḥ bhūyaḥ abhijāyate"
  },
  {
    "id": 512,
    "title": 13.25,
    "devanagari": "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना ।\nअन्ये सांख्येन योगेन कर्मयोगेन चापरे ॥ १३.२५ ॥",
    "verse_text": "dhyānenātmani paśyanti\nkecid ātmānam ātmanā\nanye sāṅkhyena yogena\nkarma-yogena cāpare",
    "verse_text_no_samdhis": "dhyānena ātmani paśyanti kecit ātmānam ātmanā anye sāṅkhyena yogena karma yogena ca apare"
  },
  {
    "id": 513,
    "title": 13.26,
    "devanagari": "अन्ये त्वेवमजानन्तः श्रुत्वान्येभ्य उपासते ।\nतेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः ॥ १३.२६ ॥",
    "verse_text": "anye tv evam ajānantaḥ\nśrutvānyebhya upāsate\nte ’pi cātitaranty eva\nmṛtyuṁ śruti-parāyaṇāḥ",
    "verse_text_no_samdhis": "anye tu evam ajānantaḥ śrutvā anyebhyaḥ upāsate te api ca atitaranti eva mṛtyum śruti parāyaṇāḥ"
  },
  {
    "id": 514,
    "title": 13.27,
    "devanagari": "यावत्संजायते किंचित्सत्त्वं स्थावरजङ्गमम् ।\nक्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ ॥ १३.२७ ॥",
    "verse_text": "yāvat sañjāyate kiñcit\nsattvaṁ sthāvara-jaṅgamam\nkṣetra-kṣetrajña-saṁyogāt\ntad viddhi bharatarṣabha",
    "verse_text_no_samdhis": "yāvat sañjāyate kiñcit sattvam sthāvara jaṅgamam kṣetra kṣetra jña saṁyogāt tat viddhi bharata ṛṣabha"
  },
  {
    "id": 515,
    "title": 13.28,
    "devanagari": "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम् ।\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति ॥ १३.२८ ॥",
    "verse_text": "samaṁ sarveṣu bhūteṣu\ntiṣṭhantaṁ parameśvaram\nvinaśyatsv avinaśyantaṁ\nyaḥ paśyati sa paśyati",
    "verse_text_no_samdhis": "samam sarveṣu bhūteṣu tiṣṭhan tam parama īśvaram vinaśyatsu avinaśyantam yaḥ paśyati saḥ paśyati"
  },
  {
    "id": 516,
    "title": 13.29,
    "devanagari": "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम् ।\nन हिनस्त्यात्मनात्मानं ततो याति परां गतिम् ॥ १३.२९ ॥",
    "verse_text": "samaṁ paśyan hi sarvatra\nsamavasthitam īśvaram\nna hinasty ātmanātmānaṁ\ntato yāti parāṁ gatim",
    "verse_text_no_samdhis": "samam paśyan hi sarvatra samavasthitam īśvaram na hinasti ātmanā ātmānam tataḥ yāti parām gatim"
  },
  {
    "id": 517,
    "title": 13.3,
    "devanagari": "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः ।\nयः पश्यति तथात्मानमकर्तारं स पश्यति ॥ १३.३० ॥",
    "verse_text": "prakṛtyaiva ca karmāṇi\nkriyamāṇāni sarvaśaḥ\nyaḥ paśyati tathātmānam\nakartāraṁ sa paśyati",
    "verse_text_no_samdhis": "prakṛtyā eva ca karmāṇi kriyamāṇāni sarvaśaḥ yaḥ paśyati tathā ātmānam akartāram saḥ paśyati"
  },
  {
    "id": 518,
    "title": 13.31,
    "devanagari": "यदा भूतपृथग्भावमेकस्थमनुपश्यति ।\nतत एव च विस्तारं ब्रह्म संपद्यते तदा ॥ १३.३१ ॥",
    "verse_text": "yadā bhūta-pṛthag-bhāvam\neka-stham anupaśyati\ntata eva ca vistāraṁ\nbrahma sampadyate tadā",
    "verse_text_no_samdhis": "yadā bhūta pṛthak bhāvam eka stham anupaśyati tataḥ eva ca vistāram brahma sampadyate tadā"
  },
  {
    "id": 519,
    "title": 13.32,
    "devanagari": "अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः ।\nशरीरस्थोऽपि कौन्तेय न करोति न लिप्यते ॥ १३.३२ ॥",
    "verse_text": "anāditvān nirguṇatvāt\nparamātmāyam avyayaḥ\nśarīra-stho ’pi kaunteya\nna karoti na lipyate",
    "verse_text_no_samdhis": "anāditvāt nirguṇatvāt parama ātmā ayam avyayaḥ śarīra sthaḥ api kaunteya na karoti na lipyate"
  },
  {
    "id": 520,
    "title": 13.33,
    "devanagari": "यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते ।\nसर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते ॥ १३.३३ ॥",
    "verse_text": "yathā sarva-gataṁ saukṣmyād\nākāśaṁ nopalipyate\nsarvatrāvasthito dehe\ntathātmā nopalipyate",
    "verse_text_no_samdhis": "yathā sarva gatam saukṣmyāt ākāśam na upalipyate sarvatra avasthitaḥ dehe tathā ātmā na upalipyate"
  },
  {
    "id": 521,
    "title": 13.34,
    "devanagari": "यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः ।\nक्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत ॥ १३.३४ ॥",
    "verse_text": "yathā prakāśayaty ekaḥ\nkṛtsnaṁ lokam imaṁ raviḥ\nkṣetraṁ kṣetrī tathā kṛtsnaṁ\nprakāśayati bhārata",
    "verse_text_no_samdhis": "yathā prakāśayati ekaḥ kṛtsnam lokam imam raviḥ kṣetram kṣetrī tathā kṛtsnam prakāśayati bhārata"
  },
  {
    "id": 522,
    "title": 13.35,
    "devanagari": "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा ।\nभूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम् ॥ १३.३५ ॥",
    "verse_text": "kṣetra-kṣetrajñayor evam\nantaraṁ jñāna-cakṣuṣā\nbhūta-prakṛti-mokṣaṁ ca\nye vidur yānti te param",
    "verse_text_no_samdhis": "kṣetra kṣetra jñayoḥ evam antaram jñāna cakṣuṣā bhūta prakṛti mokṣam ca ye viduḥ yānti te param"
  },
  {
    "id": 523,
    "title": 14.1,
    "devanagari": "श्रीभगवानुवाच ।\nपरं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम्\nयज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः ॥ १४.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nparaṁ bhūyaḥ pravakṣyāmi\njñānānāṁ jñānam uttamam\nyaj jñātvā munayaḥ sarve\nparāṁ siddhim ito gatāḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca param bhūyaḥ pravakṣyāmi jñānānām jñānam uttamam yat jñātvā munayaḥ sarve parām siddhim itaḥ gatāḥ"
  },
  {
    "id": 524,
    "title": 14.2,
    "devanagari": "इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः ।\nसर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च ॥ १४.२ ॥",
    "verse_text": "idaṁ jñānam upāśritya\nmama sādharmyam āgatāḥ\nsarge ’pi nopajāyante\npralaye na vyathanti ca",
    "verse_text_no_samdhis": "idam jñānam upāśritya mama sādharmyam āgatāḥ sarge api na upajāyante pralaye na vyathanti ca"
  },
  {
    "id": 525,
    "title": 14.3,
    "devanagari": "मम योनिर्महद्ब्रह्म तस्मिन्गर्भं दधाम्यहम् ।\nसंभवः सर्वभूतानां ततो भवति भारत ॥ १४.३ ॥",
    "verse_text": "mama yonir mahad brahma\ntasmin garbhaṁ dadhāmy aham\nsambhavaḥ sarva-bhūtānāṁ\ntato bhavati bhārata",
    "verse_text_no_samdhis": "mama yoniḥ mahat brahma tasmin garbham dadhāmi aham sambhavaḥ sarva bhūtānām tataḥ bhavati bhārata"
  },
  {
    "id": 526,
    "title": 14.4,
    "devanagari": "सर्वयोनिषु कौन्तेय मूर्तयः संभवन्ति याः ।\nतासां ब्रह्म महद्योनिरहं बीजप्रदः पिता ॥ १४.४ ॥",
    "verse_text": "sarva-yoniṣu kaunteya\nmūrtayaḥ sambhavanti yāḥ\ntāsāṁ brahma mahad yonir\nahaṁ bīja-pradaḥ pitā",
    "verse_text_no_samdhis": "sarva yoniṣu kaunteya mūrtayaḥ sambhavanti yāḥ tāsām brahma mahat yoniḥ aham bīja pradaḥ pitā"
  },
  {
    "id": 527,
    "title": 14.5,
    "devanagari": "सत्त्वं रजस्तम इति गुणाः प्रकृतिसंभवाः ।\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम् ॥ १४.५ ॥",
    "verse_text": "sattvaṁ rajas tama iti\nguṇāḥ prakṛti-sambhavāḥ\nnibadhnanti mahā-bāho\ndehe dehinam avyayam",
    "verse_text_no_samdhis": "sattvam rajaḥ tamaḥ iti guṇāḥ prakṛti sambhavāḥ nibadhnanti mahā bāho dehe dehinam avyayam"
  },
  {
    "id": 528,
    "title": 14.6,
    "devanagari": "तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम् ।\nसुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ ॥ १४.६ ॥",
    "verse_text": "tatra sattvaṁ nirmalatvāt\nprakāśakam anāmayam\nsukha-saṅgena badhnāti\njñāna-saṅgena cānagha",
    "verse_text_no_samdhis": "tatra sattvam nirmalatvāt prakāśakam anāmayam sukha saṅgena badhnāti jñāna saṅgena ca anagha"
  },
  {
    "id": 529,
    "title": 14.7,
    "devanagari": "रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम् ।\nतन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम् ॥ १४.७ ॥",
    "verse_text": "rajo rāgātmakaṁ viddhi\ntṛṣṇā-saṅga-samudbhavam\ntan nibadhnāti kaunteya\nkarma-saṅgena dehinam",
    "verse_text_no_samdhis": "rajaḥ rāga ātmakam viddhi tṛṣṇā saṅga samudbhavam tat nibadhnāti kaunteya karma saṅgena dehinam"
  },
  {
    "id": 530,
    "title": 14.8,
    "devanagari": "तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम् ।\nप्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत ॥ १४.८ ॥",
    "verse_text": "tamas tv ajñāna-jaṁ viddhi\nmohanaṁ sarva-dehinām\npramādālasya-nidrābhis\ntan nibadhnāti bhārata",
    "verse_text_no_samdhis": "tamaḥ tu ajñāna jam viddhi mohanam sarva dehinām pramāda ālasya nidrābhiḥ tat nibadhnāti bhārata"
  },
  {
    "id": 531,
    "title": 14.9,
    "devanagari": "सत्त्वं सुखे संजयति रजः कर्मणि भारत ।\nज्ञानमावृत्य तु तमः प्रमादे संजयत्युत ॥ १४.९ ॥",
    "verse_text": "sattvaṁ sukhe sañjayati\nrajaḥ karmaṇi bhārata\njñānam āvṛtya tu tamaḥ\npramāde sañjayaty uta",
    "verse_text_no_samdhis": "sattvam sukhe sañjayati rajaḥ karmaṇi bhārata jñānam āvṛtya tu tamaḥ pramāde sañjayati uta"
  },
  {
    "id": 532,
    "title": 14.1,
    "devanagari": "रजस्तमश्चाभिभूय सत्त्वं भवति भारत ।\nरजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा ॥ १४.१० ॥",
    "verse_text": "rajas tamaś cābhibhūya\nsattvaṁ bhavati bhārata\nrajaḥ sattvaṁ tamaś caiva\ntamaḥ sattvaṁ rajas tathā",
    "verse_text_no_samdhis": "rajaḥ tamaḥ ca abhibhūya sattvam bhavati bhārata rajaḥ sattvam tamaḥ ca eva tamaḥ sattvam rajaḥ tathā"
  },
  {
    "id": 533,
    "title": 14.11,
    "devanagari": "सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते ।\nज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत ॥ १४.११ ॥",
    "verse_text": "sarva-dvāreṣu dehe ’smin\nprakāśa upajāyate\njñānaṁ yadā tadā vidyād\nvivṛddhaṁ sattvam ity uta",
    "verse_text_no_samdhis": "sarva dvāreṣu dehe asmin prakāśaḥ upajāyate jñānam yadā tadā vidyāt vivṛddham sattvam iti uta"
  },
  {
    "id": 534,
    "title": 14.12,
    "devanagari": "लोभः प्रवृत्तिरारम्भः कर्मणामशमः स्पृहा ।\nरजस्येतानि जायन्ते विवृद्धे भरतर्षभ ॥ १४.१२ ॥",
    "verse_text": "lobhaḥ pravṛttir ārambhaḥ\nkarmaṇām aśamaḥ spṛhā\nrajasy etāni jāyante\nvivṛddhe bharatarṣabha",
    "verse_text_no_samdhis": "lobhaḥ pravṛttiḥ ārambhaḥ karmaṇām aśamaḥ spṛhā rajasi etāni jāyante vivṛddhe bharata ṛṣabha"
  },
  {
    "id": 535,
    "title": 14.13,
    "devanagari": "अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च ।\nतमस्येतानि जायन्ते विवृद्धे कुरुनन्दन ॥ १४.१३ ॥",
    "verse_text": "aprakāśo ’pravṛttiś ca\npramādo moha eva ca\ntamasy etāni jāyante\nvivṛddhe kuru-nandana",
    "verse_text_no_samdhis": "aprakāśaḥ apravṛttiḥ ca pramādaḥ mohaḥ eva ca tamasi etāni jāyante vivṛddhe kuru nandana"
  },
  {
    "id": 536,
    "title": 14.14,
    "devanagari": "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत् ।\nतदोत्तमविदां लोकानमलान्प्रतिपद्यते ॥ १४.१४ ॥",
    "verse_text": "yadā sattve pravṛddhe tu\npralayaṁ yāti deha-bhṛt\ntadottama-vidāṁ lokān\namalān pratipadyate",
    "verse_text_no_samdhis": "yadā sattve pravṛddhe tu pralayam yāti deha bhṛt tadā uttama vidām lokān amalān pratipadyate"
  },
  {
    "id": 537,
    "title": 14.15,
    "devanagari": "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते ।\nतथा प्रलीनस्तमसि मूढयोनिषु जायते ॥ १४.१५ ॥",
    "verse_text": "rajasi pralayaṁ gatvā\nkarma-saṅgiṣu jāyate\ntathā pralīnas tamasi\nmūḍha-yoniṣu jāyate",
    "verse_text_no_samdhis": "rajasi pralayam gatvā karma saṅgiṣu jāyate tathā pralīnaḥ tamasi mūḍha yoniṣu jāyate"
  },
  {
    "id": 538,
    "title": 14.16,
    "devanagari": "कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम् ।\nरजसस्तु फलं दुःखमज्ञानं तमसः फलम् ॥ १४.१६ ॥",
    "verse_text": "karmaṇaḥ sukṛtasyāhuḥ\nsāttvikaṁ nirmalaṁ phalam\nrajasas tu phalaṁ duḥkham\najñānaṁ tamasaḥ phalam",
    "verse_text_no_samdhis": "karmaṇaḥ su kṛtasya āhuḥ sāttvikam nirmalam phalam rajasaḥ tu phalam duḥkham ajñānam tamasaḥ phalam"
  },
  {
    "id": 539,
    "title": 14.17,
    "devanagari": "सत्त्वात्संजायते ज्ञानं रजसो लोभ एव च ।\nप्रमादमोहौ तमसो भवतोऽज्ञानमेव च ॥ १४.१७ ॥",
    "verse_text": "sattvāt sañjāyate jñānaṁ\nrajaso lobha eva ca\npramāda-mohau tamaso\nbhavato ’jñānam eva ca",
    "verse_text_no_samdhis": "sattvāt sañjāyate jñānam rajasaḥ lobhaḥ eva ca pramāda mohau tamasaḥ bhavataḥ ajñānam eva ca"
  },
  {
    "id": 540,
    "title": 14.18,
    "devanagari": "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः ।\nजघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः ॥ १४.१८ ॥",
    "verse_text": "ūrdhvaṁ gacchanti sattva-sthā\nmadhye tiṣṭhanti rājasāḥ\njaghanya-guṇa-vṛtti-sthā\nadho gacchanti tāmasāḥ",
    "verse_text_no_samdhis": "ūrdhvam gacchanti sattva sthāḥ madhye tiṣṭhanti rājasāḥ jaghanya guṇa vṛtti sthāḥ adhaḥ gacchanti tāmasāḥ"
  },
  {
    "id": 541,
    "title": 14.19,
    "devanagari": "नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति ।\nगुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति ॥ १४.१९ ॥",
    "verse_text": "nānyaṁ guṇebhyaḥ kartāraṁ\nyadā draṣṭānupaśyati\nguṇebhyaś ca paraṁ vetti\nmad-bhāvaṁ so ’dhigacchati",
    "verse_text_no_samdhis": "na anyam guṇebhyaḥ kartāram yadā draṣṭā anupaśyati guṇebhyaḥ ca param vetti mat bhāvam saḥ adhigacchati"
  },
  {
    "id": 542,
    "title": 14.2,
    "devanagari": "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान् ।\nजन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते ॥ १४.२० ॥",
    "verse_text": "guṇān etān atītya trīn\ndehī deha-samudbhavān\njanma-mṛtyu-jarā-duḥkhair\nvimukto ’mṛtam aśnute",
    "verse_text_no_samdhis": "guṇān etān atītya trīn dehī deha samudbhavān janma mṛtyu jarā duḥkhaiḥ vimuktaḥ amṛtam aśnute"
  },
  {
    "id": 543,
    "title": 14.21,
    "devanagari": "अर्जुन उवाच ।\nकैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो\nकिमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते ॥ १४.२१ ॥",
    "verse_text": "arjuna uvāca\nkair liṅgais trīn guṇān etān\natīto bhavati prabho\nkim-ācāraḥ kathaṁ caitāṁs\ntrīn guṇān ativartate",
    "verse_text_no_samdhis": "arjunaḥ uvāca kaiḥ liṅgaiḥ trīn guṇān etān atītaḥ bhavati prabho kim ācāraḥ katham ca etān trīn guṇān ativartate"
  },
  {
    "id": 544,
    "title": 14.22,
    "devanagari": "श्रीभगवानुवाच ।\nप्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव\nन द्वेष्टि संप्रवृत्तानि न निवृत्तानि काङ्क्षति ॥ १४.२२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nprakāśaṁ ca pravṛttiṁ ca\nmoham eva ca pāṇḍava\nna dveṣṭi sampravṛttāni\nna nivṛttāni kāṅkṣati",
    "verse_text_no_samdhis": "śrī bhagavān uvāca prakāśam ca pravṛttim ca moham eva ca pāṇḍava na dveṣṭi sampravṛttāni na nivṛttāni kāṅkṣati"
  },
  {
    "id": 545,
    "title": 14.23,
    "devanagari": "उदासीनवदासीनो गुणैर्यो न विचाल्यते ।\nगुणा वर्तन्त इत्येव योऽवतिष्ठति नेङ्गते ॥ १४.२३ ॥",
    "verse_text": "udāsīna-vad āsīno\nguṇair yo na vicālyate\nguṇā vartanta ity evaṁ\nyo ’vatiṣṭhati neṅgate",
    "verse_text_no_samdhis": "udāsīna vat āsīnaḥ guṇaiḥ yaḥ na vicālyate guṇāḥ vartante iti evam yaḥ avatiṣṭhati na iṅgate"
  },
  {
    "id": 546,
    "title": 14.24,
    "devanagari": "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः ।\nतुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः ॥ १४.२४ ॥",
    "verse_text": "sama-duḥkha-sukhaḥ sva-sthaḥ\nsama-loṣṭāśma-kāñcanaḥ\ntulya-priyāpriyo dhīras\ntulya-nindātma-saṁstutiḥ",
    "verse_text_no_samdhis": "sama duḥkha sukhaḥ sva sthaḥ sama loṣṭa aśma kāñcanaḥ tulya priya apriyaḥ dhīraḥ tulya nindā ātma saṁstutiḥ"
  },
  {
    "id": 547,
    "title": 14.25,
    "devanagari": "मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः ।\nसर्वारम्भपरित्यागी गुणातीतः स उच्यते ॥ १४.२५ ॥",
    "verse_text": "mānāpamānayos tulyas\ntulyo mitrāri-pakṣayoḥ\nsarvārambha-parityāgī\nguṇātītaḥ sa ucyate",
    "verse_text_no_samdhis": "māna apamānayoḥ tulyaḥ tulyaḥ mitra ari pakṣayoḥ sarva ārambha parityāgī guṇa atītaḥ saḥ ucyate"
  },
  {
    "id": 548,
    "title": 14.26,
    "devanagari": "मां च योऽव्यभिचारेण भक्तियोगेन सेवते ।\nस गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ॥ १४.२६ ॥",
    "verse_text": "māṁ ca yo ’vyabhicāreṇa\nbhakti-yogena sevate\nsa guṇān samatītyaitān\nbrahma-bhūyāya kalpate",
    "verse_text_no_samdhis": "mām ca yaḥ avyabhicāreṇa bhakti yogena sevate saḥ guṇān samatītya etān brahma bhūyāya kalpate"
  },
  {
    "id": 549,
    "title": 14.27,
    "devanagari": "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च ।\nशाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च ॥ १४.२७ ॥",
    "verse_text": "brahmaṇo hi pratiṣṭhāham\namṛtasyāvyayasya ca\nśāśvatasya ca dharmasya\nsukhasyaikāntikasya ca",
    "verse_text_no_samdhis": "brahmaṇaḥ hi pratiṣṭhā aham amṛtasya avyayasya ca śāśvatasya ca dharmasya sukhasya aikāntikasya ca"
  },
  {
    "id": 550,
    "title": 15.1,
    "devanagari": "श्रीभगवानुवाच ।\nऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् ॥ १५.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nūrdhva-mūlam adhaḥ-śākham\naśvatthaṁ prāhur avyayam\nchandāṁsi yasya parṇāni\nyas taṁ veda sa veda-vit",
    "verse_text_no_samdhis": "śrī bhagavān uvāca ūrdhva mūlam adhaḥ śākham aśvattham prāhuḥ avyayam chandāṁsi yasya parṇāni yaḥ tam veda saḥ veda vit"
  },
  {
    "id": 551,
    "title": 15.2,
    "devanagari": "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा\nगुणप्रवृद्धा विषयप्रवालाः ।\nअधश्च मूलान्यनुसंततानि\nकर्मानुबन्धीनि मनुष्यलोके ॥ १५.२ ॥",
    "verse_text": "adhaś cordhvaṁ prasṛtās tasya śākhā\nguṇa-pravṛddhā viṣaya-pravālāḥ\nadhaś ca mūlāny anusantatāni\nkarmānubandhīni manuṣya-loke",
    "verse_text_no_samdhis": "adhaḥ ca ūrdhvam prasṛtāḥ tasya śākhāḥ guṇa pravṛddhāḥ viṣaya pravālāḥ adhaḥ ca mūlāni anusantatāni karma anubandhīni manuṣya loke"
  },
  {
    "id": 552,
    "title": 15.3,
    "devanagari": "न रूपमस्येह तथोपलभ्यते\nनान्तो न चादिर्न च संप्रतिष्ठा ।\nअश्वत्थमेनं सुविरूढमूल-\nमसङ्गशस्त्रेण दृढेन छित्त्वा ॥ १५.३ ॥",
    "verse_text": "na rūpam asyeha tathopalabhyate\nnānto na cādir na ca sampratiṣṭhā\naśvattham enaṁ su-virūḍha-mūlam\nasaṅga-śastreṇa dṛḍhena chittvā",
    "verse_text_no_samdhis": "na rūpam asya iha tathā upalabhyate na antaḥ na ca ādiḥ na ca sampratiṣṭhā aśvattham enam su virūḍha mūlam asaṅga śastreṇa dṛḍhena chittvā"
  },
  {
    "id": 553,
    "title": 15.4,
    "devanagari": "ततः पदं तत्परिमार्गितव्यं\nयस्मिन्गता न निवर्तन्ति भूयः ।\nतमेव चाद्यं पुरुषं प्रपद्ये\nयतः प्रवृत्तिः प्रसृता पुराणी ॥ १५.४ ॥",
    "verse_text": "tataḥ padaṁ tat parimārgitavyaṁ\nyasmin gatā na nivartanti bhūyaḥ\ntam eva cādyaṁ puruṣaṁ prapadye\nyataḥ pravṛttiḥ prasṛtā purāṇī",
    "verse_text_no_samdhis": "tataḥ padam tat parimārgitavyam yasmin gatāḥ na nivartanti bhūyaḥ tam eva ca ādyam puruṣam prapadye yataḥ pravṛttiḥ prasṛtā purāṇi"
  },
  {
    "id": 554,
    "title": 15.5,
    "devanagari": "निर्मानमोहा जितसङ्गदोषा\nअध्यात्मनित्या विनिवृत्तकामाः ।\nद्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञै-\nर्गच्छन्त्यमूढाः पदमव्ययं तत् ॥ १५.५ ॥",
    "verse_text": "nirmāna-mohā jita-saṅga-doṣā\nadhyātma-nityā vinivṛtta-kāmāḥ\ndvandvair vimuktāḥ sukha-duḥkha-saṁjñair\ngacchanty amūḍhāḥ padam avyayaṁ tat",
    "verse_text_no_samdhis": "niḥ māna mohāḥ jita saṅga doṣāḥ adhyātma nityāḥ vinivṛtta kāmāḥ dvandvaiḥ vimuktāḥ sukha duḥkha saṁjñaiḥ gacchanti amūḍhāḥ padam avyayam tat"
  },
  {
    "id": 555,
    "title": 15.6,
    "devanagari": "न तद्भासयते सूर्यो न शशाङ्को न पावकः ।\nयद्गत्वा न निवर्तन्ते तद्धाम परमं मम ॥ १५.६ ॥",
    "verse_text": "na tad bhāsayate sūryo\nna śaśāṅko na pāvakaḥ\nyad gatvā na nivartante\ntad dhāma paramaṁ mama",
    "verse_text_no_samdhis": "na tat bhāsayate sūryaḥ na śaśāṅkaḥ na pāvakaḥ yat gatvā na nivartante tat dhāma paramam mama"
  },
  {
    "id": 556,
    "title": 15.7,
    "devanagari": "ममैवांशो जीवलोके जीवभूतः सनातनः ।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ॥ १५.७ ॥",
    "verse_text": "mamaivāṁśo jīva-loke\njīva-bhūtaḥ sanātanaḥ\nmanaḥ-ṣaṣṭhānīndriyāṇi\nprakṛti-sthāni karṣati",
    "verse_text_no_samdhis": "mama eva aṁśaḥ jīva loke jīva bhūtaḥ sanātanaḥ manaḥ ṣaṣṭhāni indriyāṇi prakṛti sthāni karṣati"
  },
  {
    "id": 557,
    "title": 15.8,
    "devanagari": "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः ।\nगृहित्वैतानि संयाति वायुर्गन्धानिवाशयात् ॥ १५.८ ॥",
    "verse_text": "śarīraṁ yad avāpnoti\nyac cāpy utkrāmatīśvaraḥ\ngṛhītvaitāni saṁyāti\nvāyur gandhān ivāśayāt",
    "verse_text_no_samdhis": "śarīram yat avāpnoti yat ca api utkrāmati īśvaraḥ gṛhītvā etāni saṁyāti vāyuḥ gandhān iva āśayāt"
  },
  {
    "id": 558,
    "title": 15.9,
    "devanagari": "श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च ।\nअधिष्ठाय मनश्चायं विषयानुपसेवते ॥ १५.९ ॥",
    "verse_text": "śrotraṁ cakṣuḥ sparśanaṁ ca\nrasanaṁ ghrāṇam eva ca\nadhiṣṭhāya manaś cāyaṁ\nviṣayān upasevate",
    "verse_text_no_samdhis": "śrotram cakṣuḥ sparśanam ca rasanam ghrāṇam eva ca adhiṣṭhāya manaḥ ca ayam viṣayān upasevate"
  },
  {
    "id": 559,
    "title": 15.1,
    "devanagari": "उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम् ।\nविमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः ॥ १५.१० ॥",
    "verse_text": "utkrāmantaṁ sthitaṁ vāpi\nbhuñjānaṁ vā guṇānvitam\nvimūḍhā nānupaśyanti\npaśyanti jñāna-cakṣuṣaḥ",
    "verse_text_no_samdhis": "utkrāmantam sthitam vā api bhuñjānam vā guṇa anvitam vimūḍhāḥ na anupaśyanti paśyanti jñāna cakṣuṣaḥ"
  },
  {
    "id": 560,
    "title": 15.11,
    "devanagari": "यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम् ।\nयतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः ॥ १५.११ ॥",
    "verse_text": "yatanto yoginaś cainaṁ\npaśyanty ātmany avasthitam\nyatanto ’py akṛtātmāno\nnainaṁ paśyanty acetasaḥ",
    "verse_text_no_samdhis": "yatantaḥ yoginaḥ ca enam paśyanti ātmani avasthitam yatantaḥ api akṛta ātmānaḥ na enam paśyanti acetasaḥ"
  },
  {
    "id": 561,
    "title": 15.12,
    "devanagari": "यदादित्यगतं तेजो जगद्भासयतेऽखिलम् ।\nयच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम् ॥ १५.१२ ॥",
    "verse_text": "yad āditya-gataṁ tejo\njagad bhāsayate ’khilam\nyac candramasi yac cāgnau\ntat tejo viddhi māmakam",
    "verse_text_no_samdhis": "yat āditya gatam tejaḥ jagat bhāsayate akhilam yat candramasi yat ca agnau tat tejaḥ viddhi māmakam"
  },
  {
    "id": 562,
    "title": 15.13,
    "devanagari": "गामाविश्य च भूतानि धारयाम्यहमोजसा ।\nपुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः ॥ १५.१३ ॥",
    "verse_text": "gām āviśya ca bhūtāni\ndhārayāmy aham ojasā\npuṣṇāmi cauṣadhīḥ sarvāḥ\nsomo bhūtvā rasātmakaḥ",
    "verse_text_no_samdhis": "gām āviśya ca bhūtāni dhārayāmi aham ojasā puṣṇāmi ca auṣadhīḥ sarvāḥ somaḥ bhūtvā rasa ātmakaḥ"
  },
  {
    "id": 563,
    "title": 15.14,
    "devanagari": "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः ।\nप्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् ॥ १५.१४ ॥",
    "verse_text": "ahaṁ vaiśvānaro bhūtvā\nprāṇināṁ deham āśritaḥ\nprāṇāpāna-samāyuktaḥ\npacāmy annaṁ catur-vidham",
    "verse_text_no_samdhis": "aham vaiśvānaraḥ bhūtvā prāṇinām deham āśritaḥ prāṇa apāna samāyuktaḥ pacāmi annam catuḥ vidham"
  },
  {
    "id": 564,
    "title": 15.15,
    "devanagari": "सर्वस्य चाहं हृदि संनिविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च ।\nवेदैश्च सर्वैरहमेव वेद्यो\nवेदान्तकृद्वेदविदेव चाहम् ॥ १५.१५ ॥",
    "verse_text": "sarvasya cāhaṁ hṛdi sanniviṣṭo\nmattaḥ smṛtir jñānam apohanaṁ ca\nvedaiś ca sarvair aham eva vedyo\nvedānta-kṛd veda-vid eva cāham",
    "verse_text_no_samdhis": "sarvasya ca aham hṛdi sanniviṣṭaḥ mattaḥ smṛtiḥ jñānam apohanam ca vedaiḥ ca sarvaiḥ aham eva vedyaḥ vedānta kṛt veda vit eva ca aham"
  },
  {
    "id": 565,
    "title": 15.16,
    "devanagari": "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च ।\nक्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते ॥ १५.१६ ॥",
    "verse_text": "dvāv imau puruṣau loke\nkṣaraś cākṣara eva ca\nkṣaraḥ sarvāṇi bhūtāni\nkūṭa-stho ’kṣara ucyate",
    "verse_text_no_samdhis": "dvau imau puruṣau loke kṣaraḥ ca akṣaraḥ eva ca kṣaraḥ sarvāṇi bhūtāni kūṭa sthaḥ akṣaraḥ ucyate"
  },
  {
    "id": 566,
    "title": 15.17,
    "devanagari": "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः ।\nयो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ॥ १५.१७ ॥",
    "verse_text": "uttamaḥ puruṣas tv anyaḥ\nparamātmety udāhṛtaḥ\nyo loka-trayam āviśya\nbibharty avyaya īśvaraḥ",
    "verse_text_no_samdhis": "uttamaḥ puruṣaḥ tu anyaḥ parama ātmā iti udāhṛtaḥ yaḥ loka trayam āviśya bibharti avyayaḥ īśvaraḥ"
  },
  {
    "id": 567,
    "title": 15.18,
    "devanagari": "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः ।\nअतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः ॥ १५.१८ ॥",
    "verse_text": "yasmāt kṣaram atīto ’ham\nakṣarād api cottamaḥ\nato ’smi loke vede ca\nprathitaḥ puruṣottamaḥ",
    "verse_text_no_samdhis": "yasmāt kṣaram atītaḥ aham akṣarāt api ca uttamaḥ ataḥ asmi loke vede ca prathitaḥ puruṣa uttamaḥ"
  },
  {
    "id": 568,
    "title": 15.19,
    "devanagari": "यो मामेवमसंमूढो जानाति पुरुषोत्तमम् ।\nस सर्वविद्भजति मां सर्वभावेन भारत ॥ १५.१९ ॥",
    "verse_text": "yo mām evam asammūḍho\njānāti puruṣottamam\nsa sarva-vid bhajati māṁ\nsarva-bhāvena bhārata",
    "verse_text_no_samdhis": "yaḥ mām evam asammūḍhaḥ jānāti puruṣa uttamam saḥ sarva vit bhajati mām sarva bhāvena bhārata"
  },
  {
    "id": 569,
    "title": 15.2,
    "devanagari": "इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ ।\nएतद्\\u200cबुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत ॥ १५.२० ॥",
    "verse_text": "iti guhya-tamaṁ śāstram\nidam uktaṁ mayānagha\netad buddhvā buddhimān syāt\nkṛta-kṛtyaś ca bhārata",
    "verse_text_no_samdhis": "iti guhya tamam śāstram idam uktam mayā anagha etat buddhvā buddhi mān syāt kṛta kṛtyaḥ ca bhārata"
  },
  {
    "id": 570,
    "title": 16.1,
    "devanagari": "श्रीभगवानुवाच ।\nअभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥ १६.१ ॥",
    "verse_text": "śrī-bhagavān uvāca\nabhayaṁ sattva-saṁśuddhir\njñāna-yoga-vyavasthitiḥ\ndānaṁ damaś ca yajñaś ca\nsvādhyāyas tapa ārjavam",
    "verse_text_no_samdhis": "śrī bhagavān uvāca abhayam sattva saṁśuddhiḥ jñāna yoga vyavasthitiḥ dānam damaḥ ca yajñaḥ ca svādhyāyaḥ tapaḥ ārjavam"
  },
  {
    "id": 571,
    "title": 16.2,
    "devanagari": "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् ।\nदया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ॥ १६.२ ॥",
    "verse_text": "ahiṁsā satyam akrodhas\ntyāgaḥ śāntir apaiśunam\ndayā bhūteṣv aloluptvaṁ\nmārdavaṁ hrīr acāpalam",
    "verse_text_no_samdhis": "ahiṁsā satyam akrodhaḥ tyāgaḥ śāntiḥ apaiśunam dayā bhūteṣu aloluptvam mārdavam hrīḥ acāpalam"
  },
  {
    "id": 572,
    "title": 16.3,
    "devanagari": "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता ।\nभवन्ति संपदं दैवीमभिजातस्य भारत ॥ १६.३ ॥",
    "verse_text": "tejaḥ kṣamā dhṛtiḥ śaucam\nadroho nāti-mānitā\nbhavanti sampadaṁ daivīm\nabhijātasya bhārata",
    "verse_text_no_samdhis": "tejaḥ kṣamā dhṛtiḥ śaucam adrohaḥ na ati mānitā bhavanti sampadam daivīm abhijātasya bhārata"
  },
  {
    "id": 573,
    "title": 16.4,
    "devanagari": "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च ।\nअज्ञानं चाभिजातस्य पार्थ संपदमासुरीम् ॥ १६.४ ॥",
    "verse_text": "dambho darpo ’bhimānaś ca\nkrodhaḥ pāruṣyam eva ca\najñānaṁ cābhijātasya\npārtha sampadam āsurīm",
    "verse_text_no_samdhis": "dambhaḥ darpaḥ abhimānaḥ ca krodhaḥ pāruṣyam eva ca ajñānam ca abhijātasya pārtha sampadam āsurīm"
  },
  {
    "id": 574,
    "title": 16.5,
    "devanagari": "दैवी संपद्विमोक्षाय निबन्धायासुरी मता ।\nमा शुचः संपदं दैवीमभिजातोऽसि पाण्डव ॥ १६.५ ॥",
    "verse_text": "daivī sampad vimokṣāya\nnibandhāyāsurī matā\nmā śucaḥ sampadaṁ daivīm\nabhijāto ’si pāṇḍava",
    "verse_text_no_samdhis": "daivī sampat vimokṣāya nibandhāya āsurī matā mā śucaḥ sampadam daivīm abhijātaḥ asi pāṇḍava"
  },
  {
    "id": 575,
    "title": 16.6,
    "devanagari": "द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च ।\nदैवो विस्तरशः प्रोक्त आसुरं पार्थ मे शृणु ॥ १६.६ ॥",
    "verse_text": "dvau bhūta-sargau loke ’smin\ndaiva āsura eva ca\ndaivo vistaraśaḥ prokta\nāsuraṁ pārtha me śṛṇu",
    "verse_text_no_samdhis": "dvau bhūta sargau loke asmin daivaḥ āsuraḥ eva ca daivaḥ vistaraśaḥ proktaḥ āsuram pārtha me śṛṇu"
  },
  {
    "id": 576,
    "title": 16.7,
    "devanagari": "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः ।\nन शौचं नापि चाचारो न सत्यं तेषु विद्यते ॥ १६.७ ॥",
    "verse_text": "pravṛttiṁ ca nivṛttiṁ ca\njanā na vidur āsurāḥ\nna śaucaṁ nāpi cācāro\nna satyaṁ teṣu vidyate",
    "verse_text_no_samdhis": "pravṛttim ca nivṛttim ca janāḥ na viduḥ āsurāḥ na śaucam na api ca ācāraḥ na satyam teṣu vidyate"
  },
  {
    "id": 577,
    "title": 16.8,
    "devanagari": "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम् ।\nअपरस्परसंभूतं किमन्यत्कामहैतुकम् ॥ १६.८ ॥",
    "verse_text": "asatyam apratiṣṭhaṁ te\njagad āhur anīśvaram\naparaspara-sambhūtaṁ\nkim anyat kāma-haitukam",
    "verse_text_no_samdhis": "asatyam apratiṣṭham te jagat āhuḥ anīśvaram aparaspara sambhūtam kim anyat kāma haitukam"
  },
  {
    "id": 578,
    "title": 16.9,
    "devanagari": "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः ।\nप्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः ॥ १६.९ ॥",
    "verse_text": "etāṁ dṛṣṭim avaṣṭabhya\nnaṣṭātmāno ’lpa-buddhayaḥ\nprabhavanty ugra-karmāṇaḥ\nkṣayāya jagato ’hitāḥ",
    "verse_text_no_samdhis": "etām dṛṣṭim avaṣṭabhya naṣṭa ātmānaḥ alpa buddhayaḥ prabhavanti ugra karmāṇaḥ kṣayāya jagataḥ ahitāḥ"
  },
  {
    "id": 579,
    "title": 16.1,
    "devanagari": "काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः ।\nमोहाद्\\u200cगृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रताः ॥ १६.१० ॥",
    "verse_text": "kāmam āśritya duṣpūraṁ\ndambha-māna-madānvitāḥ\nmohād gṛhītvāsad-grāhān\npravartante ’śuci-vratāḥ",
    "verse_text_no_samdhis": "kāmam āśritya duṣpūram dambha māna mada anvitāḥ mohāt gṛhītvā asat grāhān pravartante aśuci vratāḥ"
  },
  {
    "id": 580,
    "title": 16.11,
    "devanagari": "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः ।\nकामोपभोगपरमा एतावदिति निश्चिताः ॥ १६.११ ॥",
    "verse_text": "cintām aparimeyāṁ ca\npralayāntām upāśritāḥ\nkāmopabhoga-paramā\netāvad iti niścitāḥ",
    "verse_text_no_samdhis": "cintām aparimeyām ca pralaya antām upāśritāḥ kāma upabhoga paramāḥ etāvat iti niścitāḥ"
  },
  {
    "id": 581,
    "title": 16.12,
    "devanagari": "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः ।\nईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान् ॥ १६.१२ ॥",
    "verse_text": "āśā-pāśa-śatair baddhāḥ\nkāma-krodha-parāyaṇāḥ\nīhante kāma-bhogārtham\nanyāyenārtha-sañcayān",
    "verse_text_no_samdhis": "āśā pāśa śataiḥ baddhāḥ kāma krodha parāyaṇāḥ īhante kāma bhoga artham anyāyena artha sañcayān"
  },
  {
    "id": 582,
    "title": 16.13,
    "devanagari": "इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम् ।\nइदमस्तीदमपि मे भविष्यति पुनर्धनम् ॥ १६.१३ ॥",
    "verse_text": "idam adya mayā labdham\nimaṁ prāpsye manoratham\nidam astīdam api me\nbhaviṣyati punar dhanam",
    "verse_text_no_samdhis": "idam adya mayā labdham imam prāpsye manaḥ ratham idam asti idam api me bhaviṣyati punaḥ dhanam"
  },
  {
    "id": 583,
    "title": 16.14,
    "devanagari": "असौ मया हतः शत्रुर्हनिष्ये चापरानपि ।\nईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी ॥ १६.१४ ॥",
    "verse_text": "asau mayā hataḥ śatrur\nhaniṣye cāparān api\nīśvaro ’ham ahaṁ bhogī\nsiddho ’haṁ balavān sukhī",
    "verse_text_no_samdhis": "asau mayā hataḥ śatruḥ haniṣye ca aparān api īśvaraḥ aham aham bhogī siddhaḥ aham bala vān sukhī"
  },
  {
    "id": 584,
    "title": 16.15,
    "devanagari": "आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया ।\nयक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः ॥ १६.१५ ॥",
    "verse_text": "āḍhyo ’bhijanavān asmi\nko ’nyo ’sti sadṛśo mayā\nyakṣye dāsyāmi modiṣya\nity ajñāna-vimohitāḥ",
    "verse_text_no_samdhis": "āḍhyaḥ abhijana vān asmi kaḥ anyaḥ asti sadṛśaḥ mayā yakṣye dāsyāmi modiṣye iti ajñāna vimohitāḥ"
  },
  {
    "id": 585,
    "title": 16.16,
    "devanagari": "अनेकचित्तविभ्रान्ता मोहजालसमावृताः ।\nप्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ ॥ १६.१६ ॥",
    "verse_text": "aneka-citta-vibhrāntā\nmoha-jāla-samāvṛtāḥ\nprasaktāḥ kāma-bhogeṣu\npatanti narake ’śucau",
    "verse_text_no_samdhis": "aneka citta vibhrāntāḥ moha jāla samāvṛtāḥ prasaktāḥ kāma bhogeṣu patanti narake aśucau"
  },
  {
    "id": 586,
    "title": 16.17,
    "devanagari": "आत्मसंभाविताः स्तब्धा धनमानमदान्विताः ।\nयजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम् ॥ १६.१७ ॥",
    "verse_text": "ātma-sambhāvitāḥ stabdhā\ndhana-māna-madānvitāḥ\nyajante nāma-yajñais te\ndambhenāvidhi-pūrvakam",
    "verse_text_no_samdhis": "ātma sambhāvitāḥ stabdhāḥ dhana māna mada anvitāḥ yajante nāma yajñaiḥ te dambhena avidhi pūrvakam"
  },
  {
    "id": 587,
    "title": 16.18,
    "devanagari": "अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः ।\nमामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः ॥ १६.१८ ॥",
    "verse_text": "ahaṅkāraṁ balaṁ darpaṁ\nkāmaṁ krodhaṁ ca saṁśritāḥ\nmām ātma-para-deheṣu\npradviṣanto ’bhyasūyakāḥ",
    "verse_text_no_samdhis": "ahaṅkāram balam darpam kāmam krodham ca saṁśritāḥ mām ātma para deheṣu pradviṣantaḥ abhyasūyakāḥ"
  },
  {
    "id": 588,
    "title": 16.19,
    "devanagari": "तानहं द्विषतः क्रुरान्संसारेषु नराधमान् ।\nक्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु ॥ १६.१९ ॥",
    "verse_text": "tān ahaṁ dviṣataḥ krūrān\nsaṁsāreṣu narādhamān\nkṣipāmy ajasram aśubhān\nāsurīṣv eva yoniṣu",
    "verse_text_no_samdhis": "tān aham dviṣataḥ krūrān saṁsāreṣu nara adhamān kṣipāmi ajasram aśubhān āsurīṣu eva yoniṣu"
  },
  {
    "id": 589,
    "title": 16.2,
    "devanagari": "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि ।\nमामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम् ॥ १६.२० ॥",
    "verse_text": "āsurīṁ yonim āpannā\nmūḍhā janmani janmani\nmām aprāpyaiva kaunteya\ntato yānty adhamāṁ gatim",
    "verse_text_no_samdhis": "āsurīm yonim āpannāḥ mūḍhāḥ janmani janmani mām aprāpya eva kaunteya tataḥ yānti adhamām gatim"
  },
  {
    "id": 590,
    "title": 16.21,
    "devanagari": "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः ।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥ १६.२१ ॥",
    "verse_text": "tri-vidhaṁ narakasyedaṁ\ndvāraṁ nāśanam ātmanaḥ\nkāmaḥ krodhas tathā lobhas\ntasmād etat trayaṁ tyajet",
    "verse_text_no_samdhis": "tri vidham narakasya idam dvāram nāśanam ātmanaḥ kāmaḥ krodhaḥ tathā lobhaḥ tasmāt etat trayam tyajet"
  },
  {
    "id": 591,
    "title": 16.22,
    "devanagari": "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः ।\nआचरत्यात्मनः श्रेयस्ततो याति परां गतिम् ॥ १६.२२ ॥",
    "verse_text": "etair vimuktaḥ kaunteya\ntamo-dvārais tribhir naraḥ\nācaraty ātmanaḥ śreyas\ntato yāti parāṁ gatim",
    "verse_text_no_samdhis": "etaiḥ vimuktaḥ kaunteya tamaḥ dvāraiḥ tribhiḥ naraḥ ācarati ātmanaḥ śreyaḥ tataḥ yāti parām gatim"
  },
  {
    "id": 592,
    "title": 16.23,
    "devanagari": "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः ।\nन स सिद्धिमवाप्नोति न सुखं न परां गतिम् ॥ १६.२३ ॥",
    "verse_text": "yaḥ śāstra-vidhim utsṛjya\nvartate kāma-kārataḥ\nna sa siddhim avāpnoti\nna sukhaṁ na parāṁ gatim",
    "verse_text_no_samdhis": "yaḥ śāstra vidhim utsṛjya vartate kāma kārataḥ na saḥ siddhim avāpnoti na sukham na parām gatim"
  },
  {
    "id": 593,
    "title": 16.24,
    "devanagari": "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ ।\nज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि ॥ १६.२४ ॥",
    "verse_text": "tasmāc chāstraṁ pramāṇaṁ te\nkāryākārya-vyavasthitau\njñātvā śāstra-vidhānoktaṁ\nkarma kartum ihārhasi",
    "verse_text_no_samdhis": "tasmāt śāstram pramāṇam te kārya akārya vyavasthitau jñātvā śāstra vidhāna uktam karma kartum iha arhasi"
  },
  {
    "id": 594,
    "title": 17.1,
    "devanagari": "अर्जुन उवाच ।\nये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः\nतेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः ॥ १७.१ ॥",
    "verse_text": "arjuna uvāca\nye śāstra-vidhim utsṛjya\nyajante śraddhayānvitāḥ\nteṣāṁ niṣṭhā tu kā kṛṣṇa\nsattvam āho rajas tamaḥ",
    "verse_text_no_samdhis": "arjunaḥ uvāca ye śāstra vidhim utsṛjya yajante śraddhayā anvitāḥ teṣām niṣṭhā tu kā kṛṣṇa sattvam āho rajaḥ tamaḥ"
  },
  {
    "id": 595,
    "title": 17.2,
    "devanagari": "श्रीभगवानुवाच ।\nत्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा\nसात्त्विकी राजसी चैव तामसी चेति तां शृणु ॥ १७.२ ॥",
    "verse_text": "śrī-bhagavān uvāca\ntri-vidhā bhavati śraddhā\ndehināṁ sā svabhāva-jā\nsāttvikī rājasī caiva\ntāmasī ceti tāṁ śṛṇu",
    "verse_text_no_samdhis": "śrī bhagavān uvāca tri vidhā bhavati śraddhā dehinām sā sva bhāva jā sāttvikī rājasī ca eva tāmasī ca iti tām śṛṇu"
  },
  {
    "id": 596,
    "title": 17.3,
    "devanagari": "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत ।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः ॥ १७.३ ॥",
    "verse_text": "sattvānurūpā sarvasya\nśraddhā bhavati bhārata\nśraddhā-mayo ’yaṁ puruṣo\nyo yac-chraddhaḥ sa eva saḥ",
    "verse_text_no_samdhis": "sattva anurūpā sarvasya śraddhā bhavati bhārata śraddhā mayaḥ ayam puruṣaḥ yaḥ yat śraddhaḥ saḥ eva saḥ"
  },
  {
    "id": 597,
    "title": 17.4,
    "devanagari": "यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः ।\nप्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जनाः ॥ १७.४ ॥",
    "verse_text": "yajante sāttvikā devān\nyakṣa-rakṣāṁsi rājasāḥ\npretān bhūta-gaṇāṁś cānye\nyajante tāmasā janāḥ",
    "verse_text_no_samdhis": "yajante sāttvikāḥ devān yakṣa rakṣāṁsi rājasāḥ pretān bhūta gaṇān ca anye yajante tāmasāḥ janāḥ"
  },
  {
    "id": 598,
    "title": 17.5,
    "devanagari": "अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः ।\nदम्भाहंकारसंयुक्ताः कामरागबलान्विताः ॥ १७.५ ॥",
    "verse_text": "aśāstra-vihitaṁ ghoraṁ\ntapyante ye tapo janāḥ\ndambhāhaṅkāra-saṁyuktāḥ\nkāma-rāga-balānvitāḥ",
    "verse_text_no_samdhis": "aśāstra vihitam ghoram tapyante ye tapaḥ janāḥ dambha ahaṅkāra saṁyuktāḥ kāma rāga bala anvitāḥ"
  },
  {
    "id": 599,
    "title": 17.6,
    "devanagari": "कर्षयन्तः शरीरस्थं भूतग्राममचेतसः ।\nमां चैवान्तःशरीरस्थं तान्विद्ध्यासुरनिश्चयान् ॥ १७.६ ॥",
    "verse_text": "karṣayantaḥ śarīra-sthaṁ\nbhūta-grāmam acetasaḥ\nmāṁ caivāntaḥ śarīra-sthaṁ\ntān viddhy āsura-niścayān",
    "verse_text_no_samdhis": "karṣayantaḥ śarīra stham bhūta grāmam acetasaḥ mām ca eva antaḥ śarīra stham tān viddhi āsura niścayān"
  },
  {
    "id": 600,
    "title": 17.7,
    "devanagari": "आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः ।\nयज्ञस्तपस्तथा दानं तेषां भेदमिमं शृणु ॥ १७.७ ॥",
    "verse_text": "āhāras tv api sarvasya\ntri-vidho bhavati priyaḥ\nyajñas tapas tathā dānaṁ\nteṣāṁ bhedam imaṁ śṛṇu",
    "verse_text_no_samdhis": "āhāraḥ tu api sarvasya tri vidhaḥ bhavati priyaḥ yajñaḥ tapaḥ tathā dānam teṣām bhedam imam śṛṇu"
  },
  {
    "id": 601,
    "title": 17.8,
    "devanagari": "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः ।\nरस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः ॥ १७.८ ॥",
    "verse_text": "āyuḥ-sattva-balārogya-\nsukha-prīti-vivardhanāḥ\nrasyāḥ snigdhāḥ sthirā hṛdyā\nāhārāḥ sāttvika-priyāḥ",
    "verse_text_no_samdhis": "āyuḥ sattva bala ārogya sukha prīti vivardhanāḥ rasyāḥ snigdhāḥ sthirāḥ hṛdyāḥ āhārāḥ sāttvika priyāḥ"
  },
  {
    "id": 602,
    "title": 17.9,
    "devanagari": "कट्\\u200cवम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः ।\nआहारा राजसस्येष्टा दुःखशोकामयप्रदाः ॥ १७.९ ॥",
    "verse_text": "kaṭv-amla-lavaṇāty-uṣṇa-\ntīkṣṇa-rūkṣa-vidāhinaḥ\nāhārā rājasasyeṣṭā\nduḥkha-śokāmaya-pradāḥ",
    "verse_text_no_samdhis": "kaṭu amla lavaṇa ati uṣṇa tīkṣṇa rūkṣa vidāhinaḥ āhārāḥ rājasasya iṣṭāḥ duḥkha śoka āmaya pradāḥ"
  },
  {
    "id": 603,
    "title": 17.1,
    "devanagari": "यातयामं गतरसं पूति पर्युषितं च यत् ।\nउच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम् ॥ १७.१० ॥",
    "verse_text": "yāta-yāmaṁ gata-rasaṁ\npūti paryuṣitaṁ ca yat\nucchiṣṭam api cāmedhyaṁ\nbhojanaṁ tāmasa-priyam",
    "verse_text_no_samdhis": "yāta yāmam gata rasam pūti paryuṣitam ca yat ucchiṣṭam api ca amedhyam bhojanam tāmasa priyam"
  },
  {
    "id": 604,
    "title": 17.11,
    "devanagari": "अफलाकाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते ।\nयष्टव्यमेवेति मनः समाधाय स सात्त्विकः ॥ १७.११ ॥",
    "verse_text": "aphalākāṅkṣibhir yajño\nvidhi-diṣṭo ya ijyate\nyaṣṭavyam eveti manaḥ\nsamādhāya sa sāttvikaḥ",
    "verse_text_no_samdhis": "aphala ākāṅkṣibhiḥ yajñaḥ vidhi diṣṭaḥ yaḥ ijyate yaṣṭavyam eva iti manaḥ samādhāya saḥ sāttvikaḥ"
  },
  {
    "id": 605,
    "title": 17.12,
    "devanagari": "अभिसंधाय तु फलं दम्भार्थमपि चैव यत् ।\nइज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम् ॥ १७.१२ ॥",
    "verse_text": "abhisandhāya tu phalaṁ\ndambhārtham api caiva yat\nijyate bharata-śreṣṭha\ntaṁ yajñaṁ viddhi rājasam",
    "verse_text_no_samdhis": "abhisandhāya tu phalam dambha artham api ca eva yat ijyate bharata śreṣṭha tam yajñam viddhi rājasam"
  },
  {
    "id": 606,
    "title": 17.13,
    "devanagari": "विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम् ।\nश्रद्धाविरहितं यज्ञं तामसं परिचक्षते ॥ १७.१३ ॥",
    "verse_text": "vidhi-hīnam asṛṣṭānnaṁ\nmantra-hīnam adakṣiṇam\nśraddhā-virahitaṁ yajñaṁ\ntāmasaṁ paricakṣate",
    "verse_text_no_samdhis": "vidhi hīnam asṛṣṭa annam mantra hīnam adakṣiṇam śraddhā virahitam yajñam tāmasam paricakṣate"
  },
  {
    "id": 607,
    "title": 17.14,
    "devanagari": "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् ।\nब्रह्मचर्यमहिंसा च शारीरं तप उच्यते ॥ १७.१४ ॥",
    "verse_text": "deva-dvija-guru-prājña-\npūjanaṁ śaucam ārjavam\nbrahmacaryam ahiṁsā ca\nśārīraṁ tapa ucyate",
    "verse_text_no_samdhis": "deva dvija guru prājña pūjanam śaucam ārjavam brahmacaryam ahiṁsā ca śārīram tapaḥ ucyate"
  },
  {
    "id": 608,
    "title": 17.15,
    "devanagari": "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् ।\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ॥ १७.१५ ॥",
    "verse_text": "anudvega-karaṁ vākyaṁ\nsatyaṁ priya-hitaṁ ca yat\nsvādhyāyābhyasanaṁ caiva\nvāṅ-mayaṁ tapa ucyate",
    "verse_text_no_samdhis": "anudvega karam vākyam satyam priya hitam ca yat svādhyāya abhyasanam ca eva vāk mayam tapaḥ ucyate"
  },
  {
    "id": 609,
    "title": 17.16,
    "devanagari": "मनः प्रसादः सौम्यत्वं मौनमात्मविनिग्रहः ।\nभावसंशुद्धिरित्येतत्तपो मानसमुच्यते ॥ १७.१६ ॥",
    "verse_text": "manaḥ-prasādaḥ saumyatvaṁ\nmaunam ātma-vinigrahaḥ\nbhāva-saṁśuddhir ity etat\ntapo mānasam ucyate",
    "verse_text_no_samdhis": "manaḥ prasādaḥ saumyatvam maunam ātma vinigrahaḥ bhāva saṁśuddhiḥ iti etat tapaḥ mānasam ucyate"
  },
  {
    "id": 610,
    "title": 17.17,
    "devanagari": "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः ।\nअफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते ॥ १७.१७ ॥",
    "verse_text": "śraddhayā parayā taptaṁ\ntapas tat tri-vidhaṁ naraiḥ\naphalākāṅkṣibhir yuktaiḥ\nsāttvikaṁ paricakṣate",
    "verse_text_no_samdhis": "śraddhayā parayā taptam tapaḥ tat tri vidham naraiḥ aphala ākāṅkṣibhiḥ yuktaiḥ sāttvikam paricakṣate"
  },
  {
    "id": 611,
    "title": 17.18,
    "devanagari": "सत्कारमानपूजार्थं तपो दम्भेन चैव यत् ।\nक्रियते तदिह प्रोक्तं राजसं चलमध्रुवम् ॥ १७.१८ ॥",
    "verse_text": "satkāra-māna-pūjārthaṁ\ntapo dambhena caiva yat\nkriyate tad iha proktaṁ\nrājasaṁ calam adhruvam",
    "verse_text_no_samdhis": "sat kāra māna pūjā artham tapaḥ dambhena ca eva yat kriyate tat iha proktam rājasam calam adhruvam"
  },
  {
    "id": 612,
    "title": 17.19,
    "devanagari": "मूढग्राहेणात्मनो यत्पीडया क्रियते तपः ।\nपरस्योत्सादनार्थं वा तत्तामसमुदाहृतम् ॥ १७.१९ ॥",
    "verse_text": "mūḍha-grāheṇātmano yat\npīḍayā kriyate tapaḥ\nparasyotsādanārthaṁ vā\ntat tāmasam udāhṛtam",
    "verse_text_no_samdhis": "mūḍha grāheṇa ātmanaḥ yat pīḍayā kriyate tapaḥ parasya utsādana artham vā tat tāmasam udāhṛtam"
  },
  {
    "id": 613,
    "title": 17.2,
    "devanagari": "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे ।\nदेशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ॥ १७.२० ॥",
    "verse_text": "dātavyam iti yad dānaṁ\ndīyate ’nupakāriṇe\ndeśe kāle ca pātre ca\ntad dānaṁ sāttvikaṁ smṛtam",
    "verse_text_no_samdhis": "dātavyam iti yat dānam dīyate anupakāriṇe deśe kāle ca pātre ca tat dānam sāttvikam smṛtam"
  },
  {
    "id": 614,
    "title": 17.21,
    "devanagari": "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः ।\nदीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम् ॥ १७.२१ ॥",
    "verse_text": "yat tu pratyupakārārthaṁ\nphalam uddiśya vā punaḥ\ndīyate ca parikliṣṭaṁ\ntad dānaṁ rājasaṁ smṛtam",
    "verse_text_no_samdhis": "yat tu prati upakāra artham phalam uddiśya vā punaḥ dīyate ca parikliṣṭam tat dānam rājasam smṛtam"
  },
  {
    "id": 615,
    "title": 17.22,
    "devanagari": "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते ।\nअसत्कृतमवज्ञातं तत्तामसमुदाहृतम् ॥ १७.२२ ॥",
    "verse_text": "adeśa-kāle yad dānam\napātrebhyaś ca dīyate\nasat-kṛtam avajñātaṁ\ntat tāmasam udāhṛtam",
    "verse_text_no_samdhis": "adeśa kāle yat dānam apātrebhyaḥ ca dīyate asat kṛtam avajñātam tat tāmasam udāhṛtam"
  },
  {
    "id": 616,
    "title": 17.23,
    "devanagari": "ॐतत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः ।\nब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा ॥ १७.२३ ॥",
    "verse_text": "oṁ tat sad iti nirdeśo\nbrahmaṇas tri-vidhaḥ smṛtaḥ\nbrāhmaṇās tena vedāś ca\nyajñāś ca vihitāḥ purā",
    "verse_text_no_samdhis": "oṁ tat sat iti nirdeśaḥ brahmaṇaḥ tri vidhaḥ smṛtaḥ brāhmaṇāḥ tena vedāḥ ca yajñāḥ ca vihitāḥ purā"
  },
  {
    "id": 617,
    "title": 17.24,
    "devanagari": "तस्माद ॐ द्दत्युदाहृत्य यज्ञदानतपःक्रियाः ।\nप्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम् ॥ १७.२४ ॥",
    "verse_text": "tasmād oṁ ity udāhṛtya\nyajña-dāna-tapaḥ-kriyāḥ\npravartante vidhānoktāḥ\nsatataṁ brahma-vādinām",
    "verse_text_no_samdhis": "tasmāt oṁ iti udāhṛtya yajña dāna tapaḥ kriyāḥ pravartante vidhāna uktāḥ satatam brahma vādinām"
  },
  {
    "id": 618,
    "title": 17.25,
    "devanagari": "तदित्यनभिसन्धाय फलं यज्ञतपःक्रियाः ।\nदानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षिभिः ॥ १७.२५ ॥",
    "verse_text": "tad ity anabhisandhāya\nphalaṁ yajña-tapaḥ-kriyāḥ\ndāna-kriyāś ca vividhāḥ\nkriyante mokṣa-kāṅkṣibhiḥ",
    "verse_text_no_samdhis": "tat iti anabhisandhāya phalam yajña tapaḥ kriyāḥ dāna kriyāḥ ca vividhāḥ kriyante mokṣa kāṅkṣibhiḥ"
  },
  {
    "id": 619,
    "title": 17.26,
    "devanagari": "सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते ।\nप्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते ॥ १७.२६ ॥",
    "verse_text": "sad-bhāve sādhu-bhāve ca\nsad ity etat prayujyate\npraśaste karmaṇi tathā\nsac-chabdaḥ pārtha yujyate",
    "verse_text_no_samdhis": "sat bhāve sādhu bhāve ca sat iti etat prayujyate praśaste karmaṇi tathā sat śabdaḥ pārtha yujyate"
  },
  {
    "id": 620,
    "title": 17.27,
    "devanagari": "यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते ।\nकर्म चैव तदर्थीयं सदित्येवाभिधीयते ॥ १७.२७ ॥",
    "verse_text": "yajñe tapasi dāne ca\nsthitiḥ sad iti cocyate\nkarma caiva tad-arthīyaṁ\nsad ity evābhidhīyate",
    "verse_text_no_samdhis": "yajñe tapasi dāne ca sthitiḥ sat iti ca ucyate karma ca eva tat arthīyam sat iti eva abhidhīyate"
  },
  {
    "id": 621,
    "title": 17.28,
    "devanagari": "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत् ।\nअसदित्युच्यते पार्थ न च तत्प्रेत्य नो इह ॥ १७.२८ ॥",
    "verse_text": "aśraddhayā hutaṁ dattaṁ\ntapas taptaṁ kṛtaṁ ca yat\nasad ity ucyate pārtha\nna ca tat pretya no iha",
    "verse_text_no_samdhis": "aśraddhayā hutam dattam tapaḥ taptam kṛtam ca yat asat iti ucyate pārtha na ca tat pretya na u iha"
  },
  {
    "id": 622,
    "title": 18.1,
    "devanagari": "अर्जुन उवाच ।\nसंन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्\nत्यागस्य च हृषीकेश पृथक्केशिनिषूदन ॥ १८.१ ॥",
    "verse_text": "arjuna uvāca\nsannyāsasya mahā-bāho\ntattvam icchāmi veditum\ntyāgasya ca hṛṣīkeśa\npṛthak keśi-niṣūdana",
    "verse_text_no_samdhis": "arjunaḥ uvāca sannyāsasya mahā bāho tattvam icchāmi veditum tyāgasya ca hṛṣīkeśa pṛthak keśi niṣūdana"
  },
  {
    "id": 623,
    "title": 18.2,
    "devanagari": "श्रीभगवानुवाच ।\nकाम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः\nसर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः ॥ १८.२ ॥",
    "verse_text": "śrī-bhagavān uvāca\nkāmyānāṁ karmaṇāṁ nyāsaṁ\nsannyāsaṁ kavayo viduḥ\nsarva-karma-phala-tyāgaṁ\nprāhus tyāgaṁ vicakṣaṇāḥ",
    "verse_text_no_samdhis": "śrī bhagavān uvāca kāmyānām karmaṇām nyāsam sannyāsam kavayaḥ viduḥ sarva karma phala tyāgam prāhuḥ tyāgam vicakṣaṇāḥ"
  },
  {
    "id": 624,
    "title": 18.3,
    "devanagari": "त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः ।\nयज्ञदानतपःकर्म न त्याज्यमिति चापरे ॥ १८.३ ॥",
    "verse_text": "tyājyaṁ doṣa-vad ity eke\nkarma prāhur manīṣiṇaḥ\nyajña-dāna-tapaḥ-karma\nna tyājyam iti cāpare",
    "verse_text_no_samdhis": "tyājyam doṣa vat iti eke karma prāhuḥ manīṣiṇaḥ yajña dāna tapaḥ karma na tyājyam iti ca apare"
  },
  {
    "id": 625,
    "title": 18.4,
    "devanagari": "निश्चयं शृणु मे तत्र त्यागे भरतसत्तम ।\nत्यागो हि पुरुषव्याघ्र त्रिविधः संप्रकीर्तितः ॥ १८.४ ॥",
    "verse_text": "niścayaṁ śṛṇu me tatra\ntyāge bharata-sattama\ntyāgo hi puruṣa-vyāghra\ntri-vidhaḥ samprakīrtitaḥ",
    "verse_text_no_samdhis": "niścayam śṛṇu me tatra tyāge bharata sat tama tyāgaḥ hi puruṣa vyāghra tri vidhaḥ samprakīrtitaḥ"
  },
  {
    "id": 626,
    "title": 18.5,
    "devanagari": "यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत् ।\nयज्ञो दानं तपश्चैव पावनानि मनीषिणाम् ॥ १८.५ ॥",
    "verse_text": "yajña-dāna-tapaḥ-karma\nna tyājyaṁ kāryam eva tat\nyajño dānaṁ tapaś caiva\npāvanāni manīṣiṇām",
    "verse_text_no_samdhis": "yajña dāna tapaḥ karma na tyājyam kāryam eva tat yajñaḥ dānam tapaḥ ca eva pāvanāni manīṣiṇām"
  },
  {
    "id": 627,
    "title": 18.6,
    "devanagari": "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च ।\nकर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम् ॥ १८.६ ॥",
    "verse_text": "etāny api tu karmāṇi\nsaṅgaṁ tyaktvā phalāni ca\nkartavyānīti me pārtha\nniścitaṁ matam uttamam",
    "verse_text_no_samdhis": "etāni api tu karmāṇi saṅgam tyaktvā phalāni ca kartavyāni iti me pārtha niścitam matam uttamam"
  },
  {
    "id": 628,
    "title": 18.7,
    "devanagari": "नियतस्य तु संन्यासः कर्मणो नोपपद्यते ।\nमोहात्तस्य परित्यागस्तामसः परिकीर्तितः ॥ १८.७ ॥",
    "verse_text": "niyatasya tu sannyāsaḥ\nkarmaṇo nopapadyate\nmohāt tasya parityāgas\ntāmasaḥ parikīrtitaḥ",
    "verse_text_no_samdhis": "niyatasya tu sannyāsaḥ karmaṇaḥ na upapadyate mohāt tasya parityāgaḥ tāmasaḥ parikīrtitaḥ"
  },
  {
    "id": 629,
    "title": 18.8,
    "devanagari": "दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत् ।\nस कृत्वा राजसं त्यागं नैव त्यागफलं लभेत् ॥ १८.८ ॥",
    "verse_text": "duḥkham ity eva yat karma\nkāya-kleśa-bhayāt tyajet\nsa kṛtvā rājasaṁ tyāgaṁ\nnaiva tyāga-phalaṁ labhet",
    "verse_text_no_samdhis": "duḥkham iti eva yat karma kāya kleśa bhayāt tyajet saḥ kṛtvā rājasam tyāgam na eva tyāga phalam labhet"
  },
  {
    "id": 630,
    "title": 18.9,
    "devanagari": "कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन ।\nसङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः ॥ १८.९ ॥",
    "verse_text": "kāryam ity eva yat karma\nniyataṁ kriyate ’rjuna\nsaṅgaṁ tyaktvā phalaṁ caiva\nsa tyāgaḥ sāttviko mataḥ",
    "verse_text_no_samdhis": "kāryam iti eva yat karma niyatam kriyate arjuna saṅgam tyaktvā phalam ca eva saḥ tyāgaḥ sāttvikaḥ mataḥ"
  },
  {
    "id": 631,
    "title": 18.1,
    "devanagari": "न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते ।\nत्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः ॥ १८.१० ॥",
    "verse_text": "na dveṣṭy akuśalaṁ karma\nkuśale nānuṣajjate\ntyāgī sattva-samāviṣṭo\nmedhāvī chinna-saṁśayaḥ",
    "verse_text_no_samdhis": "na dveṣṭi akuśalam karma kuśale na anuṣajjate tyāgī sattva samāviṣṭaḥ medhāvī chinna saṁśayaḥ"
  },
  {
    "id": 632,
    "title": 18.11,
    "devanagari": "न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः ।\nयस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते ॥ १८.११ ॥",
    "verse_text": "na hi deha-bhṛtā śakyaṁ\ntyaktuṁ karmāṇy aśeṣataḥ\nyas tu karma-phala-tyāgī\nsa tyāgīty abhidhīyate",
    "verse_text_no_samdhis": "na hi deha bhṛtā śakyam tyaktum karmāṇi aśeṣataḥ yaḥ tu karma phala tyāgī saḥ tyāgī iti abhidhīyate"
  },
  {
    "id": 633,
    "title": 18.12,
    "devanagari": "अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम् ।\nभवत्यत्यागिनां प्रेत्य न तु संन्यासिनां क्वचित् ॥ १८.१२ ॥",
    "verse_text": "aniṣṭam iṣṭaṁ miśraṁ ca\ntri-vidhaṁ karmaṇaḥ phalam\nbhavaty atyāgināṁ pretya\nna tu sannyāsināṁ kvacit",
    "verse_text_no_samdhis": "aniṣṭam iṣṭam miśram ca tri vidham karmaṇaḥ phalam bhavati atyāginām pretya na tu sannyāsinām kvacit"
  },
  {
    "id": 634,
    "title": 18.13,
    "devanagari": "पञ्चैतानि महाबाहो कारणानि निबोध मे ।\nसांख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम् ॥ १८.१३ ॥",
    "verse_text": "pañcaitāni mahā-bāho\nkāraṇāni nibodha me\nsāṅkhye kṛtānte proktāni\nsiddhaye sarva-karmaṇām",
    "verse_text_no_samdhis": "pañca etāni mahā bāho kāraṇāni nibodha me sāṅkhye kṛta ante proktāni siddhaye sarva karmaṇām"
  },
  {
    "id": 635,
    "title": 18.14,
    "devanagari": "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम् ।\nविविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम् ॥ १८.१४ ॥",
    "verse_text": "adhiṣṭhānaṁ tathā kartā\nkaraṇaṁ ca pṛthag-vidham\nvividhāś ca pṛthak ceṣṭā\ndaivaṁ caivātra pañcamam",
    "verse_text_no_samdhis": "adhiṣṭhānam tathā kartā karaṇam ca pṛthak vidham vividhāḥ ca pṛthak ceṣṭāḥ daivam ca eva atra pañcamam"
  },
  {
    "id": 636,
    "title": 18.15,
    "devanagari": "शरीरवाङ्\\u200cमनोभिर्यत्कर्म प्रारभते नरः ।\nन्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः ॥ १८.१५ ॥",
    "verse_text": "śarīra-vāṅ-manobhir yat\nkarma prārabhate naraḥ\nnyāyyaṁ vā viparītaṁ vā\npañcaite tasya hetavaḥ",
    "verse_text_no_samdhis": "śarīra vāk manobhiḥ yat karma prārabhate naraḥ nyāyyam vā viparītam vā pañca ete tasya hetavaḥ"
  },
  {
    "id": 637,
    "title": 18.16,
    "devanagari": "तत्रैवं सति कर्तारमात्मानं केवलं तु यः ।\nपश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः ॥ १८.१६ ॥",
    "verse_text": "tatraivaṁ sati kartāram\nātmānaṁ kevalaṁ tu yaḥ\npaśyaty akṛta-buddhitvān\nna sa paśyati durmatiḥ",
    "verse_text_no_samdhis": "tatra evam sati kartāram ātmānam kevalam tu yaḥ paśyati akṛta buddhitvāt na saḥ paśyati durmatiḥ"
  },
  {
    "id": 638,
    "title": 18.17,
    "devanagari": "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते ।\nहत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते ॥ १८.१७ ॥",
    "verse_text": "yasya nāhaṅkṛto bhāvo\nbuddhir yasya na lipyate\nhatvāpi sa imāḻ lokān\nna hanti na nibadhyate",
    "verse_text_no_samdhis": "yasya na ahaṅkṛtaḥ bhāvaḥ buddhiḥ yasya na lipyate hatvā api saḥ imān lokān na hanti na nibadhyate"
  },
  {
    "id": 639,
    "title": 18.18,
    "devanagari": "ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना ।\nकरणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः ॥ १८.१८ ॥",
    "verse_text": "jñānaṁ jñeyaṁ parijñātā\ntri-vidhā karma-codanā\nkaraṇaṁ karma karteti\ntri-vidhaḥ karma-saṅgrahaḥ",
    "verse_text_no_samdhis": "jñānam jñeyam parijñātā tri vidhā karma codanā karaṇam karma kartā iti tri vidhaḥ karma saṅgrahaḥ"
  },
  {
    "id": 640,
    "title": 18.19,
    "devanagari": "ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः ।\nप्रोच्यते गुणसंख्याने यथावच्छृणु तान्यपि ॥ १८.१९ ॥",
    "verse_text": "jñānaṁ karma ca kartā ca\ntridhaiva guṇa-bhedataḥ\nprocyate guṇa-saṅkhyāne\nyathāvac chṛṇu tāny api",
    "verse_text_no_samdhis": "jñānam karma ca kartā ca tridhā eva guṇa bhedataḥ procyate guṇa saṅkhyāne yathā vat śṛṇu tāni api"
  },
  {
    "id": 641,
    "title": 18.2,
    "devanagari": "सर्वभूतेषु येनैकं भावमव्ययमीक्षते ।\nअविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम् ॥ १८.२० ॥",
    "verse_text": "sarva-bhūteṣu yenaikaṁ\nbhāvam avyayam īkṣate\navibhaktaṁ vibhakteṣu\ntaj jñānaṁ viddhi sāttvikam",
    "verse_text_no_samdhis": "sarva bhūteṣu yena ekam bhāvam avyayam īkṣate avibhaktam vibhakteṣu tat jñānam viddhi sāttvikam"
  },
  {
    "id": 642,
    "title": 18.21,
    "devanagari": "पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान् ।\nवेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम् ॥ १८.२१ ॥",
    "verse_text": "pṛthaktvena tu yaj jñānaṁ\nnānā-bhāvān pṛthag-vidhān\nvetti sarveṣu bhūteṣu\ntaj jñānaṁ viddhi rājasam",
    "verse_text_no_samdhis": "pṛthaktvena tu yat jñānam nānā bhāvān pṛthak vidhān vetti sarveṣu bhūteṣu tat jñānam viddhi rājasam"
  },
  {
    "id": 643,
    "title": 18.22,
    "devanagari": "यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम् ।\nअतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम् ॥ १८.२२ ॥",
    "verse_text": "yat tu kṛtsna-vad ekasmin\nkārye saktam ahaitukam\natattvārtha-vad alpaṁ ca\ntat tāmasam udāhṛtam",
    "verse_text_no_samdhis": "yat tu kṛtsna vat ekasmin kārye saktam ahaitukam atattva artha vat alpam ca tat tāmasam udāhṛtam"
  },
  {
    "id": 644,
    "title": 18.23,
    "devanagari": "नियतं सङ्गरहितमरागद्वेषतः कृतम् ।\nअफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते ॥ १८.२३ ॥",
    "verse_text": "niyataṁ saṅga-rahitam\narāga-dveṣataḥ kṛtam\naphala-prepsunā karma\nyat tat sāttvikam ucyate",
    "verse_text_no_samdhis": "niyatam saṅga rahitam arāga dveṣataḥ kṛtam aphala prepsunā karma yat tat sāttvikam ucyate"
  },
  {
    "id": 645,
    "title": 18.24,
    "devanagari": "यत्तु कामेप्सुना कर्म साहंकारेण वा पुनः ।\nक्रियते बहुलायासं तद्राजसमुदाहृतम् ॥ १८.२४ ॥",
    "verse_text": "yat tu kāmepsunā karma\nsāhaṅkāreṇa vā punaḥ\nkriyate bahulāyāsaṁ\ntad rājasam udāhṛtam",
    "verse_text_no_samdhis": "yat tu kāma īpsunā karma sa ahaṅkāreṇa vā punaḥ kriyate bahula āyāsam tat rājasam udāhṛtam"
  },
  {
    "id": 646,
    "title": 18.25,
    "devanagari": "अनुबन्धं क्षयं हिंसामनवेक्ष्य च पौरुषम् ।\nमोहादारभ्यते कर्म यत्तत्तामसमुच्यते ॥ १८.२५ ॥",
    "verse_text": "anubandhaṁ kṣayaṁ hiṁsām\nanapekṣya ca pauruṣam\nmohād ārabhyate karma\nyat tat tāmasam ucyate",
    "verse_text_no_samdhis": "anubandham kṣayam hiṁsām anapekṣya ca pauruṣam mohāt ārabhyate karma yat tat tāmasam ucyate"
  },
  {
    "id": 647,
    "title": 18.26,
    "devanagari": "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः ।\nसिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते ॥ १८.२६ ॥",
    "verse_text": "mukta-saṅgo ’nahaṁ-vādī\ndhṛty-utsāha-samanvitaḥ\nsiddhy-asiddhyor nirvikāraḥ\nkartā sāttvika ucyate",
    "verse_text_no_samdhis": "mukta saṅgaḥ anaham vādī dhṛti utsāha samanvitaḥ siddhi asiddhyoḥ nirvikāraḥ kartā sāttvikaḥ ucyate"
  },
  {
    "id": 648,
    "title": 18.27,
    "devanagari": "रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः ।\nहर्षशोकान्वितः कर्ता राजसः परिकीर्तितः ॥ १८.२७ ॥",
    "verse_text": "rāgī karma-phala-prepsur\nlubdho hiṁsātmako ’śuciḥ\nharṣa-śokānvitaḥ kartā\nrājasaḥ parikīrtitaḥ",
    "verse_text_no_samdhis": "rāgī karma phala prepsuḥ lubdhaḥ hiṁsā ātmakaḥ aśuciḥ harṣa śoka anvitaḥ kartā rājasaḥ parikīrtitaḥ"
  },
  {
    "id": 649,
    "title": 18.28,
    "devanagari": "अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः ।\nविषादी दीर्घसूत्री च कर्ता तामस उच्यते ॥ १८.२८ ॥",
    "verse_text": "ayuktaḥ prākṛtaḥ stabdhaḥ\nśaṭho naiṣkṛtiko ’lasaḥ\nviṣādī dīrgha-sūtrī ca\nkartā tāmasa ucyate",
    "verse_text_no_samdhis": "ayuktaḥ prākṛtaḥ stabdhaḥ śaṭhaḥ naiṣkṛtikaḥ alasaḥ viṣādī dīrgha sūtrī ca kartā tāmasaḥ ucyate"
  },
  {
    "id": 650,
    "title": 18.29,
    "devanagari": "बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं शृणु ।\nप्रोच्यमानमशेषेण पृथक्त्वेन धनंजय ॥ १८.२९ ॥",
    "verse_text": "buddher bhedaṁ dhṛteś caiva\nguṇatas tri-vidhaṁ śṛṇu\nprocyamānam aśeṣeṇa\npṛthaktvena dhanañ-jaya",
    "verse_text_no_samdhis": "buddheḥ bhedam dhṛteḥ ca eva guṇataḥ tri vidham śṛṇu procyamānam aśeṣeṇa pṛthaktvena dhanam jaya"
  },
  {
    "id": 651,
    "title": 18.3,
    "devanagari": "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये ।\nबन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी ॥ १८.३० ॥",
    "verse_text": "pravṛttiṁ ca nivṛttiṁ ca\nkāryākārye bhayābhaye\nbandhaṁ mokṣaṁ ca yā vetti\nbuddhiḥ sā pārtha sāttvikī",
    "verse_text_no_samdhis": "pravṛttim ca nivṛttim ca kārya akārye bhaya abhaye bandham mokṣam ca yā vetti buddhiḥ sā pārtha sāttvikī"
  },
  {
    "id": 652,
    "title": 18.31,
    "devanagari": "यया धर्ममधर्मं च कार्यं चाकार्यमेव च ।\nअयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी ॥ १८.३१ ॥",
    "verse_text": "yayā dharmam adharmaṁ ca\nkāryaṁ cākāryam eva ca\nayathāvat prajānāti\nbuddhiḥ sā pārtha rājasī",
    "verse_text_no_samdhis": "yayā dharmam adharmam ca kāryam ca akāryam eva ca ayathā vat prajānāti buddhiḥ sā pārtha rājasī"
  },
  {
    "id": 653,
    "title": 18.32,
    "devanagari": "अधर्मं धर्ममिति या मन्यते तमसावृता ।\nसर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी ॥ १८.३२ ॥",
    "verse_text": "adharmaṁ dharmam iti yā\nmanyate tamasāvṛtā\nsarvārthān viparītāṁś ca\nbuddhiḥ sā pārtha tāmasī",
    "verse_text_no_samdhis": "adharmam dharmam iti yā manyate tamasā āvṛtā sarva arthān viparītān ca buddhiḥ sā pārtha tāmasī"
  },
  {
    "id": 654,
    "title": 18.33,
    "devanagari": "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः ।\nयोगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी ॥ १८.३३ ॥",
    "verse_text": "dhṛtyā yayā dhārayate\nmanaḥ-prāṇendriya-kriyāḥ\nyogenāvyabhicāriṇyā\ndhṛtiḥ sā pārtha sāttvikī",
    "verse_text_no_samdhis": "dhṛtyā yayā dhārayate manaḥ prāṇa indriya kriyāḥ yogena avyabhicāriṇyā dhṛtiḥ sā pārtha sāttvikī"
  },
  {
    "id": 655,
    "title": 18.34,
    "devanagari": "यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन ।\nप्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी ॥ १८.३४ ॥",
    "verse_text": "yayā tu dharma-kāmārthān\ndhṛtyā dhārayate ’rjuna\nprasaṅgena phalākāṅkṣī\ndhṛtiḥ sā pārtha rājasī",
    "verse_text_no_samdhis": "yayā tu dharma kāma arthān dhṛtyā dhārayate arjuna prasaṅgena phala ākāṅkṣī dhṛtiḥ sā pārtha rājasī"
  },
  {
    "id": 656,
    "title": 18.35,
    "devanagari": "यया स्वप्नं भयं शोकं विषादं मदमेव च ।\nन विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी ॥ १८.३५ ॥",
    "verse_text": "yayā svapnaṁ bhayaṁ śokaṁ\nviṣādaṁ madam eva ca\nna vimuñcati durmedhā\ndhṛtiḥ sā pārtha tāmasī",
    "verse_text_no_samdhis": "yayā svapnam bhayam śokam viṣādam madam eva ca na vimuñcati durmedhā dhṛtiḥ sā pārtha tāmasī"
  },
  {
    "id": 657,
    "title": 18.36,
    "devanagari": "सुखं त्विदानीं त्रिविधं शृणु मे भरतर्षभ ।\nअभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति ॥ १८.३६ ॥",
    "verse_text": "sukhaṁ tv idānīṁ tri-vidhaṁ\nśṛṇu me bharatarṣabha\nabhyāsād ramate yatra\nduḥkhāntaṁ ca nigacchati",
    "verse_text_no_samdhis": "sukham tu idānīm tri vidham śṛṇu me bharata ṛṣabha abhyāsāt ramate yatra duḥkha antam ca nigacchati"
  },
  {
    "id": 658,
    "title": 18.37,
    "devanagari": "यत्तदग्रे विषमिव परिणामेऽमृतोपमम् ।\nतत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम् ॥ १८.३७ ॥",
    "verse_text": "yat tad agre viṣam iva\npariṇāme ’mṛtopamam\ntat sukhaṁ sāttvikaṁ proktam\nātma-buddhi-prasāda-jam",
    "verse_text_no_samdhis": "yat tat agre viṣam iva pariṇāme amṛta upamam tat sukham sāttvikam proktam ātma buddhi prasāda jam"
  },
  {
    "id": 659,
    "title": 18.38,
    "devanagari": "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम् ।\nपरिणामे विषमिव तत्सुखं राजसं स्मृतम् ॥ १८.३८ ॥",
    "verse_text": "viṣayendriya-saṁyogād\nyat tad agre ’mṛtopamam\npariṇāme viṣam iva\ntat sukhaṁ rājasaṁ smṛtam",
    "verse_text_no_samdhis": "viṣaya indriya saṁyogāt yat tat agre amṛta upamam pariṇāme viṣam iva tat sukham rājasam smṛtam"
  },
  {
    "id": 660,
    "title": 18.39,
    "devanagari": "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः ।\nनिद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम् ॥ १८.३९ ॥",
    "verse_text": "yad agre cānubandhe ca\nsukhaṁ mohanam ātmanaḥ\nnidrālasya-pramādotthaṁ\ntat tāmasam udāhṛtam",
    "verse_text_no_samdhis": "yat agre ca anubandhe ca sukham mohanam ātmanaḥ nidrā ālasya pramāda uttham tat tāmasam udāhṛtam"
  },
  {
    "id": 661,
    "title": 18.4,
    "devanagari": "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः ।\nसत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः ॥ १८.४० ॥",
    "verse_text": "na tad asti pṛthivyāṁ vā\ndivi deveṣu vā punaḥ\nsattvaṁ prakṛti-jair muktaṁ\nyad ebhiḥ syāt tribhir guṇaiḥ",
    "verse_text_no_samdhis": "na tat asti pṛthivyām vā divi deveṣu vā punaḥ sattvam prakṛti jaiḥ muktam yat ebhiḥ syāt tribhiḥ guṇaiḥ"
  },
  {
    "id": 662,
    "title": 18.41,
    "devanagari": "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप ।\nकर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः ॥ १८.४१ ॥",
    "verse_text": "brāhmaṇa-kṣatriya-viśāṁ\nśūdrāṇāṁ ca paran-tapa\nkarmāṇi pravibhaktāni\nsvabhāva-prabhavair guṇaiḥ",
    "verse_text_no_samdhis": "brāhmaṇa kṣatriya viśām śūdrāṇām ca param tapa karmāṇi pravibhaktāni svabhāva prabhavaiḥ guṇaiḥ"
  },
  {
    "id": 663,
    "title": 18.42,
    "devanagari": "शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च ।\nज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम् ॥ १८.४२ ॥",
    "verse_text": "śamo damas tapaḥ śaucaṁ\nkṣāntir ārjavam eva ca\njñānaṁ vijñānam āstikyaṁ\nbrahma-karma svabhāva-jam",
    "verse_text_no_samdhis": "śamaḥ damaḥ tapaḥ śaucam kṣāntiḥ ārjavam eva ca jñānam vijñānam āstikyam brahma karma svabhāva jam"
  },
  {
    "id": 664,
    "title": 18.43,
    "devanagari": "शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम् ।\nदानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम् ॥ १८.४३ ॥",
    "verse_text": "śauryaṁ tejo dhṛtir dākṣyaṁ\nyuddhe cāpy apalāyanam\ndānam īśvara-bhāvaś ca\nkṣātraṁ karma svabhāva-jam",
    "verse_text_no_samdhis": "śauryam tejaḥ dhṛtiḥ dākṣyam yuddhe ca api apalāyanam dānam īśvara bhāvaḥ ca kṣātram karma svabhāva jam"
  },
  {
    "id": 665,
    "title": 18.44,
    "devanagari": "कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम् ।\nपरिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम् ॥ १८.४४ ॥",
    "verse_text": "kṛṣi-go-rakṣya-vāṇijyaṁ\nvaiśya-karma svabhāva-jam\nparicaryātmakaṁ karma\nśūdrasyāpi svabhāva-jam",
    "verse_text_no_samdhis": "kṛṣi go rakṣya vāṇijyam vaiśya karma svabhāva jam paricaryā ātmakam karma śūdrasya api svabhāva jam"
  },
  {
    "id": 666,
    "title": 18.45,
    "devanagari": "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः ।\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु ॥ १८.४५ ॥",
    "verse_text": "sve sve karmaṇy abhirataḥ\nsaṁsiddhiṁ labhate naraḥ\nsva-karma-nirataḥ siddhiṁ\nyathā vindati tac chṛṇu",
    "verse_text_no_samdhis": "sve sve karmaṇi abhirataḥ saṁsiddhim labhate naraḥ sva karma nirataḥ siddhim yathā vindati tat śṛṇu"
  },
  {
    "id": 667,
    "title": 18.46,
    "devanagari": "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् ।\nस्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः ॥ १८.४६ ॥",
    "verse_text": "yataḥ pravṛttir bhūtānāṁ\nyena sarvam idaṁ tatam\nsva-karmaṇā tam abhyarcya\nsiddhiṁ vindati mānavaḥ",
    "verse_text_no_samdhis": "yataḥ pravṛttiḥ bhūtānām yena sarvam idam tatam sva karmaṇā tam abhyarcya siddhim vindati mānavaḥ"
  },
  {
    "id": 668,
    "title": 18.47,
    "devanagari": "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥ १८.४७ ॥",
    "verse_text": "śreyān sva-dharmo viguṇaḥ\npara-dharmāt sv-anuṣṭhitāt\nsvabhāva-niyataṁ karma\nkurvan nāpnoti kilbiṣam",
    "verse_text_no_samdhis": "śreyān sva dharmaḥ viguṇaḥ para dharmāt su anuṣṭhitāt svabhāva niyatam karma kurvan na āpnoti kilbiṣam"
  },
  {
    "id": 669,
    "title": 18.48,
    "devanagari": "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् ।\nसर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः ॥ १८.४८ ॥",
    "verse_text": "saha-jaṁ karma kaunteya\nsa-doṣam api na tyajet\nsarvārambhā hi doṣeṇa\ndhūmenāgnir ivāvṛtāḥ",
    "verse_text_no_samdhis": "saha jam karma kaunteya sa doṣam api na tyajet sarva ārambhāḥ hi doṣeṇa dhūmena agniḥ iva āvṛtāḥ"
  },
  {
    "id": 670,
    "title": 18.49,
    "devanagari": "असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः ।\nनैष्कर्म्यसिद्धिं परमां संन्यासेनाधिगच्छति ॥ १८.४९ ॥",
    "verse_text": "asakta-buddhiḥ sarvatra\njitātmā vigata-spṛhaḥ\nnaiṣkarmya-siddhiṁ paramāṁ\nsannyāsenādhigacchati",
    "verse_text_no_samdhis": "asakta buddhiḥ sarvatra jita ātmā vigata spṛhaḥ naiṣkarmya siddhim paramām sannyāsena adhigacchati"
  },
  {
    "id": 671,
    "title": 18.5,
    "devanagari": "सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे ।\nसमासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा ॥ १८.५० ॥",
    "verse_text": "siddhiṁ prāpto yathā brahma\ntathāpnoti nibodha me\nsamāsenaiva kaunteya\nniṣṭhā jñānasya yā parā",
    "verse_text_no_samdhis": "siddhim prāptaḥ yathā brahma tathā āpnoti nibodha me samāsena eva kaunteya niṣṭhā jñānasya yā parā"
  },
  {
    "id": 672,
    "title": 18.51,
    "devanagari": "बुद्ध्या विशुद्ध्या युक्तो धृत्यात्मानं नियम्य च ।\nशब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च ॥ १८.५१ ॥",
    "verse_text": "buddhyā viśuddhayā yukto\ndhṛtyātmānaṁ niyamya ca\nśabdādīn viṣayāṁs tyaktvā\nrāga-dveṣau vyudasya ca",
    "verse_text_no_samdhis": "buddhyā viśuddhayā yuktaḥ dhṛtyā ātmānam niyamya ca śabda ādīn viṣayān tyaktvā rāga dveṣau vyudasya ca"
  },
  {
    "id": 673,
    "title": 18.52,
    "devanagari": "विविक्तसेवी लघ्वाशी यतवाक्कायमानसः ।\nध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः ॥ १८.५२ ॥",
    "verse_text": "vivikta-sevī laghv-āśī\nyata-vāk-kāya-mānasaḥ\ndhyāna-yoga-paro nityaṁ\nvairāgyaṁ samupāśritaḥ",
    "verse_text_no_samdhis": "vivikta sevī laghu āśī yata vāk kāya mānasaḥ dhyāna yoga paraḥ nityam vairāgyam samupāśritaḥ"
  },
  {
    "id": 674,
    "title": 18.53,
    "devanagari": "अहंकारं बलं दर्पं कामं क्रोधं परिग्रहम् ।\nविमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते ॥ १८.५३ ॥",
    "verse_text": "ahaṅkāraṁ balaṁ darpaṁ\nkāmaṁ krodhaṁ parigraham\nvimucya nirmamaḥ śānto\nbrahma-bhūyāya kalpate",
    "verse_text_no_samdhis": "ahaṅkāram balam darpam kāmam krodham parigraham vimucya nirmamaḥ śāntaḥ brahma bhūyāya kalpate"
  },
  {
    "id": 675,
    "title": 18.54,
    "devanagari": "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति ।\nसमः सर्वेषु भूतेषु मद्भक्तिं लभते पराम् ॥ १८.५४ ॥",
    "verse_text": "brahma-bhūtaḥ prasannātmā\nna śocati na kāṅkṣati\nsamaḥ sarveṣu bhūteṣu\nmad-bhaktiṁ labhate parām",
    "verse_text_no_samdhis": "brahma bhūtaḥ prasanna ātmā na śocati na kāṅkṣati samaḥ sarveṣu bhūteṣu mat bhaktim labhate parām"
  },
  {
    "id": 676,
    "title": 18.55,
    "devanagari": "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः ।\nततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम् ॥ १८.५५ ॥",
    "verse_text": "bhaktyā mām abhijānāti\nyāvān yaś cāsmi tattvataḥ\ntato māṁ tattvato jñātvā\nviśate tad-anantaram",
    "verse_text_no_samdhis": "bhaktyā mām abhijānāti yāvān yaḥ ca asmi tattvataḥ tataḥ mām tattvataḥ jñātvā viśate tat anantaram"
  },
  {
    "id": 677,
    "title": 18.56,
    "devanagari": "सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः ।\nमत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम् ॥ १८.५६ ॥",
    "verse_text": "sarva-karmāṇy api sadā\nkurvāṇo mad-vyapāśrayaḥ\nmat-prasādād avāpnoti\nśāśvataṁ padam avyayam",
    "verse_text_no_samdhis": "sarva karmāṇi api sadā kurvāṇaḥ mat vyapāśrayaḥ mat prasādāt avāpnoti śāśvatam padam avyayam"
  },
  {
    "id": 678,
    "title": 18.57,
    "devanagari": "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः ।\nबुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव ॥ १८.५७ ॥",
    "verse_text": "cetasā sarva-karmāṇi\nmayi sannyasya mat-paraḥ\nbuddhi-yogam upāśritya\nmac-cittaḥ satataṁ bhava",
    "verse_text_no_samdhis": "cetasā sarva karmāṇi mayi sannyasya mat paraḥ buddhi yogam upāśritya mat cittaḥ satatam bhava"
  },
  {
    "id": 679,
    "title": 18.58,
    "devanagari": "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि ।\nअथ चेत्त्वमहंकारान्न श्रोष्यसि विनङ्क्ष्यसि ॥ १८.५८ ॥",
    "verse_text": "mac-cittaḥ sarva-durgāṇi\nmat-prasādāt tariṣyasi\natha cet tvam ahaṅkārān\nna śroṣyasi vinaṅkṣyasi",
    "verse_text_no_samdhis": "mat cittaḥ sarva durgāṇi mat prasādāt tariṣyasi atha cet tvam ahaṅkārāt na śroṣyasi vinaṅkṣyasi"
  },
  {
    "id": 680,
    "title": 18.59,
    "devanagari": "यदहंकारमाश्रित्य न योत्स्य इति मन्यसे ।\nमिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति ॥ १८.५९ ॥",
    "verse_text": "yad ahaṅkāram āśritya\nna yotsya iti manyase\nmithyaiṣa vyavasāyas te\nprakṛtis tvāṁ niyokṣyati",
    "verse_text_no_samdhis": "yat ahaṅkāram āśritya na yotsye iti manyase mithyā eṣaḥ vyavasāyaḥ te prakṛtiḥ tvām niyokṣyati"
  },
  {
    "id": 681,
    "title": 18.6,
    "devanagari": "स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा ।\nकर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत् ॥ १८.६० ॥",
    "verse_text": "svabhāva-jena kaunteya\nnibaddhaḥ svena karmaṇā\nkartuṁ necchasi yan mohāt\nkariṣyasy avaśo ’pi tat",
    "verse_text_no_samdhis": "svabhāva jena kaunteya nibaddhaḥ svena karmaṇā kartum na icchasi yat mohāt kariṣyasi avaśaḥ api tat"
  },
  {
    "id": 682,
    "title": 18.61,
    "devanagari": "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति ।\nभ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ॥ १८.६१ ॥",
    "verse_text": "īśvaraḥ sarva-bhūtānāṁ\nhṛd-deśe ’rjuna tiṣṭhati\nbhrāmayan sarva-bhūtāni\nyantrārūḍhāni māyayā",
    "verse_text_no_samdhis": "īśvaraḥ sarva bhūtānām hṛt deśe arjuna tiṣṭhati bhrāmayan sarva bhūtāni yantra ārūḍhani māyayā"
  },
  {
    "id": 683,
    "title": 18.62,
    "devanagari": "तमेव शरणं गच्छ सर्वभावेन भारत ।\nतत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम् ॥ १८.६२ ॥",
    "verse_text": "tam eva śaraṇaṁ gaccha\nsarva-bhāvena bhārata\ntat-prasādāt parāṁ śāntiṁ\nsthānaṁ prāpsyasi śāśvatam",
    "verse_text_no_samdhis": "tam eva śaraṇam gaccha sarva bhāvena bhārata tat prasādāt parām śāntim sthānam prāpsyasi śāśvatam"
  },
  {
    "id": 684,
    "title": 18.63,
    "devanagari": "इति ते ज्ञानमाख्यातं गुह्याद्\\u200cगुह्यतरं मया ।\nविमृश्यैतदशेषेण यथेच्छसि तथा कुरु ॥ १८.६३ ॥",
    "verse_text": "iti te jñānam ākhyātaṁ\nguhyād guhya-taraṁ mayā\nvimṛśyaitad aśeṣeṇa\nyathecchasi tathā kuru",
    "verse_text_no_samdhis": "iti te jñānam ākhyātam guhyāt guhya taram mayā vimṛśya etat aśeṣeṇa yathā icchasi tathā kuru"
  },
  {
    "id": 685,
    "title": 18.64,
    "devanagari": "सर्वगुह्यतमं भूयः शृणु मे परमं वचः ।\nइष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम् ॥ १८.६४ ॥",
    "verse_text": "sarva-guhyatamaṁ bhūyaḥ\nśṛṇu me paramaṁ vacaḥ\niṣṭo ’si me dṛḍham iti\ntato vakṣyāmi te hitam",
    "verse_text_no_samdhis": "sarva guhya tamam bhūyaḥ śṛṇu me paramam vacaḥ iṣṭaḥ asi me dṛḍham iti tataḥ vakṣyāmi te hitam"
  },
  {
    "id": 686,
    "title": 18.65,
    "devanagari": "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥ १८.६५ ॥",
    "verse_text": "man-manā bhava mad-bhakto\nmad-yājī māṁ namaskuru\nmām evaiṣyasi satyaṁ te\npratijāne priyo ’si me",
    "verse_text_no_samdhis": "mat manāḥ bhava mat bhaktaḥ mat yājī mām namaskuru mām eva eṣyasi satyam te pratijāne priyaḥ asi me"
  },
  {
    "id": 687,
    "title": 18.66,
    "devanagari": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥ १८.६६ ॥",
    "verse_text": "sarva-dharmān parityajya\nmām ekaṁ śaraṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo\nmokṣayiṣyāmi mā śucaḥ",
    "verse_text_no_samdhis": "sarva dharmān parityajya mām ekam śaraṇam vraja aham tvām sarva pāpebhyaḥ mokṣayiṣyāmi mā śucaḥ"
  },
  {
    "id": 688,
    "title": 18.67,
    "devanagari": "इदं ते नातपस्काय नाभक्ताय कदाचन ।\nन चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति ॥ १८.६७ ॥",
    "verse_text": "idaṁ te nātapaskāya\nnābhaktāya kadācana\nna cāśuśrūṣave vācyaṁ\nna ca māṁ yo ’bhyasūyati",
    "verse_text_no_samdhis": "idam te na atapaskāya na abhaktāya kadācana na ca aśuśrūṣave vācyam na ca mām yaḥ abhyasūyati"
  },
  {
    "id": 689,
    "title": 18.68,
    "devanagari": "य इमं परमं गुह्यं मद्भक्तेष्वभिधास्यति ।\nभक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशयः ॥ १८.६८ ॥",
    "verse_text": "ya idaṁ paramaṁ guhyaṁ\nmad-bhakteṣv abhidhāsyati\nbhaktiṁ mayi parāṁ kṛtvā\nmām evaiṣyaty asaṁśayaḥ",
    "verse_text_no_samdhis": "yaḥ idam paramam guhyam mat bhakteṣu abhidhāsyati bhaktim mayi parām kṛtvā mām eva eṣyati asaṁśayaḥ"
  },
  {
    "id": 690,
    "title": 18.69,
    "devanagari": "न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तमः ।\nभविता न च मे तस्मादन्यः प्रियतरो भुवि ॥ १८.६९ ॥",
    "verse_text": "na ca tasmān manuṣyeṣu\nkaścin me priya-kṛttamaḥ\nbhavitā na ca me tasmād\nanyaḥ priya-taro bhuvi",
    "verse_text_no_samdhis": "na ca tasmāt manuṣyeṣu kaścit me priya kṛt tamaḥ bhavitā na ca me tasmāt anyaḥ priya taraḥ bhuvi"
  },
  {
    "id": 691,
    "title": 18.7,
    "devanagari": "अध्येष्यते च य इमं धर्म्यं संवादमावयोः ।\nज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः ॥ १८.७० ॥",
    "verse_text": "adhyeṣyate ca ya imaṁ\ndharmyaṁ saṁvādam āvayoḥ\njñāna-yajñena tenāham\niṣṭaḥ syām iti me matiḥ",
    "verse_text_no_samdhis": "adhyeṣyate ca yaḥ imam dharmyam saṁvādam āvayoḥ jñāna yajñena tena aham iṣṭaḥ syām iti me matiḥ"
  },
  {
    "id": 692,
    "title": 18.71,
    "devanagari": "श्रद्धावाननसूयश्च शृणुयादपि यो नरः ।\nसोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम् ॥ १८.७१ ॥",
    "verse_text": "śraddhāvān anasūyaś ca\nśṛṇuyād api yo naraḥ\nso ’pi muktaḥ śubhāḻ lokān\nprāpnuyāt puṇya-karmaṇām",
    "verse_text_no_samdhis": "śraddhā vān anasūyaḥ ca śṛṇuyāt api yaḥ naraḥ saḥ api muktaḥ śubhān lokān prāpnuyāt puṇya karmaṇām"
  },
  {
    "id": 693,
    "title": 18.72,
    "devanagari": "कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा ।\nकच्चिदज्ञानसंमोहः प्रनष्टस्ते धनंजय ॥ १८.७२ ॥",
    "verse_text": "kaccid etac chrutaṁ pārtha\ntvayaikāgreṇa cetasā\nkaccid ajñāna-sammohaḥ\npraṇaṣṭas te dhanañ-jaya",
    "verse_text_no_samdhis": "kaccit etat śrutam pārtha tvayā eka agreṇa cetasā kaccit ajñāna sammohaḥ praṇaṣṭaḥ te dhanam jaya"
  },
  {
    "id": 694,
    "title": 18.73,
    "devanagari": "अर्जुन उवाच ।\nनष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ॥ १८.७३ ॥",
    "verse_text": "arjuna uvāca\nnaṣṭo mohaḥ smṛtir labdhā\ntvat-prasādān mayācyuta\nsthito ’smi gata-sandehaḥ\nkariṣye vacanaṁ tava",
    "verse_text_no_samdhis": "arjunaḥ uvāca naṣṭaḥ mohaḥ smṛtiḥ labdhā tvat prasādāt mayā acyuta sthitaḥ asmi gata sandehaḥ kariṣye vacanam tava"
  },
  {
    "id": 695,
    "title": 18.74,
    "devanagari": "संजय उवाच ।\nइत्यहं वासुदेवस्य पार्थस्य च महात्मनः\nसंवादमिममश्रौषमद्भुतं रोमहर्षणम् ॥ १८.७४ ॥",
    "verse_text": "sañjaya uvāca\nity ahaṁ vāsudevasya\npārthasya ca mahātmanaḥ\nsaṁvādam imam aśrauṣam\nadbhutaṁ roma-harṣaṇam",
    "verse_text_no_samdhis": "sañjayaḥ uvāca iti aham vāsudevasya pārthasya ca mahā ātmanaḥ saṁvādam imam aśrauṣam adbhutam roma harṣaṇam"
  },
  {
    "id": 696,
    "title": 18.75,
    "devanagari": "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम् ।\nयोगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम् ॥ १८.७५ ॥",
    "verse_text": "vyāsa-prasādāc chrutavān\netad guhyam ahaṁ param\nyogaṁ yogeśvarāt kṛṣṇāt\nsākṣāt kathayataḥ svayam",
    "verse_text_no_samdhis": "vyāsa prasādāt śrutavān etat guhyam aham param yogam yoga īśvarāt kṛṣṇāt sākṣāt kathayataḥ svayam"
  },
  {
    "id": 697,
    "title": 18.76,
    "devanagari": "राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम् ।\nकेशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः ॥ १८.७६ ॥",
    "verse_text": "rājan saṁsmṛtya saṁsmṛtya\nsaṁvādam imam adbhutam\nkeśavārjunayoḥ puṇyaṁ\nhṛṣyāmi ca muhur muhuḥ",
    "verse_text_no_samdhis": "rājan saṁsmṛtya saṁsmṛtya saṁvādam imam adbhutam keśava arjunayoḥ puṇyam hṛṣyāmi ca muhuḥ muhuḥ"
  },
  {
    "id": 698,
    "title": 18.77,
    "devanagari": "तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः ।\nविस्मयो मे महान् राजन्हृष्यामि च पुनः पुनः ॥ १८.७७ ॥",
    "verse_text": "tac ca saṁsmṛtya saṁsmṛtya\nrūpam aty-adbhutaṁ hareḥ\nvismayo me mahān rājan\nhṛṣyāmi ca punaḥ punaḥ",
    "verse_text_no_samdhis": "tat ca saṁsmṛtya saṁsmṛtya rūpam ati adbhutam hareḥ vismayaḥ me mahān rājan hṛṣyāmi ca punaḥ punaḥ"
  },
  {
    "id": 699,
    "title": 18.78,
    "devanagari": "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥ १८.७८ ॥",
    "verse_text": "yatra yogeśvaraḥ kṛṣṇo\nyatra pārtho dhanur-dharaḥ\ntatra śrīr vijayo bhūtir\ndhruvā nītir matir mama",
    "verse_text_no_samdhis": "yatra yoga īśvaraḥ kṛṣṇaḥ yatra pārthaḥ dhanuḥ dharaḥ tatra śrīḥ vijayaḥ bhūtiḥ dhruvā nītiḥ matiḥ mama"
  }
];
const addChapterInfo = (slokas) => {
  const chapterRanges = {
    "Arjuna's Despondency": [0, 45],
    'The Yoga of Knowledge': [46, 117],
    'The Yoga of Action': [118, 160],
    'The Yoga of Wisdom': [161, 202],
    'The Yoga of Renunciation': [203, 231],
    'The Yoga of Meditation': [232, 278],
    'The Yoga of Knowledge and Wisdom': [279, 308],
    'The Imperishable Brahman': [309, 336],
    'The Royal Secret': [337, 370],
    'The Yoga of Divine Glories': [371, 412],
    'The Vision of the Universal Form': [413, 467],
    'The Yoga of Devotion': [468, 487],
    'The Field and the Knower of the Field': [488, 522],
    'The Three Modes of Material Nature': [523, 549],
    'The Yoga of the Supreme Spirit': [550, 568],
    'The Divine and Demoniac Natures': [569, 593],
    'The Threefold Faith': [594, 621],
    'The Yoga of Liberation': [622, 699]
  };

  const chapters: Chapter[] = [];

  for (const chapter in chapterRanges) {
    const [start, end] = chapterRanges[chapter];
    const chapterSlokas = slokas.filter((sloka) => sloka.id >= start && sloka.id <= end);
    chapters.push({
      name: chapter,
      slug: `/${chapters.length + 1}`,
      slokas: chapterSlokas,
    });
  }

  return chapters;
};

export const chapters = addChapterInfo(slokas);