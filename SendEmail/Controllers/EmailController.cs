using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SendEmail.Controllers
{
    public class EmailController : Controller
    {
        /// <summary>
        /// Metodo responsavel por realizar o disparo de email.
        /// Credenciais de acesso ao email estão no web.config
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult SendMail(string name, string tel, string email, string agencia, string msg)
        {
            // Plug in your email service here to send an email.
            SmtpClient client = new SmtpClient();

            //Monsta Corpo da mensagem que será enviada por email
            string message = string.Concat("<strong>Mensagem de Contato</strong><br><br>",
                "<strong>Nome: </strong> $nome",
                "<br><strong>Telefone: </strong> $telefone",
                "<br><strong>Email: </strong> $email",
                "<br><strong>Agência: </strong> $agencia",
                "<br><strong>Mensagem: </strong> $mensagem");

            //Substitui os campos dinamicos do corpo do email com os recebidos pelo form de contato.
            message = message.Replace("$nome", name);
            message = message.Replace("$telefone", tel);
            message = message.Replace("$email", email);
            message = message.Replace("$agencia", agencia);
            message = message.Replace("$mensagem", msg);

            //Cria objeto de mensagem com destinatario, remetente e Assunto. (Remetente e destinatario estão no web.config)
            MailMessage mail = new MailMessage(ConfigurationManager.AppSettings["Remetente"],
                               ConfigurationManager.AppSettings["Destinatario"],
                               "Contato pelo site",
                               message);

            //Seta Corpo do email como HTML
            mail.IsBodyHtml = true;

            //Realiza disparo de email.
            try
            {
                client.Send(mail);
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }
            catch (Exception)
            {
                return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
            }

        }
    }
}