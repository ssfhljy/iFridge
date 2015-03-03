Handlebars.registerPartial('fruits-nav', $('#p').html());
var t = Handlebars.compile($('#t').html());
$('body').append(t({
    id: 6,
    active: { active_pineapple: true }
}));