package com.zhwan.chatbotserv.network

import android.app.Application
import android.content.Context
import android.content.Intent
import android.net.ConnectivityManager
import com.zhwan.chatbotserv.MainActivity

object NetManager{

    fun isConnected(appCtx:Context): Boolean {

        val conManager =
            appCtx.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val ni = conManager.activeNetworkInfo
        return ni != null && ni.isConnected

    }

    fun gogo(appCtx:Context) {
        appCtx.startActivity(Intent(appCtx, MainActivity::class.java))
    }

}