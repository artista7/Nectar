/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl($stateParams, mailMessagesService) {
    var vm = this;
    vm.mail = mailMessagesService.getMessageById($stateParams.id);
    vm.label = $stateParams.label;
  }

})();
