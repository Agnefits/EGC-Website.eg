const translations = {
    "home": { "en": "Home", "ar": "الرئيسية" },
    "staffs": { "en": "Staff", "ar": "الموظفين" },
    "students": { "en": "Students", "ar": "الطلاب" },
    "departments": { "en": "Departments", "ar": "الاقسام" },
    "news": { "en": "News", "ar": "اخبار" },
    "events": { "en": "Events", "ar": "فعاليات" },
    "about": { "en": "About", "ar": "عن الكلية" },
    "login": { "en": "Login", "ar": "الدخول" },
    "dashboard": { "en": "Dashboard", "ar": "اللوحة" },
    "headline": { "en": "Egyptian Germany College ", "ar": "الكلية المصرية الالمانية" },
    "title1": { "en": "Welcome to Egyptian Germany College", "ar": "مرحبا بكم في الكلية المصرية الالمانية" },
    "about-egc": { "en": "About EGC", "ar": "عن الكلية المصرية الالمانية " },
    "text1": { "en": "An Egyptian public college affiliated with Misr International Technological University was established according to the decision of the Minister of Higher Education No. 5701 dated 28/9/2021. It accepts students of both sexes who have a high school diploma and technical diplomas according to the coordination of public universities.", "ar": "كلية مصرية حكومية تابعة لجامعة مصر الدولية التكنولوجية، تم إنشاؤها بموجب قرار وزير التعليم العالي رقم 5701 بتاريخ 28/9/2021. تقبل الطلاب من كلا الجنسين الحاصلين على شهادة الثانوية العامة والدبلومات الفنية وفقًا لتنسيق الجامعات الحكومية" },
    "info": { "en": "Information Technology", "ar": "تكنولوجيا المعلومات" },
    "elec": { "en": "Electrical Technology", "ar": "تكنولوجيا الكهرباء" },
    "mech": { "en": "Mechanical Technology", "ar": "تكنولوجيا الميكانيكا" },
    "titel3": { "en": " Dean's Speech", "ar": "كلمة العميد" },
    "text2": { "en": " Achieving comprehensive and sustainable development in the field of technical and technological education for a better industrial and technological future led by Egypt's distinguished youth with the highest professional and international standards in the local and international labor markets.", "ar": "تحقيق التنمية الشاملة والمستدامة في مجال التعليم الفني والتكنولوجي من أجل مستقبل صناعي وتكنولوجي أفضل يقوده شباب مصر المتميزون بأعلى المعايير المهنية والدولية في أسواق العمل المحلية والدولية. " },
    "titel4": { "en": "Latest News ", "ar": "أحدث الأخبار " },
    "text3": { "en": " The sixth season of the Geniuses program, the match between Misr Technological University and Tanta University", "ar": "الموسم السادس من برنامج العباقرة، المباراة بين جامعة مصر الدولية التكنولوجية وجامعة طنطا " },
    "text4": { "en": " Professor Dr. Ahmad Hosni Al-Haywy and his talk about the Technologists Syndicate Law", "ar": "الأستاذ الدكتور أحمد حسني الحوي، وحديثه عن قانون نقابة التكنولوجيين" },
    "read": { "en": "Read More", "ar": "قراءة المزيد " },
    "titel5": { "en": " International Partnerships", "ar": "الشراكات الدولية" },
    "staff": { "en": "+419<br>Staff", "ar": "٩١٤+<br>موظف" },
    "student": { "en": "+15,000<br>Student", "ar": "١٥,٠٠٠+<br>طالب" },
    "graduated": { "en": "+9,345<br>Graduated", "ar": "٩,٣٤٥+<br>متخرج" },
    "text6": { "en": "It was established accordingto<br> the decisionof the Ministerof<br> Higher Education No. 5701<br>Dated 28-9-2021", "ar": "تم إنشاؤها بموجب قرار وزير التعليم العالي<br> رقم ٥٧٠١ بتاريخ ٢٨-٩-٢٠٢١." },
    "titel6": { "en": " EGC", "ar": "الكلية المصرية الالمانية " },
    "add": { "en": "  Our Address", "ar": "العنوان " },
    "add1": { "en": " <img src='circle.png' alt='' class='icon'> Al-Qasr Al-Ainy Street, Assiut", "ar": "<img src='circle.png' alt='' class='icon'>شارع القصر العيني، أسيوط " },
    "add2": { "en": "<img src='phone-call.png' alt='' class='icon' > 088 2350809 ", "ar": "<img src='phone-call.png' alt='' class='icon' >٢٣٥٠٨٠٩ ٠٨٨ " },
    "add3": { "en": " <img src='message.png' alt='' class='icon'>egcasyut@outlook.com ", "ar": " <img src='message.png' alt='' class='icon'>egcasyut@outlook.com " },
    "date": { "en": "January 1, 2024", "ar": "١ يناير , ٢٠٢٤" },
    "date2": { "en": "March 1, 2024", "ar": "١ مارس , ٢٠٢٤" },
    "date3": { "en": "June 1, 2024", "ar": "١ يونيو , ٢٠٢٤" },
};


function toggleLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const currentLang = element.getAttribute('data-lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        if (translations[key]) {
            element.innerHTML = translations[key][newLang];
            element.setAttribute('data-lang', newLang);
        } else {
            console.warn(`No translation found for key: ${key}`);
        }
    });

    const newDirection = document.documentElement.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', newDirection);

    updateStylesForDirection(newDirection);
}

function updateStylesForDirection(direction) {
    const elementsToAdjust = document.querySelectorAll('.some-class');
    elementsToAdjust.forEach(element => {
        if (direction === 'rtl') {
            element.style.float = 'right';

        } else {
            element.style.float = 'right';
        }
    });
}

document.getElementById('translate-btn').addEventListener('click', toggleLanguage);
document.querySelectorAll('[data-translate]').forEach(element => {
    element.setAttribute('data-lang', 'en');
});
document.documentElement.setAttribute('dir', 'ltr');