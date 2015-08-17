( function( window, undefined ) {
    var Raffy = function( loop ) {
        var loopFunction = loop,
            raf_id,
            rafStart = window.requestAnimationFrame,
            rafStop = window.cancelAnimationFrame;
        
        var step = function() {
            loopFunction();
            raf_id = rafStart( step );
        };
        
        this.start = function() {
            if ( raf_id === undefined ) {
                step();
                
                return true;
            } else {
                return false;
            }
        };
        
        this.stop = function() {
            if ( raf_id !== undefined ) {
                rafStop( raf_id );
                
                raf_id = undefined;
                
                return true;
            } else {
                return false;
            }
        };
    };
    
    window.Raffy = window.Raffy || Raffy;
} )( window );