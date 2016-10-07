/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.ionicframework.interviewgully100371;

import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewEngine;
import org.apache.cordova.CordovaWebViewEngine;
import android.content.Context;
import 	android.os.Build;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }

    @Override
    protected CordovaWebViewEngine makeWebViewEngine() {
        return new WebViewEngine(this, preferences);
    }

    /**
     * Custom Engine implementation so it can pass resume and pause events to WebView.
     * This is necessary to stop HTML5 video when app is put to background.
     */
    static class WebViewEngine extends SystemWebViewEngine {

        public WebViewEngine(Context context, CordovaPreferences preferences) {
            super(context, preferences);
        }

        public WebViewEngine(SystemWebView webView) {
            super(webView);
        }

        @Override
        public void setPaused(boolean value) {
            super.setPaused(value);
            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.HONEYCOMB) {
                return;
            } else if (value) {
                webView.onPause();
            } else {
                webView.onResume();
            }
        }
    }

}
