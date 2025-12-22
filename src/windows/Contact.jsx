import { WindowsControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowsControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/Dexter.png"
          alt="Dexter"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>
          Got a nice project? Some bugs to squash? Or you want to talk tech?
          Buzz me!
        </p>
        <p>
          <a
            href="mailto:dexterousguru49@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            dexterousguru49@gmail.com
          </a>
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
