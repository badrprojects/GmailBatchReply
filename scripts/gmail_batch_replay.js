const $ = jQuery;

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css');
document.getElementsByTagName('head')[0].appendChild(link);

var mouseDown = new MouseEvent('mousedown', {
    bubbles: true
});
var mouseUp = new MouseEvent('mouseup', {
    bubbles: true
});
var keypress = new MouseEvent('keypress', {
    bubbles: true
});
var keydown = new MouseEvent('keydown', {
    bubbles: true
});
var keyup = new MouseEvent('keyup', {
    bubbles: true
});
var focus = new MouseEvent('focus', {
    bubbles: true
});
var focusIn = new MouseEvent('focusin', {
    bubbles: true
});
var click = new MouseEvent('click', {
    bubbles: true
});

addBtn();

document.body.addEventListener('DOMSubtreeModified', function () {
    addBtn();
}, false);
    

var batchReplay = function(e) {
    var emails = [];
    var found = $("[aria-checked='true']").parent().parent().find('span:first-child[email]').toArray();
    $.each(found, function(key, value) {
        var email = $(value).attr('email');
        if(!contains.call(emails, email)) {
            emails.push(email);
        }
    });

    if(emails.length <= 0) {
        alert("Please select at least one message.\n\n_____________________________\n\n");
    } else {        
        var compose = $('div.T-I.J-J5-Ji.T-I-KE.L3');
        compose[0].dispatchEvent(mouseDown);
        compose[0].dispatchEvent(mouseUp);

        var repeat = setInterval(function() {
            var dialog = $('div.nH[role="dialog"]');
            
            if(dialog.length > 0) {
                var viewBcc = $('span.aB:contains("Bcc")');
                viewBcc[0].dispatchEvent(click);
                viewBcc[0].dispatchEvent(keypress);
                viewBcc[0].dispatchEvent(keydown);
                viewBcc[0].dispatchEvent(mouseDown);
                viewBcc[0].dispatchEvent(keyup);

                var bcc = $('textarea.vO[name="bcc"]');
                bcc.val(emails.join(' '));
                bcc[0].dispatchEvent(keypress);
                bcc[0].dispatchEvent(keydown);
                bcc[0].dispatchEvent(keyup);

                var subject = $('input.aoT[name="subjectbox"]');
                subject[0].dispatchEvent(click);
                subject[0].dispatchEvent(focus);
                subject[0].dispatchEvent(focusIn);

                clearInterval(repeat);
            }
        }, 100);
    }
};

function addBtn() {
    var btnContainer = document.querySelectorAll('div.D.E.G-atb');
    btnContainer.forEach(function(e) {
        if(e.hasAttributes('gh')) {
            var btnHost = e.querySelectorAll('div.G-tF');
            var batchReply = document.createElement('button');
            var batch = btnHost[0].querySelectorAll('button#batch_reply');
                
            if(batch.length <= 0) {
                batchReply.classList = "G-Ni G-aE J-J5-Ji";
                batchReply.id = 'batch_reply';
                batchReply.type = 'button';
                batchReply.value = 'Batch Reply';
                batchReply.innerHTML = '<i class="fas fa-mail-bulk"></i>';
                batchReply.onclick = batchReplay;
                btnHost[0].appendChild(batchReply);
            }
        }
    });
}

var contains = function(needle) {
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};