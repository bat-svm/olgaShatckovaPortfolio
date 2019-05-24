(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Pic = function() {
	this.initialize(img.Pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#522C00","rgba(255,255,255,0)"],[0,1],15.7,-3.7,-1.5,0.3).s().p("ACjOEImY8HIDgAAIELcHg");
	this.shape.setTransform(24.6,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,49.3,179.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0C0000","rgba(255,255,255,0)"],[0,1],10.4,-2.4,-5.5,1.3).s().p("ADYOEIoC8HIDbAAIF6cHg");
	this.shape.setTransform(29.9,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,59.8,179.9), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0C0000","rgba(255,255,255,0)"],[0,1],7.6,-1.7,-6,1.4).s().p("ADYOEIoC8HIC6AAIGbcHg");
	this.shape.setTransform(29.9,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,59.8,179.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7lOEIQV8HMAm2AAAIAAcHg");
	mask.setTransform(176.6,90);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, null, null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuCODIAA8FIcFAAIAAcFg");
	mask.setTransform(111.2,193.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgTVAgsMAl3hB1IA1AeMgl5BB1g");
	this.shape.setTransform(252.2,340.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IAzAeMgl4BB1g");
	this.shape_1.setTransform(237.9,326.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgTVAgsMAl3hB1IA0AeMgl4BB1g");
	this.shape_2.setTransform(223.7,311.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgTVAgsMAl3hB1IA1AeMgl5BB1g");
	this.shape_3.setTransform(209.4,297.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IA0AeMgl5BB1g");
	this.shape_4.setTransform(195.1,283.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IA0AeMgl5BB1g");
	this.shape_5.setTransform(180.9,269.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IA0AeMgl5BB1g");
	this.shape_6.setTransform(166.6,254.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IA0AeMgl5BB1g");
	this.shape_7.setTransform(152.4,240.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IA0AeMgl5BB1g");
	this.shape_8.setTransform(138.1,226.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgTWAgsMAl5hB1IA0AeMgl5BB1g");
	this.shape_9.setTransform(123.9,212.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(21.2,103.1,179.9,179.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmxAOEIAA8HMBNiAAAIAAcHg");
	mask.setTransform(248.2,90);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, null, null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmxAODIAA8GMBNiAAAIAAcGg");
	mask.setTransform(248.2,100.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8F00").ss(2).p("AjWvkIGtfJ");
	this.shape.setTransform(441.2,99.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8F00").ss(4).p("AiQvZIEhez");
	this.shape_1.setTransform(273.4,101.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(256.9,10.3,206.8,179.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAqIAdhTIAEAAIgdBTg");
	this.shape.setTransform(47.5,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPASQgFgFAAgJIAAgbIAFAAIAAAaQAAAIAEAEQAEAFAHAAQAHAAAFgFQAEgFAAgJIAAgYIAFAAIAAAuIgEAAIAAgKQgDAFgEADQgFADgFAAQgJAAgGgGg");
	this.shape_1.setTransform(43,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAEAAIAAAKQACgFAEgDQAEgDAHAAIAAAFIgBAAQgIAAgDAFQgFAFAAAIIAAAYg");
	this.shape_2.setTransform(38.5,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgBADIgDABIgCgBg");
	this.shape_3.setTransform(35.6,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAfQgGgDgCgGIAAALIgEAAIAAhCIAEAAIAAAfQADgFAFgDQAFgDAFAAQAGAAAGADQAFADAEAFQACAFABAHQgBAHgCAFQgEAFgFAEQgGADgGAAQgFAAgFgDgAgJgHQgEADgCAEQgDAEAAAGQAAAGADAEQACAFAEACQAEADAFAAQAFAAAEgDQAFgCACgFQADgEAAgGQAAgGgDgEQgCgEgFgDQgEgCgFAAQgFAAgEACg");
	this.shape_4.setTransform(31.9,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAhIgTgZIgNAMIAAANIgEAAIAAhBIAEAAIAAAuIAdgaIAGAAIgTARIAVAcg");
	this.shape_5.setTransform(26.3,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAVQgGgEgDgFQgCgFAAgHQAAgGACgGQADgEAFgEQAFgDAGAAQAGAAAGADQAEADAEAFQADAGAAAGIgBABIgnAAQAAAGADAEQACAEAEADQAFACAFAAQAFAAADgCQAEgCACgDIAEADQgEAEgEACQgFACgFAAQgHAAgFgDgAgIgQQgEACgCADQgCAFgBAEIAjAAQAAgEgDgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_6.setTransform(20.6,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_7.setTransform(16.2,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAEAAIAAAKQACgFAEgDQAEgDAHAAIAAAFIgBAAQgIAAgDAFQgFAFAAAIIAAAYg");
	this.shape_8.setTransform(13,10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAVQgGgEgDgFQgCgFAAgHQAAgGACgGQADgEAGgEQAFgDAGAAQAGAAAGADQAGAEADAEQACAGAAAGQAAAHgCAFQgDAFgGAEQgGADgGAAQgGAAgFgDgAgJgQQgEADgCAEQgDAEAAAFQAAAGADAFQACAEAEADQAFACAEAAQAFAAAFgCQAEgDACgEQADgFAAgGQAAgFgDgEQgCgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_9.setTransform(8.1,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAaQgDgEAAgGIAAgeIgJAAIAAgDIAJAAIAAgLIAFAAIAAALIANAAIAAADIgNAAIAAAeQAAAEABADQACACAEAAQAEAAADgCIADADIgFACIgGABQgFAAgDgDg");
	this.shape_10.setTransform(3.5,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAJAAIAQAAIAAgDQgBgHgDgDQgDgEgIAAQgDAAgFACIgGAEIgDgDQAEgDAEgCQAFgCAFAAQAJAAAFAEQAEAFAAAJIAAAcIgEAAIAAgIQgCAEgFADQgEACgGAAQgHAAgEgEgAgLADQgCADAAAFQAAAEACADQAEACAGAAQAFAAAEgCQAFgDACgFIAAgJIgQAAQgGAAgEACg");
	this.shape_11.setTransform(-1.1,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAfQgGgCgEgEIADgDQADADAFACQAFACAFAAQAJAAAFgFQAEgEAAgKIAAgIQgDAFgFADQgFADgGAAQgGAAgFgDQgGgDgDgFQgDgEAAgHQAAgGADgGQADgFAGgDQAFgDAGAAQAGAAAFADQAFADADAFIAAgKIAFAAIAAApQAAALgGAGQgGAGgLAAQgGAAgFgCgAgJgZQgEACgDAEQgCAFAAAFQAAAGACADQADAEAEADQAEACAFAAQAFAAAFgCQAEgDADgEQACgDAAgGQAAgFgCgFQgDgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_12.setTransform(-6.9,11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAhIAAguIADAAIAAAugAgCgaIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_13.setTransform(-10.9,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBAXIgVgtIAEAAIASApIATgpIAEAAIgVAtg");
	this.shape_14.setTransform(-14.4,10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAUQgEgEAAgFQAAgHAEgDQAEgDAKAAIAOAAIAAgDQABgHgEgDQgEgEgGAAQgEAAgEACIgIAEIgCgDQADgDAGgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgFAAIAAgIQgCAEgEADQgEACgGAAQgHAAgFgEgAgLADQgDADAAAFQAAAEADADQAEACAHAAQAEAAAFgCQADgDACgFIAAgJIgOAAQgHAAgEACg");
	this.shape_15.setTransform(-19.6,10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARAYIAAgaQgBgIgEgEQgEgFgGAAQgIAAgFAFQgEAFAAAJIAAAYIgFAAIAAguIAFAAIAAAKQACgFAFgDQAFgDAFAAQAJAAAFAGQAFAFAAAJIAAAbg");
	this.shape_16.setTransform(-25,10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAqIAdhTIAEAAIgdBTg");
	this.shape_17.setTransform(-29.4,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAqIAchTIAFAAIgdBTg");
	this.shape_18.setTransform(-32.3,9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAXIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgBADIgDABIgCgBgAgCgQQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_19.setTransform(-34.7,10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQACgFAGgDQAFgDAFgBQAGABAGADQAGADADAFQADAGAAAGQAAAIgDAEQgDAFgGADQgGAEgGAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAEgCQAFgDACgEQADgEAAgGQAAgFgDgFQgCgEgFgDQgEgDgFABQgFgBgEADg");
	this.shape_20.setTransform(-38.4,11.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAaQgEgEAAgGIAAgeIgJAAIAAgDIAJAAIAAgLIAFAAIAAALIANAAIAAADIgNAAIAAAeQAAAEABADQACACAEAAQAFAAADgCIACADIgFACIgFABQgGAAgCgDg");
	this.shape_21.setTransform(-43.6,10.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCAaQgEgEAAgGIAAgeIgJAAIAAgDIAJAAIAAgLIAFAAIAAALIANAAIAAADIgNAAIAAAeQAAAEABADQACACAEAAQAFAAADgCIACADIgFACIgFABQgGAAgCgDg");
	this.shape_22.setTransform(-47.2,10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgEgFQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAFAAQAGAAAGADQAEADAEAFQACAGAAAGIAAABIgnAAQAAAGADAEQACAEAFADQAEACAFAAQAFAAADgCQAEgCADgDIADADQgEAEgEACQgFACgFAAQgHAAgFgDgAgIgQQgEACgCADQgCAFgBAEIAjAAQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_23.setTransform(-54,10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgSAAIAAgDIAnAAIAAADIgSAAIAAAqg");
	this.shape_24.setTransform(-58.8,10.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAhIAAgnIghAnIgEAAIAAguIAEAAIAAAnIAhgnIAEAAIAAAugAgIgXQgEgDAAgGIAEAAQAAAEACACQADACADAAQAEAAADgCQACgCAAgEIAEAAQAAAGgEADQgDADgGAAQgEAAgEgDg");
	this.shape_25.setTransform(-63.9,10);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFADQgEACgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_26.setTransform(-69.8,10.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAVQgGgEgDgFQgDgFAAgHQAAgGADgGQADgFAGgDQAFgDAGAAQAGAAAEACQAFACADAFIgEACQgCgEgEgBQgEgCgEAAQgFAAgEADQgEACgDAEQgCAFAAAFQAAAGACAFQADAEAEADQAEACAFAAQAEAAAEgCQAEgBACgEIAEACQgDAEgFADQgEACgGAAQgGAAgFgDg");
	this.shape_27.setTransform(-74.6,10.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFADQgEACgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_28.setTransform(-82.3,10.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgEAAIAAgtIAEAAIAAAVIAfAAIAAgVIAEAAIAAAtg");
	this.shape_29.setTransform(-87.7,10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPAXIAAgQIgPAAIgCAAIgMAQIgEAAIAMgRQgGgBgDgDQgDgDAAgGQAAgHAFgFQAFgDAIAAIATAAIAAAtgAgOgGQAAAKAOAAIAPAAIAAgXIgPAAQgOAAAAANg");
	this.shape_30.setTransform(-95.9,10.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARAXIAAgmIghAmIgEAAIAAgtIAFAAIAAAmIAggmIAEAAIAAAtg");
	this.shape_31.setTransform(-101.5,10.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAUAeIAAgNIgrAAIAAguIAEAAIAAAqIAfAAIAAgqIAEAAIAAAqIAIAAIAAARg");
	this.shape_32.setTransform(-107.3,11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFADQgEACgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_33.setTransform(-113.4,10.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_34.setTransform(-118.7,11.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFADQgEACgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_35.setTransform(-124.8,10.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAXIABgEIACABQADAAACgEQADgEAAgFIABgOIABgQIAgAAIAAAuIgFAAIAAgqIgXAAIgBANIgCAPQgBAHgCAEQgCAEgFAAIgEgBg");
	this.shape_36.setTransform(-130.4,10.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAgtIAEAAIAAAVIAMAAIARgVIAFAAIgTAWIAUAXg");
	this.shape_37.setTransform(-134.9,10.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgFQgEgFAAgHQAAgGAEgGQADgEAEgEQAGgDAFAAQAHAAAEADQAFADAEAFQACAGAAAGIAAABIgnAAQAAAGACAEQADAEAFADQAEACAFAAQAFAAADgCQAEgCADgDIADADQgEAEgFACQgEACgFAAQgHAAgFgDgAgIgQQgEACgDADQgCAFAAAEIAjAAQAAgEgDgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_38.setTransform(-140.6,10.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWAdIAAgLIgsAAIAAALIgDAAIAAgPIACAAQAFAAACgIQACgGAAgNIABgPIAgAAIAAAqIAIAAIAAAPgAgJgMIgDAQQgBAHgDADIAeAAIAAgmIgXAAg");
	this.shape_39.setTransform(-146.4,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAPAXIAAgQIgPAAIgCAAIgLAQIgGAAIANgRQgGgBgDgDQgDgDAAgGQAAgHAFgFQAGgDAIAAIATAAIAAAtgAgNgGQAAAKANAAIAPAAIAAgXIgOAAQgPAAABANg");
	this.shape_40.setTransform(-154.3,10.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFADQgEACgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_41.setTransform(-159.6,10.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgFAAIAAgtIAFAAIAAAVIAfAAIAAgVIAFAAIAAAtg");
	this.shape_42.setTransform(-165,10.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgTAAIAAgDIApAAIAAADIgSAAIAAAqg");
	this.shape_43.setTransform(-170.1,10.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAgtIAEAAIAAAVIAMAAIARgVIAFAAIgTAWIAUAXg");
	this.shape_44.setTransform(-174.3,10.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgEgFQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAFAAQAGAAAGADQAEADAEAFQACAGAAAGIAAABIgnAAQAAAGADAEQACAEAFADQAEACAFAAQAFAAADgCQAEgCADgDIADADQgEAEgEACQgFACgFAAQgHAAgFgDgAgIgQQgEACgCADQgCAFgBAEIAjAAQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_45.setTransform(-180,10.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAVQgGgEgDgFQgCgFAAgHQAAgGACgGQADgEAGgEQAFgDAGAAQAGAAAGADQAGAEADAEQADAGAAAGQAAAHgDAFQgDAFgGAEQgGADgGAAQgGAAgFgDgAgJgQQgEADgDAEQgCAEAAAFQAAAGACAFQADAEAEADQAFACAEAAQAFAAAEgCQAFgDACgEQADgFAAgGQAAgFgDgEQgCgEgFgDQgEgDgFAAQgEAAgFADg");
	this.shape_46.setTransform(-185.6,10.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_47.setTransform(-191.3,11.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAVAfIAAg5IgpAAIAAA5IgFAAIAAg+IAzAAIAAA+g");
	this.shape_48.setTransform(-198.3,10.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgCADIgCABIgCgBg");
	this.shape_49.setTransform(198.7,3.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAARIAMgRIgMgQIADAAIANAQIgNARgAgPARIANgRIgNgQIAEAAIAMAQIgMARg");
	this.shape_50.setTransform(195.6,1.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEIABgEQAFAEAFACQAFACAGAAQAEAAAFgCQAEgBADgEQADgDAAgEQAAgGgFgEQgFgDgIAAIgMAAIAAgDIAMAAQAHAAAEgDQAEgDAAgGQAAgGgFgDQgFgEgHAAIgJABIgJAFIgBgEQAEgDAFgCIAKgBQAGAAAFACQAFACADAEQADAEAAAFQAAAFgDAEQgDADgFACQAGAAAEAEQADAEAAAGQAAAGgDAEQgDAEgGACQgFACgGAAQgGAAgGgCg");
	this.shape_51.setTransform(190.6,0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgFAcQgHgEgEgHQgEgGgBgJIgOAAIAAAdIgEAAIAAg+IAEAAIAAAdIAOAAQABgIAEgGQAEgIAHgDQAGgEAIAAQAJAAAHAEQAHAEAEAIQAEAHAAAIQAAAJgEAIQgEAGgHAFQgHAEgJAAQgIAAgGgEgAgDgXQgGADgEAHQgDAGAAAHQAAAIADAGQAEAGAGAEQAFADAHABQAIgBAGgDQAGgEADgGQAEgGAAgIQAAgHgEgGQgDgHgGgDQgGgEgIABQgHgBgFAEg");
	this.shape_52.setTransform(183.3,0.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAcQgHgFgEgGQgFgIAAgJQAAgIAFgHQAEgIAHgEQAIgEAIAAQAJAAAIAEQAHAEAFAIQAEAHAAAIQAAAJgEAIQgFAGgHAFQgIAEgJAAQgIAAgIgEgAgNgXQgHADgDAHQgEAGAAAHQAAAIAEAGQADAGAHAEQAGADAHABQAIgBAGgDQAHgEADgGQAEgGAAgIQAAgHgEgGQgDgHgHgDQgGgEgIABQgHgBgGAEg");
	this.shape_53.setTransform(174.3,0.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAcQgHgFgEgGQgFgIAAgJQAAgIAFgHQAEgIAHgEQAIgEAIAAQAHAAAGACQAFACAEAFIgCACQgIgGgMAAQgHgBgGAEQgHADgDAHQgEAGAAAHQAAAIAEAGQADAGAHAEQAGADAHABQAMAAAIgIIACADQgEAEgFACQgGADgHAAQgIAAgIgEg");
	this.shape_54.setTransform(167.3,0.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AATAfIgXgdIgPAAIAAAdIgEAAIAAg+IAEAAIAAAdIAPAAIAVgdIAGAAIgXAfIAZAfg");
	this.shape_55.setTransform(159.1,0.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLAcQgHgFgEgGQgEgIgBgJQABgIAEgHQAEgIAHgEQAIgEAJAAQAGAAAGACQAFACAEAFIgCACQgHgGgMAAQgIgBgGAEQgHADgDAHQgEAGAAAHQAAAIAEAGQADAGAHAEQAGADAIABQALAAAIgIIACADQgEAEgFACQgGADgGAAQgJAAgIgEg");
	this.shape_56.setTransform(152.4,0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAMARIgMgRIAMgQIAEAAIgNAQIANARgAgCARIgNgRIANgQIADAAIgMAQIAMARg");
	this.shape_57.setTransform(147.1,1.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQAcQgHgFgEgGQgFgIAAgJQAAgIAFgHQAEgIAHgEQAIgEAIAAQAJAAAIAEQAHAEAFAIQAEAHAAAIQAAAJgEAIQgFAGgHAFQgIAEgJAAQgIAAgIgEgAgNgXQgHADgDAHQgEAGAAAHQAAAIAEAGQADAGAHAEQAGADAHABQAIgBAGgDQAHgEADgGQAEgGAAgIQAAgHgEgGQgDgHgHgDQgGgEgIABQgHgBgGAEg");
	this.shape_58.setTransform(138.8,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQAcQgHgFgEgGQgFgIAAgJQAAgIAFgHQAEgIAHgEQAIgEAIAAQAJAAAIAEQAHAEAFAIQAEAHAAAIQAAAJgEAIQgFAGgHAFQgIAEgJAAQgIAAgIgEgAgNgXQgHADgDAHQgEAGAAAHQAAAIAEAGQADAGAHAEQAGADAHABQAIgBAGgDQAHgEADgGQAEgGAAgIQAAgHgEgGQgDgHgHgDQgGgEgIABQgHgBgGAEg");
	this.shape_59.setTransform(131.1,0.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgQAcQgHgFgEgGQgFgIAAgJQAAgIAFgHQAEgIAHgEQAIgEAIAAQAJAAAIAEQAHAEAFAIQAEAHAAAIQAAAJgEAIQgFAGgHAFQgIAEgJAAQgIAAgIgEgAgNgXQgHADgDAHQgEAGAAAHQAAAIAEAGQADAGAHAEQAGADAHABQAIgBAGgDQAHgEADgGQAEgGAAgIQAAgHgEgGQgDgHgHgDQgGgEgIABQgHgBgGAEg");
	this.shape_60.setTransform(123.4,0.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_61.setTransform(115.1,1.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAQAXIAAgmIggAmIgEAAIAAguIAEAAIAAAnIAhgnIAEAAIAAAug");
	this.shape_62.setTransform(109.1,1.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAfAdIAAgLIgDAAIAAgEIgFAAIAAgqIAFAAIAAAqIAIAAIAAAPgAAcASIgFAAIAAgEIAAAEIg5AAIAAguIAEAAIAAAqIAZAAIAAgqIAEAAIAAAqIAYAAIAAAAIAFAAIAAAEg");
	this.shape_63.setTransform(102.3,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAQAhIAAgnIggAnIgEAAIAAguIAEAAIAAAnIAhgnIAEAAIAAAugAgIgXQgEgDAAgGIADAAQAAAEADACQADACADAAQAEAAADgCQACgCAAgEIAEAAQgBAGgDADQgEADgFAAQgFAAgDgDg");
	this.shape_64.setTransform(94.7,0.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAVQgFgEgEgEQgCgGAAgHQAAgGACgGQAEgEAFgEQAGgDAFAAQAHAAAFADQAGAEADAEQACAGAAAGQAAAHgCAGQgDAEgGAEQgFADgHAAQgFAAgGgDgAgIgQQgFADgCAEQgDAEAAAFQAAAGADAFQACAEAFADQAEACAEAAQAGAAAEgCQAEgDACgEQADgFAAgGQAAgFgDgEQgCgEgEgDQgEgDgGAAQgEAAgEADg");
	this.shape_65.setTransform(88.8,1.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_66.setTransform(83.1,2.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgSAAIAAgEIAnAAIAAAEIgSAAIAAAqg");
	this.shape_67.setTransform(77.7,1.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgIAVQgGgEgDgEQgDgGAAgHQAAgGADgGQADgFAGgDQAFgDAGAAQAGAAAEACQAFACADAFIgEACQgCgEgEgBQgEgCgEAAQgFAAgEADQgEACgDAEQgCAFAAAFQAAAGACAFQADAEAEADQAEACAFAAQAEAAAEgCQAEgBACgEIAEACQgDAEgFACQgEADgGAAQgGAAgFgDg");
	this.shape_68.setTransform(73.2,1.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_69.setTransform(67.9,1.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEIABgEQAFAEAFACQAFACAGAAQAEAAAFgCQAEgBADgEQADgDAAgEQAAgGgFgEQgFgDgIAAIgMAAIAAgDIAMAAQAHAAAEgDQAEgDAAgGQAAgGgFgDQgFgEgHAAIgJABIgJAFIgBgEQAEgDAFgCIAKgBQAGAAAFACQAFACADAEQADAEAAAFQAAAFgDAEQgDADgFACQAGAAAEAEQADAEAAAGQAAAGgDAEQgDAEgGACQgFACgGAAQgGAAgGgCg");
	this.shape_70.setTransform(62.4,0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgBADIgCgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgCADIgCABIgBgBg");
	this.shape_71.setTransform(56.6,3.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAQAXIAAgmIggAmIgEAAIAAguIAFAAIAAAnIAggnIAEAAIAAAug");
	this.shape_72.setTransform(52.6,1.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AARAXIAAgmIghAmIgEAAIAAguIAEAAIAAAnIAhgnIAEAAIAAAug");
	this.shape_73.setTransform(46.4,1.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAPAXIAAgUQgJAEgHAAQgIAAgFgEQgFgDABgHIAAgQIAEAAIAAAQQAAAFAEADQAEACAGAAQAGABAJgEIAAgXIAEAAIAAAug");
	this.shape_74.setTransform(40.5,1.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AARAXIAAgmIghAmIgEAAIAAguIAEAAIAAAnIAhgnIAEAAIAAAug");
	this.shape_75.setTransform(35,1.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgWAXIAAgEIADABQADAAACgEQACgEABgFIABgOIABgQIAgAAIAAAuIgEAAIAAgqIgYAAIgBANIgBAPQgCAHgCAEQgCAEgFAAIgEgBg");
	this.shape_76.setTransform(28.7,1.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_77.setTransform(23.5,1.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgFAAIAAguIAFAAIAAAWIAfAAIAAgWIAFAAIAAAug");
	this.shape_78.setTransform(18.1,1.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgSAXIAAguIATAAQAIAAAEADQAFAEAAAFQAAAFgDACQgCADgEABQAKABAAAKQAAAGgEADQgFAEgJgBgAgOAUIAPAAQAOAAAAgJQAAgFgDgDQgDgBgHAAIgQAAgAgOgBIAPAAQAGAAADgDQADgCAAgEQAAgEgDgCQgDgDgGAAIgPAAg");
	this.shape_79.setTransform(10.3,1.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAAAXIgRAAIAAguIAEAAIAAARIAOAAQAIAAAFAEQAEADABAHQAAAIgGAEQgEAEgIAAIgBgBgAgNAUIANAAQAGAAAEgDQAEgDAAgGQAAgGgEgCQgEgCgGAAIgNAAg");
	this.shape_80.setTransform(2.9,1.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgSAAIAAgEIAnAAIAAAEIgSAAIAAAqg");
	this.shape_81.setTransform(-1.9,1.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgIAVQgGgEgDgEQgDgGAAgHQAAgGADgGQADgFAGgDQAFgDAGAAQAGAAAEACQAFACADAFIgEACQgCgEgEgBQgEgCgEAAQgFAAgEADQgEACgDAEQgCAFAAAFQAAAGACAFQADAEAEADQAEACAFAAQAEAAAEgCQAEgBACgEIAEACQgDAEgFACQgEADgGAAQgGAAgFgDg");
	this.shape_82.setTransform(-6.4,1.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgEQgDgGgBgHQABgGADgGQACgEAGgEQAFgDAFAAQAHAAAEADQAGADACAFQADAGAAAGIAAABIgnAAQAAAGACAEQADAEAEADQAFACAFAAQAEAAAEgCQAEgCADgDIACADQgCAEgGACQgEACgGAAQgFAAgGgDgAgIgQQgEACgDADQgCAFAAAEIAjAAQgBgEgBgFQgDgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_83.setTransform(-11.7,1.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgGAXIgSAAIAAguIAEAAIAAARIAPAAQAHAAAFAEQAEADABAHQgBAIgEAEQgEAEgHAAIgCgBgAgUAUIAOAAQAGAAAEgDQADgDAAgGQAAgGgDgCQgEgCgGAAIgOAAgAAVAXIAAguIAEAAIAAAug");
	this.shape_84.setTransform(-20.2,1.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_85.setTransform(-26.5,2.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAQAXIAAgmIggAmIgEAAIAAguIAFAAIAAAnIAggnIAEAAIAAAug");
	this.shape_86.setTransform(-32.9,1.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgTAAIAAgEIAoAAIAAAEIgSAAIAAAqg");
	this.shape_87.setTransform(-38,1.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_88.setTransform(-42.9,2.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_89.setTransform(-49,1.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgSAXIAAguIATAAQAIAAAEADQAFAEAAAFQAAAFgDACQgCADgEABQAKABAAAKQAAAGgEADQgFAEgJgBgAgOAUIAPAAQAOAAAAgJQAAgFgDgDQgDgBgHAAIgQAAgAgOgBIAPAAQAGAAADgDQADgCAAgEQAAgEgDgCQgDgDgGAAIgPAAg");
	this.shape_90.setTransform(-54,1.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_91.setTransform(-59,1.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_92.setTransform(-67,1.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_93.setTransform(-71.6,1.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgLAVQgGgEgDgEQgCgGAAgHQAAgGACgGQADgEAGgEQAGgDAFAAQAGAAAGADQAGAEADAEQACAGAAAGQAAAHgCAGQgDAEgGAEQgGADgGAAQgFAAgGgDgAgJgQQgEADgCAEQgDAEAAAFQAAAGADAFQACAEAEADQAFACAEAAQAFAAAFgCQAEgDACgEQADgFAAgGQAAgFgDgEQgCgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_94.setTransform(-77.4,1.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAQAXIAAgqIgfAAIAAAqIgFAAIAAguIApAAIAAAug");
	this.shape_95.setTransform(-83.2,1.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgDAKIADgMIgCgBIgBgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBACIAAACIgDALg");
	this.shape_96.setTransform(-89.4,4.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_97.setTransform(-93.1,1.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAWAdIAAgLIgsAAIAAALIgDAAIAAgPIACAAQAFAAACgIQABgGABgNIABgPIAgAAIAAAqIAHAAIAAAPgAgKgMIgCAQQgBAHgDADIAeAAIAAgmIgXAAg");
	this.shape_98.setTransform(-98.5,2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLAVQgGgEgDgEQgCgGAAgHQAAgGACgGQADgEAGgEQAFgDAGAAQAGAAAGADQAGAEADAEQADAGAAAGQAAAHgDAGQgDAEgGAEQgGADgGAAQgGAAgFgDgAgJgQQgEADgDAEQgCAEAAAFQAAAGACAFQADAEAEADQAFACAEAAQAFAAAEgCQAFgDACgEQADgFAAgGQAAgFgDgEQgCgEgFgDQgEgDgFAAQgEAAgFADg");
	this.shape_99.setTransform(-104.1,1.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgPAXIAAguIAfAAIAAAEIgbAAIAAAqg");
	this.shape_100.setTransform(-108.6,1.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgSAdIACgEQAFADAHAAQAKAAAHgHQAFgHAAgNIAAgHQgCAGgFACQgFADgHAAQgGAAgFgCQgFgCgDgDQgCgEAAgGQAAgGACgEQADgEAFgDQAFgCAGAAQALAAAGAIQAHAJAAAOQAAAKgEAIQgDAGgGAEQgHAEgHAAQgIAAgGgDgAgNgXQgEAEgBAHQABAHAEAEQAFADAHAAQAEAAAEgCQAEgBADgEQACgDAAgEQAAgEgCgEQgCgDgEgCQgEgCgFAAQgHAAgFAEg");
	this.shape_101.setTransform(-116.3,0.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAFAfIAAg5IgOAAIAAgFIATAAIAAA+g");
	this.shape_102.setTransform(-121,0.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgMAcQgGgEgDgHQgDgHAAgKQAAgIADgIQADgHAGgEQAGgEAGAAQAHAAAGAEQAFAEADAHQAEAIAAAIQAAAKgEAHQgDAHgFAEQgGAEgHAAQgGAAgGgEgAgKgYQgEAEgDAGQgCAHAAAHQAAAIACAHQADAGAEADQAFAEAFAAQAGAAAEgEQAFgDACgGQADgHAAgIQAAgHgDgHQgCgGgFgEQgEgCgGAAQgFAAgFACg");
	this.shape_103.setTransform(-125,0.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgUAgIAAgEIAagaIAHgIIABgIQAAgGgDgDQgFgDgGAAQgGAAgFABQgEACgEAEIgCgDQADgEAGgCQAFgDAHAAQAIAAAGAFQAGAEAAAIQAAAFgDAEQgCAFgGAEIgWAYIAkAAIAAAEg");
	this.shape_104.setTransform(-130.6,0.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAPAXIAAgQIgPAAIgCAAIgLAQIgGAAIANgRQgGgBgDgDQgDgDAAgGQAAgHAFgFQAGgEAHAAIAUAAIAAAugAgNgGQAAAKANAAIAPAAIAAgXIgPAAQgOAAABANg");
	this.shape_105.setTransform(-138.2,1.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgWAXIAAgEIACABQAFAAACgEQACgEAAgFIABgOIABgQIAgAAIAAAuIgEAAIAAgqIgYAAIAAANIgCAPQgCAHgCAEQgDAEgEAAIgEgBg");
	this.shape_106.setTransform(-144,1.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_107.setTransform(-149.1,1.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_108.setTransform(-154.4,2.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgSAXIAAguIATAAQAIAAAEADQAFAEAAAFQAAAFgDACQgCADgEABQAKABAAAKQAAAGgEADQgFAEgJgBgAgOAUIAPAAQAOAAAAgJQAAgFgDgDQgDgBgHAAIgQAAgAgOgBIAPAAQAGAAADgDQADgCAAgEQAAgEgDgCQgDgDgGAAIgPAAg");
	this.shape_109.setTransform(-160.2,1.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgDgEQgEgGAAgHQAAgGAEgGQADgEAEgEQAGgDAFAAQAHAAAEADQAFADAEAFQACAGAAAGIAAABIgnAAQAAAGACAEQADAEAFADQAEACAFAAQAFAAADgCQAEgCADgDIADADQgEAEgFACQgEACgFAAQgHAAgFgDgAgIgQQgEACgDADQgCAFAAAEIAjAAQAAgEgDgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_110.setTransform(-165.8,1.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgBAqIAAgRQgNAAgIgGQgGgHAAgLQAAgKAGgGQAIgGANgBIAAgTIADAAIAAATQAOABAGAGQAIAGgBAKQABALgIAHQgGAGgOAAIAAARgAACAVQALAAAGgFQAGgGABgJQgBgIgGgFQgGgFgLgBgAgSgMQgGAFAAAIQAAAJAGAFQAFAGAMAAIAAgnQgMABgFAFg");
	this.shape_111.setTransform(-172,1.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgRAbQgGgFAAgIQAAgFADgFQAEgDAGgBQgFgDgDgDQgDgEABgFQAAgHAFgEQAGgFAJAAQAJAAAGAFQAGAEABAHQAAAFgEAEQgDADgFADQAGABAEADQAEAFAAAFQAAAIgHAFQgGAFgLAAQgKAAgHgFgAgNAEQgFAEgBAGQAAAGAGAEQAEAEAJAAQAJAAAFgEQAFgEAAgGQAAgGgFgEQgFgEgJABQgIgBgFAEgAgLgYQgFAEAAAFQAAAGAFADQAEADAHAAQAIAAAFgDQAEgDAAgGQAAgFgEgEQgGgDgHAAQgHAAgEADg");
	this.shape_112.setTransform(-180.6,0.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgUAgIAAgEIAagaIAHgIIABgIQAAgGgDgDQgEgDgHAAQgGAAgFABQgEACgDAEIgEgDQAEgEAFgCQAGgDAHAAQAIAAAGAFQAFAEABAIQgBAFgCAEQgCAFgGAEIgWAYIAjAAIAAAEg");
	this.shape_113.setTransform(-186.1,0.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_114.setTransform(-193.6,1.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgEAAIAAguIAEAAIAAAWIAfAAIAAgWIAEAAIAAAug");
	this.shape_115.setTransform(-199,1.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_116.setTransform(128.2,-8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgFAAIAAguIAFAAIAAAWIAfAAIAAgWIAFAAIAAAug");
	this.shape_117.setTransform(122.8,-8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAAAXIgRAAIAAguIAEAAIAAARIAOAAQAIAAAFAEQAFADAAAHQgBAIgFAEQgEAEgIAAIgBgBgAgNAUIANAAQAGAAAEgDQAEgDAAgGQAAgGgEgCQgEgCgGAAIgNAAg");
	this.shape_118.setTransform(117.6,-8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgWAXIABgEIABABQAEAAADgEQACgEAAgFIABgOIABgQIAgAAIAAAuIgFAAIAAgqIgXAAIAAANIgDAPQgBAHgCAEQgDAEgEAAIgEgBg");
	this.shape_119.setTransform(111.5,-8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_120.setTransform(106.4,-8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgTAfIgFgDIACgEQAEAFAFAAQADAAADgCQACgDACgEIADgGIgVguIAFAAIARAqIATgqIAFAAIgYA1QgCAGgEADQgDACgFAAIgGgBg");
	this.shape_121.setTransform(101.4,-7.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgTAAIAAgEIApAAIAAAEIgSAAIAAAqg");
	this.shape_122.setTransform(97,-8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_123.setTransform(92.8,-8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_124.setTransform(87.1,-8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AARAXIAAgmIghAmIgEAAIAAguIAEAAIAAAnIAhgnIAEAAIAAAug");
	this.shape_125.setTransform(79.3,-8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgUAgIAAgEIAagaIAHgIIABgIQAAgGgDgDQgEgDgHAAQgGAAgFABQgEACgDAEIgEgDQAEgEAFgCQAGgDAHAAQAIAAAGAFQAFAEABAIQgBAFgCAEQgCAFgGAEIgWAYIAjAAIAAAEg");
	this.shape_126.setTransform(71.3,-8.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAVAXIAAgmIgUAhIgBAAIgUghIAAAmIgFAAIAAguIAFAAIAUAjIAVgjIAFAAIAAAug");
	this.shape_127.setTransform(65.3,-8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAFAfIAAg5IgOAAIAAgFIATAAIAAA+g");
	this.shape_128.setTransform(57.4,-8.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgQAXQgGgHAAgPQAAgKADgHQAEgIAGgDQAHgEAHAAQAJAAAFAEIgCADQgEgDgIAAQgKAAgGAHQgGAHgBANIABAHQACgGAFgDQAGgDAGAAQAGAAAFACQAFADACADQADAEAAAGQAAAFgDAFQgCAEgFACQgFADgGAAQgLAAgHgJgAgHAAQgDACgCADQgDAEAAAEQAAAEACADQACAEAEACQAEACAFAAQAHAAAFgEQAFgEgBgHQABgGgFgFQgEgDgJAAQgDAAgFABg");
	this.shape_129.setTransform(53.7,-8.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgDAKIADgMIgCgBIgBgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBACIAAACIgDALg");
	this.shape_130.setTransform(50,-5.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAJAfIAAgRIgjAAIAAgDIAhgqIAFAAIggApIAdAAIAAgPIAFAAIAAAPIANAAIAAAEIgNAAIAAARg");
	this.shape_131.setTransform(46.3,-8.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgMAdQgGgCgDgEIACgDQADADAGACQAFACAFAAQAJAAAEgDQAFgEAAgGQAAgHgFgEQgFgDgIAAIgEAAIAAgDIASgYIghAAIAAgEIAnAAIAAADIgTAZQAKAAAGAEQAFAFAAAIQAAAFgCAEQgDAEgFACQgFADgHAAQgGAAgGgDg");
	this.shape_132.setTransform(40.5,-8.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgCAVQgFgDgDgFQgDgFgBgGIgMAAIAAAVIgEAAIAAguIAEAAIAAAVIAMAAQABgGADgFQADgEAFgDQAEgDAGAAQAHAAAFADQAFADADAFQADAGAAAGQAAAHgDAFQgDAFgFAEQgFADgHAAQgGAAgEgDgAAAgQQgEACgDAEQgCAFAAAFQAAAGACAFQADAEAEADQADACAFAAQAGAAAEgCQAEgDACgEQADgFAAgGQAAgFgDgFQgCgEgEgCQgEgDgGAAQgFAAgDADg");
	this.shape_133.setTransform(32.3,-8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAAAXIgSAAIAAguIAFAAIAAARIANAAQAKAAAEAEQAFADgBAHQAAAIgEAEQgFAEgIAAIgBgBgAgNAUIANAAQAHAAADgDQAEgDAAgGQAAgGgEgCQgDgCgHAAIgNAAg");
	this.shape_134.setTransform(26,-8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAWAdIAAgLIgsAAIAAALIgEAAIAAgPIADAAQAFAAABgIQADgGAAgNIABgPIAgAAIAAAqIAIAAIAAAPgAgJgMIgCAQQgCAHgEADIAgAAIAAgmIgYAAg");
	this.shape_135.setTransform(20.2,-7.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_136.setTransform(14.7,-8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAfAdIAAgLIgDAAIAAgEIgEAAIAEAAIAAAEIgFAAIAAgEIAAAEIg6AAIAAguIAFAAIAAAqIAZAAIAAgqIAFAAIAAAqIAXAAIABAAIAAgqIAEAAIAAAqIAIAAIAAAPg");
	this.shape_137.setTransform(8.5,-7.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgLAVQgGgEgDgFQgCgFAAgHQAAgGACgGQADgEAGgEQAFgDAGAAQAGAAAGADQAGAEADAEQADAGAAAGQAAAHgDAFQgDAFgGAEQgGADgGAAQgGAAgFgDgAgJgQQgEADgDAEQgCAEAAAFQAAAGACAFQADAEAEADQAFACAEAAQAFAAAEgCQAFgDACgEQADgFAAgGQAAgFgDgEQgCgEgFgDQgEgDgFAAQgEAAgFADg");
	this.shape_138.setTransform(1.2,-8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgWAXIAAgEIACABQAFAAACgEQACgEAAgFIABgOIABgQIAgAAIAAAuIgEAAIAAgqIgYAAIAAANIgCAPQgCAHgCAEQgDAEgEAAIgEgBg");
	this.shape_139.setTransform(-4.9,-8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAQAXIAAgqIgfAAIAAAqIgFAAIAAguIApAAIAAAug");
	this.shape_140.setTransform(-10.3,-8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgGAXIgSAAIAAguIAFAAIAAARIAOAAQAHAAAFAEQAEADAAAHQAAAIgEAEQgEAEgHAAIgCgBgAgTAUIAMAAQAHAAADgDQAEgDAAgGQAAgGgEgCQgDgCgHAAIgMAAgAAUAXIAAguIAFAAIAAAug");
	this.shape_141.setTransform(-19,-8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_142.setTransform(-25.3,-7.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AARAXIAAgmIghAmIgEAAIAAguIAFAAIAAAnIAggnIAEAAIAAAug");
	this.shape_143.setTransform(-31.7,-8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgSAAIAAgEIAnAAIAAAEIgSAAIAAAqg");
	this.shape_144.setTransform(-36.8,-8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgWAhIAAhAIAEAAIAAALQADgFAFgDQAFgDAFgBQAHABAFADQAFADADAFQADAGAAAGQAAAIgDAEQgDAFgFADQgFAEgHAAQgFAAgFgEQgFgDgDgEIAAAcgAgJgZQgEADgDAEQgCAFAAAFQAAAGACAEQADAEAEADQAEACAFAAQAFAAAFgCQAEgDACgEQADgEAAgGQAAgFgDgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_145.setTransform(-41.7,-7.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_146.setTransform(-47.8,-8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgSAXIAAguIATAAQAIAAAEADQAFAEAAAFQAAAFgDACQgCADgEABQAKABAAAKQAAAGgEADQgFAEgJgBgAgOAUIAPAAQAOAAAAgJQAAgFgDgDQgDgBgHAAIgQAAgAgOgBIAPAAQAGAAADgDQADgCAAgEQAAgEgDgCQgDgDgGAAIgPAAg");
	this.shape_147.setTransform(-52.8,-8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_148.setTransform(-57.8,-8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAQAhIAAgnIggAnIgEAAIAAguIAFAAIAAAnIAggnIAEAAIAAAugAgIgXQgDgDgBgGIADAAQABAEADACQACACADAAQAEAAACgCQADgCABgEIADAAQgBAGgDADQgEADgFAAQgEAAgEgDg");
	this.shape_149.setTransform(-66.1,-8.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgLAVQgFgEgDgFQgEgFAAgHQAAgGAEgGQADgEAFgEQAGgDAFAAQAGAAAGADQAFAEADAEQADAGABAGQgBAHgDAFQgDAFgFAEQgGADgGAAQgFAAgGgDgAgIgQQgFADgDAEQgCAEAAAFQAAAGACAFQADAEAFADQADACAFAAQAGAAADgCQAFgDADgEQACgFAAgGQAAgFgCgEQgDgEgFgDQgDgDgGAAQgFAAgDADg");
	this.shape_150.setTransform(-72,-8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgEAAIAAguIAEAAIAAAWIAfAAIAAgWIAEAAIAAAug");
	this.shape_151.setTransform(-77.9,-8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgBAXIAAgqIgSAAIAAgEIAnAAIAAAEIgSAAIAAAqg");
	this.shape_152.setTransform(-82.9,-8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_153.setTransform(-87.8,-8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgEAAIAAguIAEAAIAAAWIAfAAIAAgWIAEAAIAAAug");
	this.shape_154.setTransform(-93.2,-8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAVAXIAAgmIgUAhIgBAAIgUghIAAAmIgFAAIAAguIAFAAIAUAjIAVgjIAFAAIAAAug");
	this.shape_155.setTransform(-99.7,-8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgLAVQgFgEgEgFQgDgFAAgHQAAgGADgGQAEgEAFgEQAGgDAFAAQAHAAAFADQAGAEADAEQACAGAAAGQAAAHgCAFQgDAFgGAEQgFADgHAAQgFAAgGgDgAgIgQQgFADgCAEQgDAEAAAFQAAAGADAFQACAEAFADQAEACAEAAQAGAAAEgCQAEgDACgEQADgFAAgGQAAgFgDgEQgCgEgEgDQgEgDgGAAQgEAAgEADg");
	this.shape_156.setTransform(-106.1,-8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_157.setTransform(-111.1,-8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgLAVQgFgEgEgFQgDgFAAgHQAAgGADgGQAEgEAFgEQAGgDAFAAQAHAAAFADQAGAEADAEQACAGAAAGQAAAHgCAFQgDAFgGAEQgFADgHAAQgFAAgGgDgAgIgQQgFADgCAEQgDAEAAAFQAAAGADAFQACAEAFADQAEACAEAAQAGAAAEgCQAEgDACgEQADgFAAgGQAAgFgDgEQgCgEgEgDQgEgDgGAAQgEAAgEADg");
	this.shape_158.setTransform(-116.9,-8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgFAAIAAguIAFAAIAAAWIAfAAIAAgWIAFAAIAAAug");
	this.shape_159.setTransform(-122.7,-8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAWAdIAAgLIgsAAIAAALIgEAAIAAgPIADAAQAFAAABgIQADgGAAgNIABgPIAgAAIAAAqIAIAAIAAAPgAgJgMIgCAQQgCAHgEADIAgAAIAAgmIgYAAg");
	this.shape_160.setTransform(-128.7,-7.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgLAVQgGgEgDgFQgDgFAAgHQAAgGADgGQADgEAGgEQAFgDAGAAQAHAAAFADQAGAEACAEQADAGAAAGQAAAHgDAFQgCAFgGAEQgFADgHAAQgGAAgFgDgAgIgQQgFADgCAEQgDAEAAAFQAAAGADAFQACAEAFADQAEACAEAAQAFAAAFgCQAEgDADgEQACgFAAgGQAAgFgCgEQgDgEgEgDQgFgDgFAAQgEAAgEADg");
	this.shape_161.setTransform(-134.3,-8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_162.setTransform(-142.3,-8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgFAAIAAguIAFAAIAAAWIAfAAIAAgWIAFAAIAAAug");
	this.shape_163.setTransform(-147.7,-8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgKAVQgFgEgEgFQgDgFAAgHQAAgGADgGQAEgEAEgEQAGgDAFAAQAGAAAGADQAEADAEAFQACAGAAAGIAAABIgnAAQAAAGADAEQACAEAFADQAEACAFAAQAFAAADgCQAEgCADgDIADADQgEAEgEACQgFACgFAAQgHAAgFgDgAgIgQQgEACgCADQgCAFgBAEIAjAAQgBgEgCgFQgCgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_164.setTransform(-153.4,-8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAUAeIAAgNIgrAAIAAguIAEAAIAAAqIAfAAIAAgqIAEAAIAAAqIAIAAIAAARg");
	this.shape_165.setTransform(-158.9,-7.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_166.setTransform(-167.4,-8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAQAXIAAgVIgfAAIAAAVIgFAAIAAguIAFAAIAAAWIAfAAIAAgWIAFAAIAAAug");
	this.shape_167.setTransform(-172.8,-8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_168.setTransform(-178.6,-8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgKAWQgFgBgDgDIABgEQADADAFACIAJABQAFAAAFgCQAFgEAAgEQAAgEgEgDQgEgCgHAAIgGAAIAAgDIAGAAQAGAAAEgCQADgCAAgEQAAgEgEgCQgEgDgFAAQgIAAgHAEIgBgEQAIgEAIAAQAHAAAGADQAFAEAAAFQAAAEgDADQgCADgFABQAFAAADADQADADAAAEQAAAEgDAEQgCACgFACQgFACgEAAIgKgCg");
	this.shape_169.setTransform(-183.5,-8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgNAUQgFgEAAgFQAAgHAEgDQAEgDAKAAIAPAAIAAgDQAAgHgEgDQgDgEgHAAQgEAAgEACQgFABgDADIgCgDQAEgDAFgCQAFgCAEAAQAJAAAEAEQAFAFAAAJIAAAcIgEAAIAAgIQgCAEgFACQgEADgFAAQgIAAgEgEgAgKADQgEADAAAFQAAAEAEADQADACAHAAQAEAAAEgCQAFgDACgFIAAgJIgPAAQgHAAgDACg");
	this.shape_170.setTransform(-188.5,-8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAPAXIgSgVIgMAAIAAAVIgEAAIAAguIAEAAIAAAWIAMAAIARgWIAFAAIgTAXIAUAXg");
	this.shape_171.setTransform(-193.1,-8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgVAfIABgFIAGACQAGAAAFgHIABgEIgagwIAGAAIAWAsIAYgsIAFAAIgdA1QgDAFgDADQgEACgEAAIgHgBg");
	this.shape_172.setTransform(-199,-8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-204,-17.6,408.1,35.3), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape.setTransform(-1.1,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwBSIAAgdIhfAAIAAAdIgkAAIAAg9IAGAAQAMAAAGgPQAEgOABgaIACgvIB1AAIAABmIATAAIAAA9gAgTgfQAAAUgCAMQgDANgGAHIA3AAIAAhGIgrAAg");
	this.shape_1.setTransform(-17.2,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA8QgRgIgJgQQgKgQAAgUQAAgTAKgQQAJgQARgIQARgJAVAAQAUAAARAJQARAIAKAQQAJAQAAATQAAAUgJAQQgKAQgRAIQgRAJgUAAQgVAAgRgJgAgYgaQgKAKABAQQgBARAKAKQALAKAOAAQAOAAAKgKQAKgKAAgRQAAgQgKgKQgKgKgOAAQgOAAgLAKg");
	this.shape_2.setTransform(-34,50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIBrAAIAAAgIhEAAIAABlg");
	this.shape_3.setTransform(-47.7,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBXQgMgDgKgGIAPgdQANAIAUAAQAWABAMgNQAOgOABgZQgQAQgbAAQgRAAgNgHQgOgGgIgMQgIgMAAgRQAAgQAJgOQAIgNAPgIQAPgGATAAQAkAAAVAWQAUAWAAAqQAAAdgLAVQgLAWgUALQgUAKgaABQgOAAgNgEgAgYg0QgIAHAAAMQAAAMAIAHQAJAHANAAQAMAAAJgHQAIgIAAgLQAAgMgIgHQgIgHgOAAQgMAAgJAHg");
	this.shape_4.setTransform(-70.3,48.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCBXIAAiNIgjAAIAAghIBLAAIAACug");
	this.shape_5.setTransform(-83.9,48.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBQQgRgLgJgVQgKgTAAgdQAAgbAKgVQAJgUARgKQARgLAVAAQAWAAAQALQARAKAKAUQAKAVAAAbQAAAdgKATQgKAVgRALQgQALgWAAQgVAAgRgLgAgYgqQgJAOAAAcQAAAdAJANQAJAOAPABQAQgBAJgOQAJgNAAgdQAAgcgJgOQgJgOgQAAQgPAAgJAOg");
	this.shape_6.setTransform(-96.3,48.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BZIAAgaIBDg/QAKgKAEgIQAEgHAAgHQAAgLgHgFQgIgGgMAAQgMAAgJAEQgJAFgGAJIgegTQAKgQASgJQASgIAXAAQATAAAPAHQAOAFAIANQAJALAAAQQAAAOgGANQgGALgSAQIgnAmIBKAAIAAAhg");
	this.shape_7.setTransform(-112.6,48.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BDIAAiFIAmAAIAAArIAhAAQAbAAANAMQAPALAAAUQgBAXgQAMQgPAMgcAAgAgYAoIAZAAQAKAAAHgFQAFgFAAgKQAAgKgFgEQgHgFgKAAIgZAAg");
	this.shape_8.setTransform(0.2,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhIBdIAAi3IAlAAIAAAQQAOgRAbgBQATABAPAIQAQAIAJARQAIAPAAAVQAAAUgIAPQgJAQgQAIQgPAJgTAAQgYAAgPgQIAAA/gAgYgxQgKAKAAARQAAAQAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgQQAAgRgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_9.setTransform(-16.2,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1BNQgVgXAAgsQAAgoASgYQASgYAkgHIA/gNIAFAhIg4ALQgWAFgLAKQgLALgDATQAKgJAMgFQAMgFAOAAQASAAAPAHQAPAJAHANQAJAOAAASQAAAUgKAPQgJAOgRAJQgQAIgWAAQgiAAgUgWgAgXAKQgJAJAAAPQAAAPAKAKQAJAKAPAAQAPAAAIgKQAJgKAAgPQAAgPgJgJQgIgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(-33.6,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBDIAAgmIgcAAIgZAmIgqAAIAggsQgOgFgIgLQgHgJAAgPQAAgYARgMQARgNAdAAIBAAAIAACFgAgQgeQgGAFgBAKQAAAKAHAEQAGAEALAAIAdAAIAAgmIgcAAQgLAAgHAFg");
	this.shape_11.setTransform(-50.6,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_12.setTransform(-64.7,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdBDIAAgyIg6AAIAAAyIgmAAIAAiFIAmAAIAAA0IA6AAIAAg0IAnAAIAACFg");
	this.shape_13.setTransform(-80,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghA8QgSgIgKgQQgJgQAAgUQAAgTAJgQQAKgQAQgIQARgJATAAQATAAAQAIQARAJAJAQQAJAPAAAUIgBALIhkAAQACANAKAHQAKAHAPAAQALAAAHgDQAJgDAHgHIAUAWQgSAWglAAQgVAAgSgJgAgUgfQgJAHgCANIBBAAQgCgNgIgHQgKgIgNAAQgMAAgJAIg");
	this.shape_14.setTransform(-96.9,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeA8QgRgIgKgQQgKgQAAgUQAAgTAKgQQAKgQARgIQARgJAVAAQAVAAAQAJQAPAIAIARIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQgVAAgRgJg");
	this.shape_15.setTransform(-112.1,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_16.setTransform(27.6,-8.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBDIAAgyQgRAJgTAAQgbAAgOgNQgOgMAAgZIAAgqIAnAAIAAAoQAAAMAGAFQAHAGAMAAQAOAAANgHIAAg4IAoAAIAACFg");
	this.shape_17.setTransform(10.3,-8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape_18.setTransform(-5.1,-8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAvBSIAAgdIhdAAIAAAdIgkAAIAAg9IAFAAQANAAAEgPQAFgOACgaIABgvIB0AAIAABmIATAAIAAA9gAgSgfQgBAUgDAMQgCANgHAHIA4AAIAAhGIgqAAg");
	this.shape_19.setTransform(-21.2,-6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeA8QgRgIgKgQQgKgQAAgUQAAgTAKgQQAKgQARgIQARgJAVAAQAVAAAQAJQAPAIAIARIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQgVAAgRgJg");
	this.shape_20.setTransform(-37.1,-8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZBDIgjgzIgVAAIAAAzIgnAAIAAiFIAnAAIAAA0IAVAAIAjg0IAqAAIgvBAIAyBFg");
	this.shape_21.setTransform(-58.8,-8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglA8QgRgIgKgQQgJgQAAgUQAAgTAJgQQAKgQARgIQARgJAVAAQAUAAASAJQAQAIAKAQQAJAQAAATQAAAUgJAQQgKAQgQAIQgSAJgUAAQgVAAgRgJgAgXgaQgLAKABAQQgBARALAKQAKAKAOAAQAOAAAKgKQAKgKgBgRQABgQgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_22.setTransform(-75.9,-8.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhIBdIAAi3IAlAAIAAAQQAOgSAbAAQATAAAPAJQAQAIAJARQAIAPAAAVQAAAUgIAPQgJAQgQAJQgPAIgTAAQgYAAgPgQIAAA/gAgYgxQgKAKAAARQAAARAKAJQAKAKAOAAQAOAAAKgKQAKgJAAgRQAAgRgKgKQgKgLgOABQgOgBgKALg");
	this.shape_23.setTransform(-92.3,-5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglBPQgVgMgMgVQgMgUgBgaQABgZAMgVQAMgVAVgLQAWgMAaAAQAXAAASAIQATAIANAQIgaAXQgSgUgbAAQgPAAgMAHQgOAHgGANQgIAMABAQQgBAQAIANQAGANAOAHQAMAHAPAAQAbAAASgVIAaAZQgNAPgTAHQgSAJgXgBQgaAAgWgLg");
	this.shape_24.setTransform(-110.2,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-121.6,-31.2,160.3,97.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape.setTransform(109.8,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBDIgjgzIgVAAIAAAzIgnAAIAAiFIAnAAIAAA0IAVAAIAjg0IAqAAIgvBAIAyBFg");
	this.shape_1.setTransform(95.6,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBDIAAhPIhABPIgkAAIAAiFIAnAAIAABPIBAhPIAkAAIAACFg");
	this.shape_2.setTransform(77.7,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABLBRIAAgbIgWAAIAAggIAAAgIikAAIAAiFIAnAAIAABlIAtAAIAAhlIAlAAIAABlIArAAIABAAIAnAAIAAAgIgSAAIASAAIAAggIgnAAIAAhlIAnAAIAABlIATAAIAAA7g");
	this.shape_3.setTransform(57.7,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBeIAAhQIhABQIgkAAIAAiGIAnAAIAABPIBAhPIAkAAIAACGgAguhdIAaAAQAAAJAFAFQAEAFAJAAQAIAAAFgFQAFgFAAgJIAaAAQAAAngrAAQgtAAAAgng");
	this.shape_4.setTransform(35.7,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA8QgRgIgKgQQgJgQAAgUQAAgTAJgQQAKgQARgIQARgJAUAAQAWAAAQAJQARAIAJAQQAKAQAAATQAAAUgKAQQgJAQgRAIQgQAJgWAAQgUAAgRgJgAgYgaQgJAKgBAQQABARAJAKQAKAKAOAAQAQAAAJgKQAJgKAAgRQAAgQgJgKQgJgKgQAAQgOAAgKAKg");
	this.shape_5.setTransform(18.6,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBcIAAi1IAlAAIAAAPQAOgRAbAAQATgBAPAJQAQAJAJAPQAIAQAAAUQAAAWgIAOQgJAPgQAJQgPAJgTAAQgYAAgPgRIAAA/gAgYgyQgKALAAAQQAAARAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgRQAAgQgKgLQgKgKgOAAQgOAAgKAKg");
	this.shape_6.setTransform(2.3,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_7.setTransform(-13.6,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeA8QgRgIgKgQQgKgQAAgUQAAgTAKgQQAKgQARgIQARgJAVAAQAVAAAQAJQAPAIAIARIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQgVAAgRgJg");
	this.shape_8.setTransform(-27.6,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape_9.setTransform(-43,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiBDQgQgEgMgGIALgbQAUAKAaAAQANAAAIgEQAIgFAAgHQAAgHgFgDQgGgDgLAAIgaAAIAAgXIAYAAQAJAAAFgEQAGgDAAgGQAAgHgHgDQgHgEgLAAQgUAAgXAJIgKgbQAdgMAaAAQASAAAOAFQAOAEAIAJQAJAJgBALQAAAKgFAHQgGAIgKAEQAMADAHAIQAGAHAAALQAAANgIAKQgJAJgQAFQgPAGgSAAQgQAAgPgDg");
	this.shape_10.setTransform(-57.5,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_11.setTransform(-78.1,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA8QgRgIgKgQQgJgQAAgUQAAgTAJgQQAKgQARgIQARgJAUAAQAWAAAQAJQARAIAJAQQAKAQAAATQAAAUgKAQQgJAQgRAIQgQAJgWAAQgUAAgRgJgAgYgaQgJAKgBAQQABARAJAKQAKAKAOAAQAQAAAJgKQAJgKAAgRQAAgQgJgKQgJgKgQAAQgOAAgKAKg");
	this.shape_12.setTransform(-93,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape_13.setTransform(33.7,-16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZBDIgjgzIgVAAIAAAzIgnAAIAAiFIAnAAIAAA0IAVAAIAkg0IApAAIgvBAIAzBFg");
	this.shape_14.setTransform(19.4,-16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaBDIAAgyQgRAJgTAAQgbAAgOgNQgOgMAAgZIAAgqIAnAAIAAAoQAAAMAGAFQAHAGAMAAQAOAAANgHIAAg4IAoAAIAACFg");
	this.shape_15.setTransform(2,-16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA8QgRgIgKgQQgJgQAAgUQAAgTAJgQQAKgQARgIQARgJAUAAQAVAAASAJQAQAIAKAQQAJAQAAATQAAAUgJAQQgKAQgQAIQgSAJgVAAQgUAAgRgJgAgXgaQgKAKAAAQQAAARAKAKQAJAKAOAAQAQAAAJgKQAJgKAAgRQAAgQgJgKQgJgKgQAAQgOAAgJAKg");
	this.shape_16.setTransform(-13.6,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBcIAAi2IAlAAIAAAQQAOgRAbAAQATAAAPAIQAQAJAJAPQAIAQAAAUQAAAWgIAOQgJAQgQAIQgPAJgTAAQgYAAgPgRIAAA/gAgYgyQgKALAAAQQAAASAKAJQAKAKAOAAQAOAAAKgKQAKgJAAgSQAAgQgKgLQgKgJgOgBQgOABgKAJg");
	this.shape_17.setTransform(-29.9,-14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA8QgRgIgKgQQgKgQAAgUQAAgTAKgQQAKgQARgIQARgJAVAAQAVAAAQAJQAPAIAIARIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQgVAAgRgJg");
	this.shape_18.setTransform(-46.4,-16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeA8QgRgIgKgQQgKgQAAgUQAAgTAKgQQAKgQARgIQARgJAVAAQAVAAAQAJQAPAIAIARIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQgVAAgRgJg");
	this.shape_19.setTransform(-61.2,-16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape_20.setTransform(-76.6,-16.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhIBcIAAi2IAlAAIAAAQQAOgRAbAAQATAAAPAIQAQAJAJAPQAIAQAAAUQAAAWgIAOQgJAQgQAIQgPAJgTAAQgYAAgPgRIAAA/gAgYgyQgKALAAAQQAAASAKAJQAKAKAOAAQAOAAAKgKQAKgJAAgSQAAgQgKgLQgKgJgOgBQgOABgKAJg");
	this.shape_21.setTransform(-92,-14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAeBDIAAgmIgcAAIgZAmIgqAAIAggsQgOgFgIgLQgHgJAAgPQAAgYARgMQARgNAdAAIBAAAIAACFgAgQgeQgGAFgBAKQAAAKAHAEQAGAEALAAIAdAAIAAgmIgcAAQgLAAgHAFg");
	this.shape_22.setTransform(103.3,-46.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBAQgMgFgGgJQgGgKAAgLQAAgTAOgKQAPgLAdAAIAeAAQAAgNgIgGQgHgHgPAAQgLAAgKADQgKADgIAGIgOgbQALgIAQgEQAPgEAQAAQAfAAAQAPQARAPAAAdIAABMIglAAIAAgQQgKASgeAAQgPAAgLgFgAgZAbQAAAHAGAFQAGAEAKAAQAJAAAIgFQAIgEADgJIAAgOIgaAAQgYAAAAAQg");
	this.shape_23.setTransform(88,-46.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdBDIAAgyIg6AAIAAAyIgmAAIAAiFIAmAAIAAA0IA6AAIAAg0IAnAAIAACFg");
	this.shape_24.setTransform(72.2,-46.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSBDIAAhlIguAAIAAggICBAAIAAAgIgtAAIAABlg");
	this.shape_25.setTransform(56.8,-46.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdBDIAAgyIg5AAIAAAyIgnAAIAAiFIAnAAIAAA0IA5AAIAAg0IAnAAIAACFg");
	this.shape_26.setTransform(41.5,-46.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghA8QgSgIgJgQQgKgQAAgUQAAgTAKgQQAJgQARgIQAQgJATAAQAUAAAQAIQAPAJAKAQQAJAPAAAUIAAALIhmAAQADANALAHQAJAHAPAAQALAAAIgDQAIgDAHgHIAVAWQgTAWglAAQgVAAgSgJgAgUgfQgJAHgCANIBCAAQgDgNgJgHQgIgIgOAAQgMAAgJAIg");
	this.shape_27.setTransform(24.5,-46.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAnBSIAAgdIhyAAIAAiGIAnAAIAABlIA1AAIAAhlIAnAAIAABlIAUAAIAAA+g");
	this.shape_28.setTransform(8.5,-44.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglA8QgRgIgJgQQgKgQAAgUQAAgTAKgQQAJgQARgIQARgJAVAAQAUAAARAJQARAIAJAQQAKAQAAATQAAAUgKAQQgJAQgRAIQgRAJgUAAQgVAAgRgJgAgYgaQgKAKAAAQQAAARAKAKQALAKAOAAQAOAAAKgKQAKgKAAgRQAAgQgKgKQgKgKgOAAQgOAAgLAKg");
	this.shape_29.setTransform(-9.1,-46.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhIBdIAAi3IAlAAIAAAQQAOgSAbAAQATABAPAIQAQAIAJARQAIAPAAAVQAAAUgIAPQgJAQgQAIQgPAJgTAAQgYAAgPgQIAAA/gAgYgxQgKAKAAARQAAAQAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgQQAAgRgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_30.setTransform(-25.5,-43.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAcBDIAAhlIg3AAIAABlIgnAAIAAiFICFAAIAACFg");
	this.shape_31.setTransform(-43.2,-46.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeA8QgRgIgKgQQgKgQAAgUQAAgTAKgQQAKgQARgIQARgJAVAAQAVAAAQAJQAPAIAIARIgeAQQgLgSgUAAQgOAAgKAKQgKAKAAAQQAAARAKAKQAKAKAOAAQAUAAALgSIAeAQQgIAQgPAJQgQAJgVAAQgVAAgRgJg");
	this.shape_32.setTransform(-59.1,-46.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AghA8QgSgIgKgQQgJgQAAgUQAAgTAJgQQAKgQARgIQAQgJATAAQAUAAAQAIQAQAJAJAQQAJAPAAAUIAAALIhmAAQAEANAKAHQAKAHAOAAQAKAAAJgDQAIgDAHgHIAVAWQgUAWgkAAQgWAAgRgJgAgUgfQgJAHgCANIBCAAQgDgNgJgHQgIgIgOAAQgMAAgJAIg");
	this.shape_33.setTransform(-74.8,-46.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhMBYIAAivICMAAIAAAhIhkAAIAAAkIAwAAQAgAAARANQAQAMAAAZQAAAagSAPQgTAPgiAAgAgkA5IAoAAQAQAAAHgFQAJgHAAgLQAAgYggAAIgoAAg");
	this.shape_34.setTransform(-91.3,-48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-103.1,-69.2,224.1,97.5), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F00").s().p("AgXAYQgKgJAAgPQAAgOAKgKQAJgJAOAAQAOAAAKAJQAKAKAAAOQAAAPgKAJQgKAKgOAAQgOAAgJgKg");
	this.shape.setTransform(130.3,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8F00").s().p("AhLBrQgcggAAg9QAAg4AZgiQAYghAzgLIBZgSIAHAvIhPAQQgfAGgQAPQgPAPgDAbQAMgOARgHQASgHATAAQAbAAAUALQAUALALATQALAUAAAaQAAAbgNAVQgNAVgXALQgYAMgdAAQgxAAgcgggAgfAOQgNAMAAAWQAAAVANAOQANANAUAAQAVAAANgOQAMgNAAgVQAAgWgMgMQgNgNgVAAQgUAAgNANg");
	this.shape_1.setTransform(114.2,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8F00").s().p("AhUB9QgOgFgJgIIAUgnQAGAGAJADQAIADAIAAQALAAAHgFQAHgGAGgMIAAgCIhRi9IA4AAIA0CAIA1iAIA1AAIhVDHQgNAhgSANQgTAOgbAAQgPAAgPgFg");
	this.shape_2.setTransform(91.4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8F00").s().p("AhlCCIAAkAIAzAAIAAAWQAVgYAmgBQAaABAVALQAWANAMAVQAMAXAAAdQAAAcgMAWQgMAVgWAMQgVAMgaAAQgjAAgVgXIAABZgAgihFQgNAOAAAYQAAAXANANQANAPAVAAQAUAAAOgPQANgNAAgXQAAgYgNgOQgOgPgUAAQgVAAgNAPg");
	this.shape_3.setTransform(69.3,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8F00").s().p("Ag1BvQgYgPgOgcQgNgdAAgnQAAgnANgcQAOgdAYgPQAYgPAdAAQAeAAAZAPQAXAPAOAdQANAcAAAnQAAAngNAdQgOAcgXAPQgZAQgeAAQgdAAgYgQgAghg7QgNAUgBAnQABAoANATQAMAUAVAAQAWAAANgUQANgTAAgoQAAgngNgUQgNgTgWAAQgVAAgMATg");
	this.shape_4.setTransform(34.7,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8F00").s().p("Ag1BvQgYgPgOgcQgNgdAAgnQAAgnANgcQAOgdAYgPQAXgPAeAAQAeAAAYAPQAYAPANAdQAOAcAAAnQAAAngOAdQgNAcgYAPQgYAQgeAAQgeAAgXgQgAgig7QgNAUABAnQgBAoANATQANAUAVAAQAWAAANgUQANgTAAgoQAAgngNgUQgNgTgWAAQgVAAgNATg");
	this.shape_5.setTransform(11,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF8F00").s().p("Ag1BvQgYgPgNgcQgOgdAAgnQAAgnAOgcQANgdAYgPQAYgPAdAAQAfAAAYAPQAXAPANAdQAOAcAAAnQAAAngOAdQgNAcgXAPQgYAQgfAAQgdAAgYgQgAgig7QgMAUAAAnQAAAoAMATQANAUAVAAQAXAAANgUQAMgTAAgoQAAgngMgUQgNgTgXAAQgVAAgNATg");
	this.shape_6.setTransform(-12.7,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF8F00").s().p("Ag1BvQgYgPgOgcQgNgdAAgnQAAgnANgcQAOgdAYgPQAYgPAdAAQAeAAAZAPQAXAPAOAdQANAcAAAnQAAAngNAdQgOAcgXAPQgZAQgeAAQgdAAgYgQgAghg7QgNAUgBAnQABAoANATQAMAUAVAAQAWAAANgUQANgTAAgoQAAgngNgUQgNgTgWAAQgVAAgMATg");
	this.shape_7.setTransform(-46.3,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8F00").s().p("AASB6IAAgzIiCAAIAAgmIByibIA7AAIhqCTIBBAAIAAgtIA2AAIAAAtIAnAAIAAAuIgnAAIAAAzg");
	this.shape_8.setTransform(-69.8,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8F00").s().p("AhHBfQgdggAAg6QAAgpAQgdQAPgeAdgQQAcgPAkAAQAUAAARAEQATAFAMAIIgVAqQgSgNgcAAQgeAAgSATQgSASgCAiQAWgVAmAAQAXAAAUAJQATAKALAQQALARAAAXQAAAYgMATQgMATgWAJQgVALgaAAQgyAAgdgggAgZAVQgMALAAAQQAAAQAMAKQALAKATAAQATAAALgKQALgKAAgQQAAgRgLgKQgLgKgTAAQgSAAgMAKg");
	this.shape_9.setTransform(-93.1,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8F00").s().p("AhWB8IAAgkIBehZQAPgOAFgKQAFgLAAgKQAAgPgKgHQgKgIgSAAQgRAAgMAGQgNAGgJANIgpgbQAOgVAZgNQAagLAgAAQAagBAVAJQAUAJAMAQQALARAAAWQAAAUgIARQgIARgZAWIg3A1IBoAAIAAAug");
	this.shape_10.setTransform(-125.2,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-137.1,-26.1,274.2,52.3), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F00").s().p("AgNBPIAAiEIg7AAIAAgaICRAAIAAAaIg7AAIAACEg");
	this.shape.setTransform(92.8,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8F00").s().p("AgpBHQgTgLgLgSQgLgTAAgXQAAgXALgSQALgSATgLQATgKAWAAQAYAAATAKQASALALASQALASAAAXQAAAXgLATQgLASgSALQgTAKgYAAQgWAAgTgKgAgagwQgMAHgHANQgHAMAAAQQAAAQAHANQAHANAMAHQAMAHAOAAQAQAAAMgHQAMgHAHgNQAHgNAAgQQAAgQgHgMQgHgNgMgHQgMgHgQAAQgOAAgMAHg");
	this.shape_1.setTransform(75.7,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8F00").s().p("AhcBPIAAieIAcAAIAAA2IArAAQAdABAQANQARANgBAYQAAAagRAOQgRAOgfAAgAhAA5IAkABQAUAAAKgIQAKgIAAgQQAAgQgKgHQgJgGgVAAIgkgBgABABPIAAieIAdAAIAACeg");
	this.shape_2.setTransform(46,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8F00").s().p("AhRBtIAAjYIAbAAIAAAaQAKgOAPgHQAOgGARAAQAXAAASAKQATAKAKATQAKASAAAYQAAAYgKARQgKATgTAKQgSAKgXAAQgQAAgOgHQgPgGgKgNIAABSgAgbhMQgMAHgHANQgHAMAAARQAAAQAHAMQAHANAMAHQANAHAOAAQAPAAAMgHQAMgHAHgNQAHgMAAgQQAAgRgHgMQgHgNgMgHQgMgHgPAAQgOAAgNAHg");
	this.shape_3.setTransform(24.3,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8F00").s().p("AAvBPIAAhzIhgBzIgaAAIAAieIAcAAIAABzIBhhzIAaAAIAACeg");
	this.shape_4.setTransform(2.9,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8F00").s().p("AgNBPIAAiEIg7AAIAAgaICRAAIAAAaIg7AAIAACEg");
	this.shape_5.setTransform(-15,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF8F00").s().p("AhRBtIAAjYIAbAAIAAAaQAKgOAPgHQAOgGARAAQAXAAASAKQATAKAKATQAKASAAAYQAAAYgKARQgKATgTAKQgSAKgXAAQgQAAgOgHQgPgGgKgNIAABSgAgbhMQgMAHgHANQgHAMAAARQAAAQAHAMQAHANAMAHQANAHAOAAQAPAAAMgHQAMgHAHgNQAHgMAAgQQAAgRgHgMQgHgNgMgHQgMgHgPAAQgOAAgNAHg");
	this.shape_6.setTransform(-32,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF8F00").s().p("Ag0BEQgQgNAAgVQAAgVAPgNQAQgLAhAAIAtAAIAAgGQgBgTgKgJQgMgKgTAAQgOAAgOAEQgOAFgIAIIgNgWQANgKARgFQARgFASAAQAhAAARAQQASAQAAAgIAABfIgbAAIAAgVQgHALgNAGQgOAGgSAAQgaAAgQgNgAgnAhQgBAMAKAHQAJAHARAAQAPAAAMgHQAMgIAGgNIAAgXIgsAAQgkAAAAAZg");
	this.shape_7.setTransform(-52.3,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8F00").s().p("AhEBPIAAieIBIAAQAdAAAQALQAPALAAAUQAAAMgGAJQgIAJgLAFQAeAHAAAeQAAAWgPALQgQALgfAAgAgoA5IAsAAQATAAAJgFQAJgGAAgMQAAgMgJgGQgIgHgSAAIguAAgAgogKIAqAAQAQAAAJgGQAJgGgBgMQABgWgiAAIgqAAg");
	this.shape_8.setTransform(-69.3,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8F00").s().p("AA2BpIhDhdIgsAAIAABdIgeAAIAAjRIAeAAIAABbIAsAAIBBhbIAgAAIhLBlIBPBsg");
	this.shape_9.setTransform(-88.4,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-102.4,-22.6,204.8,45.3), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8315").s().p("AicDaIDio7IAAKIQApgNAjgQIALBYQitgdiMhrg");
	this.shape.setTransform(-5.3,-21,0.764,0.797);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D225C").s().p("AAdAkIAAg4IgbAeIgDAAIgbgeIAAA4IgKAAIAAhHIAKAAIAcAhIAdghIAKAAIAABHg");
	this.shape_1.setTransform(25.8,44.6,0.764,0.797);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D225C").s().p("AgbAbQgLgLAAgQQAAgPALgLQAKgLARAAQARAAALALQALALAAAPQAAAQgLALQgLALgRAAQgRAAgKgLgAgTgTQgIAIAAALQAAAMAIAIQAIAIALAAQAMAAAIgIQAIgJAAgLQAAgKgIgJQgJgIgLAAQgLAAgIAIg");
	this.shape_2.setTransform(18.5,44.6,0.764,0.797);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D225C").s().p("AAiAvIAAgVIhDAAIAAAVIgKAAIAAgfIAJAAQAMgPAAglIAAgKIA1AAIAAA+IANAAIAAAfgAgMggQAAAggKAQIAqAAIAAg0IggAAg");
	this.shape_3.setTransform(11.4,45.5,0.764,0.797);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D225C").s().p("AAXA2IAAg4IgtA4IgKAAIAAhIIAKAAIAAA3IAtg3IAKAAIAABIgAgQgkQgHgGAAgLIAJAAQAAAGAEAEQAFAEAFABQAHgBAEgEQAEgEAAgGIAJAAQAAALgHAGQgGAGgLAAQgKAAgGgGg");
	this.shape_4.setTransform(1.7,43.3,0.764,0.797);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D225C").s().p("AgbAbQgLgLAAgQQAAgOALgMQALgLAQAAQARAAAMALQAKAMAAAOQAAAQgKALQgMALgRAAQgQAAgLgLgAgTgTQgIAJAAAKQAAALAIAJQAIAIALAAQANAAAHgIQAIgIAAgMQAAgLgIgIQgIgIgMAAQgKAAgJAIg");
	this.shape_5.setTransform(-5.2,44.6,0.764,0.797);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D225C").s().p("AggAkIgEAAIAAgKIADAAQAKAAADgMQADgKAAgQIABgXIA1AAIAABHIgLAAIAAg+IgfAAIgCAaQgCAQgCAEQgGAQgPAAIAAAAg");
	this.shape_6.setTransform(-12.3,44.6,0.764,0.797);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D225C").s().p("AAXAkIAAg3IgtA3IgKAAIAAhHIAKAAIAAA3IAtg3IAKAAIAABHg");
	this.shape_7.setTransform(-18.6,44.6,0.764,0.797);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D225C").s().p("AAnAkIgigjIAAAjIgKAAIAAgjIghAjIgOAAIAlgmIgighIAOAAIAeAfIAAgfIAKAAIAAAfIAfgfIANAAIghAhIAlAmg");
	this.shape_8.setTransform(-26.3,44.6,0.764,0.797);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D225C").s().p("AhQBqIAAjPIAqAAIAAASQARgWAgAAQAeAAATAWQAVAXgBAhQABAhgVAWQgTAXgeAAQgfAAgSgXIAABOgAgWg+QgKAGgGAKIAAAmQAGAKAKAFQAKAHALAAQASAAAKgMQAMgMAAgRQAAgRgMgMQgKgMgSAAQgLgBgKAHg");
	this.shape_9.setTransform(51.4,29.5,0.764,0.797);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D225C").s().p("Ag7A4QgXgWABgiQgBggAXgXQAYgWAjAAQAkAAAXAWQAYAYAAAfQAAAhgYAXQgXAWgkAAQgjAAgYgWgAgdgdQgLAMgBARQABASALAMQAMALARAAQASAAALgLQAMgNAAgRQAAgQgMgNQgLgMgSAAQgRAAgMAMg");
	this.shape_10.setTransform(37.5,27.3,0.764,0.797);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D225C").s().p("AgUBKIAAhwIgvAAIAAgjICHAAIAAAjIgvAAIAABwg");
	this.shape_11.setTransform(25.8,27.3,0.764,0.797);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D225C").s().p("AhABBQgQgOAAgXQAAgYARgLQARgMAZAAQAXAAASAJIAAgFQAAgcgmAAQgXAAgWANIAAgjQAXgMAgAAQAfAAAUAPQATAQAAAbIAAAxQAAAMAKAAQAGAAADgCIAAAfQgIAGgOAAQgaAAgIgTQgVAUgeAAQgYAAgOgNgAgfAMQgIAFAAAJQAAAUAbAAQAUAAAMgQIAAgOQgNgJgQAAQgOAAgIAFg");
	this.shape_12.setTransform(14.4,27.3,0.764,0.797);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D225C").s().p("Ag6BKIAAiTIB1AAIAAAjIhLAAIAABwg");
	this.shape_13.setTransform(3.6,27.3,0.764,0.797);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D225C").s().p("AAhBKIAAhWIhDBWIgnAAIAAiTIApAAIAABWIBChWIAoAAIAACTg");
	this.shape_14.setTransform(-9.2,27.3,0.764,0.797);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D225C").s().p("AhGBKIAAiTIBTAAQAWAAANALQANAKAAARQAAAWgTAJQAdAJAAAcQAAATgOALQgPALgZAAgAgdAtIAjAAQAWAAAAgRQAAgRgWAAIgjAAgAgdgOIAdAAQAUAAAAgPQAAgPgUAAIgdAAg");
	this.shape_15.setTransform(-22.3,27.3,0.764,0.797);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D225C").s().p("AhBBBQgPgOAAgXQAAgYARgLQARgMAZAAQAXAAATAJIAAgFQAAgcgnAAQgXAAgWANIAAgjQAXgMAgAAQAgAAASAPQAUAQAAAbIAAAxQAAAMAKAAQAGAAADgCIAAAfQgIAGgOAAQgaAAgIgTQgUAUgfAAQgXAAgQgNgAgfAMQgIAFAAAJQAAAUAbAAQAUAAANgQIAAgOQgOgJgRAAQgNAAgIAFg");
	this.shape_16.setTransform(-35.7,27.3,0.764,0.797);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D225C").s().p("AAvBoIAAhbIhdAAIAABbIgrAAIAAjPIArAAIAABOIBdAAIAAhOIArAAIAADPg");
	this.shape_17.setTransform(-50.6,24.9,0.764,0.797);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBB51D").s().p("Ahek1IC8IqQg3Ang5Aag");
	this.shape_18.setTransform(7.3,-24.5,0.764,0.797);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-57.5,-49.2,115,98.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F00").s().p("EiXFgC6MEuLgABIjaF2MkqxAABg");
	this.shape.setTransform(7,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-960,-24.8,1934,37.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Pic();
	this.instance.parent = this;
	this.instance.setTransform(-195,-146.2,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-195,-146.2,390,292.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhOHAHCIAAuDMCcPAAAIAAODg");
	this.shape.setTransform(0,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-500,0,1000.1,90), null);


(lib._TEMPLATE_button_link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgV3AixMAAAhFhMArvAAAMAAABFhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._BORDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEHMIAAuXIAJAAIAAOXg");
	this.shape.setTransform(0.5,49.3,1,1.087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._BORDER, new cjs.Rectangle(0,-0.7,1,100), null);


(lib.scale_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BORDER
	this.instance = new lib._BORDER();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,60,1,2,0,0,0,0.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,1,200);


(lib.scale_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BORDER
	this.instance = new lib._BORDER();
	this.instance.parent = this;
	this.instance.setTransform(-3,0,1,60,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

	// BORDER
	this.instance_1 = new lib._BORDER();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,179,1,60,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79));

	// BORDER
	this.instance_2 = new lib._BORDER();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,56,1,2,0,0,0,0.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-5.4,6000,200);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(41.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-80.1,-48.7,160.3,97.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-8.9,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-112,-48.7,224.1,97.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(-877.5,0.1,1,1,0,0,0,29.9,90);
	this.instance.alpha = 0.488;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F00").s().p("EiHFAOEIl88HMEUHAAAIF8cHg");
	this.shape.setTransform(14.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-907.4,-89.9,1824.9,179.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,29.9,90);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-29.8,-89.9,59.8,179.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-112.6,0.2,1,1,0,0,0,248.2,100.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-360.8,-101,496.3,202.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F00").s().p("AAJOEIkO8HID9AAIEOcHg");
	this.shape.setTransform(11.2,0);

	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(-12.8,0.1,1,1,0,0,0,24.6,90);
	this.instance.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-37.4,-89.9,74.9,179.9), null);


(lib.scale_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dis
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-279,161.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288));

	// Text_4
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(361.4,202.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({y:85.1,alpha:1},11,cjs.Ease.get(1)).to({y:92.1},5).wait(58).to({scaleX:1.1,scaleY:1.1},5).to({regX:0.3,scaleX:0.2,scaleY:0.2,alpha:0},11).to({_off:true},1).wait(17));

	// Text_3
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(363.2,181.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({y:85.2,alpha:1},11,cjs.Ease.get(1)).to({y:92.2},5).wait(60).to({scaleX:1.1,scaleY:1.1},6).to({regX:0.3,regY:0.3,scaleX:0.2,scaleY:0.2,alpha:0},11).to({_off:true},1).wait(105));

	// Text_2
	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-173.7,91.5);
	this.instance_3.alpha = 0.488;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({x:-208.7,alpha:1},11,cjs.Ease.get(1)).to({x:-203.7},5).wait(200).to({x:-213.7},5).to({x:-149.7,alpha:0},11).to({_off:true},1).wait(10));

	// Text_1
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-269.9,53.1);
	this.instance_4.alpha = 0.488;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({x:-234.9,alpha:1},11,cjs.Ease.get(1)).to({x:-239.9},5).wait(200).to({x:-229.9},5).to({x:-274.9,alpha:0},11).to({_off:true},1).wait(10));

	// Logo_Navigator
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-423.2,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(288));

	// Orange_rectangle_shadow
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1681.5,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:1079.3},15,cjs.Ease.get(1)).to({x:1083.3},5).wait(251).to({x:1059.3},5).to({x:-1421.3,y:91.5},11).wait(1));

	// Shadow_1
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(240.1,90.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({x:173.8,y:91},17,cjs.Ease.get(1)).to({x:183.8},5).wait(221).to({x:159.8},5).to({x:-2320.9,y:92},11).wait(1));

	// 2_line
	this.instance_8 = new lib.Символ7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(199.4,91.1,1,1,0,0,0,-112.7,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({x:13.4},17,cjs.Ease.get(1)).to({x:17.4},5).wait(229).to({x:-6.6},5).to({x:-2487.3,y:92.1},11).wait(1));

	// 0_line_gorizont
	this.instance_9 = new lib.Символ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1473.9,168.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-1029.7},15,cjs.Ease.get(1)).to({x:-1039.7},5).wait(251).to({x:-1032.7},5).to({x:-1477.8,y:168.1},11).wait(1));

	// 1_line_shadow
	this.instance_10 = new lib.Символ5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(224,90);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({x:2},12,cjs.Ease.get(1)).to({x:9},5).wait(239).to({x:-15},5).to({x:-2495.7,y:91},11).wait(1));

	// Main.ai
	this.instance_11 = new lib.ClipGroup_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(17.5,91,1,1,0,0,0,248.2,90);

	this.instance_12 = new lib.ClipGroup_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(17.5,174.2,1,1,0,0,0,188,276.3);
	this.instance_12.alpha = 0.238;

	this.instance_13 = new lib.ClipGroup_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(89,91,1,1,0,0,0,176.6,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(288));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AN3OGIQi8HIcxAFIF3cIg");
	var mask_graphics_1 = new cjs.Graphics().p("AHzOGIQi8HIcxAFIF3cHg");
	var mask_graphics_2 = new cjs.Graphics().p("ACKOFIQi8HIcxAFIF3cIg");
	var mask_graphics_3 = new cjs.Graphics().p("AjDOEIQh8HIcwAFIF3cIg");
	var mask_graphics_4 = new cjs.Graphics().p("An3OEIQh8HIcwAFIF3cHg");
	var mask_graphics_5 = new cjs.Graphics().p("AsQODIQh8HIcwAFIF3cIg");
	var mask_graphics_6 = new cjs.Graphics().p("AwOODIQh8HIcwAFIF3cIg");
	var mask_graphics_7 = new cjs.Graphics().p("AzyODIQi8HIcwAFIF3cHg");
	var mask_graphics_8 = new cjs.Graphics().p("A26OCIQi8HIcvAFIF3cIg");
	var mask_graphics_9 = new cjs.Graphics().p("A5kOCIQi8HIcwAFIF3cIg");
	var mask_graphics_10 = new cjs.Graphics().p("A5kOCIQi8HIcwAFIF3cHg");
	var mask_graphics_11 = new cjs.Graphics().p("A5kOCIQi8HIcwAFIF3cHg");
	var mask_graphics_12 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_13 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_14 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_15 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_16 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_17 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_18 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_19 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_20 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_271 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_272 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_273 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_274 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_275 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_276 = new cjs.Graphics().p("A5kOBIQi8HIcwAFIF3cIg");
	var mask_graphics_277 = new cjs.Graphics().p("A6JOBIQi8HIcwAFIF3cIg");
	var mask_graphics_278 = new cjs.Graphics().p("Egr2AOBIQi8HIcwAFIF3cIg");
	var mask_graphics_279 = new cjs.Graphics().p("Eg9iAOBIQi8HIcwAFIF3cIg");
	var mask_graphics_280 = new cjs.Graphics().p("EhPPAOBIQi8HIcxAFIF3cIg");
	var mask_graphics_281 = new cjs.Graphics().p("Ehg7AOBIQi8HIcwAFIF3cIg");
	var mask_graphics_282 = new cjs.Graphics().p("EhyoAOBIQi8HIcwAFIF3cIg");
	var mask_graphics_283 = new cjs.Graphics().p("EiEVAOBIQi8HIcxAFIF3cIg");
	var mask_graphics_284 = new cjs.Graphics().p("EiWBAOBIQi8HIcwAFIF3cIg");
	var mask_graphics_285 = new cjs.Graphics().p("EinuAOBIQi8HIcxAFIF3cIg");
	var mask_graphics_286 = new cjs.Graphics().p("Ei5bAOBIQi8HIcxAFIF3cIg");
	var mask_graphics_287 = new cjs.Graphics().p("EjLHAOBIQi8HIcwAFIF3cIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:416.1,y:90.8}).wait(1).to({graphics:mask_graphics_1,x:377.3,y:90.7}).wait(1).to({graphics:mask_graphics_2,x:341.2,y:90.7}).wait(1).to({graphics:mask_graphics_3,x:307.7,y:90.6}).wait(1).to({graphics:mask_graphics_4,x:276.9,y:90.5}).wait(1).to({graphics:mask_graphics_5,x:248.8,y:90.5}).wait(1).to({graphics:mask_graphics_6,x:223.4,y:90.5}).wait(1).to({graphics:mask_graphics_7,x:200.7,y:90.4}).wait(1).to({graphics:mask_graphics_8,x:180.6,y:90.4}).wait(1).to({graphics:mask_graphics_9,x:162.8,y:90.4}).wait(1).to({graphics:mask_graphics_10,x:133.3,y:90.3}).wait(1).to({graphics:mask_graphics_11,x:109.2,y:90.3}).wait(1).to({graphics:mask_graphics_12,x:90.5,y:90.3}).wait(1).to({graphics:mask_graphics_13,x:77.1,y:90.3}).wait(1).to({graphics:mask_graphics_14,x:69.1,y:90.3}).wait(1).to({graphics:mask_graphics_15,x:66.4,y:90.3}).wait(1).to({graphics:mask_graphics_16,x:68.4,y:90.3}).wait(1).to({graphics:mask_graphics_17,x:70.4,y:90.3}).wait(1).to({graphics:mask_graphics_18,x:72.4,y:90.3}).wait(1).to({graphics:mask_graphics_19,x:74.4,y:90.3}).wait(1).to({graphics:mask_graphics_20,x:76.4,y:90.3}).wait(251).to({graphics:mask_graphics_271,x:76.4,y:90.3}).wait(1).to({graphics:mask_graphics_272,x:72.2,y:90.3}).wait(1).to({graphics:mask_graphics_273,x:68,y:90.3}).wait(1).to({graphics:mask_graphics_274,x:63.8,y:90.3}).wait(1).to({graphics:mask_graphics_275,x:59.6,y:90.3}).wait(1).to({graphics:mask_graphics_276,x:55.4,y:90.3}).wait(1).to({graphics:mask_graphics_277,x:-167.4,y:90.3}).wait(1).to({graphics:mask_graphics_278,x:-280.7,y:90.3}).wait(1).to({graphics:mask_graphics_279,x:-393.9,y:90.3}).wait(1).to({graphics:mask_graphics_280,x:-507.2,y:90.3}).wait(1).to({graphics:mask_graphics_281,x:-620.4,y:90.3}).wait(1).to({graphics:mask_graphics_282,x:-733.7,y:90.3}).wait(1).to({graphics:mask_graphics_283,x:-847,y:90.3}).wait(1).to({graphics:mask_graphics_284,x:-960.2,y:90.3}).wait(1).to({graphics:mask_graphics_285,x:-1073.5,y:90.3}).wait(1).to({graphics:mask_graphics_286,x:-1186.8,y:90.3}).wait(1).to({graphics:mask_graphics_287,x:-1300,y:90.3}).wait(1));

	// Image
	this.instance_14 = new lib.Символ4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(695.1,146.3);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:93,y:145.3},15,cjs.Ease.get(1)).to({x:103},5).wait(17).to({y:42.3},126).to({regX:0.1,regY:0.1,scaleX:0.83,scaleY:0.83,x:74.9,y:92.5},108).to({x:53.9},5).to({x:-2437.9},11).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ek4fAOEIAA8HMJw/AAAIAAcHg");
	this.shape.setTransform(0.3,90.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(288));

	// BACKGROUND
	this.instance_15 = new lib.Символ2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,90,1,2,0,0,0,0,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},83).wait(205));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2433.9,-102.1,5032.9,552.6);


// stage content:
(lib._1000x180_Navigator_mar2019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// кликабельная кнопка БЕЗ параметра
		canvas.addEventListener('click', link_btn_click);
		        function link_btn_click() {  
		            window.open(clickTAG, clickTARGET);  
		        }
		
		
		
		// код для баннера-растяжки (с учетом window.devicePixelRatio)
		var _this = this;
		var canvasWidth = canvas.width;  
		//var canvasHeight = canvas.height; 
		
		window.addEventListener('resize', resize, false);
			function resize() {
				canvas.width = window.innerWidth * window.devicePixelRatio;
				//canvas.height = canvasHeight * window.devicePixelRatio;
				
				canvas.style.width =  window.innerWidth +"px";	
				
				stage.scaleX = stage.scaleY = window.devicePixelRatio; 	
			
				
				_this.scale_left_mc.x = 0;
				_this.scale_center_mc.x = Math.round(window.innerWidth / 2);
				_this.scale_right_mc.x = window.innerWidth;
			}
			
		resize();
		
		
		/* раскомментировать это чтобы СКРЫВАТЬ розовые блоки  
			
		this.scale_left_mc.guide_background_mc.visible = false;	
		this.scale_center_mc.guide_background_mc.visible = false;	
		this.scale_right_mc.guide_background_mc.visible = false;	
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// LINK
	this.link_btn = new lib._TEMPLATE_button_link();
	this.link_btn.name = "link_btn";
	this.link_btn.parent = this;
	this.link_btn.setTransform(499,90,10.716,0.405,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.link_btn, 0, 1, 2, false, new lib._TEMPLATE_button_link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.link_btn).wait(1));

	// scale_left_mc
	this.scale_left_mc = new lib.scale_left();
	this.scale_left_mc.name = "scale_left_mc";
	this.scale_left_mc.parent = this;
	this.scale_left_mc.setTransform(0,31,1,1,0,0,0,0,31);

	this.timeline.addTween(cjs.Tween.get(this.scale_left_mc).wait(1));

	// scale_right_mc
	this.scale_right_mc = new lib.scale_right();
	this.scale_right_mc.name = "scale_right_mc";
	this.scale_right_mc.parent = this;
	this.scale_right_mc.setTransform(1000,31,1,1,0,0,0,0,31);

	this.timeline.addTween(cjs.Tween.get(this.scale_right_mc).wait(1));

	// scale_center_mc
	this.scale_center_mc = new lib.scale_center();
	this.scale_center_mc.name = "scale_center_mc";
	this.scale_center_mc.parent = this;
	this.scale_center_mc.setTransform(500.3,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.scale_center_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1433.9,-12.1,7889,552.6);
// library properties:
lib.properties = {
	id: '3CACF40E8A331E4F8226C8CFBA30048D',
	width: 1000,
	height: 180,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Pic.jpg?1552480259746", id:"Pic"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CACF40E8A331E4F8226C8CFBA30048D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;