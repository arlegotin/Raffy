( function( window, undefined ) {
    var Raffy = function( loopFn ) {
        this.setLoop( loopFn );
        this._raf_id;
        this._tStep = this._step.bind( this );
    };
    
    Raffy.prototype.setLoop = function( loopFn ) {
        this._loopFn = loopFn || function() {};
    };
    
    Raffy.prototype._rafStart = window.requestAnimationFrame.bind( window );
    Raffy.prototype._rafStop = window.cancelAnimationFrame.bind( window );
    
    Raffy.prototype._step = function() {
        this._loopFn();
        this._raf_id = this._rafStart( this._tStep );
    };
    
    Raffy.prototype.start = function() {
        if ( this._raf_id === undefined ) {
            this._step();
            return true;
        } else {
            return false;
        }
    };
    
    Raffy.prototype.stop = function() {
        if ( this._raf_id !== undefined ) {
            this._rafStop( this._raf_id );
            return true;
        } else {
            return false;
        }
    };
    
    window.Raffy = window.Raffy || Raffy;
} )( window );
