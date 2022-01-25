(function(){
    var ChannelCollapse = {
        addToolbarItem: function() {
            if(document.querySelectorAll('.show-channels-button').length == 0) {
                let newToolbarItem = document.createElement('div');
                newToolbarItem.classList.add(document.querySelector('[class*="toolbar"] > [class*="iconWrapper"]').classList[1]);
                newToolbarItem.classList.add(document.querySelector('[class*="toolbar"] > [class*="clickable"]').classList[2]);
                
                newToolbarItem.classList.add('show-channels-button');
                newToolbarItem.classList.add('active');

                newToolbarItem.setAttribute("role", "button");
                newToolbarItem.setAttribute("aria-label", "Collapse Sidebar");
                newToolbarItem.setAttribute("tabindex", "0");
                
                newToolbarItem.innerHTML = '<svg x="0" y="0" class="icon-2xnN2Y" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1 4 H 21 V 7 H 1 Z"></path><path fill="currentColor" d="M1 11 H 21 V 14 H 1 Z"></path><path fill="currentColor" d="M1 18 H 21 V 21 H 1 Z"></path></svg>';
                
                document.querySelector('[class*="toolbar"]').insertBefore(newToolbarItem, document.querySelector('[class*="search"]'));
                document.querySelector('.show-channels-button').addEventListener('click', function(){
                    if(this.classList.contains('active')) {
                        document.querySelector('[class*="sidebar"]').style.display = 'none';
                        this.classList.toggle('active');
                    } else {
                        document.querySelector('[class*="sidebar"]').style.display = 'flex';
                        this.classList.toggle('active');
                    }
                });
            }
        },

        addEventListeners: function(){
            var guilds = document.querySelectorAll('[class^="guild"]');
            for(let i = 0; i < guilds.length; ++i) {
                guilds[i].addEventListener('click',function(){
                    window.setTimeout(function(){
                        console.log("Added event listener");
                        ChannelCollapse.addToolbarItem();
                    },1);
                });
            }
        }
    };

    ChannelCollapse.addToolbarItem();
    ChannelCollapse.addEventListeners();
})();
