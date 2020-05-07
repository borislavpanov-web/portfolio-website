let typed = new Typed('.typing', {
    strings: ['About me.'],
    typeSpeed: 45,
    showCursor: 0,
    onComplete:
        function (self1) {
            let typed2 = new Typed('.typing2', {
                strings: ['My name is <a class="daaaaa" style="font-weight: bold">&lt;Borislav Panov/&gt;<a>'],
                typeSpeed: 45,
                startDelay: 500,
                showCursor: 0,
                onComplete:
                    function (self2) {
                        let typed3 = new Typed('.typing3', {
                            strings: ['I am from <a class="bulgaria" href="https://goo.gl/maps/VJKjfZ1BEDzNJyyVA">Sandanski, Bulgaria</a>.'],
                            typeSpeed: 45,
                            startDelay: 500,
                            endDelay: 500,
                            showCursor: 0,
                            onComplete:
                                function (self3) {
                                    let typed4 = new Typed('.typing4', {
                                        strings: ['I am'],
                                        typeSpeed: 45,
                                        startDelay: 100,
                                        endDelay: 1000,
                                        showCursor: 0,
                                        onComplete:
                                            function (self3) {
                                                let typed4 = new Typed('.typing5', {
                                                    strings: ['web-dev', 'front-end dev', 'student'],
                                                    startDelay: 50,
                                                    typeSpeed: 55,
                                                    loop: true,
                                                })
                                            }
                                    })

                                }
                        });
                    }
            });
        }
});