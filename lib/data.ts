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
      name: "الفيزياء 💡",
      emoji: "💡",
      color: "#3b82f6",
      lessons: [
        // --- الباب الأول: التيار الكهربي وقانون أوم وقانونا كيرشوف (Chapter 1) ---
        { id: "p1_1_1", name: "مفهوم التيار الكهربي وحاملات الشحنة", chapter: 1, completed: false },
        { id: "p1_1_2", name: "الاتجاه التقليدي للتيار والاتجاه الفعلي (الإلكتروني)", chapter: 1, completed: false },
        { id: "p1_1_3", name: "تعريف شدة التيار (I) وقانونه (I=Q/t)", chapter: 1, completed: false },
        { id: "p1_1_4", name: "وحدة قياس شدة التيار (الأمبير) وكيفية حسابه", chapter: 1, completed: false },
        { id: "p1_1_5", name: "مفهوم فرق الجهد الكهربي (V)", chapter: 1, completed: false },
        { id: "p1_1_6", name: "تعريف فرق الجهد (V) وقانونه (V=W/Q)", chapter: 1, completed: false },
        { id: "p1_1_7", name: "وحدة قياس فرق الجهد (الفولت)", chapter: 1, completed: false },
        { id: "p1_1_8", name: "القوة الدافعة الكهربية (Vb) ومصادرها", chapter: 1, completed: false },
        { id: "p1_2_1", name: "نص قانون أوم (Ohm's Law) والعلاقة البيانية", chapter: 1, completed: false },
        { id: "p1_2_2", name: "مفهوم المقاومة الكهربية (R) ووحدة قياسها (الأوم)", chapter: 1, completed: false },
        { id: "p1_2_3", name: "العوامل التي يتوقف عليها المقاومة (الطول، المساحة، النوع، الحرارة)", chapter: 1, completed: false },
        { id: "p1_2_4", name: "القانون الرياضي للمقاومة (R = $\rho_e$ L/A)", chapter: 1, completed: false },
        { id: "p1_2_5", name: "المقاومة النوعية ($\rho_e$) وتعريفها ووحدتها", chapter: 1, completed: false },
        { id: "p1_2_6", name: "التوصيلية الكهربية ($\sigma$) وعلاقتها بالمقاومة النوعية", chapter: 1, completed: false },
        { id: "p1_3_1", name: "التوصيل على التوالي: حساب $R_{\text{eq}}$", chapter: 1, completed: false },
        { id: "p1_3_2", name: "خصائص التوصيل على التوالي (ثبات I وتجزئة V)", chapter: 1, completed: false },
        { id: "p1_3_3", name: "التوصيل على التوازي: حساب $R_{\text{eq}}$", chapter: 1, completed: false },
        { id: "p1_3_4", name: "خصائص التوصيل على التوازي (ثبات V وتجزئة I)", chapter: 1, completed: false },
        { id: "p1_3_5", name: "تبسيط الدوائر المعقدة (طريقة النقط)", chapter: 1, completed: false },
        { id: "p1_3_6", name: "حالات إلغاء المقاومات (القنطرة)", chapter: 1, completed: false },
        { id: "p1_4_1", name: "قانون أوم للدائرة المغلقة (Vb = I (R+r))", chapter: 1, completed: false },
        { id: "p1_4_2", name: "المقاومة الداخلية للبطارية (r) وحالات البطارية (التفريغ والشحن)", chapter: 1, completed: false },
        { id: "p1_4_3", name: "قانون كيرشوف الأول (KCL) (حفظ الشحنة)", chapter: 1, completed: false },
        { id: "p1_4_4", name: "قانون كيرشوف الثاني (KVL) (حفظ الطاقة) وتطبيقاته", chapter: 1, completed: false },

        // --- الباب الثاني: التأثير المغناطيسي وأجهزة القياس (Chapter 2) ---
        { id: "p2_1_1", name: "مفهوم الفيض المغناطيسي ($\Phi_m$) ووحدته (ويبر)", chapter: 2, completed: false },
        { id: "p2_1_2", name: "مفهوم كثافة الفيض (B) ووحدته (تسلا)", chapter: 2, completed: false },
        { id: "p2_1_3", name: "كثافة الفيض (B) حول سلك مستقيم (قاعدة اليد اليمنى لأمبير)", chapter: 2, completed: false },
        { id: "p2_1_4", name: "كثافة الفيض (B) لملف دائري (القانون والعوامل)", chapter: 2, completed: false },
        { id: "p2_1_5", name: "كثافة الفيض (B) لملف لولبي (القانون عند المحور)", chapter: 2, completed: false },
        { id: "p2_2_1", name: "القوة المؤثرة على سلك يمر به تيار (F=BIL sin $\theta$)", chapter: 2, completed: false },
        { id: "p2_2_2", name: "تحديد اتجاه القوة (قاعدة فليمنج لليد اليسرى)", chapter: 2, completed: false },
        { id: "p2_2_3", name: "القوة المتبادلة بين سلكين متوازيين (تجاذب وتنافر)", chapter: 2, completed: false },
        { id: "p2_2_4", name: "عزم الازدواج ($\tau$) وقانونه (τ=BIAN sin $\theta$)", chapter: 2, completed: false },
        { id: "p2_2_5", name: "عزم ثنائي القطب المغناطيسي", chapter: 2, completed: false },
        { id: "p2_3_1", name: "الجلفانومتر ذو الملف المتحرك (التركيب وفكرة العمل)", chapter: 2, completed: false },
        { id: "p2_3_2", name: "تحويل الجلفانومتر إلى أميتر (مجزئ التيار $R_s$)", chapter: 2, completed: false },
        { id: "p2_3_3", name: "تحويل الجلفانومتر إلى فولتميتر (مضاعف الجهد $R_m$)", chapter: 2, completed: false },
        { id: "p2_3_4", name: "جهاز الأوميتر (التركيب وفكرة العمل)", chapter: 2, completed: false },

        // --- الباب الثالث: الحث الكهرومغناطيسي (Chapter 3) ---
        { id: "p3_1_1", name: "ظاهرة الحث الكهرومغناطيسي", chapter: 3, completed: false },
        { id: "p3_1_2", name: "قانون فاراداي (EMF = -N $\Delta$$\Phi_m$ / $\Delta$t)", chapter: 3, completed: false },
        { id: "p3_1_3", name: "قاعدة لنز (تحديد اتجاه التيار المستحث)", chapter: 3, completed: false },
        { id: "p3_1_4", name: "القوة الدافعة المستحثة في سلك مستقيم (EMF = B L v)", chapter: 3, completed: false },
        { id: "p3_2_1", name: "الحث المتبادل بين ملفين (معامل M)", chapter: 3, completed: false },
        { id: "p3_2_2", name: "الحث الذاتي لملف (معامل L) وتطبيقاته", chapter: 3, completed: false },
        { id: "p3_2_3", name: "التيارات الدوامية (أضرارها وكيفية تقليلها)", chapter: 3, completed: false },
        { id: "p3_3_1", name: "المولد الكهربي (الدينامو) (التركيب وفكرة العمل)", chapter: 3, completed: false },
        { id: "p3_3_2", name: "حساب القوة الدافعة (اللحظية، المتوسطة، الفعالة)", chapter: 3, completed: false },
        { id: "p3_3_3", name: "تقويم التيار المتردد", chapter: 3, completed: false },
        { id: "p3_4_1", name: "المحول الكهربي (التركيب وفكرة العمل)", chapter: 3, completed: false },
        { id: "p3_4_2", name: "كفاءة المحول (المثالي وغير المثالي) ونقل الطاقة", chapter: 3, completed: false },

        // --- الباب الرابع: دوائر التيار المتردد (Chapter 4) ---
        { id: "p4_1_1", name: "دائرة مقاومة أومية نقية (R)", chapter: 4, completed: false },
        { id: "p4_1_2", name: "دائرة ملف حث نقي (L) (المفاعلة الحثية $X_L$)", chapter: 4, completed: false },
        { id: "p4_1_3", name: "دائرة مكثف نقي (C) (المفاعلة السعوية $X_C$)", chapter: 4, completed: false },
        { id: "p4_1_4", name: "تمثيل المتجهات الطورية (Phasor Diagrams)", chapter: 4, completed: false },
        { id: "p4_2_1", name: "دائرة التوالي (R-L-C) وحساب المعاوقة الكلية (Z)", chapter: 4, completed: false },
        { id: "p4_2_2", name: "حساب زاوية الطور في الدوائر المركبة", chapter: 4, completed: false },
        { id: "p4_3_1", name: "دائرة الرنين (شروطها وخواصها)", chapter: 4, completed: false },
        { id: "p4_3_2", name: "حساب تردد الرنين", chapter: 4, completed: false },
        { id: "p4_3_3", name: "الدائرة المهتزة ودائرة الاستقبال", chapter: 4, completed: false },

        // --- الباب الخامس: الفيزياء الحديثة (Chapter 5) ---
        { id: "p5_1_1", name: "إشعاع الجسم الأسود ومنحنيات بلانك", chapter: 5, completed: false },
        { id: "p5_1_2", name: "أزمة الفيزياء الكلاسيكية وتفسير بلانك (الفوتون)", chapter: 5, completed: false },
        { id: "p5_2_1", name: "الظاهرة الكهروضوئية وتفسيرها الكمي", chapter: 5, completed: false },
        { id: "p5_2_2", name: "معادلة أينشتاين (دالة الشغل W والتردد الحرج $\nu_c$)", chapter: 5, completed: false },
        { id: "p5_3_1", name: "ظاهرة كومتون (إثبات الطبيعة الجسيمية للفوتون)", chapter: 5, completed: false },
        { id: "p5_4_1", name: "فرضية دي براولي (الطبيعة الموجية للجسيمات $\lambda$ = h/p)", chapter: 5, completed: false },
        { id: "p5_4_2", name: "الميكروسكوب الإلكتروني (تركيبه وفكرة عمله)", chapter: 5, completed: false },
        { id: "p5_5_1", name: "الليزر: خصائص أشعته (النقاء الطيفي، الترابط، الشدة)", chapter: 5, completed: false },
        { id: "p5_5_2", name: "مكونات جهاز الليزر (الوسط الفعال، مصدر الطاقة، التجويف الرنيني)", chapter: 5, completed: false },
        { id: "p5_5_3", name: "أشباه الموصلات (النقية والمطعمة N-type و P-type)", chapter: 5, completed: false },
        { id: "p5_5_4", name: "الوصلة الثنائية (الدايود) (التوصيل الأمامي والعكسي)", chapter: 5, completed: false },
        { id: "p5_5_5", name: "الترانزستور (التركيب والاستخدام كمفتاح ومكبر)", chapter: 5, completed: false },
      ],
    },
    {
      id: "chemistry",
      name: "الكيمياء 🧪",
      emoji: "🧪",
      color: "#10b981",
      lessons: [
        // --- الباب الأول: العناصر الانتقالية (Chapter 1) ---
        { id: "c1_1_1", name: "موقع العناصر الانتقالية والتوزيع الإلكتروني (والحالات الشاذة)", chapter: 1, completed: false },
        { id: "c1_1_2", name: "الأهمية الاقتصادية لعناصر السلسلة الانتقالية الأولى", chapter: 1, completed: false },
        { id: "c1_2_1", name: "الخواص العامة: نصف القطر الذري والكتلة الذرية (شذوذ النيكل)", chapter: 1, completed: false },
        { id: "c1_2_2", name: "الخواص العامة: تعدد حالات التأكسد", chapter: 1, completed: false },
        { id: "c1_2_3", name: "الخواص العامة: الخواص المغناطيسية (البارا والدايا)", chapter: 1, completed: false },
        { id: "c1_2_4", name: "الخواص العامة: الأيونات الملونة والنشاط الحفزي", chapter: 1, completed: false },
        { id: "c1_3_1", name: "الحديد: خاماته ومراحل استخلاصه (التجهيز والاختزال)", chapter: 1, completed: false },
        { id: "c1_3_2", name: "الحديد: تفاعلاته (مع الهواء، الماء، الأحماض)", chapter: 1, completed: false },
        { id: "c1_3_3", name: "أكاسيد الحديد: تحضيرها وخواصها (مخطط الأكاسيد)", chapter: 1, completed: false },

        // --- الباب الثاني: التحليل الكيميائي (Chapter 2) ---
        { id: "c2_1_1", name: "التحليل الكيفي: الكشف عن أنيونات مجموعة (HCl)", chapter: 2, completed: false },
        { id: "c2_1_2", name: "التحليل الكيفي: الكشف عن أنيونات مجموعة (H₂SO₄)", chapter: 2, completed: false },
        { id: "c2_1_3", name: "التحليل الكيفي: الكشف عن أنيونات مجموعة (BaCl₂)", chapter: 2, completed: false },
        { id: "c2_1_4", name: "التحليل الكيفي: الكشف عن الكاتيونات (المجموعات التحليلية)", chapter: 2, completed: false },
        { id: "c2_2_1", name: "التحليل الكمي: المعايرة (حساب التركيز)", chapter: 2, completed: false },
        { id: "c2_2_2", name: "التحليل الكمي: طريقة التطاير", chapter: 2, completed: false },
        { id: "c2_2_3", name: "التحليل الكمي: طريقة الترسيب", chapter: 2, completed: false },

        // --- الباب الثالث: الاتزان الكيميائي (Chapter 3) ---
        { id: "c3_1_1", name: "معدل التفاعل والعوامل المؤثرة عليه", chapter: 3, completed: false },
        { id: "c3_1_2", name: "التفاعلات التامة والعكسية ومفهوم الاتزان", chapter: 3, completed: false },
        { id: "c3_2_1", name: "قانون فعل الكتلة وثابت الاتزان ($K_c$, $K_p$)", chapter: 3, completed: false },
        { id: "c3_2_2", name: "قاعدة لوشاتيليه (تأثير التركيز والضغط والحرارة)", chapter: 3, completed: false },
        { id: "c3_3_1", name: "الاتزان الأيوني وقانون استفالد للتخفيف", chapter: 3, completed: false },
        { id: "c3_3_2", name: "الحاصل الأيوني للماء ($K_w$) وحساب (pH)", chapter: 3, completed: false },
        { id: "c3_3_3", name: "التميؤ (التحلل المائي للأملاح)", chapter: 3, completed: false },
        { id: "c3_3_4", name: "حاصل الإذابة ($K_{sp}$)", chapter: 3, completed: false },

        // --- الباب الرابع: الكيمياء الكهربية (Chapter 4) ---
        { id: "c4_1_1", name: "الخلايا الجلفانية (خلية دانيال) وسلسلة الجهود الكهربية", chapter: 4, completed: false },
        { id: "c4_1_2", name: "حساب القوة الدافعة الكهربية (EMF)", chapter: 4, completed: false },
        { id: "c4_2_1", name: "الخلايا الأولية (خلية الزئبق وخلية الوقود)", chapter: 4, completed: false },
        { id: "c4_2_2", name: "الخلايا الثانوية (بطارية الرصاص وبطارية أيون الليثيوم)", chapter: 4, completed: false },
        { id: "c4_3_1", name: "خلايا التحليل الكهربي (مقارنة بالخلايا الجلفانية)", chapter: 4, completed: false },
        { id: "c4_3_2", name: "قوانين فاراداي (الأول والثاني)", chapter: 4, completed: false },
        { id: "c4_3_3", name: "تطبيقات التحليل الكهربي (الطلاء الكهربي وتنقية الفلزات)", chapter: 4, completed: false },

        // --- الباب الخامس: الكيمياء العضوية (Chapter 5) ---
        { id: "c5_1_1", name: "مقدمة العضوية (الأيزومرات وتصنيف الهيدروكربونات)", chapter: 5, completed: false },
        { id: "c5_1_2", name: "تسمية المركبات العضوية (IUPAC)", chapter: 5, completed: false },
        { id: "c5_2_1", name: "الألكانات (الميثان): التحضير والخواص (الاستبدال)", chapter: 5, completed: false },
        { id: "c5_3_1", name: "الألكينات (الإيثين): التحضير وتفاعلات الإضافة (قاعدة ماركونيكوف)", chapter: 5, completed: false },
        { id: "c5_4_1", name: "الألكاينات (الإيثاين): التحضير والخواص", chapter: 5, completed: false },
        { id: "c5_5_1", name: "البنزين العطري: التحضير وتفاعلات الإحلال", chapter: 5, completed: false },
        { id: "c5_5_2", name: "توجيه المجموعات (أورثو وبارا وميتا)", chapter: 5, completed: false },
        { id: "c5_6_1", name: "الكحولات: التصنيف والخواص (الأكسدة)", chapter: 5, completed: false },
        { id: "c5_7_1", name: "الفينولات: الخواص الحمضية والكشف عنها", chapter: 5, completed: false },
        { id: "c5_8_1", name: "الأحماض الكربوكسيلية: الخواص الحمضية", chapter: 5, completed: false },
        { id: "c5_9_1", name: "الإسترات: تفاعل الأسترة والتحلل المائي والخواص", chapter: 5, completed: false },
      ],
    },
    {
      id: "biology",
      name: "الأحياء 🧬",
      emoji: "🧬",
      color: "#ec4899",
      lessons: [
        // --- الباب الأول: الدعامة والحركة (Chapter 1) ---
        { id: "b1_1_1", name: "الدعامة في النبات (الفسيولوجية والتركيبية)", chapter: 1, completed: false },
        { id: "b1_2_1", name: "الهيكل العظمي المحوري (الجمجمة، القفص الصدري، العمود الفقري)", chapter: 1, completed: false },
        { id: "b1_2_2", name: "الهيكل العظمي الطرفي (الأحزمة والأطراف)", chapter: 1, completed: false },
        { id: "b1_2_3", name: "المفاصل والغضاريف والأربطة والأوتار", chapter: 1, completed: false },
        { id: "b1_3_1", name: "الحركة في النبات (اللمس، الانتحاء، الشد)", chapter: 1, completed: false },
        { id: "b1_3_2", name: "تركيب العضلة الهيكلية والوحدة الحركية", chapter: 1, completed: false },
        { id: "b1_3_3", name: "آلية الانقباض العضلي (نظرية الخيوط المنزلقة)", chapter: 1, completed: false },
        { id: "b1_3_4", name: "الإجهاد والشد العضلي", chapter: 1, completed: false },

        // --- الباب الثاني: التنسيق الهرموني (Chapter 2) ---
        { id: "b2_1_1", name: "الهرمونات النباتية (الأوكسينات) ومفهوم الهرمونات", chapter: 2, completed: false },
        { id: "b2_2_1", name: "الغدة النخامية (هرمونات الفص الأمامي والخلفي)", chapter: 2, completed: false },
        { id: "b2_2_2", name: "الغدة الدرقية والجار درقية", chapter: 2, completed: false },
        { id: "b2_2_3", name: "الغدتان الكظريتان", chapter: 2, completed: false },
        { id: "b2_2_4", name: "البنكرياس (الأنسولين والجلوكاجون)", chapter: 2, completed: false },
        { id: "b2_2_5", name: "الغدد التناسلية وهرموناتها", chapter: 2, completed: false },

        // --- الباب الثالث: التكاثر (Chapter 3) ---
        { id: "b3_1_1", name: "طرق التكاثر اللاجنسي (الانشطار، التبرعم، الجراثيم...)", chapter: 3, completed: false },
        { id: "b3_1_2", name: "التكاثر الجنسي وتعاقب الأجيال", chapter: 3, completed: false },
        { id: "b3_2_1", name: "التكاثر في النباتات الزهرية (تركيب الزهرة)", chapter: 3, completed: false },
        { id: "b3_2_2", name: "التكاثر في النباتات الزهرية (تكوين الأمشاج والإخصاب المزدوج)", chapter: 3, completed: false },
        { id: "b3_3_1", name: "الجهاز التناسلي الذكري في الإنسان", chapter: 3, completed: false },
        { id: "b3_3_2", name: "الجهاز التناسلي الأنثوي في الإنسان", chapter: 3, completed: false },
        { id: "b3_3_3", name: "تكوين الأمشاج (الحيوانات المنوية والبويضات)", chapter: 3, completed: false },
        { id: "b3_3_4", name: "دورة الطمث (مراحلها)", chapter: 3, completed: false },
        { id: "b3_3_5", name: "الإخصاب والحمل ووسائل منع الحمل", chapter: 3, completed: false },

        // --- الباب الرابع: المناعة (Chapter 4) ---
        { id: "b4_1_1", name: "المناعة في النبات (التركيبية والكيميائية)", chapter: 4, completed: false },
        { id: "b4_2_1", name: "مكونات الجهاز المناعي (الأعضاء الليمفاوية والخلايا)", chapter: 4, completed: false },
        { id: "b4_2_2", name: "خط الدفاع الأول وخط الدفاع الثاني (الاستجابة بالالتهاب)", chapter: 4, completed: false },
        { id: "b4_3_1", name: "خط الدفاع الثالث: المناعة الخلطية (الأجسام المضادة)", chapter: 4, completed: false },
        { id: "b4_3_2", name: "خط الدفاع الثالث: المناعة الخلوية (الخلايا التائية)", chapter: 4, completed: false },

        // --- الباب الخامس: البيولوجيا الجزيئية (Chapter 5) ---
        { id: "b5_1_1", name: "إثبات أن DNA هو المادة الوراثية (تجارب التحول والبكتيريوفاج)", chapter: 5, completed: false },
        { id: "b5_1_2", name: "تركيب جزيء DNA (نموذج واتسون وكريك)", chapter: 5, completed: false },
        { id: "b5_1_3", name: "تضاعف جزيء DNA وإصلاح عيوبه", chapter: 5, completed: false },
        { id: "b5_2_1", name: "تركيب وأنواع RNA", chapter: 5, completed: false },
        { id: "b5_2_2", name: "تخليق البروتين: النسخ (Transcription)", chapter: 5, completed: false },
        { id: "b5_2_3", name: "تخليق البروتين: الترجمة (Translation) والشفرة الوراثية", chapter: 5, completed: false },
        { id: "b5_3_1", name: "الطفرات وأنواعها", chapter: 5, completed: false },
        { id: "b5_3_2", name: "الهندسة الوراثية وتكنولوجيا DNA معاد الاتحاد", chapter: 5, completed: false },
      ],
    },
    {
      id: "arabic",
      name: "اللغة العربية 📚",
      emoji: "📚",
      color: "#f59e0b",
      lessons: [
        // --- النحو (Chapter 1: الوحدة الأولى: النطق والإملاء) ---
        { id: "ar1_1_1", name: "النحو: همزة القطع وألف الوصل (المواضع في الأسماء والأفعال والحروف)", chapter: 1, completed: false },
        { id: "ar1_1_2", name: "النحو: أنواع الواوات في آخر الكلمة (الأصلية، الجماعة، العطف)", chapter: 1, completed: false },
        { id: "ar1_1_3", name: "النحو: الفرق بين التاء المربوطة والمفتوحة والهاء", chapter: 1, completed: false },

        // --- النحو (Chapter 2: الوحدة الثانية: الأبنية) ---
        { id: "ar1_2_1", name: "النحو: اسم الفاعل (صياغته وأعماله)", chapter: 2, completed: false },
        { id: "ar1_2_2", name: "النحو: صيغ المبالغة (أوزانها وأعمالها)", chapter: 2, completed: false },
        { id: "ar1_2_3", name: "النحو: اسم المفعول (صياغته وأعماله)", chapter: 2, completed: false },
        { id: "ar1_2_4", name: "النحو: المصادر الصريحة (القياسية والسماعية)", chapter: 2, completed: false },
        { id: "ar1_2_5", name: "النحو: المصادر المؤولة (أن والفعل، ما والفعل، أن واسمها وخبرها)", chapter: 2, completed: false },
        { id: "ar1_2_6", name: "النحو: اسم المرة واسم الهيئة", chapter: 2, completed: false },

        // --- النحو (Chapter 3: الوحدة الثالثة: الجملة الاسمية) ---
        { id: "ar1_3_1", name: "النحو: أحكام المبتدأ والخبر (التقديم، التأخير، الحذف)", chapter: 3, completed: false },
        { id: "ar1_3_2", name: "النحو: كان وأخواتها (الأفعال التامة والناقصة)", chapter: 3, completed: false },
        { id: "ar1_3_3", name: "النحو: أفعال المقاربة والرجاء والشروع", chapter: 3, completed: false },
        { id: "ar1_3_4", name: "النحو: إن وأخواتها (الحروف الناسخة)", chapter: 3, completed: false },
        { id: "ar1_3_5", name: "النحو: لا النافية للجنس (شروط عملها وحالات اسمها)", chapter: 3, completed: false },

        // --- النحو (Chapter 4: الوحدة الرابعة: الجملة الفعلية) ---
        { id: "ar1_4_1", name: "النحو: نصب الفعل المضارع (الأدوات، فاء السببية، لام الجحود)", chapter: 4, completed: false },
        { id: "ar1_4_2", name: "النحو: جزم الفعل المضارع (الأدوات، الجزم في جواب الطلب)", chapter: 4, completed: false },
        { id: "ar1_4_3", name: "النحو: اقتران جواب الشرط بالفاء", chapter: 4, completed: false },
        { id: "ar1_4_4", name: "النحو: توكيد الفعل بالنون (حالات الوجوب والجواز والامتناع)", chapter: 4, completed: false },

        // --- النحو (Chapter 5: الوحدة الخامسة: المنصوبات والتوابع) ---
        { id: "ar1_5_1", name: "النحو: المفاعيل (به، مطلق، لأجله، معه، فيه)", chapter: 5, completed: false },
        { id: "ar1_5_2", name: "النحو: الحال (أنواعه وصاحبه)", chapter: 5, completed: false },
        { id: "ar1_5_3", name: "النحو: التمييز (الملحوظ والملفوظ)", chapter: 5, completed: false },
        { id: "ar1_5_4", name: "النحو: المنادى (أنواعه وأحكامه)", chapter: 5, completed: false },
        { id: "ar1_5_5", name: "النحو: الاستثناء (أحكامه)", chapter: 5, completed: false },
        { id: "ar1_5_6", name: "النحو: التوابع (النعت، العطف، التوكيد، البدل)", chapter: 5, completed: false },

        // --- الأدب (Chapter 6: مدارس الشعر) ---
        { id: "ar2_1_1", name: "الأدب: مدرسة الإحياء والبعث والكلاسيكية الجديدة (شوقي)", chapter: 6, completed: false },
        { id: "ar2_1_2", name: "الأدب: الاتجاه الوجداني (خليل مطران)", chapter: 6, completed: false },
        { id: "ar2_1_3", name: "الأدب: مدرسة الديوان (خصائصها)", chapter: 6, completed: false },
        { id: "ar2_1_4", name: "الأدب: مدرسة أبولو (خصائصها)", chapter: 6, completed: false },
        { id: "ar2_1_5", name: "الأدب: مدرسة المهاجر (خصائصها)", chapter: 6, completed: false },
        { id: "ar2_1_6", name: "الأدب: المدرسة الواقعية (خصائصها)", chapter: 6, completed: false },

        // --- الأدب (Chapter 7: فنون النثر) ---
        { id: "ar2_2_1", name: "الأدب: فن المقال (أنواعه وخصائصه)", chapter: 7, completed: false },
        { id: "ar2_2_2", name: "الأدب: فن الرواية (تعريفها وعناصرها)", chapter: 7, completed: false },
        { id: "ar2_2_3", name: "الأدب: فن القصة القصيرة (الفرق بينها وبين الرواية)", chapter: 7, completed: false },
        { id: "ar2_2_4", name: "الأدب: فن المسرحية (تعريفها وعناصرها)", chapter: 7, completed: false },
        
        // --- البلاغة والنصوص والقصة (Chapter 8) ---
        { id: "ar3_1_1", name: "البلاغة: التجربة الشعرية وعناصرها (الوجدان، الفكر، الصورة)", chapter: 8, completed: false },
        { id: "ar3_1_2", name: "البلاغة: الوحدة العضوية (وحدة الموضوع، الجو النفسي، ترابط الأفكار)", chapter: 8, completed: false },
        { id: "ar3_2_1", name: "النصوص: تحليل النصوص الشعرية المقررة", chapter: 8, completed: false },
        { id: "ar3_2_2", name: "النصوص: تحليل النصوص النثرية المقررة", chapter: 8, completed: false },
        { id: "ar3_3_1", name: "القصة: تحليل فصول (الأيام) لطه حسين (الشخصيات والأحداث)", chapter: 8, completed: false },
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
        { id: "en1_1_1", name: "Grammar (Unit 1): Present Perfect - Form and Usage (تكوينه واستخدامه)", chapter: 1, completed: false },
        { id: "en1_1_2", name: "Grammar (Unit 1): Present Perfect - Keywords (since/for/yet/just) (الكلمات الدالة)", chapter: 1, completed: false },
        { id: "en1_1_3", name: "Grammar (Unit 2): Present Perfect Continuous (المضارع التام المستمر)", chapter: 1, completed: false },
        { id: "en1_1_4", name: "Grammar (Unit 2): Past Perfect vs. Simple Past (الماضي التام والماضي البسيط)", chapter: 1, completed: false },
        // (Units 3-4)
        { id: "en1_2_1", name: "Grammar (Unit 3): Future Forms - will (المستقبل بـ will)", chapter: 1, completed: false },
        { id: "en1_2_2", name: "Grammar (Unit 3): Future Forms - going to (المستقبل بـ going to)", chapter: 1, completed: false },
        { id: "en1_2_3", name: "Grammar (Unit 3): Future Forms - Present Continuous/Simple (المضارع المستمر/البسيط للمستقبل)", chapter: 1, completed: false },
        { id: "en1_2_4", name: "Grammar (Unit 4): Future Continuous (المستقبل المستمر)", chapter: 1, completed: false },
        { id: "en1_2_5", name: "Grammar (Unit 4): Future Perfect (المستقبل التام)", chapter: 1, completed: false },
        // (Units 5-6)
        { id: "en1_3_1", name: "Grammar (Unit 5): Reported Speech - Statements (الكلام المنقول - الجمل الخبرية)", chapter: 1, completed: false },
        { id: "en1_3_2", name: "Grammar (Unit 5): Reported Speech - Questions (الأسئلة)", chapter: 1, completed: false },
        { id: "en1_3_3", name: "Grammar (Unit 6): Reported Speech - Commands and Requests (الأوامر والطلبات)", chapter: 1, completed: false },
        // (Units 7-8)
        { id: "en1_4_1", name: "Grammar (Unit 7): Passive Voice - Present/Past Simple (المبني للمجهول - مضارع/ماضي بسيط)", chapter: 1, completed: false },
        { id: "en1_4_2", name: "Grammar (Unit 7): Passive Voice - Continuous/Perfect Tenses (الأزمنة المستمرة والتامة)", chapter: 1, completed: false },
        { id: "en1_4_3", name: "Grammar (Unit 8): Causative (Have/Get something done) (السببية)", chapter: 1, completed: false },
        // (Units 9-10)
        { id: "en1_5_1", name: "Grammar (Unit 9): Conditionals - Type 0 & 1 (الحالات الصفرية والأولى)", chapter: 1, completed: false },
        { id: "en1_5_2", name: "Grammar (Unit 9): Conditionals - Type 2 & 3 (الحالات الثانية والثالثة)", chapter: 1, completed: false },
        { id: "en1_5_3", name: "Grammar (Unit 10): Alternatives to 'If' (بدائل If) (Unless, Provided, In case)", chapter: 1, completed: false },
        // (Units 11-12)
        { id: "en1_6_1", name: "Grammar (Unit 11): Relative Clauses (عبارات الوصل) (Who, Which, That, Whose)", chapter: 1, completed: false },
        { id: "en1_6_2", name: "Grammar (Unit 11): Omission of Relative Pronouns (حذف ضمائر الوصل)", chapter: 1, completed: false },
        { id: "en1_6_3", name: "Grammar (Unit 12): Modal Verbs - Deduction (الأفعال الناقصة - الاستنتاج)", chapter: 1, completed: false },
        { id: "en1_6_4", name: "Grammar (Unit 12): Modal Verbs - Necessity and Advice (الضرورة والنصيحة)", chapter: 1, completed: false },
        { id: "en1_6_5", name: "Grammar (Unit 12): Gerunds and Infinitives (الأسماء الفعلية والمصادر)", chapter: 1, completed: false },

        // --- Chapter 2: Vocabulary (المفردات) ---
        { id: "en2_1_1", name: "Vocabulary (Unit 1): Key Words and Definitions (الكلمات الأساسية وتعريفاتها)", chapter: 2, completed: false },
        { id: "en2_1_2", name: "Vocabulary (Unit 2): Synonyms and Antonyms (المترادفات والمتضادات)", chapter: 2, completed: false },
        { id: "en2_1_3", name: "Vocabulary (Unit 3): Collocations (المتلازمات اللفظية)", chapter: 2, completed: false },
        { id: "en2_1_4", name: "Vocabulary (Unit 4): Phrasal Verbs (الأفعال الاصطلاحية)", chapter: 2, completed: false },
        { id: "en2_1_5", name: "Vocabulary (Unit 5): Idioms (التعبيرات الاصطلاحية)", chapter: 2, completed: false },
        { id: "en2_1_6", name: "Vocabulary (Unit 6): Derivatives (الاشتقاقات) (Nouns, Verbs, Adjectives)", chapter: 2, completed: false },
        // (Repeat for Units 7-12)
        { id: "en2_2_1", name: "Vocabulary (Unit 7): Key Words and Definitions", chapter: 2, completed: false },
        { id: "en2_2_2", name: "Vocabulary (Unit 8): Synonyms and Antonyms", chapter: 2, completed: false },
        { id: "en2_2_3", name: "Vocabulary (Unit 9): Collocations", chapter: 2, completed: false },
        { id: "en2_2_4", name: "Vocabulary (Unit 10): Phrasal Verbs", chapter: 2, completed: false },
        { id: "en2_2_5", name: "Vocabulary (Unit 11): Idioms", chapter: 2, completed: false },
        { id: "en2_2_6", name: "Vocabulary (Unit 12): Derivatives", chapter: 2, completed: false },

        // --- Chapter 3: Skills (المهارات) ---
        { id: "en3_1_1", name: "Skills: Reading - Skimming and Scanning (القراءة السريعة والتصفح)", chapter: 3, completed: false },
        { id: "en3_1_2", name: "Skills: Reading - Guessing Meaning from Context (تخمين المعنى من السياق)", chapter: 3, completed: false },
        // --- هذا هو السطر الذي تم إصلاحه ---
        { id: "en3_2_1", name: "Skills: Writing - Essay Structure (Intro, Body, Conclusion) (بناء المقال)", chapter: 3, completed: false },
        { id: "en3_2_2", name: "Skills: Writing - Types of Essays (أنواع المقالات)", chapter: 3, completed: false },
        { id: "en3_2_3", name: "Skills: Writing - Punctuation (علامات الترقيم)", chapter: 3, completed: false },
        { id: "en3_2_4", name: "Skills: Writing - Cohesion and Coherence (الترابط)", chapter: 3, completed: false },
        { id: "en3_3_1", name: "Skills: Translation - (from English to Arabic) (الترجمة من الإنجليزية)", chapter: 3, completed: false },
        { id: "en3_3_2", name: "Skills: Translation - (from Arabic to English) (الترجمة من العربية)", chapter: 3, completed: false },
        
        // --- Chapter 4: Novel (القصة) ---
        { id: "en4_1_1", name: "Novel: Chapters 1-3 - Plot Summary (ملخص الأحداث)", chapter: 4, completed: false },
        { id: "en4_1_2", name: "Novel: Chapters 1-3 - Character Analysis (تحليل الشخصيات)", chapter: 4, completed: false },
        { id: "en4_1_3", name: "Novel: Chapters 1-3 - Key Themes and Quotes (الأفكار الرئيسية والاقتباسات)", chapter: 4, completed: false },
        { id: "en4_2_1", name: "Novel: Chapters 4-6 - Plot Summary", chapter: 4, completed: false },
        { id: "en4_2_2", name: "Novel: Chapters 4-6 - Character Analysis", chapter: 4, completed: false },
        { id: "en4_2_3", name: "Novel: Chapters 4-6 - Key Themes and Quotes", chapter: 4, completed: false },
        { id: "en4_3_1", name: "Novel: Chapters 7-9 - Plot Summary", chapter: 4, completed: false },
        { id: "en4_3_2", name: "Novel: Chapters 7-9 - Character Analysis", chapter: 4, completed: false },
        { id: "en4_3_3", name: "Novel: Chapters 7-9 - Key Themes and Quotes", chapter: 4, completed: false },
        { id: "en4_4_1", name: "Novel: Chapters 10-12 - Plot Summary", chapter: 4, completed: false },
        { id: "en4_4_2", name: "Novel: Chapters 10-12 - Character Analysis", chapter: 4, completed: false },
        { id: "en4_4_3", name: "Novel: Chapters 10-12 - Key Themes and Quotes", chapter: 4, completed: false },
      ],
    },
  ],
}
