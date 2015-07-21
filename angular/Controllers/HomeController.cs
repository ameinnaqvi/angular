using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace angular.Controllers
{
    public class HomeController : Controller
    {
        private int count;

        public ActionResult Index()
        {
            return View();
        }

        public class TestResult
        {
            public string SNRMargin { get; set; }
            public string SyncStatus { get; set; }
            public string BridgeTap { get; set; }
        }
        public JsonResult Latest()
        {
            return Json(new TestResult { SNRMargin = "1.234", SyncStatus = "In Sync", BridgeTap = "Detected" }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult RequestTest()
        {
            return Json(new { TestId = Guid.NewGuid(), value = 2 }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult RetrieveResult()
        {
            Response.StatusCode = 201;
            return Json(new TestResult { SNRMargin = "5.23", SyncStatus = "In Sync", BridgeTap = "Not Detected" }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}