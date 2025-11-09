export interface Lesson {
  id: string
  name: string
  chapter: number
  completed: boolean
}

export interface Course {
  id: string
  name: string
  emoji: string
  color: string
  lessons: Lesson[]
}

export interface CoursesData {
  courses: Course[]
}

export const coursesData: CoursesData = {
  courses: [
    {
      id: "physics",
      name: "Physics (الفيزياء) 💡",
      emoji: "💡",
      color: "#3b82f6",
      lessons: [
        // --- Chapter 1: (الباب الأول: التيار الكهربي وقانون أوم وقانونا كيرشوف) ---
        // الدرس الأول: التيار الكهربي وشدته وفرق الجهد
        { id: "p1_1_1", name: "Concept of Current (مفهوم التيار الكهربي وحاملات الشحنة)", chapter: 1, completed: false },
        { id: "p1_1_2", name: "Current Direction: Conventional vs. Electron Flow (الاتجاه التقليدي والفعلي)", chapter: 1, completed: false },
        { id: "p1_1_3", name: "Current Intensity (I) - Formula (I=Q/t) (تعريف شدة التيار وقانونه)", chapter: 1, completed: false },
        { id: "p1_1_4", name: "Unit of Current (Ampere) (وحدة قياس شدة التيار: الأمبير)", chapter: 1, completed: false },
        { id: "p1_1_5", name: "Concept of Potential Difference (V) (مفهوم فرق الجهد الكهربي)", chapter: 1, completed: false },
        { id: "p1_1_6", name: "Potential Difference Formula (V=W/Q) (قانون فرق الجهد)", chapter: 1, completed: false },
        { id: "p1_1_7", name: "Unit of Potential Difference (Volt) (وحدة قياس فرق الجهد: الفولت)", chapter: 1, completed: false },
        { id: "p1_1_8", name: "Electromotive Force (EMF/Vb) (القوة الدافعة الكهربية ومصادرها)", chapter: 1, completed: false },
        // الدرس الثاني: المقاومة الكهربية وقانون أوم
        { id: "p1_2_1", name: "Ohm's Law (نص قانون أوم) and Graphical Relation (العلاقة البيانية)", chapter: 1, completed: false },
        { id: "p1_2_2", name: "Concept of Resistance (R) (مفهوم المقاومة الكهربية) and Unit (Ohm) (وحدة الأوم)", chapter: 1, completed: false },
        { id: "p1_2_3", name: "Factors Affecting Resistance (العوامل التي يتوقف عليها المقاومة)", chapter: 1, completed: false },
        { id: "p1_2_4", name: "Resistance Formula (R = $\rho_e$ L/A) (القانون الرياضي للمقاومة)", chapter: 1, completed: false },
        { id: "p1_2_5", name: "Resistivity ($\rho_e$) (المقاومة النوعية) and Conductivity ($\sigma$) (التوصيلية الكهربية)", chapter: 1, completed: false },
        // الدرس الثالث: توصيل المقاومات
        { id: "p1_3_1", name: "Series Connection (التوصيل على التوالي): Formula (حساب $R_{\text{eq}}$)", chapter: 1, completed: false },
        { id: "p1_3_2", name: "Series Connection Properties (خصائص التوصيل على التوالي: ثبات I وتجزئة V)", chapter: 1, completed: false },
        { id: "p1_3_3", name: "Parallel Connection (التوصيل على التوازي): Formula (حساب $R_{\text{eq}}$)", chapter: 1, completed: false },
        { id: "p1_3_4", name: "Parallel Connection Properties (خصائص التوصيل على التوازي: ثبات V وتجزئة I)", chapter: 1, completed: false },
        { id: "p1_3_5", name: "Complex Circuits (تبسيط الدوائر المعقدة) and Points Method (طريقة النقط)", chapter: 1, completed: false },
        { id: "p1_3_6", name: "Resistance Cancellation Cases (حالات إلغاء المقاومات)", chapter: 1, completed: false },
        // الدرس الرابع: قانون أوم للدوائر المغلقة وقوانين كيرشوف
        { id: "p1_4_1", name: "Ohm's Law for Closed Circuits (قانون أوم للدائرة المغلقة) (Vb = I (R+r))", chapter: 1, completed: false },
        { id: "p1_4_2", name: "Battery Cases: Discharging (التفريغ) and Charging (الشحن)", chapter: 1, completed: false },
        { id: "p1_4_3", name: "Kirchhoff's First Law (KCL) - Charge Conservation (كيرشوف الأول: حفظ الشحنة)", chapter: 1, completed: false },
        { id: "p1_4_4", name: "Kirchhoff's Second Law (KVL) - Energy Conservation (كيرشوف الثاني: حفظ الطاقة)", chapter: 1, completed: false },
        
        // --- Chapter 2: (الباب الثاني: التأثير المغناطيسي وأجهزة القياس) ---
        { id: "p2_1_1", name: "Magnetic Flux ($\Phi_m$) (مفهوم الفيض المغناطيسي) and Unit (Weber) (وحدة الويبر)", chapter: 2, completed: false },
        { id: "p2_1_2", name: "Flux Density (B) (كثافة الفيض) and Unit (Tesla) (وحدة التسلا)", chapter: 2, completed: false },
        { id: "p2_1_3", name: "Magnetic Field (B) around a Straight Wire (المجال حول سلك مستقيم) - Ampere's Rule", chapter: 2, completed: false },
        { id: "p2_1_4", name: "Magnetic Field (B) of a Circular Coil (المجال لملف دائري)", chapter: 2, completed: false },
        { id: "p2_1_5", name: "Magnetic Field (B) of a Solenoid (المجال لملف لولبي)", chapter: 2, completed: false },
        { id: "p2_2_1", name: "Magnetic Force on a Wire (القوة على سلك) (F=BIL sin $\theta$)", chapter: 2, completed: false },
        { id: "p2_2_2", name: "Force Direction (تحديد اتجاه القوة): Fleming's Left-Hand Rule (فليمنج لليسار)", chapter: 2, completed: false },
        { id: "p2_2_3", name: "Mutual Force between Wires (القوة المتبادلة بين سلكين)", chapter: 2, completed: false },
        { id: "p2_2_4", name: "Torque ($\tau$) (عزم الازدواج) (τ=BIAN sin $\theta$) and Magnetic Dipole Moment (عزم ثنائي القطب)", chapter: 2, completed: false },
        { id: "p2_3_1", name: "Galvanometer (الجلفانومتر): Structure and Operation (التركيب وفكرة العمل)", chapter: 2, completed: false },
        { id: "p2_3_2", name: "Ammeter Conversion (تحويل الجلفانومتر إلى أميتر) (Current Shunt $R_s$)", chapter: 2, completed: false },
        { id: "p2_3_3", name: "Voltmeter Conversion (تحويل الجلفانومتر إلى فولتميتر) (Voltage Multiplier $R_m$)", chapter: 2, completed: false },
        { id: "p2_3_4", name: "Ohmmeter (الأوميتر): Structure and Operation (التركيب وفكرة العمل)", chapter: 2, completed: false },
        
        // --- Chapter 3: (الباب الثالث: الحث الكهرومغناطيسي) ---
        { id: "p3_1_1", name: "Electromagnetic Induction Phenomenon (ظاهرة الحث الكهرومغناطيسي)", chapter: 3, completed: false },
        { id: "p3_1_2", name: "Faraday's Law (قانون فاراداي) (EMF = -N $\Delta$$\Phi_m$ / $\Delta$t)", chapter: 3, completed: false },
        { id: "p3_1_3", name: "Lenz's Rule (قاعدة لنز) (Direction of Induced Current) (تحديد اتجاه التيار المستحث)", chapter: 3, completed: false },
        { id: "p3_1_4", name: "EMF in a Straight Wire (القوة الدافعة في سلك مستقيم) (EMF = B L v)", chapter: 3, completed: false },
        { id: "p3_2_1", name: "Mutual Induction (الحث المتبادل بين ملفين) (M)", chapter: 3, completed: false },
        { id: "p3_2_2", name: "Self-Induction (الحث الذاتي لملف) (L) and Applications (تطبيقاته)", chapter: 3, completed: false },
        { id: "p3_2_3", name: "Eddy Currents (التيارات الدوامية) (How to reduce them) (كيفية تقليلها)", chapter: 3, completed: false },
        { id: "p3_3_1", name: "The Dynamo (AC Generator) (الدينامو - المولد الكهربي)", chapter: 3, completed: false },
        { id: "p3_3_2", name: "EMF Calculation (حساب القوة الدافعة): Instantaneous, Average, Effective (اللحظية والمتوسطة والفعالة)", chapter: 3, completed: false },
        { id: "p3_3_3", name: "AC Rectification (تقويم التيار المتردد)", chapter: 3, completed: false },
        { id: "p3_4_1", name: "The Transformer (المحول الكهربي): Structure and Idea (التركيب وفكرة العمل)", chapter: 3, completed: false },
        { id: "p3_4_2", name: "Transformer Efficiency (كفاءة المحول) and Power Transmission (نقل الطاقة)", chapter: 3, completed: false },

        // --- Chapter 4: (الباب الرابع: دوائر التيار المتردد) ---
        { id: "p4_1_1", name: "AC Circuit: Pure Resistor (R) (دائرة مقاومة أومية نقية)", chapter: 4, completed: false },
        { id: "p4_1_2", name: "AC Circuit: Pure Inductor (L) (دائرة ملف حث نقي) - Inductive Reactance ($X_L$)", chapter: 4, completed: false },
        { id: "p4_1_3", name: "AC Circuit: Pure Capacitor (C) (دائرة مكثف نقي) - Capacitive Reactance ($X_C$)", chapter: 4, completed: false },
        { id: "p4_1_4", name: "Phasor Diagrams (تمثيل المتجهات الطورية)", chapter: 4, completed: false },
        { id: "p4_2_1", name: "RLC Series Circuit (دائرة RLC توالي) and Impedance (Z) (المعاوقة الكلية)", chapter: 4, completed: false },
        { id: "p4_2_2", name: "Phase Angle (زاوية الطور) in RLC circuits", chapter: 4, completed: false },
        { id: "p4_3_1", name: "Resonance Circuit (دائرة الرنين): Conditions (شروطها) and Frequency (تردد الرنين)", chapter: 4, completed: false },
        { id: "p4_3_2", name: "Oscillating Circuit (الدائرة المهتزة) and Tuning Circuit (دائرة الاستقبال)", chapter: 4, completed: false },

        // --- Chapter 5: (الباب الخامس: الفيزياء الحديثة) ---
        { id: "p5_1_1", name: "Black Body Radiation (إشعاع الجسم الأسود) and Planck's Curves (منحنيات بلانك)", chapter: 5, completed: false },
        { id:"p5_1_2", name: "Classical vs. Modern Physics (أزمة الفيزياء الكلاسيكية والحديثة)", chapter: 5, completed: false },
        { id: "p5_2_1", name: "Photoelectric Effect (الظاهرة الكهروضوئية) and The Photon (الفوتون)", chapter: 5, completed: false },
        { id: "p5_2_2", name: "Einstein's Equation (معادلة أينشتاين): Work Function (W) and Critical Frequency ($\nu_c$)", chapter: 5, completed: false },
        { id: "p5_3_1", name: "Compton Effect (ظاهرة كومتون) (Proving Particle Nature of Light) (إثبات الطبيعة الجسيمية)", chapter: 5, completed: false },
        { id: "p5_4_1", name: "De Broglie Hypothesis (فرضية دي براولي): Wave-Particle Duality (الطبيعة المزدوجة)", chapter: 5, completed: false },
        { id: "p5_4_2", name: "Electron Microscope (الميكروسكوب الإلكتروني)", chapter: 5, completed: false },
        { id: "p5_5_1", name: "Laser: Properties (خصائص الليزر) and Components (مكونات جهاز الليزر)", chapter: 5, completed: false },
        { id: "p5_5_2", name: "Semiconductors (أشباه الموصلات): Pure and Doped (N-type, P-type) (النقية والمطعمة)", chapter: 5, completed: false },
        { id: "p5_5_3", name: "The P-N Junction (Diode) (الوصلة الثنائية - الدايود)", chapter: 5, completed: false },
        { id: "p5_5_4", name: "The Transistor (الترانزستور): Structure and Uses (تركيبه واستخداماته)", chapter: 5, completed: false },
      ],
    },
    {
      id: "chemistry",
      name: "Chemistry (الكيمياء) 🧪",
      emoji: "🧪",
      color: "#10b981",
      lessons: [
        // --- Chapter 1: (الباب الأول: العناصر الانتقالية) ---
        { id: "c1_1_1", name: "Transition Elements (العناصر الانتقالية): Location and Electronic Configuration (الموقع والتوزيع)", chapter: 1, completed: false },
        { id: "c1_1_2", name: "Economic Importance (الأهمية الاقتصادية) of 1st Transition Series", chapter: 1, completed: false },
        { id: "c1_2_1", name: "General Properties: Atomic Radius (نصف القطر) and Atomic Mass (الكتلة الذرية)", chapter: 1, completed: false },
        { id: "c1_2_2", name: "General Properties: Oxidation States (تعدد حالات التأكسد)", chapter: 1, completed: false },
        { id: "c1_2_3", name: "General Properties: Magnetic (الخواص المغناطيسية) and Color (الأيونات الملونة)", chapter: 1, completed: false },
        { id: "c1_2_4", name: "General Properties: Catalytic Activity (النشاط الحفزي)", chapter: 1, completed: false },
        { id: "c1_3_1", name: "Iron (الحديد): Ores (خاماته) and Extraction (استخلاصه من الأفران)", chapter: 1, completed: false },
        { id: "c1_3_2", name: "Iron Reactions (تفاعلات الحديد) (with Air, Water, Acids)", chapter: 1, completed: false },
        { id: "c1_3_3", name: "Iron Oxides (أكاسيد الحديد): Preparation and Properties (التحضير والخواص)", chapter: 1, completed: false },

        // --- Chapter 2: (الباب الثاني: التحليل الكيميائي) ---
        { id: "c2_1_1", name: "Qualitative Analysis (التحليل الكيفي): Anion Detection (HCl Group) (مجموعة حمض الهيدروكلوريك)", chapter: 2, completed: false },
        { id: "c2_1_2", name: "Qualitative Analysis (التحليل الكيفي): Anion Detection (H₂SO₄ Group) (مجموعة حمض الكبريتيك)", chapter: 2, completed: false },
        { id: "c2_1_3", name: "Qualitative Analysis (التحليل الكيفي): Anion Detection (BaCl₂ Group) (مجموعة كلوريد الباريوم)", chapter: 2, completed: false },
        { id: "c2_1_4", name: "Qualitative Analysis (التحليل الكيفي): Cation Detection (الكشف عن الكاتيونات)", chapter: 2, completed: false },
        { id: "c2_2_1", name: "Quantitative Analysis (التحليل الكمي): Titration (المعايرة)", chapter: 2, completed: false },
        { id: "c2_2_2", name: "Quantitative Analysis (التحليل الكمي): Volatilization Method (طريقة التطاير)", chapter: 2, completed: false },
        { id: "c2_2_3", name: "Quantitative Analysis (التحليل الكمي): Precipitation Method (طريقة الترسيب)", chapter: 2, completed: false },

        // --- Chapter 3: (الباب الثالث: الاتزان الكيميائي) ---
        { id: "c3_1_1", name: "Rate of Reaction (معدل التفاعل) and Influencing Factors (العوامل المؤثرة)", chapter: 3, completed: false },
        { id: "c3_1_2", name: "Reversible vs. Irreversible Reactions (التفاعلات التامة والعكسية)", chapter: 3, completed: false },
        { id: "c3_2_1", name: "Chemical Equilibrium (الاتزان الكيميائي) and Equilibrium Constant ($K_c$, $K_p$)", chapter: 3, completed: false },
        { id: "c3_2_2", name: "Le Chatelier's Principle (قاعدة لوشاتيليه): Effect of Concentration, Pressure, Temperature", chapter: 3, completed: false },
        { id: "c3_3_1", name: "Ionic Equilibrium (الاتزان الأيوني) and Ostwald's Law (قانون استفالد)", chapter: 3, completed: false },
        { id: "c3_3_2", name: "Ionic Product of Water ($K_w$) (الحاصل الأيوني للماء) and pH (الرقم الهيدروجيني)", chapter: 3, completed: false },
        { id: "c3_3_3", name: "Hydrolysis of Salts (التميؤ) (تحديد نوع المحلول)", chapter: 3, completed: false },
        { id: "c3_3_4", name: "Solubility Product ($K_{sp}$) (حاصل الإذابة)", chapter: 3, completed: false },

        // --- Chapter 4: (الباب الرابع: الكيمياء الكهربية) ---
        { id: "c4_1_1", name: "Galvanic Cells (الخلايا الجلفانية) and Electrochemical Series (سلسلة الجهود)", chapter: 4, completed: false },
        { id: "c4_1_2", name: "Calculating EMF (حساب القوة الدافعة الكهربية)", chapter: 4, completed: false },
        { id: "c4_2_1", name: "Primary Cells (الخلايا الأولية): Mercury Cell, Fuel Cell (خلية الزئبق وخلية الوقود)", chapter: 4, completed: false },
        { id: "c4_2_2", name: "Secondary Cells (الخلايا الثانوية): Lead-Acid Battery, Lithium-Ion Battery (بطارية الرصاص والليثيوم)", chapter: 4, completed: false },
        { id: "c4_3_1", name: "Electrolytic Cells (خلايا التحليل الكهربي)", chapter: 4, completed: false },
        { id: "c4_3_2", name: "Faraday's Laws (قوانين فاراداي) (First and Second)", chapter: 4, completed: false },
        { id: "c4_3_3", name: "Applications of Electrolysis (تطبيقات التحليل): Electroplating (الطلاء الكهربي)", chapter: 4, completed: false },

        // --- Chapter 5: (الباب الخامس: الكيمياء العضوية) ---
        { id: "c5_1_1", name: "Organic Intro (مقدمة العضوية), Isomerism (الأيزومرات)", chapter: 5, completed: false },
        { id: "c5_1_2", name: "IUPAC Naming (تسمية IUPAC)", chapter: 5, completed: false },
        { id: "c5_2_1", name: "Alkanes (الألكانات): Methane (الميثان), Properties (الخواص)", chapter: 5, completed: false },
        { id: "c5_3_1", name: "Alkenes (الألكينات): Ethene (الإيثين), Markovnikov's Rule (قاعدة ماركونيكوف)", chapter: 5, completed: false },
        { id: "c5_4_1", name: "Alkynes (الألكاينات): Ethyne (الإيثاين), Properties (الخواص)", chapter: 5, completed: false },
        { id: "c5_5_1", name: "Benzene (البنزين العطري): Preparation and Reactions (التحضير والتفاعلات)", chapter: 5, completed: false },
        { id: "c5_5_2", name: "Directing Groups (توجيه المجموعات) (Ortho/Para vs. Meta)", chapter: 5, completed: false },
        { id: "c5_6_1", name: "Alcohols (الكحولات): Classification and Properties (التصنيف والخواص)", chapter: 5, completed: false },
        { id: "c5_7_1", name: "Phenols (الفينولات): Properties and Detection (الخواص والكشف)", chapter: 5, completed: false },
        { id: "c5_8_1", name: "Carboxylic Acids (الأحماض الكربوكسيلية): Properties (الخواص)", chapter: 5, completed: false },
        { id: "c5_9_1", name: "Esters (الإسترات): Esterification (الأسترة) and Hydrolysis (التحلل)", chapter: 5, completed: false },
      ],
    },
    {
      id: "biology",
      name: "Biology (الأحياء) 🧬",
      emoji: "🧬",
      color: "#ec4899",
      lessons: [
        // --- Chapter 1: (الفصل الأول: الدعامة والحركة) ---
        { id: "b1_1_1", name: "Support in Plants (الدعامة في النبات): Physiological (الفسيولوجية) and Structural (التركيبية)", chapter: 1, completed: false },
        { id: "b1_2_1", name: "Skeletal System (الجهاز الهيكلي): Axial Skeleton (الهيكل المحوري)", chapter: 1, completed: false },
        { id: "b1_2_2", name: "Skeletal System (الجهاز الهيكلي): Appendicular Skeleton (الهيكل الطرفي)", chapter: 1, completed: false },
        { id: "b1_2_3", name: "Joints (المفاصل), Ligaments (الأربطة), and Tendons (الأوتار)", chapter: 1, completed: false },
        { id: "b1_3_1", name: "Movement in Plants (الحركة في النبات)", chapter: 1, completed: false },
        { id: "b1_3_2", name: "Muscle Structure (تركيب العضلة) and Motor Unit (الوحدة الحركية)", chapter: 1, completed: false },
        { id: "b1_3_3", name: "Muscular Contraction (الانقباض العضلي): Sliding Filament Theory (نظرية الخيوط المنزلقة)", chapter: 1, completed: false },

        // --- Chapter 2: (الفصل الثاني: التنسيق الهرموني) ---
        { id: "b2_1_1", name: "Hormones in Plants (الأوكسينات) and Endocrine Glands (الغدد الصماء)", chapter: 2, completed: false },
        { id: "b2_2_1", name: "Pituitary Gland (الغدة النخامية) (Anterior and Posterior Lobes)", chapter: 2, completed: false },
        { id: "b2_2_2", name: "Thyroid and Parathyroid Glands (الغدة الدرقية والجار درقية)", chapter: 2, completed: false },
        { id: "b2_2_3", name: "Adrenal Glands (الغدتان الكظريتان)", chapter: 2, completed: false },
        { id: "b2_2_4", name: "Pancreas (البنكرياس) (Insulin and Glucagon)", chapter: 2, completed: false },
        { id: "b2_2_5", name: "Gonads (الغدد التناسلية)", chapter: 2, completed: false },

        // --- Chapter 3: (الفصل الثالث: التكاثر) ---
        { id: "b3_1_1", name: "Asexual Reproduction (التكاثر اللاجنسي): Methods (طرقه)", chapter: 3, completed: false },
        { id: "b3_1_2", name: "Sexual Reproduction (التكاثر الجنسي) and Alternation of Generations (تعاقب الأجيال)", chapter: 3, completed: false },
        { id: "b3_2_1", name: "Reproduction in Flowering Plants (التكاثر في النباتات الزهرية): Flower Structure (تركيب الزهرة)", chapter: 3, completed: false },
        { id: "b3_2_2", name: "Reproduction in Flowering Plants (التكاثر في النباتات الزهرية): Double Fertilization (الإخصاب المزدوج)", chapter: 3, completed: false },
        { id: "b3_3_1", name: "Human Reproductive System (الجهاز التناسلي البشري): Male (الذكري)", chapter: 3, completed: false },
        { id: "b3_3_2", name: "Human Reproductive System (الجهاز التناسلي البشري): Female (الأنثوي)", chapter: 3, completed: false },
        { id: "b3_3_3", name: "Gametogenesis (تكوين الأمشاج) and Menstrual Cycle (دورة الطمث)", chapter: 3, completed: false },
        { id: "b3_3_4", name: "Fertilization, Pregnancy, and Birth Control (الإخصاب والحمل ومنع الحمل)", chapter: 3, completed: false },

        // --- Chapter 4: (الفصل الرابع: المناعة) ---
        { id: "b4_1_1", name: "Immunity in Plants (المناعة في النبات)", chapter: 4, completed: false },
        { id: "b4_2_1", name: "Immune System Components (مكونات الجهاز المناعي): Organs and Cells (الأعضاء والخلايا)", chapter: 4, completed: false },
        { id: "b4_2_2", name: "First and Second Lines of Defense (خطوط الدفاع الأول والثاني)", chapter: 4, completed: false },
        { id: "b4_3_1", name: "Acquired Immunity (المناعة المكتسبة): Humoral Immunity (الخلطية)", chapter: 4, completed: false },
        { id: "b4_3_2", name: "Acquired Immunity (المناعة المكتسبة): Cellular Immunity (الخلوية)", chapter: 4, completed: false },

        // --- Chapter 5: (الفصل الخامس: البيولوجيا الجزيئية) ---
        { id: "b5_1_1", name: "DNA as Genetic Material (إثبات أن DNA هو المادة الوراثية)", chapter: 5, completed: false },
        { id: "b5_1_2", name: "DNA Structure (تركيب DNA) and Replication (تضاعف DNA)", chapter: 5, completed: false },
        { id: "b5_1_3", name: "DNA Repair (إصلاح عيوب DNA) and Mutations (الطفرات)", chapter: 5, completed: false },
        { id: "b5_2_1", name: "RNA Structure and Types (تركيب وأنواع RNA)", chapter: 5, completed: false },
        { id: "b5_2_2", name: "Protein Synthesis (تخليق البروتين): Transcription (النسخ) and Translation (الترجمة)", chapter: 5, completed: false },
        { id: "b5_3_1", name: "Genetic Engineering (الهندسة الوراثية) and Human Genome (الجينوم البشري)", chapter: 5, completed: false },
      ],
    },
    {
      id: "arabic",
      name: "Arabic Language (اللغة العربية) 📚",
      emoji: "📚",
      color: "#f59e0b",
      lessons: [
        // --- Chapter 1: (النحو - الوحدة الأولى: النطق والإملاء) ---
        { id: "ar1_1_1", name: "Grammar: Hamzat Al-Qat' (همزة القطع) and Al-Wasl (ألف الوصل)", chapter: 1, completed: false },
        { id: "ar1_1_2", name: "Grammar: Types of Waw (أنواع الواوات) and Al-Taa' (التاء المربوطة والمفتوحة)", chapter: 1, completed: false },

        // --- Chapter 2: (النحو - الوحدة الثانية: الأبنية) ---
        { id: "ar1_2_1", name: "Grammar: Operating Derivatives (المشتقات العاملة): Ism Al-Fa'el (اسم الفاعل)", chapter: 2, completed: false },
        { id: "ar1_2_2", name: "Grammar: Operating Derivatives (المشتقات العاملة): Siyagh Al-Mubalagha (صيغ المبالغة)", chapter: 2, completed: false },
        { id: "ar1_2_3", name: "Grammar: Operating Derivatives (المشتقات العاملة): Ism Al-Maf'oul (اسم المفعول)", chapter: 2, completed: false },
        { id: "ar1_2_4", name: "Grammar: Sources (المصادر): Explicit (الصريحة) and Interpreted (المؤولة)", chapter: 2, completed: false },
        { id: "ar1_2_5", name: "Grammar: Ism Marra/Hay'a (اسم المرة واسم الهيئة)", chapter: 2, completed: false },

        // --- Chapter 3: (النحو - الوحدة الثالثة: الجملة الاسمية) ---
        { id: "ar1_3_1", name: "Grammar: Al-Mubtada' and Al-Khabar (أحكام المبتدأ والخبر)", chapter: 3, completed: false },
        { id: "ar1_3_2", name: "Grammar: Nawaasikh (النواسخ): Kaana and its sisters (كان وأخواتها)", chapter: 3, completed: false },
        { id: "ar1_3_3", name: "Grammar: Nawaasikh (النواسخ): Kaada and its sisters (أفعال المقاربة والرجاء والشروع)", chapter: 3, completed: false },
        { id: "ar1_3_4", name: "Grammar: Nawaasikh (النواسخ): Inna and its sisters (إن وأخواتها)", chapter: 3, completed: false },
        { id: "ar1_3_5", name: "Grammar: Nawaasikh (النواسخ): Laa Al-Nafiya lil-Jins (لا النافية للجنس)", chapter: 3, completed: false },

        // --- Chapter 4: (النحو - الوحدة الرابعة: الجملة الفعلية) ---
        { id: "ar1_4_1", name: "Grammar: Al-Fi'l Al-Mudaari' (الفعل المضارع): Nasb (النصب)", chapter: 4, completed: false },
        { id: "ar1_4_2", name: "Grammar: Al-Fi'l Al-Mudaari' (الفعل المضارع): Jazm (الجزم)", chapter: 4, completed: false },
        { id: "ar1_4_3", name: "Grammar: Al-Fi'l Al-Mudaari' (الفعل المضارع): Ta'keed bi-Noon (توكيد الفعل بالنون)", chapter: 4, completed: false },

        // --- Chapter 5: (النحو - الوحدة الخامسة: المنصوبات والتوابع) ---
        { id: "ar1_5_1", name: "Grammar: Al-Mafa'eel (المفاعيل الخمسة)", chapter: 5, completed: false },
        { id: "ar1_5_2", name: "Grammar: Al-Haal (الحال)", chapter: 5, completed: false },
        { id: "ar1_5_3", name: "Grammar: Al-Tamyeez (التمييز)", chapter: 5, completed: false },
        { id: "ar1_5_4", name: "Grammar: Al-Munada (المنادى)", chapter: 5, completed: false },
        { id: "ar1_5_5", name: "Grammar: Al-Istithnaa' (الاستثناء)", chapter: 5, completed: false },
        { id: "ar1_5_6", name: "Grammar: Al-Tawaabi' (التوابع): Na't, 'Atf, Tawkeed, Badal (النعت، العطف، التوكيد، البدل)", chapter: 5, completed: false },

        // --- Chapter 6: (الأدب - مدارس الشعر) ---
        { id: "ar2_1_1", name: "Literature: Al-Ihyaa' wa Al-Ba'th School (مدرسة الإحياء والبعث والكلاسيكية الجديدة)", chapter: 6, completed: false },
        { id: "ar2_1_2", name: "Literature: The Romantic Trend (الاتجاه الوجداني)", chapter: 6, completed: false },
        { id: "ar2_1_3", name: "Literature: Al-Diwan School (مدرسة الديوان)", chapter: 6, completed: false },
        { id: "ar2_1_4", name: "Literature: Apollo School (مدرسة أبولو)", chapter: 6, completed: false },
        { id: "ar2_1_5", name: "Literature: Al-Mahajar School (مدرسة المهاجر)", chapter: 6, completed: false },
        { id: "ar2_1_6", name: "Literature: The Realist School (المدرسة الواقعية)", chapter: 6, completed: false },

        // --- Chapter 7: (الأدب - فنون النثر) ---
        { id: "ar2_2_1", name: "Literature: Prose Arts (فنون النثر) - The Essay (المقال)", chapter: 7, completed: false },
        { id: "ar2_2_2", name: "Literature: Prose Arts (فنون النثر) - The Novel (الرواية)", chapter: 7, completed: false },
        { id: "ar2_2_3", name: "Literature: Prose Arts (فنون النثر) - The Short Story (القصة القصيرة)", chapter: 7, completed: false },
        { id: "ar2_2_4", name: "Literature: Prose Arts (فنون النثر) - The Play (المسرحية)", chapter: 7, completed: false },
        
        // --- Chapter 8: (البلاغة والنصوص والقصة) ---
        { id: "ar3_1_1", name: "Rhetoric (البلاغة): The Poetic Experience (التجربة الشعرية)", chapter: 8, completed: false },
        { id: "ar3_1_2", name: "Rhetoric (البلاغة): Organic Unity (الوحدة العضوية)", chapter: 8, completed: false },
        { id: "ar3_2_1", name: "Texts (النصوص): Analysis of Poems and Prose (تحليل النصوص المقررة)", chapter: 8, completed: false },
        { id: "ar3_3_1", name: "Story (القصة): Al-Ayyaam by Taha Hussein (الأيام) - Analysis (تحليل الفصول)", chapter: 8, completed: false },
      ],
    },
    {
      id: "english",
      name: "English Language (اللغة الإنجليزية) 🇬🇧",
      emoji: "🇬🇧",
      color: "#8b5cf6",
      lessons: [
        // --- Chapter 1: Grammar (القواعد) ---
        // (Units 1-2)
        { id: "en1_1_1", name: "Grammar (1-2): Present Perfect (المضارع التام)", chapter: 1, completed: false },
        { id: "en1_1_2", name: "Grammar (1-2): Present Perfect Continuous (المضارع التام المستمر)", chapter: 1, completed: false },
        { id: "en1_1_3", name: "Grammar (1-2): Past Perfect (الماضي التام) vs. Simple Past (الماضي البسيط)", chapter: 1, completed: false },
        { id: "en1_1_4", name: "Grammar (1-2): Past Continuous (الماضي المستمر)", chapter: 1, completed: false },
        // (Units 3-4)
        { id: "en1_2_1", name: "Grammar (3-4): Future Forms (أشكال المستقبل) (will, going to, Present Continuous)", chapter: 1, completed: false },
        { id: "en1_2_2", name: "Grammar (3-4): Future Continuous and Future Perfect (المستقبل المستمر والتام)", chapter: 1, completed: false },
        // (Units 5-6)
        { id: "en1_3_1", name: "Grammar (5-6): Reported Speech - Statements (الكلام المنقول - الجمل الخبرية)", chapter: 1, completed: false },
        { id: "en1_3_2", name: "Grammar (5-6): Reported Speech - Questions and Commands (الأسئلة والأوامر)", chapter: 1, completed: false },
        // (Units 7-8)
        { id: "en1_4_1", name: "Grammar (7-8): Passive Voice (المبني للمجهول) (All Tenses)", chapter: 1, completed: false },
        { id: "en1_4_2", name: "Grammar (7-8): Causative (Have/Get something done) (السببية)", chapter: 1, completed: false },
        // (Units 9-10)
        { id: "en1_5_1", name: "Grammar (9-10): Conditional Sentences (الجمل الشرطية) (Types 0, 1, 2, 3)", chapter: 1, completed: false },
        { id: "en1_5_2", name: "Grammar (9-10): Alternatives to 'If' (بدائل If) (Unless, Provided, etc.)", chapter: 1, completed: false },
        // (Units 11-12)
        { id: "en1_6_1", name: "Grammar (11-12): Relative Clauses (عبارات الوصل) (Who, Which, That, Whose)", chapter: 1, completed: false },
        { id: "en1_6_2", name: "Grammar (11-12): Omission of Relative Pronouns (حذف ضمائر الوصل)", chapter: 1, completed: false },
        { id: "en1_6_3", name: "Grammar (11-12): Modal Verbs (الأفعال الناقصة) (Deduction, Necessity, Advice)", chapter: 1, completed: false },
        { id: "en1_6_4", name: "Grammar (11-12): Gerunds and Infinitives (الأسماء الفعلية والمصادر)", chapter: 1, completed: false },

        // --- Chapter 2: Vocabulary (المفردات مجمعة) ---
        { id: "en2_1_1", name: "Vocabulary (Units 1-4): Main Vocab, Synonyms, Antonyms (المفردات الأساسية)", chapter: 2, completed: false },
        { id: "en2_1_2", name: "Vocabulary (Units 5-8): Collocations, Phrasal Verbs, Idioms (المتلازمات والأفعال الاصطلاحية)", chapter: 2, completed: false },
        { id: "en2_1_3", name: "Vocabulary (Units 9-12): Derivatives (الاشتقاقات) (Nouns, Verbs, Adjectives)", chapter: 2, completed: false },

        // --- Chapter 3: Skills (المهارات) ---
        { id: "en3_1_1", name: "Skills: Reading Comprehension Techniques (تقنيات استيعاب المقروء)", chapter: 3, completed: false },
        { id: "en3_2_1", name: "Skills: Translation (الترجمة) (English to Arabic)", chapter: 3, completed: false },
        { id: "en3_2_2", name: "Skills: Translation (الترجمة) (Arabic to English)", chapter: 3, completed: false },
        { id: "en3_3_1", name: "Writing: Essay Structure and Types (هيكل وأنواع المقالات)", chapter: 3, completed: false },
        { id: "en3_3_2", name: "Writing: Punctuation and Cohesion (علامات الترقيم والترابط)", chapter: 3, completed: false },
        
        // --- Chapter 4: Novel (القصة) ---
        { id: "en4_1_1", name: "Novel (القصة): Main Characters and Plot Analysis (تحليل الشخصيات الرئيسية وأحداث القصة)", chapter: 4, completed: false },
        { id: "en4_1_2", name: "Novel (القصة): Themes and Critical Thinking (الأفكار الرئيسية والتفكير النقدي)", chapter: 4, completed: false },
        { id: "en4_1_3", name: "Novel (القصة): Key Quotes Analysis (تحليل الاقتباسات الهامة)", chapter: 4, completed: false },
      ],
    },
  ],
}
