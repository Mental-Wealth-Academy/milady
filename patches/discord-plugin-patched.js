import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/gateway/common.js
var require_common = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/gateway/v10.js
var require_v10 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VoiceChannelEffectSendAnimationType = exports.GatewayDispatchEvents = exports.GatewayIntentBits = exports.GatewayCloseCodes = exports.GatewayOpcodes = exports.GatewayVersion = undefined;
  __exportStar(require_common(), exports);
  exports.GatewayVersion = "10";
  var GatewayOpcodes;
  (function(GatewayOpcodes2) {
    GatewayOpcodes2[GatewayOpcodes2["Dispatch"] = 0] = "Dispatch";
    GatewayOpcodes2[GatewayOpcodes2["Heartbeat"] = 1] = "Heartbeat";
    GatewayOpcodes2[GatewayOpcodes2["Identify"] = 2] = "Identify";
    GatewayOpcodes2[GatewayOpcodes2["PresenceUpdate"] = 3] = "PresenceUpdate";
    GatewayOpcodes2[GatewayOpcodes2["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
    GatewayOpcodes2[GatewayOpcodes2["Resume"] = 6] = "Resume";
    GatewayOpcodes2[GatewayOpcodes2["Reconnect"] = 7] = "Reconnect";
    GatewayOpcodes2[GatewayOpcodes2["RequestGuildMembers"] = 8] = "RequestGuildMembers";
    GatewayOpcodes2[GatewayOpcodes2["InvalidSession"] = 9] = "InvalidSession";
    GatewayOpcodes2[GatewayOpcodes2["Hello"] = 10] = "Hello";
    GatewayOpcodes2[GatewayOpcodes2["HeartbeatAck"] = 11] = "HeartbeatAck";
    GatewayOpcodes2[GatewayOpcodes2["RequestSoundboardSounds"] = 31] = "RequestSoundboardSounds";
  })(GatewayOpcodes || (exports.GatewayOpcodes = GatewayOpcodes = {}));
  var GatewayCloseCodes;
  (function(GatewayCloseCodes2) {
    GatewayCloseCodes2[GatewayCloseCodes2["UnknownError"] = 4000] = "UnknownError";
    GatewayCloseCodes2[GatewayCloseCodes2["UnknownOpcode"] = 4001] = "UnknownOpcode";
    GatewayCloseCodes2[GatewayCloseCodes2["DecodeError"] = 4002] = "DecodeError";
    GatewayCloseCodes2[GatewayCloseCodes2["NotAuthenticated"] = 4003] = "NotAuthenticated";
    GatewayCloseCodes2[GatewayCloseCodes2["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
    GatewayCloseCodes2[GatewayCloseCodes2["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
    GatewayCloseCodes2[GatewayCloseCodes2["InvalidSeq"] = 4007] = "InvalidSeq";
    GatewayCloseCodes2[GatewayCloseCodes2["RateLimited"] = 4008] = "RateLimited";
    GatewayCloseCodes2[GatewayCloseCodes2["SessionTimedOut"] = 4009] = "SessionTimedOut";
    GatewayCloseCodes2[GatewayCloseCodes2["InvalidShard"] = 4010] = "InvalidShard";
    GatewayCloseCodes2[GatewayCloseCodes2["ShardingRequired"] = 4011] = "ShardingRequired";
    GatewayCloseCodes2[GatewayCloseCodes2["InvalidAPIVersion"] = 4012] = "InvalidAPIVersion";
    GatewayCloseCodes2[GatewayCloseCodes2["InvalidIntents"] = 4013] = "InvalidIntents";
    GatewayCloseCodes2[GatewayCloseCodes2["DisallowedIntents"] = 4014] = "DisallowedIntents";
  })(GatewayCloseCodes || (exports.GatewayCloseCodes = GatewayCloseCodes = {}));
  var GatewayIntentBits2;
  (function(GatewayIntentBits3) {
    GatewayIntentBits3[GatewayIntentBits3["Guilds"] = 1] = "Guilds";
    GatewayIntentBits3[GatewayIntentBits3["GuildMembers"] = 2] = "GuildMembers";
    GatewayIntentBits3[GatewayIntentBits3["GuildModeration"] = 4] = "GuildModeration";
    GatewayIntentBits3[GatewayIntentBits3["GuildBans"] = 4] = "GuildBans";
    GatewayIntentBits3[GatewayIntentBits3["GuildExpressions"] = 8] = "GuildExpressions";
    GatewayIntentBits3[GatewayIntentBits3["GuildEmojisAndStickers"] = 8] = "GuildEmojisAndStickers";
    GatewayIntentBits3[GatewayIntentBits3["GuildIntegrations"] = 16] = "GuildIntegrations";
    GatewayIntentBits3[GatewayIntentBits3["GuildWebhooks"] = 32] = "GuildWebhooks";
    GatewayIntentBits3[GatewayIntentBits3["GuildInvites"] = 64] = "GuildInvites";
    GatewayIntentBits3[GatewayIntentBits3["GuildVoiceStates"] = 128] = "GuildVoiceStates";
    GatewayIntentBits3[GatewayIntentBits3["GuildPresences"] = 256] = "GuildPresences";
    GatewayIntentBits3[GatewayIntentBits3["GuildMessages"] = 512] = "GuildMessages";
    GatewayIntentBits3[GatewayIntentBits3["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
    GatewayIntentBits3[GatewayIntentBits3["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
    GatewayIntentBits3[GatewayIntentBits3["DirectMessages"] = 4096] = "DirectMessages";
    GatewayIntentBits3[GatewayIntentBits3["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
    GatewayIntentBits3[GatewayIntentBits3["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
    GatewayIntentBits3[GatewayIntentBits3["MessageContent"] = 32768] = "MessageContent";
    GatewayIntentBits3[GatewayIntentBits3["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
    GatewayIntentBits3[GatewayIntentBits3["AutoModerationConfiguration"] = 1048576] = "AutoModerationConfiguration";
    GatewayIntentBits3[GatewayIntentBits3["AutoModerationExecution"] = 2097152] = "AutoModerationExecution";
    GatewayIntentBits3[GatewayIntentBits3["GuildMessagePolls"] = 16777216] = "GuildMessagePolls";
    GatewayIntentBits3[GatewayIntentBits3["DirectMessagePolls"] = 33554432] = "DirectMessagePolls";
  })(GatewayIntentBits2 || (exports.GatewayIntentBits = GatewayIntentBits2 = {}));
  var GatewayDispatchEvents;
  (function(GatewayDispatchEvents2) {
    GatewayDispatchEvents2["ApplicationCommandPermissionsUpdate"] = "APPLICATION_COMMAND_PERMISSIONS_UPDATE";
    GatewayDispatchEvents2["AutoModerationActionExecution"] = "AUTO_MODERATION_ACTION_EXECUTION";
    GatewayDispatchEvents2["AutoModerationRuleCreate"] = "AUTO_MODERATION_RULE_CREATE";
    GatewayDispatchEvents2["AutoModerationRuleDelete"] = "AUTO_MODERATION_RULE_DELETE";
    GatewayDispatchEvents2["AutoModerationRuleUpdate"] = "AUTO_MODERATION_RULE_UPDATE";
    GatewayDispatchEvents2["ChannelCreate"] = "CHANNEL_CREATE";
    GatewayDispatchEvents2["ChannelDelete"] = "CHANNEL_DELETE";
    GatewayDispatchEvents2["ChannelPinsUpdate"] = "CHANNEL_PINS_UPDATE";
    GatewayDispatchEvents2["ChannelUpdate"] = "CHANNEL_UPDATE";
    GatewayDispatchEvents2["EntitlementCreate"] = "ENTITLEMENT_CREATE";
    GatewayDispatchEvents2["EntitlementDelete"] = "ENTITLEMENT_DELETE";
    GatewayDispatchEvents2["EntitlementUpdate"] = "ENTITLEMENT_UPDATE";
    GatewayDispatchEvents2["GuildAuditLogEntryCreate"] = "GUILD_AUDIT_LOG_ENTRY_CREATE";
    GatewayDispatchEvents2["GuildBanAdd"] = "GUILD_BAN_ADD";
    GatewayDispatchEvents2["GuildBanRemove"] = "GUILD_BAN_REMOVE";
    GatewayDispatchEvents2["GuildCreate"] = "GUILD_CREATE";
    GatewayDispatchEvents2["GuildDelete"] = "GUILD_DELETE";
    GatewayDispatchEvents2["GuildEmojisUpdate"] = "GUILD_EMOJIS_UPDATE";
    GatewayDispatchEvents2["GuildIntegrationsUpdate"] = "GUILD_INTEGRATIONS_UPDATE";
    GatewayDispatchEvents2["GuildMemberAdd"] = "GUILD_MEMBER_ADD";
    GatewayDispatchEvents2["GuildMemberRemove"] = "GUILD_MEMBER_REMOVE";
    GatewayDispatchEvents2["GuildMembersChunk"] = "GUILD_MEMBERS_CHUNK";
    GatewayDispatchEvents2["GuildMemberUpdate"] = "GUILD_MEMBER_UPDATE";
    GatewayDispatchEvents2["GuildRoleCreate"] = "GUILD_ROLE_CREATE";
    GatewayDispatchEvents2["GuildRoleDelete"] = "GUILD_ROLE_DELETE";
    GatewayDispatchEvents2["GuildRoleUpdate"] = "GUILD_ROLE_UPDATE";
    GatewayDispatchEvents2["GuildScheduledEventCreate"] = "GUILD_SCHEDULED_EVENT_CREATE";
    GatewayDispatchEvents2["GuildScheduledEventDelete"] = "GUILD_SCHEDULED_EVENT_DELETE";
    GatewayDispatchEvents2["GuildScheduledEventUpdate"] = "GUILD_SCHEDULED_EVENT_UPDATE";
    GatewayDispatchEvents2["GuildScheduledEventUserAdd"] = "GUILD_SCHEDULED_EVENT_USER_ADD";
    GatewayDispatchEvents2["GuildScheduledEventUserRemove"] = "GUILD_SCHEDULED_EVENT_USER_REMOVE";
    GatewayDispatchEvents2["GuildSoundboardSoundCreate"] = "GUILD_SOUNDBOARD_SOUND_CREATE";
    GatewayDispatchEvents2["GuildSoundboardSoundDelete"] = "GUILD_SOUNDBOARD_SOUND_DELETE";
    GatewayDispatchEvents2["GuildSoundboardSoundsUpdate"] = "GUILD_SOUNDBOARD_SOUNDS_UPDATE";
    GatewayDispatchEvents2["GuildSoundboardSoundUpdate"] = "GUILD_SOUNDBOARD_SOUND_UPDATE";
    GatewayDispatchEvents2["SoundboardSounds"] = "SOUNDBOARD_SOUNDS";
    GatewayDispatchEvents2["GuildStickersUpdate"] = "GUILD_STICKERS_UPDATE";
    GatewayDispatchEvents2["GuildUpdate"] = "GUILD_UPDATE";
    GatewayDispatchEvents2["IntegrationCreate"] = "INTEGRATION_CREATE";
    GatewayDispatchEvents2["IntegrationDelete"] = "INTEGRATION_DELETE";
    GatewayDispatchEvents2["IntegrationUpdate"] = "INTEGRATION_UPDATE";
    GatewayDispatchEvents2["InteractionCreate"] = "INTERACTION_CREATE";
    GatewayDispatchEvents2["InviteCreate"] = "INVITE_CREATE";
    GatewayDispatchEvents2["InviteDelete"] = "INVITE_DELETE";
    GatewayDispatchEvents2["MessageCreate"] = "MESSAGE_CREATE";
    GatewayDispatchEvents2["MessageDelete"] = "MESSAGE_DELETE";
    GatewayDispatchEvents2["MessageDeleteBulk"] = "MESSAGE_DELETE_BULK";
    GatewayDispatchEvents2["MessagePollVoteAdd"] = "MESSAGE_POLL_VOTE_ADD";
    GatewayDispatchEvents2["MessagePollVoteRemove"] = "MESSAGE_POLL_VOTE_REMOVE";
    GatewayDispatchEvents2["MessageReactionAdd"] = "MESSAGE_REACTION_ADD";
    GatewayDispatchEvents2["MessageReactionRemove"] = "MESSAGE_REACTION_REMOVE";
    GatewayDispatchEvents2["MessageReactionRemoveAll"] = "MESSAGE_REACTION_REMOVE_ALL";
    GatewayDispatchEvents2["MessageReactionRemoveEmoji"] = "MESSAGE_REACTION_REMOVE_EMOJI";
    GatewayDispatchEvents2["MessageUpdate"] = "MESSAGE_UPDATE";
    GatewayDispatchEvents2["PresenceUpdate"] = "PRESENCE_UPDATE";
    GatewayDispatchEvents2["Ready"] = "READY";
    GatewayDispatchEvents2["Resumed"] = "RESUMED";
    GatewayDispatchEvents2["StageInstanceCreate"] = "STAGE_INSTANCE_CREATE";
    GatewayDispatchEvents2["StageInstanceDelete"] = "STAGE_INSTANCE_DELETE";
    GatewayDispatchEvents2["StageInstanceUpdate"] = "STAGE_INSTANCE_UPDATE";
    GatewayDispatchEvents2["SubscriptionCreate"] = "SUBSCRIPTION_CREATE";
    GatewayDispatchEvents2["SubscriptionDelete"] = "SUBSCRIPTION_DELETE";
    GatewayDispatchEvents2["SubscriptionUpdate"] = "SUBSCRIPTION_UPDATE";
    GatewayDispatchEvents2["ThreadCreate"] = "THREAD_CREATE";
    GatewayDispatchEvents2["ThreadDelete"] = "THREAD_DELETE";
    GatewayDispatchEvents2["ThreadListSync"] = "THREAD_LIST_SYNC";
    GatewayDispatchEvents2["ThreadMembersUpdate"] = "THREAD_MEMBERS_UPDATE";
    GatewayDispatchEvents2["ThreadMemberUpdate"] = "THREAD_MEMBER_UPDATE";
    GatewayDispatchEvents2["ThreadUpdate"] = "THREAD_UPDATE";
    GatewayDispatchEvents2["TypingStart"] = "TYPING_START";
    GatewayDispatchEvents2["UserUpdate"] = "USER_UPDATE";
    GatewayDispatchEvents2["VoiceChannelEffectSend"] = "VOICE_CHANNEL_EFFECT_SEND";
    GatewayDispatchEvents2["VoiceServerUpdate"] = "VOICE_SERVER_UPDATE";
    GatewayDispatchEvents2["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
    GatewayDispatchEvents2["WebhooksUpdate"] = "WEBHOOKS_UPDATE";
  })(GatewayDispatchEvents || (exports.GatewayDispatchEvents = GatewayDispatchEvents = {}));
  var VoiceChannelEffectSendAnimationType;
  (function(VoiceChannelEffectSendAnimationType2) {
    VoiceChannelEffectSendAnimationType2[VoiceChannelEffectSendAnimationType2["Premium"] = 0] = "Premium";
    VoiceChannelEffectSendAnimationType2[VoiceChannelEffectSendAnimationType2["Basic"] = 1] = "Basic";
  })(VoiceChannelEffectSendAnimationType || (exports.VoiceChannelEffectSendAnimationType = VoiceChannelEffectSendAnimationType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/globals.js
var require_globals = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FormattingPatterns = undefined;
  exports.FormattingPatterns = {
    User: /<@(?<id>\d{17,20})>/,
    UserWithNickname: /<@!(?<id>\d{17,20})>/,
    UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
    Channel: /<#(?<id>\d{17,20})>/,
    Role: /<@&(?<id>\d{17,20})>/,
    SlashCommand: /<\/(?<fullName>(?<name>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: (?<subcommandOrGroup>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?(?: (?<subcommand>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?):(?<id>\d{17,20})>/u,
    Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
    AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
    StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
    Timestamp: /<t:(?<timestamp>-?\d{1,13})(:(?<style>[DFRTdft]))?>/,
    DefaultStyledTimestamp: /<t:(?<timestamp>-?\d{1,13})>/,
    StyledTimestamp: /<t:(?<timestamp>-?\d{1,13}):(?<style>[DFRTdft])>/,
    GuildNavigation: /<id:(?<type>customize|browse|guide|linked-roles)>/,
    LinkedRole: /<id:linked-roles:(?<id>\d{17,20})>/
  };
  Object.freeze(exports.FormattingPatterns);
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/common.js
var require_common2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PermissionFlagsBits = undefined;
  exports.PermissionFlagsBits = {
    CreateInstantInvite: 1n << 0n,
    KickMembers: 1n << 1n,
    BanMembers: 1n << 2n,
    Administrator: 1n << 3n,
    ManageChannels: 1n << 4n,
    ManageGuild: 1n << 5n,
    AddReactions: 1n << 6n,
    ViewAuditLog: 1n << 7n,
    PrioritySpeaker: 1n << 8n,
    Stream: 1n << 9n,
    ViewChannel: 1n << 10n,
    SendMessages: 1n << 11n,
    SendTTSMessages: 1n << 12n,
    ManageMessages: 1n << 13n,
    EmbedLinks: 1n << 14n,
    AttachFiles: 1n << 15n,
    ReadMessageHistory: 1n << 16n,
    MentionEveryone: 1n << 17n,
    UseExternalEmojis: 1n << 18n,
    ViewGuildInsights: 1n << 19n,
    Connect: 1n << 20n,
    Speak: 1n << 21n,
    MuteMembers: 1n << 22n,
    DeafenMembers: 1n << 23n,
    MoveMembers: 1n << 24n,
    UseVAD: 1n << 25n,
    ChangeNickname: 1n << 26n,
    ManageNicknames: 1n << 27n,
    ManageRoles: 1n << 28n,
    ManageWebhooks: 1n << 29n,
    ManageEmojisAndStickers: 1n << 30n,
    ManageGuildExpressions: 1n << 30n,
    UseApplicationCommands: 1n << 31n,
    RequestToSpeak: 1n << 32n,
    ManageEvents: 1n << 33n,
    ManageThreads: 1n << 34n,
    CreatePublicThreads: 1n << 35n,
    CreatePrivateThreads: 1n << 36n,
    UseExternalStickers: 1n << 37n,
    SendMessagesInThreads: 1n << 38n,
    UseEmbeddedActivities: 1n << 39n,
    ModerateMembers: 1n << 40n,
    ViewCreatorMonetizationAnalytics: 1n << 41n,
    UseSoundboard: 1n << 42n,
    CreateGuildExpressions: 1n << 43n,
    CreateEvents: 1n << 44n,
    UseExternalSounds: 1n << 45n,
    SendVoiceMessages: 1n << 46n,
    SendPolls: 1n << 49n,
    UseExternalApps: 1n << 50n
  };
  Object.freeze(exports.PermissionFlagsBits);
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/application.js
var require_application = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ApplicationWebhookEventStatus = exports.ApplicationRoleConnectionMetadataType = exports.ApplicationFlags = undefined;
  var ApplicationFlags;
  (function(ApplicationFlags2) {
    ApplicationFlags2[ApplicationFlags2["EmbeddedReleased"] = 2] = "EmbeddedReleased";
    ApplicationFlags2[ApplicationFlags2["ManagedEmoji"] = 4] = "ManagedEmoji";
    ApplicationFlags2[ApplicationFlags2["EmbeddedIAP"] = 8] = "EmbeddedIAP";
    ApplicationFlags2[ApplicationFlags2["GroupDMCreate"] = 16] = "GroupDMCreate";
    ApplicationFlags2[ApplicationFlags2["ApplicationAutoModerationRuleCreateBadge"] = 64] = "ApplicationAutoModerationRuleCreateBadge";
    ApplicationFlags2[ApplicationFlags2["RPCHasConnected"] = 2048] = "RPCHasConnected";
    ApplicationFlags2[ApplicationFlags2["GatewayPresence"] = 4096] = "GatewayPresence";
    ApplicationFlags2[ApplicationFlags2["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
    ApplicationFlags2[ApplicationFlags2["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
    ApplicationFlags2[ApplicationFlags2["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
    ApplicationFlags2[ApplicationFlags2["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
    ApplicationFlags2[ApplicationFlags2["Embedded"] = 131072] = "Embedded";
    ApplicationFlags2[ApplicationFlags2["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
    ApplicationFlags2[ApplicationFlags2["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
    ApplicationFlags2[ApplicationFlags2["EmbeddedFirstParty"] = 1048576] = "EmbeddedFirstParty";
    ApplicationFlags2[ApplicationFlags2["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
  })(ApplicationFlags || (exports.ApplicationFlags = ApplicationFlags = {}));
  var ApplicationRoleConnectionMetadataType;
  (function(ApplicationRoleConnectionMetadataType2) {
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerLessThanOrEqual"] = 1] = "IntegerLessThanOrEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerGreaterThanOrEqual"] = 2] = "IntegerGreaterThanOrEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerEqual"] = 3] = "IntegerEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerNotEqual"] = 4] = "IntegerNotEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["DatetimeLessThanOrEqual"] = 5] = "DatetimeLessThanOrEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["DatetimeGreaterThanOrEqual"] = 6] = "DatetimeGreaterThanOrEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["BooleanEqual"] = 7] = "BooleanEqual";
    ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["BooleanNotEqual"] = 8] = "BooleanNotEqual";
  })(ApplicationRoleConnectionMetadataType || (exports.ApplicationRoleConnectionMetadataType = ApplicationRoleConnectionMetadataType = {}));
  var ApplicationWebhookEventStatus;
  (function(ApplicationWebhookEventStatus2) {
    ApplicationWebhookEventStatus2[ApplicationWebhookEventStatus2["Disabled"] = 1] = "Disabled";
    ApplicationWebhookEventStatus2[ApplicationWebhookEventStatus2["Enabled"] = 2] = "Enabled";
    ApplicationWebhookEventStatus2[ApplicationWebhookEventStatus2["DisabledByDiscord"] = 3] = "DisabledByDiscord";
  })(ApplicationWebhookEventStatus || (exports.ApplicationWebhookEventStatus = ApplicationWebhookEventStatus = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/auditLog.js
var require_auditLog = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AuditLogOptionsType = exports.AuditLogEvent = undefined;
  var AuditLogEvent2;
  (function(AuditLogEvent3) {
    AuditLogEvent3[AuditLogEvent3["GuildUpdate"] = 1] = "GuildUpdate";
    AuditLogEvent3[AuditLogEvent3["ChannelCreate"] = 10] = "ChannelCreate";
    AuditLogEvent3[AuditLogEvent3["ChannelUpdate"] = 11] = "ChannelUpdate";
    AuditLogEvent3[AuditLogEvent3["ChannelDelete"] = 12] = "ChannelDelete";
    AuditLogEvent3[AuditLogEvent3["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
    AuditLogEvent3[AuditLogEvent3["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
    AuditLogEvent3[AuditLogEvent3["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
    AuditLogEvent3[AuditLogEvent3["MemberKick"] = 20] = "MemberKick";
    AuditLogEvent3[AuditLogEvent3["MemberPrune"] = 21] = "MemberPrune";
    AuditLogEvent3[AuditLogEvent3["MemberBanAdd"] = 22] = "MemberBanAdd";
    AuditLogEvent3[AuditLogEvent3["MemberBanRemove"] = 23] = "MemberBanRemove";
    AuditLogEvent3[AuditLogEvent3["MemberUpdate"] = 24] = "MemberUpdate";
    AuditLogEvent3[AuditLogEvent3["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
    AuditLogEvent3[AuditLogEvent3["MemberMove"] = 26] = "MemberMove";
    AuditLogEvent3[AuditLogEvent3["MemberDisconnect"] = 27] = "MemberDisconnect";
    AuditLogEvent3[AuditLogEvent3["BotAdd"] = 28] = "BotAdd";
    AuditLogEvent3[AuditLogEvent3["RoleCreate"] = 30] = "RoleCreate";
    AuditLogEvent3[AuditLogEvent3["RoleUpdate"] = 31] = "RoleUpdate";
    AuditLogEvent3[AuditLogEvent3["RoleDelete"] = 32] = "RoleDelete";
    AuditLogEvent3[AuditLogEvent3["InviteCreate"] = 40] = "InviteCreate";
    AuditLogEvent3[AuditLogEvent3["InviteUpdate"] = 41] = "InviteUpdate";
    AuditLogEvent3[AuditLogEvent3["InviteDelete"] = 42] = "InviteDelete";
    AuditLogEvent3[AuditLogEvent3["WebhookCreate"] = 50] = "WebhookCreate";
    AuditLogEvent3[AuditLogEvent3["WebhookUpdate"] = 51] = "WebhookUpdate";
    AuditLogEvent3[AuditLogEvent3["WebhookDelete"] = 52] = "WebhookDelete";
    AuditLogEvent3[AuditLogEvent3["EmojiCreate"] = 60] = "EmojiCreate";
    AuditLogEvent3[AuditLogEvent3["EmojiUpdate"] = 61] = "EmojiUpdate";
    AuditLogEvent3[AuditLogEvent3["EmojiDelete"] = 62] = "EmojiDelete";
    AuditLogEvent3[AuditLogEvent3["MessageDelete"] = 72] = "MessageDelete";
    AuditLogEvent3[AuditLogEvent3["MessageBulkDelete"] = 73] = "MessageBulkDelete";
    AuditLogEvent3[AuditLogEvent3["MessagePin"] = 74] = "MessagePin";
    AuditLogEvent3[AuditLogEvent3["MessageUnpin"] = 75] = "MessageUnpin";
    AuditLogEvent3[AuditLogEvent3["IntegrationCreate"] = 80] = "IntegrationCreate";
    AuditLogEvent3[AuditLogEvent3["IntegrationUpdate"] = 81] = "IntegrationUpdate";
    AuditLogEvent3[AuditLogEvent3["IntegrationDelete"] = 82] = "IntegrationDelete";
    AuditLogEvent3[AuditLogEvent3["StageInstanceCreate"] = 83] = "StageInstanceCreate";
    AuditLogEvent3[AuditLogEvent3["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
    AuditLogEvent3[AuditLogEvent3["StageInstanceDelete"] = 85] = "StageInstanceDelete";
    AuditLogEvent3[AuditLogEvent3["StickerCreate"] = 90] = "StickerCreate";
    AuditLogEvent3[AuditLogEvent3["StickerUpdate"] = 91] = "StickerUpdate";
    AuditLogEvent3[AuditLogEvent3["StickerDelete"] = 92] = "StickerDelete";
    AuditLogEvent3[AuditLogEvent3["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
    AuditLogEvent3[AuditLogEvent3["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
    AuditLogEvent3[AuditLogEvent3["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
    AuditLogEvent3[AuditLogEvent3["ThreadCreate"] = 110] = "ThreadCreate";
    AuditLogEvent3[AuditLogEvent3["ThreadUpdate"] = 111] = "ThreadUpdate";
    AuditLogEvent3[AuditLogEvent3["ThreadDelete"] = 112] = "ThreadDelete";
    AuditLogEvent3[AuditLogEvent3["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
    AuditLogEvent3[AuditLogEvent3["SoundboardSoundCreate"] = 130] = "SoundboardSoundCreate";
    AuditLogEvent3[AuditLogEvent3["SoundboardSoundUpdate"] = 131] = "SoundboardSoundUpdate";
    AuditLogEvent3[AuditLogEvent3["SoundboardSoundDelete"] = 132] = "SoundboardSoundDelete";
    AuditLogEvent3[AuditLogEvent3["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
    AuditLogEvent3[AuditLogEvent3["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
    AuditLogEvent3[AuditLogEvent3["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
    AuditLogEvent3[AuditLogEvent3["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
    AuditLogEvent3[AuditLogEvent3["AutoModerationFlagToChannel"] = 144] = "AutoModerationFlagToChannel";
    AuditLogEvent3[AuditLogEvent3["AutoModerationUserCommunicationDisabled"] = 145] = "AutoModerationUserCommunicationDisabled";
    AuditLogEvent3[AuditLogEvent3["CreatorMonetizationRequestCreated"] = 150] = "CreatorMonetizationRequestCreated";
    AuditLogEvent3[AuditLogEvent3["CreatorMonetizationTermsAccepted"] = 151] = "CreatorMonetizationTermsAccepted";
    AuditLogEvent3[AuditLogEvent3["OnboardingPromptCreate"] = 163] = "OnboardingPromptCreate";
    AuditLogEvent3[AuditLogEvent3["OnboardingPromptUpdate"] = 164] = "OnboardingPromptUpdate";
    AuditLogEvent3[AuditLogEvent3["OnboardingPromptDelete"] = 165] = "OnboardingPromptDelete";
    AuditLogEvent3[AuditLogEvent3["OnboardingCreate"] = 166] = "OnboardingCreate";
    AuditLogEvent3[AuditLogEvent3["OnboardingUpdate"] = 167] = "OnboardingUpdate";
    AuditLogEvent3[AuditLogEvent3["HomeSettingsCreate"] = 190] = "HomeSettingsCreate";
    AuditLogEvent3[AuditLogEvent3["HomeSettingsUpdate"] = 191] = "HomeSettingsUpdate";
  })(AuditLogEvent2 || (exports.AuditLogEvent = AuditLogEvent2 = {}));
  var AuditLogOptionsType;
  (function(AuditLogOptionsType2) {
    AuditLogOptionsType2["Role"] = "0";
    AuditLogOptionsType2["Member"] = "1";
  })(AuditLogOptionsType || (exports.AuditLogOptionsType = AuditLogOptionsType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/autoModeration.js
var require_autoModeration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AutoModerationActionType = exports.AutoModerationRuleEventType = exports.AutoModerationRuleKeywordPresetType = exports.AutoModerationRuleTriggerType = undefined;
  var AutoModerationRuleTriggerType;
  (function(AutoModerationRuleTriggerType2) {
    AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["Keyword"] = 1] = "Keyword";
    AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["Spam"] = 3] = "Spam";
    AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["KeywordPreset"] = 4] = "KeywordPreset";
    AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["MentionSpam"] = 5] = "MentionSpam";
    AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["MemberProfile"] = 6] = "MemberProfile";
  })(AutoModerationRuleTriggerType || (exports.AutoModerationRuleTriggerType = AutoModerationRuleTriggerType = {}));
  var AutoModerationRuleKeywordPresetType;
  (function(AutoModerationRuleKeywordPresetType2) {
    AutoModerationRuleKeywordPresetType2[AutoModerationRuleKeywordPresetType2["Profanity"] = 1] = "Profanity";
    AutoModerationRuleKeywordPresetType2[AutoModerationRuleKeywordPresetType2["SexualContent"] = 2] = "SexualContent";
    AutoModerationRuleKeywordPresetType2[AutoModerationRuleKeywordPresetType2["Slurs"] = 3] = "Slurs";
  })(AutoModerationRuleKeywordPresetType || (exports.AutoModerationRuleKeywordPresetType = AutoModerationRuleKeywordPresetType = {}));
  var AutoModerationRuleEventType;
  (function(AutoModerationRuleEventType2) {
    AutoModerationRuleEventType2[AutoModerationRuleEventType2["MessageSend"] = 1] = "MessageSend";
    AutoModerationRuleEventType2[AutoModerationRuleEventType2["MemberUpdate"] = 2] = "MemberUpdate";
  })(AutoModerationRuleEventType || (exports.AutoModerationRuleEventType = AutoModerationRuleEventType = {}));
  var AutoModerationActionType;
  (function(AutoModerationActionType2) {
    AutoModerationActionType2[AutoModerationActionType2["BlockMessage"] = 1] = "BlockMessage";
    AutoModerationActionType2[AutoModerationActionType2["SendAlertMessage"] = 2] = "SendAlertMessage";
    AutoModerationActionType2[AutoModerationActionType2["Timeout"] = 3] = "Timeout";
    AutoModerationActionType2[AutoModerationActionType2["BlockMemberInteraction"] = 4] = "BlockMemberInteraction";
  })(AutoModerationActionType || (exports.AutoModerationActionType = AutoModerationActionType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/channel.js
var require_channel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelFlags = exports.SelectMenuDefaultValueType = exports.TextInputStyle = exports.ButtonStyle = exports.ComponentType = exports.AllowedMentionsTypes = exports.AttachmentFlags = exports.EmbedType = exports.ThreadMemberFlags = exports.ThreadAutoArchiveDuration = exports.OverwriteType = exports.MessageFlags = exports.MessageReferenceType = exports.MessageActivityType = exports.MessageType = exports.VideoQualityMode = exports.ChannelType = exports.ForumLayoutType = exports.SortOrderType = undefined;
  var SortOrderType;
  (function(SortOrderType2) {
    SortOrderType2[SortOrderType2["LatestActivity"] = 0] = "LatestActivity";
    SortOrderType2[SortOrderType2["CreationDate"] = 1] = "CreationDate";
  })(SortOrderType || (exports.SortOrderType = SortOrderType = {}));
  var ForumLayoutType;
  (function(ForumLayoutType2) {
    ForumLayoutType2[ForumLayoutType2["NotSet"] = 0] = "NotSet";
    ForumLayoutType2[ForumLayoutType2["ListView"] = 1] = "ListView";
    ForumLayoutType2[ForumLayoutType2["GalleryView"] = 2] = "GalleryView";
  })(ForumLayoutType || (exports.ForumLayoutType = ForumLayoutType = {}));
  var ChannelType9;
  (function(ChannelType10) {
    ChannelType10[ChannelType10["GuildText"] = 0] = "GuildText";
    ChannelType10[ChannelType10["DM"] = 1] = "DM";
    ChannelType10[ChannelType10["GuildVoice"] = 2] = "GuildVoice";
    ChannelType10[ChannelType10["GroupDM"] = 3] = "GroupDM";
    ChannelType10[ChannelType10["GuildCategory"] = 4] = "GuildCategory";
    ChannelType10[ChannelType10["GuildAnnouncement"] = 5] = "GuildAnnouncement";
    ChannelType10[ChannelType10["AnnouncementThread"] = 10] = "AnnouncementThread";
    ChannelType10[ChannelType10["PublicThread"] = 11] = "PublicThread";
    ChannelType10[ChannelType10["PrivateThread"] = 12] = "PrivateThread";
    ChannelType10[ChannelType10["GuildStageVoice"] = 13] = "GuildStageVoice";
    ChannelType10[ChannelType10["GuildDirectory"] = 14] = "GuildDirectory";
    ChannelType10[ChannelType10["GuildForum"] = 15] = "GuildForum";
    ChannelType10[ChannelType10["GuildMedia"] = 16] = "GuildMedia";
    ChannelType10[ChannelType10["GuildNews"] = 5] = "GuildNews";
    ChannelType10[ChannelType10["GuildNewsThread"] = 10] = "GuildNewsThread";
    ChannelType10[ChannelType10["GuildPublicThread"] = 11] = "GuildPublicThread";
    ChannelType10[ChannelType10["GuildPrivateThread"] = 12] = "GuildPrivateThread";
  })(ChannelType9 || (exports.ChannelType = ChannelType9 = {}));
  var VideoQualityMode;
  (function(VideoQualityMode2) {
    VideoQualityMode2[VideoQualityMode2["Auto"] = 1] = "Auto";
    VideoQualityMode2[VideoQualityMode2["Full"] = 2] = "Full";
  })(VideoQualityMode || (exports.VideoQualityMode = VideoQualityMode = {}));
  var MessageType;
  (function(MessageType2) {
    MessageType2[MessageType2["Default"] = 0] = "Default";
    MessageType2[MessageType2["RecipientAdd"] = 1] = "RecipientAdd";
    MessageType2[MessageType2["RecipientRemove"] = 2] = "RecipientRemove";
    MessageType2[MessageType2["Call"] = 3] = "Call";
    MessageType2[MessageType2["ChannelNameChange"] = 4] = "ChannelNameChange";
    MessageType2[MessageType2["ChannelIconChange"] = 5] = "ChannelIconChange";
    MessageType2[MessageType2["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
    MessageType2[MessageType2["UserJoin"] = 7] = "UserJoin";
    MessageType2[MessageType2["GuildBoost"] = 8] = "GuildBoost";
    MessageType2[MessageType2["GuildBoostTier1"] = 9] = "GuildBoostTier1";
    MessageType2[MessageType2["GuildBoostTier2"] = 10] = "GuildBoostTier2";
    MessageType2[MessageType2["GuildBoostTier3"] = 11] = "GuildBoostTier3";
    MessageType2[MessageType2["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
    MessageType2[MessageType2["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
    MessageType2[MessageType2["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
    MessageType2[MessageType2["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
    MessageType2[MessageType2["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
    MessageType2[MessageType2["ThreadCreated"] = 18] = "ThreadCreated";
    MessageType2[MessageType2["Reply"] = 19] = "Reply";
    MessageType2[MessageType2["ChatInputCommand"] = 20] = "ChatInputCommand";
    MessageType2[MessageType2["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
    MessageType2[MessageType2["GuildInviteReminder"] = 22] = "GuildInviteReminder";
    MessageType2[MessageType2["ContextMenuCommand"] = 23] = "ContextMenuCommand";
    MessageType2[MessageType2["AutoModerationAction"] = 24] = "AutoModerationAction";
    MessageType2[MessageType2["RoleSubscriptionPurchase"] = 25] = "RoleSubscriptionPurchase";
    MessageType2[MessageType2["InteractionPremiumUpsell"] = 26] = "InteractionPremiumUpsell";
    MessageType2[MessageType2["StageStart"] = 27] = "StageStart";
    MessageType2[MessageType2["StageEnd"] = 28] = "StageEnd";
    MessageType2[MessageType2["StageSpeaker"] = 29] = "StageSpeaker";
    MessageType2[MessageType2["StageRaiseHand"] = 30] = "StageRaiseHand";
    MessageType2[MessageType2["StageTopic"] = 31] = "StageTopic";
    MessageType2[MessageType2["GuildApplicationPremiumSubscription"] = 32] = "GuildApplicationPremiumSubscription";
    MessageType2[MessageType2["GuildIncidentAlertModeEnabled"] = 36] = "GuildIncidentAlertModeEnabled";
    MessageType2[MessageType2["GuildIncidentAlertModeDisabled"] = 37] = "GuildIncidentAlertModeDisabled";
    MessageType2[MessageType2["GuildIncidentReportRaid"] = 38] = "GuildIncidentReportRaid";
    MessageType2[MessageType2["GuildIncidentReportFalseAlarm"] = 39] = "GuildIncidentReportFalseAlarm";
    MessageType2[MessageType2["PurchaseNotification"] = 44] = "PurchaseNotification";
    MessageType2[MessageType2["PollResult"] = 46] = "PollResult";
  })(MessageType || (exports.MessageType = MessageType = {}));
  var MessageActivityType;
  (function(MessageActivityType2) {
    MessageActivityType2[MessageActivityType2["Join"] = 1] = "Join";
    MessageActivityType2[MessageActivityType2["Spectate"] = 2] = "Spectate";
    MessageActivityType2[MessageActivityType2["Listen"] = 3] = "Listen";
    MessageActivityType2[MessageActivityType2["JoinRequest"] = 5] = "JoinRequest";
  })(MessageActivityType || (exports.MessageActivityType = MessageActivityType = {}));
  var MessageReferenceType;
  (function(MessageReferenceType2) {
    MessageReferenceType2[MessageReferenceType2["Default"] = 0] = "Default";
    MessageReferenceType2[MessageReferenceType2["Forward"] = 1] = "Forward";
  })(MessageReferenceType || (exports.MessageReferenceType = MessageReferenceType = {}));
  var MessageFlags;
  (function(MessageFlags2) {
    MessageFlags2[MessageFlags2["Crossposted"] = 1] = "Crossposted";
    MessageFlags2[MessageFlags2["IsCrosspost"] = 2] = "IsCrosspost";
    MessageFlags2[MessageFlags2["SuppressEmbeds"] = 4] = "SuppressEmbeds";
    MessageFlags2[MessageFlags2["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
    MessageFlags2[MessageFlags2["Urgent"] = 16] = "Urgent";
    MessageFlags2[MessageFlags2["HasThread"] = 32] = "HasThread";
    MessageFlags2[MessageFlags2["Ephemeral"] = 64] = "Ephemeral";
    MessageFlags2[MessageFlags2["Loading"] = 128] = "Loading";
    MessageFlags2[MessageFlags2["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
    MessageFlags2[MessageFlags2["ShouldShowLinkNotDiscordWarning"] = 1024] = "ShouldShowLinkNotDiscordWarning";
    MessageFlags2[MessageFlags2["SuppressNotifications"] = 4096] = "SuppressNotifications";
    MessageFlags2[MessageFlags2["IsVoiceMessage"] = 8192] = "IsVoiceMessage";
    MessageFlags2[MessageFlags2["HasSnapshot"] = 16384] = "HasSnapshot";
  })(MessageFlags || (exports.MessageFlags = MessageFlags = {}));
  var OverwriteType;
  (function(OverwriteType2) {
    OverwriteType2[OverwriteType2["Role"] = 0] = "Role";
    OverwriteType2[OverwriteType2["Member"] = 1] = "Member";
  })(OverwriteType || (exports.OverwriteType = OverwriteType = {}));
  var ThreadAutoArchiveDuration;
  (function(ThreadAutoArchiveDuration2) {
    ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["OneHour"] = 60] = "OneHour";
    ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["OneDay"] = 1440] = "OneDay";
    ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["ThreeDays"] = 4320] = "ThreeDays";
    ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["OneWeek"] = 10080] = "OneWeek";
  })(ThreadAutoArchiveDuration || (exports.ThreadAutoArchiveDuration = ThreadAutoArchiveDuration = {}));
  var ThreadMemberFlags;
  (function(ThreadMemberFlags2) {
    ThreadMemberFlags2[ThreadMemberFlags2["HasInteracted"] = 1] = "HasInteracted";
    ThreadMemberFlags2[ThreadMemberFlags2["AllMessages"] = 2] = "AllMessages";
    ThreadMemberFlags2[ThreadMemberFlags2["OnlyMentions"] = 4] = "OnlyMentions";
    ThreadMemberFlags2[ThreadMemberFlags2["NoMessages"] = 8] = "NoMessages";
  })(ThreadMemberFlags || (exports.ThreadMemberFlags = ThreadMemberFlags = {}));
  var EmbedType;
  (function(EmbedType2) {
    EmbedType2["Rich"] = "rich";
    EmbedType2["Image"] = "image";
    EmbedType2["Video"] = "video";
    EmbedType2["GIFV"] = "gifv";
    EmbedType2["Article"] = "article";
    EmbedType2["Link"] = "link";
    EmbedType2["AutoModerationMessage"] = "auto_moderation_message";
    EmbedType2["PollResult"] = "poll_result";
  })(EmbedType || (exports.EmbedType = EmbedType = {}));
  var AttachmentFlags;
  (function(AttachmentFlags2) {
    AttachmentFlags2[AttachmentFlags2["IsRemix"] = 4] = "IsRemix";
  })(AttachmentFlags || (exports.AttachmentFlags = AttachmentFlags = {}));
  var AllowedMentionsTypes;
  (function(AllowedMentionsTypes2) {
    AllowedMentionsTypes2["Everyone"] = "everyone";
    AllowedMentionsTypes2["Role"] = "roles";
    AllowedMentionsTypes2["User"] = "users";
  })(AllowedMentionsTypes || (exports.AllowedMentionsTypes = AllowedMentionsTypes = {}));
  var ComponentType;
  (function(ComponentType2) {
    ComponentType2[ComponentType2["ActionRow"] = 1] = "ActionRow";
    ComponentType2[ComponentType2["Button"] = 2] = "Button";
    ComponentType2[ComponentType2["StringSelect"] = 3] = "StringSelect";
    ComponentType2[ComponentType2["TextInput"] = 4] = "TextInput";
    ComponentType2[ComponentType2["UserSelect"] = 5] = "UserSelect";
    ComponentType2[ComponentType2["RoleSelect"] = 6] = "RoleSelect";
    ComponentType2[ComponentType2["MentionableSelect"] = 7] = "MentionableSelect";
    ComponentType2[ComponentType2["ChannelSelect"] = 8] = "ChannelSelect";
    ComponentType2[ComponentType2["SelectMenu"] = 3] = "SelectMenu";
  })(ComponentType || (exports.ComponentType = ComponentType = {}));
  var ButtonStyle;
  (function(ButtonStyle2) {
    ButtonStyle2[ButtonStyle2["Primary"] = 1] = "Primary";
    ButtonStyle2[ButtonStyle2["Secondary"] = 2] = "Secondary";
    ButtonStyle2[ButtonStyle2["Success"] = 3] = "Success";
    ButtonStyle2[ButtonStyle2["Danger"] = 4] = "Danger";
    ButtonStyle2[ButtonStyle2["Link"] = 5] = "Link";
    ButtonStyle2[ButtonStyle2["Premium"] = 6] = "Premium";
  })(ButtonStyle || (exports.ButtonStyle = ButtonStyle = {}));
  var TextInputStyle;
  (function(TextInputStyle2) {
    TextInputStyle2[TextInputStyle2["Short"] = 1] = "Short";
    TextInputStyle2[TextInputStyle2["Paragraph"] = 2] = "Paragraph";
  })(TextInputStyle || (exports.TextInputStyle = TextInputStyle = {}));
  var SelectMenuDefaultValueType;
  (function(SelectMenuDefaultValueType2) {
    SelectMenuDefaultValueType2["Channel"] = "channel";
    SelectMenuDefaultValueType2["Role"] = "role";
    SelectMenuDefaultValueType2["User"] = "user";
  })(SelectMenuDefaultValueType || (exports.SelectMenuDefaultValueType = SelectMenuDefaultValueType = {}));
  var ChannelFlags;
  (function(ChannelFlags2) {
    ChannelFlags2[ChannelFlags2["GuildFeedRemoved"] = 1] = "GuildFeedRemoved";
    ChannelFlags2[ChannelFlags2["Pinned"] = 2] = "Pinned";
    ChannelFlags2[ChannelFlags2["ActiveChannelsRemoved"] = 4] = "ActiveChannelsRemoved";
    ChannelFlags2[ChannelFlags2["RequireTag"] = 16] = "RequireTag";
    ChannelFlags2[ChannelFlags2["IsSpam"] = 32] = "IsSpam";
    ChannelFlags2[ChannelFlags2["IsGuildResourceChannel"] = 128] = "IsGuildResourceChannel";
    ChannelFlags2[ChannelFlags2["ClydeAI"] = 256] = "ClydeAI";
    ChannelFlags2[ChannelFlags2["IsScheduledForDeletion"] = 512] = "IsScheduledForDeletion";
    ChannelFlags2[ChannelFlags2["HideMediaDownloadOptions"] = 32768] = "HideMediaDownloadOptions";
  })(ChannelFlags || (exports.ChannelFlags = ChannelFlags = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/emoji.js
var require_emoji = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/gateway.js
var require_gateway = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ActivityFlags = exports.ActivityType = exports.ActivityPlatform = exports.PresenceUpdateStatus = undefined;
  var PresenceUpdateStatus;
  (function(PresenceUpdateStatus2) {
    PresenceUpdateStatus2["Online"] = "online";
    PresenceUpdateStatus2["DoNotDisturb"] = "dnd";
    PresenceUpdateStatus2["Idle"] = "idle";
    PresenceUpdateStatus2["Invisible"] = "invisible";
    PresenceUpdateStatus2["Offline"] = "offline";
  })(PresenceUpdateStatus || (exports.PresenceUpdateStatus = PresenceUpdateStatus = {}));
  var ActivityPlatform;
  (function(ActivityPlatform2) {
    ActivityPlatform2["Desktop"] = "desktop";
    ActivityPlatform2["Xbox"] = "xbox";
    ActivityPlatform2["Samsung"] = "samsung";
    ActivityPlatform2["IOS"] = "ios";
    ActivityPlatform2["Android"] = "android";
    ActivityPlatform2["Embedded"] = "embedded";
    ActivityPlatform2["PS4"] = "ps4";
    ActivityPlatform2["PS5"] = "ps5";
  })(ActivityPlatform || (exports.ActivityPlatform = ActivityPlatform = {}));
  var ActivityType;
  (function(ActivityType2) {
    ActivityType2[ActivityType2["Playing"] = 0] = "Playing";
    ActivityType2[ActivityType2["Streaming"] = 1] = "Streaming";
    ActivityType2[ActivityType2["Listening"] = 2] = "Listening";
    ActivityType2[ActivityType2["Watching"] = 3] = "Watching";
    ActivityType2[ActivityType2["Custom"] = 4] = "Custom";
    ActivityType2[ActivityType2["Competing"] = 5] = "Competing";
  })(ActivityType || (exports.ActivityType = ActivityType = {}));
  var ActivityFlags;
  (function(ActivityFlags2) {
    ActivityFlags2[ActivityFlags2["Instance"] = 1] = "Instance";
    ActivityFlags2[ActivityFlags2["Join"] = 2] = "Join";
    ActivityFlags2[ActivityFlags2["Spectate"] = 4] = "Spectate";
    ActivityFlags2[ActivityFlags2["JoinRequest"] = 8] = "JoinRequest";
    ActivityFlags2[ActivityFlags2["Sync"] = 16] = "Sync";
    ActivityFlags2[ActivityFlags2["Play"] = 32] = "Play";
    ActivityFlags2[ActivityFlags2["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
    ActivityFlags2[ActivityFlags2["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
    ActivityFlags2[ActivityFlags2["Embedded"] = 256] = "Embedded";
  })(ActivityFlags || (exports.ActivityFlags = ActivityFlags = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/guild.js
var require_guild = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GuildOnboardingPromptType = exports.GuildOnboardingMode = exports.MembershipScreeningFieldType = exports.GuildWidgetStyle = exports.IntegrationExpireBehavior = exports.GuildMemberFlags = exports.GuildFeature = exports.GuildSystemChannelFlags = exports.GuildHubType = exports.GuildPremiumTier = exports.GuildVerificationLevel = exports.GuildNSFWLevel = exports.GuildMFALevel = exports.GuildExplicitContentFilter = exports.GuildDefaultMessageNotifications = undefined;
  var GuildDefaultMessageNotifications;
  (function(GuildDefaultMessageNotifications2) {
    GuildDefaultMessageNotifications2[GuildDefaultMessageNotifications2["AllMessages"] = 0] = "AllMessages";
    GuildDefaultMessageNotifications2[GuildDefaultMessageNotifications2["OnlyMentions"] = 1] = "OnlyMentions";
  })(GuildDefaultMessageNotifications || (exports.GuildDefaultMessageNotifications = GuildDefaultMessageNotifications = {}));
  var GuildExplicitContentFilter;
  (function(GuildExplicitContentFilter2) {
    GuildExplicitContentFilter2[GuildExplicitContentFilter2["Disabled"] = 0] = "Disabled";
    GuildExplicitContentFilter2[GuildExplicitContentFilter2["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
    GuildExplicitContentFilter2[GuildExplicitContentFilter2["AllMembers"] = 2] = "AllMembers";
  })(GuildExplicitContentFilter || (exports.GuildExplicitContentFilter = GuildExplicitContentFilter = {}));
  var GuildMFALevel;
  (function(GuildMFALevel2) {
    GuildMFALevel2[GuildMFALevel2["None"] = 0] = "None";
    GuildMFALevel2[GuildMFALevel2["Elevated"] = 1] = "Elevated";
  })(GuildMFALevel || (exports.GuildMFALevel = GuildMFALevel = {}));
  var GuildNSFWLevel;
  (function(GuildNSFWLevel2) {
    GuildNSFWLevel2[GuildNSFWLevel2["Default"] = 0] = "Default";
    GuildNSFWLevel2[GuildNSFWLevel2["Explicit"] = 1] = "Explicit";
    GuildNSFWLevel2[GuildNSFWLevel2["Safe"] = 2] = "Safe";
    GuildNSFWLevel2[GuildNSFWLevel2["AgeRestricted"] = 3] = "AgeRestricted";
  })(GuildNSFWLevel || (exports.GuildNSFWLevel = GuildNSFWLevel = {}));
  var GuildVerificationLevel;
  (function(GuildVerificationLevel2) {
    GuildVerificationLevel2[GuildVerificationLevel2["None"] = 0] = "None";
    GuildVerificationLevel2[GuildVerificationLevel2["Low"] = 1] = "Low";
    GuildVerificationLevel2[GuildVerificationLevel2["Medium"] = 2] = "Medium";
    GuildVerificationLevel2[GuildVerificationLevel2["High"] = 3] = "High";
    GuildVerificationLevel2[GuildVerificationLevel2["VeryHigh"] = 4] = "VeryHigh";
  })(GuildVerificationLevel || (exports.GuildVerificationLevel = GuildVerificationLevel = {}));
  var GuildPremiumTier;
  (function(GuildPremiumTier2) {
    GuildPremiumTier2[GuildPremiumTier2["None"] = 0] = "None";
    GuildPremiumTier2[GuildPremiumTier2["Tier1"] = 1] = "Tier1";
    GuildPremiumTier2[GuildPremiumTier2["Tier2"] = 2] = "Tier2";
    GuildPremiumTier2[GuildPremiumTier2["Tier3"] = 3] = "Tier3";
  })(GuildPremiumTier || (exports.GuildPremiumTier = GuildPremiumTier = {}));
  var GuildHubType;
  (function(GuildHubType2) {
    GuildHubType2[GuildHubType2["Default"] = 0] = "Default";
    GuildHubType2[GuildHubType2["HighSchool"] = 1] = "HighSchool";
    GuildHubType2[GuildHubType2["College"] = 2] = "College";
  })(GuildHubType || (exports.GuildHubType = GuildHubType = {}));
  var GuildSystemChannelFlags;
  (function(GuildSystemChannelFlags2) {
    GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
    GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
    GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
    GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
    GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressRoleSubscriptionPurchaseNotifications"] = 16] = "SuppressRoleSubscriptionPurchaseNotifications";
    GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressRoleSubscriptionPurchaseNotificationReplies"] = 32] = "SuppressRoleSubscriptionPurchaseNotificationReplies";
  })(GuildSystemChannelFlags || (exports.GuildSystemChannelFlags = GuildSystemChannelFlags = {}));
  var GuildFeature;
  (function(GuildFeature2) {
    GuildFeature2["AnimatedBanner"] = "ANIMATED_BANNER";
    GuildFeature2["AnimatedIcon"] = "ANIMATED_ICON";
    GuildFeature2["ApplicationCommandPermissionsV2"] = "APPLICATION_COMMAND_PERMISSIONS_V2";
    GuildFeature2["AutoModeration"] = "AUTO_MODERATION";
    GuildFeature2["Banner"] = "BANNER";
    GuildFeature2["Community"] = "COMMUNITY";
    GuildFeature2["CreatorMonetizableProvisional"] = "CREATOR_MONETIZABLE_PROVISIONAL";
    GuildFeature2["CreatorStorePage"] = "CREATOR_STORE_PAGE";
    GuildFeature2["DeveloperSupportServer"] = "DEVELOPER_SUPPORT_SERVER";
    GuildFeature2["Discoverable"] = "DISCOVERABLE";
    GuildFeature2["Featurable"] = "FEATURABLE";
    GuildFeature2["HasDirectoryEntry"] = "HAS_DIRECTORY_ENTRY";
    GuildFeature2["Hub"] = "HUB";
    GuildFeature2["InvitesDisabled"] = "INVITES_DISABLED";
    GuildFeature2["InviteSplash"] = "INVITE_SPLASH";
    GuildFeature2["LinkedToHub"] = "LINKED_TO_HUB";
    GuildFeature2["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
    GuildFeature2["MoreSoundboard"] = "MORE_SOUNDBOARD";
    GuildFeature2["MonetizationEnabled"] = "MONETIZATION_ENABLED";
    GuildFeature2["MoreStickers"] = "MORE_STICKERS";
    GuildFeature2["News"] = "NEWS";
    GuildFeature2["Partnered"] = "PARTNERED";
    GuildFeature2["PreviewEnabled"] = "PREVIEW_ENABLED";
    GuildFeature2["PrivateThreads"] = "PRIVATE_THREADS";
    GuildFeature2["RaidAlertsDisabled"] = "RAID_ALERTS_DISABLED";
    GuildFeature2["RelayEnabled"] = "RELAY_ENABLED";
    GuildFeature2["RoleIcons"] = "ROLE_ICONS";
    GuildFeature2["RoleSubscriptionsAvailableForPurchase"] = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE";
    GuildFeature2["RoleSubscriptionsEnabled"] = "ROLE_SUBSCRIPTIONS_ENABLED";
    GuildFeature2["Soundboard"] = "SOUNDBOARD";
    GuildFeature2["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
    GuildFeature2["VanityURL"] = "VANITY_URL";
    GuildFeature2["Verified"] = "VERIFIED";
    GuildFeature2["VIPRegions"] = "VIP_REGIONS";
    GuildFeature2["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
  })(GuildFeature || (exports.GuildFeature = GuildFeature = {}));
  var GuildMemberFlags;
  (function(GuildMemberFlags2) {
    GuildMemberFlags2[GuildMemberFlags2["DidRejoin"] = 1] = "DidRejoin";
    GuildMemberFlags2[GuildMemberFlags2["CompletedOnboarding"] = 2] = "CompletedOnboarding";
    GuildMemberFlags2[GuildMemberFlags2["BypassesVerification"] = 4] = "BypassesVerification";
    GuildMemberFlags2[GuildMemberFlags2["StartedOnboarding"] = 8] = "StartedOnboarding";
    GuildMemberFlags2[GuildMemberFlags2["IsGuest"] = 16] = "IsGuest";
    GuildMemberFlags2[GuildMemberFlags2["StartedHomeActions"] = 32] = "StartedHomeActions";
    GuildMemberFlags2[GuildMemberFlags2["CompletedHomeActions"] = 64] = "CompletedHomeActions";
    GuildMemberFlags2[GuildMemberFlags2["AutomodQuarantinedUsernameOrGuildNickname"] = 128] = "AutomodQuarantinedUsernameOrGuildNickname";
    GuildMemberFlags2[GuildMemberFlags2["AutomodQuarantinedBio"] = 256] = "AutomodQuarantinedBio";
    GuildMemberFlags2[GuildMemberFlags2["DmSettingsUpsellAcknowledged"] = 512] = "DmSettingsUpsellAcknowledged";
  })(GuildMemberFlags || (exports.GuildMemberFlags = GuildMemberFlags = {}));
  var IntegrationExpireBehavior;
  (function(IntegrationExpireBehavior2) {
    IntegrationExpireBehavior2[IntegrationExpireBehavior2["RemoveRole"] = 0] = "RemoveRole";
    IntegrationExpireBehavior2[IntegrationExpireBehavior2["Kick"] = 1] = "Kick";
  })(IntegrationExpireBehavior || (exports.IntegrationExpireBehavior = IntegrationExpireBehavior = {}));
  var GuildWidgetStyle;
  (function(GuildWidgetStyle2) {
    GuildWidgetStyle2["Shield"] = "shield";
    GuildWidgetStyle2["Banner1"] = "banner1";
    GuildWidgetStyle2["Banner2"] = "banner2";
    GuildWidgetStyle2["Banner3"] = "banner3";
    GuildWidgetStyle2["Banner4"] = "banner4";
  })(GuildWidgetStyle || (exports.GuildWidgetStyle = GuildWidgetStyle = {}));
  var MembershipScreeningFieldType;
  (function(MembershipScreeningFieldType2) {
    MembershipScreeningFieldType2["Terms"] = "TERMS";
  })(MembershipScreeningFieldType || (exports.MembershipScreeningFieldType = MembershipScreeningFieldType = {}));
  var GuildOnboardingMode;
  (function(GuildOnboardingMode2) {
    GuildOnboardingMode2[GuildOnboardingMode2["OnboardingDefault"] = 0] = "OnboardingDefault";
    GuildOnboardingMode2[GuildOnboardingMode2["OnboardingAdvanced"] = 1] = "OnboardingAdvanced";
  })(GuildOnboardingMode || (exports.GuildOnboardingMode = GuildOnboardingMode = {}));
  var GuildOnboardingPromptType;
  (function(GuildOnboardingPromptType2) {
    GuildOnboardingPromptType2[GuildOnboardingPromptType2["MultipleChoice"] = 0] = "MultipleChoice";
    GuildOnboardingPromptType2[GuildOnboardingPromptType2["Dropdown"] = 1] = "Dropdown";
  })(GuildOnboardingPromptType || (exports.GuildOnboardingPromptType = GuildOnboardingPromptType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js
var require_guildScheduledEvent = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventStatus = exports.GuildScheduledEventEntityType = exports.GuildScheduledEventRecurrenceRuleMonth = exports.GuildScheduledEventRecurrenceRuleWeekday = exports.GuildScheduledEventRecurrenceRuleFrequency = undefined;
  var GuildScheduledEventRecurrenceRuleFrequency;
  (function(GuildScheduledEventRecurrenceRuleFrequency2) {
    GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Yearly"] = 0] = "Yearly";
    GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Monthly"] = 1] = "Monthly";
    GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Weekly"] = 2] = "Weekly";
    GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Daily"] = 3] = "Daily";
  })(GuildScheduledEventRecurrenceRuleFrequency || (exports.GuildScheduledEventRecurrenceRuleFrequency = GuildScheduledEventRecurrenceRuleFrequency = {}));
  var GuildScheduledEventRecurrenceRuleWeekday;
  (function(GuildScheduledEventRecurrenceRuleWeekday2) {
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Monday"] = 0] = "Monday";
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Tuesday"] = 1] = "Tuesday";
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Wednesday"] = 2] = "Wednesday";
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Thursday"] = 3] = "Thursday";
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Friday"] = 4] = "Friday";
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Saturday"] = 5] = "Saturday";
    GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Sunday"] = 6] = "Sunday";
  })(GuildScheduledEventRecurrenceRuleWeekday || (exports.GuildScheduledEventRecurrenceRuleWeekday = GuildScheduledEventRecurrenceRuleWeekday = {}));
  var GuildScheduledEventRecurrenceRuleMonth;
  (function(GuildScheduledEventRecurrenceRuleMonth2) {
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["January"] = 1] = "January";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["February"] = 2] = "February";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["March"] = 3] = "March";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["April"] = 4] = "April";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["May"] = 5] = "May";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["June"] = 6] = "June";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["July"] = 7] = "July";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["August"] = 8] = "August";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["September"] = 9] = "September";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["October"] = 10] = "October";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["November"] = 11] = "November";
    GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["December"] = 12] = "December";
  })(GuildScheduledEventRecurrenceRuleMonth || (exports.GuildScheduledEventRecurrenceRuleMonth = GuildScheduledEventRecurrenceRuleMonth = {}));
  var GuildScheduledEventEntityType;
  (function(GuildScheduledEventEntityType2) {
    GuildScheduledEventEntityType2[GuildScheduledEventEntityType2["StageInstance"] = 1] = "StageInstance";
    GuildScheduledEventEntityType2[GuildScheduledEventEntityType2["Voice"] = 2] = "Voice";
    GuildScheduledEventEntityType2[GuildScheduledEventEntityType2["External"] = 3] = "External";
  })(GuildScheduledEventEntityType || (exports.GuildScheduledEventEntityType = GuildScheduledEventEntityType = {}));
  var GuildScheduledEventStatus;
  (function(GuildScheduledEventStatus2) {
    GuildScheduledEventStatus2[GuildScheduledEventStatus2["Scheduled"] = 1] = "Scheduled";
    GuildScheduledEventStatus2[GuildScheduledEventStatus2["Active"] = 2] = "Active";
    GuildScheduledEventStatus2[GuildScheduledEventStatus2["Completed"] = 3] = "Completed";
    GuildScheduledEventStatus2[GuildScheduledEventStatus2["Canceled"] = 4] = "Canceled";
  })(GuildScheduledEventStatus || (exports.GuildScheduledEventStatus = GuildScheduledEventStatus = {}));
  var GuildScheduledEventPrivacyLevel;
  (function(GuildScheduledEventPrivacyLevel2) {
    GuildScheduledEventPrivacyLevel2[GuildScheduledEventPrivacyLevel2["GuildOnly"] = 2] = "GuildOnly";
  })(GuildScheduledEventPrivacyLevel || (exports.GuildScheduledEventPrivacyLevel = GuildScheduledEventPrivacyLevel = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js
var require_attachment = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js
var require_base = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js
var require_boolean = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js
var require_channel2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js
var require_integer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js
var require_mentionable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js
var require_number = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js
var require_role = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js
var require_shared = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ApplicationCommandOptionType = undefined;
  var ApplicationCommandOptionType;
  (function(ApplicationCommandOptionType2) {
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Subcommand"] = 1] = "Subcommand";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["SubcommandGroup"] = 2] = "SubcommandGroup";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["String"] = 3] = "String";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Integer"] = 4] = "Integer";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Boolean"] = 5] = "Boolean";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["User"] = 6] = "User";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Channel"] = 7] = "Channel";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Role"] = 8] = "Role";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Mentionable"] = 9] = "Mentionable";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Number"] = 10] = "Number";
    ApplicationCommandOptionType2[ApplicationCommandOptionType2["Attachment"] = 11] = "Attachment";
  })(ApplicationCommandOptionType || (exports.ApplicationCommandOptionType = ApplicationCommandOptionType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js
var require_string = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js
var require_subcommand = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js
var require_subcommandGroup = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js
var require_user = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js
var require_chatInput = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_attachment(), exports);
  __exportStar(require_base(), exports);
  __exportStar(require_boolean(), exports);
  __exportStar(require_channel2(), exports);
  __exportStar(require_integer(), exports);
  __exportStar(require_mentionable(), exports);
  __exportStar(require_number(), exports);
  __exportStar(require_role(), exports);
  __exportStar(require_shared(), exports);
  __exportStar(require_string(), exports);
  __exportStar(require_subcommand(), exports);
  __exportStar(require_subcommandGroup(), exports);
  __exportStar(require_user(), exports);
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js
var require_contextMenu = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js
var require_permissions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.APIApplicationCommandPermissionsConstant = exports.ApplicationCommandPermissionType = undefined;
  var ApplicationCommandPermissionType;
  (function(ApplicationCommandPermissionType2) {
    ApplicationCommandPermissionType2[ApplicationCommandPermissionType2["Role"] = 1] = "Role";
    ApplicationCommandPermissionType2[ApplicationCommandPermissionType2["User"] = 2] = "User";
    ApplicationCommandPermissionType2[ApplicationCommandPermissionType2["Channel"] = 3] = "Channel";
  })(ApplicationCommandPermissionType || (exports.ApplicationCommandPermissionType = ApplicationCommandPermissionType = {}));
  exports.APIApplicationCommandPermissionsConstant = {
    Everyone: (guildId) => String(guildId),
    AllChannels: (guildId) => String(BigInt(guildId) - 1n)
  };
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/entryPoint.js
var require_entryPoint = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.js
var require_internals = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js
var require_applicationCommands = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EntryPointCommandHandlerType = exports.InteractionContextType = exports.ApplicationIntegrationType = exports.ApplicationCommandType = undefined;
  __exportStar(require_chatInput(), exports);
  __exportStar(require_contextMenu(), exports);
  __exportStar(require_permissions(), exports);
  __exportStar(require_entryPoint(), exports);
  __exportStar(require_internals(), exports);
  var ApplicationCommandType;
  (function(ApplicationCommandType2) {
    ApplicationCommandType2[ApplicationCommandType2["ChatInput"] = 1] = "ChatInput";
    ApplicationCommandType2[ApplicationCommandType2["User"] = 2] = "User";
    ApplicationCommandType2[ApplicationCommandType2["Message"] = 3] = "Message";
    ApplicationCommandType2[ApplicationCommandType2["PrimaryEntryPoint"] = 4] = "PrimaryEntryPoint";
  })(ApplicationCommandType || (exports.ApplicationCommandType = ApplicationCommandType = {}));
  var ApplicationIntegrationType;
  (function(ApplicationIntegrationType2) {
    ApplicationIntegrationType2[ApplicationIntegrationType2["GuildInstall"] = 0] = "GuildInstall";
    ApplicationIntegrationType2[ApplicationIntegrationType2["UserInstall"] = 1] = "UserInstall";
  })(ApplicationIntegrationType || (exports.ApplicationIntegrationType = ApplicationIntegrationType = {}));
  var InteractionContextType;
  (function(InteractionContextType2) {
    InteractionContextType2[InteractionContextType2["Guild"] = 0] = "Guild";
    InteractionContextType2[InteractionContextType2["BotDM"] = 1] = "BotDM";
    InteractionContextType2[InteractionContextType2["PrivateChannel"] = 2] = "PrivateChannel";
  })(InteractionContextType || (exports.InteractionContextType = InteractionContextType = {}));
  var EntryPointCommandHandlerType;
  (function(EntryPointCommandHandlerType2) {
    EntryPointCommandHandlerType2[EntryPointCommandHandlerType2["AppHandler"] = 1] = "AppHandler";
    EntryPointCommandHandlerType2[EntryPointCommandHandlerType2["DiscordLaunchActivity"] = 2] = "DiscordLaunchActivity";
  })(EntryPointCommandHandlerType || (exports.EntryPointCommandHandlerType = EntryPointCommandHandlerType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js
var require_autocomplete = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/base.js
var require_base2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js
var require_messageComponents = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js
var require_modalSubmit = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/ping.js
var require_ping = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/_interactions/responses.js
var require_responses = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InteractionResponseType = exports.InteractionType = undefined;
  var InteractionType;
  (function(InteractionType2) {
    InteractionType2[InteractionType2["Ping"] = 1] = "Ping";
    InteractionType2[InteractionType2["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionType2[InteractionType2["MessageComponent"] = 3] = "MessageComponent";
    InteractionType2[InteractionType2["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
    InteractionType2[InteractionType2["ModalSubmit"] = 5] = "ModalSubmit";
  })(InteractionType || (exports.InteractionType = InteractionType = {}));
  var InteractionResponseType;
  (function(InteractionResponseType2) {
    InteractionResponseType2[InteractionResponseType2["Pong"] = 1] = "Pong";
    InteractionResponseType2[InteractionResponseType2["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
    InteractionResponseType2[InteractionResponseType2["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
    InteractionResponseType2[InteractionResponseType2["DeferredMessageUpdate"] = 6] = "DeferredMessageUpdate";
    InteractionResponseType2[InteractionResponseType2["UpdateMessage"] = 7] = "UpdateMessage";
    InteractionResponseType2[InteractionResponseType2["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
    InteractionResponseType2[InteractionResponseType2["Modal"] = 9] = "Modal";
    InteractionResponseType2[InteractionResponseType2["PremiumRequired"] = 10] = "PremiumRequired";
    InteractionResponseType2[InteractionResponseType2["LaunchActivity"] = 12] = "LaunchActivity";
  })(InteractionResponseType || (exports.InteractionResponseType = InteractionResponseType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/interactions.js
var require_interactions = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_applicationCommands(), exports);
  __exportStar(require_autocomplete(), exports);
  __exportStar(require_base2(), exports);
  __exportStar(require_messageComponents(), exports);
  __exportStar(require_modalSubmit(), exports);
  __exportStar(require_ping(), exports);
  __exportStar(require_responses(), exports);
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/invite.js
var require_invite = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InviteTargetType = exports.InviteType = undefined;
  var InviteType;
  (function(InviteType2) {
    InviteType2[InviteType2["Guild"] = 0] = "Guild";
    InviteType2[InviteType2["GroupDM"] = 1] = "GroupDM";
    InviteType2[InviteType2["Friend"] = 2] = "Friend";
  })(InviteType || (exports.InviteType = InviteType = {}));
  var InviteTargetType;
  (function(InviteTargetType2) {
    InviteTargetType2[InviteTargetType2["Stream"] = 1] = "Stream";
    InviteTargetType2[InviteTargetType2["EmbeddedApplication"] = 2] = "EmbeddedApplication";
  })(InviteTargetType || (exports.InviteTargetType = InviteTargetType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/monetization.js
var require_monetization = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SubscriptionStatus = exports.SKUType = exports.SKUFlags = exports.EntitlementType = undefined;
  var EntitlementType;
  (function(EntitlementType2) {
    EntitlementType2[EntitlementType2["Purchase"] = 1] = "Purchase";
    EntitlementType2[EntitlementType2["PremiumSubscription"] = 2] = "PremiumSubscription";
    EntitlementType2[EntitlementType2["DeveloperGift"] = 3] = "DeveloperGift";
    EntitlementType2[EntitlementType2["TestModePurchase"] = 4] = "TestModePurchase";
    EntitlementType2[EntitlementType2["FreePurchase"] = 5] = "FreePurchase";
    EntitlementType2[EntitlementType2["UserGift"] = 6] = "UserGift";
    EntitlementType2[EntitlementType2["PremiumPurchase"] = 7] = "PremiumPurchase";
    EntitlementType2[EntitlementType2["ApplicationSubscription"] = 8] = "ApplicationSubscription";
  })(EntitlementType || (exports.EntitlementType = EntitlementType = {}));
  var SKUFlags;
  (function(SKUFlags2) {
    SKUFlags2[SKUFlags2["Available"] = 4] = "Available";
    SKUFlags2[SKUFlags2["GuildSubscription"] = 128] = "GuildSubscription";
    SKUFlags2[SKUFlags2["UserSubscription"] = 256] = "UserSubscription";
  })(SKUFlags || (exports.SKUFlags = SKUFlags = {}));
  var SKUType;
  (function(SKUType2) {
    SKUType2[SKUType2["Durable"] = 2] = "Durable";
    SKUType2[SKUType2["Consumable"] = 3] = "Consumable";
    SKUType2[SKUType2["Subscription"] = 5] = "Subscription";
    SKUType2[SKUType2["SubscriptionGroup"] = 6] = "SubscriptionGroup";
  })(SKUType || (exports.SKUType = SKUType = {}));
  var SubscriptionStatus;
  (function(SubscriptionStatus2) {
    SubscriptionStatus2[SubscriptionStatus2["Active"] = 0] = "Active";
    SubscriptionStatus2[SubscriptionStatus2["Ending"] = 1] = "Ending";
    SubscriptionStatus2[SubscriptionStatus2["Inactive"] = 2] = "Inactive";
  })(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/oauth2.js
var require_oauth2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OAuth2Scopes = undefined;
  var OAuth2Scopes;
  (function(OAuth2Scopes2) {
    OAuth2Scopes2["Bot"] = "bot";
    OAuth2Scopes2["Connections"] = "connections";
    OAuth2Scopes2["DMChannelsRead"] = "dm_channels.read";
    OAuth2Scopes2["Email"] = "email";
    OAuth2Scopes2["Identify"] = "identify";
    OAuth2Scopes2["Guilds"] = "guilds";
    OAuth2Scopes2["GuildsJoin"] = "guilds.join";
    OAuth2Scopes2["GuildsMembersRead"] = "guilds.members.read";
    OAuth2Scopes2["GroupDMJoins"] = "gdm.join";
    OAuth2Scopes2["MessagesRead"] = "messages.read";
    OAuth2Scopes2["RoleConnectionsWrite"] = "role_connections.write";
    OAuth2Scopes2["RPC"] = "rpc";
    OAuth2Scopes2["RPCActivitiesWrite"] = "rpc.activities.write";
    OAuth2Scopes2["RPCVoiceRead"] = "rpc.voice.read";
    OAuth2Scopes2["RPCVoiceWrite"] = "rpc.voice.write";
    OAuth2Scopes2["RPCNotificationsRead"] = "rpc.notifications.read";
    OAuth2Scopes2["WebhookIncoming"] = "webhook.incoming";
    OAuth2Scopes2["Voice"] = "voice";
    OAuth2Scopes2["ApplicationsBuildsUpload"] = "applications.builds.upload";
    OAuth2Scopes2["ApplicationsBuildsRead"] = "applications.builds.read";
    OAuth2Scopes2["ApplicationsStoreUpdate"] = "applications.store.update";
    OAuth2Scopes2["ApplicationsEntitlements"] = "applications.entitlements";
    OAuth2Scopes2["RelationshipsRead"] = "relationships.read";
    OAuth2Scopes2["ActivitiesRead"] = "activities.read";
    OAuth2Scopes2["ActivitiesWrite"] = "activities.write";
    OAuth2Scopes2["ApplicationsCommands"] = "applications.commands";
    OAuth2Scopes2["ApplicationsCommandsUpdate"] = "applications.commands.update";
    OAuth2Scopes2["ApplicationCommandsPermissionsUpdate"] = "applications.commands.permissions.update";
  })(OAuth2Scopes || (exports.OAuth2Scopes = OAuth2Scopes = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/permissions.js
var require_permissions2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RoleFlags = undefined;
  var RoleFlags;
  (function(RoleFlags2) {
    RoleFlags2[RoleFlags2["InPrompt"] = 1] = "InPrompt";
  })(RoleFlags || (exports.RoleFlags = RoleFlags = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/poll.js
var require_poll = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PollLayoutType = undefined;
  var PollLayoutType;
  (function(PollLayoutType2) {
    PollLayoutType2[PollLayoutType2["Default"] = 1] = "Default";
  })(PollLayoutType || (exports.PollLayoutType = PollLayoutType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/soundboard.js
var require_soundboard = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/stageInstance.js
var require_stageInstance = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StageInstancePrivacyLevel = undefined;
  var StageInstancePrivacyLevel;
  (function(StageInstancePrivacyLevel2) {
    StageInstancePrivacyLevel2[StageInstancePrivacyLevel2["Public"] = 1] = "Public";
    StageInstancePrivacyLevel2[StageInstancePrivacyLevel2["GuildOnly"] = 2] = "GuildOnly";
  })(StageInstancePrivacyLevel || (exports.StageInstancePrivacyLevel = StageInstancePrivacyLevel = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/sticker.js
var require_sticker = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StickerFormatType = exports.StickerType = undefined;
  var StickerType;
  (function(StickerType2) {
    StickerType2[StickerType2["Standard"] = 1] = "Standard";
    StickerType2[StickerType2["Guild"] = 2] = "Guild";
  })(StickerType || (exports.StickerType = StickerType = {}));
  var StickerFormatType;
  (function(StickerFormatType2) {
    StickerFormatType2[StickerFormatType2["PNG"] = 1] = "PNG";
    StickerFormatType2[StickerFormatType2["APNG"] = 2] = "APNG";
    StickerFormatType2[StickerFormatType2["Lottie"] = 3] = "Lottie";
    StickerFormatType2[StickerFormatType2["GIF"] = 4] = "GIF";
  })(StickerFormatType || (exports.StickerFormatType = StickerFormatType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/teams.js
var require_teams = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TeamMemberRole = exports.TeamMemberMembershipState = undefined;
  var TeamMemberMembershipState;
  (function(TeamMemberMembershipState2) {
    TeamMemberMembershipState2[TeamMemberMembershipState2["Invited"] = 1] = "Invited";
    TeamMemberMembershipState2[TeamMemberMembershipState2["Accepted"] = 2] = "Accepted";
  })(TeamMemberMembershipState || (exports.TeamMemberMembershipState = TeamMemberMembershipState = {}));
  var TeamMemberRole;
  (function(TeamMemberRole2) {
    TeamMemberRole2["Admin"] = "admin";
    TeamMemberRole2["Developer"] = "developer";
    TeamMemberRole2["ReadOnly"] = "read_only";
  })(TeamMemberRole || (exports.TeamMemberRole = TeamMemberRole = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/template.js
var require_template = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/user.js
var require_user2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ConnectionVisibility = exports.ConnectionService = exports.UserPremiumType = exports.UserFlags = undefined;
  var UserFlags;
  (function(UserFlags2) {
    UserFlags2[UserFlags2["Staff"] = 1] = "Staff";
    UserFlags2[UserFlags2["Partner"] = 2] = "Partner";
    UserFlags2[UserFlags2["Hypesquad"] = 4] = "Hypesquad";
    UserFlags2[UserFlags2["BugHunterLevel1"] = 8] = "BugHunterLevel1";
    UserFlags2[UserFlags2["MFASMS"] = 16] = "MFASMS";
    UserFlags2[UserFlags2["PremiumPromoDismissed"] = 32] = "PremiumPromoDismissed";
    UserFlags2[UserFlags2["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
    UserFlags2[UserFlags2["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
    UserFlags2[UserFlags2["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
    UserFlags2[UserFlags2["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
    UserFlags2[UserFlags2["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
    UserFlags2[UserFlags2["HasUnreadUrgentMessages"] = 8192] = "HasUnreadUrgentMessages";
    UserFlags2[UserFlags2["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
    UserFlags2[UserFlags2["VerifiedBot"] = 65536] = "VerifiedBot";
    UserFlags2[UserFlags2["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
    UserFlags2[UserFlags2["CertifiedModerator"] = 262144] = "CertifiedModerator";
    UserFlags2[UserFlags2["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
    UserFlags2[UserFlags2["Spammer"] = 1048576] = "Spammer";
    UserFlags2[UserFlags2["DisablePremium"] = 2097152] = "DisablePremium";
    UserFlags2[UserFlags2["ActiveDeveloper"] = 4194304] = "ActiveDeveloper";
    UserFlags2[UserFlags2["Quarantined"] = 17592186044416] = "Quarantined";
    UserFlags2[UserFlags2["Collaborator"] = 1125899906842624] = "Collaborator";
    UserFlags2[UserFlags2["RestrictedCollaborator"] = 2251799813685248] = "RestrictedCollaborator";
  })(UserFlags || (exports.UserFlags = UserFlags = {}));
  var UserPremiumType;
  (function(UserPremiumType2) {
    UserPremiumType2[UserPremiumType2["None"] = 0] = "None";
    UserPremiumType2[UserPremiumType2["NitroClassic"] = 1] = "NitroClassic";
    UserPremiumType2[UserPremiumType2["Nitro"] = 2] = "Nitro";
    UserPremiumType2[UserPremiumType2["NitroBasic"] = 3] = "NitroBasic";
  })(UserPremiumType || (exports.UserPremiumType = UserPremiumType = {}));
  var ConnectionService;
  (function(ConnectionService2) {
    ConnectionService2["AmazonMusic"] = "amazon-music";
    ConnectionService2["BattleNet"] = "battlenet";
    ConnectionService2["Bluesky"] = "bluesky";
    ConnectionService2["BungieNet"] = "bungie";
    ConnectionService2["Crunchyroll"] = "crunchyroll";
    ConnectionService2["Domain"] = "domain";
    ConnectionService2["eBay"] = "ebay";
    ConnectionService2["EpicGames"] = "epicgames";
    ConnectionService2["Facebook"] = "facebook";
    ConnectionService2["GitHub"] = "github";
    ConnectionService2["Instagram"] = "instagram";
    ConnectionService2["LeagueOfLegends"] = "leagueoflegends";
    ConnectionService2["Mastodon"] = "mastodon";
    ConnectionService2["PayPal"] = "paypal";
    ConnectionService2["PlayStationNetwork"] = "playstation";
    ConnectionService2["Reddit"] = "reddit";
    ConnectionService2["RiotGames"] = "riotgames";
    ConnectionService2["Roblox"] = "roblox";
    ConnectionService2["Spotify"] = "spotify";
    ConnectionService2["Skype"] = "skype";
    ConnectionService2["Steam"] = "steam";
    ConnectionService2["TikTok"] = "tiktok";
    ConnectionService2["Twitch"] = "twitch";
    ConnectionService2["X"] = "twitter";
    ConnectionService2["Twitter"] = "twitter";
    ConnectionService2["Xbox"] = "xbox";
    ConnectionService2["YouTube"] = "youtube";
  })(ConnectionService || (exports.ConnectionService = ConnectionService = {}));
  var ConnectionVisibility;
  (function(ConnectionVisibility2) {
    ConnectionVisibility2[ConnectionVisibility2["None"] = 0] = "None";
    ConnectionVisibility2[ConnectionVisibility2["Everyone"] = 1] = "Everyone";
  })(ConnectionVisibility || (exports.ConnectionVisibility = ConnectionVisibility = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/voice.js
var require_voice = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/webhook.js
var require_webhook = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WebhookType = exports.ApplicationWebhookEventType = exports.ApplicationWebhookType = undefined;
  var ApplicationWebhookType;
  (function(ApplicationWebhookType2) {
    ApplicationWebhookType2[ApplicationWebhookType2["Ping"] = 0] = "Ping";
    ApplicationWebhookType2[ApplicationWebhookType2["Event"] = 1] = "Event";
  })(ApplicationWebhookType || (exports.ApplicationWebhookType = ApplicationWebhookType = {}));
  var ApplicationWebhookEventType;
  (function(ApplicationWebhookEventType2) {
    ApplicationWebhookEventType2["ApplicationAuthorized"] = "APPLICATION_AUTHORIZED";
    ApplicationWebhookEventType2["EntitlementCreate"] = "ENTITLEMENT_CREATE";
    ApplicationWebhookEventType2["QuestUserEnrollment"] = "QUEST_USER_ENROLLMENT";
  })(ApplicationWebhookEventType || (exports.ApplicationWebhookEventType = ApplicationWebhookEventType = {}));
  var WebhookType;
  (function(WebhookType2) {
    WebhookType2[WebhookType2["Incoming"] = 1] = "Incoming";
    WebhookType2[WebhookType2["ChannelFollower"] = 2] = "ChannelFollower";
    WebhookType2[WebhookType2["Application"] = 3] = "Application";
  })(WebhookType || (exports.WebhookType = WebhookType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/payloads/v10/index.js
var require_v102 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_common2(), exports);
  __exportStar(require_application(), exports);
  __exportStar(require_auditLog(), exports);
  __exportStar(require_autoModeration(), exports);
  __exportStar(require_channel(), exports);
  __exportStar(require_emoji(), exports);
  __exportStar(require_gateway(), exports);
  __exportStar(require_guild(), exports);
  __exportStar(require_guildScheduledEvent(), exports);
  __exportStar(require_interactions(), exports);
  __exportStar(require_invite(), exports);
  __exportStar(require_monetization(), exports);
  __exportStar(require_oauth2(), exports);
  __exportStar(require_permissions2(), exports);
  __exportStar(require_poll(), exports);
  __exportStar(require_soundboard(), exports);
  __exportStar(require_stageInstance(), exports);
  __exportStar(require_sticker(), exports);
  __exportStar(require_teams(), exports);
  __exportStar(require_template(), exports);
  __exportStar(require_user2(), exports);
  __exportStar(require_voice(), exports);
  __exportStar(require_webhook(), exports);
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/utils/internals.js
var require_internals2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.urlSafeCharacters = undefined;
  var pattern = /^[\d%A-Za-z-_]+$/g;
  exports.urlSafeCharacters = {
    test(input) {
      const result = pattern.test(input);
      pattern.lastIndex = 0;
      return result;
    }
  };
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/common.js
var require_common3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Locale = exports.RESTJSONErrorCodes = undefined;
  var RESTJSONErrorCodes;
  (function(RESTJSONErrorCodes2) {
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["GeneralError"] = 0] = "GeneralError";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownAccount"] = 10001] = "UnknownAccount";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownApplication"] = 10002] = "UnknownApplication";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownChannel"] = 10003] = "UnknownChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuild"] = 10004] = "UnknownGuild";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownIntegration"] = 10005] = "UnknownIntegration";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownInvite"] = 10006] = "UnknownInvite";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownMember"] = 10007] = "UnknownMember";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownMessage"] = 10008] = "UnknownMessage";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownPermissionOverwrite"] = 10009] = "UnknownPermissionOverwrite";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownProvider"] = 10010] = "UnknownProvider";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownRole"] = 10011] = "UnknownRole";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownToken"] = 10012] = "UnknownToken";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownUser"] = 10013] = "UnknownUser";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownEmoji"] = 10014] = "UnknownEmoji";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownWebhook"] = 10015] = "UnknownWebhook";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownWebhookService"] = 10016] = "UnknownWebhookService";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSession"] = 10020] = "UnknownSession";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownAsset"] = 10021] = "UnknownAsset";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownBan"] = 10026] = "UnknownBan";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSKU"] = 10027] = "UnknownSKU";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStoreListing"] = 10028] = "UnknownStoreListing";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownEntitlement"] = 10029] = "UnknownEntitlement";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownBuild"] = 10030] = "UnknownBuild";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownLobby"] = 10031] = "UnknownLobby";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownBranch"] = 10032] = "UnknownBranch";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStoreDirectoryLayout"] = 10033] = "UnknownStoreDirectoryLayout";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownRedistributable"] = 10036] = "UnknownRedistributable";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGiftCode"] = 10038] = "UnknownGiftCode";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStream"] = 10049] = "UnknownStream";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownPremiumServerSubscribeCooldown"] = 10050] = "UnknownPremiumServerSubscribeCooldown";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildTemplate"] = 10057] = "UnknownGuildTemplate";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownDiscoverableServerCategory"] = 10059] = "UnknownDiscoverableServerCategory";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSticker"] = 10060] = "UnknownSticker";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStickerPack"] = 10061] = "UnknownStickerPack";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownInteraction"] = 10062] = "UnknownInteraction";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownApplicationCommand"] = 10063] = "UnknownApplicationCommand";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownVoiceState"] = 10065] = "UnknownVoiceState";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownApplicationCommandPermissions"] = 10066] = "UnknownApplicationCommandPermissions";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStageInstance"] = 10067] = "UnknownStageInstance";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildMemberVerificationForm"] = 10068] = "UnknownGuildMemberVerificationForm";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildWelcomeScreen"] = 10069] = "UnknownGuildWelcomeScreen";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildScheduledEvent"] = 10070] = "UnknownGuildScheduledEvent";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildScheduledEventUser"] = 10071] = "UnknownGuildScheduledEventUser";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownTag"] = 10087] = "UnknownTag";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSound"] = 10097] = "UnknownSound";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["BotsCannotUseThisEndpoint"] = 20001] = "BotsCannotUseThisEndpoint";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OnlyBotsCanUseThisEndpoint"] = 20002] = "OnlyBotsCanUseThisEndpoint";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ExplicitContentCannotBeSentToTheDesiredRecipient"] = 20009] = "ExplicitContentCannotBeSentToTheDesiredRecipient";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["NotAuthorizedToPerformThisActionOnThisApplication"] = 20012] = "NotAuthorizedToPerformThisActionOnThisApplication";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ActionCannotBePerformedDueToSlowmodeRateLimit"] = 20016] = "ActionCannotBePerformedDueToSlowmodeRateLimit";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheMazeIsntMeantForYou"] = 20017] = "TheMazeIsntMeantForYou";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OnlyTheOwnerOfThisAccountCanPerformThisAction"] = 20018] = "OnlyTheOwnerOfThisAccountCanPerformThisAction";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["AnnouncementEditLimitExceeded"] = 20022] = "AnnouncementEditLimitExceeded";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnderMinimumAge"] = 20024] = "UnderMinimumAge";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ChannelSendRateLimit"] = 20028] = "ChannelSendRateLimit";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerSendRateLimit"] = 20029] = "ServerSendRateLimit";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords"] = 20031] = "StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["GuildPremiumSubscriptionLevelTooLow"] = 20035] = "GuildPremiumSubscriptionLevelTooLow";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildsReached"] = 30001] = "MaximumNumberOfGuildsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfFriendsReached"] = 30002] = "MaximumNumberOfFriendsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPinsReachedForTheChannel"] = 30003] = "MaximumNumberOfPinsReachedForTheChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfRecipientsReached"] = 30004] = "MaximumNumberOfRecipientsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildRolesReached"] = 30005] = "MaximumNumberOfGuildRolesReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfWebhooksReached"] = 30007] = "MaximumNumberOfWebhooksReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfEmojisReached"] = 30008] = "MaximumNumberOfEmojisReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfReactionsReached"] = 30010] = "MaximumNumberOfReactionsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGroupDMsReached"] = 30011] = "MaximumNumberOfGroupDMsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildChannelsReached"] = 30013] = "MaximumNumberOfGuildChannelsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfAttachmentsInAMessageReached"] = 30015] = "MaximumNumberOfAttachmentsInAMessageReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfInvitesReached"] = 30016] = "MaximumNumberOfInvitesReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfAnimatedEmojisReached"] = 30018] = "MaximumNumberOfAnimatedEmojisReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfServerMembersReached"] = 30019] = "MaximumNumberOfServerMembersReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfServerCategoriesReached"] = 30030] = "MaximumNumberOfServerCategoriesReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["GuildAlreadyHasTemplate"] = 30031] = "GuildAlreadyHasTemplate";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfApplicationCommandsReached"] = 30032] = "MaximumNumberOfApplicationCommandsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumThreadParticipantsReached"] = 30033] = "MaximumThreadParticipantsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumDailyApplicationCommandCreatesReached"] = 30034] = "MaximumDailyApplicationCommandCreatesReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfNonGuildMemberBansHasBeenExceeded"] = 30035] = "MaximumNumberOfNonGuildMemberBansHasBeenExceeded";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfBanFetchesHasBeenReached"] = 30037] = "MaximumNumberOfBanFetchesHasBeenReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfUncompletedGuildScheduledEventsReached"] = 30038] = "MaximumNumberOfUncompletedGuildScheduledEventsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfStickersReached"] = 30039] = "MaximumNumberOfStickersReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPruneRequestsHasBeenReached"] = 30040] = "MaximumNumberOfPruneRequestsHasBeenReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached"] = 30042] = "MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfSoundboardSoundsReached"] = 30045] = "MaximumNumberOfSoundboardSoundsReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfEditsToMessagesOlderThanOneHourReached"] = 30046] = "MaximumNumberOfEditsToMessagesOlderThanOneHourReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPinnedThreadsInForumHasBeenReached"] = 30047] = "MaximumNumberOfPinnedThreadsInForumHasBeenReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfTagsInForumHasBeenReached"] = 30048] = "MaximumNumberOfTagsInForumHasBeenReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["BitrateIsTooHighForChannelOfThisType"] = 30052] = "BitrateIsTooHighForChannelOfThisType";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPremiumEmojisReached"] = 30056] = "MaximumNumberOfPremiumEmojisReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfWebhooksPerGuildReached"] = 30058] = "MaximumNumberOfWebhooksPerGuildReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfChannelPermissionOverwritesReached"] = 30060] = "MaximumNumberOfChannelPermissionOverwritesReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheChannelsForThisGuildAreTooLarge"] = 30061] = "TheChannelsForThisGuildAreTooLarge";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["Unauthorized"] = 40001] = "Unauthorized";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["VerifyYourAccount"] = 40002] = "VerifyYourAccount";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OpeningDirectMessagesTooFast"] = 40003] = "OpeningDirectMessagesTooFast";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["SendMessagesHasBeenTemporarilyDisabled"] = 40004] = "SendMessagesHasBeenTemporarilyDisabled";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["RequestEntityTooLarge"] = 40005] = "RequestEntityTooLarge";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["FeatureTemporarilyDisabledServerSide"] = 40006] = "FeatureTemporarilyDisabledServerSide";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UserBannedFromThisGuild"] = 40007] = "UserBannedFromThisGuild";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ConnectionHasBeenRevoked"] = 40012] = "ConnectionHasBeenRevoked";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OnlyConsumableSKUsCanBeConsumed"] = 40018] = "OnlyConsumableSKUsCanBeConsumed";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["YouCanOnlyDeleteSandboxEntitlements"] = 40019] = "YouCanOnlyDeleteSandboxEntitlements";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TargetUserIsNotConnectedToVoice"] = 40032] = "TargetUserIsNotConnectedToVoice";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThisMessageWasAlreadyCrossposted"] = 40033] = "ThisMessageWasAlreadyCrossposted";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ApplicationCommandWithThatNameAlreadyExists"] = 40041] = "ApplicationCommandWithThatNameAlreadyExists";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ApplicationInteractionFailedToSend"] = 40043] = "ApplicationInteractionFailedToSend";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendAMessageInAForumChannel"] = 40058] = "CannotSendAMessageInAForumChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InteractionHasAlreadyBeenAcknowledged"] = 40060] = "InteractionHasAlreadyBeenAcknowledged";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TagNamesMustBeUnique"] = 40061] = "TagNamesMustBeUnique";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServiceResourceIsBeingRateLimited"] = 40062] = "ServiceResourceIsBeingRateLimited";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThereAreNoTagsAvailableThatCanBeSetByNonModerators"] = 40066] = "ThereAreNoTagsAvailableThatCanBeSetByNonModerators";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TagRequiredToCreateAForumPostInThisChannel"] = 40067] = "TagRequiredToCreateAForumPostInThisChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["AnEntitlementHasAlreadyBeenGrantedForThisResource"] = 40074] = "AnEntitlementHasAlreadyBeenGrantedForThisResource";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages"] = 40094] = "ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CloudflareIsBlockingYourRequest"] = 40333] = "CloudflareIsBlockingYourRequest";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MissingAccess"] = 50001] = "MissingAccess";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidAccountType"] = 50002] = "InvalidAccountType";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExecuteActionOnDMChannel"] = 50003] = "CannotExecuteActionOnDMChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["GuildWidgetDisabled"] = 50004] = "GuildWidgetDisabled";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEditMessageAuthoredByAnotherUser"] = 50005] = "CannotEditMessageAuthoredByAnotherUser";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendAnEmptyMessage"] = 50006] = "CannotSendAnEmptyMessage";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendMessagesToThisUser"] = 50007] = "CannotSendMessagesToThisUser";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendMessagesInNonTextChannel"] = 50008] = "CannotSendMessagesInNonTextChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ChannelVerificationLevelTooHighForYouToGainAccess"] = 50009] = "ChannelVerificationLevelTooHighForYouToGainAccess";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OAuth2ApplicationDoesNotHaveBot"] = 50010] = "OAuth2ApplicationDoesNotHaveBot";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OAuth2ApplicationLimitReached"] = 50011] = "OAuth2ApplicationLimitReached";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidOAuth2State"] = 50012] = "InvalidOAuth2State";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MissingPermissions"] = 50013] = "MissingPermissions";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidToken"] = 50014] = "InvalidToken";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["NoteWasTooLong"] = 50015] = "NoteWasTooLong";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedTooFewOrTooManyMessagesToDelete"] = 50016] = "ProvidedTooFewOrTooManyMessagesToDelete";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidMFALevel"] = 50017] = "InvalidMFALevel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MessageCanOnlyBePinnedInTheChannelItWasSentIn"] = 50019] = "MessageCanOnlyBePinnedInTheChannelItWasSentIn";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InviteCodeInvalidOrTaken"] = 50020] = "InviteCodeInvalidOrTaken";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExecuteActionOnSystemMessage"] = 50021] = "CannotExecuteActionOnSystemMessage";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExecuteActionOnThisChannelType"] = 50024] = "CannotExecuteActionOnThisChannelType";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidOAuth2AccessToken"] = 50025] = "InvalidOAuth2AccessToken";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MissingRequiredOAuth2Scope"] = 50026] = "MissingRequiredOAuth2Scope";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidWebhookToken"] = 50027] = "InvalidWebhookToken";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidRole"] = 50028] = "InvalidRole";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidRecipients"] = 50033] = "InvalidRecipients";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OneOfTheMessagesProvidedWasTooOldForBulkDelete"] = 50034] = "OneOfTheMessagesProvidedWasTooOldForBulkDelete";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidFormBodyOrContentType"] = 50035] = "InvalidFormBodyOrContentType";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InviteAcceptedToGuildWithoutTheBotBeingIn"] = 50036] = "InviteAcceptedToGuildWithoutTheBotBeingIn";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidActivityAction"] = 50039] = "InvalidActivityAction";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidAPIVersion"] = 50041] = "InvalidAPIVersion";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["FileUploadedExceedsMaximumSize"] = 50045] = "FileUploadedExceedsMaximumSize";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidFileUploaded"] = 50046] = "InvalidFileUploaded";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSelfRedeemThisGift"] = 50054] = "CannotSelfRedeemThisGift";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidGuild"] = 50055] = "InvalidGuild";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidSKU"] = 50057] = "InvalidSKU";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidRequestOrigin"] = 50067] = "InvalidRequestOrigin";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidMessageType"] = 50068] = "InvalidMessageType";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["PaymentSourceRequiredToRedeemGift"] = 50070] = "PaymentSourceRequiredToRedeemGift";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotModifyASystemWebhook"] = 50073] = "CannotModifyASystemWebhook";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotDeleteChannelRequiredForCommunityGuilds"] = 50074] = "CannotDeleteChannelRequiredForCommunityGuilds";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEditStickersWithinMessage"] = 50080] = "CannotEditStickersWithinMessage";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidStickerSent"] = 50081] = "InvalidStickerSent";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidActionOnArchivedThread"] = 50083] = "InvalidActionOnArchivedThread";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidThreadNotificationSettings"] = 50084] = "InvalidThreadNotificationSettings";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ParameterEarlierThanCreation"] = 50085] = "ParameterEarlierThanCreation";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CommunityServerChannelsMustBeTextChannels"] = 50086] = "CommunityServerChannelsMustBeTextChannels";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor"] = 50091] = "TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerNotAvailableInYourLocation"] = 50095] = "ServerNotAvailableInYourLocation";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerNeedsMonetizationEnabledToPerformThisAction"] = 50097] = "ServerNeedsMonetizationEnabledToPerformThisAction";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerNeedsMoreBoostsToPerformThisAction"] = 50101] = "ServerNeedsMoreBoostsToPerformThisAction";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["RequestBodyContainsInvalidJSON"] = 50109] = "RequestBodyContainsInvalidJSON";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileIsInvalid"] = 50110] = "ProvidedFileIsInvalid";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileTypeIsInvalid"] = 50123] = "ProvidedFileTypeIsInvalid";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileDurationExceedsMaximumLength"] = 50124] = "ProvidedFileDurationExceedsMaximumLength";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OwnerCannotBePendingMember"] = 50131] = "OwnerCannotBePendingMember";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["OwnershipCannotBeMovedToABotUser"] = 50132] = "OwnershipCannotBeMovedToABotUser";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["FailedToResizeAssetBelowTheMinimumSize"] = 50138] = "FailedToResizeAssetBelowTheMinimumSize";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji"] = 50144] = "CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotConvertBetweenPremiumEmojiAndNormalEmoji"] = 50145] = "CannotConvertBetweenPremiumEmojiAndNormalEmoji";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UploadedFileNotFound"] = 50146] = "UploadedFileNotFound";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["SpecifiedEmojiIsInvalid"] = 50151] = "SpecifiedEmojiIsInvalid";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesDoNotSupportAdditionalContent"] = 50159] = "VoiceMessagesDoNotSupportAdditionalContent";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesMustHaveASingleAudioAttachment"] = 50160] = "VoiceMessagesMustHaveASingleAudioAttachment";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesMustHaveSupportingMetadata"] = 50161] = "VoiceMessagesMustHaveSupportingMetadata";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesCannotBeEdited"] = 50162] = "VoiceMessagesCannotBeEdited";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotDeleteGuildSubscriptionIntegration"] = 50163] = "CannotDeleteGuildSubscriptionIntegration";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["YouCannotSendVoiceMessagesInThisChannel"] = 50173] = "YouCannotSendVoiceMessagesInThisChannel";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheUserAccountMustFirstBeVerified"] = 50178] = "TheUserAccountMustFirstBeVerified";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileDoesNotHaveAValidDuration"] = 50192] = "ProvidedFileDoesNotHaveAValidDuration";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["YouDoNotHavePermissionToSendThisSticker"] = 50600] = "YouDoNotHavePermissionToSendThisSticker";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TwoFactorAuthenticationIsRequired"] = 60003] = "TwoFactorAuthenticationIsRequired";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["NoUsersWithDiscordTagExist"] = 80004] = "NoUsersWithDiscordTagExist";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ReactionWasBlocked"] = 90001] = "ReactionWasBlocked";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UserCannotUseBurstReactions"] = 90002] = "UserCannotUseBurstReactions";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ApplicationNotYetAvailable"] = 110001] = "ApplicationNotYetAvailable";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["APIResourceOverloaded"] = 130000] = "APIResourceOverloaded";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheStageIsAlreadyOpen"] = 150006] = "TheStageIsAlreadyOpen";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotReplyWithoutPermissionToReadMessageHistory"] = 160002] = "CannotReplyWithoutPermissionToReadMessageHistory";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThreadAlreadyCreatedForMessage"] = 160004] = "ThreadAlreadyCreatedForMessage";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThreadLocked"] = 160005] = "ThreadLocked";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumActiveThreads"] = 160006] = "MaximumActiveThreads";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumActiveAnnouncementThreads"] = 160007] = "MaximumActiveAnnouncementThreads";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidJSONForUploadedLottieFile"] = 170001] = "InvalidJSONForUploadedLottieFile";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["UploadedLottiesCannotContainRasterizedImages"] = 170002] = "UploadedLottiesCannotContainRasterizedImages";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerMaximumFramerateExceeded"] = 170003] = "StickerMaximumFramerateExceeded";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerFrameCountExceedsMaximumOf1000Frames"] = 170004] = "StickerFrameCountExceedsMaximumOf1000Frames";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["LottieAnimationMaximumDimensionsExceeded"] = 170005] = "LottieAnimationMaximumDimensionsExceeded";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerFramerateIsTooSmallOrTooLarge"] = 170006] = "StickerFramerateIsTooSmallOrTooLarge";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerAnimationDurationExceedsMaximumOf5Seconds"] = 170007] = "StickerAnimationDurationExceedsMaximumOf5Seconds";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotUpdateAFinishedEvent"] = 180000] = "CannotUpdateAFinishedEvent";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["FailedToCreateStageNeededForStageEvent"] = 180002] = "FailedToCreateStageNeededForStageEvent";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MessageWasBlockedByAutomaticModeration"] = 200000] = "MessageWasBlockedByAutomaticModeration";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["TitleWasBlockedByAutomaticModeration"] = 200001] = "TitleWasBlockedByAutomaticModeration";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId"] = 220001] = "WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId"] = 220002] = "WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhooksCanOnlyCreateThreadsInForumChannels"] = 220003] = "WebhooksCanOnlyCreateThreadsInForumChannels";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhookServicesCannotBeUsedInForumChannels"] = 220004] = "WebhookServicesCannotBeUsedInForumChannels";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["MessageBlockedByHarmfulLinksFilter"] = 240000] = "MessageBlockedByHarmfulLinksFilter";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEnableOnboardingRequirementsAreNotMet"] = 350000] = "CannotEnableOnboardingRequirementsAreNotMet";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotUpdateOnboardingWhileBelowRequirements"] = 350001] = "CannotUpdateOnboardingWhileBelowRequirements";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["FailedToBanUsers"] = 500000] = "FailedToBanUsers";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["PollVotingBlocked"] = 520000] = "PollVotingBlocked";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["PollExpired"] = 520001] = "PollExpired";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidChannelTypeForPollCreation"] = 520002] = "InvalidChannelTypeForPollCreation";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEditAPollMessage"] = 520003] = "CannotEditAPollMessage";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotUseAnEmojiIncludedWithThePoll"] = 520004] = "CannotUseAnEmojiIncludedWithThePoll";
    RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExpireANonPollMessage"] = 520006] = "CannotExpireANonPollMessage";
  })(RESTJSONErrorCodes || (exports.RESTJSONErrorCodes = RESTJSONErrorCodes = {}));
  var Locale;
  (function(Locale2) {
    Locale2["Indonesian"] = "id";
    Locale2["EnglishUS"] = "en-US";
    Locale2["EnglishGB"] = "en-GB";
    Locale2["Bulgarian"] = "bg";
    Locale2["ChineseCN"] = "zh-CN";
    Locale2["ChineseTW"] = "zh-TW";
    Locale2["Croatian"] = "hr";
    Locale2["Czech"] = "cs";
    Locale2["Danish"] = "da";
    Locale2["Dutch"] = "nl";
    Locale2["Finnish"] = "fi";
    Locale2["French"] = "fr";
    Locale2["German"] = "de";
    Locale2["Greek"] = "el";
    Locale2["Hindi"] = "hi";
    Locale2["Hungarian"] = "hu";
    Locale2["Italian"] = "it";
    Locale2["Japanese"] = "ja";
    Locale2["Korean"] = "ko";
    Locale2["Lithuanian"] = "lt";
    Locale2["Norwegian"] = "no";
    Locale2["Polish"] = "pl";
    Locale2["PortugueseBR"] = "pt-BR";
    Locale2["Romanian"] = "ro";
    Locale2["Russian"] = "ru";
    Locale2["SpanishES"] = "es-ES";
    Locale2["SpanishLATAM"] = "es-419";
    Locale2["Swedish"] = "sv-SE";
    Locale2["Thai"] = "th";
    Locale2["Turkish"] = "tr";
    Locale2["Ukrainian"] = "uk";
    Locale2["Vietnamese"] = "vi";
  })(Locale || (exports.Locale = Locale = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/application.js
var require_application2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/auditLog.js
var require_auditLog2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/autoModeration.js
var require_autoModeration2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/channel.js
var require_channel3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ReactionType = undefined;
  var ReactionType;
  (function(ReactionType2) {
    ReactionType2[ReactionType2["Normal"] = 0] = "Normal";
    ReactionType2[ReactionType2["Super"] = 1] = "Super";
  })(ReactionType || (exports.ReactionType = ReactionType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/emoji.js
var require_emoji2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/gateway.js
var require_gateway2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/guild.js
var require_guild2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/guildScheduledEvent.js
var require_guildScheduledEvent2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/interactions.js
var require_interactions2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/invite.js
var require_invite2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/monetization.js
var require_monetization2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EntitlementOwnerType = undefined;
  var EntitlementOwnerType;
  (function(EntitlementOwnerType2) {
    EntitlementOwnerType2[EntitlementOwnerType2["Guild"] = 1] = "Guild";
    EntitlementOwnerType2[EntitlementOwnerType2["User"] = 2] = "User";
  })(EntitlementOwnerType || (exports.EntitlementOwnerType = EntitlementOwnerType = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/oauth2.js
var require_oauth22 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/poll.js
var require_poll2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/soundboard.js
var require_soundboard2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/stageInstance.js
var require_stageInstance2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/sticker.js
var require_sticker2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/template.js
var require_template2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/user.js
var require_user3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/voice.js
var require_voice2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/webhook.js
var require_webhook2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rest/v10/index.js
var require_v103 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OAuth2Routes = exports.RouteBases = exports.CDNRoutes = exports.ImageFormat = exports.StickerPackApplicationId = exports.Routes = exports.APIVersion = undefined;
  var internals_1 = require_internals2();
  __exportStar(require_common3(), exports);
  __exportStar(require_application2(), exports);
  __exportStar(require_auditLog2(), exports);
  __exportStar(require_autoModeration2(), exports);
  __exportStar(require_channel3(), exports);
  __exportStar(require_emoji2(), exports);
  __exportStar(require_gateway2(), exports);
  __exportStar(require_guild2(), exports);
  __exportStar(require_guildScheduledEvent2(), exports);
  __exportStar(require_interactions2(), exports);
  __exportStar(require_invite2(), exports);
  __exportStar(require_monetization2(), exports);
  __exportStar(require_oauth22(), exports);
  __exportStar(require_poll2(), exports);
  __exportStar(require_soundboard2(), exports);
  __exportStar(require_stageInstance2(), exports);
  __exportStar(require_sticker2(), exports);
  __exportStar(require_template2(), exports);
  __exportStar(require_user3(), exports);
  __exportStar(require_voice2(), exports);
  __exportStar(require_webhook2(), exports);
  exports.APIVersion = "10";
  exports.Routes = {
    applicationRoleConnectionMetadata(applicationId) {
      return `/applications/${applicationId}/role-connections/metadata`;
    },
    guildAutoModerationRules(guildId) {
      return `/guilds/${guildId}/auto-moderation/rules`;
    },
    guildAutoModerationRule(guildId, ruleId) {
      return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
    },
    guildAuditLog(guildId) {
      return `/guilds/${guildId}/audit-logs`;
    },
    channel(channelId) {
      return `/channels/${channelId}`;
    },
    channelMessages(channelId) {
      return `/channels/${channelId}/messages`;
    },
    channelMessage(channelId, messageId) {
      return `/channels/${channelId}/messages/${messageId}`;
    },
    channelMessageCrosspost(channelId, messageId) {
      return `/channels/${channelId}/messages/${messageId}/crosspost`;
    },
    channelMessageOwnReaction(channelId, messageId, emoji) {
      return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
    },
    channelMessageUserReaction(channelId, messageId, emoji, userId) {
      return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
    },
    channelMessageReaction(channelId, messageId, emoji) {
      return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
    },
    channelMessageAllReactions(channelId, messageId) {
      return `/channels/${channelId}/messages/${messageId}/reactions`;
    },
    channelBulkDelete(channelId) {
      return `/channels/${channelId}/messages/bulk-delete`;
    },
    channelPermission(channelId, overwriteId) {
      return `/channels/${channelId}/permissions/${overwriteId}`;
    },
    channelInvites(channelId) {
      return `/channels/${channelId}/invites`;
    },
    channelFollowers(channelId) {
      return `/channels/${channelId}/followers`;
    },
    channelTyping(channelId) {
      return `/channels/${channelId}/typing`;
    },
    channelPins(channelId) {
      return `/channels/${channelId}/pins`;
    },
    channelPin(channelId, messageId) {
      return `/channels/${channelId}/pins/${messageId}`;
    },
    channelRecipient(channelId, userId) {
      return `/channels/${channelId}/recipients/${userId}`;
    },
    guildEmojis(guildId) {
      return `/guilds/${guildId}/emojis`;
    },
    guildEmoji(guildId, emojiId) {
      return `/guilds/${guildId}/emojis/${emojiId}`;
    },
    guilds() {
      return "/guilds";
    },
    guild(guildId) {
      return `/guilds/${guildId}`;
    },
    guildPreview(guildId) {
      return `/guilds/${guildId}/preview`;
    },
    guildChannels(guildId) {
      return `/guilds/${guildId}/channels`;
    },
    guildMember(guildId, userId = "@me") {
      return `/guilds/${guildId}/members/${userId}`;
    },
    guildMembers(guildId) {
      return `/guilds/${guildId}/members`;
    },
    guildMembersSearch(guildId) {
      return `/guilds/${guildId}/members/search`;
    },
    guildCurrentMemberNickname(guildId) {
      return `/guilds/${guildId}/members/@me/nick`;
    },
    guildMemberRole(guildId, memberId, roleId) {
      return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
    },
    guildMFA(guildId) {
      return `/guilds/${guildId}/mfa`;
    },
    guildBans(guildId) {
      return `/guilds/${guildId}/bans`;
    },
    guildBan(guildId, userId) {
      return `/guilds/${guildId}/bans/${userId}`;
    },
    guildRoles(guildId) {
      return `/guilds/${guildId}/roles`;
    },
    guildRole(guildId, roleId) {
      return `/guilds/${guildId}/roles/${roleId}`;
    },
    guildPrune(guildId) {
      return `/guilds/${guildId}/prune`;
    },
    guildVoiceRegions(guildId) {
      return `/guilds/${guildId}/regions`;
    },
    guildInvites(guildId) {
      return `/guilds/${guildId}/invites`;
    },
    guildIntegrations(guildId) {
      return `/guilds/${guildId}/integrations`;
    },
    guildIntegration(guildId, integrationId) {
      return `/guilds/${guildId}/integrations/${integrationId}`;
    },
    guildWidgetSettings(guildId) {
      return `/guilds/${guildId}/widget`;
    },
    guildWidgetJSON(guildId) {
      return `/guilds/${guildId}/widget.json`;
    },
    guildVanityUrl(guildId) {
      return `/guilds/${guildId}/vanity-url`;
    },
    guildWidgetImage(guildId) {
      return `/guilds/${guildId}/widget.png`;
    },
    invite(code) {
      return `/invites/${code}`;
    },
    template(code) {
      return `/guilds/templates/${code}`;
    },
    guildTemplates(guildId) {
      return `/guilds/${guildId}/templates`;
    },
    guildTemplate(guildId, code) {
      return `/guilds/${guildId}/templates/${code}`;
    },
    pollAnswerVoters(channelId, messageId, answerId) {
      return `/channels/${channelId}/polls/${messageId}/answers/${answerId}`;
    },
    expirePoll(channelId, messageId) {
      return `/channels/${channelId}/polls/${messageId}/expire`;
    },
    threads(parentId, messageId) {
      const parts = ["", "channels", parentId];
      if (messageId)
        parts.push("messages", messageId);
      parts.push("threads");
      return parts.join("/");
    },
    guildActiveThreads(guildId) {
      return `/guilds/${guildId}/threads/active`;
    },
    channelThreads(channelId, archivedStatus) {
      return `/channels/${channelId}/threads/archived/${archivedStatus}`;
    },
    channelJoinedArchivedThreads(channelId) {
      return `/channels/${channelId}/users/@me/threads/archived/private`;
    },
    threadMembers(threadId, userId) {
      const parts = ["", "channels", threadId, "thread-members"];
      if (userId)
        parts.push(userId);
      return parts.join("/");
    },
    user(userId = "@me") {
      return `/users/${userId}`;
    },
    userApplicationRoleConnection(applicationId) {
      return `/users/@me/applications/${applicationId}/role-connection`;
    },
    userGuilds() {
      return `/users/@me/guilds`;
    },
    userGuildMember(guildId) {
      return `/users/@me/guilds/${guildId}/member`;
    },
    userGuild(guildId) {
      return `/users/@me/guilds/${guildId}`;
    },
    userChannels() {
      return `/users/@me/channels`;
    },
    userConnections() {
      return `/users/@me/connections`;
    },
    voiceRegions() {
      return `/voice/regions`;
    },
    channelWebhooks(channelId) {
      return `/channels/${channelId}/webhooks`;
    },
    guildWebhooks(guildId) {
      return `/guilds/${guildId}/webhooks`;
    },
    webhook(webhookId, webhookToken) {
      const parts = ["", "webhooks", webhookId];
      if (webhookToken)
        parts.push(webhookToken);
      return parts.join("/");
    },
    webhookMessage(webhookId, webhookToken, messageId = "@original") {
      return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
    },
    webhookPlatform(webhookId, webhookToken, platform) {
      return `/webhooks/${webhookId}/${webhookToken}/${platform}`;
    },
    gateway() {
      return `/gateway`;
    },
    gatewayBot() {
      return `/gateway/bot`;
    },
    oauth2CurrentApplication() {
      return `/oauth2/applications/@me`;
    },
    oauth2CurrentAuthorization() {
      return `/oauth2/@me`;
    },
    oauth2Authorization() {
      return `/oauth2/authorize`;
    },
    oauth2TokenExchange() {
      return `/oauth2/token`;
    },
    oauth2TokenRevocation() {
      return `/oauth2/token/revoke`;
    },
    applicationCommands(applicationId) {
      return `/applications/${applicationId}/commands`;
    },
    applicationCommand(applicationId, commandId) {
      return `/applications/${applicationId}/commands/${commandId}`;
    },
    applicationGuildCommands(applicationId, guildId) {
      return `/applications/${applicationId}/guilds/${guildId}/commands`;
    },
    applicationGuildCommand(applicationId, guildId, commandId) {
      return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
    },
    interactionCallback(interactionId, interactionToken) {
      return `/interactions/${interactionId}/${interactionToken}/callback`;
    },
    guildMemberVerification(guildId) {
      return `/guilds/${guildId}/member-verification`;
    },
    guildVoiceState(guildId, userId = "@me") {
      return `/guilds/${guildId}/voice-states/${userId}`;
    },
    guildApplicationCommandsPermissions(applicationId, guildId) {
      return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
    },
    applicationCommandPermissions(applicationId, guildId, commandId) {
      return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
    },
    guildWelcomeScreen(guildId) {
      return `/guilds/${guildId}/welcome-screen`;
    },
    stageInstances() {
      return `/stage-instances`;
    },
    stageInstance(channelId) {
      return `/stage-instances/${channelId}`;
    },
    sticker(stickerId) {
      return `/stickers/${stickerId}`;
    },
    stickerPacks() {
      return "/sticker-packs";
    },
    stickerPack(packId) {
      return `/sticker-packs/${packId}`;
    },
    nitroStickerPacks() {
      return "/sticker-packs";
    },
    guildStickers(guildId) {
      return `/guilds/${guildId}/stickers`;
    },
    guildSticker(guildId, stickerId) {
      return `/guilds/${guildId}/stickers/${stickerId}`;
    },
    guildScheduledEvents(guildId) {
      return `/guilds/${guildId}/scheduled-events`;
    },
    guildScheduledEvent(guildId, guildScheduledEventId) {
      return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
    },
    guildScheduledEventUsers(guildId, guildScheduledEventId) {
      return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
    },
    guildOnboarding(guildId) {
      return `/guilds/${guildId}/onboarding`;
    },
    guildIncidentActions(guildId) {
      return `/guilds/${guildId}/incident-actions`;
    },
    currentApplication() {
      return "/applications/@me";
    },
    entitlements(applicationId) {
      return `/applications/${applicationId}/entitlements`;
    },
    entitlement(applicationId, entitlementId) {
      return `/applications/${applicationId}/entitlements/${entitlementId}`;
    },
    skus(applicationId) {
      return `/applications/${applicationId}/skus`;
    },
    guildBulkBan(guildId) {
      return `/guilds/${guildId}/bulk-ban`;
    },
    consumeEntitlement(applicationId, entitlementId) {
      return `/applications/${applicationId}/entitlements/${entitlementId}/consume`;
    },
    applicationEmojis(applicationId) {
      return `/applications/${applicationId}/emojis`;
    },
    applicationEmoji(applicationId, emojiId) {
      return `/applications/${applicationId}/emojis/${emojiId}`;
    },
    skuSubscriptions(skuId) {
      return `/skus/${skuId}/subscriptions`;
    },
    skuSubscription(skuId, subscriptionId) {
      return `/skus/${skuId}/subscriptions/${subscriptionId}`;
    },
    sendSoundboardSound(channelId) {
      return `/channels/${channelId}/send-soundboard-sound`;
    },
    soundboardDefaultSounds() {
      return "/soundboard-default-sounds";
    },
    guildSoundboardSounds(guildId) {
      return `/guilds/${guildId}/soundboard-sounds`;
    },
    guildSoundboardSound(guildId, soundId) {
      return `/guilds/${guildId}/soundboard-sounds/${soundId}`;
    }
  };
  for (const [key, fn] of Object.entries(exports.Routes)) {
    exports.Routes[key] = (...args) => {
      const escaped = args.map((arg) => {
        if (arg) {
          if (internals_1.urlSafeCharacters.test(String(arg))) {
            return arg;
          }
          return encodeURIComponent(arg);
        }
        return arg;
      });
      return fn.call(null, ...escaped);
    };
  }
  Object.freeze(exports.Routes);
  exports.StickerPackApplicationId = "710982414301790216";
  var ImageFormat;
  (function(ImageFormat2) {
    ImageFormat2["JPEG"] = "jpeg";
    ImageFormat2["PNG"] = "png";
    ImageFormat2["WebP"] = "webp";
    ImageFormat2["GIF"] = "gif";
    ImageFormat2["Lottie"] = "json";
  })(ImageFormat || (exports.ImageFormat = ImageFormat = {}));
  exports.CDNRoutes = {
    emoji(emojiId, format) {
      return `/emojis/${emojiId}.${format}`;
    },
    guildIcon(guildId, guildIcon, format) {
      return `/icons/${guildId}/${guildIcon}.${format}`;
    },
    guildSplash(guildId, guildSplash, format) {
      return `/splashes/${guildId}/${guildSplash}.${format}`;
    },
    guildDiscoverySplash(guildId, guildDiscoverySplash, format) {
      return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`;
    },
    guildBanner(guildId, guildBanner, format) {
      return `/banners/${guildId}/${guildBanner}.${format}`;
    },
    userBanner(userId, userBanner, format) {
      return `/banners/${userId}/${userBanner}.${format}`;
    },
    defaultUserAvatar(index) {
      return `/embed/avatars/${index}.png`;
    },
    userAvatar(userId, userAvatar, format) {
      return `/avatars/${userId}/${userAvatar}.${format}`;
    },
    guildMemberAvatar(guildId, userId, memberAvatar, format) {
      return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`;
    },
    userAvatarDecoration(userId, userAvatarDecoration) {
      return `/avatar-decorations/${userId}/${userAvatarDecoration}.png`;
    },
    avatarDecoration(avatarDecorationDataAsset) {
      return `/avatar-decoration-presets/${avatarDecorationDataAsset}.png`;
    },
    applicationIcon(applicationId, applicationIcon, format) {
      return `/app-icons/${applicationId}/${applicationIcon}.${format}`;
    },
    applicationCover(applicationId, applicationCoverImage, format) {
      return `/app-icons/${applicationId}/${applicationCoverImage}.${format}`;
    },
    applicationAsset(applicationId, applicationAssetId, format) {
      return `/app-assets/${applicationId}/${applicationAssetId}.${format}`;
    },
    achievementIcon(applicationId, achievementId, achievementIconHash, format) {
      return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}`;
    },
    stickerPackBanner(stickerPackBannerAssetId, format) {
      return `/app-assets/${exports.StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}`;
    },
    storePageAsset(applicationId, assetId, format = ImageFormat.PNG) {
      return `/app-assets/${applicationId}/store/${assetId}.${format}`;
    },
    teamIcon(teamId, teamIcon, format) {
      return `/team-icons/${teamId}/${teamIcon}.${format}`;
    },
    sticker(stickerId, format) {
      return `/stickers/${stickerId}.${format}`;
    },
    roleIcon(roleId, roleIcon, format) {
      return `/role-icons/${roleId}/${roleIcon}.${format}`;
    },
    guildScheduledEventCover(guildScheduledEventId, guildScheduledEventCoverImage, format) {
      return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`;
    },
    guildMemberBanner(guildId, userId, guildMemberBanner, format) {
      return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`;
    },
    soundboardSound(soundId) {
      return `/soundboard-sounds/${soundId}`;
    }
  };
  for (const [key, fn] of Object.entries(exports.CDNRoutes)) {
    exports.CDNRoutes[key] = (...args) => {
      const escaped = args.map((arg) => {
        if (arg) {
          if (internals_1.urlSafeCharacters.test(String(arg))) {
            return arg;
          }
          return encodeURIComponent(arg);
        }
        return arg;
      });
      return fn.call(null, ...escaped);
    };
  }
  Object.freeze(exports.CDNRoutes);
  exports.RouteBases = {
    api: `https://discord.com/api/v${exports.APIVersion}`,
    cdn: "https://cdn.discordapp.com",
    media: "https://media.discordapp.net",
    invite: "https://discord.gg",
    template: "https://discord.new",
    gift: "https://discord.gift",
    scheduledEvent: "https://discord.com/events"
  };
  Object.freeze(exports.RouteBases);
  exports.OAuth2Routes = {
    authorizationURL: `${exports.RouteBases.api}${exports.Routes.oauth2Authorization()}`,
    tokenURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenExchange()}`,
    tokenRevocationURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenRevocation()}`
  };
  Object.freeze(exports.OAuth2Routes);
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rpc/common.js
var require_common4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RPCCloseEventCodes = exports.RPCErrorCodes = exports.RelationshipType = exports.VoiceConnectionStates = exports.RPCVoiceShortcutKeyComboKeyType = exports.RPCVoiceSettingsModeType = exports.RPCDeviceType = undefined;
  var RPCDeviceType;
  (function(RPCDeviceType2) {
    RPCDeviceType2["AudioInput"] = "audioinput";
    RPCDeviceType2["AudioOutput"] = "audiooutput";
    RPCDeviceType2["VideoInput"] = "videoinput";
  })(RPCDeviceType || (exports.RPCDeviceType = RPCDeviceType = {}));
  var RPCVoiceSettingsModeType;
  (function(RPCVoiceSettingsModeType2) {
    RPCVoiceSettingsModeType2["PushToTalk"] = "PUSH_TO_TALK";
    RPCVoiceSettingsModeType2["VoiceActivity"] = "VOICE_ACTIVITY";
  })(RPCVoiceSettingsModeType || (exports.RPCVoiceSettingsModeType = RPCVoiceSettingsModeType = {}));
  var RPCVoiceShortcutKeyComboKeyType;
  (function(RPCVoiceShortcutKeyComboKeyType2) {
    RPCVoiceShortcutKeyComboKeyType2[RPCVoiceShortcutKeyComboKeyType2["KeyboardKey"] = 0] = "KeyboardKey";
    RPCVoiceShortcutKeyComboKeyType2[RPCVoiceShortcutKeyComboKeyType2["MouseButton"] = 1] = "MouseButton";
    RPCVoiceShortcutKeyComboKeyType2[RPCVoiceShortcutKeyComboKeyType2["KeyboardModifierKey"] = 2] = "KeyboardModifierKey";
    RPCVoiceShortcutKeyComboKeyType2[RPCVoiceShortcutKeyComboKeyType2["GamepadButton"] = 3] = "GamepadButton";
  })(RPCVoiceShortcutKeyComboKeyType || (exports.RPCVoiceShortcutKeyComboKeyType = RPCVoiceShortcutKeyComboKeyType = {}));
  var VoiceConnectionStates;
  (function(VoiceConnectionStates2) {
    VoiceConnectionStates2["Disconnected"] = "DISCONNECTED";
    VoiceConnectionStates2["AwaitingEndpoint"] = "AWAITING_ENDPOINT";
    VoiceConnectionStates2["Authenticating"] = "AUTHENTICATING";
    VoiceConnectionStates2["Connecting"] = "CONNECTING";
    VoiceConnectionStates2["Connected"] = "CONNECTED";
    VoiceConnectionStates2["VoiceDisconnected"] = "VOICE_DISCONNECTED";
    VoiceConnectionStates2["VoiceConnecting"] = "VOICE_CONNECTING";
    VoiceConnectionStates2["VoiceConnected"] = "VOICE_CONNECTED";
    VoiceConnectionStates2["NoRoute"] = "NO_ROUTE";
    VoiceConnectionStates2["IceChecking"] = "ICE_CHECKING";
  })(VoiceConnectionStates || (exports.VoiceConnectionStates = VoiceConnectionStates = {}));
  var RelationshipType;
  (function(RelationshipType2) {
    RelationshipType2[RelationshipType2["None"] = 0] = "None";
    RelationshipType2[RelationshipType2["Friend"] = 1] = "Friend";
    RelationshipType2[RelationshipType2["Blocked"] = 2] = "Blocked";
    RelationshipType2[RelationshipType2["PendingIncoming"] = 3] = "PendingIncoming";
    RelationshipType2[RelationshipType2["PendingOutgoing"] = 4] = "PendingOutgoing";
    RelationshipType2[RelationshipType2["Implicit"] = 5] = "Implicit";
  })(RelationshipType || (exports.RelationshipType = RelationshipType = {}));
  var RPCErrorCodes;
  (function(RPCErrorCodes2) {
    RPCErrorCodes2[RPCErrorCodes2["UnknownError"] = 1000] = "UnknownError";
    RPCErrorCodes2[RPCErrorCodes2["ServiceUnavailable"] = 1001] = "ServiceUnavailable";
    RPCErrorCodes2[RPCErrorCodes2["TransactionAborted"] = 1002] = "TransactionAborted";
    RPCErrorCodes2[RPCErrorCodes2["InvalidPayload"] = 4000] = "InvalidPayload";
    RPCErrorCodes2[RPCErrorCodes2["InvalidCommand"] = 4002] = "InvalidCommand";
    RPCErrorCodes2[RPCErrorCodes2["InvalidGuild"] = 4003] = "InvalidGuild";
    RPCErrorCodes2[RPCErrorCodes2["InvalidEvent"] = 4004] = "InvalidEvent";
    RPCErrorCodes2[RPCErrorCodes2["InvalidChannel"] = 4005] = "InvalidChannel";
    RPCErrorCodes2[RPCErrorCodes2["InvalidPermissions"] = 4006] = "InvalidPermissions";
    RPCErrorCodes2[RPCErrorCodes2["InvalidClientId"] = 4007] = "InvalidClientId";
    RPCErrorCodes2[RPCErrorCodes2["InvalidOrigin"] = 4008] = "InvalidOrigin";
    RPCErrorCodes2[RPCErrorCodes2["InvalidToken"] = 4009] = "InvalidToken";
    RPCErrorCodes2[RPCErrorCodes2["InvalidUser"] = 4010] = "InvalidUser";
    RPCErrorCodes2[RPCErrorCodes2["InvalidInvite"] = 4011] = "InvalidInvite";
    RPCErrorCodes2[RPCErrorCodes2["InvalidActivityJoinRequest"] = 4012] = "InvalidActivityJoinRequest";
    RPCErrorCodes2[RPCErrorCodes2["InvalidEntitlement"] = 4013] = "InvalidEntitlement";
    RPCErrorCodes2[RPCErrorCodes2["InvalidGiftCode"] = 4014] = "InvalidGiftCode";
    RPCErrorCodes2[RPCErrorCodes2["OAuth2Error"] = 5000] = "OAuth2Error";
    RPCErrorCodes2[RPCErrorCodes2["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
    RPCErrorCodes2[RPCErrorCodes2["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
    RPCErrorCodes2[RPCErrorCodes2["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
    RPCErrorCodes2[RPCErrorCodes2["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
    RPCErrorCodes2[RPCErrorCodes2["InvalidActivitySecret"] = 5005] = "InvalidActivitySecret";
    RPCErrorCodes2[RPCErrorCodes2["NoEligibleActivity"] = 5006] = "NoEligibleActivity";
    RPCErrorCodes2[RPCErrorCodes2["PurchaseCanceled"] = 5007] = "PurchaseCanceled";
    RPCErrorCodes2[RPCErrorCodes2["PurchaseError"] = 5008] = "PurchaseError";
    RPCErrorCodes2[RPCErrorCodes2["UnauthorizedForAchievement"] = 5009] = "UnauthorizedForAchievement";
    RPCErrorCodes2[RPCErrorCodes2["RateLimited"] = 5010] = "RateLimited";
  })(RPCErrorCodes || (exports.RPCErrorCodes = RPCErrorCodes = {}));
  var RPCCloseEventCodes;
  (function(RPCCloseEventCodes2) {
    RPCCloseEventCodes2[RPCCloseEventCodes2["CloseNormal"] = 1000] = "CloseNormal";
    RPCCloseEventCodes2[RPCCloseEventCodes2["CloseUnsupported"] = 1003] = "CloseUnsupported";
    RPCCloseEventCodes2[RPCCloseEventCodes2["CloseAbnormal"] = 1006] = "CloseAbnormal";
    RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidClientId"] = 4000] = "InvalidClientId";
    RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidOrigin"] = 4001] = "InvalidOrigin";
    RPCCloseEventCodes2[RPCCloseEventCodes2["RateLimited"] = 4002] = "RateLimited";
    RPCCloseEventCodes2[RPCCloseEventCodes2["TokenRevoked"] = 4003] = "TokenRevoked";
    RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidVersion"] = 4004] = "InvalidVersion";
    RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidEncoding"] = 4005] = "InvalidEncoding";
  })(RPCCloseEventCodes || (exports.RPCCloseEventCodes = RPCCloseEventCodes = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/rpc/v10.js
var require_v104 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RPCEvents = exports.RPCCommands = exports.RPCVersion = undefined;
  __exportStar(require_common4(), exports);
  exports.RPCVersion = "1";
  var RPCCommands;
  (function(RPCCommands2) {
    RPCCommands2["AcceptActivityInvite"] = "ACCEPT_ACTIVITY_INVITE";
    RPCCommands2["ActivityInviteUser"] = "ACTIVITY_INVITE_USER";
    RPCCommands2["Authenticate"] = "AUTHENTICATE";
    RPCCommands2["Authorize"] = "AUTHORIZE";
    RPCCommands2["BraintreePopupBridgeCallback"] = "BRAINTREE_POPUP_BRIDGE_CALLBACK";
    RPCCommands2["BrowserHandoff"] = "BROWSER_HANDOFF";
    RPCCommands2["CloseActivityJoinRequest"] = "CLOSE_ACTIVITY_JOIN_REQUEST";
    RPCCommands2["ConnectionsCallback"] = "CONNECTIONS_CALLBACK";
    RPCCommands2["CreateChannelInvite"] = "CREATE_CHANNEL_INVITE";
    RPCCommands2["DeepLink"] = "DEEP_LINK";
    RPCCommands2["Dispatch"] = "DISPATCH";
    RPCCommands2["GetApplicationTicket"] = "GET_APPLICATION_TICKET";
    RPCCommands2["GetChannel"] = "GET_CHANNEL";
    RPCCommands2["GetChannels"] = "GET_CHANNELS";
    RPCCommands2["GetEntitlementTicket"] = "GET_ENTITLEMENT_TICKET";
    RPCCommands2["GetEntitlements"] = "GET_ENTITLEMENTS";
    RPCCommands2["GetGuild"] = "GET_GUILD";
    RPCCommands2["GetGuilds"] = "GET_GUILDS";
    RPCCommands2["GetImage"] = "GET_IMAGE";
    RPCCommands2["GetNetworkingConfig"] = "GET_NETWORKING_CONFIG";
    RPCCommands2["GetRelationships"] = "GET_RELATIONSHIPS";
    RPCCommands2["GetSelectedVoiceChannel"] = "GET_SELECTED_VOICE_CHANNEL";
    RPCCommands2["GetSkus"] = "GET_SKUS";
    RPCCommands2["GetUser"] = "GET_USER";
    RPCCommands2["GetVoiceSettings"] = "GET_VOICE_SETTINGS";
    RPCCommands2["GiftCodeBrowser"] = "GIFT_CODE_BROWSER";
    RPCCommands2["GuildTemplateBrowser"] = "GUILD_TEMPLATE_BROWSER";
    RPCCommands2["InviteBrowser"] = "INVITE_BROWSER";
    RPCCommands2["NetworkingCreateToken"] = "NETWORKING_CREATE_TOKEN";
    RPCCommands2["NetworkingPeerMetrics"] = "NETWORKING_PEER_METRICS";
    RPCCommands2["NetworkingSystemMetrics"] = "NETWORKING_SYSTEM_METRICS";
    RPCCommands2["OpenOverlayActivityInvite"] = "OPEN_OVERLAY_ACTIVITY_INVITE";
    RPCCommands2["OpenOverlayGuildInvite"] = "OPEN_OVERLAY_GUILD_INVITE";
    RPCCommands2["OpenOverlayVoiceSettings"] = "OPEN_OVERLAY_VOICE_SETTINGS";
    RPCCommands2["Overlay"] = "OVERLAY";
    RPCCommands2["SelectTextChannel"] = "SELECT_TEXT_CHANNEL";
    RPCCommands2["SelectVoiceChannel"] = "SELECT_VOICE_CHANNEL";
    RPCCommands2["SendActivityJoinInvite"] = "SEND_ACTIVITY_JOIN_INVITE";
    RPCCommands2["SetActivity"] = "SET_ACTIVITY";
    RPCCommands2["SetCertifiedDevices"] = "SET_CERTIFIED_DEVICES";
    RPCCommands2["SetOverlayLocked"] = "SET_OVERLAY_LOCKED";
    RPCCommands2["SetUserVoiceSettings"] = "SET_USER_VOICE_SETTINGS";
    RPCCommands2["SetUserVoiceSettings2"] = "SET_USER_VOICE_SETTINGS_2";
    RPCCommands2["SetVoiceSettings"] = "SET_VOICE_SETTINGS";
    RPCCommands2["SetVoiceSettings2"] = "SET_VOICE_SETTINGS_2";
    RPCCommands2["StartPurchase"] = "START_PURCHASE";
    RPCCommands2["Subscribe"] = "SUBSCRIBE";
    RPCCommands2["Unsubscribe"] = "UNSUBSCRIBE";
    RPCCommands2["ValidateApplication"] = "VALIDATE_APPLICATION";
  })(RPCCommands || (exports.RPCCommands = RPCCommands = {}));
  var RPCEvents;
  (function(RPCEvents2) {
    RPCEvents2["ActivityInvite"] = "ACTIVITY_INVITE";
    RPCEvents2["ActivityJoin"] = "ACTIVITY_JOIN";
    RPCEvents2["ActivityJoinRequest"] = "ACTIVITY_JOIN_REQUEST";
    RPCEvents2["ActivitySpectate"] = "ACTIVITY_SPECTATE";
    RPCEvents2["ChannelCreate"] = "CHANNEL_CREATE";
    RPCEvents2["CurrentUserUpdate"] = "CURRENT_USER_UPDATE";
    RPCEvents2["EntitlementCreate"] = "ENTITLEMENT_CREATE";
    RPCEvents2["EntitlementDelete"] = "ENTITLEMENT_DELETE";
    RPCEvents2["Error"] = "ERROR";
    RPCEvents2["GameJoin"] = "GAME_JOIN";
    RPCEvents2["GameSpectate"] = "GAME_SPECTATE";
    RPCEvents2["GuildCreate"] = "GUILD_CREATE";
    RPCEvents2["GuildStatus"] = "GUILD_STATUS";
    RPCEvents2["MessageCreate"] = "MESSAGE_CREATE";
    RPCEvents2["MessageDelete"] = "MESSAGE_DELETE";
    RPCEvents2["MessageUpdate"] = "MESSAGE_UPDATE";
    RPCEvents2["NotificationCreate"] = "NOTIFICATION_CREATE";
    RPCEvents2["Overlay"] = "OVERLAY";
    RPCEvents2["OverlayUpdate"] = "OVERLAY_UPDATE";
    RPCEvents2["Ready"] = "READY";
    RPCEvents2["RelationshipUpdate"] = "RELATIONSHIP_UPDATE";
    RPCEvents2["SpeakingStart"] = "SPEAKING_START";
    RPCEvents2["SpeakingStop"] = "SPEAKING_STOP";
    RPCEvents2["VoiceChannelSelect"] = "VOICE_CHANNEL_SELECT";
    RPCEvents2["VoiceConnectionStatus"] = "VOICE_CONNECTION_STATUS";
    RPCEvents2["VoiceSettingsUpdate"] = "VOICE_SETTINGS_UPDATE";
    RPCEvents2["VoiceSettingsUpdate2"] = "VOICE_SETTINGS_UPDATE_2";
    RPCEvents2["VoiceStateCreate"] = "VOICE_STATE_CREATE";
    RPCEvents2["VoiceStateDelete"] = "VOICE_STATE_DELETE";
    RPCEvents2["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
  })(RPCEvents || (exports.RPCEvents = RPCEvents = {}));
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/utils/v10.js
var require_v105 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isDMInteraction = isDMInteraction;
  exports.isGuildInteraction = isGuildInteraction;
  exports.isApplicationCommandDMInteraction = isApplicationCommandDMInteraction;
  exports.isApplicationCommandGuildInteraction = isApplicationCommandGuildInteraction;
  exports.isMessageComponentDMInteraction = isMessageComponentDMInteraction;
  exports.isMessageComponentGuildInteraction = isMessageComponentGuildInteraction;
  exports.isLinkButton = isLinkButton;
  exports.isInteractionButton = isInteractionButton;
  exports.isMessageComponentInteraction = isMessageComponentInteraction;
  exports.isMessageComponentButtonInteraction = isMessageComponentButtonInteraction;
  exports.isMessageComponentSelectMenuInteraction = isMessageComponentSelectMenuInteraction;
  exports.isChatInputApplicationCommandInteraction = isChatInputApplicationCommandInteraction;
  exports.isContextMenuApplicationCommandInteraction = isContextMenuApplicationCommandInteraction;
  var index_1 = require_v102();
  function isDMInteraction(interaction) {
    return Reflect.has(interaction, "user");
  }
  function isGuildInteraction(interaction) {
    return Reflect.has(interaction, "guild_id");
  }
  function isApplicationCommandDMInteraction(interaction) {
    return isDMInteraction(interaction);
  }
  function isApplicationCommandGuildInteraction(interaction) {
    return isGuildInteraction(interaction);
  }
  function isMessageComponentDMInteraction(interaction) {
    return isDMInteraction(interaction);
  }
  function isMessageComponentGuildInteraction(interaction) {
    return isGuildInteraction(interaction);
  }
  function isLinkButton(component) {
    return component.style === index_1.ButtonStyle.Link;
  }
  function isInteractionButton(component) {
    return ![index_1.ButtonStyle.Link, index_1.ButtonStyle.Premium].includes(component.style);
  }
  function isMessageComponentInteraction(interaction) {
    return interaction.type === index_1.InteractionType.MessageComponent;
  }
  function isMessageComponentButtonInteraction(interaction) {
    return interaction.data.component_type === index_1.ComponentType.Button;
  }
  function isMessageComponentSelectMenuInteraction(interaction) {
    return [
      index_1.ComponentType.StringSelect,
      index_1.ComponentType.UserSelect,
      index_1.ComponentType.RoleSelect,
      index_1.ComponentType.MentionableSelect,
      index_1.ComponentType.ChannelSelect
    ].includes(interaction.data.component_type);
  }
  function isChatInputApplicationCommandInteraction(interaction) {
    return interaction.data.type === index_1.ApplicationCommandType.ChatInput;
  }
  function isContextMenuApplicationCommandInteraction(interaction) {
    return interaction.data.type === index_1.ApplicationCommandType.Message || interaction.data.type === index_1.ApplicationCommandType.User;
  }
});

// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/v10.js
var require_v106 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Utils = undefined;
  __exportStar(require_v10(), exports);
  __exportStar(require_globals(), exports);
  __exportStar(require_v102(), exports);
  __exportStar(require_v103(), exports);
  __exportStar(require_v104(), exports);
  __exportStar(require_internals2(), exports);
  exports.Utils = require_v105();
});

// index.ts
import { logger as logger5 } from "@elizaos/core";

// actions/chatWithAttachments.ts
import fs from "node:fs";
import {
  ChannelType,
  ContentType,
  composePromptFromState,
  MemoryType,
  ModelType,
  parseJSONObjectFromText,
  trimTokens
} from "@elizaos/core";

// generated/prompts/typescript/prompts.ts
var attachmentIdsTemplate = `# Messages we are summarizing
{{recentMessages}}

# Instructions: {{senderName}} is requesting a summary of specific attachments. Your goal is to determine their objective, along with the list of attachment IDs to summarize.
The "objective" is a detailed description of what the user wants to summarize based on the conversation.
The "attachmentIds" is an array of attachment IDs that the user wants to summarize. If not specified, default to including all attachments from the conversation.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "objective": "<What the user wants to summarize>",
  "attachmentIds": ["<Attachment ID 1>", "<Attachment ID 2>", ...]
}
\`\`\``;
var attachmentSummarizationTemplate = `# Summarized so far (we are adding to this)
{{currentSummary}}

# Current attachments we are summarizing
{{attachmentsWithText}}

Summarization objective: {{objective}}

# Instructions: Summarize the attachments. Return the summary. Do not acknowledge this request, just summarize and continue the existing summary if there is one. Capture any important details based on the objective. Only respond with the new summary text.`;
var channelInfoTemplate = `# Messages we are searching for channel information
{{recentMessages}}

# Instructions: {{senderName}} is requesting to read messages from a specific Discord channel. Your goal is to determine:
1. The channel they want to read from (could be the current channel or a mentioned channel)
2. How many messages they want to read (default to 10 if not specified)
3. Whether they want a summary or just the messages
4. If they're looking for messages from a specific person

If they say "this channel" or "here", use the current channel.
If they mention a specific channel name or ID, extract that.
If they ask to "summarize" or mention what someone is "talking about", set summarize to true.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "channelIdentifier": "<current|channel-name|channel-id>",
  "messageCount": <number between 1 and 50>,
  "summarize": true/false,
  "focusUser": "<username or null>"
}
\`\`\``;
var createPollTemplate = `# Creating a Discord poll
{{recentMessages}}

# Instructions: {{senderName}} is requesting to create a poll. Extract:
1. The poll question
2. The poll options (2-10 options)
3. Whether to use emoji reactions (default: true)

Examples:
- "create a poll: What game should we play? Options: Minecraft, Fortnite, Among Us" 
  -> question: "What game should we play?", options: ["Minecraft", "Fortnite", "Among Us"]
- "poll: Should we have a meeting tomorrow? Yes/No"
  -> question: "Should we have a meeting tomorrow?", options: ["Yes", "No"]

Your response must be formatted as a JSON block:
\`\`\`json
{
  "question": "<poll question>",
  "options": ["<option1>", "<option2>", ...],
  "useEmojis": true/false
}
\`\`\``;
var dateRangeTemplate = `# Messages we are summarizing (the conversation is continued after this)
{{recentMessages}}

# Instructions: {{senderName}} is requesting a summary of the conversation. Your goal is to determine their objective, along with the range of dates that their request covers.
The "objective" is a detailed description of what the user wants to summarize based on the conversation. If they just ask for a general summary, you can either base it off the conversation if the summary range is very recent, or set the object to be general, like "a detailed summary of the conversation between all users".
The "start" and "end" are the range of dates that the user wants to summarize, relative to the current time. The start and end should be relative to the current time, and measured in seconds, minutes, hours and days. The format is "2 days ago" or "3 hours ago" or "4 minutes ago" or "5 seconds ago", i.e. "<integer> <unit> ago".
If you aren't sure, you can use a default range of "0 minutes ago" to "2 hours ago" or more. Better to err on the side of including too much than too little.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "objective": "<What the user wants to summarize>",
  "start": "0 minutes ago",
  "end": "2 hours ago"
}
\`\`\``;
var getUserInfoTemplate = `# Getting Discord user information
{{recentMessages}}

# Instructions: {{senderName}} is requesting information about a Discord user. Extract:
1. The user identifier (username, user ID, or mention)
2. Whether they want detailed server-specific info

Examples:
- "who is @john?" -> userIdentifier: "john", detailed: false
- "tell me about user 123456789" -> userIdentifier: "123456789", detailed: false  
- "get detailed info on @admin" -> userIdentifier: "admin", detailed: true
- "who am I?" -> userIdentifier: "self", detailed: false

Your response must be formatted as a JSON block:
\`\`\`json
{
  "userIdentifier": "<username|user-id|mention|self>",
  "detailed": true/false
}
\`\`\``;
var joinChannelTemplate = `# Messages we are searching for channel join information
{{recentMessages}}

# Instructions: {{senderName}} is requesting the bot to join a specific Discord channel (text or voice). Your goal is to determine which channel they want to join.

Extract the channel identifier from their request:
- If they mention a channel like #general or <#channelid>, extract that
- If they provide a channel name, extract that
- If they provide a channel ID (long number), extract that
- If they mention "voice", "vc", "voice channel", include that as a hint

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "channelIdentifier": "<channel-name|channel-id|#mention>",
  "isVoiceChannel": true/false
}
\`\`\``;
var leaveChannelTemplate = `# Messages we are searching for channel leave information
{{recentMessages}}

# Instructions: {{senderName}} is requesting the bot to leave a specific Discord channel (text or voice). Your goal is to determine which channel they want to leave.

Extract the channel identifier from their request:
- If they mention a channel like #general or <#channelid>, extract that
- If they provide a channel name (like "dev-voice" or "general"), extract just the name
- If they provide a channel ID (long number), extract that
- If they say "this channel" or "here", use "current"
- If they don't specify a channel but mention "voice", "vc", use "current" and mark as voice

Examples:
- "leave the dev-voice channel" -> channelIdentifier: "dev-voice", isVoiceChannel: true
- "leave #general" -> channelIdentifier: "general", isVoiceChannel: false
- "leave voice" -> channelIdentifier: "current", isVoiceChannel: true
- "stop listening to this channel" -> channelIdentifier: "current", isVoiceChannel: false

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "channelIdentifier": "<actual-channel-name-or-id-or-current>",
  "isVoiceChannel": true/false
}
\`\`\``;
var mediaAttachmentIdTemplate = `# Messages we are transcribing
{{recentMessages}}

# Instructions: {{senderName}} is requesting a transcription of a specific media file (audio or video). Your goal is to determine the ID of the attachment they want transcribed.
The "attachmentId" is the ID of the media file attachment that the user wants transcribed. If not specified, return null.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "attachmentId": "<Attachment ID>"
}
\`\`\``;
var mediaUrlTemplate = `# Messages we are searching for a media URL
{{recentMessages}}

# Instructions: {{senderName}} is requesting to download a specific media file (video or audio). Your goal is to determine the URL of the media they want to download.
The "mediaUrl" is the URL of the media file that the user wants downloaded. If not specified, return null.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "mediaUrl": "<Media URL>"
}
\`\`\``;
var pinMessageTemplate = `# Pinning a Discord message
{{recentMessages}}

# Instructions: {{senderName}} wants to pin a message. Extract which message they want to pin.

Examples:
- "pin that message" -> messageRef: "last"
- "pin the last message" -> messageRef: "last"
- "pin john's message about the meeting" -> messageRef: "john meeting"
- "pin message 123456789" -> messageRef: "123456789"

Your response must be formatted as a JSON block:
\`\`\`json
{
  "messageRef": "<last|previous|message-id|search-text>"
}
\`\`\``;
var reactToMessageTemplate = `# Adding reactions to Discord messages
{{recentMessages}}

# Instructions: {{senderName}} wants to add a reaction to a message. Extract:
1. Which message to react to (last, specific message reference, or by content)
2. What emoji/reaction to add

Examples:
- "react with \uD83D\uDC4D to the last message" -> messageRef: "last", emoji: "\uD83D\uDC4D"
- "add :fire: reaction" -> messageRef: "last", emoji: "\uD83D\uDD25" or ":fire:"
- "react to that message with ❤️" -> messageRef: "previous", emoji: "❤️"
- "add a thumbs up to john's message about the meeting" -> messageRef: "john meeting", emoji: "\uD83D\uDC4D"

Your response must be formatted as a JSON block:
\`\`\`json
{
  "messageRef": "<last|previous|message-id|search-text>",
  "emoji": "<emoji-character|:emoji-name:>"
}
\`\`\``;
var searchMessagesTemplate = `# Searching for Discord messages
{{recentMessages}}

# Instructions: {{senderName}} is requesting to search for messages in Discord. Extract:
1. The search query/keywords
2. The channel to search in (current if not specified)
3. Optional filters like author, time range, or message count

Examples:
- "search for messages containing 'meeting'" -> query: "meeting", channelIdentifier: "current", NO author field
- "find messages from @user about bugs" -> query: "bugs", channelIdentifier: "current", author: "user"
- "search #general for links from last week" -> query: "links", channelIdentifier: "general", timeRange: "week"
- "search for messages about 'spartan' in this channel" -> query: "spartan", channelIdentifier: "current"

Your response must be formatted as a JSON block:
\`\`\`json
{
  "query": "<search keywords>",
  "channelIdentifier": "<channel-name|channel-id|current>",
  "author": "<username>",
  "timeRange": "<hour|day|week|month>",
  "limit": <number between 1-100, default 20>
}
\`\`\``;
var sendDmTemplate = `# Messages we are searching for DM information
{{recentMessages}}

# Instructions: {{senderName}} is requesting to send a direct message to a specific Discord user. Your goal is to determine:
1. The recipient they want to message (could be a username, user ID, or mentioned user)
2. The message content they want to send

Extract the recipient identifier and the message content from their request.
- If they mention a user like @username or <@userid>, extract that
- If they provide a username or display name, extract that
- If they provide a user ID (long number), extract that
- Extract the complete message they want to send

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "recipientIdentifier": "<username|user-id|@mention>",
  "messageContent": "<the message to send>"
}
\`\`\``;
var summarizationTemplate = `# Summarized so far (we are adding to this)
{{currentSummary}}

# Current conversation chunk we are summarizing (includes attachments)
{{memoriesWithAttachments}}

Summarization objective: {{objective}}

# Instructions: Summarize the conversation so far. Return the summary. Do not acknowledge this request, just summarize and continue the existing summary if there is one. Capture any important details to the objective. Only respond with the new summary text.
Your response should be extremely detailed and include any and all relevant information.`;
var unpinMessageTemplate = `# Unpinning a Discord message
{{recentMessages}}

# Instructions: {{senderName}} wants to unpin a message. Extract which message they want to unpin.

Examples:
- "unpin that message" -> messageRef: "last_pinned"
- "unpin the last pinned message" -> messageRef: "last_pinned"
- "unpin john's message" -> messageRef: "john"
- "unpin message about the meeting" -> messageRef: "meeting"

Your response must be formatted as a JSON block:
\`\`\`json
{
  "messageRef": "<last_pinned|message-id|search-text>"
}
\`\`\``;

// generated/specs/specs.ts
var coreActionsSpec = {
  version: "1.0.0",
  actions: [
    {
      name: "name",
      description: "",
      parameters: []
    }
  ]
};
var allActionsSpec = {
  version: "1.0.0",
  actions: [
    {
      name: "name",
      description: "",
      parameters: []
    }
  ]
};
var coreProvidersSpec = {
  version: "1.0.0",
  providers: [
    {
      name: "channelState",
      description: "Provides information about the current Discord channel state, including whether it's a DM or group channel, channel name, and server name.",
      dynamic: true
    },
    {
      name: "guildInfo",
      description: "Provides information about the current Discord server/guild including member count, creation date, channels, roles, and bot permissions.",
      dynamic: true
    },
    {
      name: "voiceState",
      description: "Provides information about the voice state of the agent, including whether it is currently in a voice channel.",
      dynamic: true
    }
  ]
};
var allProvidersSpec = {
  version: "1.0.0",
  providers: [
    {
      name: "channelState",
      description: "Provides information about the current Discord channel state, including whether it's a DM or group channel, channel name, and server name.",
      dynamic: true
    },
    {
      name: "guildInfo",
      description: "Provides information about the current Discord server/guild including member count, creation date, channels, roles, and bot permissions.",
      dynamic: true
    },
    {
      name: "voiceState",
      description: "Provides information about the voice state of the agent, including whether it is currently in a voice channel.",
      dynamic: true
    }
  ]
};
var coreEvaluatorsSpec = {
  version: "1.0.0",
  evaluators: []
};
var allEvaluatorsSpec = {
  version: "1.0.0",
  evaluators: []
};
var coreActionDocs = coreActionsSpec.actions;
var allActionDocs = allActionsSpec.actions;
var coreProviderDocs = coreProvidersSpec.providers;
var allProviderDocs = allProvidersSpec.providers;
var coreEvaluatorDocs = coreEvaluatorsSpec.evaluators;
var allEvaluatorDocs = allEvaluatorsSpec.evaluators;

// generated/specs/spec-helpers.ts
var coreActionMap = new Map(coreActionDocs.map((doc) => [doc.name, doc]));
var allActionMap = new Map(allActionDocs.map((doc) => [doc.name, doc]));
var coreProviderMap = new Map(coreProviderDocs.map((doc) => [doc.name, doc]));
var allProviderMap = new Map(allProviderDocs.map((doc) => [doc.name, doc]));
var coreEvaluatorMap = new Map(coreEvaluatorDocs.map((doc) => [doc.name, doc]));
var allEvaluatorMap = new Map(allEvaluatorDocs.map((doc) => [doc.name, doc]));
function getActionSpec(name) {
  return coreActionMap.get(name) ?? allActionMap.get(name);
}
function requireActionSpec(name) {
  const spec = getActionSpec(name);
  if (!spec) {
    return {
      name,
      description: `${name} action`,
      similes: [],
      examples: []
    };
  }
  return spec;
}
function getProviderSpec(name) {
  return coreProviderMap.get(name) ?? allProviderMap.get(name);
}
function requireProviderSpec(name) {
  const spec = getProviderSpec(name);
  if (!spec) {
    throw new Error(`Provider spec not found: ${name}`);
  }
  return spec;
}

// actions/chatWithAttachments.ts
var getAttachmentIds = async (runtime, _message, state) => {
  const prompt = composePromptFromState({
    state,
    template: attachmentIdsTemplate
  });
  for (let i = 0;i < 5; i++) {
    const response = await runtime.useModel(ModelType.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText(response);
    if (parsedResponse?.objective && parsedResponse.attachmentIds) {
      return parsedResponse;
    }
  }
  return null;
};
var spec = requireActionSpec("CHAT_WITH_ATTACHMENTS");
var chatWithAttachments = {
  name: spec.name,
  similes: spec.similes ? [...spec.similes] : [],
  description: spec.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["chat", "with", "attachments"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:chat|with|attachments)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      const room = await _runtime.getRoom(message2.roomId);
      if (!room || room.type !== ChannelType.GROUP || room.source !== "discord") {
        return false;
      }
      const keywords = [
        "attachment",
        "summary",
        "summarize",
        "research",
        "pdf",
        "video",
        "audio",
        "image",
        "document",
        "link",
        "file",
        "attachment",
        "summarize",
        "code",
        "report",
        "write",
        "details",
        "information",
        "talk",
        "chat",
        "read",
        "listen",
        "watch"
      ];
      const messageContentText = message2.content.text;
      return keywords.some((keyword) => messageContentText?.toLowerCase().includes(keyword.toLowerCase()));
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const callbackData = {
      text: "",
      actions: ["CHAT_WITH_ATTACHMENTS_RESPONSE"],
      source: message.content.source,
      attachments: []
    };
    const attachmentData = await getAttachmentIds(runtime, message, state);
    if (!attachmentData) {
      runtime.logger.warn({
        src: "plugin:discord:action:chat-with-attachments",
        agentId: runtime.agentId
      }, "Could not get attachment IDs from message");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: message.content.source,
          thought: "I tried to chat with attachments but I couldn't get attachment IDs",
          actions: ["CHAT_WITH_ATTACHMENTS_FAILED"]
        },
        metadata: {
          type: MemoryType.CUSTOM
        }
      }, "messages");
      return {
        success: false,
        error: "Could not get attachment IDs from message"
      };
    }
    const { objective, attachmentIds } = attachmentData;
    const conversationLength = runtime.getConversationLength();
    const recentMessages = await runtime.getMemories({
      tableName: "messages",
      roomId: message.roomId,
      count: conversationLength,
      unique: false
    });
    const attachments = recentMessages.filter((msg) => msg.content.attachments && msg.content.attachments.length > 0).flatMap((msg) => msg.content.attachments).filter((attachment) => attachment && (attachmentIds.map((attch) => attch.toLowerCase().slice(0, 5)).includes(attachment.id.toLowerCase().slice(0, 5)) || attachmentIds.some((id) => {
      const attachmentId = id.toLowerCase().slice(0, 5);
      return attachment?.id?.toLowerCase().includes(attachmentId);
    })));
    const attachmentsWithText = attachments.filter((attachment) => !!attachment).map((attachment) => `# ${attachment.title}
${attachment.text}`).join(`

`);
    let currentSummary = "";
    const chunkSize = 8192;
    state.values.attachmentsWithText = attachmentsWithText;
    state.values.objective = objective;
    const template = await trimTokens(attachmentSummarizationTemplate, chunkSize, runtime);
    const prompt = composePromptFromState({
      state,
      template
    });
    const summary = await runtime.useModel(ModelType.TEXT_SMALL, {
      prompt
    });
    currentSummary = `${currentSummary}
${summary}`;
    if (!currentSummary) {
      runtime.logger.warn({
        src: "plugin:discord:action:chat-with-attachments",
        agentId: runtime.agentId
      }, "No summary found");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: message.content.source,
          thought: "I tried to chat with attachments but I couldn't get a summary",
          actions: ["CHAT_WITH_ATTACHMENTS_FAILED"]
        },
        metadata: {
          type: MemoryType.CUSTOM
        }
      }, "messages");
      return { success: false, error: "No summary found" };
    }
    callbackData.text = currentSummary.trim();
    const trimmedSummary = currentSummary.trim();
    if (callbackData.text && (trimmedSummary && trimmedSummary.split(`
`).length < 4 || trimmedSummary && trimmedSummary.split(" ").length < 100)) {
      callbackData.text = `Here is the summary:
\`\`\`md
${currentSummary.trim()}
\`\`\`
`;
      if (callback) {
        await callback?.(callbackData);
      }
      return { success: true, text: callbackData.text };
    } else if (currentSummary.trim()) {
      const summaryDir = "cache";
      const summaryFilename = `${summaryDir}/summary_${Date.now()}.md`;
      try {
        await fs.promises.mkdir(summaryDir, { recursive: true });
        await fs.promises.writeFile(summaryFilename, currentSummary, "utf8");
        await runtime.setCache(summaryFilename, currentSummary);
        if (callback) {
          await callback?.({
            ...callbackData,
            text: "I've attached the summary of the requested attachments as a text file.",
            attachments: [
              ...callbackData.attachments || [],
              {
                id: summaryFilename,
                url: summaryFilename,
                title: "Summary",
                source: "discord",
                contentType: ContentType.DOCUMENT
              }
            ]
          });
        }
        return { success: true, text: `Summary saved to ${summaryFilename}` };
      } catch (error) {
        runtime.logger.error({
          src: "plugin:discord:action:chat-with-attachments",
          agentId: runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error in file/cache process");
        return {
          success: false,
          error: error instanceof Error ? error.message : String(error)
        };
      }
    } else {
      runtime.logger.warn({
        src: "plugin:discord:action:chat-with-attachments",
        agentId: runtime.agentId
      }, "Empty response from chat with attachments action");
      return {
        success: false,
        error: "Empty response from chat with attachments action"
      };
    }
  },
  examples: spec.examples ?? []
};
var chatWithAttachments_default = chatWithAttachments;

// actions/createPoll.ts
import {
  composePromptFromState as composePromptFromState2,
  ModelType as ModelType2,
  parseJSONObjectFromText as parseJSONObjectFromText2
} from "@elizaos/core";

// constants.ts
var DISCORD_SERVICE_NAME = "discord";

// actions/createPoll.ts
var getPollInfo = async (runtime, _message, state) => {
  const prompt = composePromptFromState2({
    state,
    template: createPollTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType2.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText2(response);
    if (parsedResponse?.question && Array.isArray(parsedResponse.options) && parsedResponse.options.length >= 2) {
      return {
        question: String(parsedResponse.question),
        options: parsedResponse.options.slice(0, 10).map(String),
        useEmojis: parsedResponse.useEmojis !== false
      };
    }
  }
  return null;
};
var numberEmojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "\uD83D\uDD1F"];
var letterEmojis = ["\uD83C\uDDE6", "\uD83C\uDDE7", "\uD83C\uDDE8", "\uD83C\uDDE9", "\uD83C\uDDEA", "\uD83C\uDDEB", "\uD83C\uDDEC", "\uD83C\uDDED", "\uD83C\uDDEE", "\uD83C\uDDEF"];
var yesNoEmojis = ["✅", "❌"];
var spec2 = requireActionSpec("CREATE_POLL");
var createPoll = {
  name: spec2.name,
  similes: spec2.similes ? [...spec2.similes] : [],
  description: spec2.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["create", "poll"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:create|poll)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      if (callback) {
        await callback?.({
          text: "Discord service is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "Discord service is not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const pollInfo = await getPollInfo(runtime, message, state);
    if (!pollInfo) {
      if (callback) {
        await callback?.({
          text: "I couldn't understand the poll details. Please specify a question and at least 2 options.",
          source: "discord"
        });
      }
      return { success: false, error: "Could not parse poll details" };
    }
    try {
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      if (!room || !room.channelId) {
        if (callback) {
          await callback?.({
            text: "I couldn't determine the current channel.",
            source: "discord"
          });
        }
        return { success: false, error: "Could not determine current channel" };
      }
      const channel = await discordService.client.channels.fetch(room.channelId);
      if (!channel || !channel.isTextBased()) {
        if (callback) {
          await callback?.({
            text: "I can only create polls in text channels.",
            source: "discord"
          });
        }
        return { success: false, error: "Channel is not a text channel" };
      }
      const textChannel = channel;
      let emojis;
      if (pollInfo.options.length === 2 && pollInfo.options.some((opt) => opt.toLowerCase().includes("yes")) && pollInfo.options.some((opt) => opt.toLowerCase().includes("no"))) {
        emojis = yesNoEmojis;
      } else if (pollInfo.useEmojis) {
        emojis = numberEmojis.slice(0, pollInfo.options.length);
      } else {
        emojis = letterEmojis.slice(0, pollInfo.options.length);
      }
      const pollMessage = [
        `\uD83D\uDCCA **POLL: ${pollInfo.question}**`,
        "",
        ...pollInfo.options.map((option, index) => `${emojis[index]} ${option}`),
        "",
        "_React to vote!_"
      ].join(`
`);
      const sentMessage = await textChannel.send(pollMessage);
      for (let i = 0;i < pollInfo.options.length; i++) {
        try {
          await sentMessage.react(emojis[i]);
          await new Promise((resolve) => setTimeout(resolve, 250));
        } catch (error) {
          runtime.logger.error({
            src: "plugin:discord:action:create-poll",
            agentId: runtime.agentId,
            emoji: emojis[i],
            error: error instanceof Error ? error.message : String(error)
          }, "Failed to add reaction");
        }
      }
      const response = {
        text: `I've created a poll with ${pollInfo.options.length} options. Users can vote by clicking the reaction emojis!`,
        source: message.content.source
      };
      if (callback) {
        await callback?.(response);
      }
      return { success: true, text: response.text };
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:create-poll",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error creating poll");
      if (callback) {
        await callback?.({
          text: "I encountered an error while creating the poll. Please make sure I have permission to send messages and add reactions.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec2.examples ?? []
};
var createPoll_default = createPoll;

// actions/deleteMessage.ts
import {
  composePromptFromState as composePromptFromState3,
  ModelType as ModelType3,
  parseJSONObjectFromText as parseJSONObjectFromText3
} from "@elizaos/core";
var deleteMessageTemplate = `You are helping to extract delete message parameters.

The user wants to delete a Discord message.

Recent conversation:
{{recentMessages}}

Extract the following:
1. messageId: The ID of the message to delete
2. channelRef: The channel where the message is (default: "current")

Respond with a JSON object like:
{
  "messageId": "123456789",
  "channelRef": "current"
}

Only respond with the JSON object, no other text.`;
var deleteMessage = {
  name: "DELETE_MESSAGE",
  similes: ["REMOVE_MESSAGE", "UNSEND_MESSAGE", "DELETE_DISCORD_MESSAGE"],
  description: "Delete a message from a Discord channel",
  validate: async (_runtime, message, _state) => {
    return message.content.source === "discord";
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return { success: false, error: "Discord service not available" };
    }
    const currentState = state ?? await runtime.composeState(message);
    const prompt = composePromptFromState3({
      state: currentState,
      template: deleteMessageTemplate
    });
    let deleteParams = null;
    for (let i = 0;i < 3; i++) {
      const response = await runtime.useModel(ModelType3.TEXT_SMALL, {
        prompt
      });
      const parsedResponse = parseJSONObjectFromText3(response);
      if (parsedResponse && typeof parsedResponse.messageId === "string") {
        deleteParams = {
          messageId: parsedResponse.messageId,
          channelRef: typeof parsedResponse.channelRef === "string" ? parsedResponse.channelRef : undefined
        };
        break;
      }
    }
    if (!deleteParams) {
      await callback?.({
        text: "I couldn't determine which message to delete.",
        source: "discord"
      });
      return { success: false, error: "Failed to extract delete parameters" };
    }
    try {
      let channel = null;
      if (!deleteParams.channelRef || deleteParams.channelRef === "current") {
        const channelId = message.content.channelId;
        if (channelId) {
          channel = discordService.client.channels.cache.get(channelId);
        }
      } else {
        channel = discordService.client.channels.cache.find((c) => c.id === deleteParams?.channelRef || c.isTextBased() && ("name" in c) && c.name === deleteParams?.channelRef);
      }
      if (!channel || !channel.isTextBased()) {
        await callback?.({
          text: "I couldn't find the channel with that message.",
          source: "discord"
        });
        return { success: false, error: "Channel not found" };
      }
      const targetMessage = await channel.messages.fetch(deleteParams.messageId);
      if (!targetMessage) {
        await callback?.({
          text: "I couldn't find the message to delete.",
          source: "discord"
        });
        return { success: false, error: "Message not found" };
      }
      const botUser = discordService.client.user;
      const hasManageMessages = botUser ? channel.permissionsFor(botUser)?.has("ManageMessages") ?? false : false;
      const canDelete = targetMessage.author.id === botUser?.id || hasManageMessages;
      if (!canDelete) {
        await callback?.({
          text: "I don't have permission to delete that message.",
          source: "discord"
        });
        return { success: false, error: "No permission to delete message" };
      }
      await targetMessage.delete();
      await callback?.({
        text: "I've deleted the message.",
        source: "discord"
      });
      return {
        success: true,
        data: {
          messageId: deleteParams.messageId,
          channelId: channel.id
        }
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      await callback?.({
        text: `Failed to delete message: ${errorMessage}`,
        source: "discord"
      });
      return { success: false, error: errorMessage };
    }
  },
  examples: [
    [
      {
        name: "{{name1}}",
        content: {
          text: "Delete message 123456789"
        }
      },
      {
        name: "{{agentName}}",
        content: {
          text: "I'll delete that message now.",
          actions: ["DELETE_MESSAGE"]
        }
      }
    ],
    [
      {
        name: "{{name1}}",
        content: {
          text: "Remove that spam message"
        }
      },
      {
        name: "{{agentName}}",
        content: {
          text: "I'll remove that message.",
          actions: ["DELETE_MESSAGE"]
        }
      }
    ]
  ]
};
var deleteMessage_default = deleteMessage;

// actions/downloadMedia.ts
import {
  ContentType as ContentType2,
  composePromptFromState as composePromptFromState4,
  MemoryType as MemoryType2,
  ModelType as ModelType4,
  parseJSONObjectFromText as parseJSONObjectFromText4,
  ServiceType
} from "@elizaos/core";
var getMediaUrl = async (runtime, _message, state) => {
  const prompt = composePromptFromState4({
    state,
    template: mediaUrlTemplate
  });
  for (let i = 0;i < 5; i++) {
    const response = await runtime.useModel(ModelType4.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText4(response);
    if (parsedResponse?.mediaUrl) {
      return parsedResponse.mediaUrl;
    }
  }
  return null;
};
var spec3 = requireActionSpec("DOWNLOAD_MEDIA");
var downloadMedia = {
  name: spec3.name,
  similes: spec3.similes ? [...spec3.similes] : [],
  description: spec3.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["download", "media"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:download|media)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const videoService = runtime.getService(ServiceType.VIDEO);
    if (!videoService) {
      runtime.logger.error({
        src: "plugin:discord:action:download-media",
        agentId: runtime.agentId
      }, "Video service not found");
      return { success: false, error: "Video service not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const mediaUrl = await getMediaUrl(runtime, message, state);
    if (!mediaUrl) {
      runtime.logger.warn({
        src: "plugin:discord:action:download-media",
        agentId: runtime.agentId
      }, "Could not get media URL from messages");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: "discord",
          thought: "I couldn't find the media URL in the message",
          actions: ["DOWNLOAD_MEDIA_FAILED"]
        },
        metadata: {
          type: MemoryType2.CUSTOM
        }
      }, "messages");
      return { success: false, error: "Could not get media URL from messages" };
    }
    const videoInfo = await videoService.fetchVideoInfo(mediaUrl);
    const mediaPath = await videoService.downloadVideo(videoInfo);
    const response = {
      text: `I downloaded the video "${videoInfo.title}" and attached it below.`,
      actions: ["DOWNLOAD_MEDIA_RESPONSE"],
      source: message.content.source,
      attachments: []
    };
    const maxRetries = 3;
    let retries = 0;
    while (retries < maxRetries) {
      try {
        await callback?.({
          ...response,
          attachments: [
            ...response.attachments || [],
            {
              id: mediaPath,
              url: mediaPath,
              title: "Downloaded Media",
              source: "discord",
              contentType: ContentType2.DOCUMENT
            }
          ]
        });
        break;
      } catch (error) {
        retries++;
        runtime.logger.error({
          src: "plugin:discord:action:download-media",
          agentId: runtime.agentId,
          attempt: retries,
          error: error instanceof Error ? error.message : String(error)
        }, "Error sending message");
        if (retries === maxRetries) {
          runtime.logger.error({
            src: "plugin:discord:action:download-media",
            agentId: runtime.agentId,
            maxRetries
          }, "Max retries reached, failed to send message with attachment");
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
    return { success: true, ...response };
  },
  examples: spec3.examples ?? []
};

// actions/editMessage.ts
import {
  composePromptFromState as composePromptFromState5,
  ModelType as ModelType5,
  parseJSONObjectFromText as parseJSONObjectFromText5
} from "@elizaos/core";
var editMessageTemplate = `You are helping to extract edit message parameters.

The user wants to edit an existing Discord message.

Recent conversation:
{{recentMessages}}

Extract the following:
1. messageId: The ID of the message to edit
2. newText: The new text content for the message
3. channelRef: The channel where the message is (default: "current")

Respond with a JSON object like:
{
  "messageId": "123456789",
  "newText": "The updated message text",
  "channelRef": "current"
}

Only respond with the JSON object, no other text.`;
var editMessage = {
  name: "EDIT_MESSAGE",
  similes: [
    "UPDATE_MESSAGE",
    "MODIFY_MESSAGE",
    "CHANGE_MESSAGE",
    "EDIT_DISCORD_MESSAGE"
  ],
  description: "Edit an existing message in a Discord channel",
  validate: async (_runtime, message, _state) => {
    return message.content.source === "discord";
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return { success: false, error: "Discord service not available" };
    }
    const currentState = state ?? await runtime.composeState(message);
    const prompt = composePromptFromState5({
      state: currentState,
      template: editMessageTemplate
    });
    let editParams = null;
    for (let i = 0;i < 3; i++) {
      const response = await runtime.useModel(ModelType5.TEXT_SMALL, {
        prompt
      });
      const parsedResponse = parseJSONObjectFromText5(response);
      if (parsedResponse && typeof parsedResponse.messageId === "string" && typeof parsedResponse.newText === "string") {
        editParams = {
          messageId: parsedResponse.messageId,
          newText: parsedResponse.newText,
          channelRef: typeof parsedResponse.channelRef === "string" ? parsedResponse.channelRef : undefined
        };
        break;
      }
    }
    if (!editParams) {
      await callback?.({
        text: "I couldn't determine which message to edit or what to change it to.",
        source: "discord"
      });
      return { success: false, error: "Failed to extract edit parameters" };
    }
    try {
      let channel = null;
      if (!editParams.channelRef || editParams.channelRef === "current") {
        const channelId = message.content.channelId;
        if (channelId) {
          channel = discordService.client.channels.cache.get(channelId);
        }
      } else {
        channel = discordService.client.channels.cache.find((c) => c.id === editParams?.channelRef || c.isTextBased() && ("name" in c) && c.name === editParams?.channelRef);
      }
      if (!channel || !channel.isTextBased()) {
        await callback?.({
          text: "I couldn't find the channel to edit the message in.",
          source: "discord"
        });
        return { success: false, error: "Channel not found" };
      }
      const targetMessage = await channel.messages.fetch(editParams.messageId);
      if (!targetMessage) {
        await callback?.({
          text: "I couldn't find the message to edit.",
          source: "discord"
        });
        return { success: false, error: "Message not found" };
      }
      if (targetMessage.author.id !== discordService.client.user?.id) {
        await callback?.({
          text: "I can only edit my own messages.",
          source: "discord"
        });
        return {
          success: false,
          error: "Cannot edit messages from other users"
        };
      }
      await targetMessage.edit(editParams.newText);
      await callback?.({
        text: `I've edited the message to: "${editParams.newText}"`,
        source: "discord"
      });
      return {
        success: true,
        data: {
          messageId: editParams.messageId,
          channelId: channel.id,
          newText: editParams.newText
        }
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      await callback?.({
        text: `Failed to edit message: ${errorMessage}`,
        source: "discord"
      });
      return { success: false, error: errorMessage };
    }
  },
  examples: [
    [
      {
        name: "{{name1}}",
        content: {
          text: "Edit message 123456789 to say 'Hello updated!'"
        }
      },
      {
        name: "{{agentName}}",
        content: {
          text: "I'll edit that message now.",
          actions: ["EDIT_MESSAGE"]
        }
      }
    ],
    [
      {
        name: "{{name1}}",
        content: {
          text: "Update the previous message to fix the typo"
        }
      },
      {
        name: "{{agentName}}",
        content: {
          text: "I'll update that message.",
          actions: ["EDIT_MESSAGE"]
        }
      }
    ]
  ]
};
var editMessage_default = editMessage;

// actions/getUserInfo.ts
import {
  composePromptFromState as composePromptFromState6,
  ModelType as ModelType6,
  parseJSONObjectFromText as parseJSONObjectFromText6
} from "@elizaos/core";
var getUserIdentifier = async (runtime, _message, state) => {
  const prompt = composePromptFromState6({
    state,
    template: getUserInfoTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType6.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText6(response);
    if (parsedResponse?.userIdentifier) {
      return {
        userIdentifier: String(parsedResponse.userIdentifier),
        detailed: parsedResponse.detailed === true
      };
    }
  }
  return null;
};
var formatUserInfo = (member, detailed = false) => {
  const user = member.user;
  const joinedAt = member.joinedAt ? new Date(member.joinedAt).toLocaleDateString() : "Unknown";
  const createdAt = new Date(user.createdAt).toLocaleDateString();
  const roles = member.roles.cache.filter((role) => role.name !== "@everyone").map((role) => role.name).join(", ") || "No roles";
  const basicInfo = [
    "\uD83D\uDC64 **User Information**",
    `**Username:** ${user.username}${user.discriminator !== "0" ? `#${user.discriminator}` : ""}`,
    `**Display Name:** ${member.displayName}`,
    `**ID:** ${user.id}`,
    `**Bot:** ${user.bot ? "Yes" : "No"}`,
    `**Account Created:** ${createdAt}`
  ];
  if (detailed) {
    const serverInfo = [
      "",
      "\uD83C\uDFDB️ **Server Information**",
      `**Nickname:** ${member.nickname || "None"}`,
      `**Joined Server:** ${joinedAt}`,
      `**Roles:** ${roles}`,
      `**Highest Role:** ${member.roles.highest.name}`,
      `**Permissions:** ${member.permissions.toArray().slice(0, 5).join(", ")}${member.permissions.toArray().length > 5 ? "..." : ""}`,
      `**Voice Channel:** ${member.voice.channel ? member.voice.channel.name : "Not in voice"}`,
      `**Status:** ${member.presence?.status || "offline"}`
    ];
    return [...basicInfo, ...serverInfo].join(`
`);
  }
  return basicInfo.join(`
`);
};
var spec4 = requireActionSpec("GET_USER_INFO");
var getUserInfo = {
  name: spec4.name,
  similes: spec4.similes ? [...spec4.similes] : [],
  description: spec4.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["get", "user", "info"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:get|user|info)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      if (callback) {
        await callback?.({
          text: "Discord service is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "Discord service is not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const userInfo = await getUserIdentifier(runtime, message, state);
    if (!userInfo) {
      if (callback) {
        await callback?.({
          text: "I couldn't understand which user you want information about. Please specify a username or mention.",
          source: "discord"
        });
      }
      return { success: false, error: "Could not parse user identifier" };
    }
    try {
      const room = state.data?.room || await runtime.getRoom(message.roomId);
      const serverId = room?.messageServerId;
      if (!serverId) {
        if (callback) {
          await callback?.({
            text: "I couldn't determine the current server.",
            source: "discord"
          });
        }
        return { success: false, error: "Could not determine current server" };
      }
      const guild = await discordService.client.guilds.fetch(serverId);
      let member = null;
      if (userInfo.userIdentifier === "self") {
        const content = message.content;
        const authorId = content.user_id || content.userId;
        if (authorId && typeof authorId === "string") {
          const cleanId = authorId.replace("discord:", "");
          try {
            member = await guild.members.fetch(cleanId);
          } catch (_e) {}
        }
      } else {
        const cleanIdentifier = userInfo.userIdentifier.replace(/[<@!>]/g, "");
        if (/^\d+$/.test(cleanIdentifier)) {
          try {
            member = await guild.members.fetch(cleanIdentifier);
          } catch (_e) {}
        }
        if (!member) {
          const members = await guild.members.fetch();
          member = members.find((m) => m.user.username.toLowerCase() === userInfo.userIdentifier.toLowerCase() || m.displayName.toLowerCase() === userInfo.userIdentifier.toLowerCase() || m.user.discriminator !== "0" && `${m.user.username}#${m.user.discriminator}`.toLowerCase() === userInfo.userIdentifier.toLowerCase()) || null;
        }
      }
      if (!member) {
        if (callback) {
          await callback?.({
            text: `I couldn't find a user with the identifier "${userInfo.userIdentifier}" in this server.`,
            source: "discord"
          });
        }
        return {
          success: false,
          error: `User not found: ${userInfo.userIdentifier}`
        };
      }
      const infoText = formatUserInfo(member, userInfo.detailed);
      const response = {
        text: infoText,
        source: message.content.source
      };
      if (callback) {
        await callback?.(response);
      }
      return { success: true, text: response.text };
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:get-user-info",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error getting user info");
      if (callback) {
        await callback?.({
          text: "I encountered an error while getting user information. Please try again.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec4.examples ?? []
};
var getUserInfo_default = getUserInfo;

// actions/joinChannel.ts
import {
  composePromptFromState as composePromptFromState7,
  createUniqueUuid,
  MemoryType as MemoryType3,
  ModelType as ModelType7,
  parseJSONObjectFromText as parseJSONObjectFromText7
} from "@elizaos/core";
import { ChannelType as DiscordChannelType } from "discord.js";
var getJoinChannelInfo = async (runtime, _message, state) => {
  const prompt = composePromptFromState7({
    state,
    template: joinChannelTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType7.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText7(response);
    if (parsedResponse?.channelIdentifier) {
      return parsedResponse;
    }
  }
  return null;
};
var findChannel = async (discordService, identifier, currentServerId, isVoiceChannel) => {
  if (!discordService.client) {
    return null;
  }
  const cleanId = identifier.replace(/[<#>]/g, "");
  try {
    if (/^\d+$/.test(cleanId)) {
      try {
        const channel = await discordService.client.channels.fetch(cleanId);
        if (isVoiceChannel && channel && channel.type === DiscordChannelType.GuildVoice) {
          return channel;
        } else if (!isVoiceChannel && channel && channel.isTextBased() && !channel.isVoiceBased()) {
          return channel;
        }
      } catch (_e) {}
    }
    if (currentServerId) {
      const guild = await discordService.client.guilds.fetch(currentServerId);
      const channels = await guild.channels.fetch();
      const channel = channels.find((ch) => {
        const nameMatch = ch?.name.toLowerCase() === identifier.toLowerCase() || ch?.name.toLowerCase().replace(/[^a-z0-9 ]/g, "") === identifier.toLowerCase().replace(/[^a-z0-9 ]/g, "");
        if (isVoiceChannel) {
          return nameMatch && ch.type === DiscordChannelType.GuildVoice;
        } else {
          return nameMatch && ch.isTextBased() && !ch.isVoiceBased();
        }
      });
      if (channel) {
        return channel;
      }
    }
    const guilds = Array.from(discordService.client.guilds.cache.values());
    for (const guild of guilds) {
      try {
        const channels = await guild.channels.fetch();
        const channel = channels.find((ch) => {
          const nameMatch = ch?.name?.toLowerCase() === identifier.toLowerCase() || ch?.name?.toLowerCase().replace(/[^a-z0-9 ]/g, "") === identifier.toLowerCase().replace(/[^a-z0-9 ]/g, "");
          if (isVoiceChannel) {
            return nameMatch && ch.type === DiscordChannelType.GuildVoice;
          } else {
            return nameMatch && ch.isTextBased() && !ch.isVoiceBased();
          }
        });
        if (channel) {
          return channel;
        }
      } catch (_e) {}
    }
    return null;
  } catch (_error) {
    return null;
  }
};
var spec5 = requireActionSpec("JOIN_CHANNEL");
var joinChannel = {
  name: spec5.name,
  similes: spec5.similes ? [...spec5.similes] : [],
  description: spec5.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["join", "channel"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:join|channel)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      runtime.logger.error({ src: "plugin:discord:action:join-channel", agentId: runtime.agentId }, "Discord service not found or not initialized");
      return { success: false, error: "Discord service not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const channelInfo = await getJoinChannelInfo(runtime, message, state);
    if (!channelInfo) {
      runtime.logger.warn({ src: "plugin:discord:action:join-channel", agentId: runtime.agentId }, "Could not parse channel information from message");
      if (callback) {
        await callback?.({
          text: "I couldn't understand which channel you want me to join. Please specify the channel name or ID.",
          source: "discord"
        });
      }
      return { success: false, error: "Could not parse channel information" };
    }
    try {
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      const currentServerId = room?.messageServerId;
      const messageContentText = message.content.text;
      const messageText = messageContentText?.toLowerCase() || "";
      const isVoiceRequest = channelInfo.isVoiceChannel || messageText.includes("voice") || messageText.includes("vc") || messageText.includes("hop in");
      let targetChannel = isVoiceRequest ? await findChannel(discordService, channelInfo.channelIdentifier, currentServerId, true) : await findChannel(discordService, channelInfo.channelIdentifier, currentServerId, false);
      if (!targetChannel) {
        targetChannel = isVoiceRequest ? await findChannel(discordService, channelInfo.channelIdentifier, currentServerId, false) : await findChannel(discordService, channelInfo.channelIdentifier, currentServerId, true);
      }
      if (!targetChannel) {
        if (isVoiceRequest && currentServerId) {
          const guild = discordService.client.guilds.cache.get(currentServerId);
          const members = guild?.members?.cache;
          const member = members?.find((member2) => createUniqueUuid(runtime, member2.id) === message.entityId);
          const memberVoice = member?.voice;
          if (memberVoice?.channel) {
            targetChannel = member.voice.channel;
          }
        }
      }
      if (!targetChannel) {
        if (callback) {
          await callback?.({
            text: `I couldn't find a channel with the identifier "${channelInfo.channelIdentifier}". Please make sure the channel name or ID is correct and I have access to it.`,
            source: "discord"
          });
        }
        return {
          success: false,
          error: `Channel not found: ${channelInfo.channelIdentifier}`
        };
      }
      if (targetChannel.type === DiscordChannelType.GuildVoice) {
        const voiceChannel = targetChannel;
        const voiceManager = discordService.voiceManager;
        if (!voiceManager) {
          if (callback) {
            await callback?.({
              text: "Voice functionality is not available at the moment.",
              source: "discord"
            });
          }
          return { success: false, error: "Voice functionality not available" };
        }
        await voiceManager.joinChannel(voiceChannel);
        await runtime.createMemory({
          entityId: message.entityId,
          agentId: message.agentId,
          roomId: message.roomId,
          content: {
            source: "discord",
            thought: `I joined the voice channel ${voiceChannel.name}`,
            actions: ["JOIN_VOICE_STARTED"]
          },
          metadata: {
            type: MemoryType3.CUSTOM
          }
        }, "messages");
        const response = {
          text: `I've joined the voice channel ${voiceChannel.name}!`,
          actions: ["JOIN_CHANNEL_RESPONSE"],
          source: message.content.source
        };
        if (callback) {
          await callback?.(response);
        }
        return { success: true, text: response.text };
      } else {
        const textChannel = targetChannel;
        const currentChannels = discordService.getAllowedChannels();
        if (currentChannels.includes(textChannel.id)) {
          if (callback) {
            await callback?.({
              text: `I'm already listening to ${textChannel.name} (<#${textChannel.id}>).`,
              source: "discord"
            });
          }
          return {
            success: true,
            text: `Already listening to ${textChannel.name}`
          };
        }
        const success = discordService.addAllowedChannel(textChannel.id);
        if (success) {
          const response = {
            text: `I've started listening to ${textChannel.name} (<#${textChannel.id}>). I'll now respond to messages in that channel.`,
            actions: ["JOIN_CHANNEL_RESPONSE"],
            source: message.content.source
          };
          if (callback) {
            await callback?.(response);
          }
          return { success: true, text: response.text };
        } else {
          if (callback) {
            await callback?.({
              text: `I couldn't add ${textChannel.name} to my listening list. Please try again.`,
              source: "discord"
            });
          }
          return {
            success: false,
            error: `Could not add ${textChannel.name} to listening list`
          };
        }
      }
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:join-channel",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error joining channel");
      if (callback) {
        await callback?.({
          text: "I encountered an error while trying to join the channel. Please make sure I have the necessary permissions.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec5.examples ?? []
};
var joinChannel_default = joinChannel;

// actions/leaveChannel.ts
import {
  composePromptFromState as composePromptFromState8,
  createUniqueUuid as createUniqueUuid2,
  MemoryType as MemoryType4,
  ModelType as ModelType8,
  parseJSONObjectFromText as parseJSONObjectFromText8
} from "@elizaos/core";
import {
  BaseGuildVoiceChannel,
  ChannelType as DiscordChannelType2
} from "discord.js";
var getLeaveChannelInfo = async (runtime, _message, state) => {
  const prompt = composePromptFromState8({
    state,
    template: leaveChannelTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType8.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText8(response);
    if (parsedResponse?.channelIdentifier) {
      return parsedResponse;
    }
  }
  return null;
};
var findChannel2 = async (discordService, identifier, currentChannelId, currentServerId, isVoiceChannel) => {
  if (!discordService.client) {
    return null;
  }
  if (identifier === "current" && currentChannelId) {
    try {
      const channel = await discordService.client.channels.fetch(currentChannelId);
      if (isVoiceChannel && channel && channel.type === DiscordChannelType2.GuildVoice) {
        return channel;
      } else if (!isVoiceChannel && channel && channel.isTextBased() && !channel.isVoiceBased()) {
        return channel;
      }
    } catch (_e) {}
  }
  const cleanId = identifier.replace(/[<#>]/g, "");
  try {
    if (/^\d+$/.test(cleanId)) {
      try {
        const channel = await discordService.client.channels.fetch(cleanId);
        if (isVoiceChannel && channel && channel.type === DiscordChannelType2.GuildVoice) {
          return channel;
        } else if (!isVoiceChannel && channel && channel.isTextBased() && !channel.isVoiceBased()) {
          return channel;
        }
      } catch (_e) {}
    }
    if (currentServerId) {
      const guild = await discordService.client.guilds.fetch(currentServerId);
      const channels = await guild.channels.fetch();
      const channel = channels.find((ch) => {
        const nameMatch = ch?.name?.toLowerCase() === identifier.toLowerCase() || ch?.name?.toLowerCase().replace(/[^a-z0-9 ]/g, "") === identifier.toLowerCase().replace(/[^a-z0-9 ]/g, "");
        if (isVoiceChannel) {
          return nameMatch && ch.type === DiscordChannelType2.GuildVoice;
        } else {
          return nameMatch && ch.isTextBased() && !ch.isVoiceBased();
        }
      });
      if (channel) {
        return channel;
      }
    }
    const guilds = Array.from(discordService.client.guilds.cache.values());
    for (const guild of guilds) {
      try {
        const channels = await guild.channels.fetch();
        const channel = channels.find((ch) => {
          const nameMatch = ch?.name?.toLowerCase() === identifier.toLowerCase() || ch?.name?.toLowerCase().replace(/[^a-z0-9 ]/g, "") === identifier.toLowerCase().replace(/[^a-z0-9 ]/g, "");
          if (isVoiceChannel) {
            return nameMatch && ch.type === DiscordChannelType2.GuildVoice;
          } else {
            return nameMatch && ch.isTextBased() && !ch.isVoiceBased();
          }
        });
        if (channel) {
          return channel;
        }
      } catch (_e) {}
    }
    return null;
  } catch (_error) {
    return null;
  }
};
var spec6 = requireActionSpec("LEAVE_CHANNEL");
var leaveChannel = {
  name: spec6.name,
  similes: spec6.similes ? [...spec6.similes] : [],
  description: spec6.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["leave", "channel"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:leave|channel)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      runtime.logger.error({
        src: "plugin:discord:action:leave-channel",
        agentId: runtime.agentId
      }, "Discord service not found or not initialized");
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return;
    }
    const channelInfo = await getLeaveChannelInfo(runtime, message, state);
    try {
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      const currentServerId = room?.messageServerId;
      const currentChannelId = room?.channelId;
      const messageContentText = message.content.text;
      const messageText = messageContentText?.toLowerCase() || "";
      const isVoiceRequest = channelInfo?.isVoiceChannel || messageText.includes("voice") || messageText.includes("vc") || messageText.includes("call");
      if (isVoiceRequest && (!channelInfo || channelInfo.channelIdentifier === "current")) {
        const voiceManager = discordService.voiceManager;
        if (!voiceManager) {
          await callback?.({
            text: "Voice functionality is not available at the moment.",
            source: "discord"
          });
          return;
        }
        if (currentServerId) {
          const guild = discordService.client.guilds.cache.get(currentServerId);
          const guildMembers = guild?.members;
          const guildMembersMe = guildMembers?.me;
          const guildMembersMeVoice = guildMembersMe?.voice;
          const voiceChannel = guildMembersMeVoice?.channel;
          if (!voiceChannel || !(voiceChannel instanceof BaseGuildVoiceChannel)) {
            await callback?.({
              text: "I'm not currently in a voice channel.",
              source: "discord"
            });
            return;
          }
          const connection = voiceManager.getVoiceConnection(guild.id);
          if (!connection) {
            await callback?.({
              text: "No active voice connection found.",
              source: "discord"
            });
            return;
          }
          voiceManager.leaveChannel(voiceChannel);
          await runtime.createMemory({
            entityId: message.entityId,
            agentId: message.agentId,
            roomId: createUniqueUuid2(runtime, voiceChannel.id),
            content: {
              source: "discord",
              thought: `I left the voice channel ${voiceChannel.name}`,
              actions: ["LEAVE_VOICE_STARTED"]
            },
            metadata: {
              type: MemoryType4.CUSTOM
            }
          }, "messages");
          await callback?.({
            text: `I've left the voice channel ${voiceChannel.name}.`,
            source: "discord"
          });
          return;
        }
      }
      if (!channelInfo) {
        runtime.logger.warn({
          src: "plugin:discord:action:leave-channel",
          agentId: runtime.agentId
        }, "Could not parse channel information from message");
        await callback?.({
          text: "I couldn't understand which channel you want me to leave. Please specify the channel name or ID.",
          source: "discord"
        });
        return;
      }
      let targetChannel = isVoiceRequest ? await findChannel2(discordService, channelInfo.channelIdentifier, currentChannelId, currentServerId, true) : await findChannel2(discordService, channelInfo.channelIdentifier, currentChannelId, currentServerId, false);
      if (!targetChannel) {
        targetChannel = isVoiceRequest ? await findChannel2(discordService, channelInfo.channelIdentifier, currentChannelId, currentServerId, false) : await findChannel2(discordService, channelInfo.channelIdentifier, currentChannelId, currentServerId, true);
      }
      if (!targetChannel) {
        await callback?.({
          text: `I couldn't find a channel with the identifier "${channelInfo.channelIdentifier}". Please make sure the channel name or ID is correct.`,
          source: "discord"
        });
        return;
      }
      if (targetChannel.type === DiscordChannelType2.GuildVoice) {
        const voiceChannel = targetChannel;
        const voiceManager = discordService.voiceManager;
        if (!voiceManager) {
          await callback?.({
            text: "Voice functionality is not available at the moment.",
            source: "discord"
          });
          return;
        }
        const guild = voiceChannel.guild;
        const guildMembersMe = guild.members?.me;
        const guildMembersMeVoice = guildMembersMe?.voice;
        const currentVoiceChannel = guildMembersMeVoice?.channel;
        if (!currentVoiceChannel || currentVoiceChannel.id !== voiceChannel.id) {
          await callback?.({
            text: `I'm not currently in the voice channel ${voiceChannel.name}.`,
            source: "discord"
          });
          return;
        }
        voiceManager.leaveChannel(voiceChannel);
        await runtime.createMemory({
          entityId: message.entityId,
          agentId: message.agentId,
          roomId: createUniqueUuid2(runtime, voiceChannel.id),
          content: {
            source: "discord",
            thought: `I left the voice channel ${voiceChannel.name}`,
            actions: ["LEAVE_VOICE_STARTED"]
          },
          metadata: {
            type: MemoryType4.CUSTOM
          }
        }, "messages");
        const response = {
          text: `I've left the voice channel ${voiceChannel.name}.`,
          actions: ["LEAVE_CHANNEL_RESPONSE"],
          source: message.content.source
        };
        await callback?.(response);
      } else {
        const textChannel = targetChannel;
        const currentChannels = discordService.getAllowedChannels();
        if (!currentChannels.includes(textChannel.id)) {
          await callback?.({
            text: `I'm not currently listening to ${textChannel.name} (<#${textChannel.id}>).`,
            source: "discord"
          });
          return;
        }
        const success = discordService.removeAllowedChannel(textChannel.id);
        if (success) {
          const response = {
            text: `I've stopped listening to ${textChannel.name} (<#${textChannel.id}>). I will no longer respond to messages in that channel.`,
            actions: ["LEAVE_CHANNEL_RESPONSE"],
            source: message.content.source
          };
          await callback?.(response);
        } else {
          await callback?.({
            text: `I couldn't remove ${textChannel.name} from my listening list. This channel might be configured in my environment settings and cannot be removed dynamically.`,
            source: "discord"
          });
          return;
        }
      }
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:leave-channel",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error leaving channel");
      await callback?.({
        text: "I encountered an error while trying to leave the channel. Please try again.",
        source: "discord"
      });
      return;
    }
  },
  examples: spec6.examples ?? []
};
var leaveChannel_default = leaveChannel;

// actions/listChannels.ts
var spec7 = requireActionSpec("LIST_CHANNELS");
var listChannels = {
  name: spec7.name,
  similes: spec7.similes ? [...spec7.similes] : [],
  description: spec7.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["list", "channels"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:list|channels)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, _state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      runtime.logger.error({
        src: "plugin:discord:action:list-channels",
        agentId: runtime.agentId
      }, "Discord service not found or not initialized");
      return { success: false, error: "Discord service not available" };
    }
    try {
      const allowedChannelIds = discordService.getAllowedChannels();
      if (allowedChannelIds.length === 0) {
        if (callback) {
          await callback?.({
            text: "I'm currently listening to all channels (no restrictions are set).",
            source: "discord"
          });
        }
        return {
          success: true,
          text: "Listening to all channels (no restrictions)"
        };
      }
      const channelInfoPromises = allowedChannelIds.map(async (channelId) => {
        try {
          const client = discordService.client;
          const channel = client && await client.channels.fetch(channelId);
          if (channel?.isTextBased() && !channel.isVoiceBased()) {
            const guild = "guild" in channel ? channel.guild : null;
            return {
              id: channelId,
              name: "name" in channel ? channel.name : "DM",
              mention: `<#${channelId}>`,
              server: guild?.name || "Direct Message"
            };
          }
        } catch (_e) {
          return {
            id: channelId,
            name: "Unknown",
            mention: channelId,
            server: "Unknown or Deleted"
          };
        }
        return null;
      });
      const channelInfos = (await Promise.all(channelInfoPromises)).filter(Boolean);
      let responseText = `I'm currently listening to ${channelInfos.length} channel${channelInfos.length !== 1 ? "s" : ""}:

`;
      const channelsByServer = channelInfos.reduce((acc, channel) => {
        if (!channel) {
          return acc;
        }
        if (!acc[channel.server]) {
          acc[channel.server] = [];
        }
        acc[channel.server].push(channel);
        return acc;
      }, {});
      for (const [serverName, channels] of Object.entries(channelsByServer)) {
        responseText += `**${serverName}**
`;
        for (const channel of channels) {
          if (channel) {
            responseText += `• ${channel.name} (${channel.mention})
`;
          }
        }
        responseText += `
`;
      }
      const envChannelIds = runtime.getSetting("CHANNEL_IDS");
      if (envChannelIds) {
        responseText += `
*Some channels are configured in environment settings and cannot be removed dynamically.*`;
      }
      const response = {
        text: responseText.trim(),
        actions: ["LIST_CHANNELS_RESPONSE"],
        source: message.content.source
      };
      if (callback) {
        await callback?.(response);
      }
      return { success: true, text: response.text };
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:list-channels",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error listing channels");
      if (callback) {
        await callback?.({
          text: "I encountered an error while trying to list the channels. Please try again.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec7.examples ?? []
};
var listChannels_default = listChannels;

// actions/pinMessage.ts
import {
  composePromptFromState as composePromptFromState9,
  ModelType as ModelType9,
  parseJSONObjectFromText as parseJSONObjectFromText9
} from "@elizaos/core";
import {
  PermissionsBitField
} from "discord.js";
var getMessageRef = async (runtime, _message, state) => {
  const prompt = composePromptFromState9({
    state,
    template: pinMessageTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType9.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText9(response);
    if (parsedResponse?.messageRef) {
      return {
        messageRef: String(parsedResponse.messageRef)
      };
    }
  }
  return null;
};
var spec8 = requireActionSpec("PIN_MESSAGE");
var pinMessage = {
  name: spec8.name,
  similes: spec8.similes ? [...spec8.similes] : [],
  description: spec8.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["pin", "message"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:pin|message)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return;
    }
    const messageInfo = await getMessageRef(runtime, message, state);
    if (!messageInfo) {
      await callback?.({
        text: "I couldn't understand which message you want to pin. Please be more specific.",
        source: "discord"
      });
      return;
    }
    try {
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      if (!room || !room.channelId) {
        await callback?.({
          text: "I couldn't determine the current channel.",
          source: "discord"
        });
        return;
      }
      const channel = await discordService.client.channels.fetch(room.channelId);
      if (!channel || !channel.isTextBased()) {
        await callback?.({
          text: "I can only pin messages in text channels.",
          source: "discord"
        });
        return;
      }
      const textChannel = channel;
      const textChannelGuild = textChannel.guild;
      const discordServiceClient = discordService.client;
      const discordServiceClientUser = discordServiceClient?.user;
      const botMember = textChannelGuild?.members.cache.get(discordServiceClientUser?.id);
      if (botMember) {
        const permissions = textChannel.permissionsFor(botMember);
        if (!permissions || !permissions.has(PermissionsBitField.Flags.ManageMessages)) {
          await callback?.({
            text: "I don't have permission to pin messages in this channel. I need the 'Manage Messages' permission.",
            source: "discord"
          });
          return;
        }
      }
      let targetMessage = null;
      if (messageInfo.messageRef === "last" || messageInfo.messageRef === "previous") {
        const messages = await textChannel.messages.fetch({ limit: 100 });
        const sortedMessages = Array.from(messages.values()).sort((a, b) => b.createdTimestamp - a.createdTimestamp);
        const discordServiceClient2 = discordService.client;
        const discordServiceClientUser2 = discordServiceClient2?.user;
        targetMessage = sortedMessages.find((msg) => msg.id !== message.content.id && msg.author.id !== discordServiceClientUser2?.id) || null;
      } else if (/^\d+$/.test(messageInfo.messageRef)) {
        try {
          targetMessage = await textChannel.messages.fetch(messageInfo.messageRef);
        } catch (_e) {}
      } else {
        const messages = await textChannel.messages.fetch({ limit: 100 });
        const searchLower = messageInfo.messageRef.toLowerCase();
        targetMessage = Array.from(messages.values()).find((msg) => {
          const contentMatch = msg.content.toLowerCase().includes(searchLower);
          const authorMatch = msg.author.username.toLowerCase().includes(searchLower);
          return contentMatch || authorMatch;
        }) || null;
      }
      if (!targetMessage) {
        await callback?.({
          text: "I couldn't find the message you want to pin. Try being more specific or use 'last message'.",
          source: "discord"
        });
        return;
      }
      if (targetMessage.pinned) {
        await callback?.({
          text: "That message is already pinned.",
          source: "discord"
        });
        return;
      }
      try {
        await targetMessage.pin();
        const response = {
          text: `I've pinned the message from ${targetMessage.author.username}.`,
          source: message.content.source
        };
        await callback?.(response);
      } catch (error) {
        runtime.logger.error({
          src: "plugin:discord:action:pin-message",
          agentId: runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Failed to pin message");
        await callback?.({
          text: "I couldn't pin that message. The channel might have reached the maximum number of pinned messages (50).",
          source: "discord"
        });
      }
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:pin-message",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error pinning message");
      await callback?.({
        text: "I encountered an error while trying to pin the message. Please make sure I have the necessary permissions.",
        source: "discord"
      });
    }
  },
  examples: spec8.examples ?? []
};
var pinMessage_default = pinMessage;

// actions/reactToMessage.ts
import {
  composePromptFromState as composePromptFromState10,
  ModelType as ModelType10,
  parseJSONObjectFromText as parseJSONObjectFromText10
} from "@elizaos/core";
function extractEmojisFromText(text) {
  if (!text) {
    return [];
  }
  const matches = [];
  const unicodeEmojiRegex = /(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:\uFE0F)?(?:\u200D(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:\uFE0F)?)*/gu;
  let match = null;
  match = unicodeEmojiRegex.exec(text);
  while (match !== null) {
    matches.push({ index: match.index, emoji: match[0] });
    match = unicodeEmojiRegex.exec(text);
  }
  const customEmojiRegex = /<a?:\w+:\d+>/g;
  match = customEmojiRegex.exec(text);
  while (match !== null) {
    matches.push({ index: match.index, emoji: match[0] });
    match = customEmojiRegex.exec(text);
  }
  return matches.sort((a, b) => a.index - b.index).map((m) => m.emoji);
}
function isExplicitReactionRequest(text) {
  if (!text) {
    return false;
  }
  const lower = text.toLowerCase();
  if (/\b(react|reaction|emoji)\b/.test(lower)) {
    return true;
  }
  if (/\w+'s\s+message\b/.test(lower)) {
    return true;
  }
  if (/message\s+(about|from|where)\b/.test(lower)) {
    return true;
  }
  if (/\bto\s+\w+'s\b/.test(lower)) {
    return true;
  }
  if (/\bthat\s+message\b/.test(lower)) {
    return true;
  }
  return false;
}
var emojiMap = {
  ":thumbsup:": "\uD83D\uDC4D",
  ":thumbs_up:": "\uD83D\uDC4D",
  ":+1:": "\uD83D\uDC4D",
  ":thumbsdown:": "\uD83D\uDC4E",
  ":thumbs_down:": "\uD83D\uDC4E",
  ":-1:": "\uD83D\uDC4E",
  ":heart:": "❤️",
  ":fire:": "\uD83D\uDD25",
  ":star:": "⭐",
  ":check:": "✅",
  ":white_check_mark:": "✅",
  ":x:": "❌",
  ":cross:": "❌",
  ":smile:": "\uD83D\uDE04",
  ":laughing:": "\uD83D\uDE06",
  ":thinking:": "\uD83E\uDD14",
  ":eyes:": "\uD83D\uDC40",
  ":clap:": "\uD83D\uDC4F",
  ":wave:": "\uD83D\uDC4B",
  ":ok:": "\uD83D\uDC4C",
  ":ok_hand:": "\uD83D\uDC4C",
  ":raised_hands:": "\uD83D\uDE4C",
  ":pray:": "\uD83D\uDE4F",
  ":100:": "\uD83D\uDCAF",
  ":rocket:": "\uD83D\uDE80"
};
var spec9 = requireActionSpec("REACT_TO_MESSAGE");
var reactToMessage = {
  name: spec9.name,
  similes: spec9.similes ? [...spec9.similes] : [],
  description: spec9.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["react", "message"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:react|message)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return;
    }
    let reactionInfo = null;
    const messageContent = message.content;
    const userText = messageContent?.text || "";
    const needsLLM = isExplicitReactionRequest(userText);
    if (!needsLLM) {
      const stateData = state.data;
      const stateWithResponseText = state;
      const responseText = String(stateData?.responseText || stateData?.text || stateWithResponseText.responseText || "");
      if (responseText) {
        const emojis = extractEmojisFromText(responseText);
        if (emojis.length > 0) {
          runtime.logger.debug({
            src: "plugin:discord:action:react",
            emoji: emojis[0],
            source: "responseText"
          }, "[REACT_TO_MESSAGE] Found emoji in response text (fast path)");
          reactionInfo = { messageRef: "last", emoji: emojis[0] };
        }
      }
      if (!reactionInfo) {
        const stateData2 = state.data;
        const recentMessages = stateData2?.recentMessages || [];
        const agentLastMessage = recentMessages.filter((m) => m.entityId === runtime.agentId).pop();
        const agentLastMessageContent = agentLastMessage?.content;
        if (agentLastMessageContent?.text) {
          const emojis = extractEmojisFromText(agentLastMessageContent.text);
          if (emojis.length > 0) {
            runtime.logger.debug({
              src: "plugin:discord:action:react",
              emoji: emojis[0],
              source: "agentLastMessage"
            }, "[REACT_TO_MESSAGE] Found emoji in agent's last message (fast path)");
            reactionInfo = { messageRef: "last", emoji: emojis[0] };
          }
        }
      }
    }
    if (!reactionInfo) {
      const prompt = composePromptFromState10({
        state,
        template: reactToMessageTemplate
      });
      for (let i = 0;i < 3; i++) {
        const response = await runtime.useModel(ModelType10.TEXT_SMALL, {
          prompt
        });
        const parsedResponse = parseJSONObjectFromText10(response);
        if (parsedResponse?.emoji) {
          reactionInfo = {
            messageRef: String(parsedResponse.messageRef || "last"),
            emoji: String(parsedResponse.emoji)
          };
          break;
        }
      }
    }
    if (!reactionInfo) {
      runtime.logger.debug({ src: "plugin:discord:action:react" }, "[REACT_TO_MESSAGE] Could not extract reaction info");
      if (needsLLM) {
        await callback?.({
          text: "I couldn't understand which message to react to or what emoji to use. Try being more specific, like 'react with \uD83D\uDC4D to the last message'.",
          source: "discord"
        });
      }
      return;
    }
    try {
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      if (!room || !room.channelId) {
        await callback?.({
          text: "I couldn't determine the current channel.",
          source: "discord"
        });
        return;
      }
      const channel = await discordService.client.channels.fetch(room.channelId);
      if (!channel || !channel.isTextBased()) {
        await callback?.({
          text: "I can only react to messages in text channels.",
          source: "discord"
        });
        return;
      }
      const textChannel = channel;
      let targetMessage = null;
      if (reactionInfo.messageRef === "last" || reactionInfo.messageRef === "previous") {
        const messages = await textChannel.messages.fetch({ limit: 100 });
        const sortedMessages = Array.from(messages.values()).sort((a, b) => b.createdTimestamp - a.createdTimestamp);
        const clientUser = discordService.client.user;
        targetMessage = sortedMessages.find((msg) => msg.id !== message.content.id && msg.author.id !== clientUser?.id) || null;
      } else if (/^\d+$/.test(reactionInfo.messageRef)) {
        try {
          targetMessage = await textChannel.messages.fetch(reactionInfo.messageRef);
        } catch (_e) {}
      } else {
        const messages = await textChannel.messages.fetch({ limit: 100 });
        const searchLower = reactionInfo.messageRef.toLowerCase();
        targetMessage = Array.from(messages.values()).find((msg) => {
          const contentMatch = msg.content.toLowerCase().includes(searchLower);
          const authorMatch = msg.author.username.toLowerCase().includes(searchLower);
          return contentMatch || authorMatch;
        }) || null;
      }
      if (!targetMessage) {
        await callback?.({
          text: "I couldn't find the message you want me to react to. Try being more specific or use 'last message'.",
          source: "discord"
        });
        return;
      }
      let emoji = reactionInfo.emoji;
      if (!/\p{Emoji}/u.test(emoji)) {
        const mapped = emojiMap[emoji.toLowerCase()];
        if (mapped) {
          emoji = mapped;
        } else if (!/<a?:\w+:\d+>/.test(emoji)) {
          emoji = emoji.replace(/:/g, "");
        }
      }
      try {
        await targetMessage.react(emoji);
        const response = {
          text: `I've added a ${emoji} reaction to the message.`,
          source: message.content.source
        };
        await callback?.(response);
      } catch (error) {
        runtime.logger.error({
          src: "plugin:discord:action:react-to-message",
          agentId: runtime.agentId,
          emoji: reactionInfo.emoji,
          error: error instanceof Error ? error.message : String(error)
        }, "Failed to add reaction");
        await callback?.({
          text: `I couldn't add that reaction. Make sure the emoji "${reactionInfo.emoji}" is valid and I have permission to add reactions.`,
          source: "discord"
        });
      }
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:react-to-message",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error in react to message");
      await callback?.({
        text: "I encountered an error while trying to react to the message. Please make sure I have the necessary permissions.",
        source: "discord"
      });
    }
  },
  examples: spec9.examples ?? []
};
var reactToMessage_default = reactToMessage;

// actions/readChannel.ts
import {
  composePromptFromState as composePromptFromState11,
  ModelType as ModelType11,
  parseJSONObjectFromText as parseJSONObjectFromText11
} from "@elizaos/core";
import { PermissionsBitField as PermissionsBitField2 } from "discord.js";
var getChannelInfo = async (runtime, _message, state) => {
  const prompt = composePromptFromState11({
    state,
    template: channelInfoTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType11.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText11(response);
    if (parsedResponse?.channelIdentifier) {
      const messageCount = Math.min(Math.max(parsedResponse.messageCount || 10, 1), 50);
      return {
        channelIdentifier: parsedResponse.channelIdentifier,
        messageCount,
        summarize: parsedResponse.summarize || false,
        focusUser: parsedResponse.focusUser || null
      };
    }
  }
  return null;
};
var fallbackSpec = {
  name: "READ_CHANNEL",
  description: "Read recent messages from a Discord channel.",
  similes: ["SHOW_MESSAGES", "CHECK_CHANNEL"],
  examples: []
};
var spec10 = (() => {
  try {
    return requireActionSpec("READ_CHANNEL");
  } catch {
    return fallbackSpec;
  }
})();
var readChannel = {
  name: spec10.name,
  similes: spec10.similes ? [...spec10.similes] : [],
  description: spec10.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["read", "channel"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:read|channel)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      runtime.logger.error({ src: "plugin:discord:action:read-channel", agentId: runtime.agentId }, "Discord service not found or not initialized");
      return { success: false, error: "Discord service not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const channelInfo = await getChannelInfo(runtime, message, state);
    if (!channelInfo) {
      runtime.logger.warn({ src: "plugin:discord:action:read-channel", agentId: runtime.agentId }, "Could not parse channel information from message");
      if (callback) {
        await callback?.({
          text: "I couldn't understand which channel you want me to read from. Please specify the channel name or say 'this channel' for the current channel.",
          source: "discord"
        });
      }
      return { success: false, error: "Could not parse channel information" };
    }
    try {
      let targetChannel = null;
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      if (channelInfo.channelIdentifier === "current" || channelInfo.channelIdentifier === "this" || channelInfo.channelIdentifier === "here") {
        if (room?.channelId) {
          targetChannel = await discordService.client.channels.fetch(room.channelId);
        }
      } else if (channelInfo.channelIdentifier.match(/^\d+$/)) {
        targetChannel = await discordService.client.channels.fetch(channelInfo.channelIdentifier);
      } else {
        const serverId = room?.messageServerId;
        if (!serverId) {
          if (callback) {
            await callback?.({
              text: "I couldn't determine which server to search for that channel.",
              source: "discord"
            });
          }
          return { success: false, error: "Could not determine server" };
        }
        const guild = await discordService.client.guilds.fetch(serverId);
        const channels = await guild.channels.fetch();
        targetChannel = channels.find((channel) => channel?.name.toLowerCase().includes(channelInfo.channelIdentifier.toLowerCase()) && channel.isTextBased()) || null;
      }
      if (!targetChannel || !targetChannel.isTextBased()) {
        if (callback) {
          await callback?.({
            text: "I couldn't find that channel or I don't have access to it. Make sure the channel exists and I have permission to read messages there.",
            source: "discord"
          });
        }
        return { success: false, error: "Channel not found or not accessible" };
      }
      const targetChannelGuild = targetChannel.guild;
      const clientUser = discordService.client.user;
      const botMember = targetChannelGuild?.members.cache.get(clientUser?.id);
      if (botMember) {
        const permissions = targetChannel.permissionsFor(botMember);
        if (!permissions || !permissions.has(PermissionsBitField2.Flags.ReadMessageHistory)) {
          if (callback) {
            await callback?.({
              text: "I don't have permission to read message history in that channel.",
              source: "discord"
            });
          }
          return {
            success: false,
            error: "Missing ReadMessageHistory permission"
          };
        }
      }
      const requestedLimit = channelInfo.summarize ? Math.max(channelInfo.messageCount * 2, 50) : channelInfo.messageCount;
      const fetchLimit = Math.min(requestedLimit, 100);
      runtime.logger.debug({
        src: "plugin:discord:action:read-channel",
        agentId: runtime.agentId,
        channelName: targetChannel.name,
        fetchLimit,
        requestedLimit,
        summarize: channelInfo.summarize,
        focusUser: channelInfo.focusUser
      }, "Fetching messages");
      const messages = await targetChannel.messages.fetch({
        limit: fetchLimit
      });
      if (messages.size === 0) {
        if (callback) {
          await callback?.({
            text: `No messages found in <#${targetChannel.id}>.`,
            source: "discord"
          });
        }
        return { success: true, text: `No messages found in channel` };
      }
      if (channelInfo.summarize) {
        const sortedMessages = Array.from(messages.values()).reverse();
        const relevantMessages = channelInfo.focusUser ? sortedMessages.filter((msg) => {
          const focusUserLower = channelInfo.focusUser?.toLowerCase();
          const msgMember = msg.member;
          const msgMemberDisplayName = msgMember?.displayName;
          return msg.author.username.toLowerCase().includes(focusUserLower || "") || msgMemberDisplayName?.toLowerCase().includes(focusUserLower || "");
        }) : sortedMessages;
        if (channelInfo.focusUser && relevantMessages.length === 0) {
          if (callback) {
            await callback?.({
              text: `I couldn't find any messages from "${channelInfo.focusUser}" in the recent messages from <#${targetChannel.id}>.`,
              source: "discord"
            });
          }
          return {
            success: true,
            text: `No messages found from ${channelInfo.focusUser}`
          };
        }
        const messagesToSummarize = relevantMessages.slice(0, channelInfo.messageCount).map((msg) => ({
          author: msg.author.username,
          content: msg.content || "[No text content]",
          timestamp: new Date(msg.createdTimestamp).toLocaleString()
        }));
        const summaryPrompt = channelInfo.focusUser ? `Please summarize what ${channelInfo.focusUser} has been discussing based on these messages from the Discord channel "${targetChannel.name}":

${messagesToSummarize.map((m) => `${m.author} (${m.timestamp}): ${m.content}`).join(`

`)}

Provide a concise summary focusing on:
1. Main topics ${channelInfo.focusUser} discussed
2. Key points or proposals they made
3. Any questions they asked or issues they raised

If ${channelInfo.focusUser} didn't appear in these messages, please note that.` : `Please summarize the recent conversation in the Discord channel "${targetChannel.name}" based on these messages:

${messagesToSummarize.map((m) => `${m.author} (${m.timestamp}): ${m.content}`).join(`

`)}

Provide a concise summary that includes:
1. Main topics discussed
2. Key decisions or conclusions
3. Who contributed what (mention specific usernames)
4. Any action items or next steps mentioned`;
        const summary = await runtime.useModel(ModelType11.TEXT_LARGE, {
          prompt: summaryPrompt
        });
        const response = {
          text: channelInfo.focusUser ? `Summary of what ${channelInfo.focusUser} has been discussing in <#${targetChannel.id}>:

${summary}` : `Summary of recent conversation in <#${targetChannel.id}>:

${summary}`,
          actions: ["READ_CHANNEL_RESPONSE"],
          source: message.content.source
        };
        if (callback) {
          await callback?.(response);
        }
        return { success: true, text: response.text };
      } else {
        const formattedMessages = Array.from(messages.values()).reverse().map((msg) => {
          const timestamp = new Date(msg.createdTimestamp).toLocaleString();
          const author = msg.author.username;
          const content = msg.content || "[No text content]";
          const attachments = msg.attachments.size > 0 ? `
\uD83D\uDCCE Attachments: ${msg.attachments.map((a) => a.name || "unnamed").join(", ")}` : "";
          return `**${author}** (${timestamp}):
${content}${attachments}`;
        }).join(`

---

`);
        const response = {
          text: `Here are the last ${messages.size} messages from <#${targetChannel.id}>:

${formattedMessages}`,
          actions: ["READ_CHANNEL_RESPONSE"],
          source: message.content.source
        };
        if (callback) {
          await callback?.(response);
        }
        return { success: true, text: response.text };
      }
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:read-channel",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error reading channel");
      if (callback) {
        await callback?.({
          text: "I encountered an error while trying to read the channel messages. Please make sure I have the necessary permissions and try again.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec10.examples ?? []
};
var readChannel_default = readChannel;

// actions/searchMessages.ts
import {
  composePromptFromState as composePromptFromState12,
  ModelType as ModelType12,
  parseJSONObjectFromText as parseJSONObjectFromText12
} from "@elizaos/core";
var getSearchParams = async (runtime, _message, state) => {
  const prompt = composePromptFromState12({
    state,
    template: searchMessagesTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType12.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText12(response);
    if (parsedResponse?.query) {
      const cleanQuery = String(parsedResponse.query).replace(/^["']|["']$/g, "");
      return {
        query: cleanQuery,
        channelIdentifier: String(parsedResponse.channelIdentifier || "current"),
        author: parsedResponse.author ? String(parsedResponse.author) : null,
        timeRange: parsedResponse.timeRange ? String(parsedResponse.timeRange) : null,
        limit: Math.min(Math.max(Number(parsedResponse.limit) || 20, 1), 100)
      };
    }
  }
  return null;
};
var searchInMessages = (messages, query, author) => {
  const queryLower = query.toLowerCase().trim();
  const isLinkSearch = queryLower.includes("link") || queryLower.includes("url");
  return Array.from(messages.values()).filter((msg) => {
    if (msg.system) {
      return false;
    }
    if (author && author !== "null" && author !== "undefined") {
      const authorLower = author.toLowerCase();
      const matchesUsername = msg.author.username.toLowerCase().includes(authorLower);
      const matchesDisplayName = msg.member?.displayName?.toLowerCase().includes(authorLower) || false;
      if (!matchesUsername && !matchesDisplayName) {
        return false;
      }
    }
    if (isLinkSearch) {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return urlRegex.test(msg.content);
    }
    const contentMatch = msg.content.toLowerCase().includes(queryLower);
    const embedMatch = msg.embeds.some((embed) => embed.title?.toLowerCase().includes(queryLower) || embed.description?.toLowerCase().includes(queryLower) || embed.author?.name?.toLowerCase().includes(queryLower) || embed.fields?.some((field) => field.name?.toLowerCase().includes(queryLower) || field.value?.toLowerCase().includes(queryLower)));
    const attachmentMatch = msg.attachments.some((att) => att.name?.toLowerCase().includes(queryLower) || att.description?.toLowerCase().includes(queryLower));
    return contentMatch || embedMatch || attachmentMatch;
  });
};
var fallbackSpec2 = {
  name: "SEARCH_MESSAGES",
  description: "Search for messages in a Discord channel.",
  similes: ["FIND_MESSAGES", "LOOKUP_MESSAGES"],
  examples: []
};
var spec11 = (() => {
  try {
    return requireActionSpec("SEARCH_MESSAGES");
  } catch {
    return fallbackSpec2;
  }
})();
var searchMessages = {
  name: spec11.name,
  similes: spec11.similes ? [...spec11.similes] : [],
  description: spec11.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["search", "messages"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:search|messages)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return;
    }
    const searchParams = await getSearchParams(runtime, message, state);
    if (!searchParams) {
      await callback?.({
        text: "I couldn't understand what you want to search for. Please specify what to search.",
        source: "discord"
      });
      return;
    }
    try {
      let targetChannel = null;
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      if (searchParams.channelIdentifier === "current") {
        if (room?.channelId) {
          targetChannel = await discordService.client.channels.fetch(room.channelId);
        }
      } else if (searchParams.channelIdentifier.match(/^\d+$/)) {
        targetChannel = await discordService.client.channels.fetch(searchParams.channelIdentifier);
      } else {
        const serverId = room?.messageServerId;
        if (!serverId) {
          await callback?.({
            text: "I couldn't determine which server to search for that channel.",
            source: "discord"
          });
          return;
        }
        const guild = await discordService.client.guilds.fetch(serverId);
        const channels = await guild.channels.fetch();
        targetChannel = channels.find((channel) => channel?.name?.toLowerCase().includes(searchParams.channelIdentifier.toLowerCase()) && channel.isTextBased()) || null;
      }
      if (!targetChannel || !targetChannel.isTextBased()) {
        await callback?.({
          text: "I couldn't find that channel or I don't have access to it.",
          source: "discord"
        });
        return;
      }
      let before;
      if (searchParams.timeRange) {
        const now = Date.now();
        const timeMap = {
          hour: 60 * 60 * 1000,
          day: 24 * 60 * 60 * 1000,
          week: 7 * 24 * 60 * 60 * 1000,
          month: 30 * 24 * 60 * 60 * 1000
        };
        if (timeMap[searchParams.timeRange]) {
          before = now - timeMap[searchParams.timeRange];
        }
      }
      const messages = await targetChannel.messages.fetch({
        limit: 100,
        before: before?.toString()
      });
      const results = searchInMessages(messages, searchParams.query, searchParams.author);
      runtime.logger.debug({
        src: "plugin:discord:action:search-messages",
        agentId: runtime.agentId,
        query: searchParams.query,
        resultsCount: results.length,
        channelName: targetChannel.name
      }, "Search completed");
      const sortedResults = results.sort((a, b) => b.createdTimestamp - a.createdTimestamp);
      const limitedResults = sortedResults.slice(0, searchParams.limit);
      if (limitedResults.length === 0) {
        await callback?.({
          text: `No messages found matching "${searchParams.query}" in <#${targetChannel.id}>.`,
          source: "discord"
        });
        return;
      }
      const formattedResults = limitedResults.map((msg, index) => {
        const timestamp = new Date(msg.createdTimestamp).toLocaleString();
        const preview = msg.content.length > 100 ? `${msg.content.substring(0, 100)}...` : msg.content;
        const attachments = msg.attachments.size > 0 ? `
\uD83D\uDCCE ${msg.attachments.size} attachment(s)` : "";
        return `**${index + 1}.** ${msg.author.username} (${timestamp})
${preview}${attachments}
[Jump to message](${msg.url})`;
      }).join(`

`);
      const response = {
        text: `Found ${limitedResults.length} message${limitedResults.length !== 1 ? "s" : ""} matching "${searchParams.query}" in <#${targetChannel.id}>:

${formattedResults}`,
        source: message.content.source
      };
      await callback?.(response);
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:search-messages",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error searching messages");
      await callback?.({
        text: "I encountered an error while searching for messages. Please try again.",
        source: "discord"
      });
    }
  },
  examples: spec11.examples ?? []
};
var searchMessages_default = searchMessages;

// actions/sendDM.ts
import {
  composePromptFromState as composePromptFromState13,
  ModelType as ModelType13,
  parseJSONObjectFromText as parseJSONObjectFromText13
} from "@elizaos/core";
var getDMInfo = async (runtime, _message, state) => {
  const prompt = composePromptFromState13({
    state,
    template: sendDmTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType13.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText13(response);
    if (parsedResponse?.recipientIdentifier && parsedResponse.messageContent) {
      return parsedResponse;
    }
  }
  return null;
};
var findUser = async (discordService, identifier, currentServerId) => {
  if (!discordService.client) {
    return null;
  }
  const cleanId = identifier.replace(/[<@!>]/g, "");
  try {
    if (/^\d+$/.test(cleanId)) {
      try {
        return await discordService.client.users.fetch(cleanId);
      } catch (_e) {}
    }
    if (currentServerId) {
      const guild = await discordService.client.guilds.fetch(currentServerId);
      const members = await guild.members.fetch();
      const member = members.find((m) => m.user.username.toLowerCase() === identifier.toLowerCase() || m.displayName.toLowerCase() === identifier.toLowerCase() || m.user.tag.toLowerCase() === identifier.toLowerCase());
      if (member) {
        return member.user;
      }
    }
    const guilds = Array.from(discordService.client.guilds.cache.values());
    for (const guild of guilds) {
      try {
        const members = await guild.members.fetch();
        const member = members.find((m) => m.user.username.toLowerCase() === identifier.toLowerCase() || m.displayName.toLowerCase() === identifier.toLowerCase() || m.user.tag.toLowerCase() === identifier.toLowerCase());
        if (member) {
          return member.user;
        }
      } catch (_e) {}
    }
    return null;
  } catch (_error) {
    return null;
  }
};
var spec12 = requireActionSpec("SEND_DM");
var sendDM = {
  name: spec12.name,
  similes: spec12.similes ? [...spec12.similes] : [],
  description: spec12.description,
  validate: async (_runtime, message, _state) => {
    return message.content.source === "discord";
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      runtime.logger.error({ src: "plugin:discord:action:send-dm", agentId: runtime.agentId }, "Discord service not found or not initialized");
      return { success: false, error: "Discord service is not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const dmInfo = await getDMInfo(runtime, message, state);
    if (!dmInfo) {
      runtime.logger.warn({ src: "plugin:discord:action:send-dm", agentId: runtime.agentId }, "Could not parse DM information from message");
      if (callback) {
        await callback?.({
          text: "I couldn't understand who you want me to message or what to send. Please specify the recipient and the message content.",
          source: "discord"
        });
      }
      return { success: false, error: "Could not parse DM information" };
    }
    try {
      const room = state.data?.room || await runtime.getRoom(message.roomId);
      const currentServerId = room?.messageServerId;
      const targetUser = await findUser(discordService, dmInfo.recipientIdentifier, currentServerId);
      if (!targetUser) {
        if (callback) {
          await callback?.({
            text: `I couldn't find a user with the identifier "${dmInfo.recipientIdentifier}". Please make sure the username or ID is correct.`,
            source: "discord"
          });
        }
        return {
          success: false,
          error: `User not found: ${dmInfo.recipientIdentifier}`
        };
      }
      if (targetUser.bot) {
        if (callback) {
          await callback?.({
            text: "I cannot send direct messages to other bots.",
            source: "discord"
          });
        }
        return { success: false, error: "Cannot send DMs to bots" };
      }
      const dmChannel = await targetUser.createDM();
      await dmChannel.send(dmInfo.messageContent);
      const response = {
        text: `I've sent your message to ${targetUser.username}: "${dmInfo.messageContent}"`,
        actions: ["SEND_DM_RESPONSE"],
        source: message.content.source
      };
      if (callback) {
        await callback?.(response);
      }
      return { success: true, text: response.text };
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:send-dm",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error sending DM");
      if (error instanceof Error) {
        if (error.message.includes("Cannot send messages to this user")) {
          if (callback) {
            await callback?.({
              text: "I couldn't send a message to that user. They may have DMs disabled or we don't share a server.",
              source: "discord"
            });
          }
        } else {
          if (callback) {
            await callback?.({
              text: "I encountered an error while trying to send the direct message. Please make sure I have the necessary permissions.",
              source: "discord"
            });
          }
        }
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec12.examples ?? []
};
var sendDM_default = sendDM;

// actions/sendMessage.ts
import {
  composePromptFromState as composePromptFromState14,
  ModelType as ModelType14,
  parseJSONObjectFromText as parseJSONObjectFromText14
} from "@elizaos/core";
var sendMessageTemplate = `You are helping to extract send message parameters.

The user wants to send a message to a Discord channel.

Recent conversation:
{{recentMessages}}

Extract the following:
1. text: The message text to send
2. channelRef: The channel to send to (default: "current" for the current channel)

Respond with a JSON object like:
{
  "text": "The message to send",
  "channelRef": "current"
}

Only respond with the JSON object, no other text.`;
var spec13 = requireActionSpec("SEND_MESSAGE");
var sendMessage = {
  name: spec13.name,
  similes: spec13.similes ? [...spec13.similes] : [],
  description: spec13.description,
  validate: async (_runtime, message, _state) => {
    return message.content.source === "discord";
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      await callback?.({
        text: "Discord service is not available.",
        source: "discord"
      });
      return;
    }
    const prompt = composePromptFromState14({
      state,
      template: sendMessageTemplate
    });
    let messageInfo = null;
    for (let i = 0;i < 3; i++) {
      const response = await runtime.useModel(ModelType14.TEXT_SMALL, {
        prompt
      });
      const parsedResponse = parseJSONObjectFromText14(response);
      if (parsedResponse?.text) {
        messageInfo = {
          text: String(parsedResponse.text),
          channelRef: parsedResponse.channelRef ? String(parsedResponse.channelRef) : "current"
        };
        break;
      }
    }
    if (!messageInfo || !messageInfo.text) {
      runtime.logger.debug({ src: "plugin:discord:action:send-message" }, "[SEND_MESSAGE] Could not extract message info");
      await callback?.({
        text: "I couldn't understand what message you want me to send. Please try again with a clearer request.",
        source: "discord"
      });
      return;
    }
    try {
      const stateData = state?.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      if (!room || !room.channelId) {
        await callback?.({
          text: "I couldn't determine the current channel.",
          source: "discord"
        });
        return;
      }
      let targetChannelId = room.channelId;
      if (messageInfo.channelRef && messageInfo.channelRef !== "current") {
        const guild = discordService.client.guilds.cache.first();
        if (guild) {
          const channels = await guild.channels.fetch();
          const targetChannel = channels.find((ch) => {
            if (!ch || !ch.isTextBased())
              return false;
            const channelName = ch.name?.toLowerCase() || "";
            const searchTerm = messageInfo?.channelRef?.toLowerCase() || "";
            return channelName === searchTerm || channelName.includes(searchTerm) || ch.id === messageInfo?.channelRef;
          });
          if (targetChannel) {
            targetChannelId = targetChannel.id;
          }
        }
      }
      const channel = await discordService.client.channels.fetch(targetChannelId);
      if (!channel || !channel.isTextBased()) {
        await callback?.({
          text: "I can only send messages to text channels.",
          source: "discord"
        });
        return;
      }
      const textChannel = channel;
      const sentMessage = await textChannel.send(messageInfo.text);
      const response = {
        text: `Message sent successfully.`,
        source: message.content.source
      };
      runtime.logger.debug({
        src: "plugin:discord:action:send-message",
        messageId: sentMessage.id,
        channelId: targetChannelId
      }, "[SEND_MESSAGE] Message sent successfully");
      await callback?.(response);
      return {
        success: true,
        data: {
          messageId: sentMessage.id,
          channelId: targetChannelId
        }
      };
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:send-message",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error sending message");
      await callback?.({
        text: "I encountered an error while trying to send the message. Please make sure I have the necessary permissions.",
        source: "discord"
      });
    }
  },
  examples: spec13.examples ?? []
};
var sendMessage_default = sendMessage;

// actions/serverInfo.ts
var formatServerInfo = (guild, detailed = false) => {
  const createdAt = new Date(guild.createdAt).toLocaleDateString();
  const memberCount = guild.memberCount.toLocaleString();
  const channelCount = guild.channels.cache.size.toLocaleString();
  const roleCount = guild.roles.cache.size.toLocaleString();
  const emojiCount = guild.emojis.cache.size.toLocaleString();
  const boostLevel = guild.premiumTier;
  const boostCount = (guild.premiumSubscriptionCount || 0).toLocaleString();
  const basicInfo = [
    `\uD83C\uDFDB️ **Server Information for ${guild.name}**`,
    `**ID:** ${guild.id}`,
    `**Owner:** <@${guild.ownerId}>`,
    `**Created:** ${createdAt}`,
    `**Members:** ${memberCount}`,
    `**Channels:** ${channelCount}`,
    `**Roles:** ${roleCount}`,
    `**Server Level:** ${boostLevel} (${boostCount} boosts)`
  ];
  if (detailed) {
    const textChannels = guild.channels.cache.filter((ch) => ch.isTextBased()).size.toLocaleString();
    const voiceChannels = guild.channels.cache.filter((ch) => ch.isVoiceBased()).size.toLocaleString();
    const categories = guild.channels.cache.filter((ch) => ch.type === 4).size.toLocaleString();
    const activeThreads = guild.channels.cache.filter((ch) => ch.isThread() && !ch.archived).size.toLocaleString();
    const stickerCount = guild.stickers.cache.size.toLocaleString();
    const features = guild.features.length > 0 ? guild.features.map((f) => f.toLowerCase().replace(/_/g, " ")).join(", ") : "None";
    const detailedInfo = [
      "",
      "\uD83D\uDCCA **Detailed Statistics**",
      `**Text Channels:** ${textChannels}`,
      `**Voice Channels:** ${voiceChannels}`,
      `**Categories:** ${categories}`,
      `**Active Threads:** ${activeThreads}`,
      `**Custom Emojis:** ${emojiCount}`,
      `**Stickers:** ${stickerCount}`,
      "",
      "\uD83C\uDFAF **Server Features**",
      `**Verification Level:** ${guild.verificationLevel}`,
      `**Content Filter:** ${guild.explicitContentFilter}`,
      `**2FA Requirement:** ${guild.mfaLevel === 1 ? "Enabled" : "Disabled"}`,
      `**Features:** ${features}`
    ];
    if (guild.description) {
      detailedInfo.push(`**Description:** ${guild.description}`);
    }
    if (guild.vanityURLCode) {
      detailedInfo.push(`**Vanity URL:** discord.gg/${guild.vanityURLCode}`);
    }
    return [...basicInfo, ...detailedInfo].join(`
`);
  }
  return basicInfo.join(`
`);
};
var spec14 = requireActionSpec("SERVER_INFO");
var serverInfo = {
  name: spec14.name,
  similes: spec14.similes ? [...spec14.similes] : [],
  description: spec14.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["server", "info"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:server|info)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      if (callback) {
        await callback?.({
          text: "Discord service is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "Discord service is not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    try {
      const stateData = state.data;
      const room = stateData?.room || await runtime.getRoom(message.roomId);
      const serverId = room?.messageServerId;
      if (!serverId) {
        if (callback) {
          await callback?.({
            text: "I couldn't determine the current server.",
            source: "discord"
          });
        }
        return { success: false, error: "Could not determine current server" };
      }
      const guild = await discordService.client.guilds.fetch(serverId);
      const messageContentText = message.content.text;
      const messageText = messageContentText?.toLowerCase() || "";
      const isDetailed = messageText.includes("detailed") || messageText.includes("full") || messageText.includes("stats") || messageText.includes("statistics");
      const infoText = formatServerInfo(guild, isDetailed);
      const response = {
        text: infoText,
        source: message.content.source
      };
      if (callback) {
        await callback?.(response);
      }
      return { success: true, text: response.text };
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:server-info",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error getting server info");
      if (callback) {
        await callback?.({
          text: "I encountered an error while getting server information. Please try again.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec14.examples ?? []
};
var serverInfo_default = serverInfo;

// actions/summarizeConversation.ts
import fs2 from "node:fs";
import {
  ContentType as ContentType3,
  composePromptFromState as composePromptFromState15,
  getEntityDetails,
  logger,
  MemoryType as MemoryType5,
  ModelType as ModelType15,
  parseJSONObjectFromText as parseJSONObjectFromText15,
  splitChunks,
  trimTokens as trimTokens2
} from "@elizaos/core";
function normalizeTimestamp(timestamp) {
  const year2000InMs = 946684800000;
  if (timestamp > 0 && timestamp < year2000InMs) {
    const asMs = timestamp * 1000;
    const year2100InMs = 4102444800000;
    if (asMs >= year2000InMs && asMs <= year2100InMs) {
      return asMs;
    }
  }
  return timestamp;
}
function parseTimeToTimestamp(input) {
  if (typeof input === "number") {
    return normalizeTimestamp(input);
  }
  const asNumber = Number(input);
  if (!Number.isNaN(asNumber) && asNumber > 0) {
    return normalizeTimestamp(asNumber);
  }
  const isoDate = Date.parse(input);
  if (!Number.isNaN(isoDate)) {
    return isoDate;
  }
  const relativeMatch = input.match(/(\d+\.?\d*)\s*(second|minute|hour|day|week|month|year)s?\s+ago/i);
  if (relativeMatch) {
    const value = parseFloat(relativeMatch[1]);
    const unit = relativeMatch[2].toLowerCase();
    const multipliers = {
      second: 1000,
      minute: 60 * 1000,
      hour: 3600 * 1000,
      day: 86400 * 1000,
      week: 7 * 86400 * 1000,
      month: 30 * 86400 * 1000,
      year: 365 * 86400 * 1000
    };
    const milliseconds = value * (multipliers[unit] || 0);
    return Date.now() - milliseconds;
  }
  logger.warn(`[parseTimeToTimestamp] Could not parse time value, using current time: ${input}`);
  return Date.now();
}
var getDateRange = async (runtime, _message, state) => {
  const prompt = composePromptFromState15({
    state,
    template: dateRangeTemplate
  });
  for (let i = 0;i < 5; i++) {
    const response = await runtime.useModel(ModelType15.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText15(response);
    if (parsedResponse) {
      if (parsedResponse.objective && parsedResponse.start && parsedResponse.end) {
        const startRaw = parseTimeToTimestamp(parsedResponse.start);
        const endRaw = parseTimeToTimestamp(parsedResponse.end);
        if (!Number.isFinite(startRaw) || !Number.isFinite(endRaw)) {
          logger.warn(`[getDateRange] Invalid timestamps parsed: start=${startRaw}, end=${endRaw}, retrying...`);
          continue;
        }
        let start = startRaw <= endRaw ? startRaw : endRaw;
        const end = startRaw <= endRaw ? endRaw : startRaw;
        if (start === end) {
          start = end - 3600 * 1000;
        }
        return {
          objective: parsedResponse.objective,
          start,
          end
        };
      }
    }
  }
  return null;
};
var spec15 = requireActionSpec("SUMMARIZE_CONVERSATION");
var summarize = {
  name: spec15.name,
  similes: spec15.similes ? [...spec15.similes] : [],
  description: spec15.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["summarize", "conversation"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:summarize|conversation)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      if (message2.content.source !== "discord") {
        return false;
      }
      const keywords = [
        "summarize",
        "summarization",
        "summary",
        "recap",
        "report",
        "overview",
        "review",
        "rundown",
        "wrap-up",
        "brief",
        "debrief",
        "abstract",
        "synopsis",
        "outline",
        "digest",
        "abridgment",
        "condensation",
        "encapsulation",
        "essence",
        "gist",
        "main points",
        "key points",
        "key takeaways",
        "bulletpoint",
        "highlights",
        "tldr",
        "tl;dr",
        "in a nutshell",
        "bottom line",
        "long story short",
        "sum up",
        "sum it up",
        "short version",
        "bring me up to speed",
        "catch me up"
      ];
      return keywords.some((keyword) => message2.content.text?.toLowerCase().includes(keyword.toLowerCase()));
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const callbackData = {
      text: "",
      actions: ["SUMMARIZATION_RESPONSE"],
      source: message.content.source,
      attachments: []
    };
    const { roomId } = message;
    const dateRange = await getDateRange(runtime, message, state);
    if (!dateRange) {
      runtime.logger.warn({
        src: "plugin:discord:action:summarize-conversation",
        agentId: runtime.agentId
      }, "Could not get date range from message");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: "discord",
          thought: "I couldn't get the date range from the message",
          actions: ["SUMMARIZE_CONVERSATION_FAILED"]
        },
        metadata: {
          type: MemoryType5.CUSTOM
        }
      }, "messages");
      return { success: false, error: "Could not get date range from message" };
    }
    const { objective, start, end } = dateRange;
    const memories = await runtime.getMemories({
      tableName: "messages",
      roomId,
      start,
      end,
      count: 1e4,
      unique: false
    });
    const entities = await getEntityDetails({
      runtime,
      roomId
    });
    const actorMap = new Map(entities.map((entity) => [entity.id, entity]));
    const formattedMemories = memories.map((memory) => {
      const memoryAttachments = memory.content.attachments;
      const attachments = memoryAttachments?.map((attachment) => {
        return `---
Attachment: ${attachment.id}
${attachment.description}
${attachment.text}
---`;
      }).join(`
`) || "";
      const entity = actorMap.get(memory.entityId);
      const entityName = entity?.name ?? "Unknown User";
      const entityUsername = entity?.username ?? "";
      return `${entityName} (${entityUsername}): ${memory.content.text}
${attachments}`;
    }).join(`
`);
    let currentSummary = "";
    const chunkSize = 8000;
    const chunks = await splitChunks(formattedMemories, chunkSize, 0);
    state.values.memoriesWithAttachments = formattedMemories;
    state.values.objective = objective;
    for (let i = 0;i < chunks.length; i++) {
      const chunk = chunks[i];
      state.values.currentSummary = currentSummary;
      state.values.currentChunk = chunk;
      const template = await trimTokens2(summarizationTemplate, chunkSize + 500, runtime);
      const prompt = composePromptFromState15({
        state,
        template
      });
      const summary = await runtime.useModel(ModelType15.TEXT_SMALL, {
        prompt
      });
      currentSummary = `${currentSummary}
${summary}`;
    }
    if (!currentSummary) {
      runtime.logger.warn({
        src: "plugin:discord:action:summarize-conversation",
        agentId: runtime.agentId
      }, "No summary found");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: "discord",
          thought: "I couldn't summarize the conversation",
          actions: ["SUMMARIZE_CONVERSATION_FAILED"]
        },
        metadata: {
          type: MemoryType5.CUSTOM
        }
      }, "messages");
      return { success: false, error: "Could not summarize conversation" };
    }
    callbackData.text = currentSummary.trim();
    const trimmedSummary = currentSummary.trim();
    if (callbackData.text && (trimmedSummary && trimmedSummary.split(`
`).length < 4 || trimmedSummary && trimmedSummary.split(" ").length < 100)) {
      callbackData.text = `Here is the summary:
\`\`\`md
${currentSummary.trim()}
\`\`\`
`;
      if (callback) {
        await callback?.(callbackData);
      }
      return { success: true, text: callbackData.text };
    } else if (currentSummary.trim()) {
      const summaryDir = "cache";
      const summaryFilename = `${summaryDir}/conversation_summary_${Date.now()}`;
      await runtime.setCache(summaryFilename, currentSummary);
      await fs2.promises.mkdir(summaryDir, { recursive: true });
      await fs2.promises.writeFile(summaryFilename, currentSummary, "utf8");
      if (callback) {
        await callback?.({
          ...callbackData,
          text: `I've attached the summary of the conversation from \`${new Date(start).toString()}\` to \`${new Date(end).toString()}\` as a text file.`,
          attachments: [
            ...callbackData.attachments || [],
            {
              id: summaryFilename,
              url: summaryFilename,
              title: "Conversation Summary",
              source: "discord",
              contentType: ContentType3.DOCUMENT
            }
          ]
        });
      }
      return { success: true, text: `Summary saved to ${summaryFilename}` };
    } else {
      runtime.logger.warn({
        src: "plugin:discord:action:summarize-conversation",
        agentId: runtime.agentId
      }, "Empty response from summarize conversation action");
      return {
        success: false,
        error: "Empty response from summarize conversation action"
      };
    }
  },
  examples: spec15.examples ?? []
};

// actions/transcribeMedia.ts
import {
  ContentType as ContentType4,
  composePromptFromState as composePromptFromState16,
  MemoryType as MemoryType6,
  ModelType as ModelType16,
  parseJSONObjectFromText as parseJSONObjectFromText16
} from "@elizaos/core";
var getMediaAttachmentId = async (runtime, _message, state) => {
  const prompt = composePromptFromState16({
    state,
    template: mediaAttachmentIdTemplate
  });
  for (let i = 0;i < 5; i++) {
    const response = await runtime.useModel(ModelType16.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText16(response);
    if (parsedResponse?.attachmentId) {
      return parsedResponse.attachmentId;
    }
  }
  return null;
};
var spec16 = requireActionSpec("TRANSCRIBE_MEDIA");
var transcribeMedia = {
  name: spec16.name,
  similes: spec16.similes ? [...spec16.similes] : [],
  description: spec16.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["transcribe", "media"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:transcribe|media)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      if (message2.content.source !== "discord") {
        return false;
      }
      const keywords = [
        "transcribe",
        "transcript",
        "audio",
        "video",
        "media",
        "youtube",
        "meeting",
        "recording",
        "podcast",
        "call",
        "conference",
        "interview",
        "speech",
        "lecture",
        "presentation"
      ];
      return keywords.some((keyword) => message2.content.text?.toLowerCase().includes(keyword.toLowerCase()));
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const callbackData = {
      text: "",
      actions: ["TRANSCRIBE_MEDIA_RESPONSE"],
      source: message.content.source,
      attachments: []
    };
    const attachmentId = await getMediaAttachmentId(runtime, message, state);
    if (!attachmentId) {
      runtime.logger.warn({
        src: "plugin:discord:action:transcribe-media",
        agentId: runtime.agentId
      }, "Could not get media attachment ID from message");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: "discord",
          thought: "I couldn't find the media attachment ID in the message",
          actions: ["TRANSCRIBE_MEDIA_FAILED"]
        },
        metadata: {
          type: MemoryType6.CUSTOM
        }
      }, "messages");
      return;
    }
    const conversationLength = runtime.getConversationLength();
    const recentMessages = await runtime.getMemories({
      tableName: "messages",
      roomId: message.roomId,
      count: conversationLength,
      unique: false
    });
    const attachment = recentMessages.filter((msg) => msg.content.attachments && msg.content.attachments.length > 0).flatMap((msg) => msg.content.attachments).find((attachment2) => attachment2 && attachment2.id.toLowerCase() === attachmentId.toLowerCase());
    if (!attachment) {
      runtime.logger.warn({
        src: "plugin:discord:action:transcribe-media",
        agentId: runtime.agentId,
        attachmentId
      }, "Could not find attachment");
      await runtime.createMemory({
        entityId: message.entityId,
        agentId: message.agentId,
        roomId: message.roomId,
        content: {
          source: "discord",
          thought: `I couldn't find the media attachment with ID ${attachmentId}`,
          actions: ["TRANSCRIBE_MEDIA_FAILED"]
        },
        metadata: {
          type: MemoryType6.CUSTOM
        }
      }, "messages");
      return;
    }
    const mediaTranscript = attachment.text;
    callbackData.text = mediaTranscript?.trim();
    if (callbackData.text && (callbackData.text.split(`
`).length < 4 || callbackData.text.split(" ").length < 100)) {
      callbackData.text = `Here is the transcript:
\`\`\`md
${mediaTranscript?.trim() || ""}
\`\`\`
`;
      await callback?.(callbackData);
    } else if (callbackData.text) {
      const transcriptFilename = `content/transcript_${Date.now()}`;
      await runtime.setCache(transcriptFilename, callbackData.text);
      await callback?.({
        ...callbackData,
        text: "I've attached the transcript as a text file.",
        attachments: [
          ...callbackData.attachments || [],
          {
            id: transcriptFilename,
            url: transcriptFilename,
            title: "Transcript",
            source: "discord",
            contentType: ContentType4.DOCUMENT
          }
        ]
      });
    } else {
      runtime.logger.warn({
        src: "plugin:discord:action:transcribe-media",
        agentId: runtime.agentId
      }, "Empty response from transcribe media action");
    }
    return { success: true, text: callbackData.text };
  },
  examples: spec16.examples ?? []
};

// actions/unpinMessage.ts
import {
  composePromptFromState as composePromptFromState17,
  ModelType as ModelType17,
  parseJSONObjectFromText as parseJSONObjectFromText17
} from "@elizaos/core";
import {
  PermissionsBitField as PermissionsBitField3
} from "discord.js";
var getMessageRef2 = async (runtime, _message, state) => {
  const prompt = composePromptFromState17({
    state,
    template: unpinMessageTemplate
  });
  for (let i = 0;i < 3; i++) {
    const response = await runtime.useModel(ModelType17.TEXT_SMALL, {
      prompt
    });
    const parsedResponse = parseJSONObjectFromText17(response);
    if (parsedResponse?.messageRef) {
      return {
        messageRef: String(parsedResponse.messageRef)
      };
    }
  }
  return null;
};
var spec17 = requireActionSpec("UNPIN_MESSAGE");
var unpinMessage = {
  name: spec17.name,
  similes: spec17.similes ? [...spec17.similes] : [],
  description: spec17.description,
  validate: async (runtime, message, state, options) => {
    const __avTextRaw = typeof message?.content?.text === "string" ? message.content.text : "";
    const __avText = __avTextRaw.toLowerCase();
    const __avKeywords = ["unpin", "message"];
    const __avKeywordOk = __avKeywords.length > 0 && __avKeywords.some((word) => word.length > 0 && __avText.includes(word));
    const __avRegex = /\b(?:unpin|message)\b/i;
    const __avRegexOk = __avRegex.test(__avText);
    const __avSource = String(message?.content?.source ?? message?.source ?? "");
    const __avExpectedSource = "";
    const __avSourceOk = __avExpectedSource ? __avSource === __avExpectedSource : Boolean(__avSource || state || runtime?.agentId || runtime?.getService || runtime?.getSetting);
    const __avOptions = options && typeof options === "object" ? options : {};
    const __avInputOk = __avText.trim().length > 0 || Object.keys(__avOptions).length > 0 || Boolean(message?.content && typeof message.content === "object");
    if (!(__avKeywordOk && __avRegexOk && __avSourceOk && __avInputOk)) {
      return false;
    }
    const __avLegacyValidate = async (_runtime, message2, _state) => {
      return message2.content.source === "discord";
    };
    try {
      return Boolean(await __avLegacyValidate(runtime, message, state, options));
    } catch {
      return false;
    }
  },
  handler: async (runtime, message, state, _options, callback) => {
    const discordService = runtime.getService(DISCORD_SERVICE_NAME);
    if (!discordService || !discordService.client) {
      if (callback) {
        await callback?.({
          text: "Discord service is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "Discord service is not available" };
    }
    if (!state) {
      if (callback) {
        await callback?.({
          text: "State is not available.",
          source: "discord"
        });
      }
      return { success: false, error: "State is not available" };
    }
    const messageInfo = await getMessageRef2(runtime, message, state);
    if (!messageInfo) {
      if (callback) {
        await callback?.({
          text: "I couldn't understand which message you want to unpin. Please be more specific.",
          source: "discord"
        });
      }
      return { success: false, error: "Could not parse message reference" };
    }
    try {
      const room = state.data?.room || await runtime.getRoom(message.roomId);
      if (!room?.channelId) {
        if (callback) {
          await callback?.({
            text: "I couldn't determine the current channel.",
            source: "discord"
          });
        }
        return { success: false, error: "Could not determine current channel" };
      }
      const channel = await discordService.client.channels.fetch(room.channelId);
      if (!channel || !channel.isTextBased()) {
        if (callback) {
          await callback?.({
            text: "I can only unpin messages in text channels.",
            source: "discord"
          });
        }
        return { success: false, error: "Channel is not a text channel" };
      }
      const textChannel = channel;
      const clientUser = discordService.client.user;
      const botMember = textChannel.guild?.members.cache.get(clientUser?.id);
      if (botMember) {
        const permissions = textChannel.permissionsFor(botMember);
        if (permissions && !permissions.has(PermissionsBitField3.Flags.ManageMessages)) {
          if (callback) {
            await callback?.({
              text: "I don't have permission to unpin messages in this channel. I need the 'Manage Messages' permission.",
              source: "discord"
            });
          }
          return { success: false, error: "Missing ManageMessages permission" };
        }
      }
      let targetMessage = null;
      const pinnedMessages = await textChannel.messages.fetchPinned();
      if (pinnedMessages.size === 0) {
        if (callback) {
          await callback?.({
            text: "There are no pinned messages in this channel.",
            source: "discord"
          });
        }
        return { success: true, text: "No pinned messages in channel" };
      }
      if (messageInfo.messageRef === "last_pinned" || messageInfo.messageRef === "last") {
        targetMessage = Array.from(pinnedMessages.values()).sort((a, b) => b.createdTimestamp - a.createdTimestamp)[0];
      } else if (/^\d+$/.test(messageInfo.messageRef)) {
        targetMessage = pinnedMessages.get(messageInfo.messageRef) || null;
      } else {
        const searchLower = messageInfo.messageRef.toLowerCase();
        targetMessage = Array.from(pinnedMessages.values()).find((msg) => {
          const contentMatch = msg.content.toLowerCase().includes(searchLower);
          const authorMatch = msg.author.username.toLowerCase().includes(searchLower);
          return contentMatch || authorMatch;
        }) || null;
      }
      if (!targetMessage) {
        if (callback) {
          await callback?.({
            text: "I couldn't find a pinned message matching your description.",
            source: "discord"
          });
        }
        return {
          success: false,
          error: "Could not find matching pinned message"
        };
      }
      try {
        await targetMessage.unpin();
        const response = {
          text: `I've unpinned the message from ${targetMessage.author.username}.`,
          source: message.content.source
        };
        if (callback) {
          await callback?.(response);
        }
        return { success: true, text: response.text };
      } catch (error) {
        runtime.logger.error({
          src: "plugin:discord:action:unpin-message",
          agentId: runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Failed to unpin message");
        if (callback) {
          await callback?.({
            text: "I couldn't unpin that message. Please try again.",
            source: "discord"
          });
        }
        return {
          success: false,
          error: error instanceof Error ? error.message : String(error)
        };
      }
    } catch (error) {
      runtime.logger.error({
        src: "plugin:discord:action:unpin-message",
        agentId: runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error unpinning message");
      if (callback) {
        await callback?.({
          text: "I encountered an error while trying to unpin the message. Please make sure I have the necessary permissions.",
          source: "discord"
        });
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  examples: spec17.examples ?? []
};
var unpinMessage_default = unpinMessage;

// permissions.ts
var Permissions = {
  AddReactions: 1n << 6n,
  PrioritySpeaker: 1n << 8n,
  Stream: 1n << 9n,
  ViewChannel: 1n << 10n,
  SendMessages: 1n << 11n,
  SendTTSMessages: 1n << 12n,
  ManageMessages: 1n << 13n,
  EmbedLinks: 1n << 14n,
  AttachFiles: 1n << 15n,
  ReadMessageHistory: 1n << 16n,
  MentionEveryone: 1n << 17n,
  UseExternalEmojis: 1n << 18n,
  Connect: 1n << 20n,
  Speak: 1n << 21n,
  MuteMembers: 1n << 22n,
  DeafenMembers: 1n << 23n,
  MoveMembers: 1n << 24n,
  UseVAD: 1n << 25n,
  KickMembers: 1n << 1n,
  BanMembers: 1n << 2n,
  ChangeNickname: 1n << 26n,
  ManageNicknames: 1n << 27n,
  ManageChannels: 1n << 4n,
  ManageRoles: 1n << 28n,
  ManageWebhooks: 1n << 29n,
  ManageGuildExpressions: 1n << 30n,
  UseApplicationCommands: 1n << 31n,
  ManageThreads: 1n << 34n,
  CreatePublicThreads: 1n << 35n,
  CreatePrivateThreads: 1n << 36n,
  UseExternalStickers: 1n << 37n,
  SendMessagesInThreads: 1n << 38n,
  UseEmbeddedActivities: 1n << 39n,
  ModerateMembers: 1n << 40n,
  SendVoiceMessages: 1n << 46n,
  SendPolls: 1n << 47n
};
var TEXT_BASIC = Permissions.ViewChannel | Permissions.AddReactions | Permissions.SendMessages | Permissions.EmbedLinks | Permissions.AttachFiles | Permissions.UseExternalEmojis | Permissions.ReadMessageHistory | Permissions.SendMessagesInThreads | Permissions.UseApplicationCommands;
var TEXT_MODERATOR = TEXT_BASIC | Permissions.ManageMessages | Permissions.MentionEveryone | Permissions.CreatePublicThreads | Permissions.CreatePrivateThreads | Permissions.ManageThreads | Permissions.UseExternalStickers | Permissions.SendPolls | Permissions.ModerateMembers;
var TEXT_ADMIN = TEXT_MODERATOR | Permissions.KickMembers | Permissions.BanMembers | Permissions.ManageNicknames | Permissions.ManageChannels | Permissions.ManageRoles | Permissions.ManageWebhooks | Permissions.ManageGuildExpressions;
var VOICE_ADDON = Permissions.Connect | Permissions.Speak | Permissions.UseVAD | Permissions.PrioritySpeaker | Permissions.Stream | Permissions.SendVoiceMessages;
var VOICE_ADMIN_ADDON = VOICE_ADDON | Permissions.MuteMembers | Permissions.DeafenMembers | Permissions.MoveMembers;
var PERMISSIONS_BASIC = TEXT_BASIC;
var PERMISSIONS_BASIC_VOICE = TEXT_BASIC | VOICE_ADDON;
var PERMISSIONS_MODERATOR = TEXT_MODERATOR;
var PERMISSIONS_MODERATOR_VOICE = TEXT_MODERATOR | VOICE_ADDON;
var PERMISSIONS_ADMIN = TEXT_ADMIN;
var PERMISSIONS_ADMIN_VOICE = TEXT_ADMIN | VOICE_ADMIN_ADDON;
var DiscordPermissionTiers = {
  BASIC: Number(PERMISSIONS_BASIC),
  BASIC_VOICE: Number(PERMISSIONS_BASIC_VOICE),
  MODERATOR: Number(PERMISSIONS_MODERATOR),
  MODERATOR_VOICE: Number(PERMISSIONS_MODERATOR_VOICE),
  ADMIN: Number(PERMISSIONS_ADMIN),
  ADMIN_VOICE: Number(PERMISSIONS_ADMIN_VOICE)
};
function generateInviteUrl(applicationId, tier = "MODERATOR_VOICE") {
  const permissions = DiscordPermissionTiers[tier];
  return `https://discord.com/api/oauth2/authorize?client_id=${applicationId}&permissions=${permissions}&scope=bot%20applications.commands`;
}
function getPermissionValues() {
  return {
    basic: DiscordPermissionTiers.BASIC,
    basicVoice: DiscordPermissionTiers.BASIC_VOICE,
    moderator: DiscordPermissionTiers.MODERATOR,
    moderatorVoice: DiscordPermissionTiers.MODERATOR_VOICE,
    admin: DiscordPermissionTiers.ADMIN,
    adminVoice: DiscordPermissionTiers.ADMIN_VOICE
  };
}
function generateAllInviteUrls(applicationId) {
  return {
    basic: generateInviteUrl(applicationId, "BASIC"),
    basicVoice: generateInviteUrl(applicationId, "BASIC_VOICE"),
    moderator: generateInviteUrl(applicationId, "MODERATOR"),
    moderatorVoice: generateInviteUrl(applicationId, "MODERATOR_VOICE"),
    admin: generateInviteUrl(applicationId, "ADMIN"),
    adminVoice: generateInviteUrl(applicationId, "ADMIN_VOICE")
  };
}

// banner.ts
var ANSI = {
  reset: "\x1B[0m",
  bold: "\x1B[1m",
  dim: "\x1B[2m",
  blue: "\x1B[34m",
  brightRed: "\x1B[91m",
  brightGreen: "\x1B[92m",
  brightYellow: "\x1B[93m",
  brightBlue: "\x1B[94m",
  brightMagenta: "\x1B[95m",
  brightCyan: "\x1B[96m",
  brightWhite: "\x1B[97m"
};
function mask(v) {
  if (!v || v.length <= 8) {
    return "••••••••";
  }
  return `${v.slice(0, 4)}${"•".repeat(Math.min(12, v.length - 8))}${v.slice(-4)}`;
}
function fmtVal(value, sensitive, maxLen) {
  let s;
  if (value === undefined || value === null || value === "") {
    s = "(not set)";
  } else if (sensitive) {
    s = mask(String(value));
  } else {
    s = String(value);
  }
  if (s.length > maxLen) {
    s = `${s.slice(0, maxLen - 3)}...`;
  }
  return s;
}
var ANSI_PATTERN = /\x1b\[[0-9;]*m/g;
function pad(s, n) {
  const len = s.replace(ANSI_PATTERN, "").length;
  if (len >= n) {
    return s;
  }
  return s + " ".repeat(n - len);
}
function line(content) {
  const len = content.replace(ANSI_PATTERN, "").length;
  if (len <= 78) {
    return content + " ".repeat(78 - len);
  }
  let visibleCount = 0;
  let result = "";
  let i = 0;
  while (i < content.length && visibleCount < 78) {
    const remaining = content.slice(i);
    const match = remaining.match(/^\x1b\[[0-9;]*m/);
    if (match) {
      result += match[0];
      i += match[0].length;
    } else {
      result += content[i];
      visibleCount++;
      i++;
    }
  }
  return result + ANSI.reset;
}
function printBanner(options) {
  const { settings, runtime } = options;
  const { reset: R, dim: D, bold: B } = ANSI;
  const { brightBlue: c1, brightCyan: c2, brightMagenta: c3 } = ANSI;
  const top = `${c1}╔${"═".repeat(78)}╗${R}`;
  const mid = `${c1}╠${"═".repeat(78)}╣${R}`;
  const bot = `${c1}╚${"═".repeat(78)}╝${R}`;
  const row = (s) => `${c1}║${R}${line(s)}${c1}║${R}`;
  const lines = [""];
  lines.push(top);
  lines.push(row(` ${B}Character: ${runtime.character.name}${R}`));
  lines.push(mid);
  lines.push(row(`${c2}     ██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗     ${c3}◖ ◗${R}`));
  lines.push(row(`${c2}     ██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗   ${c3}◖===◗${R}`));
  lines.push(row(`${c2}     ██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║    ${c3}╰─╯${R}`));
  lines.push(row(`${c2}     ██████╔╝██║╚════██║╚██████╗╚██████╔╝██║  ██║██████╔╝   ${c3}(◠◠)${R}`));
  lines.push(row(`${c2}     ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝     ${c3}‿‿${R}`));
  lines.push(row(`${D}            Bot Integration  •  Servers  •  Channels  •  Voice${R}`));
  lines.push(mid);
  const NW = 34, VW = 26, SW = 8;
  lines.push(row(` ${B}${pad("ENV VARIABLE", NW)} ${pad("VALUE", VW)} ${pad("STATUS", SW)}${R}`));
  lines.push(row(` ${D}${"-".repeat(NW)} ${"-".repeat(VW)} ${"-".repeat(SW)}${R}`));
  for (const s of settings) {
    const set = s.value !== undefined && s.value !== null && s.value !== "";
    const isDefault = set && s.defaultValue !== undefined && String(s.value) === String(s.defaultValue);
    let ico, st;
    if (!set && s.required) {
      ico = `${ANSI.brightRed}◆${R}`;
      st = `${ANSI.brightRed}REQUIRED${R}`;
    } else if (!set) {
      ico = `${D}○${R}`;
      st = `${D}unset${R}`;
    } else if (isDefault) {
      ico = `${ANSI.brightBlue}●${R}`;
      st = `${ANSI.brightBlue}default${R}`;
    } else {
      ico = `${ANSI.brightGreen}✓${R}`;
      st = `${ANSI.brightGreen}custom${R}`;
    }
    const name = pad(s.name, NW - 2);
    const val = pad(fmtVal(s.value ?? s.defaultValue, s.sensitive ?? false, VW), VW);
    const status = pad(st, SW);
    lines.push(row(` ${ico} ${c2}${name}${R} ${val} ${status}`));
  }
  lines.push(mid);
  lines.push(row(` ${D}${ANSI.brightGreen}✓${D} custom  ${ANSI.brightBlue}●${D} default  ○ unset  ${ANSI.brightRed}◆${D} required      → Set in .env${R}`));
  lines.push(bot);
  if (options.applicationId && options.discordPermissions) {
    const p = options.discordPermissions;
    const baseUrl = `https://discord.com/api/oauth2/authorize?client_id=${options.applicationId}&scope=bot%20applications.commands&permissions=`;
    lines.push("");
    lines.push(`${B}${ANSI.brightCyan}\uD83D\uDD17 Discord Bot Invite${R}`);
    lines.push("");
    lines.push(`   ${B}\uD83C\uDF99️  With Voice:${R}`);
    lines.push(`   ${ANSI.brightGreen}● Basic${R}      ${baseUrl}${p.basicVoice}`);
    lines.push(`   ${ANSI.brightYellow}● Moderator${R}  ${baseUrl}${p.moderatorVoice}`);
    lines.push(`   ${ANSI.brightRed}● Admin${R}      ${baseUrl}${p.adminVoice}`);
    lines.push("");
    lines.push(`   ${B}\uD83D\uDCAC Without Voice:${R}`);
    lines.push(`   ${ANSI.brightCyan}○ Basic${R}      ${baseUrl}${p.basic}`);
    lines.push(`   ${ANSI.brightMagenta}○ Moderator${R}  ${baseUrl}${p.moderator}`);
    lines.push(`   ${ANSI.brightBlue}○ Admin${R}      ${baseUrl}${p.admin}`);
  }
  lines.push("");
  runtime.logger.info(lines.join(`
`));
}

// providers/channelState.ts
import { ChannelType as ChannelType2 } from "@elizaos/core";

// types.ts
var DiscordEventTypes;
((DiscordEventTypes2) => {
  DiscordEventTypes2["MESSAGE_RECEIVED"] = "DISCORD_MESSAGE_RECEIVED";
  DiscordEventTypes2["MESSAGE_SENT"] = "DISCORD_MESSAGE_SENT";
  DiscordEventTypes2["SLASH_COMMAND"] = "DISCORD_SLASH_COMMAND";
  DiscordEventTypes2["MODAL_SUBMIT"] = "DISCORD_MODAL_SUBMIT";
  DiscordEventTypes2["REACTION_RECEIVED"] = "DISCORD_REACTION_RECEIVED";
  DiscordEventTypes2["REACTION_REMOVED"] = "DISCORD_REACTION_REMOVED";
  DiscordEventTypes2["WORLD_JOINED"] = "DISCORD_WORLD_JOINED";
  DiscordEventTypes2["WORLD_CONNECTED"] = "DISCORD_SERVER_CONNECTED";
  DiscordEventTypes2["ENTITY_JOINED"] = "DISCORD_USER_JOINED";
  DiscordEventTypes2["ENTITY_LEFT"] = "DISCORD_USER_LEFT";
  DiscordEventTypes2["VOICE_STATE_CHANGED"] = "DISCORD_VOICE_STATE_CHANGED";
  DiscordEventTypes2["CHANNEL_PERMISSIONS_CHANGED"] = "DISCORD_CHANNEL_PERMISSIONS_CHANGED";
  DiscordEventTypes2["ROLE_PERMISSIONS_CHANGED"] = "DISCORD_ROLE_PERMISSIONS_CHANGED";
  DiscordEventTypes2["MEMBER_ROLES_CHANGED"] = "DISCORD_MEMBER_ROLES_CHANGED";
  DiscordEventTypes2["ROLE_CREATED"] = "DISCORD_ROLE_CREATED";
  DiscordEventTypes2["ROLE_DELETED"] = "DISCORD_ROLE_DELETED";
  DiscordEventTypes2["LISTEN_CHANNEL_MESSAGE"] = "DISCORD_LISTEN_CHANNEL_MESSAGE";
  DiscordEventTypes2["NOT_IN_CHANNELS_MESSAGE"] = "DISCORD_NOT_IN_CHANNELS_MESSAGE";
})(DiscordEventTypes ||= {});
var ServiceType2 = {
  DISCORD: "discord"
};

// providers/channelState.ts
var spec18 = requireProviderSpec("channelState");
var channelStateProvider = {
  name: spec18.name,
  dynamic: true,
  get: async (runtime, message, state) => {
    const room = state.data?.room ?? await runtime.getRoom(message.roomId);
    if (!room) {
      throw new Error("No room found");
    }
    if (message.content.source !== "discord") {
      return {
        data: {},
        values: {},
        text: ""
      };
    }
    const agentName = state?.agentName || "The agent";
    const senderName = state?.senderName || "someone";
    let responseText = "";
    let channelType = "";
    let serverName = "";
    const channelId = room.channelId ?? "";
    if (room.type === ChannelType2.DM) {
      channelType = "DM";
      responseText = `${agentName} is currently in a direct message conversation with ${senderName}. ${agentName} should engage in conversation, should respond to messages that are addressed to them and only ignore messages that seem to not require a response.`;
    } else {
      channelType = "GROUP";
      if (!channelId) {
        runtime.logger.error({
          src: "plugin:discord:provider:channelState",
          agentId: runtime.agentId,
          roomId: room.id
        }, "No channel ID found");
        return {
          data: {
            room,
            channelType
          },
          values: {
            channelType
          },
          text: ""
        };
      }
      const discordService = runtime.getService(ServiceType2.DISCORD);
      if (!discordService) {
        runtime.logger.warn({
          src: "plugin:discord:provider:channelState",
          agentId: runtime.agentId,
          channelId
        }, "No discord client found");
        return {
          data: {
            room,
            channelType,
            channelId
          },
          values: {
            channelType,
            channelId
          },
          text: ""
        };
      }
      let channel = discordService.client?.channels.cache.get(channelId);
      if (!channel && discordService.client) {
        try {
          channel = await discordService.client.channels.fetch(channelId);
        } catch (fetchError) {
          runtime.logger.debug({
            src: "plugin:discord:provider:channelState",
            agentId: runtime.agentId,
            channelId,
            error: fetchError instanceof Error ? fetchError.message : String(fetchError)
          }, "Failed to fetch channel");
        }
      }
      const guild = channel?.guild;
      if (!guild) {
        runtime.logger.warn({
          src: "plugin:discord:provider:channelState",
          agentId: runtime.agentId,
          channelId
        }, "Guild not found for channel (not in cache and fetch failed)");
        return {
          data: {
            room,
            channelType,
            channelId
          },
          values: {
            channelType,
            channelId
          },
          text: ""
        };
      }
      serverName = guild.name;
      responseText = `${agentName} is currently having a conversation in the channel \`#${channel?.name || channelId}\` in the server \`${serverName}\``;
      responseText += `
${agentName} is in a room with other users and should be self-conscious and only participate when directly addressed or when the conversation is relevant to them.`;
    }
    return {
      data: {
        room,
        channelType,
        serverName,
        channelId
      },
      values: {
        channelType,
        serverName,
        channelId
      },
      text: responseText
    };
  }
};

// providers/guildInfo.ts
var spec19 = requireProviderSpec("guildInfo");
var guildInfoProvider = {
  name: spec19.name,
  dynamic: true,
  get: async (runtime, message, state) => {
    if (message.content.source !== "discord") {
      return {
        data: {},
        values: {},
        text: ""
      };
    }
    const room = state.data?.room ?? await runtime.getRoom(message.roomId);
    if (!room) {
      return {
        data: { isInGuild: false },
        values: { isInGuild: false },
        text: ""
      };
    }
    const channelId = room.channelId ?? "";
    if (!channelId) {
      return {
        data: { isInGuild: false },
        values: { isInGuild: false },
        text: ""
      };
    }
    const discordService = runtime.getService(ServiceType2.DISCORD);
    if (!discordService?.client) {
      runtime.logger.warn({
        src: "plugin:discord:provider:guildInfo",
        agentId: runtime.agentId,
        channelId
      }, "No discord client found");
      return {
        data: { isInGuild: false },
        values: { isInGuild: false },
        text: ""
      };
    }
    let channel = discordService.client.channels.cache.get(channelId);
    if (!channel) {
      try {
        channel = await discordService.client.channels.fetch(channelId);
      } catch (fetchError) {
        runtime.logger.debug({
          src: "plugin:discord:provider:guildInfo",
          agentId: runtime.agentId,
          channelId,
          error: fetchError instanceof Error ? fetchError.message : String(fetchError)
        }, "Failed to fetch channel");
      }
    }
    const guild = channel?.guild;
    if (!guild) {
      return {
        data: { isInGuild: false, channelId },
        values: { isInGuild: false },
        text: ""
      };
    }
    const guildInfo = await getGuildInfo(guild, discordService);
    const responseText = formatGuildInfoText(guild, guildInfo);
    return {
      data: {
        isInGuild: true,
        guildId: guild.id,
        guild: guildInfo
      },
      values: {
        isInGuild: true,
        guildId: guild.id,
        guildName: guild.name,
        memberCount: guildInfo.memberCount,
        channelCount: guildInfo.channelCount
      },
      text: responseText
    };
  }
};
async function getGuildInfo(guild, discordService) {
  let ownerName = "Unknown";
  try {
    const owner = await guild.fetchOwner();
    ownerName = owner.user.username;
  } catch (_e) {}
  const botMember = discordService.client?.user?.id ? guild.members.cache.get(discordService.client.user.id) : undefined;
  const botPermissions = {
    administrator: botMember?.permissions.has("Administrator") ?? false,
    manageMessages: botMember?.permissions.has("ManageMessages") ?? false,
    manageChannels: botMember?.permissions.has("ManageChannels") ?? false,
    manageRoles: botMember?.permissions.has("ManageRoles") ?? false
  };
  const textChannels = [];
  const voiceChannels = [];
  const categories = [];
  guild.channels.cache.forEach((channel) => {
    const channelData = { id: channel.id, name: channel.name };
    if (channel.type === 0) {
      textChannels.push(channelData);
    } else if (channel.type === 2) {
      voiceChannels.push(channelData);
    } else if (channel.type === 4) {
      categories.push(channelData);
    }
  });
  const roles = guild.roles.cache.filter((role) => role.name !== "@everyone").map((role) => ({
    id: role.id,
    name: role.name,
    color: role.hexColor
  }));
  return {
    name: guild.name,
    memberCount: guild.memberCount,
    channelCount: guild.channels.cache.size,
    roleCount: guild.roles.cache.size,
    ownerId: guild.ownerId,
    ownerName,
    description: guild.description,
    createdAt: guild.createdAt.toISOString(),
    premiumTier: guild.premiumTier,
    premiumSubscriptionCount: guild.premiumSubscriptionCount ?? 0,
    channels: {
      text: textChannels,
      voice: voiceChannels,
      categories
    },
    roles: Array.from(roles),
    botPermissions
  };
}
function formatGuildInfoText(guild, info) {
  const lines = [
    `The current server is "${guild.name}" with ${info.memberCount} members.`,
    `The server was created on ${new Date(info.createdAt).toLocaleDateString()}.`
  ];
  if (info.description) {
    lines.push(`Server description: ${info.description}`);
  }
  lines.push(`The server has ${info.channels.text.length} text channels, ${info.channels.voice.length} voice channels, and ${info.roleCount} roles.`);
  if (info.premiumTier > 0) {
    lines.push(`The server is boosted to tier ${info.premiumTier} with ${info.premiumSubscriptionCount} boosts.`);
  }
  return lines.join(" ");
}

// providers/voiceState.ts
import { getVoiceConnection } from "@discordjs/voice";
import { ChannelType as ChannelType3 } from "@elizaos/core";
var spec20 = requireProviderSpec("voiceState");
var voiceStateProvider = {
  name: spec20.name,
  dynamic: true,
  get: async (runtime, message, state) => {
    const room = await runtime.getRoom(message.roomId);
    if (!room) {
      throw new Error("No room found");
    }
    if (room.type !== ChannelType3.GROUP) {
      return {
        data: {
          isInVoiceChannel: false,
          roomId: room.id
        },
        values: {
          isInVoiceChannel: "false",
          roomType: room.type
        },
        text: ""
      };
    }
    const channelId = room.channelId;
    const agentName = state?.agentName || "The agent";
    if (!channelId) {
      runtime.logger.warn({ src: "plugin:discord:provider:voiceState", roomId: room.id }, "No channel ID found");
      return {
        data: {
          isInVoiceChannel: false,
          roomId: room.id
        },
        values: {
          isInVoiceChannel: "false",
          roomType: room.type
        },
        text: `${agentName} is not currently in a voice channel`
      };
    }
    const discordService = runtime.getService(ServiceType2.DISCORD);
    if (!discordService || !discordService.client) {
      runtime.logger.warn({ src: "plugin:discord:provider:voiceState" }, "Discord service not available");
      return {
        data: {
          isInVoiceChannel: false,
          roomId: room.id
        },
        values: {
          isInVoiceChannel: "false"
        },
        text: `${agentName} is not currently in a voice channel`
      };
    }
    let channel = discordService.client.channels.cache.get(channelId);
    if (!channel) {
      try {
        channel = await discordService.client.channels.fetch(channelId);
      } catch (fetchError) {
        runtime.logger.debug({
          src: "plugin:discord:provider:voiceState",
          channelId,
          error: fetchError instanceof Error ? fetchError.message : String(fetchError)
        }, "Failed to fetch channel");
      }
    }
    const guildId = channel?.guild?.id;
    if (!guildId) {
      runtime.logger.warn({ src: "plugin:discord:provider:voiceState", channelId }, "Could not find guild for channel (not in cache and fetch failed)");
      return {
        data: {
          isInVoiceChannel: false,
          roomId: room.id
        },
        values: {
          isInVoiceChannel: "false"
        },
        text: `${agentName} is not currently in a voice channel`
      };
    }
    const connection = getVoiceConnection(guildId);
    if (!connection) {
      return {
        data: {
          isInVoiceChannel: false,
          roomId: room.id
        },
        values: {
          isInVoiceChannel: "false"
        },
        text: `${agentName} is not currently in a voice channel`
      };
    }
    const worldId = room.worldId;
    const world = await runtime.getWorld(worldId);
    if (!world) {
      throw new Error("No world found");
    }
    const worldName = world.name;
    const roomType = room.type;
    const channelName = room.name;
    return {
      data: {
        isInVoiceChannel: true,
        roomId: room.id,
        worldId: world.id,
        channelId,
        channelName
      },
      values: {
        isInVoiceChannel: "true",
        worldName,
        roomType,
        channelId,
        channelName
      },
      text: `${agentName} is currently in the voice channel: ${channelName} (ID: ${channelId})`
    };
  }
};

// service.ts
import {
  ChannelType as ChannelType7,
  createUniqueUuid as createUniqueUuid5,
  EventType as EventType3,
  MemoryType as MemoryType7,
  Role,
  Service,
  stringToUuid as stringToUuid3
} from "@elizaos/core";
import {
  AttachmentBuilder as AttachmentBuilder2,
  AuditLogEvent,
  ChannelType as DiscordChannelType5,
  Client as DiscordJsClient,
  Events,
  GatewayIntentBits,
  Partials,
  PermissionsBitField as PermissionsBitField5
} from "discord.js";

// compat.ts
function addServerId(obj) {
  if (!obj?.messageServerId) {
    return obj;
  }
  return { ...obj, serverId: obj.serverId ?? obj.messageServerId };
}
function createCompatRuntime(runtime) {
  return new Proxy(runtime, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value !== "function") {
        return value;
      }
      if (prop === "ensureWorldExists") {
        return (world) => value.call(target, addServerId(world));
      }
      if (prop === "ensureRoomExists") {
        return (room) => value.call(target, addServerId(room));
      }
      if (prop === "ensureConnection") {
        return (params) => value.call(target, addServerId(params));
      }
      if (prop === "ensureConnections") {
        return (entities, rooms, source, world) => value.call(target, entities, rooms.map((r) => addServerId(r)), source, addServerId(world));
      }
      return value;
    }
  });
}

// environment.ts
import { parseBooleanFromText } from "@elizaos/core";
import { z } from "zod";
function getEnvBoolean(name, fallback) {
  const value = process.env?.[name];
  if (!value) {
    return fallback;
  }
  return value.toLowerCase() === "true";
}
function getEnvArray(name, fallback) {
  const value = process.env?.[name];
  if (!value || value.trim() === "") {
    return fallback;
  }
  return value.split(",").map((item) => item.trim()).filter((item) => item.length > 0);
}
var DISCORD_DEFAULTS = {
  SHOULD_IGNORE_BOT_MESSAGES: getEnvBoolean("DISCORD_SHOULD_IGNORE_BOT_MESSAGES", false),
  SHOULD_IGNORE_DIRECT_MESSAGES: getEnvBoolean("DISCORD_SHOULD_IGNORE_DIRECT_MESSAGES", false),
  SHOULD_RESPOND_ONLY_TO_MENTIONS: getEnvBoolean("DISCORD_SHOULD_RESPOND_ONLY_TO_MENTIONS", false),
  ALLOWED_CHANNEL_IDS: getEnvArray("CHANNEL_IDS", []),
  DM_POLICY: process.env?.DISCORD_DM_POLICY || "open",
  ALLOW_FROM: getEnvArray("DISCORD_ALLOW_FROM", [])
};
var discordEnvSchema = z.object({
  DISCORD_API_TOKEN: z.string().min(1, "Discord API token is required"),
  CHANNEL_IDS: z.string().nullish().transform((val) => val ? val.split(",").map((s) => s.trim()).filter((s) => s.length > 0) : undefined),
  DISCORD_SHOULD_IGNORE_BOT_MESSAGES: z.string().nullish().transform((val) => val ? parseBooleanFromText(val) : undefined),
  DISCORD_SHOULD_IGNORE_DIRECT_MESSAGES: z.string().nullish().transform((val) => val ? parseBooleanFromText(val) : undefined),
  DISCORD_SHOULD_RESPOND_ONLY_TO_MENTIONS: z.string().nullish().transform((val) => val ? parseBooleanFromText(val) : undefined)
});
function getDiscordSettings(runtime) {
  const characterSettings = runtime.character.settings && runtime.character.settings.discord || {};
  const resolveSetting = (envKey, characterValue, defaultValue, transform) => {
    const runtimeValue = runtime.getSetting(envKey);
    if (runtimeValue !== undefined && runtimeValue !== null) {
      const normalized = typeof runtimeValue === "string" ? runtimeValue : String(runtimeValue);
      return transform ? transform(normalized) : runtimeValue;
    }
    return characterValue ?? defaultValue;
  };
  const resolvedAllowedChannelIds = resolveSetting("CHANNEL_IDS", characterSettings.allowedChannelIds, DISCORD_DEFAULTS.ALLOWED_CHANNEL_IDS, (value) => value.split(",").map((s) => s.trim()).filter((s) => s.length > 0));
  return {
    ...characterSettings,
    shouldIgnoreBotMessages: resolveSetting("DISCORD_SHOULD_IGNORE_BOT_MESSAGES", characterSettings.shouldIgnoreBotMessages, DISCORD_DEFAULTS.SHOULD_IGNORE_BOT_MESSAGES, parseBooleanFromText),
    shouldIgnoreDirectMessages: resolveSetting("DISCORD_SHOULD_IGNORE_DIRECT_MESSAGES", characterSettings.shouldIgnoreDirectMessages, DISCORD_DEFAULTS.SHOULD_IGNORE_DIRECT_MESSAGES, parseBooleanFromText),
    shouldRespondOnlyToMentions: resolveSetting("DISCORD_SHOULD_RESPOND_ONLY_TO_MENTIONS", characterSettings.shouldRespondOnlyToMentions, DISCORD_DEFAULTS.SHOULD_RESPOND_ONLY_TO_MENTIONS, parseBooleanFromText),
    allowedChannelIds: resolvedAllowedChannelIds.length > 0 ? resolvedAllowedChannelIds : undefined,
    dmPolicy: resolveSetting("DISCORD_DM_POLICY", characterSettings.dmPolicy, DISCORD_DEFAULTS.DM_POLICY, (value) => {
      const normalized = value.toLowerCase().trim();
      if (["open", "allowlist", "pairing", "disabled"].includes(normalized)) {
        return normalized;
      }
      return DISCORD_DEFAULTS.DM_POLICY;
    }),
    allowFrom: resolveSetting("DISCORD_ALLOW_FROM", characterSettings.allowFrom, DISCORD_DEFAULTS.ALLOW_FROM, (value) => value.split(",").map((s) => s.trim()).filter((s) => s.length > 0))
  };
}

// messages.ts
import {
  ChannelType as ChannelType5,
  checkPairingAllowed,
  createUniqueUuid as createUniqueUuid3,
  EventType,
  isInAllowlist,
  ServiceType as ServiceType4,
  stringToUuid
} from "@elizaos/core";
import {
  AttachmentBuilder,
  ChannelType as DiscordChannelType3
} from "discord.js";

// attachments.ts
import fs3 from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  ModelType as ModelType19,
  ServiceType as ServiceType3
} from "@elizaos/core";
import { Collection } from "discord.js";
import ffmpeg from "fluent-ffmpeg";

// utils.ts
import {
  logger as logger2,
  ModelType as ModelType18,
  parseJSONObjectFromText as parseJSONObjectFromText18,
  trimTokens as trimTokens3
} from "@elizaos/core";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ChannelType as ChannelType4,
  PermissionsBitField as PermissionsBitField4,
  StringSelectMenuBuilder,
  ThreadChannel
} from "discord.js";
function hasMessagingAPI(runtime) {
  return "elizaOS" in runtime && typeof runtime.elizaOS === "object" && runtime.elizaOS !== null && typeof runtime.elizaOS.sendMessage === "function";
}
function hasMessageService(runtime) {
  return runtime.messageService !== null && typeof runtime.messageService?.handleMessage === "function";
}
function getMessagingAPI(runtime) {
  if (hasMessagingAPI(runtime)) {
    return runtime.elizaOS;
  }
  return null;
}
function getMessageService(runtime) {
  if (hasMessageService(runtime)) {
    return runtime.messageService;
  }
  return null;
}
var MAX_MESSAGE_LENGTH = 1900;
function cleanUrl(url) {
  let clean = url;
  clean = clean.replace(/\\([._\-~])/g, "$1");
  if (clean.startsWith("](")) {
    clean = clean.substring(2);
  } else {
    const markdownLinkPattern = /\]\(/;
    const markdownPatternIdx = clean.search(markdownLinkPattern);
    if (markdownPatternIdx > -1) {
      clean = clean.substring(0, markdownPatternIdx);
    }
  }
  let prev = "";
  while (prev !== clean) {
    prev = clean;
    clean = clean.replace(/[)\]>.,;!*_]+$/, "");
    clean = clean.replace(/[（）［］【】｛｝《》〈〉「」『』、。，．；：！？~～]+$/, "");
  }
  return clean;
}
function extractUrls(text, runtime) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const rawUrls = text.match(urlRegex) || [];
  return rawUrls.map((url) => {
    const original = url;
    const clean = cleanUrl(url);
    if (runtime && original !== clean) {
      runtime.logger.debug(`URL cleaned: "${original}" -> "${clean}"`);
    }
    return clean;
  }).filter((url) => {
    try {
      new URL(url);
      return true;
    } catch {
      if (runtime) {
        runtime.logger.debug(`Invalid URL after cleanup, skipping: "${url}"`);
      }
      return false;
    }
  });
}
function getAttachmentFileName(media) {
  let extension = "";
  try {
    const urlPath = new URL(media.url).pathname;
    const urlExtension = urlPath.substring(urlPath.lastIndexOf("."));
    if (urlExtension && urlExtension.length > 1 && urlExtension.length <= 5) {
      extension = urlExtension;
    }
  } catch {
    const lastDot = media.url.lastIndexOf(".");
    const queryStart = media.url.indexOf("?", lastDot);
    if (lastDot > 0 && (queryStart === -1 || queryStart > lastDot + 1)) {
      const potentialExt = media.url.substring(lastDot, queryStart > -1 ? queryStart : undefined);
      if (potentialExt.length > 1 && potentialExt.length <= 5) {
        extension = potentialExt;
      }
    }
  }
  if (!extension && media.contentType) {
    const contentTypeMap = {
      image: ".png",
      video: ".mp4",
      audio: ".mp3",
      document: ".txt",
      link: ".html"
    };
    extension = contentTypeMap[media.contentType] || "";
  }
  if (!extension) {
    extension = ".txt";
  }
  const baseName = media.title || media.id || "attachment";
  const hasExtension = /\.\w{1,5}$/i.test(baseName);
  return hasExtension ? baseName : `${baseName}${extension}`;
}
async function generateSummary(runtime, text) {
  text = await trimTokens3(text, 1e5, runtime);
  if (!text) {
    return {
      title: "",
      description: ""
    };
  }
  if (text.length < 1000) {
    return {
      title: "",
      description: text
    };
  }
  runtime.logger.info(`[Summarization] Calling TEXT_SMALL for ${text.length} chars: "${text.substring(0, 50).replace(/\n/g, " ")}..."`);
  const prompt = `Please generate a concise summary for the following text:

  Text: """
  ${text}
  """

  Respond with a JSON object in the following format:
  \`\`\`json
  {
    "title": "Generated Title",
    "summary": "Generated summary and/or description of the text"
  }
  \`\`\``;
  const response = await runtime.useModel(ModelType18.TEXT_SMALL, {
    prompt
  });
  const parsedResponse = parseJSONObjectFromText18(response);
  if (parsedResponse && typeof parsedResponse.title === "string" && typeof parsedResponse.summary === "string") {
    return {
      title: parsedResponse.title,
      description: parsedResponse.summary
    };
  }
  return {
    title: "",
    description: ""
  };
}
function isDiscordAPIError(error) {
  return error instanceof Error && "code" in error;
}
function isDiscordJsComponent(component) {
  return component !== null && typeof component === "object" && "toJSON" in component && typeof component.toJSON === "function";
}
function isDiscordJsComponentArray(components) {
  return components.length > 0 && components.every(isDiscordJsComponent);
}
function safeStringify(obj) {
  return JSON.stringify(obj, (_, value) => typeof value === "bigint" ? value.toString() : value);
}
async function sendMessageInChunks(channel, content, inReplyTo, files, components, runtime) {
  const sentMessages = [];
  let messages;
  if (runtime && content.length > MAX_MESSAGE_LENGTH && needsSmartSplit(content)) {
    messages = await smartSplitMessage(runtime, content);
  } else {
    messages = splitMessage(content);
  }
  try {
    for (let i = 0;i < messages.length; i++) {
      const message = messages[i];
      if (message.trim().length > 0 || i === messages.length - 1 && files && files.length > 0 || components) {
        const options = {
          content: message.trim()
        };
        if (i === 0 && inReplyTo) {
          options.reply = {
            messageReference: inReplyTo
          };
        }
        if (i === messages.length - 1 && files && files.length > 0) {
          options.files = files;
        }
        if (i === messages.length - 1 && components && components.length > 0) {
          try {
            logger2.info(`Components received: ${safeStringify(components)}`);
            if (!Array.isArray(components)) {
              logger2.warn("Components is not an array, skipping component processing");
            } else if (isDiscordJsComponentArray(components)) {
              options.components = components;
            } else {
              const discordComponents = components.map((row) => {
                if (!row || typeof row !== "object" || row.type !== 1) {
                  logger2.warn("Invalid component row structure, skipping");
                  return null;
                }
                if (row.type === 1) {
                  const actionRow = new ActionRowBuilder;
                  if (!Array.isArray(row.components)) {
                    logger2.warn("Row components is not an array, skipping");
                    return null;
                  }
                  const validComponents = row.components.map((comp) => {
                    if (!comp || typeof comp !== "object") {
                      logger2.warn("Invalid component, skipping");
                      return null;
                    }
                    try {
                      if (comp.type === 2) {
                        return new ButtonBuilder().setCustomId(comp.custom_id).setLabel(comp.label || "").setStyle(comp.style || 1);
                      }
                      if (comp.type === 3) {
                        const selectMenu = new StringSelectMenuBuilder().setCustomId(comp.custom_id).setPlaceholder(comp.placeholder || "Select an option");
                        if (typeof comp.min_values === "number") {
                          selectMenu.setMinValues(comp.min_values);
                        }
                        if (typeof comp.max_values === "number") {
                          selectMenu.setMaxValues(comp.max_values);
                        }
                        if (Array.isArray(comp.options)) {
                          selectMenu.addOptions(comp.options.map((option) => ({
                            label: option.label,
                            value: option.value,
                            description: option.description
                          })));
                        }
                        return selectMenu;
                      }
                    } catch (err) {
                      logger2.error(`Error creating component: ${err}`);
                      return null;
                    }
                    return null;
                  }).filter(Boolean);
                  if (validComponents.length > 0) {
                    actionRow.addComponents(validComponents);
                    return actionRow;
                  }
                }
                return null;
              }).filter(Boolean);
              if (discordComponents.length > 0) {
                options.components = discordComponents;
              }
            }
          } catch (error) {
            logger2.error(`Error processing components: ${error}`);
          }
        }
        try {
          const m = await channel.send(options);
          sentMessages.push(m);
        } catch (error) {
          if (isDiscordAPIError(error) && error.code === 50035 && error.message && error.message.includes("Unknown message")) {
            logger2.warn("Message reference no longer valid (message may have been deleted). Sending without reply threading.");
            const optionsWithoutReply = { ...options };
            delete optionsWithoutReply.reply;
            try {
              const m = await channel.send(optionsWithoutReply);
              sentMessages.push(m);
            } catch (retryError) {
              const errorMessage = retryError instanceof Error ? retryError.message : String(retryError);
              logger2.error(`Error sending message after removing reply reference: ${errorMessage}`);
              throw retryError;
            }
          } else {
            throw error;
          }
        }
      }
    }
  } catch (error) {
    logger2.error(`Error sending message: ${error}`);
  }
  return sentMessages;
}
function needsSmartSplit(content) {
  const codeBlockCount = (content.match(/```/g) || []).length;
  if (codeBlockCount >= 2) {
    return true;
  }
  if (/^#{1,3}\s/m.test(content)) {
    return true;
  }
  if (/^\d+\.\s/m.test(content)) {
    return true;
  }
  const lines = content.split(`
`);
  const hasLongUnbreakableLines = lines.some((line2) => line2.length > 500 && !line2.includes(". ") && !line2.includes(", "));
  if (hasLongUnbreakableLines) {
    return true;
  }
  return false;
}
function parseJSONArrayFromText(text) {
  const jsonBlockPattern = /```json\n([\s\S]*?)\n```/;
  let jsonData = null;
  const jsonBlockMatch = text.match(jsonBlockPattern);
  try {
    if (jsonBlockMatch) {
      jsonData = JSON.parse(jsonBlockMatch[1].trim());
    } else {
      jsonData = JSON.parse(text.trim());
    }
  } catch (_e) {
    return null;
  }
  if (Array.isArray(jsonData)) {
    return jsonData;
  }
  return null;
}
async function smartSplitMessage(runtime, content, maxLength = MAX_MESSAGE_LENGTH) {
  if (content.length <= maxLength) {
    return [content];
  }
  const estimatedChunks = Math.ceil(content.length / (maxLength - 100));
  try {
    runtime.logger.debug(`Smart splitting ${content.length} chars into ~${estimatedChunks} chunks`);
    const prompt = `Split the following text into ${estimatedChunks} parts for Discord messages (max ${maxLength} chars each).
Keep related content together (don't split code blocks, keep list items with their headers, etc.).
Return ONLY a JSON array of strings, no explanation.

Text to split:
"""
${content}
"""

Return format: ["chunk1", "chunk2", ...]`;
    const response = await runtime.useModel(ModelType18.TEXT_SMALL, { prompt });
    const parsed = parseJSONArrayFromText(response);
    if (Array.isArray(parsed)) {
      const validChunks = parsed.filter((chunk) => typeof chunk === "string" && chunk.trim().length > 0 && chunk.length <= maxLength);
      if (validChunks.length > 0) {
        return validChunks;
      }
      runtime.logger.debug("Smart split returned empty or invalid chunks, falling back to simple split");
    }
  } catch (error) {
    runtime.logger.debug(`Smart split failed, falling back to simple split: ${error}`);
  }
  return splitMessage(content, maxLength);
}
function splitMessage(content, maxLength = MAX_MESSAGE_LENGTH) {
  if (!content || content.length <= maxLength) {
    return content ? [content] : [];
  }
  const messages = [];
  let currentMessage = "";
  const rawLines = content.split(`
`);
  const lines = rawLines.flatMap((line2) => {
    const chunks = [];
    while (line2.length > maxLength) {
      let splitIdx = maxLength;
      const lastSpace = line2.lastIndexOf(" ", maxLength);
      if (lastSpace > maxLength * 0.7) {
        splitIdx = lastSpace;
      } else if (lastSpace > maxLength * 0.3) {
        splitIdx = lastSpace;
      }
      chunks.push(line2.slice(0, splitIdx));
      line2 = line2.slice(splitIdx).trimStart();
    }
    chunks.push(line2);
    return chunks;
  });
  for (const line2 of lines) {
    if (currentMessage.length + line2.length + 1 > maxLength) {
      if (currentMessage.trim().length > 0) {
        messages.push(currentMessage.trim());
      }
      currentMessage = "";
    }
    currentMessage += `${line2}
`;
  }
  if (currentMessage.trim().length > 0) {
    messages.push(currentMessage.trim());
  }
  if (messages.length === 0 && content.length > 0) {
    messages.push(" ");
  }
  return messages;
}
function canSendMessage(channel) {
  if (!channel) {
    return {
      canSend: false,
      reason: "No channel given"
    };
  }
  if (channel.type === ChannelType4.DM) {
    return {
      canSend: true,
      reason: null
    };
  }
  if (!("guild" in channel) || !channel.guild) {
    return {
      canSend: false,
      reason: "Not a guild channel"
    };
  }
  const guildChannel = channel;
  const botMember = guildChannel.guild.members.cache.get(guildChannel.client.user.id);
  if (!botMember) {
    return {
      canSend: false,
      reason: "Bot member not found in guild"
    };
  }
  const requiredPermissions = [
    PermissionsBitField4.Flags.ViewChannel,
    PermissionsBitField4.Flags.SendMessages,
    PermissionsBitField4.Flags.ReadMessageHistory
  ];
  if (guildChannel instanceof ThreadChannel) {
    requiredPermissions.push(PermissionsBitField4.Flags.SendMessagesInThreads);
  }
  const permissions = guildChannel.permissionsFor(botMember);
  if (!permissions) {
    return {
      canSend: false,
      reason: "Could not retrieve permissions"
    };
  }
  const missingPermissions = requiredPermissions.filter((perm) => !permissions.has(perm));
  return {
    canSend: missingPermissions.length === 0,
    missingPermissions,
    reason: missingPermissions.length > 0 ? `Missing permissions: ${missingPermissions.map((p) => String(p)).join(", ")}` : null
  };
}

// attachments.ts
class AttachmentManager {
  attachmentCache = new Map;
  runtime;
  constructor(runtime) {
    this.runtime = runtime;
  }
  async processAttachments(attachments) {
    const processedAttachments = [];
    const attachmentCollection = attachments instanceof Collection ? attachments : new Collection(attachments.map((att) => [att.id, att]));
    for (const [, attachment] of attachmentCollection) {
      const media = await this.processAttachment(attachment);
      if (media) {
        processedAttachments.push(media);
      }
    }
    return processedAttachments;
  }
  async processAttachment(attachment) {
    const cached = this.attachmentCache.get(attachment.url);
    if (cached) {
      return cached;
    }
    let media = null;
    if (attachment.contentType?.startsWith("application/pdf")) {
      media = await this.processPdfAttachment(attachment);
    } else if (attachment.contentType?.startsWith("text/plain")) {
      media = await this.processPlaintextAttachment(attachment);
    } else if (attachment.contentType?.startsWith("audio/") || attachment.contentType?.startsWith("video/mp4")) {
      media = await this.processAudioVideoAttachment(attachment);
    } else if (attachment.contentType?.startsWith("image/")) {
      media = await this.processImageAttachment(attachment);
    } else if (attachment.contentType?.startsWith("video/")) {
      media = await this.processVideoAttachment(attachment);
    } else {
      const videoService = this.runtime.getService(ServiceType3.VIDEO);
      if (videoService?.isVideoUrl?.(attachment.url)) {
        media = await this.processVideoAttachment(attachment);
      } else {
        media = await this.processGenericAttachment(attachment);
      }
    }
    if (media) {
      this.attachmentCache.set(attachment.url, media);
    }
    return media;
  }
  async processAudioVideoAttachment(attachment) {
    try {
      const response = await fetch(attachment.url);
      const audioVideoArrayBuffer = await response.arrayBuffer();
      let audioBuffer;
      let audioFileName;
      let audioMimeType;
      if (attachment.contentType?.startsWith("audio/")) {
        audioBuffer = Buffer.from(audioVideoArrayBuffer);
        audioFileName = attachment.name || "audio.mp3";
        audioMimeType = attachment.contentType;
      } else if (attachment.contentType?.startsWith("video/mp4")) {
        audioBuffer = await this.extractAudioFromMP4(audioVideoArrayBuffer);
        audioFileName = "extracted_audio.mp3";
        audioMimeType = "audio/mpeg";
      } else {
        throw new Error("Unsupported audio/video format");
      }
      const audioBlob = new Blob([new Uint8Array(audioBuffer)], {
        type: audioMimeType
      });
      const audioFile = new File([audioBlob], audioFileName, {
        type: audioMimeType
      });
      const transcriptionBuffer = Buffer.from(await audioFile.arrayBuffer());
      const transcription = await this.runtime.useModel(ModelType19.TRANSCRIPTION, transcriptionBuffer);
      const transcriptionLength = transcription?.length || 0;
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        contentType: attachment.contentType,
        transcriptionLength
      }, "Assessing transcription length before summarization");
      let title;
      let description;
      if (!transcription || transcriptionLength === 0) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          attachmentId: attachment.id
        }, "Transcription is empty, skipping summarization");
        title = undefined;
        description = "User-uploaded audio/video attachment (no transcription available)";
      } else if (transcriptionLength < 1000) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          attachmentId: attachment.id,
          transcriptionLength
        }, "Transcription is short, skipping summarization");
        title = undefined;
        description = transcription;
      } else {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          attachmentId: attachment.id,
          transcriptionLength
        }, "Summarizing transcription");
        const summary = await generateSummary(this.runtime, transcription);
        title = summary.title;
        description = summary.description;
      }
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "Audio/Video Attachment",
        source: attachment.contentType?.startsWith("audio/") ? "Audio" : "Video",
        description: description || "User-uploaded audio/video attachment which has been transcribed",
        text: transcription || "Audio/video content not available"
      };
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        contentType: attachment.contentType,
        error: error instanceof Error ? error.message : String(error)
      }, "Error processing audio/video attachment");
      return {
        id: attachment.id,
        url: attachment.url,
        title: "Audio/Video Attachment",
        source: attachment.contentType?.startsWith("audio/") ? "Audio" : "Video",
        description: "An audio/video attachment (transcription failed)",
        text: `This is an audio/video attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes, Content type: ${attachment.contentType}`
      };
    }
  }
  async extractAudioFromMP4(mp4Data) {
    const tmpDir = os.tmpdir();
    const timestamp = Date.now();
    const tempMP4File = path.join(tmpDir, `discord_video_${timestamp}.mp4`);
    const tempAudioFile = path.join(tmpDir, `discord_audio_${timestamp}.mp3`);
    try {
      fs3.writeFileSync(tempMP4File, Buffer.from(mp4Data));
      await new Promise((resolve, reject) => {
        ffmpeg.ffprobe(tempMP4File, (err, metadata) => {
          if (err) {
            reject(err);
            return;
          }
          if (!metadata.streams || !Array.isArray(metadata.streams)) {
            reject(new Error("File metadata does not contain valid streams information"));
            return;
          }
          const hasAudio = metadata.streams.some((stream) => stream.codec_type === "audio");
          if (!hasAudio) {
            reject(new Error("File does not contain any audio streams"));
            return;
          }
          resolve();
        });
      });
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        tempMP4File,
        tempAudioFile
      }, "Extracting audio from MP4");
      await new Promise((resolve, reject) => {
        ffmpeg(tempMP4File).noVideo().audioCodec("libmp3lame").toFormat("mp3").on("end", () => {
          resolve();
        }).on("error", (err) => {
          reject(err);
        }).output(tempAudioFile).run();
      });
      const audioData = fs3.readFileSync(tempAudioFile);
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        audioDataSize: audioData.length
      }, "Successfully extracted audio from MP4");
      return audioData;
    } finally {
      try {
        if (fs3.existsSync(tempMP4File)) {
          fs3.unlinkSync(tempMP4File);
        }
        if (fs3.existsSync(tempAudioFile)) {
          fs3.unlinkSync(tempAudioFile);
        }
      } catch (cleanupError) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: cleanupError instanceof Error ? cleanupError.message : String(cleanupError)
        }, "Failed to cleanup temp files");
      }
    }
  }
  async processPdfAttachment(attachment) {
    try {
      const response = await fetch(attachment.url);
      const pdfBuffer = await response.arrayBuffer();
      const pdfService = this.runtime.getService(ServiceType3.PDF);
      if (!pdfService) {
        throw new Error("PDF service not found");
      }
      const text = await pdfService.convertPdfToText(Buffer.from(pdfBuffer));
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        textLength: text?.length
      }, "Summarizing PDF content");
      const { title, description } = await generateSummary(this.runtime, text);
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "PDF Attachment",
        source: "PDF",
        description: description || "A PDF document",
        text
      };
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        contentType: attachment.contentType,
        error: error instanceof Error ? error.message : String(error)
      }, "Error processing PDF attachment");
      return {
        id: attachment.id,
        url: attachment.url,
        title: "PDF Attachment (conversion failed)",
        source: "PDF",
        description: "A PDF document that could not be converted to text",
        text: `This is a PDF attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes`
      };
    }
  }
  async processPlaintextAttachment(attachment) {
    try {
      const response = await fetch(attachment.url);
      const text = await response.text();
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        textLength: text?.length
      }, "Summarizing plaintext content");
      const { title, description } = await generateSummary(this.runtime, text);
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "Plaintext Attachment",
        source: "Plaintext",
        description: description || "A plaintext document",
        text
      };
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        contentType: attachment.contentType,
        error: error instanceof Error ? error.message : String(error)
      }, "Error processing plaintext attachment");
      return {
        id: attachment.id,
        url: attachment.url,
        title: "Plaintext Attachment (retrieval failed)",
        source: "Plaintext",
        description: "A plaintext document that could not be retrieved",
        text: `This is a plaintext attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes`
      };
    }
  }
  async processImageAttachment(attachment) {
    try {
      const { description, title } = await this.runtime.useModel(ModelType19.IMAGE_DESCRIPTION, attachment.url);
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "Image Attachment",
        source: "Image",
        description: description || "An image attachment",
        text: description || "Image content not available"
      };
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        attachmentId: attachment.id,
        contentType: attachment.contentType,
        error: error instanceof Error ? error.message : String(error)
      }, "Error processing image attachment");
      return this.createFallbackImageMedia(attachment);
    }
  }
  createFallbackImageMedia(attachment) {
    return {
      id: attachment.id,
      url: attachment.url,
      title: "Image Attachment",
      source: "Image",
      description: "An image attachment (recognition failed)",
      text: `This is an image attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes, Content type: ${attachment.contentType}`
    };
  }
  async processVideoAttachment(attachment) {
    const videoService = this.runtime.getService(ServiceType3.VIDEO);
    if (!videoService) {
      return {
        id: attachment.id,
        url: attachment.url,
        title: "Video Attachment (Service Unavailable)",
        source: "Video",
        description: "Could not process video attachment because the required service is not available.",
        text: "Video content not available"
      };
    }
    if (typeof videoService.isVideoUrl === "function" && videoService.isVideoUrl(attachment.url)) {
      const videoInfo = await videoService.processVideo(attachment.url, this.runtime);
      return {
        id: attachment.id,
        url: attachment.url,
        title: videoInfo.title,
        source: "YouTube",
        description: videoInfo.description,
        text: videoInfo.text
      };
    }
    return {
      id: attachment.id,
      url: attachment.url,
      title: "Video Attachment",
      source: "Video",
      description: "A video attachment",
      text: "Video content not available"
    };
  }
  async processGenericAttachment(attachment) {
    return {
      id: attachment.id,
      url: attachment.url,
      title: "Generic Attachment",
      source: "Generic",
      description: "A generic attachment",
      text: "Attachment content not available"
    };
  }
}

// messages.ts
class MessageManager {
  client;
  runtime;
  attachmentManager;
  getChannelType;
  discordSettings;
  discordService;
  constructor(discordService, runtime) {
    if (!discordService.client) {
      const errorMsg = "Discord client not initialized - cannot create MessageManager";
      runtime.logger.error({ src: "plugin:discord", agentId: runtime.agentId }, errorMsg);
      throw new Error(errorMsg);
    }
    this.client = discordService.client;
    this.runtime = runtime;
    this.attachmentManager = new AttachmentManager(this.runtime);
    this.getChannelType = discordService.getChannelType;
    this.discordService = discordService;
    this.discordSettings = getDiscordSettings(this.runtime);
  }
  async checkDmAccess(message) {
    const policy = this.discordSettings.dmPolicy ?? "open";
    const userId = message.author.id;
    if (policy === "disabled") {
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        userId
      }, "DM blocked: policy is disabled");
      return { allowed: false };
    }
    if (policy === "open") {
      return { allowed: true };
    }
    if (policy === "allowlist") {
      if (this.discordSettings.allowFrom?.includes(userId)) {
        return { allowed: true };
      }
      const inDynamicAllowlist = await isInAllowlist(this.runtime, "discord", userId);
      if (inDynamicAllowlist) {
        return { allowed: true };
      }
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        userId
      }, "DM blocked: user not in allowlist");
      return { allowed: false };
    }
    if (policy === "pairing") {
      if (this.discordSettings.allowFrom?.includes(userId)) {
        return { allowed: true };
      }
      const result = await checkPairingAllowed(this.runtime, {
        channel: "discord",
        senderId: userId,
        metadata: {
          username: message.author.username,
          displayName: message.author.displayName ?? message.author.username,
          discriminator: message.author.discriminator ?? ""
        }
      });
      if (result.allowed) {
        return { allowed: true };
      }
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        userId,
        pairingCode: result.pairingCode,
        newRequest: result.newRequest
      }, "DM blocked: pairing required");
      return {
        allowed: false,
        replyMessage: result.newRequest ? result.replyMessage : undefined
      };
    }
    return { allowed: true };
  }
  async handleMessage(message) {
    const clientUser = this.client.user;
    if (message.interaction || clientUser && message.author.id === clientUser.id) {
      return;
    }
    if (this.discordSettings.shouldIgnoreBotMessages && message.author && message.author.bot) {
      return;
    }
    if (this.discordSettings.shouldIgnoreDirectMessages && message.channel.type === DiscordChannelType3.DM) {
      return;
    }
    if (message.channel.type === DiscordChannelType3.DM) {
      const accessCheck = await this.checkDmAccess(message);
      if (!accessCheck.allowed) {
        if (accessCheck.replyMessage) {
          try {
            await message.author.send(accessCheck.replyMessage);
          } catch (err) {
            this.runtime.logger.warn({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              userId: message.author.id,
              error: err instanceof Error ? err.message : String(err)
            }, "Failed to send pairing reply");
          }
        }
        return;
      }
    }
    const isBotMentioned = !!(clientUser?.id && message.mentions.users && message.mentions.users.has(clientUser.id));
    const isReplyToBot = !!message.reference?.messageId && message.mentions.repliedUser?.id === clientUser?.id;
    const isInThread = message.channel.isThread();
    const isDM = message.channel.type === DiscordChannelType3.DM;
    if (this.discordSettings.shouldRespondOnlyToMentions) {
      const shouldProcess = isDM || isBotMentioned || isReplyToBot;
      if (!shouldProcess) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId: message.channel.id
        }, "Strict mode: ignoring message (no mention or reply)");
        return;
      }
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        channelId: message.channel.id
      }, "Strict mode: processing message");
    }
    const entityId = createUniqueUuid3(this.runtime, message.author.id);
    const userName = message.author.bot ? `${message.author.username}#${message.author.discriminator}` : message.author.username;
    const name = message.author.displayName;
    const channelId = message.channel.id;
    const roomId = createUniqueUuid3(this.runtime, channelId);
    let type;
    let messageServerId;
    if (message.guild) {
      const guild = await message.guild.fetch();
      type = await this.getChannelType(message.channel);
      if (type === null) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId: message.channel.id
        }, "Null channel type");
      }
      messageServerId = guild.id;
    } else {
      type = ChannelType5.DM;
      messageServerId = message.channel.id;
    }
    await this.runtime.ensureConnection({
      entityId,
      roomId,
      userName,
      name,
      source: "discord",
      channelId: message.channel.id,
      messageServerId: messageServerId ? stringToUuid(messageServerId) : undefined,
      type,
      worldId: createUniqueUuid3(this.runtime, messageServerId ?? roomId),
      worldName: message.guild?.name
    });
    try {
      const canSendResult = canSendMessage(message.channel);
      if (!canSendResult.canSend) {
        return this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId: message.channel.id,
          reason: canSendResult.reason
        }, "Cannot send message to channel");
      }
      const { processedContent, attachments } = await this.processMessage(message);
      if (!processedContent && !attachments?.length) {
        return;
      }
      const channel = message.channel;
      const typingData = {
        interval: null,
        cleared: false,
        started: false
      };
      const newMessage = await this.discordService.buildMemoryFromMessage(message, {
        processedContent,
        processedAttachments: attachments,
        extraContent: {
          mentionContext: {
            isMention: isBotMentioned,
            isReply: isReplyToBot,
            isThread: isInThread,
            mentionType: isBotMentioned ? "platform_mention" : isReplyToBot ? "reply" : isInThread ? "thread" : "none"
          }
        },
        extraMetadata: {
          replyToAuthor: message.mentions.repliedUser ? {
            id: message.mentions.repliedUser.id,
            username: message.mentions.repliedUser.username,
            isBot: message.mentions.repliedUser.bot
          } : undefined
        }
      });
      if (!newMessage) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          messageId: message.id
        }, "Failed to build memory from message");
        return;
      }
      const messageId = newMessage.id;
      const callback = async (content) => {
        try {
          if (content.target && typeof content.target === "string" && content.target.toLowerCase() !== "discord") {
            return [];
          }
          if (!typingData.started) {
            typingData.started = true;
            
            const startTyping = () => {
              try {
                if (channel.sendTyping) {
                  channel.sendTyping();
                }
              } catch (err) {
                this.runtime.logger.warn({
                  src: "plugin:discord",
                  agentId: this.runtime.agentId,
                  error: err instanceof Error ? err.message : String(err)
                }, "Error sending typing indicator");
              }
            };
            startTyping();
            typingData.interval = setInterval(startTyping, 8000);
          }
          if (message.id && !content.inReplyTo) {
            content.inReplyTo = createUniqueUuid3(this.runtime, message.id);
          }
          let messages = [];
          if (content && content.channelType === "DM") {
            const u = await this.client.users.fetch(message.author.id);
            if (!u) {
              this.runtime.logger.warn({
                src: "plugin:discord",
                agentId: this.runtime.agentId,
                entityId: message.author.id
              }, "User not found for DM");
              return [];
            }
            const files = [];
            if (content.attachments && content.attachments.length > 0) {
              for (const media of content.attachments) {
                if (media.url) {
                  const fileName = getAttachmentFileName(media);
                  files.push(new AttachmentBuilder(media.url, { name: fileName }));
                }
              }
            }
            const textContent = content.text ?? "";
            const hasText = textContent.trim().length > 0;
            if (!hasText && files.length === 0) {
              this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Skipping DM response: no text or attachments");
              return [];
            }
            const dmMessage = await u.send({
              content: textContent,
              files: files.length > 0 ? files : undefined
            });
            messages = [dmMessage];
          } else {
            const files = [];
            if (content.attachments && content.attachments.length > 0) {
              for (const media of content.attachments) {
                if (media.url) {
                  const fileName = getAttachmentFileName(media);
                  files.push(new AttachmentBuilder(media.url, { name: fileName }));
                }
              }
            }
            if (!message.id) {
              this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Cannot send message: message.id is missing");
              return [];
            }
            messages = await sendMessageInChunks(channel, content.text ?? "", message.id, files, undefined, this.runtime);
          }
          const memories = [];
          for (const m of messages) {
            const actions = content.actions;
            const hasAttachments = m.attachments?.size > 0;
            const memory = {
              id: createUniqueUuid3(this.runtime, m.id),
              entityId: this.runtime.agentId,
              agentId: this.runtime.agentId,
              content: {
                ...content,
                text: m.content || content.text || " ",
                actions,
                inReplyTo: messageId,
                url: m.url,
                channelType: type,
                attachments: hasAttachments && content.attachments ? content.attachments : undefined
              },
              roomId,
              createdAt: m.createdTimestamp
            };
            memories.push(memory);
          }
          for (const m of memories) {
            await this.runtime.createMemory(m, "messages");
          }
          if (typingData.interval && !typingData.cleared) {
            clearInterval(typingData.interval);
            typingData.cleared = true;
          }
          return memories;
        } catch (error) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: error instanceof Error ? error.message : String(error)
          }, "Error handling message callback");
          if (typingData.interval && !typingData.cleared) {
            clearInterval(typingData.interval);
            typingData.cleared = true;
          }
          return [];
        }
      };
      const messagingAPI = getMessagingAPI(this.runtime);
      const messageService = getMessageService(this.runtime);
      if (messagingAPI) {
        this.runtime.logger.debug({ src: "plugin:discord", agentId: this.runtime.agentId }, "Using messaging API");
        await messagingAPI.sendMessage(this.runtime.agentId, newMessage, {
          onResponse: callback
        });
      } else if (messageService) {
        this.runtime.logger.debug({ src: "plugin:discord", agentId: this.runtime.agentId }, "Using messageService API");
        await messageService.handleMessage(this.runtime, newMessage, callback);
      } else {
        this.runtime.logger.debug({ src: "plugin:discord", agentId: this.runtime.agentId }, "Using event-based message handling");
        await this.runtime.emitEvent([EventType.MESSAGE_RECEIVED], {
          runtime: this.runtime,
          message: newMessage,
          callback,
          source: "discord"
        });
      }
      setTimeout(() => {
        if (typingData.started && typingData.interval && !typingData.cleared) {
          clearInterval(typingData.interval);
          typingData.cleared = true;
          this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Typing indicator failsafe timeout triggered");
        }
      }, 30000);
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error handling message");
    }
  }
  async processMessage(message) {
    let processedContent = message.content;
    let attachments = [];
    if (message.embeds?.length) {
      for (const i in message.embeds) {
        const embed = message.embeds[i];
        processedContent += `
Embed #${parseInt(i, 10) + 1}:
`;
        processedContent += `  Title:${embed.title ?? "(none)"}
`;
        processedContent += `  Description:${embed.description ?? "(none)"}
`;
      }
    }
    if (message.reference) {
      let messageId;
      if (message.reference.messageId) {
        messageId = createUniqueUuid3(this.runtime, message.reference.messageId);
      } else {
        try {
          const refMsg = await message.fetchReference();
          messageId = createUniqueUuid3(this.runtime, refMsg.id);
        } catch {}
      }
      if (messageId) {
        processedContent += `
Referencing MessageID ${messageId} (discord: ${message.reference.messageId})`;
        if (message.reference.channelId !== message.channel.id) {
          const roomId = createUniqueUuid3(this.runtime, message.reference.channelId);
          processedContent += ` in channel ${roomId}`;
        }
        if (message.reference.guildId && message.guild && message.reference.guildId !== message.guild.id) {
          processedContent += ` in guild ${message.reference.guildId}`;
        }
        processedContent += `
`;
      }
    }
    const mentionRegex = /<@!?(\d+)>/g;
    processedContent = processedContent.replace(mentionRegex, (match2, entityId) => {
      const user = message.mentions.users.get(entityId);
      if (user) {
        return `${user.username} (@${entityId})`;
      }
      return match2;
    });
    const codeBlockRegex = /```([\s\S]*?)```/g;
    let match = codeBlockRegex.exec(processedContent);
    while (match !== null) {
      const fullMatch = match[0];
      const codeBlock = match[1];
      const lines = codeBlock.split(`
`);
      const title = lines[0];
      const description = lines.slice(0, 3).join(`
`);
      const attachmentId = `code-${Date.now()}-${Math.floor(Math.random() * 1000)}`.slice(-5);
      attachments.push({
        id: attachmentId,
        url: "",
        title: title || "Code Block",
        source: "Code",
        description,
        text: codeBlock
      });
      processedContent = processedContent.replace(fullMatch, `Code Block (${attachmentId})`);
      match = codeBlockRegex.exec(processedContent);
    }
    if (message.attachments.size > 0) {
      attachments = await this.attachmentManager.processAttachments(message.attachments);
    }
    const urls = extractUrls(processedContent, this.runtime);
    for (const url of urls) {
      const videoService = this.runtime.getService(ServiceType4.VIDEO);
      if (videoService?.isVideoUrl(url)) {
        try {
          const videoInfo = await videoService.processVideo(url, this.runtime);
          attachments.push({
            id: `youtube-${Date.now()}`,
            url,
            title: videoInfo.title,
            source: "YouTube",
            description: videoInfo.description,
            text: videoInfo.text
          });
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          this.runtime.logger.warn(`Failed to process video ${url}: ${errorMsg}`);
        }
      } else {
        const browserService = this.runtime.getService(ServiceType4.BROWSER);
        if (!browserService) {
          this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Browser service not found");
          continue;
        }
        try {
          this.runtime.logger.debug(`Fetching page content for cleaned URL: "${url}"`);
          const { title, description: summary } = await browserService.getPageContent(url, this.runtime);
          attachments.push({
            id: `webpage-${Date.now()}`,
            url,
            title: title || "Web Page",
            source: "Web",
            description: summary,
            text: summary
          });
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          const errorString = String(error);
          const isExpectedFailure = errorMsg.includes("ERR_CERT") || errorString.includes("ERR_CERT") || errorMsg.includes("Timeout") || errorString.includes("Timeout") || errorMsg.includes("ERR_NAME_NOT_RESOLVED") || errorString.includes("ERR_NAME_NOT_RESOLVED") || errorMsg.includes("ERR_HTTP_RESPONSE_CODE_FAILURE") || errorString.includes("ERR_HTTP_RESPONSE_CODE_FAILURE");
          if (!isExpectedFailure) {
            this.runtime.logger.warn(`Failed to fetch page content for ${url}: ${errorMsg}`);
          }
        }
      }
    }
    return { processedContent, attachments };
  }
  async fetchBotName(botToken) {
    const url = "https://discord.com/api/v10/users/@me";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bot ${botToken}`
      }
    });
    if (!response.ok) {
      throw new Error(`Error fetching bot details: ${response.statusText}`);
    }
    const data = await response.json();
    const discriminator = data.discriminator;
    return data.username + (discriminator ? `#${discriminator}` : "");
  }
}

// permissionEvents.ts
var ELEVATED_PERMISSIONS = [
  "Administrator",
  "ManageGuild",
  "ManageChannels",
  "ManageRoles",
  "KickMembers",
  "BanMembers",
  "ModerateMembers",
  "ManageMessages",
  "ManageWebhooks",
  "ManageNicknames",
  "MuteMembers",
  "DeafenMembers",
  "MoveMembers",
  "ManageEvents",
  "ManageThreads"
];
function isElevatedRole(role) {
  return ELEVATED_PERMISSIONS.some((p) => role.permissions.has(p));
}
function hasElevatedPermissions(permissions) {
  return permissions.some((p) => ELEVATED_PERMISSIONS.includes(p));
}
async function fetchAuditEntry(guild, actionType, target, runtime) {
  try {
    const logs = await guild.fetchAuditLogs({ type: actionType, limit: 5 });
    const now = Date.now();
    for (const entry of logs.entries.values()) {
      const targetId = entry.target && "id" in entry.target ? entry.target.id : undefined;
      if (targetId === target && now - entry.createdTimestamp < 1e4) {
        return {
          executorId: entry.executor?.id ?? "unknown",
          executorTag: entry.executor?.tag ?? "Unknown",
          reason: entry.reason
        };
      }
    }
  } catch (err) {
    runtime.logger.debug(`Audit log fetch failed (non-critical): ${err}`);
  }
  return null;
}
function getState(perm, allow, deny) {
  if (allow.includes(perm)) {
    return "ALLOW";
  }
  if (deny.includes(perm)) {
    return "DENY";
  }
  return "NEUTRAL";
}
function overwriteToChanges(ow, isDelete = false) {
  const changes = [];
  for (const p of ow.allow.toArray()) {
    changes.push({
      permission: p,
      oldState: isDelete ? "ALLOW" : "NEUTRAL",
      newState: isDelete ? "NEUTRAL" : "ALLOW"
    });
  }
  for (const p of ow.deny.toArray()) {
    changes.push({
      permission: p,
      oldState: isDelete ? "DENY" : "NEUTRAL",
      newState: isDelete ? "NEUTRAL" : "DENY"
    });
  }
  return changes;
}
function diffOverwrites(oldOw, newOw) {
  if (!oldOw && !newOw) {
    return { changes: [], action: "UPDATE" };
  }
  if (!oldOw && newOw) {
    return { changes: overwriteToChanges(newOw, false), action: "CREATE" };
  }
  if (oldOw && !newOw) {
    return { changes: overwriteToChanges(oldOw, true), action: "DELETE" };
  }
  const changes = [];
  const oldAllow = oldOw?.allow.toArray();
  const oldDeny = oldOw?.deny.toArray();
  const newAllow = newOw?.allow.toArray();
  const newDeny = newOw?.deny.toArray();
  const allPerms = new Set([...oldAllow, ...oldDeny, ...newAllow, ...newDeny]);
  for (const perm of allPerms) {
    const oldState = getState(perm, oldAllow, oldDeny);
    const newState = getState(perm, newAllow, newDeny);
    if (oldState !== newState) {
      changes.push({ permission: perm, oldState, newState });
    }
  }
  return { changes, action: "UPDATE" };
}
function diffRolePermissions(oldRole, newRole) {
  const oldPerms = oldRole.permissions.toArray();
  const newPerms = newRole.permissions.toArray();
  const changes = [];
  for (const p of newPerms) {
    if (!oldPerms.includes(p)) {
      changes.push({ permission: p, oldState: "NEUTRAL", newState: "ALLOW" });
    }
  }
  for (const p of oldPerms) {
    if (!newPerms.includes(p)) {
      changes.push({ permission: p, oldState: "ALLOW", newState: "NEUTRAL" });
    }
  }
  return changes;
}
function diffMemberRoles(oldMember, newMember) {
  const oldRoles = oldMember.roles.cache;
  const newRoles = newMember.roles.cache;
  return {
    added: [...newRoles.filter((r) => !oldRoles.has(r.id)).values()],
    removed: [...oldRoles.filter((r) => !newRoles.has(r.id)).values()]
  };
}

// voice.ts
import { EventEmitter } from "node:events";
import { pipeline, Readable } from "node:stream";
import {
  createAudioPlayer,
  createAudioResource,
  entersState,
  getVoiceConnections,
  joinVoiceChannel,
  NoSubscriberBehavior,
  StreamType,
  VoiceConnectionStatus
} from "@discordjs/voice";
import {
  ChannelType as ChannelType6,
  createUniqueUuid as createUniqueUuid4,
  EventType as EventType2,
  logger as logger3,
  ModelType as ModelType20,
  stringToUuid as stringToUuid2
} from "@elizaos/core";
import {
  ChannelType as DiscordChannelType4
} from "discord.js";
import prism from "prism-media";
var DECODE_FRAME_SIZE = 1024;
var DECODE_SAMPLE_RATE = 16000;
function createOpusDecoder(options) {
  try {
    return new prism.opus.Decoder(options);
  } catch (error) {
    logger3.warn({
      src: "plugin:discord:service:voice",
      error: error instanceof Error ? error.message : String(error)
    }, "Failed to create opus decoder");
    try {
      const { generateDependencyReport } = __require("@discordjs/voice");
      const report = generateDependencyReport();
      logger3.debug({ src: "plugin:discord:service:voice", report }, "Voice dependency report");
    } catch (reportError) {
      logger3.warn({
        src: "plugin:discord:service:voice",
        error: reportError instanceof Error ? reportError.message : String(reportError)
      }, "Could not generate dependency report");
    }
    throw error;
  }
}
function getWavHeader(audioLength, sampleRate, channelCount = 1, bitsPerSample = 16) {
  const wavHeader = Buffer.alloc(44);
  wavHeader.write("RIFF", 0);
  wavHeader.writeUInt32LE(36 + audioLength, 4);
  wavHeader.write("WAVE", 8);
  wavHeader.write("fmt ", 12);
  wavHeader.writeUInt32LE(16, 16);
  wavHeader.writeUInt16LE(1, 20);
  wavHeader.writeUInt16LE(channelCount, 22);
  wavHeader.writeUInt32LE(sampleRate, 24);
  wavHeader.writeUInt32LE(sampleRate * bitsPerSample * channelCount / 8, 28);
  wavHeader.writeUInt16LE(bitsPerSample * channelCount / 8, 32);
  wavHeader.writeUInt16LE(bitsPerSample, 34);
  wavHeader.write("data", 36);
  wavHeader.writeUInt32LE(audioLength, 40);
  return wavHeader;
}

class AudioMonitor {
  readable;
  buffers = [];
  maxSize;
  lastFlagged = -1;
  ended = false;
  constructor(readable, maxSize, onStart, callback) {
    this.readable = readable;
    this.maxSize = maxSize;
    this.readable.on("data", (chunk) => {
      if (this.lastFlagged < 0) {
        this.lastFlagged = this.buffers.length;
      }
      this.buffers.push(chunk);
      const currentSize = this.buffers.reduce((acc, cur) => acc + cur.length, 0);
      while (currentSize > this.maxSize) {
        this.buffers.shift();
        this.lastFlagged--;
      }
    });
    this.readable.on("end", () => {
      logger3.debug({ src: "plugin:discord:service:voice" }, "AudioMonitor ended");
      this.ended = true;
      if (this.lastFlagged < 0) {
        return;
      }
      callback(this.getBufferFromStart());
      this.lastFlagged = -1;
    });
    this.readable.on("speakingStopped", () => {
      if (this.ended) {
        return;
      }
      logger3.debug({ src: "plugin:discord:service:voice" }, "Speaking stopped");
      if (this.lastFlagged < 0) {
        return;
      }
      callback(this.getBufferFromStart());
    });
    this.readable.on("speakingStarted", () => {
      if (this.ended) {
        return;
      }
      onStart();
      logger3.debug({ src: "plugin:discord:service:voice" }, "Speaking started");
      this.reset();
    });
  }
  stop() {
    this.readable.removeAllListeners("data");
    this.readable.removeAllListeners("end");
    this.readable.removeAllListeners("speakingStopped");
    this.readable.removeAllListeners("speakingStarted");
  }
  isFlagged() {
    return this.lastFlagged >= 0;
  }
  getBufferFromFlag() {
    if (this.lastFlagged < 0) {
      return null;
    }
    const buffer = Buffer.concat(this.buffers.slice(this.lastFlagged));
    return buffer;
  }
  getBufferFromStart() {
    const buffer = Buffer.concat(this.buffers);
    return buffer;
  }
  reset() {
    this.buffers = [];
    this.lastFlagged = -1;
  }
  isEnded() {
    return this.ended;
  }
}

class VoiceManager extends EventEmitter {
  processingVoice = false;
  transcriptionTimeout = null;
  userStates = new Map;
  activeAudioPlayer = null;
  client;
  runtime;
  streams = new Map;
  connections = new Map;
  activeMonitors = new Map;
  ready;
  constructor(service, runtime) {
    super();
    this.client = service.client;
    this.runtime = runtime;
    this.ready = false;
    if (this.client) {
      this.client.on("voiceManagerReady", () => {
        this.setReady(true);
      });
    } else {
      this.runtime.logger.error({ src: "plugin:discord:service:voice", agentId: this.runtime.agentId }, "Discord client not available for voiceManagerReady event");
      this.ready = false;
    }
  }
  async getChannelType(channel) {
    switch (channel.type) {
      case DiscordChannelType4.GuildVoice:
      case DiscordChannelType4.GuildStageVoice:
        return ChannelType6.VOICE_GROUP;
      default:
        this.runtime.logger.error({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          channelId: channel.id,
          channelType: channel.type
        }, "Unexpected channel type");
        throw new Error(`Unexpected channel type encountered: ${channel.type}`);
    }
  }
  setReady(status) {
    this.ready = status;
    this.emit("ready");
    this.runtime.logger.debug({
      src: "plugin:discord:service:voice",
      agentId: this.runtime.agentId,
      ready: this.ready
    }, "VoiceManager ready status changed");
  }
  isReady() {
    return this.ready;
  }
  async handleVoiceStateUpdate(oldState, newState) {
    const oldChannelId = oldState.channelId;
    const newChannelId = newState.channelId;
    const member = newState.member;
    if (!member) {
      return;
    }
    const clientUser = this.client?.user;
    if (clientUser && member.id === clientUser.id) {
      return;
    }
    if (oldChannelId === newChannelId) {
      return;
    }
    if (oldChannelId && this.connections.has(oldChannelId)) {
      this.stopMonitoringMember(member.id);
    }
    if (newChannelId && this.connections.has(newChannelId)) {
      await this.monitorMember(member, newState.channel);
    }
  }
  async joinChannel(channel) {
    const oldConnection = this.getVoiceConnection(channel.guildId);
    if (oldConnection) {
      try {
        oldConnection.destroy();
        this.streams.clear();
        this.activeMonitors.clear();
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error leaving voice channel");
      }
    }
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: false,
      group: this.client?.user?.id ?? "default-group"
    });
    try {
      await Promise.race([
        entersState(connection, VoiceConnectionStatus.Ready, 20000),
        entersState(connection, VoiceConnectionStatus.Signalling, 20000)
      ]);
      this.runtime.logger.info({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        status: connection.state.status
      }, "Voice connection established");
      connection.on("stateChange", async (oldState, newState) => {
        this.runtime.logger.debug({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          oldState: oldState.status,
          newState: newState.status
        }, "Voice connection state changed");
        if (newState.status === VoiceConnectionStatus.Disconnected) {
          this.runtime.logger.debug({
            src: "plugin:discord:service:voice",
            agentId: this.runtime.agentId
          }, "Handling disconnection");
          try {
            await Promise.race([
              entersState(connection, VoiceConnectionStatus.Signalling, 5000),
              entersState(connection, VoiceConnectionStatus.Connecting, 5000)
            ]);
            this.runtime.logger.debug({
              src: "plugin:discord:service:voice",
              agentId: this.runtime.agentId
            }, "Reconnecting to channel");
          } catch (e) {
            this.runtime.logger.debug({
              src: "plugin:discord:service:voice",
              agentId: this.runtime.agentId,
              error: e instanceof Error ? e.message : String(e)
            }, "Disconnection confirmed - cleaning up");
            connection.destroy();
            this.connections.delete(channel.id);
          }
        } else if (newState.status === VoiceConnectionStatus.Destroyed) {
          this.connections.delete(channel.id);
        } else if (!this.connections.has(channel.id) && (newState.status === VoiceConnectionStatus.Ready || newState.status === VoiceConnectionStatus.Signalling)) {
          this.connections.set(channel.id, connection);
        }
      });
      connection.on("error", (error) => {
        this.runtime.logger.error({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Voice connection error");
        this.runtime.logger.debug({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId
        }, "Will attempt to recover");
      });
      this.connections.set(channel.id, connection);
      const me = channel.guild.members.me;
      const meVoice = me?.voice;
      if (meVoice && me.permissions.has("DeafenMembers")) {
        try {
          await meVoice.setDeaf(false);
          await meVoice.setMute(false);
        } catch (error) {
          this.runtime.logger.warn({
            src: "plugin:discord:service:voice",
            agentId: this.runtime.agentId,
            error: error instanceof Error ? error.message : String(error)
          }, "Failed to modify voice state");
        }
      }
      connection.receiver.speaking.on("start", async (entityId) => {
        let user = channel.members.get(entityId);
        if (!user) {
          try {
            user = await channel.guild.members.fetch(entityId);
          } catch (error) {
            this.runtime.logger.error({
              src: "plugin:discord:service:voice",
              agentId: this.runtime.agentId,
              entityId,
              error: error instanceof Error ? error.message : String(error)
            }, "Failed to fetch user");
          }
        }
        const userUser = user?.user;
        if (user && userUser && !userUser.bot) {
          this.monitorMember(user, channel);
          const entityStream = this.streams.get(entityId);
          if (entityStream) {
            entityStream.emit("speakingStarted");
          }
        }
      });
      connection.receiver.speaking.on("end", async (entityId) => {
        const user = channel.members.get(entityId);
        const userUser = user?.user;
        if (user && userUser && !userUser.bot) {
          const entityStream = this.streams.get(entityId);
          if (entityStream) {
            entityStream.emit("speakingStopped");
          }
        }
      });
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        channelId: channel.id,
        error: error instanceof Error ? error.message : String(error)
      }, "Failed to establish voice connection");
      connection.destroy();
      this.connections.delete(channel.id);
      throw error;
    }
  }
  getVoiceConnection(guildId) {
    const clientUser = this.client?.user;
    const userId = clientUser?.id;
    if (!userId) {
      this.runtime.logger.error({ src: "plugin:discord:service:voice", agentId: this.runtime.agentId }, "Client user ID not available");
      return;
    }
    const connections = getVoiceConnections(userId);
    if (!connections) {
      return;
    }
    const connection = [...connections.values()].find((connection2) => connection2.joinConfig.guildId === guildId);
    return connection;
  }
  async monitorMember(member, channel) {
    const entityId = member?.id;
    const memberUser = member?.user;
    const userName = memberUser?.username;
    const name = memberUser?.displayName;
    const memberGuild = member?.guild;
    const memberGuildId = memberGuild?.id;
    const connection = this.getVoiceConnection(memberGuildId);
    const connectionReceiver = connection?.receiver;
    const receiveStream = connectionReceiver?.subscribe(entityId, {
      autoDestroy: true,
      emitClose: true
    });
    if (!receiveStream || receiveStream.readableLength === 0) {
      this.runtime.logger.warn({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        entityId
      }, "No receiveStream or empty stream");
      return;
    }
    let opusDecoder;
    try {
      opusDecoder = createOpusDecoder({
        channels: 1,
        rate: DECODE_SAMPLE_RATE,
        frameSize: DECODE_FRAME_SIZE
      });
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        entityId,
        error: error instanceof Error ? error.message : String(error)
      }, "Failed to create opus decoder");
      return;
    }
    const volumeBuffer = [];
    const VOLUME_WINDOW_SIZE = 30;
    const SPEAKING_THRESHOLD = 0.05;
    opusDecoder.on("data", (pcmData) => {
      if (this.activeAudioPlayer) {
        const samples = new Int16Array(pcmData.buffer, pcmData.byteOffset, pcmData.length / 2);
        const maxAmplitude = Math.max(...samples.map(Math.abs)) / 32768;
        volumeBuffer.push(maxAmplitude);
        if (volumeBuffer.length > VOLUME_WINDOW_SIZE) {
          volumeBuffer.shift();
        }
        const avgVolume = volumeBuffer.reduce((sum, v) => sum + v, 0) / VOLUME_WINDOW_SIZE;
        if (avgVolume > SPEAKING_THRESHOLD) {
          volumeBuffer.length = 0;
          this.cleanupAudioPlayer(this.activeAudioPlayer);
          this.processingVoice = false;
        }
      }
    });
    if (!opusDecoder) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId
      }, "Opus decoder not available");
      return;
    }
    pipeline(receiveStream, opusDecoder, (err) => {
      if (err) {
        this.runtime.logger.debug({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          entityId,
          error: err.message
        }, "Opus decoding pipeline error");
      } else {
        this.runtime.logger.debug({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          entityId
        }, "Opus decoding pipeline finished");
      }
    });
    this.streams.set(entityId, opusDecoder);
    this.connections.set(entityId, connection);
    opusDecoder.on("error", (err) => {
      this.runtime.logger.debug({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: err instanceof Error ? err.message : String(err)
      }, "Opus decoding error");
    });
    const errorHandler = (err) => {
      this.runtime.logger.debug({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: err instanceof Error ? err.message : String(err)
      }, "Opus decoding error");
    };
    const streamCloseHandler = () => {
      this.runtime.logger.debug({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        member: member?.displayName || undefined
      }, "Voice stream closed");
      this.streams.delete(entityId);
      this.connections.delete(entityId);
    };
    const closeHandler = () => {
      this.runtime.logger.debug({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        member: member?.displayName || undefined
      }, "Opus decoder closed");
      opusDecoder.removeListener("error", errorHandler);
      opusDecoder.removeListener("close", closeHandler);
      if (receiveStream) {
        receiveStream.removeListener("close", streamCloseHandler);
      }
    };
    opusDecoder.on("error", errorHandler);
    opusDecoder.on("close", closeHandler);
    if (receiveStream) {
      receiveStream.on("close", streamCloseHandler);
    }
    if (this.client) {
      this.client.emit("userStream", entityId, name, userName, channel, opusDecoder);
    }
  }
  leaveChannel(channel) {
    const connection = this.connections.get(channel.id);
    if (connection) {
      connection.destroy();
      this.connections.delete(channel.id);
    }
    for (const [memberId, monitorInfo] of this.activeMonitors) {
      if (monitorInfo.channel.id === channel.id && memberId !== this.client?.user?.id) {
        this.stopMonitoringMember(memberId);
      }
    }
    this.runtime.logger.debug({
      src: "plugin:discord:service:voice",
      agentId: this.runtime.agentId,
      channelId: channel.id,
      channelName: channel.name
    }, "Left voice channel");
  }
  stopMonitoringMember(memberId) {
    const monitorInfo = this.activeMonitors.get(memberId);
    if (monitorInfo) {
      monitorInfo.monitor.stop();
      this.activeMonitors.delete(memberId);
      this.streams.delete(memberId);
      this.runtime.logger.debug({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        memberId
      }, "Stopped monitoring user");
    }
  }
  async debouncedProcessTranscription(entityId, name, userName, channel) {
    const DEBOUNCE_TRANSCRIPTION_THRESHOLD = 1500;
    const activeAudioPlayer = this.activeAudioPlayer;
    const activeAudioPlayerState = activeAudioPlayer?.state;
    if (activeAudioPlayerState && activeAudioPlayerState.status === "idle") {
      this.runtime.logger.debug({ src: "plugin:discord:service:voice", agentId: this.runtime.agentId }, "Cleaning up idle audio player");
      this.cleanupAudioPlayer(this.activeAudioPlayer);
    }
    if (this.activeAudioPlayer || this.processingVoice) {
      const state = this.userStates.get(entityId);
      if (state) {
        state.buffers.length = 0;
        state.totalLength = 0;
      }
      return;
    }
    if (this.transcriptionTimeout) {
      clearTimeout(this.transcriptionTimeout);
    }
    this.transcriptionTimeout = setTimeout(async () => {
      this.processingVoice = true;
      try {
        await this.processTranscription(entityId, channel.id, channel, name, userName);
        this.userStates.forEach((state, _) => {
          state.buffers.length = 0;
          state.totalLength = 0;
        });
      } finally {
        this.processingVoice = false;
      }
    }, DEBOUNCE_TRANSCRIPTION_THRESHOLD);
  }
  async handleUserStream(entityId, name, userName, channel, audioStream) {
    this.runtime.logger.debug({
      src: "plugin:discord:service:voice",
      agentId: this.runtime.agentId,
      entityId
    }, "Starting audio monitor");
    if (!this.userStates.has(entityId)) {
      this.userStates.set(entityId, {
        buffers: [],
        totalLength: 0,
        lastActive: Date.now(),
        transcriptionText: ""
      });
    }
    const state = this.userStates.get(entityId);
    const processBuffer = async (buffer) => {
      try {
        if (state?.buffers) {
          state.buffers.push(buffer);
          state.totalLength += buffer.length;
        }
        if (state) {
          state.lastActive = Date.now();
        }
        this.debouncedProcessTranscription(entityId, name, userName, channel);
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          entityId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error processing buffer");
      }
    };
    new AudioMonitor(audioStream, 1e7, () => {
      if (this.transcriptionTimeout) {
        clearTimeout(this.transcriptionTimeout);
      }
    }, async (buffer) => {
      if (!buffer) {
        this.runtime.logger.error({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId
        }, "Received empty buffer");
        return;
      }
      await processBuffer(buffer);
    });
  }
  async processTranscription(entityId, channelId, channel, name, userName) {
    const state = this.userStates.get(entityId);
    if (!state || state.buffers.length === 0) {
      return;
    }
    try {
      let isValidTranscription = function(text) {
        if (!text || text.includes("[BLANK_AUDIO]")) {
          return false;
        }
        return true;
      };
      const inputBuffer = Buffer.concat(state.buffers, state.totalLength);
      state.buffers.length = 0;
      state.totalLength = 0;
      const wavBuffer = await this.convertOpusToWav(inputBuffer);
      this.runtime.logger.debug({ src: "plugin:discord:service:voice", agentId: this.runtime.agentId }, "Starting transcription");
      const transcriptionText = await this.runtime.useModel(ModelType20.TRANSCRIPTION, wavBuffer);
      if (transcriptionText && isValidTranscription(transcriptionText)) {
        state.transcriptionText += transcriptionText;
      }
      if (state.transcriptionText.length) {
        this.cleanupAudioPlayer(this.activeAudioPlayer);
        const finalText = state.transcriptionText;
        state.transcriptionText = "";
        await this.handleMessage(finalText, entityId, channelId, channel, name, userName);
      }
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        entityId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error transcribing audio");
    }
  }
  async handleMessage(message, entityId, channelId, channel, name, userName) {
    try {
      if (!message || message.trim() === "" || message.length < 3) {
        return { text: "", actions: ["IGNORE"] };
      }
      const roomId = createUniqueUuid4(this.runtime, channelId);
      const uniqueEntityId = createUniqueUuid4(this.runtime, entityId);
      const type = await this.getChannelType(channel);
      await this.runtime.ensureConnection({
        entityId: uniqueEntityId,
        roomId,
        userName,
        name,
        source: "discord",
        channelId,
        messageServerId: stringToUuid2(channel.guild.id),
        type,
        worldId: createUniqueUuid4(this.runtime, channel.guild.id),
        worldName: channel.guild.name
      });
      const memory = {
        id: createUniqueUuid4(this.runtime, `${channelId}-voice-message-${Date.now()}`),
        agentId: this.runtime.agentId,
        entityId: uniqueEntityId,
        roomId,
        content: {
          text: message,
          source: "discord",
          url: channel.url,
          name,
          userName,
          isVoiceMessage: true,
          channelType: type
        },
        createdAt: Date.now()
      };
      const callback = async (content, _actionName) => {
        try {
          const responseMemory = {
            id: createUniqueUuid4(this.runtime, `${memory.id}-voice-response-${Date.now()}`),
            entityId: this.runtime.agentId,
            agentId: this.runtime.agentId,
            content: {
              ...content,
              name: this.runtime.character.name,
              inReplyTo: memory.id,
              isVoiceMessage: true,
              channelType: type
            },
            roomId,
            createdAt: Date.now()
          };
          const responseMemoryContentText = responseMemory.content.text;
          if (responseMemoryContentText?.trim()) {
            await this.runtime.createMemory(responseMemory, "messages");
            if (content.text) {
              const responseStream = await this.runtime.useModel(ModelType20.TEXT_TO_SPEECH, content.text);
              if (responseStream) {
                const buffer = Buffer.isBuffer(responseStream) ? responseStream : Buffer.from(responseStream);
                const readable = Readable.from(buffer);
                await this.playAudioStream(entityId, readable);
              }
            }
          }
          return [responseMemory];
        } catch (error) {
          this.runtime.logger.error({
            src: "plugin:discord:service:voice",
            agentId: this.runtime.agentId,
            error: error instanceof Error ? error.message : String(error)
          }, "Error in voice message callback");
          return [];
        }
      };
      const messageService = getMessageService(this.runtime);
      if (messageService) {
        this.runtime.logger.debug({ src: "plugin:discord:voice", agentId: this.runtime.agentId }, "Using messageService API for voice");
        await messageService.handleMessage(this.runtime, memory, callback);
      } else {
        this.runtime.logger.debug({ src: "plugin:discord:voice", agentId: this.runtime.agentId }, "Using event-based handling for voice");
        await this.runtime.emitEvent([EventType2.VOICE_MESSAGE_RECEIVED], {
          runtime: this.runtime,
          message: memory,
          callback,
          source: "discord"
        });
      }
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error processing voice message");
    }
  }
  async convertOpusToWav(pcmBuffer) {
    try {
      const wavHeader = getWavHeader(pcmBuffer.length, DECODE_SAMPLE_RATE);
      const wavBuffer = Buffer.concat([wavHeader, pcmBuffer]);
      return wavBuffer;
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error converting PCM to WAV");
      throw error;
    }
  }
  async scanGuild(guild) {
    let chosenChannel = null;
    try {
      const channelId = this.runtime.getSetting("DISCORD_VOICE_CHANNEL_ID");
      if (channelId) {
        const channel = await guild.channels.fetch(channelId);
        if (channel?.isVoiceBased?.()) {
          chosenChannel = channel;
        }
      }
      if (!chosenChannel) {
        const channels = (await guild.channels.fetch()).filter((channel) => channel && channel.type === DiscordChannelType4.GuildVoice);
        for (const [, channel] of channels) {
          const voiceChannel = channel;
          if (voiceChannel.members.size > 0 && (chosenChannel === null || voiceChannel.members.size > chosenChannel.members.size)) {
            chosenChannel = voiceChannel;
          }
        }
      }
      if (chosenChannel) {
        this.runtime.logger.debug({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          channelName: chosenChannel.name
        }, "Joining channel");
        await this.joinChannel(chosenChannel);
      } else {
        this.runtime.logger.warn({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId
        }, "No suitable voice channel found to join");
      }
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error selecting or joining a voice channel");
    }
  }
  async playAudioStream(entityId, audioStream) {
    const connection = this.connections.get(entityId);
    if (connection == null) {
      this.runtime.logger.debug({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        entityId
      }, "No connection for user");
      return;
    }
    this.cleanupAudioPlayer(this.activeAudioPlayer);
    const audioPlayer = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause
      }
    });
    this.activeAudioPlayer = audioPlayer;
    connection.subscribe(audioPlayer);
    const audioStartTime = Date.now();
    const resource = createAudioResource(audioStream, {
      inputType: StreamType.Arbitrary
    });
    audioPlayer.play(resource);
    audioPlayer.on("error", (err) => {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: err instanceof Error ? err.message : String(err)
      }, "Audio player error");
    });
    audioPlayer.on("stateChange", (_oldState, newState) => {
      if (newState.status === "idle") {
        const idleTime = Date.now();
        this.runtime.logger.debug({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          durationMs: idleTime - audioStartTime
        }, "Audio playback completed");
      }
    });
  }
  cleanupAudioPlayer(audioPlayer) {
    if (!audioPlayer) {
      return;
    }
    audioPlayer.stop();
    audioPlayer.removeAllListeners();
    if (audioPlayer === this.activeAudioPlayer) {
      this.activeAudioPlayer = null;
    }
  }
  async handleJoinChannelCommand(interaction) {
    try {
      await interaction.deferReply();
      const interactionOptionsChannel = interaction.options.get("channel");
      const channelId = interactionOptionsChannel?.value;
      if (!channelId) {
        await interaction.editReply("Please provide a voice channel to join.");
        return;
      }
      const guild = interaction.guild;
      if (!guild) {
        await interaction.editReply("Could not find guild.");
        return;
      }
      const voiceChannel = interaction.guild.channels.cache.find((channel) => channel.id === channelId && channel.type === DiscordChannelType4.GuildVoice);
      if (!voiceChannel) {
        await interaction.editReply("Voice channel not found!");
        return;
      }
      await this.joinChannel(voiceChannel);
      await interaction.editReply(`Joined voice channel: ${voiceChannel.name}`);
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error joining voice channel");
      await interaction.editReply("Failed to join the voice channel.").catch((err) => {
        this.runtime.logger.error({
          src: "plugin:discord:service:voice",
          agentId: this.runtime.agentId,
          error: err.message
        }, "Failed to send error reply");
      });
    }
  }
  async handleLeaveChannelCommand(interaction) {
    if (!interaction.guildId) {
      await interaction.reply("This command can only be used in a server.");
      return;
    }
    const connection = this.getVoiceConnection(interaction.guildId);
    if (!connection) {
      await interaction.reply("Not currently in a voice channel.");
      return;
    }
    try {
      connection.destroy();
      await interaction.reply("Left the voice channel.");
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord:service:voice",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error leaving voice channel");
      await interaction.reply("Failed to leave the voice channel.");
    }
  }
}

// service.ts
class DiscordService extends Service {
  static serviceType = DISCORD_SERVICE_NAME;
  capabilityDescription = "The agent is able to send and receive messages on discord";
  client;
  character;
  messageManager;
  voiceManager;
  discordSettings;
  userSelections = new Map;
  timeouts = [];
  clientReadyPromise = null;
  slashCommands = [];
  commandRegistrationQueue = Promise.resolve();
  allowAllSlashCommands = new Set;
  allowedChannelIds;
  dynamicChannelIds = new Set;
  constructor(runtime) {
    super(runtime);
    this.discordSettings = getDiscordSettings(runtime);
    this.character = runtime.character;
    const channelIdsRaw = runtime.getSetting("CHANNEL_IDS");
    if (channelIdsRaw && typeof channelIdsRaw === "string" && channelIdsRaw.trim && typeof channelIdsRaw.trim === "function" && channelIdsRaw.trim()) {
      this.allowedChannelIds = channelIdsRaw.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        allowedChannelIds: this.allowedChannelIds
      }, "Channel restrictions enabled");
    }
    const token = runtime.getSetting("DISCORD_API_TOKEN");
    const tokenTrimmed = token && typeof token === "string" && token.trim && typeof token.trim === "function" ? token.trim() : token;
    if (!token || tokenTrimmed === "" || token === null) {
      this.runtime.logger.warn("Discord API Token not provided");
      this.client = null;
      return;
    }
    try {
      const client = new DiscordJsClient({
        intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.GuildPresences,
          GatewayIntentBits.DirectMessages,
          GatewayIntentBits.GuildVoiceStates,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.DirectMessageTyping,
          GatewayIntentBits.GuildMessageTyping,
          GatewayIntentBits.GuildMessageReactions
        ],
        partials: [
          Partials.Channel,
          Partials.Message,
          Partials.User,
          Partials.Reaction
        ]
      });
      this.client = client;
      this.runtime = createCompatRuntime(runtime);
      this.voiceManager = new VoiceManager(this, this.runtime);
      this.messageManager = new MessageManager(this, this.runtime);
      this.clientReadyPromise = new Promise((resolve, reject) => {
        client.once(Events.ClientReady, async (readyClient) => {
          try {
            await this.onReady(readyClient);
            resolve();
          } catch (error) {
            this.runtime.logger.error(`Error in onReady: ${error instanceof Error ? error.message : String(error)}`);
            reject(error);
          }
        });
        client.once(Events.Error, (error) => {
          this.runtime.logger.error(`Discord client error: ${error instanceof Error ? error.message : String(error)}`);
          reject(error);
        });
        client.login(token).catch((error) => {
          this.runtime.logger.error(`Failed to login to Discord: ${error instanceof Error ? error.message : String(error)}`);
          if (this.client) {
            this.client.destroy().catch(() => {});
          }
          this.client = null;
          reject(error);
        });
      });
      this.clientReadyPromise.catch((_error) => {});
      this.setupEventListeners();
    } catch (error) {
      runtime.logger.error(`Error initializing Discord client: ${error instanceof Error ? error.message : String(error)}`);
      this.client = null;
    }
  }
  static async start(runtime) {
    const service = new DiscordService(runtime);
    return service;
  }
  async handleSendMessage(runtime, target, content) {
    if (!this.client || !this.client.isReady()) {
      runtime.logger.error("Client not ready");
      throw new Error("Discord client is not ready.");
    }
    const client = this.client;
    if (target.channelId && this.allowedChannelIds && !this.isChannelAllowed(target.channelId)) {
      runtime.logger.warn(`Channel ${target.channelId} not in allowed list, skipping send`);
      return;
    }
    let targetChannel = null;
    try {
      if (target.channelId) {
        targetChannel = await client.channels.fetch(target.channelId);
      } else if (target.entityId) {
        const discordUserId = target.entityId;
        const user = await client.users.fetch(discordUserId);
        if (user) {
          targetChannel = user.dmChannel ?? await user.createDM();
        }
      } else {
        throw new Error("Discord SendHandler requires channelId or entityId.");
      }
      if (!targetChannel) {
        const targetStr = JSON.stringify(target, (_key, value) => {
          if (typeof value === "bigint") {
            return value.toString();
          }
          return value;
        });
        throw new Error(`Could not find target Discord channel/DM for target: ${targetStr}`);
      }
      if (targetChannel.isTextBased() && !targetChannel.isVoiceBased()) {
        if ("send" in targetChannel && typeof targetChannel.send === "function") {
          const files = [];
          if (content.attachments && content.attachments.length > 0) {
            for (const media of content.attachments) {
              if (media.url) {
                const fileName = getAttachmentFileName(media);
                files.push(new AttachmentBuilder2(media.url, { name: fileName }));
              }
            }
          }
          const sentMessages = [];
          const roomId = createUniqueUuid5(runtime, targetChannel.id);
          const channelType = await this.getChannelType(targetChannel);
          if (content.text || files.length > 0) {
            if (content.text) {
              const chunks = splitMessage(content.text, MAX_MESSAGE_LENGTH);
              if (chunks.length > 1) {
                for (let i = 0;i < chunks.length - 1; i++) {
                  const sent2 = await targetChannel.send(chunks[i]);
                  sentMessages.push(sent2);
                }
                const sent = await targetChannel.send({
                  content: chunks[chunks.length - 1],
                  files: files.length > 0 ? files : undefined
                });
                sentMessages.push(sent);
              } else {
                const sent = await targetChannel.send({
                  content: chunks[0],
                  files: files.length > 0 ? files : undefined
                });
                sentMessages.push(sent);
              }
            } else {
              const sent = await targetChannel.send({
                files
              });
              sentMessages.push(sent);
            }
          } else {
            runtime.logger.warn("No text content or attachments provided");
          }
          const targetChannelGuild = "guild" in targetChannel ? targetChannel.guild : null;
          const serverId = targetChannelGuild?.id ? targetChannelGuild.id : targetChannel.id;
          const worldId = createUniqueUuid5(runtime, serverId);
          const worldName = targetChannelGuild?.name ? targetChannelGuild.name : undefined;
          const clientUser = client.user;
          await this.runtime.ensureConnection({
            entityId: runtime.agentId,
            roomId,
            userName: clientUser?.username ? clientUser.username : undefined,
            name: clientUser?.displayName || clientUser?.username || undefined,
            source: "discord",
            channelId: targetChannel.id,
            messageServerId: stringToUuid3(serverId),
            type: channelType,
            worldId,
            worldName
          });
          for (const sentMsg of sentMessages) {
            try {
              const hasAttachments = sentMsg.attachments.size > 0;
              const memory = {
                id: createUniqueUuid5(runtime, sentMsg.id),
                entityId: runtime.agentId,
                agentId: runtime.agentId,
                roomId,
                content: {
                  text: sentMsg.content || content.text || " ",
                  url: sentMsg.url,
                  channelType,
                  ...hasAttachments && content.attachments ? { attachments: content.attachments } : {},
                  ...content.action ? { action: content.action } : {}
                },
                metadata: {
                  type: MemoryType7.MESSAGE
                },
                createdAt: sentMsg.createdTimestamp || Date.now()
              };
              await runtime.createMemory(memory, "messages");
              runtime.logger.debug({
                src: "plugin:discord",
                agentId: runtime.agentId,
                messageId: sentMsg.id
              }, "Saved sent message to memory");
            } catch (error) {
              runtime.logger.warn(`Failed to save sent message ${sentMsg.id} to memory: ${error instanceof Error ? error.message : String(error)}`);
            }
          }
        } else {
          throw new Error(`Target channel ${targetChannel.id} does not have a send method.`);
        }
      } else {
        throw new Error(`Target channel ${targetChannel.id} is not a valid text-based channel for sending messages.`);
      }
    } catch (error) {
      runtime.logger.error(`Error sending message to ${JSON.stringify(target)}: ${error instanceof Error ? error.message : String(error)}`);
      throw error;
    }
  }
  setupEventListeners() {
    if (!this.client) {
      return;
    }
    const listenCidsRaw = this.runtime.getSetting("DISCORD_LISTEN_CHANNEL_IDS");
    const listenCids = Array.isArray(listenCidsRaw) ? listenCidsRaw : listenCidsRaw && typeof listenCidsRaw === "string" && listenCidsRaw.trim() ? listenCidsRaw.trim().split(",").map((s) => s.trim()).filter((s) => s.length > 0) : [];
    this.client.on("messageCreate", async (message) => {
      const clientUser = this.client?.user;
      if (clientUser && message.author.id === clientUser.id || message.author.bot && this.discordSettings.shouldIgnoreBotMessages) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          authorId: message.author.id,
          isBot: message.author.bot
        }, "Ignoring message from bot or self");
        return;
      }
      if (listenCids.includes(message.channel.id) && message) {
        const newMessage = await this.buildMemoryFromMessage(message);
        if (!newMessage) {
          this.runtime.logger.warn({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            messageId: message.id
          }, "Failed to build memory from listen channel message");
          return;
        }
        const listenPayload = {
          runtime: this.runtime,
          message: newMessage,
          source: "discord"
        };
        this.runtime.emitEvent("DISCORD_LISTEN_CHANNEL_MESSAGE" /* LISTEN_CHANNEL_MESSAGE */, listenPayload);
      }
      if (this.allowedChannelIds && !this.isChannelAllowed(message.channel.id)) {
        const channel = this.client ? await this.client.channels.fetch(message.channel.id) : null;
        const notInChannelsPayload = {
          runtime: this.runtime,
          message,
          source: "discord"
        };
        this.runtime.emitEvent("DISCORD_NOT_IN_CHANNELS_MESSAGE" /* NOT_IN_CHANNELS_MESSAGE */, notInChannelsPayload);
        if (!channel) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            channelId: message.channel.id
          }, "Channel not found");
          return;
        }
        if (channel.isThread()) {
          if (!channel.parentId || !this.isChannelAllowed(channel.parentId)) {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              parentChannelId: channel.parentId
            }, "Thread not in allowed channel");
            return;
          }
        } else {
          if (channel?.isTextBased && typeof channel.isTextBased === "function" && channel.isTextBased()) {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              channelId: channel.id
            }, "Channel not allowed");
          }
          return;
        }
      }
      try {
        if (this.messageManager) {
          this.messageManager.handleMessage(message);
        }
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling message");
      }
    });
    this.client.on("messageReactionAdd", async (reaction, user) => {
      const clientUser = this.client?.user;
      if (clientUser && user.id === clientUser.id) {
        return;
      }
      if (this.allowedChannelIds && reaction.message.channel && !this.isChannelAllowed(reaction.message.channel.id)) {
        return;
      }
      try {
        await this.handleReactionAdd(reaction, user);
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling reaction add");
      }
    });
    this.client.on("messageReactionRemove", async (reaction, user) => {
      const clientUser = this.client?.user;
      if (clientUser && user.id === clientUser.id) {
        return;
      }
      if (this.allowedChannelIds && reaction.message.channel && !this.isChannelAllowed(reaction.message.channel.id)) {
        return;
      }
      try {
        await this.handleReactionRemove(reaction, user);
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling reaction remove");
      }
    });
    this.client.on("guildCreate", async (guild) => {
      try {
        await this.handleGuildCreate(guild);
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling guild create");
      }
    });
    this.client.on("guildMemberAdd", async (member) => {
      try {
        await this.handleGuildMemberAdd(member);
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling guild member add");
      }
    });
    this.client.on("interactionCreate", async (interaction) => {
      const isSlashCommand = interaction.isCommand();
      const isModalSubmit = interaction.isModalSubmit();
      const isComponent = interaction.isMessageComponent();
      const bypassChannelRestriction = isSlashCommand && this.allowAllSlashCommands.has(interaction.commandName ?? "");
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        interactionType: interaction.type,
        commandName: isSlashCommand ? interaction.commandName : undefined,
        channelId: interaction.channelId,
        inGuild: interaction.inGuild(),
        bypassChannelRestriction
      }, "[DiscordService] interactionCreate received");
      const isFollowUpInteraction = Boolean(interaction.isModalSubmit() || interaction.isMessageComponent() || interaction.isAutocomplete());
      if (!isFollowUpInteraction && this.allowedChannelIds && interaction.channelId && !this.isChannelAllowed(interaction.channelId) && !bypassChannelRestriction) {
        if (isSlashCommand && interaction.isCommand()) {
          try {
            await interaction.reply({
              content: "This command is not available in this channel.",
              ephemeral: true
            });
          } catch (responseError) {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              error: responseError instanceof Error ? responseError.message : String(responseError)
            }, "Could not send channel restriction response");
          }
        }
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId: interaction.channelId,
          allowedChannelIds: this.allowedChannelIds,
          isSlashCommand,
          isModalSubmit,
          isComponent,
          bypassChannelRestriction
        }, "[DiscordService] interactionCreate ignored (channel not allowed)");
        return;
      }
      if (isSlashCommand && interaction.commandName) {
        const command = this.slashCommands.find((cmd) => cmd.name === interaction.commandName);
        if (command?.validator) {
          try {
            const isValid = await command.validator(interaction, this.runtime);
            if (!isValid) {
              if (!interaction.replied) {
                try {
                  const errorMessage = "You do not have permission to use this command.";
                  if (interaction.deferred) {
                    await interaction.editReply({ content: errorMessage });
                  } else {
                    await interaction.reply({
                      content: errorMessage,
                      ephemeral: true
                    });
                  }
                } catch (responseError) {
                  this.runtime.logger.debug({
                    src: "plugin:discord",
                    agentId: this.runtime.agentId,
                    commandName: interaction.commandName,
                    error: responseError instanceof Error ? responseError.message : String(responseError)
                  }, "Could not send validator rejection response (may have already responded)");
                }
              }
              this.runtime.logger.debug({
                src: "plugin:discord",
                agentId: this.runtime.agentId,
                commandName: interaction.commandName
              }, "[DiscordService] interactionCreate ignored (custom validator returned false)");
              return;
            }
          } catch (error) {
            if (!interaction.replied) {
              try {
                const errorMessage = "An error occurred while validating this command.";
                if (interaction.deferred) {
                  await interaction.editReply({ content: errorMessage });
                } else {
                  await interaction.reply({
                    content: errorMessage,
                    ephemeral: true
                  });
                }
              } catch (responseError) {
                this.runtime.logger.debug({
                  src: "plugin:discord",
                  agentId: this.runtime.agentId,
                  commandName: interaction.commandName,
                  error: responseError instanceof Error ? responseError.message : String(responseError)
                }, "Could not send validator error response (may have already responded)");
              }
            }
            this.runtime.logger.error({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              commandName: interaction.commandName,
              error: error instanceof Error ? error.message : String(error)
            }, "[DiscordService] Custom validator threw error");
            return;
          }
        }
      }
      try {
        await this.handleInteractionCreate(interaction);
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling interaction");
      }
    });
    this.client.on("userStream", (entityId, name, userName, channel, opusDecoder) => {
      const clientUser = this.client?.user;
      if (clientUser && entityId !== clientUser.id) {
        if (this.voiceManager) {
          this.voiceManager.handleUserStream(entityId, name, userName, channel, opusDecoder);
        }
      }
    });
    const auditLogSetting = this.runtime.getSetting("DISCORD_AUDIT_LOG_ENABLED");
    const isAuditLogEnabled = auditLogSetting !== "false" && auditLogSetting !== false;
    if (isAuditLogEnabled) {
      this.client.on("channelUpdate", async (oldChannel, newChannel) => {
        try {
          let channel = newChannel;
          if (channel.partial) {
            channel = await channel.fetch();
          }
          if (!("permissionOverwrites" in oldChannel) || !("guild" in channel)) {
            return;
          }
          const guildChannel = channel;
          const oldGuildChannel = oldChannel;
          const oldOverwrites = oldGuildChannel.permissionOverwrites.cache;
          const newOverwrites = guildChannel.permissionOverwrites.cache;
          const allIds = new Set([
            ...oldOverwrites.keys(),
            ...newOverwrites.keys()
          ]);
          for (const id of allIds) {
            const oldOw = oldOverwrites.get(id);
            const newOw = newOverwrites.get(id);
            const { changes, action } = diffOverwrites(oldOw, newOw);
            if (changes.length === 0) {
              continue;
            }
            const auditAction = action === "DELETE" ? AuditLogEvent.ChannelOverwriteDelete : action === "CREATE" ? AuditLogEvent.ChannelOverwriteCreate : AuditLogEvent.ChannelOverwriteUpdate;
            const audit = await fetchAuditEntry(guildChannel.guild, auditAction, guildChannel.id, this.runtime);
            const clientUser = this.client?.user;
            if (audit?.executorId && clientUser && audit.executorId === clientUser.id) {
              continue;
            }
            const oldOwType = oldOw && oldOw.type !== undefined ? oldOw.type : null;
            const newOwType = newOw && newOw.type !== undefined ? newOw.type : null;
            const targetType = (oldOwType ?? newOwType ?? 1) === 0 ? "role" : "user";
            let targetName;
            if (targetType === "role") {
              const role = guildChannel.guild.roles.cache.get(id);
              targetName = role?.name ?? "Unknown";
            } else {
              const user = this.client ? await this.client.users.fetch(id).catch(() => null) : null;
              targetName = user?.tag ?? "Unknown";
            }
            this.runtime.emitEvent("DISCORD_CHANNEL_PERMISSIONS_CHANGED" /* CHANNEL_PERMISSIONS_CHANGED */, {
              runtime: this.runtime,
              source: "discord",
              guild: {
                id: guildChannel.guild.id,
                name: guildChannel.guild.name
              },
              channel: { id: guildChannel.id, name: guildChannel.name },
              target: { type: targetType, id, name: targetName },
              action,
              changes,
              audit
            });
          }
        } catch (err) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: err instanceof Error ? err.message : String(err)
          }, "Error in channelUpdate handler");
        }
      });
      this.client.on("roleUpdate", async (oldRole, newRole) => {
        try {
          const changes = diffRolePermissions(oldRole, newRole);
          if (changes.length === 0) {
            return;
          }
          const audit = await fetchAuditEntry(newRole.guild, AuditLogEvent.RoleUpdate, newRole.id, this.runtime);
          const clientUser = this.client?.user;
          if (audit?.executorId && clientUser && audit.executorId === clientUser.id) {
            return;
          }
          this.runtime.emitEvent("DISCORD_ROLE_PERMISSIONS_CHANGED" /* ROLE_PERMISSIONS_CHANGED */, {
            runtime: this.runtime,
            source: "discord",
            guild: { id: newRole.guild.id, name: newRole.guild.name },
            role: { id: newRole.id, name: newRole.name },
            changes,
            audit
          });
        } catch (err) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: err instanceof Error ? err.message : String(err)
          }, "Error in roleUpdate handler");
        }
      });
      this.client.on("guildMemberUpdate", async (oldMember, newMember) => {
        try {
          if (!oldMember) {
            return;
          }
          let fullOldMember = oldMember;
          if (oldMember.partial) {
            try {
              fullOldMember = await oldMember.fetch();
            } catch {
              return;
            }
          }
          const { added, removed } = diffMemberRoles(fullOldMember, newMember);
          if (added.length === 0 && removed.length === 0) {
            return;
          }
          const audit = await fetchAuditEntry(newMember.guild, AuditLogEvent.MemberRoleUpdate, newMember.id, this.runtime);
          const clientUser = this.client?.user;
          if (audit?.executorId && clientUser && audit.executorId === clientUser.id) {
            return;
          }
          this.runtime.emitEvent("DISCORD_MEMBER_ROLES_CHANGED" /* MEMBER_ROLES_CHANGED */, {
            runtime: this.runtime,
            source: "discord",
            guild: { id: newMember.guild.id, name: newMember.guild.name },
            member: { id: newMember.id, tag: newMember.user.tag },
            added: added.map((r) => ({
              id: r.id,
              name: r.name,
              permissions: r.permissions.toArray()
            })),
            removed: removed.map((r) => ({
              id: r.id,
              name: r.name,
              permissions: r.permissions.toArray()
            })),
            audit
          });
        } catch (err) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: err instanceof Error ? err.message : String(err)
          }, "Error in guildMemberUpdate handler");
        }
      });
      this.client.on("roleCreate", async (role) => {
        try {
          const audit = await fetchAuditEntry(role.guild, AuditLogEvent.RoleCreate, role.id, this.runtime);
          const clientUser = this.client?.user;
          if (audit?.executorId && clientUser && audit.executorId === clientUser.id) {
            return;
          }
          this.runtime.emitEvent("DISCORD_ROLE_CREATED" /* ROLE_CREATED */, {
            runtime: this.runtime,
            source: "discord",
            guild: { id: role.guild.id, name: role.guild.name },
            role: {
              id: role.id,
              name: role.name,
              permissions: role.permissions.toArray()
            },
            audit
          });
        } catch (err) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: err instanceof Error ? err.message : String(err)
          }, "Error in roleCreate handler");
        }
      });
      this.client.on("roleDelete", async (role) => {
        try {
          const audit = await fetchAuditEntry(role.guild, AuditLogEvent.RoleDelete, role.id, this.runtime);
          const clientUser = this.client?.user;
          if (audit?.executorId && clientUser && audit.executorId === clientUser.id) {
            return;
          }
          this.runtime.emitEvent("DISCORD_ROLE_DELETED" /* ROLE_DELETED */, {
            runtime: this.runtime,
            source: "discord",
            guild: { id: role.guild.id, name: role.guild.name },
            role: {
              id: role.id,
              name: role.name,
              permissions: role.permissions.toArray()
            },
            audit
          });
        } catch (err) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: err instanceof Error ? err.message : String(err)
          }, "Error in roleDelete handler");
        }
      });
    }
  }
  async handleGuildMemberAdd(member) {
    this.runtime.logger.info(`New member joined: ${member.user.username} (${member.id})`);
    const guild = member.guild;
    const tag = member.user.bot ? `${member.user.username}#${member.user.discriminator}` : member.user.username;
    const worldId = createUniqueUuid5(this.runtime, guild.id);
    const entityId = createUniqueUuid5(this.runtime, member.id);
    this.runtime.emitEvent(["DISCORD_USER_JOINED" /* ENTITY_JOINED */], {
      runtime: this.runtime,
      entityId,
      worldId,
      source: "discord",
      metadata: {
        type: member.user.bot ? "bot" : "user",
        originalId: member.id,
        username: tag,
        displayName: member.displayName || member.user.username,
        roles: member.roles.cache.map((r) => r.name),
        joinedAt: member.joinedAt?.getTime ? member.joinedAt.getTime() : undefined
      },
      member
    });
  }
  async registerSlashCommands(commands) {
    await this.clientReadyPromise;
    const sanitizeCommandForLogging = (cmd) => {
      const sanitized = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.options,
        contexts: cmd.contexts,
        guildOnly: cmd.guildOnly,
        bypassChannelWhitelist: cmd.bypassChannelWhitelist,
        validator: cmd.validator ? "[Function]" : undefined
      };
      if (cmd.requiredPermissions !== undefined) {
        sanitized.requiredPermissions = typeof cmd.requiredPermissions === "bigint" ? cmd.requiredPermissions.toString() : cmd.requiredPermissions;
      }
      if (cmd.guildIds) {
        sanitized.guildIds = cmd.guildIds;
      }
      return sanitized;
    };
    const sanitizedCommands = commands.map(sanitizeCommandForLogging);
    this.runtime.logger.debug({
      src: "plugin:discord",
      agentId: this.runtime.agentId,
      commandCount: commands.length,
      commands: sanitizedCommands
    }, "Registering Discord commands");
    const clientApplication = this.client?.application;
    if (!clientApplication) {
      this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Cannot register commands - Discord client application not available");
      return;
    }
    if (!Array.isArray(commands) || commands.length === 0) {
      this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Cannot register commands - no commands provided");
      return;
    }
    for (const cmd of commands) {
      if (!cmd.name || !cmd.description) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          command: sanitizeCommandForLogging(cmd)
        }, "Cannot register commands - invalid command (missing name or description)");
        return;
      }
    }
    let registrationError = null;
    let registrationFailed = false;
    this.commandRegistrationQueue = this.commandRegistrationQueue.then(async () => {
      const commandMap = new Map;
      for (const cmd of this.slashCommands) {
        if (cmd.name) {
          commandMap.set(cmd.name, cmd);
        }
      }
      for (const cmd of commands) {
        if (cmd.name) {
          commandMap.set(cmd.name, cmd);
        }
      }
      this.slashCommands = Array.from(commandMap.values());
      this.allowAllSlashCommands.clear();
      for (const cmd of this.slashCommands) {
        if (cmd.bypassChannelWhitelist) {
          this.allowAllSlashCommands.add(cmd.name);
        }
      }
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        bypassCommands: Array.from(this.allowAllSlashCommands)
      }, "[DiscordService] Rebuilt bypassChannelWhitelist set from merged commands");
      const generalCommands = this.slashCommands.filter((cmd) => !cmd.guildIds || cmd.guildIds.length === 0);
      const globalCommands = generalCommands.filter((cmd) => !this.isGuildOnlyCommand(cmd));
      const guildOnlyCommands = generalCommands.filter((cmd) => this.isGuildOnlyCommand(cmd));
      const targetedGuildCommands = this.slashCommands.filter((cmd) => cmd.guildIds && cmd.guildIds.length > 0);
      const transformedGlobalCommands = globalCommands.map((cmd) => this.transformCommandToDiscordApi(cmd));
      const transformedGuildOnlyCommands = guildOnlyCommands.map((cmd) => this.transformCommandToDiscordApi(cmd));
      const transformedAllGeneralCommands = [
        ...transformedGlobalCommands,
        ...transformedGuildOnlyCommands
      ];
      const clientApplication2 = this.client?.application;
      if (!clientApplication2) {
        this.runtime.logger.error({ src: "plugin:discord", agentId: this.runtime.agentId }, "Cannot register commands - Discord client application is not available");
        throw new Error("Discord client application is not available");
      }
      let globalCommandsRegistered = false;
      let perGuildSucceeded = 0;
      let perGuildFailed = 0;
      let targetedCommandsRegistered = 0;
      let targetedCommandsFailed = 0;
      try {
        await this.client.application.commands.set(transformedGlobalCommands);
        globalCommandsRegistered = true;
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          count: transformedGlobalCommands.length
        }, transformedGlobalCommands.length > 0 ? "Global commands registered (for DM access)" : "Global commands cleared (all commands are now guild-only)");
      } catch (err) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: err instanceof Error ? err.message : String(err)
        }, "Failed to register/clear global commands");
      }
      const guilds = this.client.guilds.cache;
      if (transformedAllGeneralCommands.length > 0) {
        const guildRegistrations = [];
        for (const [guildId, guild] of guilds) {
          guildRegistrations.push(this.client.application.commands.set(transformedAllGeneralCommands, guildId).then(() => {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              guildId,
              guildName: guild.name
            }, "Commands registered to guild");
            return { guildId, guildName: guild.name, success: true };
          }).catch((err) => {
            this.runtime.logger.warn({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              guildId,
              guildName: guild.name,
              error: err.message
            }, "Failed to register commands to guild");
            return { guildId, guildName: guild.name, success: false };
          }));
        }
        const perGuildResults = await Promise.all(guildRegistrations);
        perGuildSucceeded = perGuildResults.filter((r) => r.success).length;
        perGuildFailed = perGuildResults.filter((r) => !r.success).length;
      }
      if (targetedGuildCommands.length > 0) {
        const targetedRegistrations = [];
        for (const cmd of targetedGuildCommands) {
          const transformedCmd = this.transformCommandToDiscordApi(cmd);
          if (cmd.guildIds) {
            for (const guildId of cmd.guildIds) {
              const guild = guilds.get(guildId);
              if (!guild) {
                this.runtime.logger.warn({
                  src: "plugin:discord",
                  agentId: this.runtime.agentId,
                  commandName: cmd.name,
                  guildId
                }, "Cannot register targeted command - bot is not a member of the specified guild");
                continue;
              }
              targetedRegistrations.push((async () => {
                try {
                  const fullGuild = await guild.fetch();
                  const existingCommands = await fullGuild.commands.fetch();
                  const existingCommand = existingCommands.find((c) => c.name === cmd.name);
                  if (existingCommand) {
                    await existingCommand.edit(transformedCmd);
                    this.runtime.logger.debug({
                      src: "plugin:discord",
                      agentId: this.runtime.agentId,
                      commandName: cmd.name,
                      guildId: fullGuild.id,
                      guildName: fullGuild.name
                    }, "Updated existing targeted command in guild");
                  } else {
                    await fullGuild.commands.create(transformedCmd);
                    this.runtime.logger.debug({
                      src: "plugin:discord",
                      agentId: this.runtime.agentId,
                      commandName: cmd.name,
                      guildId: fullGuild.id,
                      guildName: fullGuild.name
                    }, "Registered targeted command in guild");
                  }
                  targetedCommandsRegistered++;
                } catch (error) {
                  targetedCommandsFailed++;
                  this.runtime.logger.error({
                    src: "plugin:discord",
                    agentId: this.runtime.agentId,
                    commandName: cmd.name,
                    guildId,
                    error: error instanceof Error ? error.message : String(error)
                  }, "Failed to register targeted command in guild");
                }
              })());
            }
          }
        }
        await Promise.all(targetedRegistrations);
      }
      this.runtime.logger.info({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        newCommands: commands.length,
        totalCommands: this.slashCommands.length,
        globalCommands: transformedGlobalCommands.length,
        globalCommandsRegisteredForDMs: globalCommandsRegistered,
        guildOnlyCommands: transformedGuildOnlyCommands.length,
        commandsPerGuild: transformedAllGeneralCommands.length,
        guildsSucceeded: perGuildSucceeded,
        guildsFailed: perGuildFailed,
        targetedCommands: targetedGuildCommands.length,
        targetedCommandsRegistered,
        targetedCommandsFailed
      }, "Commands registered");
    }).catch((error) => {
      registrationFailed = true;
      registrationError = error instanceof Error ? error : new Error(String(error));
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        error: registrationError.message
      }, "Error registering Discord commands");
    });
    await this.commandRegistrationQueue;
    if (registrationFailed && registrationError) {
      throw registrationError;
    }
  }
  transformCommandToDiscordApi(cmd) {
    const discordCmd = {
      name: cmd.name,
      description: cmd.description,
      options: cmd.options
    };
    if (cmd.contexts) {
      discordCmd.contexts = cmd.contexts;
    } else if (cmd.guildOnly) {
      discordCmd.contexts = [0];
    }
    if (cmd.requiredPermissions !== undefined) {
      discordCmd.default_member_permissions = typeof cmd.requiredPermissions === "bigint" ? cmd.requiredPermissions.toString() : cmd.requiredPermissions;
    }
    return discordCmd;
  }
  isGuildOnlyCommand(cmd) {
    if (cmd.contexts) {
      return cmd.contexts.length === 1 && cmd.contexts[0] === 0;
    }
    return !!cmd.guildOnly;
  }
  async handleGuildCreate(guild) {
    this.runtime.logger.info(`Joined guild: ${guild.name} (${guild.id})`);
    const fullGuild = await guild.fetch();
    const clientApplication = this.client?.application;
    if (this.slashCommands.length > 0 && clientApplication) {
      try {
        const generalCommands = this.slashCommands.filter((cmd) => !cmd.guildIds || cmd.guildIds.length === 0);
        const targetedCommandsForThisGuild = this.slashCommands.filter((cmd) => cmd.guildIds?.includes(fullGuild.id));
        const commandMap = new Map;
        for (const cmd of [
          ...generalCommands,
          ...targetedCommandsForThisGuild
        ]) {
          if (cmd.name) {
            commandMap.set(cmd.name, cmd);
          }
        }
        const commandsToRegister = Array.from(commandMap.values());
        if (commandsToRegister.length > 0) {
          const discordCommands = commandsToRegister.map((cmd) => this.transformCommandToDiscordApi(cmd));
          await this.client.application.commands.set(discordCommands, fullGuild.id);
          this.runtime.logger.info({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            guildId: fullGuild.id,
            guildName: fullGuild.name,
            generalCount: generalCommands.length,
            targetedCount: targetedCommandsForThisGuild.length,
            totalCount: discordCommands.length
          }, "Commands registered to newly joined guild");
        }
      } catch (error) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          guildId: fullGuild.id,
          guildName: fullGuild.name,
          error: error instanceof Error ? error.message : String(error)
        }, "Failed to register commands to newly joined guild");
      }
    }
    const ownerId = createUniqueUuid5(this.runtime, fullGuild.ownerId);
    const worldId = createUniqueUuid5(this.runtime, fullGuild.id);
    const standardizedData = {
      runtime: this.runtime,
      rooms: await this.buildStandardizedRooms(fullGuild, worldId),
      entities: await this.buildStandardizedUsers(fullGuild),
      world: {
        id: worldId,
        name: fullGuild.name,
        agentId: this.runtime.agentId,
        serverId: fullGuild.id,
        metadata: {
          ownership: fullGuild.ownerId ? { ownerId } : undefined,
          roles: {
            [ownerId]: Role.OWNER
          }
        }
      },
      source: "discord"
    };
    this.runtime.emitEvent(["DISCORD_WORLD_JOINED" /* WORLD_JOINED */], {
      runtime: this.runtime,
      source: "discord",
      world: standardizedData.world,
      rooms: standardizedData.rooms,
      entities: standardizedData.entities,
      server: fullGuild
    });
    this.runtime.emitEvent([EventType3.WORLD_JOINED], standardizedData);
  }
  async handleInteractionCreate(interaction) {
    const entityId = createUniqueUuid5(this.runtime, interaction.user.id);
    const userName = interaction.user.bot ? `${interaction.user.username}#${interaction.user.discriminator}` : interaction.user.username;
    const name = interaction.user.displayName;
    const interactionChannelId = interaction.channel?.id;
    const roomId = createUniqueUuid5(this.runtime, interactionChannelId || userName);
    let type;
    let serverId;
    if (interaction.guild) {
      const guild = await interaction.guild.fetch();
      type = await this.getChannelType(interaction.channel);
      if (type === null) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId: interactionChannelId
        }, "Null channel type for interaction");
      }
      serverId = guild.id;
    } else {
      type = ChannelType7.DM;
      serverId = interactionChannelId;
    }
    await this.runtime.ensureConnection({
      entityId,
      roomId,
      userName,
      name,
      source: "discord",
      channelId: interactionChannelId,
      messageServerId: serverId ? stringToUuid3(serverId) : undefined,
      type,
      worldId: createUniqueUuid5(this.runtime, serverId ?? roomId),
      worldName: interaction.guild?.name || undefined
    });
    if (interaction.isCommand()) {
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        commandName: interaction.commandName,
        type: interaction.commandType,
        channelId: interaction.channelId,
        inGuild: interaction.inGuild()
      }, "[DiscordService] Slash command received");
      try {
        if (!this.client) {
          return;
        }
        const slashPayload = {
          runtime: this.runtime,
          source: "discord",
          interaction,
          client: this.client,
          commands: this.slashCommands
        };
        this.runtime.emitEvent("DISCORD_SLASH_COMMAND" /* SLASH_COMMAND */, slashPayload);
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          commandName: interaction.commandName
        }, "[DiscordService] Slash command emitted to runtime");
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          commandName: interaction.commandName,
          error: error instanceof Error ? error.message : String(error)
        }, "[DiscordService] Failed to emit slash command");
        throw error;
      }
    }
    if (interaction.isModalSubmit()) {
      if (!this.client) {
        return;
      }
      const modalPayload = {
        runtime: this.runtime,
        source: "discord",
        interaction,
        client: this.client,
        commands: this.slashCommands
      };
      this.runtime.emitEvent("DISCORD_MODAL_SUBMIT" /* MODAL_SUBMIT */, modalPayload);
    }
    if (interaction.isMessageComponent()) {
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        customId: interaction.customId
      }, "Received component interaction");
      const interactionUser = interaction.user;
      const userId = interactionUser?.id;
      const interactionMessage = interaction.message;
      const messageId = interactionMessage?.id;
      if (!this.userSelections.has(userId)) {
        this.userSelections.set(userId, {});
      }
      const userSelections = this.userSelections.get(userId);
      if (!userSelections) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          entityId: userId
        }, "User selections map unexpectedly missing");
        return;
      }
      try {
        if (interaction.isStringSelectMenu()) {
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            entityId: userId,
            customId: interaction.customId,
            values: interaction.values
          }, "Values selected");
          const existingSelections = userSelections[messageId] || {};
          userSelections[messageId] = {
            ...existingSelections,
            [interaction.customId]: interaction.values
          };
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            messageId,
            selections: userSelections[messageId]
          }, "Current selections for message");
          await interaction.deferUpdate();
        }
        if (interaction.isButton()) {
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            entityId: userId,
            customId: interaction.customId
          }, "Button pressed");
          const formSelections = userSelections[messageId] || {};
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            formSelections
          }, "Form data being submitted");
          const fallbackTimeout = setTimeout(async () => {
            const index = this.timeouts.indexOf(fallbackTimeout);
            if (index > -1) {
              this.timeouts.splice(index, 1);
            }
            if (!interaction.replied && !interaction.deferred) {
              try {
                await interaction.deferUpdate();
                this.runtime.logger.debug({
                  src: "plugin:discord",
                  agentId: this.runtime.agentId,
                  customId: interaction.customId
                }, "Acknowledged button interaction via fallback");
              } catch (ackError) {
                this.runtime.logger.debug({
                  src: "plugin:discord",
                  agentId: this.runtime.agentId,
                  error: ackError instanceof Error ? ackError.message : String(ackError)
                }, "Fallback acknowledgement skipped");
              }
            }
          }, 2500);
          this.timeouts.push(fallbackTimeout);
          const earlyCheckTimeout = setTimeout(() => {
            if (interaction.replied || interaction.deferred) {
              clearTimeout(fallbackTimeout);
              const index = this.timeouts.indexOf(fallbackTimeout);
              if (index > -1) {
                this.timeouts.splice(index, 1);
              }
            }
            const earlyIndex = this.timeouts.indexOf(earlyCheckTimeout);
            if (earlyIndex > -1) {
              this.timeouts.splice(earlyIndex, 1);
            }
          }, 2000);
          this.timeouts.push(earlyCheckTimeout);
          const interactionPayload = {
            runtime: this.runtime,
            source: "discord",
            interaction: {
              customId: interaction.customId,
              componentType: interaction.componentType,
              type: interaction.type,
              user: userId,
              messageId,
              selections: formSelections
            },
            discordInteraction: interaction
          };
          this.runtime.emitEvent(["DISCORD_INTERACTION"], interactionPayload);
          delete userSelections[messageId];
          this.runtime.logger.debug({ src: "plugin:discord", agentId: this.runtime.agentId, messageId }, "Cleared selections for message");
        }
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: error instanceof Error ? error.message : String(error)
        }, "Error handling component interaction");
        try {
          await interaction.followUp({
            content: "There was an error processing your interaction.",
            ephemeral: true
          });
        } catch (followUpError) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: followUpError instanceof Error ? followUpError.message : String(followUpError)
          }, "Error sending follow-up message");
        }
      }
    }
  }
  async buildStandardizedRooms(guild, _worldId) {
    const rooms = [];
    for (const [channelId, channel] of guild.channels.cache) {
      if (channel.type === DiscordChannelType5.GuildText || channel.type === DiscordChannelType5.GuildVoice) {
        const roomId = createUniqueUuid5(this.runtime, channelId);
        let channelType;
        switch (channel.type) {
          case DiscordChannelType5.GuildText:
            channelType = ChannelType7.GROUP;
            break;
          case DiscordChannelType5.GuildVoice:
            channelType = ChannelType7.VOICE_GROUP;
            break;
          default:
            channelType = ChannelType7.GROUP;
        }
        let participants = [];
        if (guild.memberCount < 1000 && channel.type === DiscordChannelType5.GuildText) {
          try {
            participants = Array.from(guild.members.cache.values()).filter((member) => channel.permissionsFor(member)?.has(PermissionsBitField5.Flags.ViewChannel)).map((member) => createUniqueUuid5(this.runtime, member.id));
          } catch (error) {
            this.runtime.logger.warn({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              channelId: channel.id,
              error: error instanceof Error ? error.message : String(error)
            }, "Failed to get participants for channel");
          }
        }
        rooms.push({
          id: roomId,
          name: channel.name,
          type: channelType,
          channelId: channel.id,
          source: "discord",
          metadata: {
            topic: "topic" in channel ? channel.topic : undefined,
            participants
          }
        });
      }
    }
    return rooms;
  }
  async buildStandardizedUsers(guild) {
    const entities = [];
    const clientUser = this.client?.user;
    const botId = clientUser?.id;
    if (guild.memberCount > 1000) {
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        guildId: guild.id,
        memberCount: guild.memberCount.toLocaleString()
      }, "Using optimized user sync for large guild");
      try {
        for (const [, member] of guild.members.cache) {
          const tag = member.user.bot ? `${member.user.username}#${member.user.discriminator}` : member.user.username;
          if (member.id !== botId) {
            entities.push({
              id: createUniqueUuid5(this.runtime, member.id),
              names: Array.from(new Set([
                member.user.username,
                member.displayName,
                member.user.globalName
              ].filter(Boolean))),
              agentId: this.runtime.agentId,
              metadata: {
                default: {
                  username: tag,
                  name: member.displayName || member.user.username
                },
                discord: member.user.globalName ? {
                  username: tag,
                  name: member.displayName || member.user.username,
                  globalName: member.user.globalName,
                  userId: member.id
                } : {
                  username: tag,
                  name: member.displayName || member.user.username,
                  userId: member.id
                }
              }
            });
          }
        }
        if (entities.length < 100) {
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            guildId: guild.id
          }, "Adding online members");
          const onlineMembers = await guild.members.fetch({ limit: 100 });
          for (const [, member] of onlineMembers) {
            if (member.id !== botId) {
              const entityId = createUniqueUuid5(this.runtime, member.id);
              if (!entities.some((u) => u.id === entityId)) {
                const tag = member.user.bot ? `${member.user.username}#${member.user.discriminator}` : member.user.username;
                entities.push({
                  id: entityId,
                  names: Array.from(new Set([
                    member.user.username,
                    member.displayName,
                    member.user.globalName
                  ].filter(Boolean))),
                  agentId: this.runtime.agentId,
                  metadata: {
                    default: {
                      username: tag,
                      name: member.displayName || member.user.username
                    },
                    discord: member.user.globalName ? {
                      username: tag,
                      name: member.displayName || member.user.username,
                      globalName: member.user.globalName,
                      userId: member.id
                    } : {
                      username: tag,
                      name: member.displayName || member.user.username,
                      userId: member.id
                    }
                  }
                });
              }
            }
          }
        }
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          guildId: guild.id,
          error: error instanceof Error ? error.message : String(error)
        }, "Error fetching members");
      }
    } else {
      try {
        let members = guild.members.cache;
        if (members.size === 0) {
          members = await guild.members.fetch();
        }
        for (const [, member] of members) {
          if (member.id !== botId) {
            const tag = member.user.bot ? `${member.user.username}#${member.user.discriminator}` : member.user.username;
            entities.push({
              id: createUniqueUuid5(this.runtime, member.id),
              names: Array.from(new Set([
                member.user.username,
                member.displayName,
                member.user.globalName
              ].filter(Boolean))),
              agentId: this.runtime.agentId,
              metadata: {
                default: {
                  username: tag,
                  name: member.displayName || member.user.username
                },
                discord: member.user.globalName ? {
                  username: tag,
                  name: member.displayName || member.user.username,
                  globalName: member.user.globalName,
                  userId: member.id
                } : {
                  username: tag,
                  name: member.displayName || member.user.username,
                  userId: member.id
                }
              }
            });
          }
        }
      } catch (error) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          guildId: guild.id,
          error: error instanceof Error ? error.message : String(error)
        }, "Error fetching members");
      }
    }
    return entities;
  }
  async onReady(readyClient) {
    this.runtime.logger.success("Discord client ready");
    this.slashCommands = [];
    this.runtime.registerEvent("DISCORD_REGISTER_COMMANDS", async (params) => {
      await this.registerSlashCommands(params.commands);
    });
    const auditLogSettingForInvite = this.runtime.getSetting("DISCORD_AUDIT_LOG_ENABLED");
    const isAuditLogEnabledForInvite = auditLogSettingForInvite !== "false" && auditLogSettingForInvite !== false;
    const readyClientUser = readyClient.user;
    const inviteUrl = readyClientUser?.id ? generateInviteUrl(readyClientUser.id, "MODERATOR_VOICE") : undefined;
    if (isAuditLogEnabledForInvite) {
      this.runtime.logger.info({ src: "plugin:discord", agentId: this.runtime.agentId }, "Audit log tracking enabled - ensure bot has ViewAuditLog permission in server settings");
    }
    const agentName = this.runtime.character.name || readyClientUser?.username || this.runtime.agentId;
    if (inviteUrl) {
      this.runtime.logger.info({ src: "plugin:discord", agentId: this.runtime.agentId, inviteUrl }, "Bot invite URL generated");
      this.runtime.logger.info(`Use this URL to add the "${agentName}" bot to your Discord server: ${inviteUrl}`);
    } else {
      this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId }, "Could not generate invite URL - bot user ID unavailable");
    }
    this.runtime.logger.success(`Discord client logged in successfully as ${readyClientUser?.username || agentName}`);
    const guilds = this.client ? await this.client.guilds.fetch() : null;
    if (!guilds) {
      this.runtime.logger.warn("Could not fetch guilds");
      return;
    }
    for (const [, guild] of guilds) {
      const timeoutId = setTimeout(async () => {
        try {
          const fullGuild = await guild.fetch();
          this.runtime.logger.info(`Discord server connected: ${fullGuild.name} (${fullGuild.id})`);
          const worldId = createUniqueUuid5(this.runtime, fullGuild.id);
          const ownerId = createUniqueUuid5(this.runtime, fullGuild.ownerId);
          const standardizedData = {
            name: fullGuild.name,
            runtime: this.runtime,
            rooms: await this.buildStandardizedRooms(fullGuild, worldId),
            entities: await this.buildStandardizedUsers(fullGuild),
            world: {
              id: worldId,
              name: fullGuild.name,
              agentId: this.runtime.agentId,
              serverId: fullGuild.id,
              metadata: {
                ownership: fullGuild.ownerId ? { ownerId } : undefined,
                roles: {
                  [ownerId]: Role.OWNER
                }
              }
            },
            source: "discord"
          };
          this.runtime.emitEvent(["DISCORD_SERVER_CONNECTED" /* WORLD_CONNECTED */], {
            runtime: this.runtime,
            source: "discord",
            world: standardizedData.world,
            rooms: standardizedData.rooms,
            entities: standardizedData.entities,
            server: fullGuild
          });
          this.runtime.emitEvent([EventType3.WORLD_CONNECTED], standardizedData);
        } catch (error) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: error instanceof Error ? error.message : String(error)
          }, "Error during Discord world connection");
        }
      }, 1000);
      this.timeouts.push(timeoutId);
    }
    const auditLogEnabled = this.runtime.getSetting("DISCORD_AUDIT_LOG_ENABLED");
    if (auditLogEnabled !== "false" && auditLogEnabled !== false) {
      try {
        const testGuild = guilds.first();
        if (testGuild) {
          const fullGuild = await testGuild.fetch();
          await fullGuild.fetchAuditLogs({ limit: 1 });
          this.runtime.logger.debug("Audit log access verified for permission tracking");
        }
      } catch (err) {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: err instanceof Error ? err.message : String(err)
        }, "Cannot access audit logs - permission change alerts will not include executor info");
      }
    }
    if (this.client) {
      this.client.emit("voiceManagerReady");
    }
  }
  static registerSendHandlers(runtime, serviceInstance) {
    if (serviceInstance) {
      runtime.registerSendHandler("discord", serviceInstance.handleSendMessage.bind(serviceInstance));
      runtime.logger.info("Registered send handler");
    }
  }
  async getTextChannelMembers(channelId, useCache = true) {
    this.runtime.logger.debug({
      src: "plugin:discord",
      agentId: this.runtime.agentId,
      channelId,
      useCache
    }, "Fetching members for text channel");
    try {
      const channel = this.client ? await this.client.channels.fetch(channelId) : null;
      if (!channel) {
        this.runtime.logger.error({ src: "plugin:discord", agentId: this.runtime.agentId, channelId }, "Channel not found");
        return [];
      }
      if (channel.type !== DiscordChannelType5.GuildText) {
        this.runtime.logger.error({ src: "plugin:discord", agentId: this.runtime.agentId, channelId }, "Channel is not a text channel");
        return [];
      }
      const guild = channel.guild;
      if (!guild) {
        this.runtime.logger.error({ src: "plugin:discord", agentId: this.runtime.agentId, channelId }, "Channel is not in a guild");
        return [];
      }
      const useCacheOnly = useCache && guild.memberCount > 1000;
      let members;
      if (useCacheOnly) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          guildId: guild.id,
          memberCount: guild.memberCount.toLocaleString()
        }, "Using cached members for large guild");
        members = guild.members.cache;
      } else {
        try {
          if (useCache && guild.members.cache.size > 0) {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              cacheSize: guild.members.cache.size
            }, "Using cached members");
            members = guild.members.cache;
          } else {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              guildId: guild.id
            }, "Fetching members for guild");
            members = await guild.members.fetch();
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              memberCount: members.size.toLocaleString()
            }, "Fetched members");
          }
        } catch (error) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: error instanceof Error ? error.message : String(error)
          }, "Error fetching members");
          members = guild.members.cache;
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            cacheSize: members.size
          }, "Fallback to cache");
        }
      }
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        channelId: channel.id
      }, "Filtering members for channel access");
      const memberArray = Array.from(members.values());
      const channelMembers = memberArray.filter((member) => {
        const clientUser = this.client?.user;
        if (member.user.bot && clientUser && member.id !== clientUser.id) {
          return false;
        }
        return channel.permissionsFor(member)?.has(PermissionsBitField5.Flags.ViewChannel) || false;
      }).map((member) => ({
        id: member.id,
        username: member.user.username,
        displayName: member.displayName || member.user.username
      }));
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        channelId: channel.id,
        memberCount: channelMembers.length.toLocaleString()
      }, "Found members with channel access");
      return channelMembers;
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error fetching channel members");
      return [];
    }
  }
  async getChannelTopic(channelId) {
    try {
      const channel = this.client ? await this.client.channels.fetch(channelId) : null;
      if (channel && "topic" in channel) {
        return channel.topic;
      }
      return null;
    } catch (error) {
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        channelId,
        error: error instanceof Error ? error.message : String(error)
      }, "Failed to fetch channel topic");
      return null;
    }
  }
  async handleReaction(reaction, user, type) {
    try {
      const actionVerb = type === "add" ? "added" : "removed";
      const actionText = type === "add" ? "Added" : "Removed";
      const preposition = type === "add" ? "to" : "from";
      this.runtime.logger.debug({ src: "plugin:discord", agentId: this.runtime.agentId, type }, `Reaction ${actionVerb}`);
      if (!reaction || !user) {
        this.runtime.logger.warn("Invalid reaction or user");
        return;
      }
      let emoji = reaction.emoji.name;
      if (!emoji && reaction.emoji.id) {
        emoji = `<:${reaction.emoji.name}:${reaction.emoji.id}>`;
      }
      if (reaction.partial) {
        try {
          await reaction.fetch();
        } catch (error) {
          this.runtime.logger.error({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            error: error instanceof Error ? error.message : String(error)
          }, "Failed to fetch partial reaction");
          return;
        }
      }
      const timestamp = Date.now();
      const roomId = createUniqueUuid5(this.runtime, reaction.message.channel.id);
      const entityId = createUniqueUuid5(this.runtime, user.id);
      const reactionUUID = createUniqueUuid5(this.runtime, `${reaction.message.id}-${user.id}-${emoji}-${timestamp}`);
      if (!entityId || !roomId) {
        this.runtime.logger.error({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          entityId,
          roomId
        }, "Invalid user ID or room ID");
        return;
      }
      const messageContent = reaction.message.content || "";
      const truncatedContent = messageContent.length > 50 ? `${messageContent.substring(0, 50)}...` : messageContent;
      const reactionMessage = `*${actionText} <${emoji}> ${preposition}: \\"${truncatedContent}\\"*`;
      const reactionMessageAuthor = reaction.message.author;
      const userName = "username" in user && user.username || reactionMessageAuthor?.username || "unknown";
      const name = ("globalName" in user && typeof user.globalName === "string" ? user.globalName : undefined) || (reactionMessageAuthor && "displayName" in reactionMessageAuthor && typeof reactionMessageAuthor.displayName === "string" ? reactionMessageAuthor.displayName : undefined) || userName;
      const channelType = await this.getChannelType(reaction.message.channel);
      await this.runtime.ensureConnection({
        entityId,
        roomId,
        userName,
        worldId: createUniqueUuid5(this.runtime, reaction.message.guild?.id ?? roomId),
        worldName: reaction.message.guild?.name || undefined,
        name,
        source: "discord",
        channelId: reaction.message.channel.id,
        messageServerId: reaction.message.guild?.id ? stringToUuid3(reaction.message.guild.id) : undefined,
        type: channelType
      });
      const inReplyTo = createUniqueUuid5(this.runtime, reaction.message.id);
      const memory = {
        id: reactionUUID,
        entityId,
        agentId: this.runtime.agentId,
        content: {
          text: reactionMessage,
          source: "discord",
          inReplyTo,
          channelType
        },
        roomId,
        createdAt: timestamp
      };
      const callback = async (content) => {
        if (!reaction.message.channel) {
          this.runtime.logger.error({ src: "plugin:discord", agentId: this.runtime.agentId }, "No channel found for reaction message");
          return [];
        }
        await reaction.message.channel.send(content.text ?? "");
        return [];
      };
      const events = type === "add" ? ["DISCORD_REACTION_RECEIVED" /* REACTION_RECEIVED */, EventType3.REACTION_RECEIVED] : ["DISCORD_REACTION_REMOVED" /* REACTION_REMOVED */];
      const reactionPayload = {
        runtime: this.runtime,
        message: memory,
        originalReaction: reaction,
        user,
        source: "discord",
        callback
      };
      this.runtime.emitEvent(events, reactionPayload);
    } catch (error) {
      this.runtime.logger.error({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error)
      }, "Error handling reaction");
    }
  }
  async handleReactionAdd(reaction, user) {
    await this.handleReaction(reaction, user, "add");
  }
  async handleReactionRemove(reaction, user) {
    await this.handleReaction(reaction, user, "remove");
  }
  isChannelAllowed(channelId) {
    if (!this.allowedChannelIds) {
      return true;
    }
    return this.allowedChannelIds.includes(channelId) || this.dynamicChannelIds.has(channelId);
  }
  addAllowedChannel(channelId) {
    if (!this.client || !this.client.channels.cache.has(channelId)) {
      return false;
    }
    this.dynamicChannelIds.add(channelId);
    return true;
  }
  removeAllowedChannel(channelId) {
    if (this.allowedChannelIds?.includes(channelId)) {
      return false;
    }
    return this.dynamicChannelIds.delete(channelId);
  }
  getAllowedChannels() {
    const envChannels = this.allowedChannelIds || [];
    const dynamicChannels = Array.from(this.dynamicChannelIds);
    return [...new Set([...envChannels, ...dynamicChannels])];
  }
  isGuildTextBasedChannel(channel) {
    return !!channel && "isTextBased" in channel && typeof channel.isTextBased === "function" && channel.isTextBased() && "guild" in channel && channel.guild !== null;
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async getSpiderState(channelId) {
    try {
      const stateId = createUniqueUuid5(this.runtime, `discord-spider-state-${channelId}`);
      const stateMemory = await this.runtime.getMemoryById(stateId);
      const stateMemoryContent = stateMemory?.content;
      if (stateMemoryContent?.text) {
        const state = JSON.parse(stateMemory.content.text);
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId,
          state
        }, "Loaded spider state from database");
        return state;
      }
    } catch (error) {
      this.runtime.logger.warn({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        error: error instanceof Error ? error.message : String(error),
        channelId
      }, "Failed to load spider state from database");
    }
    return null;
  }
  async saveSpiderState(state) {
    try {
      const stateId = createUniqueUuid5(this.runtime, `discord-spider-state-${state.channelId}`);
      const roomId = createUniqueUuid5(this.runtime, state.channelId);
      this.runtime.logger.debug(`[SpiderState] Saving channel=${state.channelId} stateId=${stateId}`);
      let existing = null;
      try {
        existing = await this.runtime.getMemoryById(stateId);
        this.runtime.logger.debug(`[SpiderState] getMemoryById: ${existing ? "EXISTS" : "NOT_FOUND"}`);
      } catch (lookupError) {
        const lookupErrorMessage = lookupError instanceof Error ? lookupError.message : String(lookupError);
        this.runtime.logger.debug(`[SpiderState] getMemoryById error: ${lookupErrorMessage}`);
      }
      if (existing) {
        this.runtime.logger.debug("[SpiderState] Deleting existing state before insert");
        try {
          await this.runtime.deleteMemory(stateId);
          this.runtime.logger.debug("[SpiderState] Delete successful");
        } catch (deleteError) {
          const deleteErrorMessage = deleteError instanceof Error ? deleteError.message : String(deleteError);
          this.runtime.logger.debug(`[SpiderState] Delete error: ${deleteErrorMessage}`);
        }
      }
      let serverId;
      let worldId;
      let channelName = state.channelId;
      try {
        if (this.client?.isReady?.()) {
          const channel = await this.client.channels.fetch(state.channelId);
          if (channel && "guild" in channel && channel.guild) {
            serverId = channel.guild.id;
            channelName = "name" in channel ? channel.name ?? state.channelId : state.channelId;
          }
        }
      } catch {}
      worldId = createUniqueUuid5(this.runtime, serverId ?? state.channelId);
      const entityId = this.runtime.agentId;
      try {
        const entity = await this.runtime.getEntityById(entityId);
        if (!entity) {
          await this.runtime.createEntity({
            id: entityId,
            names: ["Spider"],
            agentId: this.runtime.agentId,
            metadata: { source: "discord-spider" }
          });
          this.runtime.logger.debug("[SpiderState] Created entity for agent");
        }
      } catch (entityError) {
        const entityErrorMessage = entityError instanceof Error ? entityError.message : String(entityError);
        if (!entityErrorMessage.includes("duplicate key")) {
          this.runtime.logger.debug(`[SpiderState] Entity ensure error: ${entityErrorMessage}`);
        }
      }
      try {
        await this.runtime.ensureWorldExists({
          id: worldId,
          name: serverId ? `Discord Server ${serverId}` : `Spider World ${state.channelId}`,
          agentId: this.runtime.agentId,
          messageServerId: stringToUuid3(serverId ?? state.channelId)
        });
        this.runtime.logger.debug(`[SpiderState] World ensured: ${worldId}`);
      } catch (worldError) {
        const worldErrorMessage = worldError instanceof Error ? worldError.message : String(worldError);
        this.runtime.logger.debug(`[SpiderState] World ensure error: ${worldErrorMessage}`);
      }
      try {
        await this.runtime.ensureRoomExists({
          id: roomId,
          name: channelName,
          source: "discord",
          type: ChannelType7.GROUP,
          channelId: state.channelId,
          messageServerId: stringToUuid3(serverId ?? state.channelId),
          worldId
        });
        this.runtime.logger.debug(`[SpiderState] Room ensured: ${roomId}`);
      } catch (roomError) {
        const roomErrorMessage = roomError instanceof Error ? roomError.message : String(roomError);
        this.runtime.logger.debug(`[SpiderState] Room ensure error: ${roomErrorMessage}`);
      }
      try {
        await this.runtime.ensureParticipantInRoom(entityId, roomId);
        this.runtime.logger.debug("[SpiderState] Participant ensured in room");
      } catch (participantError) {
        try {
          await this.runtime.addParticipant(entityId, roomId);
          this.runtime.logger.debug("[SpiderState] Participant added to room");
        } catch {
          const participantErrorMessage = participantError?.message ? participantError.message : String(participantError);
          this.runtime.logger.debug(`[SpiderState] Participant ensure error: ${participantErrorMessage}`);
        }
      }
      const stateMemory = {
        id: stateId,
        agentId: this.runtime.agentId,
        entityId,
        roomId,
        content: {
          text: JSON.stringify(state),
          source: "discord-spider"
        },
        metadata: {
          type: MemoryType7.CUSTOM,
          source: "discord-spider-state",
          channelId: state.channelId,
          fullyBackfilled: state.fullyBackfilled
        },
        createdAt: Date.now()
      };
      this.runtime.logger.debug("[SpiderState] Inserting new state");
      await this.runtime.createMemory(stateMemory, "custom");
      this.runtime.logger.debug(`[SpiderState] Save successful for channel ${state.channelId}`);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      const errorCause = error && error.cause;
      const causeMsg = errorCause?.message || (errorCause ? String(errorCause) : "");
      const causeCode = errorCause?.code || "";
      const causeDetail = errorCause?.detail || "";
      if (errorMsg.includes("duplicate key") || errorMsg.includes("unique constraint") || String(causeMsg).includes("duplicate key") || String(causeMsg).includes("unique constraint")) {
        this.runtime.logger.debug("[SpiderState] Duplicate key - state already saved by another operation");
      } else {
        this.runtime.logger.warn({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          error: errorMsg,
          cause: String(causeMsg),
          causeCode,
          causeDetail,
          channelId: state.channelId
        }, "Failed to save spider state to database");
      }
    }
  }
  async fetchChannelHistory(channelId, options = {}) {
    if (!this.client || !this.client.isReady || !this.client.isReady()) {
      this.runtime.logger.warn({ src: "plugin:discord", agentId: this.runtime.agentId, channelId }, "Discord client not ready for history fetch");
      return {
        messages: [],
        stats: { fetched: 0, stored: 0, pages: 0, fullyBackfilled: false }
      };
    }
    const fetchedChannel = await this.client.channels.fetch(channelId);
    if (!this.isGuildTextBasedChannel(fetchedChannel)) {
      this.runtime.logger.warn({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        channelId,
        channelType: fetchedChannel?.type ?? null
      }, "Channel is not a guild text-based channel");
      return {
        messages: [],
        stats: { fetched: 0, stored: 0, pages: 0, fullyBackfilled: false }
      };
    }
    const channel = fetchedChannel;
    const serverId = "guild" in channel && channel.guild ? channel.guild.id : ("guildId" in channel) && channel.guildId ? channel.guildId : channel.id;
    const worldId = serverId ? createUniqueUuid5(this.runtime, serverId) : this.runtime.agentId;
    await this.runtime.ensureWorldExists({
      id: worldId,
      agentId: this.runtime.agentId,
      messageServerId: stringToUuid3(serverId),
      name: (() => {
        const channelGuild = "guild" in channel ? channel.guild : null;
        return channelGuild?.name || "Discord";
      })()
    });
    await this.runtime.ensureRoomExists({
      id: createUniqueUuid5(this.runtime, channel.id),
      agentId: this.runtime.agentId,
      name: "name" in channel && channel.name || channel.id,
      source: "discord",
      type: await this.getChannelType(channel),
      channelId: channel.id,
      messageServerId: stringToUuid3(serverId),
      worldId
    });
    const spiderState = options.force ? null : await this.getSpiderState(channelId);
    const channelName = "name" in channel && channel.name || channelId;
    let consecutiveNoNew = 0;
    let totalStored = 0;
    let totalFetched = 0;
    let pagesProcessed = 0;
    const allMessages = [];
    const startTime = Date.now();
    const ensuredEntityIds = new Set;
    let oldestMessageId = spiderState?.oldestMessageId ?? options.before;
    let newestMessageId = spiderState?.newestMessageId ?? options.after;
    let oldestMessageTimestamp = spiderState?.oldestMessageTimestamp;
    let newestMessageTimestamp = spiderState?.newestMessageTimestamp;
    let reachedEnd = false;
    if (!options.force && spiderState && spiderState.newestMessageId) {
      const lastDate = spiderState.newestMessageTimestamp ? new Date(spiderState.newestMessageTimestamp).toISOString().split("T")[0] : "unknown";
      this.runtime.logger.info(`#${channelName}: Catching up on new messages since ${lastDate}`);
      const catchUpBatches = [];
      let catchUpBefore;
      let _catchUpPages = 0;
      let reachedKnownHistory = false;
      while (!reachedKnownHistory) {
        _catchUpPages++;
        const fetchParams = { limit: 100 };
        if (catchUpBefore) {
          fetchParams.before = catchUpBefore;
        }
        const batch = await channel.messages.fetch(fetchParams);
        if (batch.size === 0) {
          break;
        }
        const messages = Array.from(batch.values()).sort((a, b) => (a.createdTimestamp ?? 0) - (b.createdTimestamp ?? 0));
        const knownNewestTimestamp = spiderState.newestMessageTimestamp ?? 0;
        const knownNewestId = spiderState.newestMessageId;
        const filteredMessages = [];
        for (const msg of messages) {
          const msgTimestamp = msg.createdTimestamp ?? 0;
          if (msgTimestamp > knownNewestTimestamp) {
            filteredMessages.push(msg);
          } else if (msgTimestamp === knownNewestTimestamp && msg.id !== knownNewestId) {
            filteredMessages.push(msg);
          } else {
            reachedKnownHistory = true;
          }
        }
        if (filteredMessages.length > 0) {
          catchUpBatches.push(filteredMessages);
        }
        if (batch.size < 100 || reachedKnownHistory) {
          break;
        }
        const batchLast = batch.last();
        catchUpBefore = batchLast?.id;
        await this.delay(250);
      }
      catchUpBatches.reverse();
      let catchUpBatchIndex = 0;
      for (let messages of catchUpBatches) {
        catchUpBatchIndex++;
        if (options.limit) {
          const remaining = options.limit - totalFetched;
          if (remaining <= 0) {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              channelId,
              limit: options.limit
            }, "Reached fetch limit during catch-up");
            break;
          }
          if (messages.length > remaining) {
            messages = messages.slice(0, remaining);
          }
        }
        totalFetched += messages.length;
        pagesProcessed++;
        if (messages.length > 0) {
          const lastMsg = messages[messages.length - 1];
          const lastTimestamp = lastMsg.createdTimestamp ?? 0;
          if (!newestMessageTimestamp || lastTimestamp > newestMessageTimestamp) {
            newestMessageId = lastMsg.id;
            newestMessageTimestamp = lastTimestamp;
          }
        }
        let catchUpNewCount = 0;
        let catchUpExistingCount = 0;
        const catchUpBatchMemories = [];
        const allMemories = [];
        for (const discordMessage of messages) {
          const memory = await this.buildMemoryFromMessage(discordMessage);
          if (memory?.id) {
            allMemories.push(memory);
          }
        }
        if (allMemories.length > 0) {
          const memoryIds = allMemories.map((m) => m.id).filter((id) => id !== undefined);
          const existingMemories = await this.runtime.getMemoriesByIds(memoryIds, "messages");
          const existingIdSet = new Set(existingMemories.map((m) => m.id));
          for (const memory of allMemories) {
            if (memory.id && existingIdSet.has(memory.id)) {
              catchUpExistingCount++;
            } else {
              catchUpNewCount++;
              catchUpBatchMemories.push(memory);
            }
          }
        }
        if (options.onBatch) {
          const shouldContinue = await options.onBatch(catchUpBatchMemories, {
            page: pagesProcessed,
            totalFetched,
            totalStored: totalStored + catchUpBatchMemories.length
          });
          totalStored += catchUpBatchMemories.length;
          if (shouldContinue === false) {
            this.runtime.logger.debug({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              channelId,
              page: pagesProcessed
            }, "Batch handler requested early stop during catch-up");
            break;
          }
        } else {
          await this.ensureConnectionsForMessages(messages, ensuredEntityIds);
          const successfullyPersisted = [];
          for (const memory of catchUpBatchMemories) {
            try {
              await this.runtime.createMemory(memory, "messages");
              successfullyPersisted.push(memory);
            } catch (error) {
              this.runtime.logger.warn({
                src: "plugin:discord",
                agentId: this.runtime.agentId,
                memoryId: memory.id,
                error: error instanceof Error ? error.message : String(error)
              }, "Failed to persist memory during catch-up");
            }
          }
          allMessages.push(...successfullyPersisted);
          totalStored += successfullyPersisted.length;
        }
        const catchUpHitMiss = catchUpExistingCount > 0 && catchUpNewCount === 0 ? "HIT" : catchUpNewCount > 0 ? "MISS" : "EMPTY";
        await this.saveSpiderState({
          channelId,
          oldestMessageId,
          newestMessageId,
          oldestMessageTimestamp,
          newestMessageTimestamp,
          lastSpideredAt: Date.now(),
          fullyBackfilled: spiderState.fullyBackfilled
        });
        const newestDate = newestMessageTimestamp ? new Date(newestMessageTimestamp).toISOString().split("T")[0] : "?";
        const elapsedSec2 = ((Date.now() - startTime) / 1000).toFixed(1);
        this.runtime.logger.debug(`#${channelName}: Catch-up batch ${catchUpBatchIndex}/${catchUpBatches.length} [${catchUpHitMiss}], ${messages.length} msgs fetched (${catchUpNewCount} new, ${catchUpExistingCount} existing), ${totalFetched} total fetched, ${totalStored} total stored, newest date ${newestDate} (${elapsedSec2}s)`);
      }
      if (catchUpBatches.length > 0) {
        this.runtime.logger.info(`#${channelName}: Caught up ${catchUpBatches.length} batches of new messages`);
      }
    }
    let before = options.before;
    let after = options.after;
    if (!options.force && spiderState) {
      if (spiderState.fullyBackfilled) {
        reachedEnd = true;
      } else {
        before = spiderState.oldestMessageId;
        const oldestDate = spiderState.oldestMessageTimestamp ? new Date(spiderState.oldestMessageTimestamp).toISOString().split("T")[0] : "unknown";
        this.runtime.logger.info(`#${channelName}: Resuming backfill from ${oldestDate}`);
      }
    } else if (!spiderState) {
      this.runtime.logger.info(`#${channelName}: Starting fresh history fetch`);
    }
    while (!reachedEnd) {
      if (options.limit && totalFetched >= options.limit) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId,
          limit: options.limit
        }, "Reached fetch limit before backfill batch");
        break;
      }
      pagesProcessed += 1;
      const remaining = options.limit ? options.limit - totalFetched : 100;
      const fetchLimit = Math.min(100, remaining);
      const fetchParams = { limit: fetchLimit };
      if (after) {
        fetchParams.after = after;
      } else if (before) {
        fetchParams.before = before;
      }
      const batch = await channel.messages.fetch(fetchParams);
      if (batch.size === 0) {
        reachedEnd = true;
        break;
      }
      const messages = Array.from(batch.values()).sort((a, b) => (a.createdTimestamp ?? 0) - (b.createdTimestamp ?? 0));
      totalFetched += messages.length;
      if (messages.length > 0) {
        const firstMsg = messages[0];
        const lastMsg = messages[messages.length - 1];
        const firstTimestamp = firstMsg.createdTimestamp ?? 0;
        const lastTimestamp = lastMsg.createdTimestamp ?? 0;
        if (!oldestMessageTimestamp || firstTimestamp < oldestMessageTimestamp) {
          oldestMessageId = firstMsg.id;
          oldestMessageTimestamp = firstTimestamp;
        }
        if (!newestMessageTimestamp || lastTimestamp > newestMessageTimestamp) {
          newestMessageId = lastMsg.id;
          newestMessageTimestamp = lastTimestamp;
        }
      }
      const batchMemories = [];
      let newCount = 0;
      let existingCount = 0;
      const allMemories = [];
      for (const discordMessage of messages) {
        const memory = await this.buildMemoryFromMessage(discordMessage);
        if (memory?.id) {
          allMemories.push(memory);
        }
      }
      if (allMemories.length > 0) {
        const memoryIds = allMemories.map((m) => m.id).filter((id) => id !== undefined);
        const existingMemories = await this.runtime.getMemoriesByIds(memoryIds, "messages");
        const existingIdSet = new Set(existingMemories.map((m) => m.id));
        for (const memory of allMemories) {
          if (memory.id && existingIdSet.has(memory.id)) {
            existingCount++;
          } else {
            newCount++;
            batchMemories.push(memory);
          }
        }
      }
      const hitMiss = existingCount > 0 && newCount === 0 ? "HIT" : newCount > 0 ? "MISS" : "EMPTY";
      if (options.onBatch) {
        const shouldContinue = await options.onBatch(batchMemories, {
          page: pagesProcessed,
          totalFetched,
          totalStored: totalStored + batchMemories.length
        });
        totalStored += batchMemories.length;
        if (shouldContinue === false) {
          this.runtime.logger.debug({
            src: "plugin:discord",
            agentId: this.runtime.agentId,
            channelId,
            page: pagesProcessed
          }, "Batch handler requested early stop");
          break;
        }
      } else {
        await this.ensureConnectionsForMessages(messages, ensuredEntityIds);
        const successfullyPersisted = [];
        for (const memory of batchMemories) {
          try {
            await this.runtime.createMemory(memory, "messages");
            successfullyPersisted.push(memory);
          } catch (error) {
            this.runtime.logger.warn({
              src: "plugin:discord",
              agentId: this.runtime.agentId,
              memoryId: memory.id,
              error: error instanceof Error ? error.message : String(error)
            }, "Failed to persist memory during backfill");
          }
        }
        allMessages.push(...successfullyPersisted);
        totalStored += successfullyPersisted.length;
      }
      consecutiveNoNew = batchMemories.length === 0 ? consecutiveNoNew + 1 : 0;
      const incrementalState = {
        channelId,
        oldestMessageId,
        newestMessageId,
        oldestMessageTimestamp,
        newestMessageTimestamp,
        lastSpideredAt: Date.now(),
        fullyBackfilled: false
      };
      await this.saveSpiderState(incrementalState);
      const oldestDate = oldestMessageTimestamp ? new Date(oldestMessageTimestamp).toISOString().split("T")[0] : "?";
      const newestDate = newestMessageTimestamp ? new Date(newestMessageTimestamp).toISOString().split("T")[0] : "?";
      const elapsedSec2 = ((Date.now() - startTime) / 1000).toFixed(1);
      this.runtime.logger.debug(`#${channelName}: Page ${pagesProcessed} [${hitMiss}], ${messages.length} msgs fetched (${newCount} new, ${existingCount} existing), ${batchMemories.length} stored, ${totalFetched} total fetched, ${totalStored} total stored, dates ${oldestDate} to ${newestDate} (${elapsedSec2}s)`);
      if (pagesProcessed === 1 || pagesProcessed % 10 === 0) {
        this.runtime.logger.info(`#${channelName}: Page ${pagesProcessed}, ${totalFetched} msgs fetched, ${totalStored} stored, dates ${oldestDate} to ${newestDate} (${elapsedSec2}s)`);
      }
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        channelId,
        batchSize: batch.size,
        storedThisBatch: batchMemories.length,
        totalStored,
        totalFetched,
        page: pagesProcessed
      }, "Processed channel history batch");
      if (options.limit && totalFetched >= options.limit) {
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelId,
          limit: options.limit
        }, "Reached fetch limit");
        break;
      }
      if (batch.size < 100) {
        reachedEnd = true;
        break;
      }
      if (consecutiveNoNew >= 3) {
        this.runtime.logger.debug({ src: "plugin:discord", agentId: this.runtime.agentId, channelId }, "Stopping backfill: 3 consecutive pages of existing messages (will resume from oldest on next run)");
        break;
      }
      if (after) {
        const lastMessage = messages[messages.length - 1];
        after = lastMessage?.id;
      } else {
        const firstMessage = messages[0];
        before = firstMessage?.id;
      }
      await this.delay(250);
    }
    const newState = {
      channelId,
      oldestMessageId,
      newestMessageId,
      oldestMessageTimestamp,
      newestMessageTimestamp,
      lastSpideredAt: Date.now(),
      fullyBackfilled: spiderState?.fullyBackfilled || reachedEnd && !after
    };
    await this.saveSpiderState(newState);
    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
    const dateRange = oldestMessageTimestamp && newestMessageTimestamp ? `${new Date(oldestMessageTimestamp).toISOString().split("T")[0]} to ${new Date(newestMessageTimestamp).toISOString().split("T")[0]}` : "no messages";
    const status = newState.fullyBackfilled ? "✓ complete" : "↻ partial";
    this.runtime.logger.info(`#${channelName}: ${status} - ${totalFetched} msgs, ${pagesProcessed} pages, ${dateRange} (${elapsedSec}s)`);
    return {
      messages: allMessages,
      stats: {
        fetched: totalFetched,
        stored: totalStored,
        pages: pagesProcessed,
        fullyBackfilled: newState.fullyBackfilled
      }
    };
  }
  async buildMemoryFromMessage(message, options) {
    if (!message.author || !message.channel) {
      return null;
    }
    const entityId = createUniqueUuid5(this.runtime, message.author.id);
    const roomId = createUniqueUuid5(this.runtime, message.channel.id);
    const channel = message.channel;
    const channelType = await this.getChannelType(channel);
    const channelGuild = "guild" in channel ? channel.guild : null;
    const serverId = channelGuild?.id ? channelGuild.id : message.guild?.id ?? message.channel.id;
    const worldId = serverId ? createUniqueUuid5(this.runtime, serverId) : this.runtime.agentId;
    let textContent;
    let attachments;
    const optionsProcessedContent = options?.processedContent;
    const optionsProcessedAttachments = options?.processedAttachments;
    if (optionsProcessedContent !== undefined || optionsProcessedAttachments !== undefined) {
      textContent = options.processedContent || " ";
      attachments = options.processedAttachments || [];
    } else {
      const processed = this.messageManager ? await this.messageManager.processMessage(message) : { processedContent: message.content, attachments: [] };
      const processedContent = processed?.processedContent;
      textContent = processedContent && processedContent.trim().length > 0 ? processedContent : message.content || " ";
      attachments = processed?.attachments ?? [];
    }
    const metadata = {
      type: "custom",
      entityName: (message.member && "displayName" in message.member && typeof message.member.displayName === "string" ? message.member.displayName : undefined) ?? ("globalName" in message.author && typeof message.author.globalName === "string" ? message.author.globalName : undefined) ?? message.author.username,
      fromBot: message.author.bot,
      fromId: message.author.id,
      sourceId: entityId,
      discordMessageId: message.id,
      discordChannelId: message.channel.id,
      discordServerId: (() => {
        const messageChannelGuild = "guild" in message.channel ? message.channel.guild : null;
        return messageChannelGuild?.id || message.guild?.id || undefined;
      })(),
      tags: [],
      ...options?.extraMetadata ? options.extraMetadata : {}
    };
    const memory = {
      id: createUniqueUuid5(this.runtime, message.id),
      entityId,
      agentId: this.runtime.agentId,
      roomId,
      content: {
        text: textContent || " ",
        attachments,
        source: "discord",
        channelType,
        url: message.url,
        inReplyTo: message.reference?.messageId ? createUniqueUuid5(this.runtime, message.reference.messageId) : undefined,
        ...options?.extraContent ? options.extraContent : {}
      },
      metadata,
      createdAt: message.createdTimestamp ?? Date.now(),
      worldId
    };
    return memory;
  }
  async ensureConnectionsForMessages(messages, ensuredEntityIds = new Set) {
    if (messages.length === 0) {
      return;
    }
    const uniqueAuthors = new Map;
    for (const message of messages) {
      if (message.author && !ensuredEntityIds.has(message.author.id)) {
        uniqueAuthors.set(message.author.id, message);
      }
    }
    if (uniqueAuthors.size === 0) {
      return;
    }
    try {
      const firstMessage = messages[0];
      const channelType = await this.getChannelType(firstMessage.channel);
      const firstMessageChannelGuild = "guild" in firstMessage.channel ? firstMessage.channel.guild : null;
      const serverId = firstMessageChannelGuild?.id ? firstMessageChannelGuild.id : firstMessage.guild?.id ?? firstMessage.channel.id;
      const worldId = serverId ? createUniqueUuid5(this.runtime, serverId) : this.runtime.agentId;
      const entities = Array.from(uniqueAuthors.entries()).map(([authorId, message]) => {
        const userName = message.author.username;
        const name = (message.member && "displayName" in message.member && typeof message.member.displayName === "string" ? message.member.displayName : undefined) ?? ("globalName" in message.author && typeof message.author.globalName === "string" ? message.author.globalName : undefined) ?? userName;
        return {
          id: createUniqueUuid5(this.runtime, authorId),
          names: [userName, name].filter((n) => typeof n === "string" && n.length > 0),
          metadata: {
            originalId: authorId,
            username: userName,
            displayName: name
          },
          agentId: this.runtime.agentId
        };
      });
      const rooms = [
        {
          id: createUniqueUuid5(this.runtime, firstMessage.channel.id),
          channelId: firstMessage.channel.id,
          type: channelType,
          source: "discord"
        }
      ];
      const world = {
        id: worldId,
        messageServerId: stringToUuid3(serverId),
        name: firstMessage.guild?.name ?? `DM-${firstMessage.channel.id}`,
        agentId: this.runtime.agentId
      };
      await this.runtime.ensureConnections(entities, rooms, "discord", world);
      for (const authorId of uniqueAuthors.keys()) {
        ensuredEntityIds.add(authorId);
      }
    } catch (error) {
      this.runtime.logger.debug({
        src: "plugin:discord",
        agentId: this.runtime.agentId,
        authorCount: uniqueAuthors.size,
        error: error instanceof Error ? error.message : String(error)
      }, "Failed to ensure batch connections for message authors during history fetch");
    }
  }
  async stop() {
    this.runtime.logger.info("Stopping Discord service");
    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];
    if (this.client) {
      await this.client.destroy();
      this.client = null;
      this.runtime.logger.info("Discord client destroyed");
    }
    if (this.voiceManager) {}
    this.runtime.logger.info("Discord service stopped");
  }
  async getChannelType(channel) {
    switch (channel.type) {
      case DiscordChannelType5.DM:
        return ChannelType7.DM;
      case DiscordChannelType5.GroupDM:
        return ChannelType7.DM;
      case DiscordChannelType5.GuildText:
      case DiscordChannelType5.GuildNews:
      case DiscordChannelType5.PublicThread:
      case DiscordChannelType5.PrivateThread:
      case DiscordChannelType5.AnnouncementThread:
      case DiscordChannelType5.GuildForum:
        return ChannelType7.GROUP;
      case DiscordChannelType5.GuildVoice:
      case DiscordChannelType5.GuildStageVoice:
        return ChannelType7.VOICE_GROUP;
      default:
        this.runtime.logger.debug({
          src: "plugin:discord",
          agentId: this.runtime.agentId,
          channelType: channel.type
        }, "Unknown channel type, defaulting to GROUP");
        return ChannelType7.GROUP;
    }
  }
}

// tests.ts
import {
  AudioPlayerStatus,
  createAudioPlayer as createAudioPlayer2,
  createAudioResource as createAudioResource2,
  entersState as entersState2,
  NoSubscriberBehavior as NoSubscriberBehavior2,
  VoiceConnectionStatus as VoiceConnectionStatus2
} from "@discordjs/voice";
import {
  logger as logger4,
  ModelType as ModelType21
} from "@elizaos/core";
import {
  AttachmentBuilder as AttachmentBuilder3,
  ChannelType as ChannelType8,
  Events as Events2
} from "discord.js";
var TEST_IMAGE_URL = "https://github.com/elizaOS/awesome-eliza/blob/main/assets/eliza-logo.jpg?raw=true";

class DiscordTestSuite {
  name = "discord";
  discordClient;
  tests;
  constructor() {
    this.tests = [
      {
        name: "Initialize Discord Client",
        fn: this.testCreatingDiscordClient.bind(this)
      },
      {
        name: "Slash Commands - Join Voice",
        fn: this.testJoinVoiceSlashCommand.bind(this)
      },
      {
        name: "Voice Playback & TTS",
        fn: this.testTextToSpeechPlayback.bind(this)
      },
      {
        name: "Send Message with Attachments",
        fn: this.testSendingTextMessage.bind(this)
      },
      {
        name: "Handle Incoming Messages",
        fn: this.testHandlingMessage.bind(this)
      },
      {
        name: "Slash Commands - Leave Voice",
        fn: this.testLeaveVoiceSlashCommand.bind(this)
      }
    ];
  }
  async testCreatingDiscordClient(runtime) {
    try {
      this.discordClient = runtime.getService(ServiceType2.DISCORD);
      if (!this.discordClient) {
        throw new Error("Failed to get DiscordService from runtime.");
      }
      const discordClient = this.discordClient.client;
      if (discordClient?.isReady()) {
        logger4.success("DiscordService is already ready.");
      } else {
        logger4.info("Waiting for DiscordService to be ready...");
        if (!discordClient) {
          throw new Error("Discord client instance is missing within the service.");
        }
        await new Promise((resolve, reject) => {
          if (discordClient) {
            discordClient.once(Events2.ClientReady, resolve);
            discordClient.once(Events2.Error, reject);
          }
        });
      }
    } catch (error) {
      throw new Error(`Error in test creating Discord client: ${error}`);
    }
  }
  async testJoinVoiceSlashCommand(runtime) {
    if (!this.discordClient) {
      throw new Error("Discord client not initialized.");
    }
    try {
      await this.waitForVoiceManagerReady(this.discordClient);
      const channel = await this.getTestChannel(runtime);
      if (!channel || !channel.isTextBased()) {
        throw new Error("Invalid test channel for slash command test.");
      }
      const fakeJoinInteraction = {
        isCommand: () => true,
        commandName: "joinchannel",
        options: {
          get: (name) => name === "channel" ? { value: channel.id } : null
        },
        guild: channel.guild,
        deferReply: async () => {},
        editReply: async (message) => {
          logger4.info(`JoinChannel Slash Command Response: ${message}`);
        }
      };
      if (!this.discordClient.voiceManager) {
        throw new Error("VoiceManager is not available on the Discord client.");
      }
      await this.discordClient.voiceManager.handleJoinChannelCommand(fakeJoinInteraction);
      logger4.success("Join voice slash command test completed successfully.");
    } catch (error) {
      throw new Error(`Error in join voice slash commands test: ${error}`);
    }
  }
  async testLeaveVoiceSlashCommand(runtime) {
    if (!this.discordClient) {
      throw new Error("Discord client not initialized.");
    }
    try {
      await this.waitForVoiceManagerReady(this.discordClient);
      const channel = await this.getTestChannel(runtime);
      if (!channel || !channel.isTextBased()) {
        throw new Error("Invalid test channel for slash command test.");
      }
      const fakeLeaveInteraction = {
        guildId: channel.guildId,
        reply: async (message) => {
          logger4.info(`LeaveChannel Slash Command Response: ${message}`);
        }
      };
      if (!this.discordClient.voiceManager) {
        throw new Error("VoiceManager is not available on the Discord client.");
      }
      await this.discordClient.voiceManager.handleLeaveChannelCommand(fakeLeaveInteraction);
      logger4.success("Leave voice slash command test completed successfully.");
    } catch (error) {
      throw new Error(`Error in leave voice slash commands test: ${error}`);
    }
  }
  async testTextToSpeechPlayback(runtime) {
    if (!this.discordClient) {
      throw new Error("Discord client not initialized.");
    }
    try {
      await this.waitForVoiceManagerReady(this.discordClient);
      const channel = await this.getTestChannel(runtime);
      if (!channel || channel.type !== ChannelType8.GuildVoice) {
        throw new Error("Invalid voice channel.");
      }
      if (!this.discordClient.voiceManager) {
        throw new Error("VoiceManager is not available on the Discord client.");
      }
      await this.discordClient.voiceManager.joinChannel(channel);
      const guild = await this.getActiveGuild(this.discordClient);
      const guildId = guild.id;
      if (!this.discordClient.voiceManager) {
        throw new Error("VoiceManager is not available on the Discord client.");
      }
      const connection = this.discordClient.voiceManager.getVoiceConnection(guildId);
      if (!connection) {
        throw new Error(`No voice connection found for guild: ${guildId}`);
      }
      try {
        await entersState2(connection, VoiceConnectionStatus2.Ready, 1e4);
        logger4.success(`Voice connection is ready in guild: ${guildId}`);
      } catch (error) {
        throw new Error(`Voice connection failed to become ready: ${error}`);
      }
      let responseStream = null;
      try {
        responseStream = await runtime.useModel(ModelType21.TEXT_TO_SPEECH, `Hi! I'm ${runtime.character.name}! How are you doing today?`);
      } catch (_error) {
        throw new Error("No text to speech service found");
      }
      if (!responseStream) {
        throw new Error("TTS response stream is null or undefined.");
      }
      await this.playAudioStream(responseStream, connection);
    } catch (error) {
      throw new Error(`Error in TTS playback test: ${error}`);
    }
  }
  async testSendingTextMessage(runtime) {
    if (!this.discordClient) {
      throw new Error("Discord client not initialized.");
    }
    try {
      const channel = await this.getTestChannel(runtime);
      if (!channel || !channel.isTextBased()) {
        throw new Error("Cannot send message to a non-text channel.");
      }
      const attachment = new AttachmentBuilder3(TEST_IMAGE_URL);
      await this.sendMessageToChannel(channel, "Testing Message", [attachment]);
    } catch (error) {
      throw new Error(`Error in sending text message: ${error}`);
    }
  }
  async testHandlingMessage(runtime) {
    if (!this.discordClient) {
      throw new Error("Discord client not initialized.");
    }
    try {
      const channel = await this.getTestChannel(runtime);
      const fakeMessage = {
        content: `Hello, ${runtime.character.name}! How are you?`,
        author: {
          id: "mock-user-id",
          username: "MockUser",
          bot: false
        },
        channel,
        id: "mock-message-id",
        createdTimestamp: Date.now(),
        mentions: {
          has: () => false
        },
        reference: null,
        attachments: []
      };
      if (!this.discordClient.messageManager) {
        throw new Error("MessageManager is not available on the Discord client.");
      }
      await this.discordClient.messageManager.handleMessage(fakeMessage);
    } catch (error) {
      throw new Error(`Error in handling message test: ${error}`);
    }
  }
  async getTestChannel(runtime) {
    if (!this.discordClient) {
      throw new Error("Discord client not initialized.");
    }
    const channelId = this.validateChannelId(runtime);
    const discordClient = this.discordClient.client;
    const channel = discordClient && await discordClient.channels.fetch(channelId);
    if (!channel) {
      throw new Error("no test channel found!");
    }
    return channel;
  }
  async sendMessageToChannel(channel, messageContent, files) {
    try {
      if (!channel || !channel.isTextBased()) {
        throw new Error("Channel is not a text-based channel or does not exist.");
      }
      await sendMessageInChunks(channel, messageContent, "", files);
    } catch (error) {
      throw new Error(`Error sending message: ${error}`);
    }
  }
  async playAudioStream(responseStream, connection) {
    const audioPlayer = createAudioPlayer2({
      behaviors: {
        noSubscriber: NoSubscriberBehavior2.Pause
      }
    });
    const audioResource = createAudioResource2(responseStream);
    audioPlayer.play(audioResource);
    connection.subscribe(audioPlayer);
    logger4.success("TTS playback started successfully.");
    await new Promise((resolve, reject) => {
      audioPlayer.once(AudioPlayerStatus.Idle, () => {
        logger4.info("TTS playback finished.");
        resolve();
      });
      audioPlayer.once("error", (error) => {
        reject(error);
        throw new Error(`TTS playback error: ${error}`);
      });
    });
  }
  async getActiveGuild(discordClient) {
    if (!discordClient.client) {
      throw new Error("Discord client instance is missing within the service.");
    }
    const guilds = await discordClient.client.guilds.fetch();
    const fullGuilds = await Promise.all(guilds.map((guild) => guild.fetch()));
    const activeGuild = fullGuilds.find((g) => {
      const membersMe = g.members.me;
      return membersMe?.voice?.channelId;
    });
    if (!activeGuild) {
      throw new Error("No active voice connection found for the bot.");
    }
    return activeGuild;
  }
  async waitForVoiceManagerReady(discordClient) {
    if (!discordClient) {
      throw new Error("Discord client is not initialized.");
    }
    if (!discordClient.voiceManager) {
      throw new Error("VoiceManager is not available on the Discord client.");
    }
    const voiceManager = discordClient.voiceManager;
    if (!voiceManager || !voiceManager.isReady()) {
      await new Promise((resolve, reject) => {
        if (voiceManager) {
          voiceManager.once("ready", resolve);
          voiceManager.once("error", reject);
        }
      });
    }
  }
  validateChannelId(runtime) {
    const testChannelId = runtime.getSetting("DISCORD_TEST_CHANNEL_ID") || process.env.DISCORD_TEST_CHANNEL_ID;
    if (!testChannelId) {
      throw new Error("DISCORD_TEST_CHANNEL_ID is not set. Please provide a valid channel ID in the environment variables.");
    }
    return testChannelId;
  }
}

// accounts.ts
var DEFAULT_ACCOUNT_ID = "default";
function normalizeAccountId(accountId) {
  if (!accountId || typeof accountId !== "string") {
    return DEFAULT_ACCOUNT_ID;
  }
  const trimmed = accountId.trim().toLowerCase();
  return trimmed || DEFAULT_ACCOUNT_ID;
}
function normalizeDiscordToken(raw) {
  const trimmed = raw?.trim();
  return trimmed ? trimmed.replace(/^Bot\s+/i, "") : undefined;
}
function getMultiAccountConfig(runtime) {
  const characterDiscord = runtime.character?.settings?.discord;
  return {
    enabled: characterDiscord?.enabled,
    token: characterDiscord?.token,
    accounts: characterDiscord?.accounts
  };
}
function listDiscordAccountIds(runtime) {
  const config = getMultiAccountConfig(runtime);
  const accounts = config.accounts;
  if (!accounts || typeof accounts !== "object") {
    return [DEFAULT_ACCOUNT_ID];
  }
  const ids = Object.keys(accounts).filter(Boolean);
  if (ids.length === 0) {
    return [DEFAULT_ACCOUNT_ID];
  }
  return ids.slice().sort((a, b) => a.localeCompare(b));
}
function resolveDefaultDiscordAccountId(runtime) {
  const ids = listDiscordAccountIds(runtime);
  if (ids.includes(DEFAULT_ACCOUNT_ID)) {
    return DEFAULT_ACCOUNT_ID;
  }
  return ids[0] ?? DEFAULT_ACCOUNT_ID;
}
function getAccountConfig(runtime, accountId) {
  const config = getMultiAccountConfig(runtime);
  const accounts = config.accounts;
  if (!accounts || typeof accounts !== "object") {
    return;
  }
  return accounts[accountId];
}
function filterDefined(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined));
}
function mergeDiscordAccountConfig(runtime, accountId) {
  const multiConfig = getMultiAccountConfig(runtime);
  const { accounts: _ignored, ...baseConfig } = multiConfig;
  const accountConfig = getAccountConfig(runtime, accountId) ?? {};
  const envChannelIds = runtime.getSetting("CHANNEL_IDS");
  const envListenChannelIds = runtime.getSetting("DISCORD_LISTEN_CHANNEL_IDS");
  const envConfig = {
    shouldIgnoreBotMessages: runtime.getSetting("DISCORD_SHOULD_IGNORE_BOT_MESSAGES")?.toLowerCase() === "true",
    shouldIgnoreDirectMessages: runtime.getSetting("DISCORD_SHOULD_IGNORE_DIRECT_MESSAGES")?.toLowerCase() === "true",
    shouldRespondOnlyToMentions: runtime.getSetting("DISCORD_SHOULD_RESPOND_ONLY_TO_MENTIONS")?.toLowerCase() === "true",
    channelIds: envChannelIds ? envChannelIds.split(",").map((s) => s.trim()).filter(Boolean) : undefined,
    listenChannelIds: envListenChannelIds ? envListenChannelIds.split(",").map((s) => s.trim()).filter(Boolean) : undefined
  };
  return {
    ...filterDefined(envConfig),
    ...filterDefined(baseConfig),
    ...filterDefined(accountConfig)
  };
}
function resolveDiscordToken(runtime, opts = {}) {
  const accountId = normalizeAccountId(opts.accountId);
  const multiConfig = getMultiAccountConfig(runtime);
  const accountConfig = accountId !== DEFAULT_ACCOUNT_ID ? multiConfig.accounts?.[accountId] : multiConfig.accounts?.[DEFAULT_ACCOUNT_ID];
  const accountToken = normalizeDiscordToken(accountConfig?.token);
  if (accountToken) {
    return { token: accountToken, source: "config" };
  }
  const allowBase = accountId === DEFAULT_ACCOUNT_ID;
  const baseToken = allowBase ? normalizeDiscordToken(multiConfig.token) : undefined;
  if (baseToken) {
    return { token: baseToken, source: "character" };
  }
  const envToken = allowBase ? normalizeDiscordToken(runtime.getSetting("DISCORD_API_TOKEN")) : undefined;
  if (envToken) {
    return { token: envToken, source: "env" };
  }
  return { token: "", source: "none" };
}
function resolveDiscordAccount(runtime, accountId) {
  const normalizedAccountId = normalizeAccountId(accountId);
  const multiConfig = getMultiAccountConfig(runtime);
  const baseEnabled = multiConfig.enabled !== false;
  const merged = mergeDiscordAccountConfig(runtime, normalizedAccountId);
  const accountEnabled = merged.enabled !== false;
  const enabled = baseEnabled && accountEnabled;
  const tokenResolution = resolveDiscordToken(runtime, {
    accountId: normalizedAccountId
  });
  return {
    accountId: normalizedAccountId,
    enabled,
    name: merged.name?.trim() || undefined,
    token: tokenResolution.token,
    tokenSource: tokenResolution.source,
    config: merged
  };
}
function listEnabledDiscordAccounts(runtime) {
  return listDiscordAccountIds(runtime).map((accountId) => resolveDiscordAccount(runtime, accountId)).filter((account) => account.enabled && account.token);
}
function isMultiAccountEnabled(runtime) {
  const accounts = listEnabledDiscordAccounts(runtime);
  return accounts.length > 1;
}
// allowlist.ts
function normalizeDiscordSlug(value) {
  return value.trim().toLowerCase().replace(/^#/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function formatDiscordUserTag(user) {
  if ("user" in user) {
    return user.user.discriminator === "0" ? user.user.username : `${user.user.username}#${user.user.discriminator}`;
  }
  return user.discriminator === "0" ? user.username : `${user.username}#${user.discriminator}`;
}
function normalizeDiscordAllowList(raw, prefixes = ["discord:", "user:", "pk:"]) {
  if (!raw || raw.length === 0) {
    return null;
  }
  const ids = new Set;
  const names = new Set;
  const allowAll = raw.some((entry) => String(entry).trim() === "*");
  for (const entry of raw) {
    const text = String(entry).trim();
    if (!text || text === "*") {
      continue;
    }
    const normalized = normalizeDiscordSlug(text);
    const maybeId = text.replace(/^<@!?/, "").replace(/>$/, "");
    if (/^\d+$/.test(maybeId)) {
      ids.add(maybeId);
      continue;
    }
    const prefix = prefixes.find((p) => text.startsWith(p));
    if (prefix) {
      const candidate = text.slice(prefix.length);
      if (candidate) {
        ids.add(candidate);
      }
      continue;
    }
    if (normalized) {
      names.add(normalized);
    }
  }
  return { allowAll, ids, names };
}
function allowListMatches(list, candidate) {
  if (list.allowAll) {
    return true;
  }
  if (candidate.id && list.ids.has(candidate.id)) {
    return true;
  }
  const slug = candidate.name ? normalizeDiscordSlug(candidate.name) : "";
  if (slug && list.names.has(slug)) {
    return true;
  }
  if (candidate.tag && list.names.has(normalizeDiscordSlug(candidate.tag))) {
    return true;
  }
  return false;
}
function resolveDiscordAllowListMatch(params) {
  const { allowList, candidate } = params;
  if (allowList.allowAll) {
    return { allowed: true, matchKey: "*", matchSource: "wildcard" };
  }
  if (candidate.id && allowList.ids.has(candidate.id)) {
    return { allowed: true, matchKey: candidate.id, matchSource: "id" };
  }
  const nameSlug = candidate.name ? normalizeDiscordSlug(candidate.name) : "";
  if (nameSlug && allowList.names.has(nameSlug)) {
    return { allowed: true, matchKey: nameSlug, matchSource: "name" };
  }
  const tagSlug = candidate.tag ? normalizeDiscordSlug(candidate.tag) : "";
  if (tagSlug && allowList.names.has(tagSlug)) {
    return { allowed: true, matchKey: tagSlug, matchSource: "tag" };
  }
  return { allowed: false };
}
function resolveDiscordUserAllowed(params) {
  const allowList = normalizeDiscordAllowList(params.allowList, [
    "discord:",
    "user:",
    "pk:"
  ]);
  if (!allowList) {
    return true;
  }
  return allowListMatches(allowList, {
    id: params.userId,
    name: params.userName,
    tag: params.userTag
  });
}
function resolveDiscordCommandAuthorized(params) {
  if (!params.isDirectMessage) {
    return true;
  }
  const allowList = normalizeDiscordAllowList(params.allowFrom, [
    "discord:",
    "user:",
    "pk:"
  ]);
  if (!allowList) {
    return true;
  }
  return allowListMatches(allowList, {
    id: params.author.id,
    name: params.author.username,
    tag: formatDiscordUserTag(params.author)
  });
}
function resolveDiscordGuildEntry(params) {
  const { guild, guildEntries } = params;
  if (!guild || !guildEntries) {
    return null;
  }
  const byId = guildEntries[guild.id];
  if (byId) {
    return { ...byId, id: guild.id };
  }
  const slug = normalizeDiscordSlug(guild.name ?? "");
  const bySlug = guildEntries[slug];
  if (bySlug) {
    return { ...bySlug, id: guild.id, slug: slug || bySlug.slug };
  }
  const wildcard = guildEntries["*"];
  if (wildcard) {
    return { ...wildcard, id: guild.id, slug: slug || wildcard.slug };
  }
  return null;
}
function buildChannelKeyCandidates(id, slug, name, allowNameMatch = true) {
  const keys = [id];
  if (allowNameMatch) {
    if (slug) {
      keys.push(slug);
    }
    if (name) {
      const nameSlug = normalizeDiscordSlug(name);
      if (nameSlug && nameSlug !== slug) {
        keys.push(nameSlug);
      }
    }
  }
  return keys;
}
function resolveChannelEntryMatch(channels, keys, parentKeys) {
  for (const key of keys) {
    const entry = channels[key];
    if (entry) {
      const source = /^\d+$/.test(key) ? "id" : "name";
      return { entry, matchKey: key, matchSource: source };
    }
  }
  if (parentKeys) {
    for (const parentKey of parentKeys) {
      const entry = channels[parentKey];
      if (entry) {
        return { entry, matchKey: parentKey, matchSource: "parent" };
      }
    }
  }
  const wildcard = channels["*"];
  if (wildcard) {
    return { entry: wildcard, matchKey: "*", matchSource: "wildcard" };
  }
  return null;
}
function resolveDiscordChannelConfig(params) {
  const { guildInfo, channelId, channelName } = params;
  const channelSlug = params.channelSlug ?? (channelName ? normalizeDiscordSlug(channelName) : "");
  const channels = guildInfo?.channels;
  if (!channels) {
    return null;
  }
  const keys = buildChannelKeyCandidates(channelId, channelSlug, channelName);
  const match = resolveChannelEntryMatch(channels, keys);
  if (!match) {
    return { allowed: false };
  }
  return {
    allowed: match.entry.allow !== false,
    requireMention: match.entry.requireMention,
    skills: match.entry.skills,
    enabled: match.entry.enabled,
    users: match.entry.users,
    systemPrompt: match.entry.systemPrompt,
    autoThread: match.entry.autoThread,
    matchKey: match.matchKey,
    matchSource: match.matchSource
  };
}
function resolveDiscordChannelConfigWithFallback(params) {
  const {
    guildInfo,
    channelId,
    channelName,
    parentId,
    parentName,
    parentSlug,
    isThread = false
  } = params;
  const channelSlug = params.channelSlug ?? (channelName ? normalizeDiscordSlug(channelName) : "");
  const channels = guildInfo?.channels;
  if (!channels) {
    return null;
  }
  const resolvedParentSlug = parentSlug ?? (parentName ? normalizeDiscordSlug(parentName) : "");
  const keys = buildChannelKeyCandidates(channelId, channelSlug, channelName, !isThread);
  const parentKeys = parentId || parentName || parentSlug ? buildChannelKeyCandidates(parentId ?? "", resolvedParentSlug, parentName) : undefined;
  const match = resolveChannelEntryMatch(channels, keys, parentKeys);
  if (!match) {
    return { allowed: false };
  }
  return {
    allowed: match.entry.allow !== false,
    requireMention: match.entry.requireMention,
    skills: match.entry.skills,
    enabled: match.entry.enabled,
    users: match.entry.users,
    systemPrompt: match.entry.systemPrompt,
    autoThread: match.entry.autoThread,
    matchKey: match.matchKey,
    matchSource: match.matchSource
  };
}
function resolveDiscordShouldRequireMention(params) {
  if (!params.isGuildMessage) {
    return false;
  }
  const isBotThread = params.isAutoThreadOwnedByBot ?? isDiscordAutoThreadOwnedByBot(params);
  if (isBotThread) {
    return false;
  }
  return params.channelConfig?.requireMention ?? params.guildInfo?.requireMention ?? true;
}
function isDiscordAutoThreadOwnedByBot(params) {
  if (!params.isThread) {
    return false;
  }
  if (!params.channelConfig?.autoThread) {
    return false;
  }
  const botId = params.botId?.trim();
  const threadOwnerId = params.threadOwnerId?.trim();
  return Boolean(botId && threadOwnerId && botId === threadOwnerId);
}
function isDiscordGroupAllowedByPolicy(params) {
  const {
    groupPolicy,
    guildAllowlisted,
    channelAllowlistConfigured,
    channelAllowed
  } = params;
  if (groupPolicy === "disabled") {
    return false;
  }
  if (groupPolicy === "open") {
    return true;
  }
  if (!guildAllowlisted) {
    return false;
  }
  if (!channelAllowlistConfigured) {
    return true;
  }
  return channelAllowed;
}
function resolveGroupDmAllow(params) {
  const { channels, channelId, channelName } = params;
  const channelSlug = params.channelSlug ?? (channelName ? normalizeDiscordSlug(channelName) : "");
  if (!channels || channels.length === 0) {
    return true;
  }
  const allowList = new Set(channels.map((entry) => normalizeDiscordSlug(String(entry))));
  const candidates = [
    normalizeDiscordSlug(channelId),
    channelSlug,
    channelName ? normalizeDiscordSlug(channelName) : ""
  ].filter(Boolean);
  return allowList.has("*") || candidates.some((candidate) => allowList.has(candidate));
}
function shouldEmitDiscordReactionNotification(params) {
  const mode = params.mode ?? "own";
  if (mode === "off") {
    return false;
  }
  if (mode === "all") {
    return true;
  }
  if (mode === "own") {
    return Boolean(params.botId && params.messageAuthorId === params.botId);
  }
  if (mode === "allowlist") {
    const list = normalizeDiscordAllowList(params.allowlist, [
      "discord:",
      "user:",
      "pk:"
    ]);
    if (!list) {
      return false;
    }
    return allowListMatches(list, {
      id: params.userId,
      name: params.userName,
      tag: params.userTag
    });
  }
  return false;
}
function validateMessageAllowed(params) {
  const {
    accountConfig,
    isDirectMessage,
    isGroupDm,
    guild,
    channelId,
    channelName,
    author
  } = params;
  if (isDirectMessage && !isGroupDm) {
    const dmConfig = accountConfig.dm;
    if (dmConfig?.enabled === false) {
      return { allowed: false, reason: "DMs disabled" };
    }
    const dmPolicy = dmConfig?.policy ?? "open";
    if (dmPolicy === "disabled") {
      return { allowed: false, reason: "DM policy disabled" };
    }
    if (dmPolicy === "allowlist" && dmConfig?.allowFrom) {
      const isAllowed2 = resolveDiscordUserAllowed({
        allowList: dmConfig.allowFrom,
        userId: author.id,
        userName: author.username,
        userTag: formatDiscordUserTag(author)
      });
      if (!isAllowed2) {
        return { allowed: false, reason: "User not in DM allowlist" };
      }
    }
    return { allowed: true };
  }
  if (isGroupDm) {
    const dmConfig = accountConfig.dm;
    if (!dmConfig?.groupEnabled) {
      return { allowed: false, reason: "Group DMs disabled" };
    }
    const isAllowed2 = resolveGroupDmAllow({
      channels: dmConfig.groupChannels,
      channelId,
      channelName
    });
    if (!isAllowed2) {
      return { allowed: false, reason: "Group DM channel not allowed" };
    }
    return { allowed: true };
  }
  const groupPolicy = accountConfig.groupPolicy ?? "open";
  const guildInfo = resolveDiscordGuildEntry({
    guild,
    guildEntries: accountConfig.guilds
  });
  const guildAllowlisted = guildInfo !== null;
  const channelSlug = channelName ? normalizeDiscordSlug(channelName) : "";
  const channelConfig = resolveDiscordChannelConfig({
    guildInfo,
    channelId,
    channelName,
    channelSlug
  });
  const channelAllowlistConfigured = Boolean(guildInfo?.channels);
  const channelAllowed = channelConfig?.allowed ?? false;
  const isAllowed = isDiscordGroupAllowedByPolicy({
    groupPolicy,
    guildAllowlisted,
    channelAllowlistConfigured,
    channelAllowed
  });
  if (!isAllowed) {
    return {
      allowed: false,
      reason: "Channel not allowed by policy",
      channelConfig,
      guildInfo
    };
  }
  if (channelConfig?.users) {
    const userAllowed = resolveDiscordUserAllowed({
      allowList: channelConfig.users,
      userId: author.id,
      userName: author.username,
      userTag: formatDiscordUserTag(author)
    });
    if (!userAllowed) {
      return {
        allowed: false,
        reason: "User not in channel allowlist",
        channelConfig,
        guildInfo
      };
    }
  }
  if (guildInfo?.users) {
    const userAllowed = resolveDiscordUserAllowed({
      allowList: guildInfo.users,
      userId: author.id,
      userName: author.username,
      userTag: formatDiscordUserTag(author)
    });
    if (!userAllowed) {
      return {
        allowed: false,
        reason: "User not in guild allowlist",
        channelConfig,
        guildInfo
      };
    }
  }
  return { allowed: true, channelConfig, guildInfo };
}
// messaging.ts
var DEFAULT_MAX_CHARS = 2000;
var DEFAULT_MAX_LINES = 17;
var FENCE_RE = /^( {0,3})(`{3,}|~{3,})(.*)$/;
function countLines(text) {
  if (!text) {
    return 0;
  }
  return text.split(`
`).length;
}
function parseFenceLine(line2) {
  const match = line2.match(FENCE_RE);
  if (!match) {
    return null;
  }
  const indent = match[1] ?? "";
  const marker = match[2] ?? "";
  return {
    indent,
    markerChar: marker[0] ?? "`",
    markerLen: marker.length,
    openLine: line2
  };
}
function closeFenceLine(openFence) {
  return `${openFence.indent}${openFence.markerChar.repeat(openFence.markerLen)}`;
}
function closeFenceIfNeeded(text, openFence) {
  if (!openFence) {
    return text;
  }
  const closeLine = closeFenceLine(openFence);
  if (!text) {
    return closeLine;
  }
  if (!text.endsWith(`
`)) {
    return `${text}
${closeLine}`;
  }
  return `${text}${closeLine}`;
}
function splitLongLine(line2, maxChars, opts) {
  const limit = Math.max(1, Math.floor(maxChars));
  if (line2.length <= limit) {
    return [line2];
  }
  const out = [];
  let remaining = line2;
  while (remaining.length > limit) {
    if (opts.preserveWhitespace) {
      out.push(remaining.slice(0, limit));
      remaining = remaining.slice(limit);
      continue;
    }
    const window = remaining.slice(0, limit);
    let breakIdx = -1;
    for (let i = window.length - 1;i >= 0; i--) {
      if (/\s/.test(window[i])) {
        breakIdx = i;
        break;
      }
    }
    if (breakIdx <= 0) {
      breakIdx = limit;
    }
    out.push(remaining.slice(0, breakIdx));
    remaining = remaining.slice(breakIdx);
  }
  if (remaining.length) {
    out.push(remaining);
  }
  return out;
}
function rebalanceReasoningItalics(source, chunks) {
  if (chunks.length <= 1) {
    return chunks;
  }
  const opensWithReasoningItalics = source.startsWith(`Reasoning:
_`) && source.trimEnd().endsWith("_");
  if (!opensWithReasoningItalics) {
    return chunks;
  }
  const adjusted = [...chunks];
  for (let i = 0;i < adjusted.length; i++) {
    const isLast = i === adjusted.length - 1;
    const current = adjusted[i];
    const needsClosing = !current.trimEnd().endsWith("_");
    if (needsClosing) {
      adjusted[i] = `${current}_`;
    }
    if (isLast) {
      break;
    }
    const next = adjusted[i + 1];
    const leadingWhitespaceLen = next.length - next.trimStart().length;
    const leadingWhitespace = next.slice(0, leadingWhitespaceLen);
    const nextBody = next.slice(leadingWhitespaceLen);
    if (!nextBody.startsWith("_")) {
      adjusted[i + 1] = `${leadingWhitespace}_${nextBody}`;
    }
  }
  return adjusted;
}
function chunkDiscordText(text, opts = {}) {
  const maxChars = Math.max(1, Math.floor(opts.maxChars ?? DEFAULT_MAX_CHARS));
  const maxLines = Math.max(1, Math.floor(opts.maxLines ?? DEFAULT_MAX_LINES));
  const body = text ?? "";
  if (!body) {
    return [];
  }
  const alreadyOk = body.length <= maxChars && countLines(body) <= maxLines;
  if (alreadyOk) {
    return [body];
  }
  const lines = body.split(`
`);
  const chunks = [];
  let current = "";
  let currentLines = 0;
  let openFence = null;
  const flush = () => {
    if (!current) {
      return;
    }
    const payload = closeFenceIfNeeded(current, openFence);
    if (payload.trim().length) {
      chunks.push(payload);
    }
    current = "";
    currentLines = 0;
    if (openFence) {
      current = openFence.openLine;
      currentLines = 1;
    }
  };
  for (const originalLine of lines) {
    const fenceInfo = parseFenceLine(originalLine);
    const wasInsideFence = openFence !== null;
    let nextOpenFence = openFence;
    if (fenceInfo) {
      if (!openFence) {
        nextOpenFence = fenceInfo;
      } else if (openFence.markerChar === fenceInfo.markerChar && fenceInfo.markerLen >= openFence.markerLen) {
        nextOpenFence = null;
      }
    }
    const reserveChars = nextOpenFence ? closeFenceLine(nextOpenFence).length + 1 : 0;
    const reserveLines = nextOpenFence ? 1 : 0;
    const effectiveMaxChars = maxChars - reserveChars;
    const effectiveMaxLines = maxLines - reserveLines;
    const charLimit = effectiveMaxChars > 0 ? effectiveMaxChars : maxChars;
    const lineLimit = effectiveMaxLines > 0 ? effectiveMaxLines : maxLines;
    const prefixLen = current.length > 0 ? current.length + 1 : 0;
    const segmentLimit = Math.max(1, charLimit - prefixLen);
    const segments = splitLongLine(originalLine, segmentLimit, {
      preserveWhitespace: wasInsideFence
    });
    for (let segIndex = 0;segIndex < segments.length; segIndex++) {
      const segment = segments[segIndex];
      const isLineContinuation = segIndex > 0;
      const delimiter = isLineContinuation ? "" : current.length > 0 ? `
` : "";
      const addition = `${delimiter}${segment}`;
      const nextLen = current.length + addition.length;
      const nextLines = currentLines + (isLineContinuation ? 0 : 1);
      const wouldExceedChars = nextLen > charLimit;
      const wouldExceedLines = nextLines > lineLimit;
      if ((wouldExceedChars || wouldExceedLines) && current.length > 0) {
        flush();
      }
      if (current.length > 0) {
        current += addition;
        if (!isLineContinuation) {
          currentLines += 1;
        }
      } else {
        current = segment;
        currentLines = 1;
      }
    }
    openFence = nextOpenFence;
  }
  if (current.length) {
    const payload = closeFenceIfNeeded(current, openFence);
    if (payload.trim().length) {
      chunks.push(payload);
    }
  }
  return rebalanceReasoningItalics(text, chunks);
}
function chunkMarkdownTextByNewline(text, maxChars) {
  const lines = text.split(`
`);
  const chunks = [];
  let current = "";
  for (const line2 of lines) {
    if (current.length + line2.length + 1 > maxChars && current.length > 0) {
      chunks.push(current);
      current = line2;
    } else {
      current = current.length > 0 ? `${current}
${line2}` : line2;
    }
  }
  if (current.length > 0) {
    chunks.push(current);
  }
  return chunks;
}
function chunkDiscordTextWithMode(text, opts = {}) {
  const chunkMode = opts.chunkMode ?? "length";
  if (chunkMode !== "newline") {
    return chunkDiscordText(text, opts);
  }
  const lineChunks = chunkMarkdownTextByNewline(text, Math.max(1, Math.floor(opts.maxChars ?? DEFAULT_MAX_CHARS)));
  const chunks = [];
  for (const line2 of lineChunks) {
    const nested = chunkDiscordText(line2, opts);
    if (!nested.length && line2) {
      chunks.push(line2);
      continue;
    }
    chunks.push(...nested);
  }
  return chunks;
}
function resolveDiscordSystemLocation(params) {
  const { isDirectMessage, isGroupDm, guild, channelName } = params;
  if (isDirectMessage) {
    return "DM";
  }
  if (isGroupDm) {
    return `Group DM #${channelName}`;
  }
  return guild?.name ? `${guild.name} #${channelName}` : `#${channelName}`;
}
function formatDiscordReactionEmoji(emoji) {
  if (emoji.id && emoji.name) {
    return `${emoji.name}:${emoji.id}`;
  }
  return emoji.name ?? "emoji";
}
function formatMessageReactionEmoji(reaction) {
  const emoji = reaction.emoji;
  if (emoji.id && emoji.name) {
    return `<:${emoji.name}:${emoji.id}>`;
  }
  return emoji.name ?? "emoji";
}
function formatDiscordUserMention(userId) {
  return `<@${userId}>`;
}
function formatDiscordChannelMention(channelId) {
  return `<#${channelId}>`;
}
function formatDiscordRoleMention(roleId) {
  return `<@&${roleId}>`;
}
function extractUserIdFromMention(mention) {
  const match = mention.match(/^<@!?(\d+)>$/);
  return match ? match[1] : null;
}
function extractChannelIdFromMention(mention) {
  const match = mention.match(/^<#(\d+)>$/);
  return match ? match[1] : null;
}
function extractRoleIdFromMention(mention) {
  const match = mention.match(/^<@&(\d+)>$/);
  return match ? match[1] : null;
}
function resolveTimestampMs(timestamp) {
  if (!timestamp) {
    return;
  }
  const parsed = Date.parse(timestamp);
  return Number.isNaN(parsed) ? undefined : parsed;
}
function formatDiscordTimestamp(timestamp, format = "f") {
  const unix = Math.floor((typeof timestamp === "number" ? timestamp : timestamp.getTime()) / 1000);
  return `<t:${unix}:${format}>`;
}
function stripDiscordFormatting(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/__(.+?)__/g, "$1").replace(/~~(.+?)~~/g, "$1").replace(/`{3}[\s\S]*?`{3}/g, "").replace(/`(.+?)`/g, "$1").replace(/\|\|(.+?)\|\|/g, "$1").replace(/<@!?\d+>/g, "").replace(/<#\d+>/g, "").replace(/<@&\d+>/g, "").replace(/<a?:\w+:\d+>/g, "").trim();
}
function escapeDiscordMarkdown(text) {
  return text.replace(/([*_`~|\\])/g, "\\$1");
}
function truncateText(text, maxLength, ellipsis = "…") {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - ellipsis.length) + ellipsis;
}
function truncateUtf16Safe(text, maxLength, ellipsis = "…") {
  if (text.length <= maxLength) {
    return text;
  }
  const targetLength = maxLength - ellipsis.length;
  if (targetLength <= 0) {
    return ellipsis.slice(0, maxLength);
  }
  let truncateAt = targetLength;
  const charAtTruncate = text.charCodeAt(truncateAt);
  if (charAtTruncate >= 56320 && charAtTruncate <= 57343) {
    truncateAt--;
  }
  return text.slice(0, truncateAt) + ellipsis;
}
function messageContainsMention(text, userId) {
  const mentionPattern = new RegExp(`<@!?${userId}>`);
  return mentionPattern.test(text);
}
function extractAllUserMentions(text) {
  const matches = text.matchAll(/<@!?(\d+)>/g);
  return Array.from(matches, (m) => m[1]);
}
function extractAllChannelMentions(text) {
  const matches = text.matchAll(/<#(\d+)>/g);
  return Array.from(matches, (m) => m[1]);
}
function extractAllRoleMentions(text) {
  const matches = text.matchAll(/<@&(\d+)>/g);
  return Array.from(matches, (m) => m[1]);
}
function sanitizeThreadName(name) {
  const sanitized = name.replace(/[\n\r]/g, " ").replace(/\s+/g, " ").trim();
  return truncateUtf16Safe(sanitized, 100, "");
}
function buildMessageLink(guildId, channelId, messageId) {
  return `https://discord.com/channels/${guildId}/${channelId}/${messageId}`;
}
function buildChannelLink(guildId, channelId) {
  return `https://discord.com/channels/${guildId}/${channelId}`;
}
function parseMessageLink(url) {
  const match = url.match(/^https?:\/\/(?:www\.)?discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)$/);
  if (!match) {
    return null;
  }
  return {
    guildId: match[1],
    channelId: match[2],
    messageId: match[3]
  };
}
// ../../../node_modules/.bun/discord-api-types@0.37.120/node_modules/discord-api-types/v10.mjs
var import_v10 = __toESM(require_v106(), 1);
var APIApplicationCommandPermissionsConstant = import_v10.default.APIApplicationCommandPermissionsConstant;
var APIVersion = import_v10.default.APIVersion;
var ActivityFlags = import_v10.default.ActivityFlags;
var ActivityPlatform = import_v10.default.ActivityPlatform;
var ActivityType = import_v10.default.ActivityType;
var AllowedMentionsTypes = import_v10.default.AllowedMentionsTypes;
var ApplicationCommandOptionType = import_v10.default.ApplicationCommandOptionType;
var ApplicationCommandPermissionType = import_v10.default.ApplicationCommandPermissionType;
var ApplicationCommandType = import_v10.default.ApplicationCommandType;
var ApplicationFlags = import_v10.default.ApplicationFlags;
var ApplicationIntegrationType = import_v10.default.ApplicationIntegrationType;
var ApplicationRoleConnectionMetadataType = import_v10.default.ApplicationRoleConnectionMetadataType;
var ApplicationWebhookEventStatus = import_v10.default.ApplicationWebhookEventStatus;
var ApplicationWebhookEventType = import_v10.default.ApplicationWebhookEventType;
var ApplicationWebhookType = import_v10.default.ApplicationWebhookType;
var AttachmentFlags = import_v10.default.AttachmentFlags;
var AuditLogEvent2 = import_v10.default.AuditLogEvent;
var AuditLogOptionsType = import_v10.default.AuditLogOptionsType;
var AutoModerationActionType = import_v10.default.AutoModerationActionType;
var AutoModerationRuleEventType = import_v10.default.AutoModerationRuleEventType;
var AutoModerationRuleKeywordPresetType = import_v10.default.AutoModerationRuleKeywordPresetType;
var AutoModerationRuleTriggerType = import_v10.default.AutoModerationRuleTriggerType;
var ButtonStyle = import_v10.default.ButtonStyle;
var CDNRoutes = import_v10.default.CDNRoutes;
var ChannelFlags = import_v10.default.ChannelFlags;
var ChannelType9 = import_v10.default.ChannelType;
var ComponentType = import_v10.default.ComponentType;
var ConnectionService = import_v10.default.ConnectionService;
var ConnectionVisibility = import_v10.default.ConnectionVisibility;
var EmbedType = import_v10.default.EmbedType;
var EntitlementOwnerType = import_v10.default.EntitlementOwnerType;
var EntitlementType = import_v10.default.EntitlementType;
var EntryPointCommandHandlerType = import_v10.default.EntryPointCommandHandlerType;
var FormattingPatterns = import_v10.default.FormattingPatterns;
var ForumLayoutType = import_v10.default.ForumLayoutType;
var GatewayCloseCodes = import_v10.default.GatewayCloseCodes;
var GatewayDispatchEvents = import_v10.default.GatewayDispatchEvents;
var GatewayIntentBits2 = import_v10.default.GatewayIntentBits;
var GatewayOpcodes = import_v10.default.GatewayOpcodes;
var GatewayVersion = import_v10.default.GatewayVersion;
var GuildDefaultMessageNotifications = import_v10.default.GuildDefaultMessageNotifications;
var GuildExplicitContentFilter = import_v10.default.GuildExplicitContentFilter;
var GuildFeature = import_v10.default.GuildFeature;
var GuildHubType = import_v10.default.GuildHubType;
var GuildMFALevel = import_v10.default.GuildMFALevel;
var GuildMemberFlags = import_v10.default.GuildMemberFlags;
var GuildNSFWLevel = import_v10.default.GuildNSFWLevel;
var GuildOnboardingMode = import_v10.default.GuildOnboardingMode;
var GuildOnboardingPromptType = import_v10.default.GuildOnboardingPromptType;
var GuildPremiumTier = import_v10.default.GuildPremiumTier;
var GuildScheduledEventEntityType = import_v10.default.GuildScheduledEventEntityType;
var GuildScheduledEventPrivacyLevel = import_v10.default.GuildScheduledEventPrivacyLevel;
var GuildScheduledEventRecurrenceRuleFrequency = import_v10.default.GuildScheduledEventRecurrenceRuleFrequency;
var GuildScheduledEventRecurrenceRuleMonth = import_v10.default.GuildScheduledEventRecurrenceRuleMonth;
var GuildScheduledEventRecurrenceRuleWeekday = import_v10.default.GuildScheduledEventRecurrenceRuleWeekday;
var GuildScheduledEventStatus = import_v10.default.GuildScheduledEventStatus;
var GuildSystemChannelFlags = import_v10.default.GuildSystemChannelFlags;
var GuildVerificationLevel = import_v10.default.GuildVerificationLevel;
var GuildWidgetStyle = import_v10.default.GuildWidgetStyle;
var ImageFormat = import_v10.default.ImageFormat;
var IntegrationExpireBehavior = import_v10.default.IntegrationExpireBehavior;
var InteractionContextType = import_v10.default.InteractionContextType;
var InteractionResponseType = import_v10.default.InteractionResponseType;
var InteractionType = import_v10.default.InteractionType;
var InviteTargetType = import_v10.default.InviteTargetType;
var InviteType = import_v10.default.InviteType;
var Locale = import_v10.default.Locale;
var MembershipScreeningFieldType = import_v10.default.MembershipScreeningFieldType;
var MessageActivityType = import_v10.default.MessageActivityType;
var MessageFlags = import_v10.default.MessageFlags;
var MessageReferenceType = import_v10.default.MessageReferenceType;
var MessageType = import_v10.default.MessageType;
var OAuth2Routes = import_v10.default.OAuth2Routes;
var OAuth2Scopes = import_v10.default.OAuth2Scopes;
var OverwriteType = import_v10.default.OverwriteType;
var PermissionFlagsBits = import_v10.default.PermissionFlagsBits;
var PollLayoutType = import_v10.default.PollLayoutType;
var PresenceUpdateStatus = import_v10.default.PresenceUpdateStatus;
var RESTJSONErrorCodes = import_v10.default.RESTJSONErrorCodes;
var RPCCloseEventCodes = import_v10.default.RPCCloseEventCodes;
var RPCCommands = import_v10.default.RPCCommands;
var RPCDeviceType = import_v10.default.RPCDeviceType;
var RPCErrorCodes = import_v10.default.RPCErrorCodes;
var RPCEvents = import_v10.default.RPCEvents;
var RPCVersion = import_v10.default.RPCVersion;
var RPCVoiceSettingsModeType = import_v10.default.RPCVoiceSettingsModeType;
var RPCVoiceShortcutKeyComboKeyType = import_v10.default.RPCVoiceShortcutKeyComboKeyType;
var ReactionType = import_v10.default.ReactionType;
var RelationshipType = import_v10.default.RelationshipType;
var RoleFlags = import_v10.default.RoleFlags;
var RouteBases = import_v10.default.RouteBases;
var Routes = import_v10.default.Routes;
var SKUFlags = import_v10.default.SKUFlags;
var SKUType = import_v10.default.SKUType;
var SelectMenuDefaultValueType = import_v10.default.SelectMenuDefaultValueType;
var SortOrderType = import_v10.default.SortOrderType;
var StageInstancePrivacyLevel = import_v10.default.StageInstancePrivacyLevel;
var StickerFormatType = import_v10.default.StickerFormatType;
var StickerPackApplicationId = import_v10.default.StickerPackApplicationId;
var StickerType = import_v10.default.StickerType;
var SubscriptionStatus = import_v10.default.SubscriptionStatus;
var TeamMemberMembershipState = import_v10.default.TeamMemberMembershipState;
var TeamMemberRole = import_v10.default.TeamMemberRole;
var TextInputStyle = import_v10.default.TextInputStyle;
var ThreadAutoArchiveDuration = import_v10.default.ThreadAutoArchiveDuration;
var ThreadMemberFlags = import_v10.default.ThreadMemberFlags;
var UserFlags = import_v10.default.UserFlags;
var UserPremiumType = import_v10.default.UserPremiumType;
var Utils = import_v10.default.Utils;
var VideoQualityMode = import_v10.default.VideoQualityMode;
var VoiceChannelEffectSendAnimationType = import_v10.default.VoiceChannelEffectSendAnimationType;
var VoiceConnectionStates = import_v10.default.VoiceConnectionStates;
var WebhookType = import_v10.default.WebhookType;
var urlSafeCharacters = import_v10.default.urlSafeCharacters;

// native-commands.ts
var COMMAND_ARG_CUSTOM_ID_KEY = "cmdarg";
function buildDiscordCommandOptions(args) {
  if (!args || args.length === 0) {
    return;
  }
  return args.map((arg) => {
    const required = arg.required ?? false;
    if (arg.type === "number") {
      return {
        name: arg.name,
        description: arg.description,
        type: ApplicationCommandOptionType.Number,
        required
      };
    }
    if (arg.type === "boolean") {
      return {
        name: arg.name,
        description: arg.description,
        type: ApplicationCommandOptionType.Boolean,
        required
      };
    }
    const choices = arg.choices && arg.choices.length > 0 && arg.choices.length <= 25 ? arg.choices.map((choice) => ({
      name: choice.label,
      value: choice.value
    })) : undefined;
    return {
      name: arg.name,
      description: arg.description,
      type: ApplicationCommandOptionType.String,
      required,
      choices
    };
  });
}
function buildDiscordSlashCommand(spec21) {
  const options = buildDiscordCommandOptions(spec21.args);
  const commandOptions = options?.map((opt) => ({
    name: opt.name,
    description: opt.description,
    type: opt.type,
    required: opt.required,
    choices: opt.choices
  })) ?? (spec21.acceptsArgs ? [
    {
      name: "input",
      description: "Command input",
      type: ApplicationCommandOptionType.String,
      required: false
    }
  ] : undefined);
  return {
    name: spec21.name,
    description: spec21.description,
    options: commandOptions
  };
}
function encodeCommandArgValue(value) {
  return encodeURIComponent(value);
}
function decodeCommandArgValue(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
function buildCommandArgCustomId(params) {
  return [
    `${COMMAND_ARG_CUSTOM_ID_KEY}:command=${encodeCommandArgValue(params.command)}`,
    `arg=${encodeCommandArgValue(params.arg)}`,
    `value=${encodeCommandArgValue(params.value)}`,
    `user=${encodeCommandArgValue(params.userId)}`
  ].join(";");
}
function parseCommandArgCustomId(customId) {
  if (!customId.startsWith(COMMAND_ARG_CUSTOM_ID_KEY)) {
    return null;
  }
  const parts = customId.split(";");
  const data = {};
  for (const part of parts) {
    const [key, value] = part.split("=");
    if (key && value) {
      const cleanKey = key.replace(`${COMMAND_ARG_CUSTOM_ID_KEY}:`, "");
      data[cleanKey] = decodeCommandArgValue(value);
    }
  }
  if (!data.command || !data.arg || !data.value || !data.user) {
    return null;
  }
  return {
    command: data.command,
    arg: data.arg,
    value: data.value,
    userId: data.user
  };
}
function chunkArray(items, size) {
  if (size <= 0) {
    return [items];
  }
  const rows = [];
  for (let i = 0;i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}
function buildCommandArgMenu(params) {
  const {
    commandName,
    arg,
    choices,
    userId,
    title,
    buttonsPerRow = 4
  } = params;
  const rows = chunkArray(choices.slice(0, 20), buttonsPerRow).map((rowChoices) => ({
    buttons: rowChoices.map((choice) => ({
      label: choice.label.slice(0, 80),
      customId: buildCommandArgCustomId({
        command: commandName,
        arg: arg.name,
        value: choice.value,
        userId
      }),
      style: ButtonStyle.Secondary
    }))
  }));
  const content = title ?? `Choose ${arg.description || arg.name} for /${commandName}.`;
  return { content, rows };
}
function isUnknownInteractionError(error) {
  if (!error || typeof error !== "object") {
    return false;
  }
  const err = error;
  if (err.code === 10062 || err.rawError?.code === 10062) {
    return true;
  }
  if (err.status === 404 && /Unknown interaction/i.test(err.message ?? "")) {
    return true;
  }
  if (/Unknown interaction/i.test(err.rawError?.message ?? "")) {
    return true;
  }
  return false;
}
async function safeInteractionCall(fn, onExpired) {
  try {
    return await fn();
  } catch (error) {
    if (isUnknownInteractionError(error)) {
      onExpired?.();
      return null;
    }
    throw error;
  }
}
function createCommandArgs(argName, value) {
  return {
    values: { [argName]: value }
  };
}
function serializeCommandArgs(args) {
  if (!args?.values) {
    return "";
  }
  return Object.entries(args.values).map(([key, value]) => `${key}=${String(value)}`).join(" ");
}
function buildCommandText(commandName, args) {
  const argsText = serializeCommandArgs(args);
  return argsText ? `/${commandName} ${argsText}` : `/${commandName}`;
}

// index.ts
var discordPlugin = {
  name: "discord",
  description: "Discord service plugin for integration with Discord servers and channels",
  services: [DiscordService],
  actions: [
    chatWithAttachments_default,
    downloadMedia,
    joinChannel_default,
    leaveChannel_default,
    listChannels_default,
    readChannel_default,
    sendDM_default,
    sendMessage_default,
    summarize,
    transcribeMedia,
    searchMessages_default,
    createPoll_default,
    getUserInfo_default,
    reactToMessage_default,
    pinMessage_default,
    unpinMessage_default,
    serverInfo_default,
    editMessage_default,
    deleteMessage_default
  ],
  providers: [channelStateProvider, voiceStateProvider, guildInfoProvider],
  tests: [new DiscordTestSuite],
  init: async (_config, runtime) => {
    const token = runtime.getSetting("DISCORD_API_TOKEN");
    const applicationId = runtime.getSetting("DISCORD_APPLICATION_ID");
    const voiceChannelId = runtime.getSetting("DISCORD_VOICE_CHANNEL_ID");
    const channelIds = runtime.getSetting("CHANNEL_IDS");
    const listenChannelIds = runtime.getSetting("DISCORD_LISTEN_CHANNEL_IDS");
    const ignoreBotMessages = runtime.getSetting("DISCORD_SHOULD_IGNORE_BOT_MESSAGES");
    const ignoreDirectMessages = runtime.getSetting("DISCORD_SHOULD_IGNORE_DIRECT_MESSAGES");
    const respondOnlyToMentions = runtime.getSetting("DISCORD_SHOULD_RESPOND_ONLY_TO_MENTIONS");
    printBanner({
      pluginName: "plugin-discord",
      description: "Discord bot integration for servers and channels",
      applicationId: applicationId || undefined,
      discordPermissions: applicationId ? getPermissionValues() : undefined,
      settings: [
        {
          name: "DISCORD_API_TOKEN",
          value: token,
          sensitive: true,
          required: true
        },
        {
          name: "DISCORD_APPLICATION_ID",
          value: applicationId
        },
        {
          name: "DISCORD_VOICE_CHANNEL_ID",
          value: voiceChannelId
        },
        {
          name: "CHANNEL_IDS",
          value: channelIds
        },
        {
          name: "DISCORD_LISTEN_CHANNEL_IDS",
          value: listenChannelIds
        },
        {
          name: "DISCORD_SHOULD_IGNORE_BOT_MESSAGES",
          value: ignoreBotMessages,
          defaultValue: "false"
        },
        {
          name: "DISCORD_SHOULD_IGNORE_DIRECT_MESSAGES",
          value: ignoreDirectMessages,
          defaultValue: "false"
        },
        {
          name: "DISCORD_SHOULD_RESPOND_ONLY_TO_MENTIONS",
          value: respondOnlyToMentions,
          defaultValue: "false"
        }
      ],
      runtime
    });
    if (!token || token.trim() === "") {
      logger5.warn("Discord API Token not provided - Discord plugin is loaded but will not be functional");
      logger5.warn("To enable Discord functionality, please provide DISCORD_API_TOKEN in your .eliza/.env file");
    }
  }
};
var typescript_default = discordPlugin;
export {
  validateMessageAllowed,
  truncateUtf16Safe,
  truncateText,
  stripDiscordFormatting,
  shouldEmitDiscordReactionNotification,
  serializeCommandArgs,
  sanitizeThreadName,
  safeInteractionCall,
  resolveTimestampMs,
  resolveGroupDmAllow,
  resolveDiscordUserAllowed,
  resolveDiscordToken,
  resolveDiscordSystemLocation,
  resolveDiscordShouldRequireMention,
  resolveDiscordGuildEntry,
  resolveDiscordCommandAuthorized,
  resolveDiscordChannelConfigWithFallback,
  resolveDiscordChannelConfig,
  resolveDiscordAllowListMatch,
  resolveDiscordAccount,
  resolveDefaultDiscordAccountId,
  parseMessageLink,
  parseCommandArgCustomId,
  normalizeDiscordToken,
  normalizeDiscordSlug,
  normalizeDiscordAllowList,
  normalizeAccountId,
  messageContainsMention,
  listEnabledDiscordAccounts,
  listDiscordAccountIds,
  isUnknownInteractionError,
  isMultiAccountEnabled,
  isElevatedRole,
  isDiscordGroupAllowedByPolicy,
  isDiscordAutoThreadOwnedByBot,
  hasElevatedPermissions,
  getPermissionValues,
  generateInviteUrl,
  generateAllInviteUrls,
  formatMessageReactionEmoji,
  formatDiscordUserTag,
  formatDiscordUserMention,
  formatDiscordTimestamp,
  formatDiscordRoleMention,
  formatDiscordReactionEmoji,
  formatDiscordChannelMention,
  extractUserIdFromMention,
  extractRoleIdFromMention,
  extractChannelIdFromMention,
  extractAllUserMentions,
  extractAllRoleMentions,
  extractAllChannelMentions,
  escapeDiscordMarkdown,
  encodeCommandArgValue,
  typescript_default as default,
  decodeCommandArgValue,
  createCommandArgs,
  chunkDiscordTextWithMode,
  chunkDiscordText,
  buildMessageLink,
  buildDiscordSlashCommand,
  buildDiscordCommandOptions,
  buildCommandText,
  buildCommandArgMenu,
  buildCommandArgCustomId,
  buildChannelLink,
  allowListMatches,
  ELEVATED_PERMISSIONS,
  DiscordService,
  DiscordPermissionTiers,
  DiscordEventTypes,
  DISCORD_SERVICE_NAME,
  DEFAULT_ACCOUNT_ID,
  COMMAND_ARG_CUSTOM_ID_KEY
};

//# debugId=F97BA315816B379B64756E2164756E21
//# sourceMappingURL=index.js.map
