<!-- Google Translate API script -->
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<!-- Google Translate API initialization script -->
<script type="text/javascript">
    // Function to translate the page using Google Translate API
    function translatePage(selectedLanguage) {
        // Check if google is defined (Google Translate API script is loaded)
        if (typeof google !== 'undefined' && google.translate.TranslateElement) {
            new google.translate.TranslateElement({
                pageLanguage: 'en', // Set your page's default language
                includedLanguages: selectedLanguage, // Set the selected language
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        }
    }

    // Trigger the translation when the page is loaded
    $(document).ready(function () {
        // Initialize translation with the default selected language
        translatePage($('#language-select').val());

        // Change event handler for the select dropdown
        $('#language-select').change(function () {
            // Get the selected language code
            var selectedLanguage = $(this).val();
            // Translate the page with the selected language
            translatePage(selectedLanguage);
        });
    });
</script>
