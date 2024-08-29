import { FC } from 'react';
import color from 'app/sandbox/utils/color';
import DocLayout from 'app/sandbox/components/layouts/DocLayout';
// =================================
import Gift from 'app/sandbox/icons/lineal/Gift';
import Team from 'app/sandbox/icons/lineal/Team';
import Home from 'app/sandbox/icons/lineal/Home';
import List from 'app/sandbox/icons/lineal/List';
import User from 'app/sandbox/icons/lineal/User';
import Check from 'app/sandbox/icons/lineal/Check';
import Earth from 'app/sandbox/icons/lineal/Earth';
import Medal from 'app/sandbox/icons/lineal/Medal';
import Rocket from 'app/sandbox/icons/lineal/Rocket';
import Design from 'app/sandbox/icons/lineal/Design';
import IdCard from 'app/sandbox/icons/lineal/IdCard';
import Shield from 'app/sandbox/icons/lineal/Shield';
import Target from 'app/sandbox/icons/lineal/Target';
import Search from 'app/sandbox/icons/lineal/Search';
import ChatTwo from 'app/sandbox/icons/lineal/ChatTwo';
import Printer from 'app/sandbox/icons/lineal/Printer';
import Browser from 'app/sandbox/icons/lineal/Browser';
import Loading from 'app/sandbox/icons/lineal/Loading';
import Savings from 'app/sandbox/icons/lineal/Savings';
import ShopTwo from 'app/sandbox/icons/lineal/ShopTwo';
import AwardTwo from 'app/sandbox/icons/lineal/AwardTwo';
import Settings from 'app/sandbox/icons/lineal/Settings';
import BarChart from 'app/sandbox/icons/lineal/BarChart';
import RocketTwo from 'app/sandbox/icons/lineal/RocketTwo';
import Analytics from 'app/sandbox/icons/lineal/Analytics';
import LightBulb from 'app/sandbox/icons/lineal/LightBulb';
import Megaphone from 'app/sandbox/icons/lineal/Megaphone';
import SearchTwo from 'app/sandbox/icons/lineal/SearchTwo';
import Telephone from 'app/sandbox/icons/lineal/Telephone';
import PrinterTwo from 'app/sandbox/icons/lineal/PrinterTwo';
import ClockThree from 'app/sandbox/icons/lineal/ClockThree';
import PieChartTwo from 'app/sandbox/icons/lineal/PieChartTwo';
import BriefcaseTwo from 'app/sandbox/icons/lineal/BriefcaseTwo';
import TeleMarketer from 'app/sandbox/icons/lineal/TeleMarketer';
import SmartphoneTwo from 'app/sandbox/icons/lineal/SmartphoneTwo';
import SettingsThree from 'app/sandbox/icons/lineal/SettingsThree';
import CloudComputing from 'app/sandbox/icons/lineal/CloudComputing';
import ShoppingBasket from 'app/sandbox/icons/lineal/ShoppingBasket';
// =================================
import Script from 'app/sandbox/icons/solid-duo/Script';
import Server from 'app/sandbox/icons/solid-duo/Server';
import Setting from 'app/sandbox/icons/solid-duo/Setting';
import Director from 'app/sandbox/icons/solid-duo/Director';
import TargetTwo from 'app/sandbox/icons/solid-duo/TargetTwo';
import CloudGroup from 'app/sandbox/icons/solid-duo/CloudGroup';
import BarChartTwo from 'app/sandbox/icons/solid-duo/BarChartTwo';
import CloudNetwork from 'app/sandbox/icons/solid-duo/CloudNetwork';
import EmployeesTwo from 'app/sandbox/icons/solid-duo/EmployeesTwo';
// =================================
import Bulb from 'app/sandbox/icons/solid-mono/Bulb';
import Edit from 'app/sandbox/icons/solid-mono/Edit';
import Lamp from 'app/sandbox/icons/solid-mono/Lamp';
import Share from 'app/sandbox/icons/solid-mono/Share';
import Alarm from 'app/sandbox/icons/solid-mono/Alarm';
import Verify from 'app/sandbox/icons/solid-mono/Verify';
import Wallet from 'app/sandbox/icons/solid-mono/Wallet';
import Puzzle from 'app/sandbox/icons/solid-mono/Puzzle';
import Compare from 'app/sandbox/icons/solid-mono/Compare';
import TeamTwo from 'app/sandbox/icons/solid-mono/TeamTwo';
import Building from 'app/sandbox/icons/solid-mono/Building';
import PushCart from 'app/sandbox/icons/solid-mono/PushCart';
import Shipment from 'app/sandbox/icons/solid-mono/Shipment';
import Employees from 'app/sandbox/icons/solid-mono/Employees';
import Headphone from 'app/sandbox/icons/solid-mono/Headphone';
import VideoCall from 'app/sandbox/icons/solid-mono/VideoCall';
import VideoChat from 'app/sandbox/icons/solid-mono/VideoChat';
import DeliveryBox from 'app/sandbox/icons/solid-mono/DeliveryBox';
import PartnerShip from 'app/sandbox/icons/solid-mono/PartnerShip';
// -------- data -------- //
const quickAccess = [
  { title: 'Lineal', url: 'snippet-1' },
  { title: 'Solid Mono', url: 'snippet-2' },
  { title: 'Solid Duo', url: 'snippet-3' },
  { title: 'Solid', url: 'snippet-4' },
];

