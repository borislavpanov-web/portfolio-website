new Typed('.typing1', {
    strings: ['languages and frameworks'],
    typeSpeed: 45,
    showCursor: 0,
    onComplete() {
        new Typed ('.typing2', {
            strings: ['JavaScript (ES6)+'],
            startDelay: 500,
            endDelay: 500,
            typeSpeed: 45,
            showCursor: 0,
            onComplete() {
                new Typed ('.typing4', {
                    strings: ['TypeScript'],
                    startDelay: 500,
                    endDelay: 500,
                    typeSpeed: 45,
                    showCursor: 0,
                    onComplete() {
                        new Typed ('.typing5', {
                            strings: ['HTML'],
                            startDelay: 500,
                            endDelay: 500,
                            typeSpeed: 45,
                            showCursor: 0,
                            onComplete() {
                                new Typed ('.typing6', {
                                    strings: ['CSS/Sass'],
                                    startDelay: 500,
                                    endDelay: 500,
                                    typeSpeed: 45,
                                    showCursor: 0,
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});
