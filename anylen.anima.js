/*
    Anylen.anima.js
    creador: Andres Barrios
    version: 1.0
    lisencia: free

    * LISTA DE EFECTOS
        => zoom -
        => zoom +
        => top
        => right
        => bottom
        => left

    * script inicializador
        Anylen.init(number duration ms)
	
    * Atributos en elementos html
            class="Anylen-block" -> obligatorio
            act => animacion que se va a ejecutar (nombre)
            dur => valor del efecto (numero)

    * EJEMPLO *
        
        # con atributo dur personalizado
            <div class="Anylen-block" act="in" dur="300"></div>
        # con atributo dur por defecto
            <div class="Anylen-block" act="in"></div>
        # Si el atributo act es null valor por defecto "in"
*/
var Anylen = {

    object: [],
    direction: '150',
    zoomin: '0.4',
    zoomout: '1.4',
    rever: true,

    init: function (duration) {
        var time = duration == null ? 1 : duration / 1000;
        document.write("<style>.Anylen-block { -webkit-transition: all ease " + time + "s; -moz-transition: all ease " + time + "s; -ms-transition: all ease " + time + "s; -o-transition: all ease " + time + "s; transition: all ease " + time + "s;}");
        var tag = document.getElementsByClassName('Anylen-block');
        for (var i = 0; i < tag.length; i++) {
            this.object.push({
                tag: tag[i],
                pos: tag[i].getBoundingClientRect().top,
                anima: tag[i].getAttribute('act'),
                dur: tag[i].getAttribute('dur'),
                active: false
            });
            this.show(false, i);
        }
    },

    show(estado, index) {
        if (this.object[index].anima == "in") {
            if (estado == true) {
                this.object[index].tag.style.transform = 'scale(1)';
            } else {
                this.object[index].tag.style.transform = 'scale(0.8)';
            }

        } else if (this.object[index].anima == "away") {
            if (estado == true) {
                this.object[index].tag.style.transform = 'scale(1)';
            } else {
                this.object[index].tag.style.transform = 'scale(1.2)';
            }

        } else if (this.object[index].anima == "top") {
            if (estado == true) {
                this.object[index].tag.style.transform = 'translate(0px, 0px)';
            } else {
                this.object[index].tag.style.transform = 'translate(0px, -' + this.direction + 'px)';
            }

        } else if (this.object[index].anima == "right") {
            if (estado == true) {
                this.object[index].tag.style.transform = 'translate(0px, 0px)';
            } else {
                this.object[index].tag.style.transform = 'translate(' + this.direction + 'px, 0px)';
            }

        } else if (this.object[index].anima == "bottom") {
            if (estado == true) {
                this.object[index].tag.style.transform = 'translate(0px, 0px)';
            } else {
                this.object[index].tag.style.transform = 'translate(0px,' + this.direction + 'px)';
            }

        } else if (this.object[index].anima == "left") {
            if (estado == true) {
                this.object[index].tag.style.transform = 'translate(0px, 0px)';
            } else {
                this.object[index].tag.style.transform = 'translate(-' + this.direction + 'px, 0px)';
            }
        }
        if (estado == true) {
            this.object[index].tag.style.opacity = 1;
            this.object[index].active = true;
        }else {
            this.object[index].tag.style.opacity = 0;
            this.object[index].active = false;
        }
    }
}

window.onscroll = function () {
    var y = window.scrollY;
    y = y + 450;
    for (var i = 0; i < Anylen.object.length; i++) {
        
        if (y >= Anylen.object[i].pos) {
            Anylen.show(true, i);
        }

    }
};