const sizes = ['icon-svg-lg', 'icon-svg-md', 'icon-svg-sm', 'icon-svg-xs'];

const duoColors = [
  'text-green-fuchsia',
  'text-purple-aqua',
  'text-blue-pink',
  'text-navy-green',
  'text-grape-green',
  'text-green-red',
  'text-grape-yellow',
  'text-purple-pink',
  'text-red-yellow',
  'text-grape-fuchsia',
  'text-sky-pink',
  'text-navy-sky',
];

const solidColors = [
  'bg-pale-primary',
  'bg-pale-aqua',
  'bg-pale-green',
  'bg-pale-leaf',
  'bg-pale-navy',
  'bg-pale-orange',
  'bg-pale-pink',
  'bg-pale-purple',
  'bg-pale-red',
  'bg-pale-violet',
  'bg-pale-yellow',
  'bg-pale-blue',
  'bg-pale-fuchsia',
  'bg-pale-sky',
  'bg-pale-grape',
  'bg-pale-white',
];

export default function SvgIcons() {
  const linealIcons = [
    Analytics,
    AwardTwo,
    BarChart,
    BriefcaseTwo,
    Browser,
    Check,
    ClockThree,
    CloudComputing,
    Design,
    Earth,
    Gift,
    Home,
    IdCard,
    LightBulb,
    List,
    Loading,
    Medal,
    Megaphone,
    PieChartTwo,
    Printer,
    Rocket,
    Savings,
    SearchTwo,
    Settings,
    SettingsThree,
    Shield,
    ShoppingBasket,
    ShopTwo,
    SmartphoneTwo,
    Target,
    Team,
    TeleMarketer,
    Telephone,
    User,
    ChatTwo,
    Search,
  ];

  const solidDuoIcons = [
    BarChartTwo,
    CloudGroup,
    CloudNetwork,
    Director,
    EmployeesTwo,
    Script,
    Server,
    Setting,
    TargetTwo,
  ];

  const solidMonoIcons = [
    Alarm,
    Building,
    Bulb,
    Compare,
    DeliveryBox,
    Edit,
    Employees,
    Headphone,
    Lamp,
    PartnerShip,
    PushCart,
    Puzzle,
    Share,
    Shipment,
    TeamTwo,
    Verify,
    VideoCall,
    VideoChat,
    Wallet,
  ];

  return (
    <DocLayout
      pageTitle="SVG Icons"
      quickAccessLinks={quickAccess}
      description="Below you can find the list of all SVG icons included in Sandbox. Copy their codes easily with the copy buttons."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="display-5 mb-3">Lineal</h2>
        <p className="lead mb-8">
          Below you can find the list of all lineal SVG icons with their code
          snippets. All these retina-ready icons can easily be styled by color
          and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/monochrome/yellow"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {Object.keys(color)
                .sort()
                .map(item => (
                  <div className="col-6 col-md-4 col-lg-3" key={item}>
                    <div>
                      <Printer className={`icon-svg-xs text-${item} mx-2`} />
                      <Rocket className={`icon-svg-xs text-${item} mx-2`} />
                    </div>
                    <code className="code text-nowrap mt-4">text-{item}</code>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              {sizes.map(item => (
                <div className="col-6 col-lg-3" key={item}>
                  <div>
                    <Printer className={`${item} text-blue mx-2`} />
                    <Rocket className={`${item} text-blue mx-2`} />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Icons</h2>

        <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {linealIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-sm text-primary" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-sm text-primary" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="display-5 mb-3">Solid Mono</h2>
        <p className="lead mb-8">
          Below you can find the list of all solid mono SVG icons with their
          code snippets. All these retina-ready icons can easily be styled by
          color and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect/tritone"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {Object.keys(color)
                .sort()
                .map(item => (
                  <div className="col-6 col-md-4 col-lg-3" key={item}>
                    <div>
                      <PrinterTwo
                        className={`icon-svg-xs solid-mono text-${item} mx-2`}
                      />
                      <RocketTwo
                        className={`icon-svg-xs solid-mono text-${item} mx-2`}
                      />
                    </div>
                    <code className="code text-nowrap mt-4">text-{item}</code>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              {sizes.map(item => (
                <div className="col-6 col-lg-3" key={item}>
                  <div>
                    <PrinterTwo
                      className={`${item} solid-mono text-blue mx-2`}
                    />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Icons</h2>

        <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {solidMonoIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-xs text-primary" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-xs text-primary" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="display-5 mb-3">Solid Duo</h2>
        <p className="lead mb-8">
          Below you can find the list of all solid duo SVG icons with their code
          snippets. All these retina-ready icons can easily be styled by color
          and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect/tritone"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {duoColors.sort().map(item => (
                <div className="col-6 col-md-4 col-lg-3" key={item}>
                  <div>
                    <PrinterTwo
                      className={`icon-svg-xs solid-duo ${item} mx-2`}
                    />
                    <RocketTwo
                      className={`icon-svg-xs solid-duo ${item} mx-2`}
                    />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              {sizes.map(item => (
                <div className="col-6 col-lg-3" key={item}>
                  <div>
                    <PrinterTwo
                      className={`${item} solid-duo text-navy-sky mx-2`}
                    />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {solidDuoIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-xs text-navy-sky" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-xs text-navy-sky" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="display-5 mb-3">Solid</h2>
        <p className="lead mb-8">
          Below you can find the list of all solid duo SVG icons with their code
          snippets. All these retina-ready icons can easily be styled by color
          and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect/tritone"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {solidColors.map((item, id) => (
                <div className="col-6 col-md-4 col-lg-3" key={id}>
                  <div>
                    <div className={`svg-bg ${item} shadow-xl rounded-xl mx-2`}>
                      <PrinterTwo className="solid text-navy" />
                    </div>

                    <div className={`svg-bg ${item} shadow-xl rounded-xl mx-2`}>
                      <RocketTwo className="solid text-navy" />
                    </div>
                  </div>

                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              <div className="col-6 col-lg-3">
                <div>
                  <div className="svg-bg bg-pale-pink rounded-xl mb-4">
                    <PrinterTwo className="solid text-navy" />
                  </div>
                </div>

                <code className="code text-nowrap mt-4">.svg-bg</code>
              </div>

              <div className="col-6 col-lg-3">
                <div>
                  <div className="svg-bg svg-bg-lg bg-pale-pink rounded-xl mb-4">
                    <RocketTwo className="solid text-navy" />
                  </div>
                </div>

                <code className="code text-nowrap mt-4">.svg-bg.svg-bg-lg</code>
              </div>
            </div>
          </div>
        </div>

        {/* <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {solidDuoIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-xs text-navy-sky" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-xs text-navy-sky" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </section>
    </DocLayout>
  );
}
