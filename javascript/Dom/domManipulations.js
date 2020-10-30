// DOM - Document Object Model.
// The main word is "Object", because when browser read html file,
// it parse every tag from html file in separate object. This is necessary because JS can
// manipulate with object, not with tags.


// The global object of DOM is document.
// It's "global" because it provides variables and functions anywhere (in global scope).
// This object built-in JS and has a lot of methods and properties.
// Access to this object from dot-notation: 'document.' for example:
document.createElement();
document.querySelector();
document.getElementById();

// After parsing all tags from HTML became objects. From this objects DOM built the tree, when
// nested tags are “children” of the enclosing one. You can find the DOM-tree of your page in
// dev-tools instruments


// Access to object of DOM and his properties able with dot-notification:
document.body;
document.body.style.background;

// or finding elements by tag:
document.querySelector('table');
document.getElementById('inputUser');

// All attributes of tags became properties of objects. To standart attributes you can access
//  with dot-notification:
document.body.id;

// but there are difficult to remember which of attributes is standart for each tags.
// That's why more effective manner for access to special property of your objects(tags) is
// use methods:
document.querySelector().getAttribute();  // for read attribute
document.querySelector().setAttribute();  // for write or re-write attribute
document.querySelector().hasAttribute();  // for check presence of attribute

// For navigation of DOM-objects you can to use parent/ child/ and sibling nodes.
// This property automatic built-in in every-objects of DOM.
// And this is very useful when you need to write access to unexisting object, which
// for example create user in future, because you can suggest where in structure of your
// page this object will be

// For nested elements <table> - <tr> - <td>/ <ul> - <li>
elem.childNodes[0] === elem.firstChild;
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild;
document.body.parentNode === document.documentElement;

// For neighbor elements <li>/ <td>/ <tr>
document.body.previousSibling;
document.body.nextSibling;

// You can find DOM-spec here: https://dom.spec.whatwg.org


